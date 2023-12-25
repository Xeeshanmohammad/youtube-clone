import React from "react";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-4 w-[200px] shadow-lg rounded-md">
     <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnails" />
     <ul>
         <li className="font-bold ">{channelTitle}</li>
            <li className="text-xl">{title}</li>
            <li className="font-bold">{statistics.viewCount} views</li>
     </ul> 
     </div>
  );
}

export default VideoCard;
