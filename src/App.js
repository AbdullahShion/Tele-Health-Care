import React, {createContext,useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Appointment from './Pages/Appointment';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Patients from './Pages/Dashboard/Patients';
import DashBoardAppointments from './Pages/Dashboard/Appointments';
export const DataContext = createContext();
export const CalenderContext = createContext()


function App() {
  
  const [allAppointments , setAllAppointments] = useState([]);
  const [allBookedAppointments , setAllBookedAppointments] = useState([]);
  const [allPatients , setAllPatients] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetch("http://localhost:3200/appointments")
    .then(res => res.json())
      .then(data => setAllAppointments(data))
  }, [allAppointments.length])

  useEffect(() => {
      fetch("http://localhost:3200/bookedAppointments")
      .then(res => res.json())
      .then(data => setAllBookedAppointments(data));
      
      const uniquePatients = []
      const map = new Map();
      if(allBookedAppointments.length){
        for (const ap of allBookedAppointments) {
          if(!map.has(ap.pataintInfo.phone)){
              map.set(ap.pataintInfo.phone, true);    // set any value to Map
              uniquePatients.push({
                  name: ap.pataintInfo.name,
                  phone: ap.pataintInfo.phone,
                  email : ap.pataintInfo.email
              });
          }
         }
      }
      
      setAllPatients(uniquePatients);

  }, [allBookedAppointments.length])

  const contextData = {allAppointments, setAllAppointments, allBookedAppointments,setAllBookedAppointments , allPatients}
  const calenderContextValue ={date, setDate};

  return (
    <DataContext.Provider value={contextData}>
    <CalenderContext.Provider value={calenderContextValue}>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route exact path="/doctor">
            <Login/>
          </Route>
          <Route  path="/doctor/dashboard">
            <Dashboard/>
          </Route>
          <Route  path="/doctor/patients">
            <Patients/>
          </Route>
          <Route  path="/doctor/appointment">
            <DashBoardAppointments/>
          </Route>
          <Route path="*">
              <NotFound/>
          </Route>
        </Switch>
        
    </Router>
    </CalenderContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
