import React from 'react';

const ClassSchedule = () => {
    return (
        <div>
            <h1><span className="text-warning">CLASS</span> SCHEDULE</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 shadow-sm p-3 mb-5 bg-body rounded text-center">
                        <h4>Monday</h4>
                        <p className="text-warning">8:00 AM - 9:00 AM</p>
                    </div>
                    <div className="col-md-6 shadow-sm p-3 mb-5 bg-body rounded text-center">
                        <h4>Tuesday</h4>
                        <p className="text-warning">10:00 AM - 11:00 AM</p>
                    </div>
                    <div className="col-md-6 shadow-sm p-3 mb-5 bg-body rounded text-center">
                        <h4>Wednesday</h4>
                        <p className="text-warning">7:00 AM - 8:00 AM</p>
                    </div>
                    <div className="col-md-6 shadow-sm p-3 mb-5 bg-body rounded text-center">
                        <h4>Thursday</h4>
                        <p className="text-warning">5:00 PM - 6:00 PM</p>
                    </div>
                    <div className="col-md-6 shadow-sm p-3 mb-5 bg-body rounded text-center">
                        <h4>Friday</h4>
                        <p className="text-warning">6:00 PM - 7:00 PM</p>
                    </div>
                    <div className="col-md-6 shadow-sm p-3 mb-5 bg-body rounded text-center">
                        <h4>Saturday</h4>
                        <p className="text-warning">7:00 PM - 8:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassSchedule;