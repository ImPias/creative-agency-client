import React from 'react';
import Service from '../Service/Service';
import ServiceOne from '../../../images/icons/service1.png';
import ServiceTwo from '../../../images/icons/service2.png';
import ServiceThree from '../../../images/icons/service3.png';

const serviceList = [
    {
        id: 1,
        title: "Web and Mobile Design",
        details: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
        pic: ServiceOne
    },
    {
        id: 2,
        title: "Graphic design",
        details: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
        pic: ServiceTwo
    },
    {
        id: 3,
        title: "Web development",
        details: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        pic: ServiceThree
    }
]

const ServiceList = () => {
    return (
        <section>
            <div className="text-center">
                <h2 style={{textAlign: "center", paddingTop: '200px'}}>Provide Awsome, <span style={{color: "green"}}>Services</span></h2>
            </div>
            <div className="d-flex justify-content-center" >
                <div className=" w-75 row d-flex" style={{marginTop: "50px"}}>
                    {
                        serviceList.map(list=><Service list={list} key={list.id}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceList;