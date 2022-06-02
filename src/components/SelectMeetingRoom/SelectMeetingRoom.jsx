import React from "react"
import { connect } from "react-redux";
import { setMeetingDateTime } from "../../redux/AddMeeting/addMeeting.actions";
import { setSaveMeetingButton } from "../../redux/SchudulePage/schedulePage.actions";
import './selectMeetingRoom.css';

const SelectMeetingRoom = ({room,setSaveMeetingButton,setMeetingDateTime}) => {
    const selectedMeetingRoom = (event) => {
        setSaveMeetingButton(true);
        setMeetingDateTime({
            meetingRoomId: room.id,
        });  
    }
    return(
        <label className="meetingRoom">
            <input type='radio' className="radioBtn" name="selectMeetingRoom" id={room.id} onChange={selectedMeetingRoom}/>
            <p className="roomContent">Room: {room.name}</p>
            <p className="roomContent">{room.building.name}</p>
            <p className="roomContent">Floor: {room.floor}</p>
        </label>
    );
}

const mapDispatchToProps = dispatch => ({
    setSaveMeetingButton: flag => dispatch(setSaveMeetingButton(flag)),
    setMeetingDateTime: data => dispatch(setMeetingDateTime(data)),
});


export default connect(null,mapDispatchToProps)(SelectMeetingRoom);