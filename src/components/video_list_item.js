import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return(
    <li className="video-item" onClick={()=>onVideoSelect(video)}>
      <div className="img-left">
        <img className="img" src={imageUrl} />
      </div>
      <div className="body-right">
        <p>{video.snippet.title}</p>
      </div>
    </li>
  );
}

export default VideoListItem;
