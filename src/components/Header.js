import React from "react";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { AiTwotoneAudio } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Header = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-1 m-1 shadow-lg cursor-pointer">
      <div className="flex items-center">
        <img
        onClick={()=>toggleMenuHandler()}
          className="h-8 mx-2"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hmburgon"
        />
        <img
          className="h-12 mx-3"
          src="https://thumbs.dreamstime.com/b/youtube-banner-app-icon-style-white-isolated-background-154683430.jpg"
          alt="youtube"
        />
      </div>
      <div className="col-span-10 px-12 my-2 flex items-center">
        <input
          className="rounded-l-full p-2 border focus border-gray-400 w-1/2 "
          type="text"
          placeholder="Search"
        />
        <button className="rounded-r-full px-4 p-2 border bg-slate-100 border-gray-400">
          {<CiSearch size={24} />}
        </button>
        <button className="m-2 rounded-full px-2 p-2 border-none bg-slate-100 border-gray-400">
          {<AiTwotoneAudio size={24} />}
        </button>
       
      </div>
      
         
        
      <div className="col-span-1 flex items-center">
      <button className="rounded-full px-6 p-2 ">
            {<IoNotificationsOutline size={24}/>}
          </button>
        <img
          className="h-8"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
