import React, { useRef } from 'react';
import axios from 'axios';
import './Chat.css';
import Messages from './chat-screen/Messages';
import Participants from './chat-screen/Participants';


export default function Chat(props) {

    const messageInput = useRef(null);
    const sendMessage = async () => {
        await axios.post('/chat/message', {user: props.user, message: messageInput.current.value});
    }
    return (
        <div id='chat-screen'>
            <Messages user={props.user} />
            <Participants />
            <div id='message-write' className='chat-components'>
                <input ref={messageInput} id='user-message' placeholder='Write your message here'></input>
                <button id='send-message' onClick={sendMessage} >Send</button>
            </div>
        </div>
    )
}
