import React from "react";
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
    let date = new Date().getFullYear();

    return (
        <div id="Footer-sec">
            <div id="Footer-div1">
                <div id="Footer-meet">
                    <div className="Footer-sub1">
                        <p>Find Me At</p>
                    </div>
                    <div className="Footer-sub1">
                        {/* <div className="Footer-sub-sub-meet"><i className="fa fa-phone"></i><span>9832253315</span></div> */}
                        <div className="Footer-sub-sub-meet"><i className="fa fa-map-marker"></i><span>On Planet Earth</span></div>
                        <div className="Footer-sub-sub-meet"><i className="fa fa-whatsapp"></i><span>Live Chat</span></div>
                    </div>
                </div>
                <div id="Footer-connect">
                    <div className="Footer-sub2">
                        <p>Connect With Me</p>
                    </div>
                    <div className="Footer-sub2">
                        <i className="fa fa-github"></i>
                        <i className='fa fa-linkedin-square'></i>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div className="Footer-sub2">
                        <i className="fa fa-telegram"></i>
                        <i className="fa fa-envelope"></i>
                    </div>
                </div>
                <div id="Footer-services">
                    <div className="Footer-sub3">
                        <p>My Services</p>
                    </div>
                    <div className="Footer-sub3">
                        <div className="Footer-sub-sub-services"><i className="fa fa-globe"></i><span>Web Dev</span></div>
                        <div className="Footer-sub-sub-services"><i className="fa fa-android"></i><span>App Dev</span></div>
                    </div>
                </div>
                <div id="Footer-useful">
                    <div className="Footer-sub4">
                        <p>Useful Contents</p>
                    </div>
                    <div className="Footer-sub4">
                        <div className="Footer-sub-sub-useful"><i className="fa fa-handshake-o"></i><span>Support</span></div>
                        <div className="Footer-sub-sub-useful"><i className="fa fa-question-circle"></i><span>FAQs</span></div>
                    </div>
                </div>
            </div>
            <div id="Footer-div2">
                <p id="Footer-copyright"><span style={{color:"#074fe1"}}>© {date}</span> | Designed By <span style={{color:"#074fe1"}}>Røh@n Gîrĩ</span></p>
                <p>All rights reserved. Terms & Conditions · Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;