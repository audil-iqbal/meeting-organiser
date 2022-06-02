export const SET_FIND_ROOM = "SET_FIND_ROOM";
export const SET_SAVE_MEETING_BUTTON = "SET_SAVE_MEETING_BUTTON";

export const setFindRoomComponent = flag => ({
    type: SET_FIND_ROOM,
    payload: flag
});

export const setSaveMeetingButton = flag => ({
    type: SET_SAVE_MEETING_BUTTON,
    payload: flag
})