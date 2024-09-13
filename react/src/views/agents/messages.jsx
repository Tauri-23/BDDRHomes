import * as Icon from 'react-bootstrap-icons';
import '../../assets/css/messages.css'
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { auth, db } from '../../firebase-cofig';
import { useEffect, useState } from 'react';
import { getTimeAgo, isEmptyOrSpaces } from '../../assets/js/utils';
import { useStateContext } from '../../contexts/ContextProvider';
import { fetchAgentInfos } from '../../Services/AdminAgentService';
import { fetchClientInfos } from '../../Services/ClientsServices';
import { fetchSpecificPublishedPropertyFull } from '../../Services/GeneralPropertiesService';

export default function AgentMessages () {
    const [message, setMessage] = useState("");
    const [messagesFromDb, setMessagesFromDb] = useState(null);
    const [conversationDb, setConversationDb] = useState(null);
    // const [typesMessage]
    const [selectedConvo, setSelectedConvo] = useState(null);
    const {user} = useStateContext();

    const messagesRef = collection(db, "messages");
    const conversationref = collection(db, "conversation");


    /*
    | Debugging
    */
    useEffect(() => {
        console.log(conversationDb);
    }, [conversationDb])


    /* 
    | Retrieve convos
    */
    useEffect(() => {
        const queryConversations = query(
            conversationref,
            where("agent.id", "==", user.id),
            orderBy("updatedAt", "desc")
        );
    
        const unsubscribe = onSnapshot(queryConversations, async (snapshot) => {
            const conversations = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            setConversationDb(conversations);
        });
    
        return () => unsubscribe(); // Clean up the snapshot listener
    }, [user.id]);


    /* 
    | set Selected Conversation (In the Index Zero Rendered)
    */
    useEffect(() => {
        if (conversationDb?.length > 0) {
            setSelectedConvo(conversationDb[0].id);
        }
    }, [conversationDb]);


    /* 
    | Retrieve Chats
    */
    useEffect(() => {
        if (!selectedConvo) return;
    
        const queryMessages = query(
            messagesRef,
            where("conversation", "==", selectedConvo),
            orderBy("createdAt", "desc")
        );
    
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            const messages = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
    
            setMessagesFromDb(messages);
        });
    
        return () => unsubscribe(); // Clean up the snapshot listener
    }, [selectedConvo, user.id]);





    /* 
    | Handlers
    */
    const handleSendMessage = async(messageParam) => {
        if (isEmptyOrSpaces(messageParam) || isEmptyOrSpaces(selectedConvo)) {
            return;
        }

        setMessage(""); // Clear the message input
    
        await addDoc(messagesRef, {
            text: messageParam,
            createdAt: serverTimestamp(),
            conversation: selectedConvo,
            sender: "agent",
            updatedAt: serverTimestamp()
        });
        const convoRef = doc(db, "conversation", selectedConvo);
        await updateDoc(convoRef, {
            finalText: {
                text: messageParam,
                sender: "agent"
            },
            updatedAt: serverTimestamp()
        })
    }





    /* 
    | Render UI
    */
    return (
        <>
            <div className="d-flex">
                {/* Messages List */}
                <div className="messages-lists">
                    {/* Messages List Header */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-l3 fw-bold">Messages</div>
                        <div className="d-flex gap3">
                            <div className="circular-btn-1">
                                <Icon.Search className='text-l3'/>                            
                            </div>       
                            <div className="circular-btn-1">
                                <Icon.Sliders className='text-l3'/>                          
                            </div>  
                        </div>                    
                    </div>

                    {/* Conversation List Body */}
                    <div className='mar-top-l1 d-flex flex-direction-y'>
                        {conversationDb
                        && conversationDb.map((conversation, index) => (
                            <div 
                            key={conversation.id} 
                            className={`conversation-component ${selectedConvo === conversation.id ? 'selected' : ''}`}
                            onClick={() => setSelectedConvo(conversation.id)}
                            >
                                <div className="conversation-component-pfp">
                                    <img src={`/src/assets/media/properties/${conversation.property.picture}`}/>
                                </div>

                                <div className="d-flex flex-direction-y gap4">
                                    <div className="conversation-component-title">
                                        {conversation.property.name} {conversation.property.model} {conversation.property.city} {conversation.property.province}
                                    </div>
                                    <div className="text-m2 color-grey1 d-flex gap3">
                                        <div className='conversation-component-text'>{conversation.finalText.sender == "agent" ? "You: " : ""}{conversation.finalText.text}</div>
                                        <div>{conversation.updatedAt ? getTimeAgo(conversation.updatedAt) : getTimeAgo(serverTimestamp())}</div>
                                    </div>
                                </div>
                                
                            </div>
                        ))}

                        {conversationDb?.length < 1 && (
                            <div className="d-flex w-100 align-items-center flex-direction-y gap3">
                                <img src="/src/assets/media/icons/chat1.svg" alt="" className='icon1' />
                                <div className="text-m2 fw-bold">You don't have any messages yet.</div>
                                <div className="text-m3">When you receive a new message, it will appear here.</div>
                            </div>
                        )}
                        
                    </div>
                </div>

                {/* Messages */}
                <div className="messages-content">
                    {/* Header */}
                    {conversationDb?.length > 0 && (
                        <div className="messages-content-header">
                            <div className="d-flex align-items-center gap3">
                                <div className="messages-content-header-pfp">
                                    {conversationDb?.length > 0 && conversationDb.map((conversation, index) => (
                                        conversation.id === selectedConvo 
                                        && (<img key={conversation.id} src={`/src/assets/media/properties/${conversation.property.picture}`} alt="" />)
                                    ))}
                                </div>
                                
                                {conversationDb?.length > 0 && conversationDb.map((conversation, index) => (
                                    conversation.id === selectedConvo 
                                    && (
                                        <div key={conversation.id} className="d-flex flex-direction-y gap4">
                                            <div className="messages-content-header-title">
                                                {conversation.property.name} {conversation.property.model} {conversation.property.city} {conversation.property.province}
                                            </div>
                                            <div className="messages-content-header-text">Client: {conversation.client.firstname} {conversation.client.lastname}</div>
                                        </div>
                                        )
                                ))}
                            </div>        
                        </div>    
                    )} 
                    

                    {/* Messages Container */}
                    <div className="messages-container">
                        {messagesFromDb && messagesFromDb.map(message => (
                            <div 
                            key={message.id} 
                            className={`message-component ${message.sender === "agent" ? 'self': ''}`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>

                    {/* Message Controllers */}
                    {conversationDb?.length > 0 && (
                        <div className="messages-controls">
                            <textarea className="edit-text-1 w-100 messages-input" onInput={(e) => setMessage(e.target.value)} placeholder='Aa' value={message || ''}></textarea>
                            <button onClick={() => handleSendMessage(message)} className={`primary-btn-black1 d-flex gap3 align-items-center ${isEmptyOrSpaces(message) ? 'd-none' : ''}`}><Icon.Send/> Send </button>
                            <div className={`text-l1 cursor-pointer ${isEmptyOrSpaces(message) ? '' : 'd-none'}`} onClick={() => handleSendMessage("👍🏼")}>👍🏼</div>
                        </div>
                    )}
                </div>

                {/* Message Info */}
            </div> 
        </>
    );
};