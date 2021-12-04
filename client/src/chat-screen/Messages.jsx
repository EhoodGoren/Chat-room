import React, { useState } from "react";

const source = new EventSource('http://localhost:8080/chat');

export default function Messages(props) {
    const [messages, setMessages] = useState([]);

    source.onmessage = (event) => {
        setMessages(JSON.parse(event.data));
    }
    return (
        <div id='messages' className='chat-components'>
                {messages.map((message, index) => (
                    <div key={index} className='messages'>{`${message.user}: ${message.message}`}</div>
                ))}
        </div>
    )
}
