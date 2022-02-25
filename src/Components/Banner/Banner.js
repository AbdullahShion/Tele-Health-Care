import React from 'react';
import BannerImg from '../../images/banner-img.png';
import {Link} from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row align-items-center" style={{height:"100vh"}}>
                    <div className="col-md-4">
                        <h1>YOUR HEALTH IS <br/> ALWAYS OUR PRIORITY!</h1>
                        <p>Get Telemedicine and Doctor Online service with thousands of Doctors in Bangladesh.</p>
                        <Link className="btn btn-dark" to="/appointment">Get appointment</Link>
                    </div>
                    <div className="col-md-6 d-none d-md-block offset-2">
                        <img className="img-fluid" src={BannerImg} alt=""/>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default Banner;