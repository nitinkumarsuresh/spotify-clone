import {  useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaExternalLinkAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { songs } from "./Home/Home";


const Navbar = () => {
  

  

  

  const location = useLocation();
  const [query, setQuery] = useState("");
  // const [filteredsongs,setFilteredSongs]=useState([]);
  const filterSongs = (e) => {
    setQuery(e.target.value);
    const fil = songs.filter((song) => {
      if (
        song.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.artist.toLowerCase().includes(e.target.value.toLowerCase())
      )
        return song;
    });
  //   if (e.target.value === "") setFilteredSongs([]);
  //   else setFilteredSongs(fil);

   };
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate()

  const logoutUser = () => {

      localStorage.removeItem('email')
      localStorage.removeItem('name')
      localStorage.removeItem('password')
      localStorage.removeItem('access')
      console.log("Logout success")
      navigate('/')
      
  }
  return (
    <header className="flex sticky top-0 z-50 justify-between ml-2 rounded-[6px]  mt-2 px-8 secondary_bg items-center ">
      <div className="flex gap-2 items-center  w-1/2">
        <FaAngleLeft className="bg-white/10 text-4xl p-1  rounded-[50%] " />
        <FaAngleRight className="bg-white/10 text-4xl p-1  rounded-[50%] " />
        <div
          className={`${
            location.pathname !== "/search" ? "opacity-0" : ""
          } w-full text-left py-4 relative`}
        >
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Search"
            autoComplete="off"
            value={query}
            onChange={filterSongs}
            className={`block  w-full rounded-full pl-12 border-0  text-gray-300 shadow-sm ring ring-transparent placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white outline-none p-3 hover:ring-white/20 bg-[#1a1919]`}
          />
          <FaSearch className="absolute left-4 top-8" />
        </div>
      </div>

      <div>
        {localStorage.getItem("access")===null ? (
          <div>
            <Link
              to={"/signup"}
              className="rounded-full  mt-4 px-8 text-base  py-2 text-white- font-semibold"
            >
              Sign Up
            </Link>

            <Link
              to={"/login"}
              className="rounded-full text-black mt-4 px-8 text-base  py-3 bg-white font-semibold"
            >
              Log in
            </Link>
          </div>
        ) : (
          <div className="relative ">
            <button onClick={() => setShowDropDown(!showDropDown)}>
              <div className="flex gap-2 text-xl "><FaUser className="mt-1 " />{localStorage.getItem("name")}</div>
              
            </button>
            {showDropDown && (
              <div className="absolute dropdown bg-[#282828] top-8 text-sm right-0 w-[12rem]">
                <ul className="p-1">
                  <li className="">
                    <Link
                      className="flex p-2 justify-between hover:bg-white/10"
                      to={"/account"}
                    >
                      <span>Account</span> <FaExternalLinkAlt />
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link
                      className="flex p-2 justify-between hover:bg-white/10"
                      to={"/account"}
                    >
                      <span>Profile</span>{" "}
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link
                      className="flex p-2 justify-between hover:bg-white/10"
                      to={"/account"}
                    >
                      <span>Upgrade to Premium</span> <FaExternalLinkAlt />
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link
                      className="flex p-2 justify-between hover:bg-white/10"
                      to={"/account"}
                    >
                      <span>Settings</span>
                    </Link>{" "}
                  </li>
                  <li className="">
                    <button
                      onClick={logoutUser}
                      className="p-2 w-full text-left border-t border-white/10  hover:bg-white/10"
                    >
                      <span>Log out</span>
                    </button>{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
