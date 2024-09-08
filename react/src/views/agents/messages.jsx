import * as Icon from 'react-bootstrap-icons';
import '../../assets/css/messages.css'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { auth, db } from '../../firebase-cofig';
import { useEffect, useState } from 'react';
import { isEmptyOrSpaces } from '../../assets/js/utils';
import { useStateContext } from '../../contexts/ContextProvider';
import { fetchAgentInfos } from '../../Services/AdminAgentService';
import { fetchClientInfos } from '../../Services/ClientsServices';

export default function AgentMessages () {
    const [message, setMessage] = useState(null);
    const [messagesFromDb, setMessagesFromDb] = useState(null);
    const [conversationDb, setConversationDb] = useState(null);
    const [clientsInConvos, setClientsInConvos] = useState(null);
    const [selectedConvo, setSelectedConvo] = useState(null);
    const {user} = useStateContext();

    const messagesRef = collection(db, "messages");
    const conversationref = collection(db, "conversation");

    /* 
    | Retrieve convos
    */
    useEffect(() => {
        const queryConversations = query(
            conversationref,
            where("agent", "==", user.id)
        );
    
        const unsubscribe = onSnapshot(queryConversations, async (snapshot) => {
            const conversations = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
    
            // Fetch agent info for each conversation
            const agentPromises = conversations.map(convo => fetchClientInfos(convo.client));
            const clientData = await Promise.all(agentPromises);
    
            setClientsInConvos(clientData);
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
        console.log(messagesFromDb);
    }, [messagesFromDb])





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
            sender: user.id
        });
    
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

                    {/* Messages List Body */}
                    <div className='mar-top-l1 d-flex flex-direction-y gap3'>
                        {conversationDb?.length > 0 && clientsInConvos
                        ? conversationDb.map((conversation, index) => (
                            <div 
                            key={conversation.id} 
                            className={`conversation-component ${selectedConvo === conversation.id ? 'selected' : ''}`}
                            onClick={() => setSelectedConvo(conversation.id)}
                            >
                                <div className="conversation-component-pfp"></div>
                                <div className="text-l3">
                                    {clientsInConvos[index].firstname} {clientsInConvos[index].lastname}
                                </div>
                            </div>
                        ))
                        :(
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