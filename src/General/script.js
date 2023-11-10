const x = document.getElementById("demo");

function getLocation() {
  if (navigator.getLocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML == " geolocation is not supported by this browser";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
