import React, { useState } from "react";
import './navbar.css';

const NavBar = () => {

    const [displayDate, setdisplayDate] = useState();

    useState(()=> {
        const interval = setInterval(()=> {
            const date = new Date();
            const localeDateTime = date.toLocaleDateString() + " " +date.toLocaleTimeString();
            setdisplayDate(localeDateTime);
        },1000);

        return () => clearInterval(interval);
    });

    return(
        <ul className="navbar">
            <li className="navItem"><a href="/">Meeting Organiser</a></li>
            <li className="navItem"><a href="/schedule">Schedule Meeting</a></li>
            <li className="navItem floatright"><a >Account</a></li>
            <li className="navItem floatright"><a >Help</a></li>
            <li className="navItem floatright"><a >{displayDate}</a></li>
        </ul>
    );
}

export default NavBar;