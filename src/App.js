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
  return (
    <div style={getMountainStyle(Mountain)}>
      {list.map((single) => {
        return <SingleWeather info={single} />;
      })}
    </div>
  );
}

const getMountainStyle = (pic) => {
  return {
    ...styles.root,
    background: `url(${pic}) fixed center`,
    overflowY: "none",
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
};

const styles = {
  root: {
    height: "100vh",
    width: "100vw",
  },
};

export default App;
