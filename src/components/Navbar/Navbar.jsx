// src/components/Navbar/Navbar.jsx

import { Link } from 'react-router';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/'>Mailboxes</Link>
                    </li>

                    <li>
                        <Link to='/'>New Mailbox</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;