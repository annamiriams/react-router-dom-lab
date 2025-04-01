// src/components/MailboxDetails/MailboxDetails.jsx

import { useParams } from "react-router";

// useParams() hook will be helpful
// use value extracted from URL params to find() a specific mailbox in mailboxes state 

const MailboxDetails = (props) => {
    // useParams allows you to use access parameters from the current route
    // destructure mailboxId from the object returned by useParams()
    // for example: if the current route is /mailbox/5 (from /mailbox/:mailboxId), useParams() will return {mailboxId: '5'}, so mailboxId would be set to '5'
    const { mailboxId } = useParams();
    // console.log(mailboxId);

    // adding try catch here to try and capture the error message if no mailbox is found
    try {
        // props.mailboxes is the list of mailboxes passed as a prop to the component 
        const selectedBox = props.mailboxes.find(
            // the callback function takes each mailbox and checks if the _id matches mailboxId (once it has been converted from a string to a Number) 
            (mailbox) => mailbox._id === Number(mailboxId)
        );
        // console.log(selectedBox);

        // i'm not sure why this isn't working it did in pets?
        // if (!props.selectedBox) {
        //     return (
        //         <>
        //             <p>Mailbox not found!</p>
        //         </>
        //     )
        // }

        return (
            <>
                <h1>Mailbox {selectedBox._id}</h1>
                <p>Box Owner: {selectedBox.boxOwner}</p>
                <p>Box Size: {selectedBox.boxSize}</p>
            </>
        );
    } catch (error) {
        console.log('Error in MailboxDetails:', error);
        if (!props.selectedBox) {
            return (
                <>
                    <p>Mailbox not found!</p>
                </>
            )
        }
    }
}



export default MailboxDetails;