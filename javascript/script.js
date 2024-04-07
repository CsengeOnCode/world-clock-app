function updatetime() {
  let losAngelesElemet = document.querySelector("#los-angeles");
  if (losAngelesElemet) {
    let losAngelesDateElemet = losAngelesElemet.querySelector(".date");
    let losAngelesTimeElemet = losAngelesElemet.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElemet.innerHTML = moment().format("MMMM Do YYYY");

    losAngelesTimeElemet.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let parisElemet = document.querySelector("#paris");
  if (parisElemet) {
    let parisDateElemet = parisElemet.querySelector(".date");
    let parisTimeElemet = parisElemet.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElemet.innerHTML = moment().format("MMMM Do YYYY");

    parisTimeElemet.innerHTML = parisTime.format(
      "h:mm:ss [<small> ]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

updatetime();
setInterval(updatetime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
