import React from 'react';
import bannerImg from '../../images/ap-banner.png';
import './AppointmentBanner.css'
const AppointmentBanner = () => {
    return (
        <section className="appointment-banner my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={bannerImg} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary text-uppercase mt-5">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;