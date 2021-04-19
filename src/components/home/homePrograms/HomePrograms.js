import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import YOGA from "../../../Image/bruce-mars-gJtDg6WfMlQ-unsplash.png";
import CARDIO from "../../../Image/arthur-edelman-qfjuh4OLdxw-unsplash.jpg";
import './HomeProgram.css';

const HomePrograms = () => {
    return (
        <div className="program">
            <h1 className="text-center">TRAINING <span className="text-warning">PROGRAMS</span></h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div><img className="w-100 yoga" src={YOGA} alt="" srcset=""/></div>
                        <div className="training">
                            <h3>YOGA TRAINING SESSION <FontAwesomeIcon icon={faArrowRight} /></h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div><img className="w-100" src={CARDIO} alt="" srcset=""/></div>
                        <div className="training2">
                            <h3>CARDIO TRAINING SESSION <FontAwesomeIcon icon={faArrowRight} /></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePrograms;