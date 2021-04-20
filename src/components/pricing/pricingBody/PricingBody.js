import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const PricingBody = () => {
    return (
        <div className="m-5">
        <div className="text-center">
            <h1><span className="text-warning">CHOOSE THE OFFER</span> THAT SUITS YOU</h1>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fuga.</small>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 text-center bg-dark text-white ml-3 p-3">
                    <h5 className="text-warning">BILLED MONTHLY</h5>
                    <h3 >ADVANCE PLAN</h3>
                    <h1 className="text-warning">$140</h1>
                    <p><FontAwesomeIcon icon={faCheck} /> Mobile-Optimized</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Best Hosting</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Free Custom</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Outstanding</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Happy Customers</p>
                    <button type="button" class="btn btn-warning">PURCHASE</button>
                </div>
                <div className="col-md-3 text-white bg-dark text-center ml-5 p-3">
                <h5 className="text-warning">BILLED MONTHLY</h5>
                    <h3 >BASIC PLAN</h3>
                    <h1 className="text-warning">$120</h1>
                    <p><FontAwesomeIcon icon={faCheck} /> Mobile-Optimized</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Best Hosting</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Free Custom</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Outstanding</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Happy Customers</p>
                    <button type="button" class="btn btn-warning">PURCHASE</button>
                </div>
                <div className="col-md-3 text-white bg-dark text-center ml-5 p-3">
                <h5 className="text-warning">BILLED MONTHLY</h5>
                    <h3 >BEGINERS</h3>
                    <h1 className="text-warning">$90</h1>
                    <p><FontAwesomeIcon icon={faCheck} /> Mobile-Optimized</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Best Hosting</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Free Custom</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Outstanding</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Happy Customers</p>
                    <button type="button" class="btn btn-warning">PURCHASE</button>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default PricingBody;