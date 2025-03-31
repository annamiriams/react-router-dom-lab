// src/components/MailboxDetails/MailboxDetails.jsx

import { useParams } from "react-router";

// useParams() hook will be helpful
// use value extracted from URL params to find() a specific mailbox in mailboxes state 

const MailboxDetails = (props) => {
    // useParams allows you to use access parameters from the current route
    // destructure mailboxId from the object returned by useParams()
    // for example: if the current route is /mailbox/5 (from /mailbox/:mailboxId), useParams() will return {mailboxId: '5'}, so mailboxId would be set to '5'
    const { mailboxId } = useParams();

    // props.mailboxes is the list of mailboxes passed as a prop to the component 
    const selectedBox = props.mailboxes.find(
        // the callback function takes each mailbox and checks if the _id matches mailboxId (once it has been converted from a string to a Number) 
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    if (!props.selectedBox) {
        return (
            <>
                <p>Mailbox not found!</p>
            </>
        )
    }
    
    return (
        <>
            <p>Box Number: {props.selectedBox._id}</p>
            <p>Box Owner: {props.selectedBox.boxOwner}</p>
            <p>Box Size: {props.selectedBox.boxSize}</p>
        </>
    );
}



export default MailboxDetails;