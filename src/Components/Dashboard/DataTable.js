import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './DataTable.css';

const DataTable = (props) => {
    const [allBookedAppointments , setAllBookedAppointments] = useState([]);
    console.log(allBookedAppointments);
    useEffect(() => {
        fetch("http://localhost:3200/bookedAppointments")
       .then(res => res.json())
       .then(data => setAllBookedAppointments(data))
   }, [allBookedAppointments.length])

   const total = allBookedAppointments.length;
   const pending =  allBookedAppointments.reduce((accu , curr) => {
       if(curr.status === 0){
            accu += 1;
       }
       return accu;

   },0) 
   const date = new Date();
   const formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
   const todays =  allBookedAppointments.reduce((accu , curr) => {
    if(curr.date === formatedDate){
        accu += 1;
    }
    return accu;
},0) 
   console.log(total, pending , todays)
    return (
        <div className="bg-white rounded shadow-sm p-3">
        <div className="py-3 d-flex align-items-center justify-content-between">
            <h6 className="text-primary"> {props.tableName} </h6>
            <div className="selector">
                <FontAwesomeIcon className="icon"icon={faCalendarAlt}/> 
                <select className="p-1 rounded" name="" id="">
                    <option value=""> Weak</option>
                </select>
            </div>
            
        </div>

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
                  allBookedAppointments.map(ap => 

                        <tr>
                        <th scope="row">1</th>
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
        </div>
    );
};

export default DataTable;