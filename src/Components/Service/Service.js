import React from 'react';

const Service = (props) => {
    const {name , img , description} = props.service;
    return (
        <div className="col-md-4 text-center">
            <img src={img} alt="" height="70"/>
            <h4 className="my-4">{name}</h4>
            <p className="text-secondary">{description}</p>
        </div>
    );
};

export default Service;