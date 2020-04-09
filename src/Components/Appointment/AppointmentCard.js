import React from 'react';

const AppointmentCard = (props) => {
    console.log(props.data);
    return (
        <div className="col-md-4 mb-5">
            <div className="card appointment-card">
                <div className="card-body text-center">
                    <h5 className="card-title text-primary">{props.data.subject}</h5>
                    <h6>{props.data.visitingHour}</h6>
                    <p>{props.data.totalSpace} SPACES AVAILABLE</p>
                    <button className="btn btn-primary text-uppercase">Book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;