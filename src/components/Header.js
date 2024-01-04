import React, { useEffect, useState } from "react";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { AiTwotoneAudio } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { Youtube_Suggestions_Search_Api } from "../utils/Constants";
import { cacheResults } from "../utils/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchVideos, setSearchVideos] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.Search);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchVideos]) {
        setSearchSuggestion(searchCache[searchVideos]);
      } else {
        getSuggestionVideos();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchVideos]);


  async function getSuggestionVideos() {
    const data = await fetch(Youtube_Suggestions_Search_Api + searchVideos);
    const json = await data.json();
    setSearchSuggestion(json[1]);
    
    dispatch(cacheResults({
      [searchVideos] : json[1]
    }))
  }

  return (
    <div className="grid grid-flow-col shadow-lg p-5 m-2 relative ">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mx-2 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hmburgon"
        />
        <img
          className="h-12 mx-3 cursor-pointer"
          src="https://thumbs.dreamstime.com/b/youtube-banner-app-icon-style-white-isolated-background-154683430.jpg"
          alt="youtube"
        />
      </div>
      <div className="col-span-10 px-10 relative">
        <div className="flex items-center">
          <input
            className="rounded-l-full  p-2 border border-gray-400 w-1/2 "
            type="text"
            placeholder="Search"
            value={searchVideos}
            onChange={(e) => setSearchVideos(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="rounded-r-full px-3 py-2 border bg-gray-100 border-gray-400 cursor-pointer ">
            {<CiSearch size={24} />}
          </button>
          <button className="m-2 rounded-full px-3 py-3 border-none bg-slate-100 border-gray-400">
            {<AiTwotoneAudio size={24} />}
          </button>
        </div>
        <div className="absolute bg-white w-[403px] py-2 px-2 border-none shadow-sm rounded-lg">
          {showSuggestion && (
            <ul>
              {searchSuggestion.map((s) => (
                <li
                  key={s}
                  className="py-2 px-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="col-span-1 flex items-center">
        <button className="rounded-full px-6 p-2 ">
          {<IoNotificationsOutline size={24} />}
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
