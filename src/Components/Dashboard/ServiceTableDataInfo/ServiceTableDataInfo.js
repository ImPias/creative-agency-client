import React from 'react';
import ServiceTableShortList from '../ServiceTableShortList/ServiceTableShortList';

const ServiceTableDataInfo = ({serviceTableData}) => {
    return (
        <div>
            {
                serviceTableData.length ? 
                <ServiceTableShortList serviceTableData={serviceTableData}></ServiceTableShortList>
                :
                <div className="p-4">
                    <h4 className="lead text-center">No Data Found</h4>
                </div>
            }
        </div>
    );
};

export default ServiceTableDataInfo;