export const GET_ALL_BUILDINGS_QUERY = `{
    Buildings {
      name
      id
    }
}`;

export const GET_ALL_MEETING_ROOMS_QUERY = `{
    MeetingRooms {
      id
      name
      floor
      building {
          name
      }
    }
}`;

export const GET_ALL_MEETINGS_QUERY = `{
  Meetings{
    id
    title
    date
    startTime
    endTime
  }
}`;

export const GET_AVAILABLE_ROOMS = `{
  MeetingRooms {
    id
    name
    floor
    building {
      name
    }
    meetings {
      id
      title
      date
      startTime
      endTime
    }
  }
}
`;

export const SET_MEETING_QUERY = `mutation 
  addMeeting($id: Int!, $title: String!, $date: String!, $startTime: String!, $endTime: String!, $meetingRoomId: Int!){
  Meeting(
    id: $id
    title: $title
    date: $date
    startTime: $startTime
    endTime: $endTime
    meetingRoomId: $meetingRoomId
  ){
    id
    title
  }
}
`