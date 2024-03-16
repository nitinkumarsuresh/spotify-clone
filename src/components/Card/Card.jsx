import { useState } from "react";
import "./Card.css";
import SongBar from "../MasterBar/SongBar";
import { FaPause, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import { useGlobalContext } from "../../states/Contet";
// eslint-disable-next-line react/prop-types
const Card = ({ song, idx , setcurrent}) => {
  // console.log(setcurrent);
  const audio = song.mp3;
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  
 

  const togglePlay = () => {
    setcurrent(song);
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    song && (
      <div className="card bg-[#181818] col-span-1 p-4 rounded-lg">
        
        <div className="relative" >
          <img
             onClick={()=>navigate("/selectedplaylist")} 
            src={song.img}
            className="w-full rounded-lg"
            alt=""
          />
          
          
            <button
              onClick={togglePlay}
              className="flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] bg-green-500 justify-center p-3"
            >
              {isPlaying ? <FaPause className="text-black text-xl" /> : <FaPlay className="text-black text-xl" />}
            </button>
          
            
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
