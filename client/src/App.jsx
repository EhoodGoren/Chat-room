import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Chat from './Chat';

export default function App() {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login setUser={setUser}/>} />
                <Route path='/chat' element={<Chat user={user} />} />
            </Routes>
        </BrowserRouter>
    )
}
