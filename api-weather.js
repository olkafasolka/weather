window.onload = function() {
  // var cityList = document.getElementById("cityList");
  var bodyCard = document.getElementsByClassName("card-body");
  loadCity();
  function loadCity() {
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/forecast?q=Krakow,pl&APPID=2e2c564edb4c314b4577612942e257fe"
    }).done(function(res) {
      // for (i = 0; i < res.list.length; i++) {
      var newCity = document.getElementsByClassName("card-title")[0];
      newCity.innerHTML = `${res.city.name}`;
      //bodyCard.appendChild(newCity);
      // }
    });
  }
};

// res.list[i].dt_txt
