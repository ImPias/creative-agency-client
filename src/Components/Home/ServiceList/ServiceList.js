import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        fetch('https://agile-tundra-08472.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])

    return (
        <section>
            <div className="text-center">
                <h2 style={{textAlign: "center", paddingTop: '200px'}}>Provide Awsome, <span style={{color: "green"}}>Services</span></h2>
            </div>
            <div className="d-flex justify-content-center" >
                <div className=" w-75 row d-flex" style={{marginTop: "50px"}}>
                    {
                        serviceList.map(list=><Service list={list} key={list.title}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceList;