import fetch from 'node-fetch';

let theCity = "Cebu";

export const getCurrentWeather = async () => {
  let apiKey = "fb3338c78ba886f47e29a70d6f64c74c";
  let city = theCity;
  if (theCity==="Cebu") {
    theCity = "Manila";
  } else {
    theCity = "Cebu";
  }

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  if (response.status!=200) {
    return null;
  } else {
    const data = await response.json();  
    return data;
  }
};
