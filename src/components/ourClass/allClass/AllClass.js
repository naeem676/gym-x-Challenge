import React from 'react';
import cardioTraining from "../../../Image/alora-griffiths-TuzrzArccvc-unsplash.jpg";
import selfDefence from "../../../Image/baylee-gramling-5m4Z14SDL80-unsplash.jpg";
import advanceGym from "../../../Image/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg";
import strength from "../../../Image/john-fornander-FIu48iuo_4g-unsplash.jpg";
import women from "../../../Image/sven-mieke-Lx_GDv7VA9M-unsplash.jpg";
import men from "../../../Image/victor-freitas-546919-unsplash.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './AllClass.css'
import { Link } from 'react-router-dom';


const AllClass = () => {
    return (
       <div className="container mt-5">
           <div className="row">
               <div className="col-md-4">
                    <div>
                        <img className="cardio" src={cardioTraining} alt="" srcset=""/>
                    </div>
                    <Link style={{textDecoration:'none'}}>
                    <div className="name">
                        <h4>CARDIO TRAINING <FontAwesomeIcon icon={faArrowRight} /></h4>
                    </div>
                    </Link>
               </div>
               <div className="col-md-4">
               <div>
                        <img className="self" src={selfDefence} alt="" srcset=""/>
                    </div>
                    <Link style={{textDecoration:'none'}}>
                    <div className="name">
                        <h4>SELF DEFENCE <FontAwesomeIcon icon={faArrowRight} /></h4>
                    </div>
                    </Link>
               </div>
               <div className="col-md-4">
               <div>
                        <img className="advance" src={advanceGym} alt="" srcset=""/>
                    </div>
                    <Link style={{textDecoration:'none'}}>
                    <div className="name">
                        <h4>ADVANCE TRAINING <FontAwesomeIcon icon={faArrowRight} /></h4>
                    </div>
                    </Link>
               </div>
               <div className="col-md-4">
               <div>
                        <img className="strength" src={strength} alt="" srcset=""/>
                    </div>
                    <Link style={{textDecoration:'none'}}>
                    <div className="name">
                        <h4>STRENGTH TRAINING <FontAwesomeIcon icon={faArrowRight} /></h4>
                    </div>
                    </Link>
               </div>
               <div className="col-md-4">
               <div>
                        <img className="women" src={women} alt="" srcset=""/>
                    </div>
                    <Link style={{textDecoration:'none'}}>
                    <div className="name">
                        <h4>WOMEN TRAINING <FontAwesomeIcon icon={faArrowRight} /></h4>
                    </div>
                    </Link>
               </div>
               <div className="col-md-4">
               <div>
                        <img className="men" src={men} alt="" srcset=""/>
                    </div>
                    <Link style={{textDecoration:'none'}}>
                    <div className="name">
                        <h4>MEN TRAINING <FontAwesomeIcon icon={faArrowRight} /></h4>
                    </div>
                    </Link>
               </div>
           </div>
       </div>
    );
};

export default AllClass;