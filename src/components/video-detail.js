import React from "react";

class VideoDetail extends React.Component {
  render() {
    const { selectedVideo } = this.props;
    console.log(selectedVideo);
    const url = "https://www.youtube.com/embed/" + selectedVideo?.id?.videoId;
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
export default VideoDetail;
