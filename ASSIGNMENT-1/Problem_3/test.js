// Weather Forecast Tracker

// Initial Array of City Weather Objects
let cityWeather = [
    { cityName: 'New York', temperature: 22, condition: 'Sunny' },
    { cityName: 'Los Angeles', temperature: 28, condition: 'Cloudy' },
    { cityName: 'Chicago', temperature: 18, condition: 'Rainy' },
    { cityName: 'India', temperature: 30, condition: 'Sunny' },
    { cityName: 'Miami', temperature: 27, condition: 'Rainy' }
];

// Function to Add City Weather
function addCityWeather(cityName, temperature, condition) {
    cityWeather.push({ cityName, temperature, condition });
}

// Function to Find Hottest City
function findHottestCity() {
    return cityWeather.find(city => city.temperature === Math.max(...cityWeather.map(c => c.temperature)));
}

// Function to Filter Cities by Condition
function filterByCondition(condition) {
    return cityWeather.filter(city => city.condition === condition);
}

// Function to Create List of City Names and Temperatures
function getCityTemperatures() {
    return cityWeather.map(city => `City: ${city.cityName}, Temp: ${city.temperature}°C`);
}

// Demonstrating Functionality
addCityWeather('Seattle', 19, 'Cloudy');

const hottestCity = findHottestCity();
console.log(`Hottest City: ${hottestCity.cityName}, Temp: ${hottestCity.temperature}°C, Condition: ${hottestCity.condition}`);

console.log('Cities with Rainy condition:', filterByCondition('Rainy'));

console.log('City Temperatures:', getCityTemperatures());