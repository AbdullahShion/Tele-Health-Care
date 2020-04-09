import React, { useContext } from 'react';
import AppointmentCard from './AppointmentCard';
import { CalenderContext } from '../../Pages/Appointment';
import { useState } from 'react';

const AppointmentTable = () => {
    const contextData = useContext(CalenderContext);
    const [selectAppointmentId, setSelectAppointmentId] = useState(null);
    const  makeBooking = (apId) => {
        const patientData = {name : "Solaiman Shadin" , phone : "01791487844" , email : "solaimanshadin@gmail.com" }
        const date = `${contextData.date.getDate()}-${contextData.date.getMonth() +1}-${contextData.date.getFullYear()}`;
        const dataToStore = {apId , date , patientData }
        fetch("http://localhost:3200/makeBooking",{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(dataToStore)
        })
    }
    return (
        <div className="appointments container py-5 mt-5">
            <h3 className="text-primary text-center mb-5">Available Appointments on {contextData.date.toLocaleString('default', { month: 'long' })} {contextData.date.getDate()}, {contextData.date.getFullYear()}</h3>
            <div className="row">
                {
                    contextData.availableAppointmentsOfTheDay.map(SingleAp => <AppointmentCard data={SingleAp} />)
                }
                
            </div>
        </div>
    );
};

export default AppointmentTable;