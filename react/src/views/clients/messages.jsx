import * as Icon from 'react-bootstrap-icons';
import '../../assets/css/messages.css'
import { addDoc, collection, doc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { auth, db } from '../../firebase-cofig';
import { useEffect, useState } from 'react';
import { getTimeAgo, isEmptyOrSpaces } from '../../assets/js/utils';
import { useStateContext } from '../../contexts/ContextProvider';
import { fetchAgentInfos, fetchAllAgents } from '../../Services/AdminAgentService';
import { fetchSpecificPublishedPropertyFull } from '../../Services/GeneralPropertiesService';

export default function ClientMessages () {
    const [message, setMessage] = useState(null);
    const [messagesFromDb, setMessagesFromDb] = useState(null);
    const [conversationDb, setConversationDb] = useState(null);
    const [propertiesInConvos, setPropertiesInConvos] = useState(null);
    const [selectedConvo, setSelectedConvo] = useState(null);
    const {user} = useStateContext();

    const messagesRef = collection(db, "messages");
    const conversationref = collection(db, "conversation");


    /*
    | Debugging
    */
    useEffect(() => {
        console.log(propertiesInConvos);
    }, [propertiesInConvos])


    /* 
    | Retrieve convos
    */
    useEffect(() => {
        const queryConversations = query(
            conversationref,
            where("client", "==", user.id),
            orderBy("updatedAt", "desc")
        );
    
        const unsubscribe = onSnapshot(queryConversations, async (snapshot) => {
            const conversations = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
    
            // Fetch property info for each conversation
            const propertyPromises = conversations.map(convo => fetchSpecificPublishedPropertyFull(convo.property));
            const propertyData = await Promise.all(propertyPromises);

            const conversationsWithData = conversations.map((convo, index) => ({
                ...convo,
                property: propertyData[index]
            }));
    
            //setPropertiesInConvos(propertyData);
            setConversationDb(conversationsWithData);
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
            orderBy("createdAt", "asc")
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
    | Debug
    */
    useEffect(() => {
        console.log(conversationDb);
    }, [conversationDb])





    /* 
    | Handlers
    */
    const handleSendMessage = async() => {
        if (isEmptyOrSpaces(message) || isEmptyOrSpaces(selectedConvo)) {
            return;
        }
    
        await addDoc(messagesRef, {
            text: message,
            createdAt: serverTimestamp(),
            conversation: selectedConvo,
            sender: user.id,
            updatedAt: serverTimestamp()
        });
        const convoRef = doc(db, "conversation", selectedConvo);
        await updateDoc(convoRef, {
            finalText: {
                text: message,
                sender: user.id
            },
            updatedAt: serverTimestamp()
        })
    
        setMessage(""); // Clear the message input
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
                                    <img src={`/src/assets/media/properties/${conversation.property.photos[0].filename}`}/>
                                </div>

                                <div className="d-flex flex-direction-y gap4">
                                    <div className="conversation-component-title">
                                        {conversation.property.project_name} {conversation.property.project_model} {conversation.property.city} {conversation.property.province}
                                    </div>
                                    <div className="text-m2 color-grey1 d-flex gap3">
                                        <div className='conversation-component-text'>{conversation.finalText.sender == user.id ? "You: " : ""}{conversation.finalText.text}</div>
                                        {/* <div>{getTimeAgo(conversation.updatedAt)}</div> */}
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
                    <div className="messages-content-header">
                        <div className="d-flex align-items-center gap3">
                            <div className="messages-content-header-pfp">
                                {conversationDb?.length > 0 && conversationDb.map((conversation, index) => (
                                    conversation.id === selectedConvo 
                                    && (<img key={conversation.id} src={`/src/assets/media/properties/${conversation.property.photos[0].filename}`} alt="" />)
                                ))}
                            </div>
                            <div className="d-flex flex-direction-y gap4">
                                <div className="messages-content-header-title">
                                    {conversationDb?.length > 0 && conversationDb.map((conversation, index) => (
                                        conversation.id === selectedConvo 
                                        && (`${conversation.property.project_name} ${conversation.property.project_model} ${conversation.property.city} ${conversation.property.province}`)
                                    ))}
                                </div>
                                <div className="messages-content-header-text">Active Now</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="messages-container">
                        {messagesFromDb && messagesFromDb.map(message => (
                            <div 
                            key={message.id} 
                            className={`message-component ${message.sender === user.id ? 'self': ''}`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="messages-controls">
                        <input type="text" className="edit-text-1 w-100" onInput={(e) => setMessage(e.target.value)} placeholder='Type a message...' value={message || ''}/>
                        <button onClick={handleSendMessage} className='primary-btn-black1 d-flex gap3 align-items-center'><Icon.Send/> Send </button>
                    </div>
                </div>

                {/* Message Info */}
            </div> 
        </>
    );
};