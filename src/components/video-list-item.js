import React from "react";

class VideoListItem extends React.Component {
  selectedVideo = () => {
    this.props.selectedVideo(this.props.videoId);
  };
  render() {
    console.log(this.props.videoId);
    return (
      <div
        onClick={this.selectedVideo}
        id={this.props.videoId}
        className="item"
      >
        <img src={this.props.url} alt={this.props.desc} /> <br />
      </div>
    );
  }
}

export default VideoListItem;
