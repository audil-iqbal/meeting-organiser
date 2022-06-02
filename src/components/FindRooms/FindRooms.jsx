import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from '../../components/Loader/Loader.svg';
import { GET_AVAILABLE_ROOMS, SET_MEETING_QUERY } from "../../constants/query";
import SelectMeetingRoom from "../SelectMeetingRoom/SelectMeetingRoom";
import './findRoom.css';

const FindRooms = ({building,showSaveButton,meetingData}) => {

    const getAvailableRooms = gql(GET_AVAILABLE_ROOMS);
    const {data, loading, err} = useQuery(getAvailableRooms);
    
    const setMeetingQuery = gql(SET_MEETING_QUERY);
    const [saveMeeting,{save_data,save_load,save_err}] = useMutation(setMeetingQuery);

    const saveMeetingIntoDb = () => {
        saveMeeting({variables:{
            id: meetingData.id,
            title: meetingData.title,
            date: meetingData.date,
            startTime: meetingData.startTime,
            endTime: meetingData.endTime,
            meetingRoomId: meetingData.meetingRoomId
        }})
        .then(data => alert('meeting saved successfully'))
        .catch(err => console.log('errorrr1: ',err));
    }

    if(save_data!=null){
        prompt('Meeting Added successfully');
    }
    return(
        <div className="findRoom">
            <div>Select Meeting Room</div>
            {loading ? <img src={Loader} alt='loader'/> : <></>}
            <div id='meetingRooms'>
                {data?.MeetingRooms?.filter(e => e.building.name === building.name).map((e,idx) => <SelectMeetingRoom key={idx} room={e}/>)}
            </div>
            <button disabled={!showSaveButton} onClick={saveMeetingIntoDb}>Save Meeting</button>
        </div>
    );
}

const mapStateToProps = ({addMeetingReducer,schedulePageReducer}) => ({
    building: addMeetingReducer.building,
    showSaveButton: schedulePageReducer.showSaveMeetingButton,
    meetingData: addMeetingReducer,
});

export default connect(mapStateToProps)(FindRooms);