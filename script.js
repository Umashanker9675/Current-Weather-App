// http://api.weatherapi.com/v1/current.json?key=b9ad56fff6af4079b04140100261706&q=mumbai&aqi=no

const temperatureField = document.querySelector("#tempe");
const locationField = document.querySelector(".city-name p");
const dateandTimeField = document.querySelector(".date-time");
const conditionField = document.querySelector(".condition");
const searchField = document.querySelector(".search-area");
const form = document.querySelector('form');
const feelsLike= document.querySelector(".Feels");



form.addEventListener('submit', searchForLocation);

let target = 'Roorkee';



const fetchResults = async (targetLocation) =>{
  let url = `http://api.weatherapi.com/v1/current.json?key=b9ad56fff6af4079b04140100261706&q=${targetLocation}&aqi=no`

  const res = await fetch(url);

  const data = await res.json();

  console.log(data);

  let locationName = data.location.name;
  let time = data.location.localtime;
  let temperature = data.current.temp_c;
  let condition = data.current.condition.text;
  let feels = data.current.feelslike_c;

  updateDetails(temperature, locationName, time, condition, feels);

}

function updateDetails(temperature, locationName, time, condition, feels){
  temperatureField.innerText = Math.round(temperature) +"°C";
  locationField.innerText = locationName;
  dateandTimeField.innerText = time;
  conditionField.innerText = condition;
  feelsLike.innerText = `Feels Like ${Math.round(feels)}°C`;
}

function searchForLocation(e){
  e.preventDefault();

  
   target = searchField.value;

  fetchResults(target);
}

fetchResults(target);