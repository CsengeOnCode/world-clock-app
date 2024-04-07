function updatetime() {
  let losAngelesElemet = document.querySelector("#los-angeles");
  let losAngelesDateElemet = losAngelesElemet.querySelector(".date");
  let losAngelesTimeElemet = losAngelesElemet.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElemet.innerHTML = moment().format("MMMM Do YYYY");

  losAngelesTimeElemet.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElemet = document.querySelector("#paris");
  let parisDateElemet = parisElemet.querySelector(".date");
  let parisTimeElemet = parisElemet.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElemet.innerHTML = moment().format("MMMM Do YYYY");

  parisTimeElemet.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updatetime();
setInterval(updatetime, 1000);
