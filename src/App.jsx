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

    // scaffolding for function that will accept form data for a new mailbox and update setMailboxes state accordingly 
    const addBox = (newMailboxData) => {
        // creating object to hold newMailbox data
        const newMailbox = {
            // spread operator to add all newMailboxData to the new object; also adds a new property _id to the object which adds 1 to the current length of the mailboxes array
            ...newMailboxData, _id: mailboxes.length + 1
        };
        setMailboxes([...mailboxes, newMailbox]);
    };

    return (
        <>
            <Navbar />

            <Routes>
                <Route
                    path='/'
                    element={<main><h1>Post Office</h1></main>}
                />

                <Route
                    path='/mailboxes'
                    element={<MailboxList 
                        mailboxes={mailboxes} 
                    />}
                />

                <Route
                    path='/new-mailbox'
                    element={<MailboxForm addBox={addBox}/>}
                />

                <Route
                    path='/mailboxes/:mailboxId'
                    element={<MailboxDetails
                        mailboxes={mailboxes}
                    />}
                />

            </Routes>

        </>
    );
};

export default App;
