import React from 'react';
import './Chat.css';

export default function Chat(props) {
    return (
        <div id='chat-screen'>
            <div id='messages' className='chat-components'>
                <input id='user-message'></input>
                <button id='send-message'>Send</button>
            </div>
            <div id='participants' className='chat-components'></div>
            <div id='message-write' className='chat-components'></div>
        </div>
    )
}
