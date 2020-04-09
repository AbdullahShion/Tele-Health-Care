import React, { createContext, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import AppointmentSection from '../Components/Appointment/AppointmentSection';
import AppointmentTable from '../Components/Appointment/AppoitmentTable';
import { useEffect } from 'react';
export const CalenderContext = createContext()

const Appointment = () => {
    
    const [date, setDate] = useState(new Date());
    const [allAppointments , setAllAppointments] = useState([]);
    const [allBookedAppointments , setAllBookedAppointments] = useState([]);
    // const [availableAppointmentsOfTheDay , setAvailableAppointmentsOfTheDay] = useState([]);

    
        const formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const bookedAppointmentsId = allBookedAppointments.filter(bookedAp => bookedAp.date === formatedDate && bookedAp.status === 1)
                                    .map(ap => ap.apId)
        
        const availableAppointmentsOfTheDay = [...allAppointments]; 
        
        for (let i = 0; i < allAppointments.length; i++) {        
            for (let j = 0; j < bookedAppointmentsId.length; j++) {
                if(allAppointments[i].id === bookedAppointmentsId[i] ){
                    availableAppointmentsOfTheDay[i].totalSpace =  availableAppointmentsOfTheDay[i].totalSpace - 1;
                }
            }
        }

        
    

    useEffect(() => {
        fetch("http://localhost:3200/appointments")
        .then(res => res.json())
        .then(data => setAllAppointments(data))
    }, [allAppointments.length])

    useEffect(() => {
         fetch("http://localhost:3200/bookedAppointments")
        .then(res => res.json())
        .then(data => setAllBookedAppointments(data))
    }, [allBookedAppointments.length])


    useEffect(() => {window.scrollTo(0,0)}, [])
    const contextValue ={date, setDate , availableAppointmentsOfTheDay};
    return (
        
        <CalenderContext.Provider value={contextValue}>
            <Header/>
            <AppointmentSection/>
            <AppointmentTable/>
            <Footer/>
        </CalenderContext.Provider>

    );
};

export default Appointment;