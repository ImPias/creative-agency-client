import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartPlus, faShoppingBag, faComment, faUserAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://agile-tundra-08472.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar">
            <Link to="/">
                <img style={{width: "200px"}} className="brand-logo mt-3 ml-2" src={logo} alt="" />
            </Link>
            <ul className="nav flex-column mt-5">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link text-dark">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                {
                    isAdmin ?
                <div>
                    <li className="nav-item">
                        <Link to="/dashboard/serviceTableData" className="nav-link text-dark">
                            <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                            <span>Service List</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/addService" className="nav-link text-dark">
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            <span>Add Service</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/makeAdmin" className="nav-link text-dark">
                            <FontAwesomeIcon icon={faUserAlt} className="mr-2" />
                            <span>Make Admin</span>
                        </Link>
                    </li>
                </div>
                :
                <div>
                    <li className="nav-item">
                        <Link to="/dashboard/order" className="nav-link text-dark">
                            <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                            <span>Order</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/serviceDataCard" className="nav-link text-dark">
                            <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                            <span>Service Card</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/review" className="nav-link text-dark">
                            <FontAwesomeIcon icon={faComment} className="mr-2" />
                            <span>Review</span>
                        </Link>
                    </li>
                </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;