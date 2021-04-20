import React from 'react';
import checkmark from "../../Image/checkmark-square-2.png";
import './Join.css'

const Join = () => {
    return (
        <div className="row">
        <div className="col-md-10">
            <h5><img src={checkmark} alt="" srcset=""/> Having Slimmer Shapely Thighs</h5>
            <h5><img src={checkmark}  alt="" srcset=""/> Getting Stronger Body</h5>
            <h5><img src={checkmark}  alt="" srcset=""/> Increased Metabolism</h5>
            <h5><img src={checkmark}  alt="" srcset=""/> Increased Muscular Endurance</h5>
            <h5><img src={checkmark}  alt="" srcset=""/> Maximum Results in Less Time</h5>
            <h5><img src={checkmark}  alt="" srcset=""/> Firm Hips and Tummy</h5>
        </div>
        <div className="col-md-2 join">
        <button type="button" class="btn btn-warning">Join Us</button>
        </div>
            
        </div>
    );
};

export default Join;