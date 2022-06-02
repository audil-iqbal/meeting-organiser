import { SET_MEETING_DATETIME } from "./addMeeting.actions";

const INITIAL_STATE = {
    id: -1,
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    meetingRoomId: -1,
    building: {}
}

const addMeetingReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case SET_MEETING_DATETIME:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default addMeetingReducer;