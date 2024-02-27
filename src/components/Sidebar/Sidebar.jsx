import {  useEffect, useState } from "react";
import { BiSolidHome, BiLibrary } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Sidebar = ({auth}) => {
  const [playlists, setPlaylists] = useState([]);
  const auth1  = localStorage.getItem("access")!==null;
  console.log("auth1 "+auth1);
  const [value,setValue] = useState(localStorage.getItem("access"));
  
  return (
    <div className="w-1/4 fixed left-0 mt-2 top-0 sidebar ">
      <div className="nav tertiary_bg rounded-lg p-6">
        <Link to={"/"} className="flex items-center gap-6">
          <BiSolidHome className="font-bold text-2xl" />
          <span className="text-lg">Home</span>
        </Link>
        <Link to={"/search"} className="flex mt-4 items-center gap-6">
          <FiSearch className="font-bold text-2xl" />
          <span className="text-lg">Search</span>
        </Link>
      </div>
      <div className="mt-2 tertiary_bg rounded-lg px-2 py-2">
        <div className="flex px-4 justify-between mb-4 items-center gap-4">
          <div className="flex gap-2 items-center">
            <BiLibrary className="font-bold text-xl" />
            <span>Your library</span>
          </div>
          <button className="hover:bg-black/25 rounded-[50%] p-2">
            <FaPlus className="font-bold text-xl" />
          </button>
        </div>
        <div className="btns flex gap-4 mb-4">
          <Link
            to={"/"}
            className="rounded-full mt-4 px-3   py-1 bg-white/10 text-white text-sm"
          >
            Playlists
          </Link>
          <Link
            to={"/"}
            className="rounded-full mt-4 px-3   py-1 bg-white/10 text-white text-sm"
          >
            Artists
          </Link>
        </div>
        <div className="my-6 px-2">
          {playlists.map((p) => {
            return (
              <div key={p._id} className="flex gap-4 my-2">
                <div>
                  <img
                    src="/assets/Arijit-1.jpg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-white/80">
                    Playlist
                    <span> . {p.songs.length} Songs</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="your_library">
                    <div className="leading-8 mt-2 secondary_bgg rounded-lg py-6 px-4">
                        <p className="font-bold">Create your first playlist</p>
                        <p className="font-semibold">
                            It's easy, we'll help you
                        </p>
                        <button className="rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">
                            Create playlist
                        </button>
                    </div>
                    <div className="leading-8 mt-4 secondary_bgg rounded-lg py-6 px-4">
                        <p className="font-bold">
                            Let's find some podcasts to follow
                        </p>
                        <p className="font-semibold">
                            We'll keep you updated on new episodes
                        </p>
                        <button className="rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">
                            Browse Podcast
                        </button>
                    </div>
                </div>
      </div>
      <div className="mt-4 px-4 flex gap-4 flex-wrap">
        <Link className="text-xs text-gray-300 mx-4" to="#">
          Legal
        </Link>
        <Link className="text-xs text-gray-300 mx-4" to="#">
          Privacy Center
        </Link>
        <Link className="text-xs text-gray-300 mx-4" to="#">
          Privacy Policy
        </Link>
        <Link className="text-xs text-gray-300 mx-4" to="#">
          Cookies
        </Link>
        <Link className="text-xs text-gray-300 mx-4" to="#">
          About Ads
        </Link>
        <Link className="text-xs text-gray-300 mx-4" to="#">
          Accessibility
        </Link>
      </div>
      <button className="mx-4 mt-12 text-sm border-white border rounded-full flex gap-2 px-3 py-1 items-center  text-white ">
        <TbWorld />
        <span className="text-white font-bold">English</span>
      </button>
      
      {(!auth1) && <div><Signup /></div>}

    </div>
  );
};

export default Sidebar;
