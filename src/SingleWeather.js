import React from "react";
import "./App.css";
import { apiKey } from "./apiKey";
import styled from "styled-components";

const Mountain = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid white;
  border-radius: 3px;
  margin: 10px;
  background: rgba(255, 255, 255, 0.3);
  text-decoration: inherit;
  color: inherit;

  &:hover {
    cursor: pointer;
    transform: scale(1.023, 1.023);
  }
`;

class SingleWeather extends React.Component {
  state = { city: {} };
  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${this.props.info?.cityId}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState(
          {
            city: result,
          },
          this.getWeatherIcon
        );
      })
      .catch((res) => console.log("catch"));
  }
  getWeatherIcon = () => {
    if (this.state.city.weather[0]) {
      console.log("-------------------");
      fetch(
        `https://openweathermap.org/img/wn/${this.state.city.weather[0].icon}.png`
      )
        .then((res) => this.setState({ icon: res.url }))
        .catch((s) => console.log("catch"));
    }
  };
  kelvinToFahr = () => {
    if (this.state.city.main) {
      const celsius = this.state.city.main.temp - 273;
      return Math.floor(celsius * (9 / 5) + 32);
    }
  };
  decipherName = () => {
    if (this.state.city.name) {
      switch (this.props.info.first) {
        case "Jensen":
          return "Dinosaur";
        case "Manila":
          return "Flaming Gorge";
        default:
          return this.props.info.first;
      }
    }
  };
  render() {
    return (
      <Mountain
        href={`https://openweathermap.org/city/${this.props.info.cityId}`}
      >
        <h1 style={{ fontSize: "22px", textAlign: "center" }}>
          {this.decipherName()}
        </h1>
        <h3
          style={{
            fontSize: "18px",
            textAlign: "center",
            whiteSpace: "pre-line",
          }}
        >
          Current Temp.{"\n"}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={this.state.icon ? this.state.icon : ""} />{" "}
            {this.kelvinToFahr()}
          </div>
        </h3>
      </Mountain>
    );
  }
}

export default SingleWeather;
