# Setup

1. Start out by running npx create-react-app full-stack-review.

- Then, create `server` folder, `index.js` file, and `controllers` and `middleware` folder

- run `npm i express express-session dotenv massive concurrently`
  - explain each
- add main, proxy, nodemonConfig and dev to package.json
- add `.env` file and add in the env variables
- add `.env` to `.gitignore`
- set up basic index.js file with `app`, `session`, `express.json()` and `dotenv` config
- run `nodemon` to make sure the app is currently running

2. db set up

- create `db` folder and `init.sql`.
- Go out and create a fresh instance on heroku and go through the steps to get a new postgres database
- add `CONNECTION_STRING` to the .env
- Then, import `CONNECTION_STRING` and invoke massive to connect to database. Then test connection using nodemon
- connect to database using sql tabs and create a user and a posts table
- create two files, create_user.sql and get_user_by_username.sql. write sql

3. userController

- create userController.js in controllers file
- `npm i bcrypt`
- add login, signup and logout functions in `userController.js` as well as corresponding routes
- write out the logic for login, signup and logout

4. Move to frontend

- Now is a good time to create the frontend setup for routing, redux et.c.
- `npm i react-redux redux redux-promise-middleware react-router-dom axios`
- remove default styling, logo.svg. App.test.js
- create `redux` and `components` folder
- create `Login.js` and `Signup.js` files
- create actionTypes.js, userReducer.js and store.js (redux)

5. Redux set up

- create basic state in userReducer.js and basic reducer
  - use initialState object as appears in file
  - just export a default case
- create basic store (no combineReducers)

6. Routing and redux provider set up

- import `provider`, `store` and `hashRouter` and set up `src/index.js`.
- Then move back into store and setup `redux-promise-middleware` and `applyMiddleware` at same time

7. create routes

- create routes files in src
- write out file ( leaving out dashboard component and route)
- import routes into app and display it

8. creat basic markup for login and signup

- create a basic component for both files to view it live
- run `npm start` and test routes

9. build out signup component

- build out form ability to handle inputs. test
- then create the `signupUser` method and attach it to the button
- switch to `userReducer`
  - import action creators and `axios`
  - create actionType and action creator function to handle signup
  - build out case statements
- set up connect in the `Signup.js` file. create mapStateToProps and dispatch objects (return just state for now)
- import signup into Signup component and hook up ability to sign up. Test with console logs and checking database

10. Build out login component

- sames steps as signup component
- after completing, test to make sure that login is correctly setting redux state

11. Build out redirect for both signup and dashboard

- Test to make sure that logging in or signup now redirects to the dashboard

12. Start building out dashboard component

- create `src/Dashboard.js`
- make basic component
- make route and import Dashboard in routes
- connect to redux adding map state to props.
  - Just return state since we haven't added the `postReducer` yet
- put a `console.log(this.props)` in the Dashboard for now

13. Create the route and controller function for getting user in the userController.js

- Also create both of the middleware functions and then add them as app level middleware and route level middleware

14. move into `userReducer.js` and create the `getUser` action creator and then the corresponding action type

15. Move back into `src/Dashboard`

- import `getUser` from the `userReducer` and wire it up to props
- get user in `componentDidMount`
- add logic for navigating away if redirect is set to false

16. Next up, move back to server to work on the post controller

- create `postsController`
- create all 4 routes and import the postsController object
- create all 4 functions in the `postsController` file
- as you write out each method, create the db files
- Before moving on from this, test with postman so the students are comfortable to work with this.

17. Next up create the `Posts.js` component

- keep it simple with a basic template
- render it out in `src/Dashboard.js`

18. Create the posts reducer

- create `getPosts` action creator at set time and create case for it
- alter the store with `combineReducers`

19. Now, wire up `Posts.js` to redux

- bring in `connect` and `getPosts`
- wire em up
- when creating `mapStateToProps` console log the state object and show how we now need to access state.posts.
- Go and alter the other connect methods to get state.users
- create `componentDidMount` and get posts

20. Create `Post.js` and render a `Post` out for every post in `Posts.js`

21. Add state and wire up form in `Posts.js` to add a new post

- test out form capability. console log in add post since you havent' created savePost action creator yet

22. create `savePost` action creator, associated cases and import into `Posts.js`. Once imported wire it up to connect and invoke it in `addPost`

23. You'll be finishing off the `Post.js` component.

- Open `Post.js`. Create functionality to flip editing. add state and display state if currently editing
- next, create save functionality and button on edit
  - create the action creators, case and action types first then import into Post, bring in connect wire it all up
  - create `componentDidUpdate` method for when the post has been updated successfully on the db and will switch the component back from editing
  - lastly, create the `deletePost` action creator, action type and case
- import `deletePost` into `Post.js`, wire it up to connect, create the method and the button to invoke it. then test

24. Last thing to do is create the `Header.js` component to logout

- create the file
- create a basic function Header
- import into `App` and render out
- Wire `Header` up to redux and put in ternary to display either login and signup button or a button to logout
- lastly, create the action type action creator and case for the logout
- import logout and wire it up to the header button
