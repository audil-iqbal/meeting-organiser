import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_ALL_BUILDINGS_QUERY } from "../../constants/query";
import Loader from '../../components/Loader/Loader.svg';
import { connect } from "react-redux";
import { setFindRoomComponent } from "../../redux/SchudulePage/schedulePage.actions";
import { setMeetingDateTime } from "../../redux/AddMeeting/addMeeting.actions";
import TextInput from "../UserInputs/TextInput";
import DateInput from "../UserInputs/DateInput";
import TimeInput from "../UserInputs/TimeInput";
import Button from "../UserInputs/Button";

const  MeetingDetails = ({setFindRoomComponent,setMeetingDateTime}) => {

    
    /*
    TODO: form validation like
        1. end time greater than start time
        2. date and time formatting
    TODO: handle UTC timing for global usage
    */
    const getAllBuildingQuery = gql(GET_ALL_BUILDINGS_QUERY);
    const {data, loading, err} = useQuery(getAllBuildingQuery);

    const [meetingDate, setMeetingDate] = useState();
    const [meetingStartTime, setStartTime] = useState();
    const [meetingEndTime, setEndTime] = useState();
    const [meetingBuilding, setBuilding] = useState();
    const [meetingTitle, setTitte] = useState();
    
    //handler for data validation and fetching rooms
    const findAvailableRooms = (event) => {
        event.preventDefault();

        if(meetingBuilding==null){
            console.log('Empty building');
            alert('please select building');
            return;
        }
        setFindRoomComponent(true);
        setMeetingDateTime({
            id: 20,
            title: meetingTitle,
            date: meetingDate,
            startTime: meetingStartTime,
            endTime: meetingEndTime,
            building: meetingBuilding
        });
    }

    //handler for select tag for buildings data
    const selectBuilding = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        setBuilding({
            'name':selectedOption.value,
            'id':selectedOption.id
        });
    }

    //handle data fetching error
    if(err){
        alert('something went wrong');
        console.log('error: ',err);
    }

    return(
        <div>
            <form onSubmit={findAvailableRooms}>
                <table>
                    <tr>
                        <th colSpan={2}>Select Meeting Details</th>
                    </tr>
                    <tr>
                        <td><label htmlFor="meetingTitle" >Select Title</label></td>
                        <td><TextInput id='meetingTitle' placeholder='Meeting Title' handleChange={(e)=> setTitte(e.target.value)} required/></td>
                        {/* <td><input type="text" id='meetingTitle' placeholder="Meeting Title" onChange={e=> setTitte(e.target.value)} required/></td> */}
                    </tr>
                    <tr>
                        <td><label htmlFor="meetingDate" >Select Date</label></td>
                        <td><DateInput id='meetingDate' handleChange={e=>setMeetingDate(e.target.value)} required/></td>
                        {/* <td><input type="date" id='meetingDate' onChange={e=> setMeetingDate(e.target.value)} required/></td> */}
                    </tr>
                    <tr>
                        <td><label htmlFor="meetingStartTime">Select Start Time</label></td>
                        <td><TimeInput id='meetingStartTime' handleChange={e=>setStartTime(e.target.value)} required/></td>
                        {/* <td><input type="time" id='meetingStartTime' onChange={e=> setStartTime(e.target.value)} required/></td> */}
                    </tr>
                    <tr>
                        <td><label htmlFor="meetingEndTime">Select End Time</label></td>
                        <td><TimeInput id='meetingEndTime' handleChange={e=> setEndTime(e.target.value)} required/></td>
                        {/* <td><input type="time" id='meetingEndTime' onChange={e=> setEndTime(e.target.value)} required/></td> */}
                    </tr>
                    {
                        loading ? <img src={Loader} alt='loader'/> :
                        <tr>
                            <td><label htmlFor="">Select Building</label></td>
                            <td>
                                <select onChange={selectBuilding} required>
                                    <option selected disabled >Select Building</option>
                                    {data?.Buildings.map((e,idx) => <option value={e.name} id={e.id}>{e.name}</option>)}
                                </select>
                            </td>
                        </tr>
                    }
                    <tr>
                        <td colSpan="2">
                            <Button type='submit' text='Find Available Room'/>
                            {/* <button type='submit'>Find Available Rooms</button> */}
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setFindRoomComponent: (flag) => dispatch(setFindRoomComponent(flag)),
    setMeetingDateTime: data => dispatch(setMeetingDateTime(data)),
});

export default connect(null,mapDispatchToProps)(MeetingDetails);