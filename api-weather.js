window.onload = function () {
   
    loadCity();

    function loadCity() {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=Krakow,pl&APPID=2e2c564edb4c314b4577612942e257fe"
        }).done(function (res) {
            for (i = 0; i < 5; i++) {
                function cloneCard() {
                    var containerCard = document.getElementsByClassName("containerCard")[i];
                    var clon = containerCard.cloneNode(true);
                    var newCity = document.getElementsByClassName("card-title")[i];
                    newCity.innerHTML = `${res.city.name}`;
                    var degree = document.getElementsByClassName("display-1")[i];
                    degree.innerHTML = `${res.list[i*8].main.temp}`;
                    var wind = document.getElementsByClassName("grey-text")[i];
                    wind.innerHTML = `${res.list[i*8].wind.speed}`;
                    var rain = document.getElementsByClassName("text-info")[i];
                    rain.innerHTML = `${res.list[i*8].main.humidity}`;
                    var dataSet = document.getElementsByClassName("card-text")[i];
                    dataSet.innerHTML = `${res.list[i*8].dt_txt}`;
                    document.body.appendChild(clon);
                }
                cloneCard();
            }
            
        });
    }
};
