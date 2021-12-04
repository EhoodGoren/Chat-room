import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
    const navigate = useNavigate();
    const inputEl = useRef(null);
    const submitUsername = async () => {
        const username = inputEl.current.value;
        if(!username) return
        try {
            await axios.post('/login', {user: inputEl.current.value});
            props.setUser(username);
            navigate('/chat');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div id='login-form'>
            <input ref={inputEl} id='username' placeholder='Enter username'></input>
            <button id='submit-username' onClick={submitUsername}>Submit</button>
        </div>
    )
}
