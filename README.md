# Tv Show App: Frontend



<br><br>
          ![This is a alt text.](https://github.com/Team-Steele/tvshowapp/blob/andrew/ImgAndGifs/project3searchEx.gif)
# 

With more and more streaming service becoming easier to access and the norm to watch your favorite shows. Access to a variety of options is at our fingertips. But how does one remember which show was the one with great ending in season two? How can we store information on shows across multiple entertainment services? 

The idea for the Tv Show App was to create a an app that allowed user to come in and saved shows they liked/watched and be able to leave comments about that specific show.

## Process and Thought logic

The Tv Show App was create with to individual sections. The backend and the frontend of the App. The Front end development manages everything that users visually see first in their browser or application. The look and feel of the app. 

One of the first task was to set up our own individual branches on the GIT repository. By setting up individual branches each team member was able to work on individual code without it changing the main development branch code. This was a critical step to move forward. 

#
<br><br>Example of dev branches:
<br><br>
          ![This is a alt text.](https://github.com/Team-Steele/tvshowapp/blob/andrew/ImgAndGifs/Screen%20Shot%202021-08-03%20at%206.43.04%20PM.png)
# 

Next with our backend in place we needed to make sure the two were connected and speaking with each other. In Order to achieve this we needed to create a ternary conditional statement that looked for a production url in our backend. 

#
<br><br>Connections.js:
<br><br>
          ![This is a alt text.](https://github.com/Team-Steele/tvshowapp/blob/andrew/ImgAndGifs/Screen%20Shot%202021-08-04%20at%2012.33.58%20PM.png)
# 

### Minimal Viable Product:
We also developed a set of MVP goals which included:
1. A user should be able to login in with there personal userID and password.
2. A user should have access to their personal profile of tv shows.
3. A user should be able to search for a specific show with an api call to fetch data. 
4. A user should be able to add a tv show to their profile. 
5. A user should be able to perform CRUD functions on their profile of shows.

We also used wire frames to create an idea of what the end product would look like. Not only did the wire frames help give us perspective but it allowed us to keep on track with the flow process in creating the app.

#
<br><br>Wire frame:
<br><br>
          ![This is a alt text.](https://github.com/Team-Steele/tvshowapp/blob/andrew/ImgAndGifs/project3ShowList.jpg)
# 

## Technologies used to create Project

Once we had a the basic file and folder set for the frontend, we need to make sure we had the necessary dependencies and create an react app using the terminal [npm](https://reactjs.org/docs/create-a-new-react-app.html) to install our necessary dependencies create our react app.
```bash
npx create-react-app tvShowApp
cd tvShowApp
npm start
```
After the basic set up the next thing to tackle was setting up our components so that we could display our data on the browser. Then create various routes to handle where and what data would render on which component of the app. 

In Order turn our ideas in an actual app we needed incorporate various developer skills to render a working app on the frontend. Some of the technologies used are listed below:

   * CSS styling & layout
 JavaScript
   * JavaScript programming
   * Working within the DOM
   * JavaScript events
   * Console.log & other debugging tools
 MongoDb 
   * A database which stores data in JSON-like 
     documents with dynamic schema
 React
   * React is a JavaScript library for building 
     modern applications. React is used for handling 
     the view layer and can be used for development 
     of both web and mobile applications.

## React: Creating Components and routes:

We created a controllers folder with contained all of our RESTFUL routes and provided functionality to the backend. Once we accomplished this we were able to input actually data and see it on our local backend database. 

Once we set up our components and able to pass data with useState to different components.  
```bash
import React, { useState } from 'react';
```
By using this method to pass data around different components we were then able to create our users and write code to render new comment to specific users on the backend database through the frontend.

#
<br><br>Code for creating a new user:
<br><br>
          ![This is a alt text.](https://github.com/Team-Steele/tvshowapp/blob/andrew/ImgAndGifs/Screen%20Shot%202021-08-04%20at%2011.37.47%20AM.png)
# 
 
## Connecting frontend and backend:
Once we were able to communicate with the database and our routes were functioning we need to connect the frontend to the backend. Time constraints and finding time with everyone's schedules was a obstacle for the group. So it was critical to make sure we had our backend set up and frontend working in sync with one another.  

#
<br><br>Setting up connection:
<br><br>
![This is a alt text.](https://github.com/Team-Steele/tvshowapp-backend/blob/andrew/imgAndGifs/Screen%20Shot%202021-08-04%20at%2010.26.32%20AM.png)
#

## Final steps: After 
Once we had all our changes and all the developers involved on this project review the changes then fix code and merged our individual branches on git into the main development branch and finally to the main branch. 

#
<br><br>Example of pull request on Git:
<br><br>
![This is a alt text.](https://github.com/Team-Steele/tvshowapp/blob/andrew/ImgAndGifs/Screen%20Shot%202021-08-04%20at%202.39.50%20PM.png)
#

The main branch would be used to deploy a live version on Heroku to host our app and deploy our App live to the internet in conjunction with Atlas cloud to store our data and connect it to our backend database and our frontend react app.
Getting experience using GitHub and learning how to manage different branches was a great learning opportunity and an awsome way for the group to work together and build repore. GitHub was not an esy in any form but rather required more paitence in getting issues and conflicts resolved, however, once we got the hang of it we were able to merge our branches on our own.

## Issues and future stretch goals:

1. We definitely had an issue with user login and authentication. We were not able to implement this goal at this time.
2. An important part of this project was learning to work as a group. It is easy to write your own code but having to incorporate another person's code and ideas was a great learning experience. Each step in this project seemed to break down into even smaller steps. Like a link in a chain if one thing is missing or in the wrong place it can cause a headache. Working in a group exacerbated headache at times and others times helped elevate the pressure. Overall the group was a success and worked together to figure out solutions to our issues. 
3. Right from the beginning we knew connecting our users with there comments would be a challenge. Also being able to add shows from a fetch call to an API was going to prove to be a task in itself.  
4. We also had a bit of trouble deploying our app to heroku at first. Getting familiar with configuring everything and adding Config Variables to Heroku so that it would recognize our API key without sharing it with the internet. 

Finally we originally wanted to have a bit of different layout and design but with the time constraints we focused on functionality. As a Stretch goal we plan on creating more user functions and cleaning up a lot of styling and CSS issues. Overall the project was success. 

