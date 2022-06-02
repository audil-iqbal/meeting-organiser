import { gql, useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_BUILDINGS_QUERY } from "../../constants/query.js";
import Loader from '../Loader/Loader.svg';

const BuildingInfo = () => {
    const getAllBuildinguery = gql(GET_ALL_BUILDINGS_QUERY);
    const {data,loading, error} = useQuery(getAllBuildinguery);

    return(
        <div className="buildings">
            <div className="heading">Building Info</div>
            <div>
                {loading ? <img src={Loader}/> : <p>Total: {data.Buildings?.length}</p>}
            </div>
        </div>
    );
}

export default BuildingInfo;