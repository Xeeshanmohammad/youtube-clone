import React from "react";

function formatViews(viewCount) {
  const views = parseInt(viewCount);
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  } else {
    return views.toString();
  }
}

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  
  const formattedViews = formatViews(statistics.viewCount);

  return (
    <div className="p-2 m-4 w-[200px] shadow-lg rounded-md">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnails" />
      <ul>
        <li className="font-bold">{channelTitle}</li>
        <li className="text-sm">{title}</li>
        <li className="font-semibold">{formattedViews} views</li>
      </ul> 
    </div>
  );
}
    
export default VideoCard;
