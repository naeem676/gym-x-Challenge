import React from 'react';
import workout from '../../../Image/daniel-apodaca-WdoQio6HPVA-unsplash.jpg';
import progressionLogo from '../../../Image/Group 80.png';
import workoutLogo from "../../../Image/Group 81.png";
import nutritoinLogo from "../../../Image/Group 82.png";
import progression from "../../../Image/hipcravo-5UbIqV58CW8-unsplash.jpg";
import nutrition from "../../../Image/penguinuhh-8VI6WwEEEHw-unsplash.jpg";
import './HomeMain.css';



const HomeMain = () => {
    return (
        <div className="mb-0">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div><img className="w-75 h-50" src={progression} alt="" srcset=""/></div>
                        <div className="progression text-center text-white m-5">
                            <img className="w-25 h-50 mb-3 " src={progressionLogo} alt="" srcset=""/>

                            <br/>
                            <h4>PROGRESSION</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, deserunt?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div><img className="workout" src={workout} alt="" srcset=""/></div>
                        <div className="progression text-center text-white m-5">
                            <img className="w-25 h-50 mb-3" src={workoutLogo} alt="" srcset=""/><br/>
                            <h4>WORKOUT</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, deserunt?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div><img className="w-75 h-50" src={nutrition} alt="" srcset=""/></div>
                        <div className="progression text-center text-white m-5">
                            <img className="w-25 h-25 mb-3" src={nutritoinLogo} alt="" srcset=""/><br/>
                            <h4>NUTRITION</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, deserunt?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;