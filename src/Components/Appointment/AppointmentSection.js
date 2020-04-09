import React from 'react';
import './Appointment.css';
import BannerImg from '../../images/banner-img.png';
import ReactCalender from './Calender';
const AppointmentSection = () => {
    return (
        <div className="appointment-section">
            <div className="container">
                
                <div className="row" style={{height:"100vh"}}>
                    <ReactCalender/>
                    <div className="col-md-6 align-self-center">
                        <img className="img-fluid" src={BannerImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default AppointmentSection;