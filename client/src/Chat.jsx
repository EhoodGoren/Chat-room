import React, { useRef, useState } from 'react';
import axios from 'axios';
import './Chat.css';
import Messages from './chat-screen/Messages';

const source = new EventSource('http://localhost:8080/chat');

export default function Chat(props) {
    const [messages, setMessages] = useState([]);

    source.onmessage = (event) => {
        setMessages(JSON.parse(event.data));
    }

    const messageInput = useRef(null);
    const sendMessage = async () => {
        await axios.post('/chat/message', {user: props.user, message: messageInput.current.value});
    }
    return (
        <div id='chat-screen'>
            <Messages messages={messages} user={props.user} />
            <div id='participants' className='chat-components'></div>
            <div id='message-write' className='chat-components'>
                <input ref={messageInput} id='user-message' placeholder='Write your message here'></input>
                <button id='send-message' onClick={sendMessage} >Send</button>
            </div>
        </div>
    )
}
