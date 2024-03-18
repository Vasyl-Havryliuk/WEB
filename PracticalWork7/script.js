// 1.2.3
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

// 1.2.4
const defaultTriangular = Triangular();
const triangular2 = Triangular(6, 8, 10);
const triangular3 = Triangular(9, 12, 15);

console.log(defaultTriangular);
console.log(triangular2);
console.log(triangular3);

// 1.2.5
function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    }
}

// 1.2.6
const multiplyBy2Pi = PiMultiplier(2);
const multiplyBy3_2Pi = PiMultiplier(3 / 2);
const divideBy2Pi = PiMultiplier(1 / 2);

console.log(multiplyBy2Pi());
console.log(multiplyBy3_2Pi());
console.log(divideBy2Pi());

// 1.2.7
function Painter(color) {
    return function(object) {
        if (object.type !== undefined) {
            console.log(`Object color: ${color}, type: ${object.type}`);
        } else {
            console.log(`Object color: ${color}, No 'type' property occurred!`);
        }
    }
}

// 1.2.8
const PaintBlue = Painter('blue');
const PaintRed = Painter('red');
const PaintYellow = Painter('yellow');

// 1.2.9
const object1 = { maxSpeed: 280, type: 'Sportcar', color: 'magenta' };
const object2 = { type: 'Truck', avgSpeed: 90, loadCapacity: 2400 };
const object3 = { loadCapacity: 2400, color: 'purple', isCar: true };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
