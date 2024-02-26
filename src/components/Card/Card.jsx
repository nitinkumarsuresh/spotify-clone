import { useState } from "react";
import "./Card.css";
import { FaPause, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { pauseSong, playSong } from "../../states/Actors/SongActor";
// import { useGlobalContext } from "../../states/Contet";
// eslint-disable-next-line react/prop-types
const Card = ({ song, idx }) => {
  const navigate = useNavigate();
  console.log(song)
  const isPlaying =useState(false)
  // const { masterSong, isPlaying } = useSelector((state) => state.mainSong);
  // // const { resetEverything, setSongIdx } = useGlobalContext();
  // const dispatch = useDispatch();

  // const handlePlay = (song) => {
  //   setSongIdx(idx);
  //   if (isPlaying) {
  //     masterSong.mp3.currentTime = 0;
  //     masterSong.mp3.pause();
  //     resetEverything();
  //   }
  //   dispatch(playSong(song));
  // };
  // const handlePause = () => {
  //   dispatch(pauseSong());
  // };
  return (
    song && (
      <div className="card bg-[#181818] col-span-1 p-4 rounded-lg">
        <div className="relative" onClick={()=>navigate("/selectedplaylist")}>
          <img
            // eslint-disable-next-line react/prop-types
            src={song.img}
            className="w-full rounded-lg"
            alt=""
          />
          {/* eslint-disable-next-line react/prop-types */}
          { !isPlaying ? (
            <button
              
              className="flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] bg-green-500 justify-center p-3"
            >
              <FaPause className="text-black text-xl" />
            </button>
          ) : (
            <button

              className="flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] bg-green-500 justify-center p-3"
            >
              <FaPlay className="text-black text-xl" />
            </button>
          )}
        </div>
        {/* eslint-disable-next-line react/prop-types */}
        <h3 className="text-sm font-semibold my-2">{song.artist}</h3>
        <p className="text-xs text-gray-400 leading-4 mb-8">
          {/* eslint-disable-next-line react/prop-types */}
          {song.title} - {song.artist}
        </p>
      </div>
    )
  );
};

export default Card;
