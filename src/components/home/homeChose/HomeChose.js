import React from 'react';
import gift from "../../../Image/gift-2.png";
import fitness from "../../../Image/Group 87.png";
import strength from "../../../Image/Group 88.png";

const HomeChose = () => {
    return (
        <div>
        <h1 className="text-center mb-5"><span className="text-warning">WHY</span> CHOOSE US</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center shadow p-3 mb-5 bg-body rounded">
                        <img className="w-25 mb-3" src={fitness} alt="" srcset=""/><br/>
                        <h4>FREE FITNESS TRAINING</h4>
                        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem mollitia assumenda earum provident nihil nisi repudiandae, deserunt quasi eveniet tempor</small>
                    </div>
                    <div className="col-md-4 text-center shadow p-3 mb-5 bg-body rounded">
                    <img className="w-25 mb-3" src={strength} alt="" srcset=""/><br/>
                    <h4>TONS OF CARDIO & STRENGTH</h4>
                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem mollitia assumenda earum provident nihil nisi repudiandae, deserunt quasi eveniet tempor</small>
                    </div>
                    <div className="col-md-4 text-center shadow p-3 mb-5 bg-body rounded">
                        <img className="w-25 mb-3"  src={gift} alt="" srcset=""/><br/>
                        <h4>NO COMMITMENT MEMBERSHIPS</h4>
                        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem mollitia assumenda earum provident nihil nisi repudiandae, deserunt quasi eveniet tempor</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeChose;