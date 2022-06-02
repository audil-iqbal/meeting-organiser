import { gql, useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_MEETING_ROOMS_QUERY } from "../../constants/query";
import Loader from '../Loader/Loader.svg';

const MeetingRoomInfo = () => {
    
    const getAllMeetingRoomQuery = gql(GET_ALL_MEETING_ROOMS_QUERY);
    const {data, loading, error} = useQuery(getAllMeetingRoomQuery);
    
    return (
        <div className="rooms">
            <div className="heading">Meeting Rooms Info</div>
            <div>
                {
                    loading ? <img className="loader" src={Loader} /> :
                    <div>
                        <p>Total: {data?.MeetingRooms?.length}</p>
                        {/* <p>Free: 10</p> */}
                    </div>
                }
                
            </div>
        </div>
    );
}

export default MeetingRoomInfo;