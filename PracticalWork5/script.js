let car1 = new Object();
car1.color = "red";
car1.maxSpeed = 120;
car1.driver = {
  name: "Havryliuk Vasyl",
  category: "C",
  personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

let car2 = new Object();
car2.color = "blue";
car2.maxSpeed = 100;
car2.driver = {
  name: "Havryliuk Vasyl",
  category: "B",
  personalLimitations: null
};
car2.tuning = false;
car2.numberOfAccidents = 2;

car1.drive = function() {
  console.log("I am not driving at night");
};
car1.drive(); // виведе "I am not driving at night" у консоль

car2.drive = function() {
  console.log("I can drive anytime");
};
car2.drive(); // виведе "I can drive anytime" у консоль

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};

Truck.prototype.trip = function() {
  if (!this.driver) {
    console.log("No driver assigned");
  } else {
    let message = "Driver " + this.driver.name;
    message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
    message += " and has " + this.driver.experience + " years of experience";
    console.log(message);
  }
};

let truck1 = new Truck("green", 5000, 80, "Volvo", "VNL");
truck1.AssignDriver("Havryliuk Vasyl", true, 5);
truck1.trip(); // виведе повідомлення у консоль

let truck2 = new Truck("yellow", 6000, 90, "Mercedes", "Actros");
truck2.AssignDriver("Indiana Jones", false, 8);
truck2.trip(); // виведе повідомлення у консоль
