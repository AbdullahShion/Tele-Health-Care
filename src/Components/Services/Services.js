import React from 'react';
import services from '../../Data/services';
import Service from '../Service/Service';

const Services = () => {
    return (
        <section className="services mb-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase text-info">Our Facilities</h5>
                    <h1>Service We Provide</h1>
                </div>
                <div className="row mt-5 pt-5">
                    {
                        services.map(service => <Service service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;