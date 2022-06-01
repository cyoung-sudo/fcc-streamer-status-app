import React from 'react';
import Streamers from './Streamers';
import axios from 'axios';

// List of streamers to track
const streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// Streamers container component
class StreamersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: [],
      offline: [],
      mode: "all" // display mode
    };
    this.modeHandler = this.modeHandler.bind(this);
  }
  
  // Run on component load
  componentDidMount() {    
    // Request server for twitch data
    axios.get("/twitchApi", { params: {
        streamers: streamers
      }})
      .then(res => {
        let online = [];
        let offline = [...res.data.streamers];
        // Get online streamers info
        for(let streamer of res.data.data) {
          // Set thumnbnail dimensions
          let thumbnail_url = streamer.thumbnail_url.replace("{height}", "720").replace("{width}", "1280");
          // Gather relevant streamer data
          let streamerInfo = {
            user_name: streamer.user_name,
            title: streamer.title,
            viewer_count: streamer.viewer_count,
            game_name: streamer.game_name,
            thumbnail_url: thumbnail_url,
            profile_url: `https://www.twitch.tv/${streamer.user_name}`
          };
          // Add streamer to "online"
          online.push(streamerInfo);
          // Remove streamer from "offline"
          for(let i=0; i<offline.length; i++) {
            if(offline[i] === streamer.user_name) {
              offline.splice(i, 1);
              break;
            }
          }
        }
        // Format offline streamers data
        offline = offline.map(streamer => {
          return {
            user_name: streamer,
            profile_url: `https://www.twitch.tv/${streamer}`
          };
        })
        // Set state
        this.setState({
          online: online,
          offline: offline
        });
      })
      .catch(err => console.log(err));
  }

  // Toggle between filter modes
  modeHandler(mode) {
    this.setState({
      mode: mode
    });
    console.log(`Showing ${this.state.mode} streamers`);
  }
  
  render() {
    // Send data to presentational component
    return <Streamers
      online={this.state.online}
      offline={this.state.offline}
      mode={this.state.mode}
      modeHandler={this.modeHandler}/>;
  }
}

export default StreamersContainer;