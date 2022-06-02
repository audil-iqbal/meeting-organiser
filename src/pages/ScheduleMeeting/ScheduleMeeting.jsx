import React from "react";
import './schedulePage.css';
import MeetingDetails from "../../components/MeetingDetails/MeetingDetails";
import FindRooms from "../../components/FindRooms/FindRooms";
import { connect } from "react-redux";

const ScheduleMeeting = ({showFindRoom}) => {

    return(
        <div className="schedulePage">
            <MeetingDetails />
            {showFindRoom ? <FindRooms /> : <></>}
        </div>
    );
}

const mapStateToProps = ({schedulePageReducer}) => ({
    showFindRoom : schedulePageReducer.showFindRoomComponent
});

export default connect(mapStateToProps)(ScheduleMeeting);