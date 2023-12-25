import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchVideos] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div>
      <iframe
        className="w-[900px] h-[28rem] p-4 m-2 rounded-[2rem]"
        src={"https://www.youtube.com/embed/" + searchVideos.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
