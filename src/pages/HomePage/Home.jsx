
import React from "react";
import './homepage.css';
import BuildingInfo from "../../components/BuildingInfo/BuildingInfo.jsx";
import MeetingRoomInfo from "../../components/MeetingRoomInfo/MeetingRoomInfo.jsx";
import AllMeetingInfo from "../../components/AllMeetingInfo/AllMeetingInfo.jsx";

const Home = () => {
  
    return(
        <div className="homepage">
            {/* TODO: fetch data to show logged in users' meetings */}
            <div className="mymeeting">
                <div className="heading">My Meeting</div>
                <div>
                    <p>Please login to see your meetings</p>
                </div>
            </div>
            
            <BuildingInfo />
        
            <MeetingRoomInfo />

            <AllMeetingInfo />

            <div className="scheduleButton">
                <button onClick={()=> window.location.href='/schedule'}>Schedule A Meeting</button>
            </div>
        </div>
    );
}

export default Home;