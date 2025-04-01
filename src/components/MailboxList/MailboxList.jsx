// src/components/MailboxList/MailboxList.jsx

import { Link } from 'react-router';

const MailboxList = (props) => {
    console.log(props.mailboxes);

    return (
        <>
            <h1>Mailboxes</h1>
            <div>
                {!props.mailboxes.length ? (
                    <h2>There are currently no mailboxes at this post office.</h2>
                    // maybe add a button here later to link to MailboxForm.jsx
                ) : (
                    <ul>
                        <div className='mail-box'>
                            test mailbox
                        </div>
                        {props.mailboxes.map((mailbox) => {
                            <li key={mailbox._id}>
                                <Link to={`/mailboxes/${mailbox._id}`}>
                                    <div className='mail-box'>
                                        {mailbox._id}
                                    </div>
                                </Link>
                            </li>
                        })}
                    </ul>
                )}
            </div>
        </>
    );

};

export default MailboxList;