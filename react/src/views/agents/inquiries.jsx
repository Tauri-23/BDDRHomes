import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase-cofig";
import { useEffect, useState } from "react";
import { fetchSpecificPublishedPropertyFull } from "../../Services/GeneralPropertiesService";
import "../../assets/css/inquiry.css";
import { fetchClientInfos } from "../../Services/ClientsServices";
import * as Icon from "react-bootstrap-icons";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

export default function AgentInquiries () {
    const navigate = useNavigate();
    const {user} = useStateContext();

    const [conversationDb, setConversationDb] = useState(null);

    const conversationref = collection(db, "conversation");
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryConversations = query(
            conversationref,
            where("agent", "==", null)
        );

        const unsubscribe = onSnapshot(queryConversations, async(snapshot) => {
            const conversations = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));

            // Fetch property info for each conversation
            const propertyPromises = conversations.map(convo => fetchSpecificPublishedPropertyFull(convo.property));
            const propertyData = await Promise.all(propertyPromises);

            // Fetch Client info for each conversation
            const clientPromises = conversations.map(convo => fetchClientInfos(convo.client));
            const clientData = await Promise.all(clientPromises);

            const conversationsWithData = conversations.map((convo, index) => ({
                ...convo,
                property: propertyData[index],
                client: clientData[index]
            }));

            setConversationDb(conversationsWithData);
        });

        return () => unsubscribe();
    }, []);


    /*
    | Debugging
    */
    // useEffect(() => {
    //     console.log(conversationDb)
    // }, [conversationDb]);



    // Handlers
    const handleAcceptInquiry = async(convoId, propertyFullName, propertyFullLocation) => {
        const responseMessage = `Hello, This is ${user.firstname} ${user.lastname}, 
            I'm happy to assist you for this property ${propertyFullName} located at ${propertyFullLocation}.`;
        
        const convoRef = doc(db, "conversation", convoId);
        await updateDoc(convoRef, {
            agent: user.id,
            finalText: {
                text: responseMessage,
                sender: "agent"
            },
            updatedAt: serverTimestamp()
        });
        await addDoc(messagesRef, {
            text: responseMessage,
            createdAt: serverTimestamp(),
            conversation: convoId,
            sender: "agent",
            updatedAt: serverTimestamp()
        });

        navigate('/BDDRAgent/Messages');
    }


    return(
        <div className="content2">
            <div className="text-l1 fw-bold">Inquiries</div>
            <div className="hr-line1 mar-y-1"></div>

            {conversationDb?.length < 1 && (
                <div className="text-m1">There are no property inquiries yet</div>
            )}
            
            <table className="inquiries-table">
                {conversationDb?.length > 0 && (
                    <thead className="inquiries-table-thead">
                        <tr>
                            <th>Property</th>
                            <th>Client</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                )}

                {!conversationDb && (
                    <thead >
                        <tr className="w-100 d-flex justify-content-between">
                            <th className="w-25 text-skeleton-m"></th>
                            <th className="w-25 text-skeleton-m"></th>
                            <th className="w-25 text-skeleton-m"></th>
                        </tr>
                    </thead>
                )}
                
                <tbody className="inquiry-table-tbody">
                    {conversationDb?.length > 0 && conversationDb.map(convo => (
                        <tr key={convo.id} className="inquiry-box">
                            <td className="d-flex gap3">
                                <div className="inquiry-box-prop-pic">
                                    <img src={`/src/assets/media/properties/${convo.property.photos[0].filename}`}/>
                                </div>
                                <div className="d-flex flex-direction-y gap4">
                                    <div className="text-l3">{convo.property.project_name} {convo.property.project_model}</div>
                                    <div className="d-flex gap4 align-items-center">
                                        <Icon.GeoAlt/>
                                        <div className="text-m2">{convo.property.city} {convo.property.province}</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="d-flex gap3 align-items-center">
                                    <div className="inquiry-box-client-pfp">
                                        {convo.client.pfp
                                        ? (<img src={`/src/assets/media/clients/pfp/${convo.client.pfp}`}/>)
                                        : (<div>{convo.client.firstname[0]}</div>)}
                                    </div>
                                    <div className="text-m2">{convo.client.firstname}</div>
                                </div>                                
                            </td>

                            <td>
                                <div className="d-flex justify-content-start align-items-center">
                                    <button onClick={() => handleAcceptInquiry(convo.id, `${convo.property.project_name} ${convo.property.project_model}`, `${convo.property.city} ${convo.property.province}`)} className="primary-btn-black1 d-flex align-items-center gap4"><Icon.Check className="text-l1"/>Accept</button>
                                </div>                        
                            </td>
                                
                        </tr>
                    ))}
                </tbody>
                
            </table>
            
        </div>
    );
}