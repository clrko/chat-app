import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          online: false,
        };
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status" onClick={event => { 
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline});}}>
                        <div className={this.state.online? "status-online" : "status-offline"}></div>
                        <p className="status-text">{this.state.online? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
            );
    }
    
};




Contact.propTypes = {
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    avatar: urlPropType.isRequired,
};

export default Contact;