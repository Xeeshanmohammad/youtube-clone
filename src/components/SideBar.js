import React from "react";
import { useSelector } from "react-redux";

function SideBar() {

  const isMenuOpen = useSelector((store)=>store.App.isMenuOpen)

  if( !isMenuOpen) return null

  return (
    <div className="p-4 w-48 shadow-lg">
       <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Musics</li>
        <li>Games</li>
        <li>Videos</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Musics</li>
        <li>Games</li>
        <li>Videos</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>News</li>
        <li>Journalist</li>
        <li>Magzines</li>
        <li>Turorials</li>
      </ul>
    </div>
  );
}

export default SideBar;
