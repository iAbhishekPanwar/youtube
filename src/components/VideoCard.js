import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  return (
    <div className="p-2 m-2 w-52 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li className="font-medium">{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
