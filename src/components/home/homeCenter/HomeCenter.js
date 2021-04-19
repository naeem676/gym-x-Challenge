import React from 'react';
import well from "../../../Image/wells-chan-H-vAxuWxmi8-unsplash.jpg";
import './HomeCenter.css'

const HomeCenter = () => {
    return (
        <div className="home-center mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-100 h-100" src={well} alt="" srcset=""/>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-muted">ABOUT US</h1>
                        <h3><span className="text-warning">WE ARE HERE TO DREAM!</span> <br/> OUR TEAM IS HERE SURVE YOU.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis porro temporibus ea sunt laboriosam sapiente ipsum? Numquam rerum voluptatibus, veniam nesciunt accusantium ex, hic architecto modi quas minima minus odit.
                        Harum architecto, eum praesentium et ipsam facilis error accusamus magni velit eveniet eos nobis repellat cumque, officiis non numquam aperiam dolore obcaecati rerum qui? Nesciunt maxime architecto inventore tempora vitae.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCenter;