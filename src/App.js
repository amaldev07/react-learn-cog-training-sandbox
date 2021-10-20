import "./styles.css";
import React, { Component } from "react";
import fetchVideos from "./api/youtube";
import { SearchBar } from "./components/search-bar";
import VideoDetail from "./components/video-detail";
import VideoList from "./components/video-list";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.makeSearch("react js tkssharma");
  }
  makeSearch = (term = "react tkssharma") => {
    fetchVideos()
      .get("/search", {
        params: { q: term }
      })
      .then((response) => {
        console.log(response);
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      });
  };
  updateSelectedVideo = (video) => {
    this.setState({
      selectedVideo: video
    });
  };
  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="container jumbotron">
        <div className="row">
          <SearchBar search={this.makeSearch} />
        </div>
        <div className="row">
          <div className="col-md-8">
            {  selectedVideo&& <VideoDetail selectedVideo={selectedVideo} />}
            <div>
              <div className="col-md-8">
                <VideoList
                  videos={videos}
                  updateSelectedVideo={this.updateSelectedVideo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
