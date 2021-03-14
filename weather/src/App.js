import { useState } from "react";
import { Header, Segment } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import WeatherTable from "./components/WeatherTable";

function App () {
  
  const [days,setWeatherData] = useState(
         [
        { day: "Monday", temp: 22, windDirection: "north-east", windSpeed: 10 , type:"Sunny", id: 1 },
        { day: "Tuesday", temp: 14, windDirection: "north-west", windSpeed: 14, type: "Rainy", id: 2 },
        { day: "Wednesday", temp: 17, windDirection: "south-east", windSpeed: 20, type: "Cloudy", id: 3},
        { day: "Thursday", temp: 22, windDirection: "north-east", windSpeed: 22, type: "Sunny", id: 4 },
        { day: "Friday", temp: 14, windDirection: "north-west", windSpeed: 10, type: "Rainy", id: 5 },
        { day: "Saturday", temp: 18, windDirection: "south-east", windSpeed: 18, type: "Cloudy", id: 6 },
        { day: "Sunday", temp: 19, windDirection: "north-east", windSpeed: 15, type: "Sunny", id: 7 },
        ])
  const [tempUnit, setTempUnit] = useState('C');
  const [windSpeedUnit, setWindSpeedUnit] = useState('m/s');

    return(
      
      <div>
        <Segment style={{ marginTop: "20px" }}>
        <Header as="h1">Weather</Header>
      </Segment>
      <Segment>
        <WeatherTable tableData={days} tempUnit={tempUnit} windSpeedUnit={windSpeedUnit} />
      </Segment>
      </div>
    )
  }
export default App;