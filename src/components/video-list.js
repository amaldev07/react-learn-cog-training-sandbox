import React from "react";
import VideoListItem from "./video-list-item";

class videoList extends React.Component {
  selectedVideo = (video) => {
    console.log("from videoList");
    this.props.updateSelectedVideo(video);
  };
  render() {
    const { videos } = this.props;
    return (
      videos &&
      videos.map((video) => {
        return (
          <div align="right" key={video.id.videoId}>
            <VideoListItem
              desc={video.snippet.description}
              videoId={video.id.videoId}
              selectedVideo={() => this.selectedVideo(video)}
              url={video.snippet.thumbnails.default.url}
            />{" "}
          </div>
        );
      })
    );
  }
}
export default videoList;
