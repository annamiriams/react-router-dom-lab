// src/App.jsx

import Navbar from "./components/Navbar/Navbar.jsx";
import MailboxList from "./components/MailboxList/MailboxList.jsx";
// importing but not using quite yet
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
// importing but not using quite yet
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <h1>Mail Room</h1>
            <MailboxList />
        </>
    );
};

export default App;
