import fetch from 'node-fetch';

let theCity = "Cebu";

export const getCurrentWeather = async () => {
  let apiKey = "227cc563e20085503cccb34e04686c36";
  let city = theCity;
  if (theCity==="Cebu") {
    theCity = "Manila";
  } else {
    theCity = "Cebu";
  }

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();  
  return data;
};