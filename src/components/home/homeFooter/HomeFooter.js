import React from 'react';
import facebook from "../../../Image/bxl-facebook.png";
import instagram from "../../../Image/bxl-instagram.png";
import twitter from "../../../Image/bxl-twitter.png";
import whatsapp from "../../../Image/bxl-whatsapp.png";
import youtube from "../../../Image/bxl-youtube.png";

const HomeFooter = () => {
    return (
        <div className="bg-dark">
            <div className="container ">
            <div className="row">
                <div className="col-md-4 d-flex mt-5">
                        <div>
                        <h4 style={{color:'white'}}>POWER <span style={{color:'gold'}}>X</span></h4>
                        </div>
                        <div className="text-white ml-4">
                            <h5>Need Help?</h5>
                            <p>Help Center</p>
                            <p>Email Support</p>
                            <p>Live Chat</p>
                            <p>Gift Certificates</p>
                            <p>Send Us Feedback</p>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex mt-5">
                        <div className="text-white">
                                <h5>Digital Resources</h5>
                                <p>Articles</p>
                                <p>E-books</p>
                            </div>
                            <div className="text-white ml-4">
                                <h5>Connect with Us</h5>
                                <div className="d-flex">
                                    <img className="m-2" src={facebook} alt="" srcset=""/>
                                    <img className="m-2" src={instagram} alt="" srcset=""/>
                                    <img className="m-2" src={twitter} alt="" srcset=""/>
                                    <img className="m-2" src={whatsapp} alt="" srcset=""/>
                                    <img className="m-2" src={youtube} alt="" srcset=""/>
                                </div>
                                <p>Forum</p>
                            </div>

                        </div>
                        <div className="col-md-3 mt-5">
                        <div className="text-white" >
                            <h5>Join Our Newsletter</h5>
                            <p>Get exclusive news, features, and <br/> updates from the Shredder Weight loss Academy</p>
                        </div>

                        
                </div>
            </div>
            
            
            
        </div>
       <div className="text-center">
       <small className="text-white"> Copyright & copy: {(new Date().getFullYear())} Your Name All Rights Reserved</small>
       </div>
        </div>
    );
};

export default HomeFooter;