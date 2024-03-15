//Контрольна робота №1 Гаврилюка Василя Васильовича
//Варіант 2

//Завдання 1
function TriangleArea(base = 7, height = 3) {
    const area = (base * height) / 2;
    console.log("Площа трикутника:", area);
}

TriangleArea(3, 6);
TriangleArea(); 

//Завдання 2
function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function(name, experience, hasFamily) {
    this.captain = {
        name: name,
        experience: experience,
        hasFamily: hasFamily
    };
};


const myBoat = new Boat("White", 160, 200, "Yamaha", "USA");
myBoat.AssignCaptain("Jack Sparrow", 30, true);
console.log(myBoat);

//Завдання 3
class SimpleCircle {
    constructor(majorRadius) {
        this.majorRadius = majorRadius;
    }

    get MajorRadius() {
        return this.majorRadius;
    }

    set MajorRadius(value) {
        this.majorRadius = value;
    }
}

class Ellipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }

    static CalculateArea(majorRadius, minorRadius) {
        return Math.PI * majorRadius * minorRadius;
    }
}

const myEllipse = new Ellipse(5, 3);
console.log("Major Radius:", myEllipse.MajorRadius);
console.log("Minor Radius:", myEllipse.minorRadius);
console.log("Area:", Ellipse.CalculateArea(myEllipse.MajorRadius, myEllipse.minorRadius));

//Завдання 4
function SubGenerator(numToSubtract) {
    return function(num) {
        return num - numToSubtract;
    };
}

const subFive = SubGenerator(15);
const subTen = SubGenerator(30);

console.log(subFive(10)); // Виведе: 5 (10 - 5)
console.log(subTen(20)); // Виведе: 10 (20 - 10)
