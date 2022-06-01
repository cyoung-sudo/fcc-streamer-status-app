import './Streamers.css';
// Icons
import { GoPrimitiveDot } from 'react-icons/go';

// Streamers presentational component
export default function Streamers(props) {
  return (
    <div id="streamers">
      <div id="header">
        <div id="header-title">Streamer Status Checker</div>
        <div id="header-info">Tracking following streamers: ESL_SC2, OgamingSC2, cretetion, freecodecamp, storbeck, habathcx, RobotCaleb, noobs2ninjas</div>
      </div>
      <div id="mode">
        <button onClick={() => props.modeHandler("all")}>All</button>
        <button onClick={() => props.modeHandler("online")}>Online</button>
        <button onClick={() => props.modeHandler("offline")}>Offline</button>
      </div>

      <ul>
        {/* Render online streamers conditionally */}
        {(props.mode === "all" || props.mode === "online") && props.online.map(streamer => (
          <li key={streamer.user_name}>
            <div className="streamer-name">
              <a href={streamer.profile_url} target="_blank" rel="noreferrer">
                {streamer.user_name}
                <span className="online-icon"><GoPrimitiveDot/></span>
              </a>
            </div>
            <div>({streamer.game_name})</div>
            <div>{streamer.title}</div>
            <img src={streamer.thumbnail_url} alt="thumbnail image"/>
            <div className="streamer-info">{streamer.viewer_count} viewers</div>
          </li>
        ))}
        {/* Render offline streamers conditionally */}
        {(props.mode === "all" || props.mode === "offline") && props.offline.map(streamer => (
          <li key={streamer.user_name}>
            <div className="streamer-name">
              <a href={streamer.profile_url} target="_blank" rel="noreferrer">
                {streamer.user_name}
              </a>
            </div>
            <div className="streamer-info">Offline</div>
          </li>
        ))}
      </ul>
    </div>
  );
};