import React, { useRef } from 'react';

export default function Login(props) {
    const inputEl = useRef(null);
    const submitUsername = () => {
        console.log(inputEl.current.value);
    }
    return (
        <div id='login-form'>
            <input ref={inputEl} id='username' placeholder='Enter username'></input>
            <button id='submit-username' onClick={submitUsername}>Submit</button>
        </div>
    )
}
