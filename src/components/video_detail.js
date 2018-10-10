import React from 'react';

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.video) {
      return <div> Loading </div>;
    }
    const videoID = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;
    return (
      <div className="video-details">
        <div className="embed-video">
          <iframe src={url}></iframe>
        </div>
        <div className="video-d">
          <h4>{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }

}

export default VideoDetail;
