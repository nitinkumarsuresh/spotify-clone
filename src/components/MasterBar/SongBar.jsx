import {  useState } from "react";

import { AiOutlineHeart, AiOutlinePlaySquare } from "react-icons/ai";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import { BiRepeat, BiShuffle } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { PiMicrophoneStageDuotone, PiQueueLight } from "react-icons/pi";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import { BsArrowsAngleContract, BsSpeakerFill } from "react-icons/bs";

import "./SongBar.css";

const SongBar = ({current,isPlaying,setIsPlaying}) => {
    
   
    
    const handlechange =()=>{
        if(isPlaying){
            current.mp3.pause();
            
        }else{
            current.mp3.play();
            
        }
        setIsPlaying(!isPlaying);
    }
    
   
    const mouseEnter = () => {
        document.querySelector(".active_progress").style.background = "green";
    };
    const mouseLeave = () => {
        document.querySelector(".active_progress").style.background = "#fff";
    };
    const enterVolume = () => {
        document.querySelector("#volume").style.background = "green";
    };
    const leaveVolume = () => {
        document.querySelector("#volume").style.background = "#fff";
    };
    
   
    return (
        <div className="fixed w-full flex px-2 items-center justify-between bottom-0 left-0 h-20 bg-black">
            <div className="w-2/12">
                <div className="flex items-center gap-2">
                    <img src={current ? current.img : "/assets/Arijit-1.jpg"} alt="" className="h-12" />
                    <div>
                        <h3 className="text-xs font-medium mb-1">
                            { current ? current.title : "Arijit Singh"}
                        </h3>
                        <span className="text-[10px]">
                        { current ? current.artist : "Arijit Singh"}
                        </span>
                    </div>
                    <AiOutlineHeart  className="ml-3 cursor-pointer hover:text-green-400" />
                    <CgScreen className="ml-3" />
                </div>
            </div>
            <div className="w-5/12">
                <div className="flex justify-center items-center mb-2 gap-6">
                    <BiShuffle />
                    <IoMdSkipBackward  />
                    {isPlaying ? (
                        <button
                            onClick={handlechange}
                            className="flex items-center rounded-[50%] bg-white justify-center p-2"
                        >
                            <FaPause className="text-black text-lg" />
                        </button>
                    ) : (
                        <button
                        onClick={handlechange}
                            className="flex items-center rounded-[50%] bg-white justify-center p-2"
                        >
                            <FaPlay className="text-black text-lg" />
                        </button>
                    )}
                    <IoMdSkipForward  />
                    <BiRepeat />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs">5:00</span>
                    <div className="relative w-full flex items-center">
                        <input
                            type="range"
                            name=""
                            min={0}
                            
                            
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            className="w-full block"
                            max={100}
                        />

                        <div
                            className={`active_progress w-[%]`}
                        ></div>
                    </div>
                    <span className="text-xs">{}</span>
                </div>
            </div>
            <div className="w-2/12 flex items-center gap-2">
                <AiOutlinePlaySquare className="text-2xl" />
                <PiMicrophoneStageDuotone className="text-2xl" />
                <PiQueueLight className="text-2xl" />
                <BsSpeakerFill className="text-2xl" />
              \
                <div className="relative w-full flex items-center">
                    <input
                        type="range"
                        name=""
                        min={0}
                        onMouseEnter={enterVolume}
                        onMouseLeave={leaveVolume}
                        
                        
                        className="w-full block"
                        max={100}
                    />
                    <div
                        id="volume"
                        className={`active_progress w-[%]`}
                    ></div>
                </div>

                <BsArrowsAngleContract />
            </div>
            <div className="hidden">
                <div className="w-[1%]"></div>
                <div className="w-[2%]"></div>
                <div className="w-[3%]"></div>
                <div className="w-[4%]"></div>
                <div className="w-[5%]"></div>
                <div className="w-[6%]"></div>
                <div className="w-[7%]"></div>
                <div className="w-[8%]"></div>
                <div className="w-[9%]"></div>
                <div className="w-[10%]"></div>
                <div className="w-[11%]"></div>
                <div className="w-[12%]"></div>
                <div className="w-[13%]"></div>
                <div className="w-[14%]"></div>
                <div className="w-[15%]"></div>
                <div className="w-[16%]"></div>
                <div className="w-[17%]"></div>
                <div className="w-[18%]"></div>
                <div className="w-[19%]"></div>
                <div className="w-[20%]"></div>
                <div className="w-[21%]"></div>
                <div className="w-[22%]"></div>
                <div className="w-[23%]"></div>
                <div className="w-[24%]"></div>
                <div className="w-[25%]"></div>
                <div className="w-[26%]"></div>
                <div className="w-[27%]"></div>
                <div className="w-[28%]"></div>
                <div className="w-[29%]"></div>
                <div className="w-[30%]"></div>
                <div className="w-[31%]"></div>
                <div className="w-[32%]"></div>
                <div className="w-[33%]"></div>
                <div className="w-[34%]"></div>
                <div className="w-[35%]"></div>
                <div className="w-[36%]"></div>
                <div className="w-[37%]"></div>
                <div className="w-[38%]"></div>
                <div className="w-[39%]"></div>
                <div className="w-[40%]"></div>
                <div className="w-[41%]"></div>
                <div className="w-[42%]"></div>
                <div className="w-[43%]"></div>
                <div className="w-[44%]"></div>
                <div className="w-[45%]"></div>
                <div className="w-[46%]"></div>
                <div className="w-[47%]"></div>
                <div className="w-[48%]"></div>
                <div className="w-[49%]"></div>
                <div className="w-[50%]"></div>
                <div className="w-[51%]"></div>
                <div className="w-[52%]"></div>
                <div className="w-[53%]"></div>
                <div className="w-[54%]"></div>
                <div className="w-[55%]"></div>
                <div className="w-[56%]"></div>
                <div className="w-[57%]"></div>
                <div className="w-[58%]"></div>
                <div className="w-[59%]"></div>
                <div className="w-[60%]"></div>
                <div className="w-[61%]"></div>
                <div className="w-[62%]"></div>
                <div className="w-[63%]"></div>
                <div className="w-[64%]"></div>
                <div className="w-[65%]"></div>
                <div className="w-[66%]"></div>
                <div className="w-[67%]"></div>
                <div className="w-[68%]"></div>
                <div className="w-[69%]"></div>
                <div className="w-[70%]"></div>
                <div className="w-[71%]"></div>
                <div className="w-[72%]"></div>
                <div className="w-[73%]"></div>
                <div className="w-[74%]"></div>
                <div className="w-[75%]"></div>
                <div className="w-[76%]"></div>
                <div className="w-[77%]"></div>
                <div className="w-[78%]"></div>
                <div className="w-[79%]"></div>
                <div className="w-[80%]"></div>
                <div className="w-[81%]"></div>
                <div className="w-[82%]"></div>
                <div className="w-[83%]"></div>
                <div className="w-[84%]"></div>
                <div className="w-[85%]"></div>
                <div className="w-[86%]"></div>
                <div className="w-[87%]"></div>
                <div className="w-[88%]"></div>
                <div className="w-[89%]"></div>
                <div className="w-[90%]"></div>
                <div className="w-[91%]"></div>
                <div className="w-[92%]"></div>
                <div className="w-[93%]"></div>
                <div className="w-[94%]"></div>
                <div className="w-[95%]"></div>
                <div className="w-[96%]"></div>
                <div className="w-[97%]"></div>
                <div className="w-[98%]"></div>
                <div className="w-[99%]"></div>
                <div className="w-[100%]"></div>
            </div>
        </div>
    );
};

export default SongBar;
