import React, { Component } from 'react';
import './App.css';
import Titles from './Titles';
import Forms from './Forms';
import Results from './Results';

const API_KEY = "7bb6178c3b55ffc4cb47b3062cdea9a6";
const imgurl = require ("./img/vector-landscape-sm.jpg")
class App extends Component {
  state = {
    city: undefined,
    temp: undefined,
    humidity: undefined,
    condition: undefined,
    unit:undefined,
    error: undefined
  }
  handleClick = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const unit = e.target.elements.temp.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`);
    const data = await api_call.json();

    this.setState({
      city: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].description,
      unit: unit === "metric" ? "C\u00b0" :"F\u00b0",
      error: ""

    });
console.log(data)
console.log(this.state)
  }
  render() {
    return (
      <div className="ui container" style={{paddingTop:'150px'}}>

      <div className = "ui grid" >
      <div className="six wide column teal "  style={{height:'25em', backgroundImage: 'url('+imgurl+')', display:'flex',justifyContent:'center',alignItems: 'center',boxShadow:'10px 10px 5px #888888'}}>
        <Titles />
        </div>

        <div className="ten wide column purple " style={{boxShadow:'10px 10px 5px #888888'}}>
        <Forms handleClick = {this.handleClick} />

        <Results
        city= {this.state.city}
        temp = {this.state.temp}
        humidity = {this.state.humidity}
        condition = {this.state.condition}
        unit = {this.state.unit}
         />
</div>
      </div>

      </div>
    );
  }
}

export default App;
