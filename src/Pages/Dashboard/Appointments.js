import React from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar';
import DayAppointmentDataTable from '../../Components/DataTables/DayAppointmentDataTable';
import ReactCalender from '../../Components/Appointment/Calender';

const DashBoardAppointments = () => {

    return (
            <div className="container-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB",height:"100%"}}>
                    <h5 className="mb-5" >Appointments</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <ReactCalender/>  
                        </div>
                        <div className="col-md-6">
                            <DayAppointmentDataTable/>
                        </div>
                    </div>
                    
                </div>
            </div>
    );
};

export default DashBoardAppointments;