# Setup 

1. Start out by running create-react-app.

- Then, create server folder, index.js controllers and middleware folder
- add main, proxy and nodemonConfig to package.json
- run npm i express express-session dotenv massive
- set up basic index.js file with app, session, express.json and dotenv config
- add .env file and add in the env variables
- add .env to .gitignore

2. db set up

- create db folder and init.sql. Then connect to database and create a user and a posts table
- create two files, create_user.sql and get_user_by_username.sql. write sql

3. userController

- create userController.js in controllers file
- npm i bcrypt
- add login, signup and logout functions as well as corresponding routes
- write out the logic for login, signup and logout

4. Move to frontend 

- Now is a good time to create the frontend setup for routing, redux et.c.
- npm i react-redux redux redux-promise-middleware react-router-dom axios
- remove default styling, logo.svg. App.test.js
- create redux and components folder
- create Login.js and Signup.js (components)
- create actionTypes.js, userReducer.js and store.js (redux)

5. Redux set up

- create basic state in userReducer.js and basic reducer
- create basic store (no combineReducers)

6. Routing and redux provider set up 

- import provider, store and hashRouter and set up index.js.
- also setup promise middlware at same time

7. create routes 

- create routes files in src
- write out file ( leaving out dashboard component and route)
- import routes into app and display it

8. creat basic markup for login and signup

- create a basic component for both files to view it live
- run npm start and test routes

9. build out signup component 

- build out form ability to handle inputs. test
- create actionType and action creator function to handle signup
- build out case statements
- set up connect with this file. create mapStateToProps and dispatch objects (return just state for now)
- import signup into Signup component and hook up ability to sign up. Test with console logs and checking database

10. Build out login component

- sames steps as signup component

11. Build out redirect for both signup and dashboard

12. Start building out dashboard component

- make Dashboard.js (src)
- make basic component
- make route and import Dashboard in routes
- connect to redux adding map state to props. (no get user yet)
- to avoid breaking, add line that will return a loading div if no user found


# Todo after lunch

- create Post component and then render one for each Post
- Add ability to add post
- add middleware that will add a session object for user if none exists
- after finished with that add the ability to get the user from the dashboard and if error or redirect redirect to login. If no user logged in property, then return loading