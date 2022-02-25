import React from 'react';
import bannerImg from '../../images/ap-banner.png';
import './AppointmentBanner.css'
const AppointmentBanner = () => {
    return (
        <section className="appointment-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={bannerImg} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-warning text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Doctor’s appointment online<br/> In Bangladesh</h1>
                        <p>Bangladeshi First largest and biggest doctor's and medical directory. First ever online platform for doctor appointments in Bangladesh.</p>
                        <button className="btn btn-info">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;