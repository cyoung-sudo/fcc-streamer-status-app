## Streamer Status App

An application that tracks and provides stream information on a list a twitch streamers, built with React, Express, JavaScript, and CSS.

## Screen Shots(s)

![screenshot1](client/public/screenshot1.png)
![screenshot2](client/public/screenshot2.png)

## Installation and Setup Instructions

Clone this repository (You will need `node` and `npm` installed globally on your machine)

Installation:

`npm install`<br>
`cd client`<br>
`npm install`

To Start Server:

`npm start`

To Start Client:

`(Open new console tab)`<br>
`cd client`<br>
`npm start`

To Visit App:

`localhost:3000`

## Summary

- Application features:
    - Display the stream information of a preset list of twitch streamers
    - Filter display between all, online, and offline streamers
- What was the purpose of this project?
    - Practicing full-stack development using React for the frontend and Express for the backend
    - Deploying a React/Express app to Heroku
    - Making a more advanced API call that requires secrets, tokens, etc
    - Creating a basic app using container & presentational components
- What were some unexpected obstacles?
    - Figuring out how to successfully make a request to the twitch api took more time than I expected. I understood that I needed to generate a token using my client-id and client-secret but it took some researching to figure out the correct format for the request.