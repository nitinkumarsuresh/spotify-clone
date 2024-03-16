import Layout from "../../Layout/Layout";

import Card from "../Card/Card";

import SongBar from "../MasterBar/SongBar";
import { useEffect, useState } from "react";




import Navbar from "../Navbar";

import Footer from "../Footer/Footer";


export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Tum Hi Ho.mp3"),
    img: "/assets/Arijit-1.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/ae.mp3"),
    img: "/assets/Arijit-2.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Mirchi Awards",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Mashup.mp3"),
    img: "/assets/Arijit-3.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Judaiyaan",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Judaiyaan.mp3"),
    img: "/assets/Arijit-4.jpg",
  },
  
  {
    id: Math.random() * Date.now(),
    title: "Tu hi Hai Aashiqui",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Tu Hi Hai Aashiqui.mp3"),
    img: "/assets/Arijit-2.jpg",
  },
];



const Home = () => {
  const [currentsong,setCurrentSong]=useState(null);
  const [auth,setAuth]=useState(localStorage.getItem("access")!==null);
  useEffect(()=>{
    console.log(currentsong);
  },[currentsong])
  return (
    <Layout auth={auth}>
      <Navbar setAuth={setAuth}/>

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song}  setcurrent={setCurrentSong} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} setcurrent={setCurrentSong} />;
          })}
        </div>
      </div>
      <Footer/>
        <SongBar current={currentsong} />
    </Layout>
  );
};

export default Home;
