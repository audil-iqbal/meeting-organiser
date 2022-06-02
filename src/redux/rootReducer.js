import { combineReducers } from 'redux';
import schedulePageReducer from './SchudulePage/schedulePage.reducer';
import addMeetingReducer from './AddMeeting/addMeeting.reducer';

const rootReducer = combineReducers({
    schedulePageReducer,
    addMeetingReducer
});

export default rootReducer;