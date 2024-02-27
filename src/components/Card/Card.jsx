import { useState } from "react";
import "./Card.css";
import { FaPause, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import { useGlobalContext } from "../../states/Contet";
// eslint-disable-next-line react/prop-types
const Card = ({ song, idx }) => {
  const navigate = useNavigate();
  console.log(song)
  const [isPlaying,setIsplaying] =useState(true)
  
  return (
    song && (
      <div className="card bg-[#181818] col-span-1 p-4 rounded-lg">
        <div className="relative" onClick={()=>navigate("/selectedplaylist")}>
          <img
            
            src={song.img}
            className="w-full rounded-lg"
            alt=""
          />
          
          { !isPlaying ? (
            <button
              onClick={()=>setIsplaying(true) }
              className="flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] bg-green-500 justify-center p-3"
            >
              <FaPause className="text-black text-xl" />
            </button>
          ) : (
            <button
            onClick={()=>setIsplaying(false) }
              className="flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] bg-green-500 justify-center p-3"
            >
              <FaPlay className="text-black text-xl" />
            </button>
          )}
        </div>
        
        <h3 className="text-sm font-semibold my-2">{song.artist}</h3>
        <p className="text-xs text-gray-400 leading-4 mb-8">
          
          {song.title} - {song.artist}
        </p>
      </div>
    )
  );
};

export default Card;
