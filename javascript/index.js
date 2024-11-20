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
  
  
  updateTime();
  setInterval(updateTime, 1000);


  
 