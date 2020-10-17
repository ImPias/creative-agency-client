import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin Added Successfully');
                }
            })
            .catch(error => {
                alert('Admin Added Failed');
                console.error(error);
            })
    };
    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10 pl-0" style={{ backgroundColor: '#F4F7FC', height: '100vh' }} >
                <DashboardHeader title='Add Admin'></DashboardHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="py-3">
                    <div className="form-row py-5 pl-5">
                        <div className="col">
                            <input type="email" name="email" ref={register({ required: true })} class="form-control " />
                            {errors.email && <span className="error text-danger">Email is required</span>}
                        </div>
                        <div className="col">
                            <button className="btn btn-success text-light brand-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;