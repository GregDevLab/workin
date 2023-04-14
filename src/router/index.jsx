import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from '../pages/Feed/Feed'
import Jobs from '../pages/Jobs/Jobs'
import Messaging from '../pages/Messaging/Messaging'
import NetWork from '../pages/NetWork/NetWork'
import Notifications from '../pages/Notifications/Notifications'
import Error from '../pages/Error/Error'
import Navigation from '../components/Navigation/Navigation'

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/emplois" element={<Jobs />} />
                <Route path="/messagerie" element={<Messaging />} />
                <Route path="/reseau" element={<NetWork />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter