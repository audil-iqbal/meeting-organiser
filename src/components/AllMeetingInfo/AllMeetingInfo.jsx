import { gql, useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_MEETINGS_QUERY } from "../../constants/query";
import Loader from '../Loader/Loader.svg';

const AllMeetingInfo = () => {

    const getAllMeetingsQuery = gql(GET_ALL_MEETINGS_QUERY);
    const {data, loading, error} = useQuery(getAllMeetingsQuery);

    return(
        <div className="allmeetings">
            <div className="heading">Meetings Info</div>
            {
                loading ? <img className="loader" src={Loader} />:
                <div>
                    <p>Total Meetings: {data?.Meetings?.length}</p>
                    {/* <p>Total ongoing now: 10</p> */}
                </div>
            }
        </div>
    );
}

export default AllMeetingInfo;