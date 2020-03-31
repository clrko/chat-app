import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import './Contact.css';


const Contact = (props) => (
    <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name} />
        <div>
            <h4 className="name">{props.name}</h4>
            <div className="status">
                <div className={props.online? "status-online" : "status-offline"}></div>
                <p className="status-text">{props.online? "online" : "offline"}</p>
            </div>
        </div>
    </div>
    );

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    avatar: urlPropType.isRequired,
};

export default Contact;