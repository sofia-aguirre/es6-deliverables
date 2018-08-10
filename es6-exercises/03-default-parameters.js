// Convert the driveTo method below to use ES6 default parameters.

var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: null,
  driveTo:(place) => this.location = place || "Home",
}

console.log(myRide.driveTo(myRide.location));