import React from "react";

export default function Messages(props) {
    const renderMessages = (messages) => {
        return messages.map(message => (
            <div className='messages'>{`${message.user}: ${message.message}`}</div>
        ))
    }
    return (
        <div id='messages' className='chat-components'>
                {renderMessages(props.messages)}
        </div>
    )
}
