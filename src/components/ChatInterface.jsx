import React, { useEffect, useState, useRef } from 'react';
import { auth, db } from '../firebaseConfig';
import ChatHeader from './ChatHeader';
import LogoutButton from './LogoutButton';
import ExitRoomButton from './ExitRoomButton';
import { addDoc, collection, serverTimestamp, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import Message from './Message';

const ChatInterface = ({ room, setRoom, setIsUser }) => {
    const user = auth.currentUser;
    const messageRef = collection(db, "Messages");
    const [msg, setMsg] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null); // יצירת ref עבור ההודעה האחרונה

    useEffect(() => {
        const queryMessages = query(messageRef, where('room', '==', room), orderBy('createdAt'));
        const getData = onSnapshot(queryMessages, (data) => {
            let list = [];
            data.forEach((item) => {
                list.push({ ...item.data(), id: item.id });
            });
            setMessages(list);
        });
        return () => getData();
    }, [room]); // רק room משתנה, לא messages

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); // גלילה בכל עדכון הודעה

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (msg === '') return;
        await addDoc(messageRef, {
            text: msg,
            user: user.displayName,
            room: room,
            createdAt: serverTimestamp()
        });

        setMsg('');
    };

    return (
        <div style={{ width: '100%' }}>
            <ChatHeader room={room} user={user} />
            <div className='messages'>
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef}></div> {/* אלמנט לסוף הגלילה */}
            </div>
            <form onSubmit={handleSendMessage} className='inputForm'>
                <input placeholder='What you want to say?...'
                    type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
                <button type='submit'>Send</button>
            </form>
            <div className='buttons'>
                <LogoutButton setRoom={setRoom} setIsUser={setIsUser} />
                <ExitRoomButton setRoom={setRoom} />
            </div>
        </div>
    );
};

export default ChatInterface;
