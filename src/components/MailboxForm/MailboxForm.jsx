// src/components/MailboxForm/MailboxForm.jsx

import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = (props) => {

    // set state for formData
    const [formData, setFormData] = useState({
        boxOwner: '',
        boxSize: '',
    });

    // handleChange for form input changes
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    };

    // handleSubmit to manage form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        // reset form to empty
        // link back to mailboxes
    };

    return (
        <>
            <p>Add a Mailbox</p>
            <form onSubmit={handleSubmit}>
                <div>
                {/* name of boxOwner */}
                <label htmlFor="boxOwner">Box Owner</label>
                <input 
                    type='text'
                    id='boxOwner'
                    name='boxOwner'
                    value={formData.name}
                    required
                    onChange={handleChange}
                />
                </div>

                {/* select menu for the boxSize (small, medium, or large) */}
                <div>
                    <label htmlFor="boxSize">Box Size</label>
                    <select 
                        id='boxSize'
                        name='boxSize'
                        value={formData.boxSize}
                        required
                        onChange={handleChange}
                    >
                        <option value='choose'>---choose a size---</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </div>
                <button type='submit'>Add Mailbox</button>
            </form>
        </>
    );
};

export default MailboxForm;