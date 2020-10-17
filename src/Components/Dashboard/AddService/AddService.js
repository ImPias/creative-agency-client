import React from 'react';
import { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(file);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://agile-tundra-08472.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Service Added Successfully");
            }
        })
        .catch(error => {
            alert("Service Added Failed");
            console.error(error);
        })

        e.preventDefault();
    }

    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2  pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10 pl-0" style={{ backgroundColor: '#F4F7FC', height: '100vh' }} >
                <DashboardHeader title={'Add Service'}></DashboardHeader>
                <form onSubmit={handleSubmit} className="py-5 pl-5">
                    <div className="form-row w-75">
                        <div className="col">
                            <label className="font-weight-bold">Service Title</label>
                            <input onBlur={handleBlur} type="text" name="title" className="form-control " placeholder="Enter Title" required />
                        </div>
                        <div className="col">
                            <label className="font-weight-bold">Icon</label>
                            <input onChange={handleFileChange} type="file" className=" form-control form-control-file" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Description</label>
                        <textarea onBlur={handleBlur} name="description" className="form-control w-75" cols="12" rows="6" placeholder="Description" required ></textarea>
                    </div>

                    <div className="form-group mt-3">
                        <button className="btn btn-success text-light brand-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddService;