import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './DashboardHeader.css';

const DashboardHeader = (props) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogout = () => {
        setLoggedInUser({});
        history.replace("/");
    }
    return (
        <div className="dashboard font-weight-bold d-flex justify-content-between align-items-center">
            <h3 className="pl-5">{props.title}</h3>
            <div className="d-flex pr-5">
                <h5 className="mt-2 mr-2">{loggedInUser.name}</h5>
                <button type="button" onClick={handleLogout} className="btn btn-primary">Logout</button>
            </div>
        </div>
    );
};

export default DashboardHeader;