import React, { useState } from "react";

const source = new EventSource('http://localhost:8080/chat/participants');

export default function Participants(props) {
    const [participants, setParticipants] = useState([]);
    source.onmessage = (event) => {
        setParticipants(JSON.parse(event.data));
    }
    return(
        <div id='participants' className='chat-components'>
            Participants: {participants.length}
            {participants.map(participant => (
                <div>{participant}</div>
            ))}
        </div>
    )
}
