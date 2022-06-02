import { SET_FIND_ROOM, SET_SAVE_MEETING_BUTTON } from "./schedulePage.actions"

const INITIAL_STATE = {
    showFindRoomComponent:false,
    showSaveMeetingButton: false
}

const schedulePageReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case SET_FIND_ROOM:
            return {
                ...state,
                showFindRoomComponent: action.payload
            }
        case SET_SAVE_MEETING_BUTTON:
            return {
                ...state,
                showSaveMeetingButton: action.payload
            }
        default:
            return state;
    }
}

export default schedulePageReducer;