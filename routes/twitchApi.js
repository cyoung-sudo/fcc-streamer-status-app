const express = require("express");
const axios = require("axios");

const twitchRoutes = express.Router();

twitchRoutes.route("/twitchApi")
  .get(function (req, res) {
    // Get access token
    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`)
      .then(res1 => {
        // Construct request string
        let streamersStr = "";
        let streamers = req.query.streamers;
        streamers.forEach((streamer, i) => {
          // Check if "not" last element
          if(i < (streamers.length - 1)) {
            streamersStr += "user_login=" + streamer + "&";
          } else {
            streamersStr += "user_login=" + streamer;
          }
        });
        // Get data for specified streamers
        axios.get("https://api.twitch.tv/helix/streams?" + streamersStr, {
          headers: {
            "authorization": `Bearer ${res1.data.access_token}`,
            "client-id": process.env.CLIENT_ID,
          }
        })
        .then(res2 => {
          console.log("Successfully retrieved streamer data");
          res.json({
            streamers: streamers,
            data: res2.data.data
          });
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });

module.exports = twitchRoutes;
