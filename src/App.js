import React from "react";
import Mountain from "./MountainRoad.jpg";
import SingleWeather from "./SingleWeather";
import "./App.css";

function App() {
  const list = [
    {
      first: "Jensen",
      second: "Co",
      cityId: "5784154",
      url: "https://www.wunderground.com/dashboard/pws/KUTUTAH2",
    },
    {
      first: "Manila",
      second: "Ut",
      cityId: "5777855",
      url: "https://www.wunderground.com/weather/us/co/dinosaur",
    },
    {
      first: "Jackson",
      second: "Wy",
      cityId: "5733351",
      url: "https://www.wunderground.com/weather/us/wy/jackson",
    },
    {
      first: "Yellowstone",
      second: "Id",
      cityId: "5687489",
      url: "https://www.wunderground.com/weather/KWYS",
    },
  ];
  const determineDay = (index) => {
    switch (index) {
      case 0:
        return "Day 1";
      case 1:
        return "Day 2";
      case 2:
        return "Days 3-4";
      case 3:
        return "Days 5-8";
      default:
        break;
    }
  };
  return (
    <div className="mountain" style={getMountainStyle(Mountain)}>
      <h1 className="letsRide smallBlack" style={styles.header}>
        Let's Ride
      </h1>
      <div style={styles.weather}>
        {list.map((single, index) => {
          return (
            <span style={styles.singleDay}>
              <h1 className="smallBlack" style={styles.dayOne}>
                {determineDay(index)}
              </h1>
              <SingleWeather info={single} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

const getMountainStyle = (pic) => {
  return {
    ...styles.root,
    background: `url(${pic}) fixed center`,
  };
};

const styles = {
  dayOne: {
    margin: "0",
    color: "white",
    fontWeight: 300,
  },
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    margin: "0",
    fontSize: "102px",
    color: "white",
    fontFamily: "Cedarville Cursive",
  },
  singleDay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  weather: {
    overflowY: "scroll",
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "initial",
    width: "100%",
  },
};

export default App;
