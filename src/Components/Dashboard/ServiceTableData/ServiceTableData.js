import React, { useState } from 'react';
import { useEffect } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ServiceTableDataInfo from '../ServiceTableDataInfo/ServiceTableDataInfo';
import Sidebar from '../Sidebar/Sidebar';

const ServiceTableData = () => {
    const [serviceTableData, setServiceTableData] = useState([]);
    useEffect(() => {
        fetch('https://agile-tundra-08472.herokuapp.com/fullOrderList')
            .then(res => res.json())
            .then(data => setServiceTableData(data))
    }, [])

    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10 pl-0" style={{ backgroundColor: '#F4F7FC', height: '100%' }} >
                <DashboardHeader title={'Services List'}></DashboardHeader>
                <ServiceTableDataInfo serviceTableData={serviceTableData}></ServiceTableDataInfo>
            </div>
        </div>
    );
};

export default ServiceTableData;