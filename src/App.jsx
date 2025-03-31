// src/App.jsx

import Navbar from "./components/Navbar/Navbar.jsx";
import MailboxList from "./components/MailboxList/MailboxList.jsx";
// importing but not using quite yet
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
// importing but not using quite yet
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";

import { Route, Routes } from 'react-router';
import { useState } from 'react';

const App = () => {
    const [mailboxes, setMailboxes] = useState([]);

    return (
        <>
            <Navbar />

            <Routes>
                <Route 
                    path='/'
                    element={ <main><h1>Post Office</h1></main> }
                />
                
                <Route
                    path='/mailboxes'
                    element={ < MailboxList /> }
                />

                <Route 
                    path='/new-mailbox'
                    element={ <MailboxForm />}
                />

                <Route
                    path='/mailboxes/:mailboxId'
                    element={<MailboxDetails />}
                />

            </Routes>

            <MailboxList />
        </>
    );
};

export default App;
