import React from 'react';

import './Contact.css';

const name = "Hilda Sutton";
const avatar = "https://randomuser.me/api/portraits/women/47.jpg";
const online = true;

const Contact = () => {
    return (
    <div className="Contact">
        <img className="avatar" src={avatar} alt={name} />
        <div>
            <h4 className="name">{name}</h4>
            <div className="status">
                <div className="status-online"></div>
                <p className="status-text">{online? "online" : "offline"}</p>
            </div>
        </div>
    </div>
    );
}

export default Contact;