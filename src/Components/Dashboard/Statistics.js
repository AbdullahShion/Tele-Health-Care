import React from 'react';
import SingleStatistic from './SingleStatistic';

const Statistics = () => {
    return (
        <div className="row my-5">
            <SingleStatistic classToAdd="bg-danger" data={{title: "Pending Appointments" , count:10}}/>
            <SingleStatistic classToAdd="bg-info" data={{title: "Today’s Appointments" , count:4}}/>
            <SingleStatistic classToAdd="bg-success" data={{title: "Total Appointments" , count:15}}/>
            <SingleStatistic classToAdd="bg-warning" data={{title: "Total  Patients" , count:19}}/>
        </div>
    );
};

export default Statistics;