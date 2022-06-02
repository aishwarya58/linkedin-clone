import React from 'react';
import './Header.css' ;
import HeaderOptions from './HeaderOptions';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
    return ( 
        <div className="Header">
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="Linkedin Logo" />
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="header_right">
                <HeaderOptions Icon={HomeIcon} title='Home'/>
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOptions Icon={ChatIcon} title='Messages'/>
                <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOptions avatar="Saved Pictures\nature.jpg" title="me"/>

            </div>
        </div>
     );
};

export default Header;
