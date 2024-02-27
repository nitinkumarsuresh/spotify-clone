import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BackSVG from "../Images/BackSVG";
import ForwardSVG from "../Images/ForwardSVG";
import playListImage from "../Images/playListImage.png";
import cn from "classnames";
import PlayGreenSVG from "../Images/PlayGreenSVG";
import WhiteHeartSVG from "../Images/WhiteHeartSVG";
import ThreeDotsSVG from "../Images/ThreeDotsSVG";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SongBar from "../MasterBar/SongBar";
import { useState } from "react";
import {
  
  faHeart,
  faCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(() => ({
  headerContainer: {
    padding: "0px 20px",
    backgroundColor: "#800000",
    height: "35vh",
    color: "white",
  },
  firstRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  firtRowWords: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    cursor: "pointer",
  },
  firtRowWords1: {
    display: "flex",
    alignItems: "center",
  },
  fontStyle: {
    fontFamily: "DM Sans",
    fontSize: "15px",
    fontWeight: 700,
  },
  exploreFont: {
    marginRight: "15px",
    padding: " 5px 10px",
    borderRadius: "12px",
    color: "black",
    backgroundColor: "white",
  },
  installApp: {
    borderRadius: "12px",
    color: "white",
    backgroundColor: "black",
    padding: " 5px 10px",
  },
  iconMargin: {
    marginRight: "10px",
  },
  secondRow: {
    display: "flex",
    alignItems: "end",
    paddingBottom: "1px",
    marginBottom: "35px",
  },
  playListInfo: {
    marginLeft: "12px",
    alignItems: "baseline",
    marginBottom: "8px",
  },
  playList: {
    fontSize: "14px",
    color: "white",
    fontWeight: "300",
  },
  playListName: {
    fontSize: "40px",
    fontWeight: "800",
    color: "white",
  },
  thirdLine: {
    fontWeight: "600",
    marginTop: "3px",
  },
  songsContainer: {
    backgroundColor: "black",
    height: "100vh",
    position: "relative",
    overflowY: "scroll",
  },
  songsColumnHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0px 15px",
    width: "100%",
  },
  songColumnName: {
    color: "white",
    fontWeight: 900,
    padding: "5px",
    textAlign: "start",
  },
  songsList: {
    color: "white",
  },
  songTable: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "start",
  },
  songColumnValue: {
    padding: "10px",
    color: " white",
    fontWeight: "300",
  },
  songRow: {
    "&:hover": {
      adding: "10px",
      backgroundColor: "#403B3C",
      borderRadius: "9px",
    },
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "black",
    textAlign: "start",
  },

  songTableBody: {
    paddingTop: "40px",
  },
  tableContainer: {
    position: "relative",
  },
}));

function SelectedPlaylist() {
  const [alert,setAlert]=useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const songName = [
    "Shape of You",
    "Despacito",
    "Blinding Lights",
    "Uptown Funk",
    "Closer",
    "Sicko Mode",
    "Old Town Road",
    "Thinking Out Loud",
    "Bad Guy",
    "Someone You Loved",
    "Happy",
    "Waka Waka",
    "See You Again",
    "Hello",
    "All About That Bass",
    "Sorry",
    "What Do You Mean?",
    "Shut Up and Dance",
    "Perfect",
    "'God's Plan'",
    "Dance Monkey",
    "Believer",
    "Havana",
    "Dark Horse",
    "Roar",
    "Counting Stars",
    "Radioactive",
    "Happier",
    "Can't Stop the Feeling!",
    "Faded",
    "Rockstar",
    "Stressed Out",
    "Sunflower",
    "Rain On Me",
    "Watermelon Sugar",
    "Circles",
    "Don't Let Me Down",
    "Wrecking Ball",
    "Bad Romance",
    "Royals",
    "Taki Taki",
    "Treat You Better",
    "Hotline Bling",
    "WAP",
    "Shape of You",
    "Despacito",
    "Blinding Lights",
    "Uptown Funk",
    "Closer",
    "Sicko Mode",
    "Old Town Road",
    "Thinking Out Loud",
    "Bad Guy",
    "Someone You Loved",
    "Happy",
    "Waka Waka",
    "See You Again",
    "Hello",
    "All About That Bass",
    "Sorry",
    "What Do You Mean?",
    "Shut Up and Dance",
    "Perfect",
    "God's Plan",
    "Dance Monkey",
    "Believer",
    "Havana",
    "Dark Horse",
    "Roar",
    "Counting Stars",
    "Radioactive",
    "Happier",
    "Can't Stop the Feeling!",
    "Faded",
    "Rockstar",
    "Stressed Out",
    "Sunflower",
    "Rain On Me",
    "Watermelon Sugar",
    "Circles",
    "Don't Let Me Down",
    "Wrecking Ball",
    "Bad Romance",
    "Royals",
    "Taki Taki",
    "Treat You Better",
    "Hotline Bling",
    "WAP",
    
  ];
  const albumNames = ["Leo", "Thuppaki", "Maari", "Theri", "Blue Star"];

  const dates = [
    "2023-01-01",
    "2023-02-15",
    "2023-03-20",
    "2023-04-10",
    "2023-05-05",
  ];

  const durations = ["3:45", "5:10", "4:30", "4:20", "3:55"];

  return (
    <Layout>
      <div>
        <div className={classes.headerContainer}>
          <div className={classes.firstRow}>
            <Box display="flex" mt={1}>
              <Box mr={1} onClick={() => navigate("/")}>
                <BackSVG />
              </Box>
              <Box>
                {" "}
                <ForwardSVG />
              </Box>
            </Box>
            <Box className={classes.firtRowWords}>
              <p className={cn(classes.fontStyle, classes.exploreFont)}>
                Explore premium
              </p>
              <Box
                style={{ display: "flex", padding: "7px" }}
                className={cn(classes.fontStyle, classes.installApp)}
              >
                <FontAwesomeIcon
                  icon={faCircleDown}
                  size="lg"
                  style={{ marginRight: "6px" }}
                />
                Install App
              </Box>
            </Box>
          </div>
          <div className={classes.secondRow}>
            <Box>
              <img
                style={{ marginTop: "10px" }}
                src={playListImage} 
                alt="playListNamePic"
                height={170}
                width={120}
              />
            </Box>
            <Box className={classes.playListInfo}>
              <Box className={cn(classes.fontStyle, classes.playList)}>
                PlayList
              </Box>
              <Box className={cn(classes.fontStyle, classes.playListName)}>
                Trending Now Tamil
              </Box>
              <Box
                className={cn(
                  classes.fontStyle,
                  classes.playList,
                  classes.thirdLine
                )}
              >
                Spotify - 459,053 likes
              </Box>
            </Box>
          </div>
        </div>
        <div className={classes.songsContainer}>
          <div className={classes.stickyHeader}>
            <Box className={classes.firtRowWords}>
              <Box mr={2}>
                <PlayGreenSVG />
              </Box>
              <Box mr={2}>
                <FontAwesomeIcon icon={faHeart} size="2xl" />
              </Box>
              <Box>
                <ThreeDotsSVG />
              </Box>
            </Box>
          </div>
          <div style={{ margin: "0px 0px" }} className={classes.tableContainer}>
            <table className={classes.songTable}>
              <thead>
                <tr>
                  <th className={cn(classes.fontStyle, classes.songColumnName)}>
                    #
                  </th>
                  <th className={cn(classes.fontStyle, classes.songColumnName)}>
                    Title
                  </th>
                  <th className={cn(classes.fontStyle, classes.songColumnName)}>
                    Album
                  </th>
                  <th className={cn(classes.fontStyle, classes.songColumnName)}>
                    Date added
                  </th>
                  <th className={cn(classes.fontStyle, classes.songColumnName)}>
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody onClick={()=> setAlert(true)}>
                {songName.map((name, index) => (
                  <tr key={index} className={classes.songRow}>
                    <td
                      className={cn(classes.fontStyle, classes.songColumnValue)}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{ display: "flex", gap: "10px" }}
                      className={cn(classes.fontStyle, classes.songColumnValue)}
                    >
                      <img
                        src={playListImage}
                        alt="playListNamePic"
                        height={20}
                        width={30}
                      />
                      {name}
                    </td>
                    <td
                      className={cn(classes.fontStyle, classes.songColumnValue)}
                    >
                      {
                        albumNames[
                          Math.floor(Math.random() * albumNames.length)
                        ]
                      }
                    </td>
                    <td
                      className={cn(classes.fontStyle, classes.songColumnValue)}
                    >
                      {dates[Math.floor(Math.random() * dates.length)]}
                    </td>
                    <td
                      className={cn(classes.fontStyle, classes.songColumnValue)}
                    >
                      {durations[Math.floor(Math.random() * durations.length)]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {alert && <SongBar />}
    </Layout>
    
  );
}

export default SelectedPlaylist;
