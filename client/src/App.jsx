import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Chat from './Chat';

export default function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
        </BrowserRouter>
    )
}
