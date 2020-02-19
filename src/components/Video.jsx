import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  render() {
    const opts = {
      height: '500vh',
      width: '500vw',

      playerVars: { // https://developers.google.com/youtube/player_parameters
      controls: '0',
      modestbranding:'1',
      showinfo: '0'



      }
    };

    var playerStyle = {
        margin: '20px'

    }

    return (
      <div style={playerStyle}>
      <YouTube
        videoId="cxOz7bJaRFI"
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;
