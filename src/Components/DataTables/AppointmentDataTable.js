import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const AppointmentDataTable = () => {
    const ContextData = useContext(DataContext);
    let srNo = 1;
    return (
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
                        <td>{ap.pataintInfo.name}</td>
                        <td>3pm</td>
                        <td>{ap.pataintInfo.phone}</td>

                        <td className="text-center"><Link className="btn btn-primary">View</Link></td>
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
                            <Link className="btn ml-1 btn-warning text-white"> <FontAwesomeIcon icon={faPencilAlt}/> </Link></td>
                    </tr>
                    )
                }
            
                
            </tbody>
        </table>
        
    );
};

export default AppointmentDataTable;