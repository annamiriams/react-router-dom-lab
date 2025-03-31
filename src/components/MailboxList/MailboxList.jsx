// src/components/MailboxList/MailboxList.jsx

import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
            <h1>Mailboxes</h1>

            <div>
                {!props.mailboxes.length ? (
                    <h2>There are currently no mailboxes at this post office.</h2>
                    // maybe add a button here later to link to MailboxForm.jsx
                ) : (
                    <ul>
                        {props.mailboxes.map((mailbox) => {
                            return (
                                <div className='mail-box'>
                                    <li key={mailbox._id}>
                                        <Link to={`/mailboxes/${mailbox._id}`}>
                                            Mailbox #: {mailbox._id}
                                        </Link>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                )}
            </div>
        </>
    );
};

export default MailboxList;