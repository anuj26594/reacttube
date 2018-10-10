import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = "AIzaSyBdQNYshz40ZFza06cm2DtmH5509WDlnWQ";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null
    }
    this.videoSearch = this.videoSearch.bind(this);
    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearchChange={term=>this.videoSearch(term)}
          />
        <div className="main-video">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />
  , document.querySelector('.container'));
