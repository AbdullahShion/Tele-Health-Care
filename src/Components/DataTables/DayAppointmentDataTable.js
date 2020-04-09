import React from 'react';
import { useContext } from 'react';
import { DataContext, CalenderContext } from '../../App';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const DayAppointmentDataTable = () => {
    const CalenderData = useContext(CalenderContext);
    const ContextData = useContext(DataContext);
    
    useEffect(() => {
        console.log(CalenderData);
    }, CalenderData.date)

    return (
        <div className="bg-white rounded shadow-sm p-3">
        <div className="py-3 d-flex align-items-center justify-content-between">
            <h6 className="text-primary"> Appointments </h6>
            <div className="selector">
                {CalenderData.date.getDate}
            </div>
            
        </div>

        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Schedule</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  ContextData.allBookedAppointments.map(ap => 

                        <tr>
                        <td>{ap.pataintInfo.name}</td>
                        <td>3pm</td>
                        <td className="text-center">
                            {
                                ap.status ?
                                    ap.status === 1 ?
                                    <Link className="btn btn-success">Approved</Link>
                                    :
                                    <Link className="btn btn-danger">Rejected</Link>
                                :
                                <Link className="btn btn-info">Pending</Link>

                        
                            }
                        </td>
                    </tr>
                    )
                }
            
                
            </tbody>
        </table>
        
        </div>
        
        
    );
};

export default DayAppointmentDataTable;