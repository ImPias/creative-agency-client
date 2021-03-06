import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <main className="d-flex align-items-around footer">
            <div className="col-md-6 offset-md-1 align-self-center">
                <h2>Let us Handle Your <br/> project, professionally.</h2>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6" style={{paddingTop: '40px' , flex: 0}}>
                <input type="text" className="form-control" id="formGroupExampleInput"  placeholder="Your Name"/><br/>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Your Company Name"/><br/>
                <input type="text" className="form-control align-self-baseline" id="formGroupExampleInput3" placeholder="Message" style={{height: '300px'}}/><br/>
                <button className="btn btn-dark">Send</button>
            </div>
        </main>
    );
};

export default Footer;