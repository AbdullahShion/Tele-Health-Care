import React, { useContext } from 'react';
import AppointmentCard from './AppointmentCard';
import { useState } from 'react';
import { DataContext, CalenderContext } from '../../App';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const AppointmentTable = () => {
    const contextData = useContext(CalenderContext);
    const contextData_2 = useContext(DataContext)
    const [selectAppointment, setSelectAppointment] = useState(null);

  
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const  makeBooking = (event) => {
        event.preventDefault();
        const apId = selectAppointment.id;
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

    const modalController = (apId) => {
        setModalIsOpen(true);
        console.log("Clik for appointment ", apId);
        const selectedAp = contextData_2.allAppointments.find(ap => ap.id === apId);

        if(selectedAp){
            setSelectAppointment(selectedAp)
        }
        console.log(selectAppointment);
    }
    return (
        <div className="appointments container py-5 mt-5">
            <h3 className="text-primary text-center mb-5">Available Appointments on {contextData.date.toLocaleString('default', { month: 'long' })} {contextData.date.getDate()}, {contextData.date.getFullYear()}</h3>
            <div className="row">
                {
                    contextData_2.allAppointments.map(SingleAp => <AppointmentCard data={SingleAp} modalController={modalController} />)
                }
                
            </div>
            
            <Modal  isOpen={modalIsOpen}
             onRequestClose={() => setModalIsOpen(false)} 
             style={{
                 overlay:{
                     backgroundColor:"rgba(130,125,125,0.75)"
                 },
                 content : {
                    top                   : '50%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',
                    marginRight           : '-50%',
                    transform             : 'translate(-50%, -50%)'
                  }
                
             }}
            >
                {
                     selectAppointment &&
                     <div className="p-3"> 
                        <h3 className="text-primary mb-5">{selectAppointment.subject}</h3>
                        <form onSubmit={() => makeBooking()}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" placeholder="Phone Number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="email" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="date" placeholder="Date" className="form-control"/>
                            </div>
                            <div className="form-group text-right">
                                <button type="button" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                     </div>
                }
            </Modal>
        </div>
    );
};

export default AppointmentTable;