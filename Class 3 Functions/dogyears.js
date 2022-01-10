function calculateDogYears(type) {
  if (type === "Dog") {
    let age = prompt("Enter the age");
    let dog = age * 7;
    console.log("Your dog is " + dog + " years in dog years");
  } else if (type === "Human") {
    let age = prompt("Enter the age");
    let human = age / 7;
    console.log("Your dog is " + human + " in human years");
  }else{
    alert("Wrong input. Please input Dog or Human");
  }
}

var species = prompt("Are you entering Dog or Human years");


calculateDogYears(species);
