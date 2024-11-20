function updateTime() {
    // Berlin
    let berlinElement = document.querySelector("#berlin");
    if (berlinElement) {
      let berlinDateElement = berlinElement.querySelector(".date");
      let berlinTimeElement = berlinElement.querySelector(".time");
      let berlinTime = moment().tz("Europe/Berlin");

  
      berlinDateElement.innerHTML = berlinTime.format("MMMM	Do YYYY");
      berlinTimeElement.innerHTML = berlinTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    // Budapest
    let budapestElement = document.querySelector("#budapest");
    if (budapestElement) {
      let budapestDateElement = budapestElement.querySelector(".date");
      let budapestTimeElement = budapestElement.querySelector(".time");
      let budapestTime = moment().tz("Europe/Budapest");
  
      budapestDateElement.innerHTML = budapestTime.format("MMMM	Do YYYY");
      budapestTimeElement.innerHTML = budapestTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }

  
  
  function updateCity (event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);
 