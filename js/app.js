const loadData = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const API_KEY = `ce91bd5e02a7ab88d4ed64017aa6130e`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
function displayTemp(tempData) {
    console.log(tempData)
    setInnerText('city', tempData.name);
    setInnerText('temp', tempData.main.temp);
    setInnerText('weather', tempData.weather[0].main);

    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${tempData.weather[0].icon}@2x.png`;

    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);

}