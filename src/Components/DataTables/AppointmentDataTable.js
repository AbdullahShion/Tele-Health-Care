import React from 'react';
import { useContext, useState } from 'react';
import { DataContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PrescriptionModal from '../Dashboard/PrescriptionModal';


const AppointmentDataTable = () => {
    const ContextData = useContext(DataContext);
    const [selectAppointment, setSelectAppointment] = useState(null);
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const openPrescriptionModal = (apId) => {
        setModalIsOpen(true);
        const selectedAp = ContextData.allBookedAppointments.find(ap => ap._id === apId)
        setSelectAppointment(selectedAp);
    }

    let srNo = 1;

    const handleStatusChange = status => {
        const data = {id : selectAppointment._id, status }

        // Updating Data to DataContext 
        const newDataArray = Array.from(ContextData.allBookedAppointments);
        const modifiedData = {...selectAppointment};
        modifiedData.status = status;
        const selectedIndex = newDataArray.indexOf(selectAppointment);

        newDataArray.splice(selectedIndex,1, modifiedData);
        ContextData.setAllBookedAppointments(newDataArray);

        // Storing Data in database
        fetch("https://doctors-portal-backend.herokuapp.com/updateBookingStatus",{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        
    }
    
    return (
        <>
        <table className="table table-borderless">
            <thead>
                <tr className="text-center">
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Time</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Contact</th>
                <th className="text-secondary" scope="col">Prescription</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  ContextData.allBookedAppointments.map(ap => 

                        <tr>
                        <td>{srNo++}</td>
                        <td>{ap.date}</td>
                        <td>3pm</td>
                        <td>{ap.patientInfo.name}</td>
                        <td>{ap.patientInfo.phone}</td>

                        <td className="text-center">
                            {
                                ap.prescription ?
                                <button onClick={()=> openPrescriptionModal(ap._id)} className="btn btn-primary">View</button>
                                :
                                <span>
                                   <span>Not Added</span> 
                                   <FontAwesomeIcon onClick={()=> openPrescriptionModal(ap._id)}  className="text-success ml-2" style={{cursor:"pointer"}} icon={faPlusCircle}/>
                                </span>
                                

                            }
                        </td>
                        <td className="text-center">
                            
                            <select onClick={() => setSelectAppointment(ap)} onChange={e => handleStatusChange(e.target.value)} className={ap.status == "Rejected" ? "btn btn-danger" : ap.status == "Approved" ? "btn btn-success" : "btn btn-info" }>
                                <option selected={ap.status == "Pending"} className="bg-white text-secondary">Pending</option>
                                <option selected={ap.status == "Approved"} className="bg-white text-secondary">Approved</option>
                                <option selected={ap.status == "Rejected"} className="bg-white text-secondary">Rejected</option>
                            </select>
                           
                            <button className="btn ml-1 btn-warning text-white"> <FontAwesomeIcon icon={faPencilAlt}/> </button>
                        </td>
                    </tr>
                    )
                }
            
            </tbody>
        </table>
        <PrescriptionModal 
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selectAppointment={selectAppointment}
        setSelectAppointment={setSelectAppointment}/>
        </>
        
    );
};

export default AppointmentDataTable;