import React from 'react';
import VideoListItem from './video_list_item.js'


class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoItems = this.props.videos.map((video)=> {
      return (
        <VideoListItem onVideoSelect={this.props.onVideoSelect}
          key={video.etag}
          video={video} />
      );
    });
    return (
      <ul className="video-list">
        {videoItems}
      </ul>
    );
  }
}

export default VideoList;
