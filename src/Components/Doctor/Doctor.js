import React from 'react';
import img from '../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = () => {
    return (
        <div className="col-md- text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            
        </div>
       
    );
};

export default Doctor;