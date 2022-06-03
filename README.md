# meeting-organiser

## Requirements

1. Home page should show info about Building, Meeting, Meeting Room
2. Schdele Meeting page to take meeting detail inputs\
    i. meeting title\
    ii. meeting date\
    iii. meeting time\
    iv. meeting building
3. System should fetch available rooms in that building.
4. After selecting a room meeting and user confirms the meeting by clicking save.
5. (Implemented) Integrated CICD using Github Actions and Heroku
6. (Intended) Admin workflow to add/modify buildings, meeting rooms
7. (Intended) Upon login add/modfiy own meeting for individual users
8. (Intended) Invite users to the meeting
9. (Intended) Notifications for upcoming/cancelled meetings, error handling/concurrency use cases
10. (Intended) Media queries for cross platforms- mobile, tablet, desktop
11. (Intended) Time zone support for cross geo locations

## Component Design
![Building info](/component-design/buildings.png)

![Meeting Room info](/component-design/meeting-rooms.png)

![Meetings info](/component-design/meetings.png)

![Schedule Meeting](/component-design/schedule-meeting.png)

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!
