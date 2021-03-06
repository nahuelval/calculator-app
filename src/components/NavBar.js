import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {

    const dispatch = useDispatch();

    const dark = useSelector(store => store.darkMode);

    function letDarkMode() {
        return {
            type: 'DARK-MODE'
        }
    }

    return (
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="btn btn-default" onClick={() => dispatch(letDarkMode())}></button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;