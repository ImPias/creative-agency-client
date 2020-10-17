import React from 'react';
import Slack from '../../../images/logos/slack.png';
import Google from '../../../images/logos/google.png';
import Uber from '../../../images/logos/uber.png';
import Netflix from '../../../images/logos/netflix.png';
import AirBnb from '../../../images/logos/airbnb.png';
import './Clients.css';

const Clients = () => {
    return (
        <div className='d-flex justify-content-around container'>
            <img src={Slack} alt="Slack" />
            <img src={Google} alt="Google" />
            <img src={Uber} alt="Uber" />
            <img src={Netflix} alt="Netflix" />
            <img src={AirBnb} alt="AirBnb" />
        </div>
    );
};

export default Clients;