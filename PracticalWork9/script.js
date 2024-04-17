// Завдання 1.2.3
let arr1 = [
    1,
    5,
    9,
    4,
    {
      name: "TransliteratedName",
      mark: 85,
      subject: "JS"
    },
    function fourthPower(num) {
      return num ** 4;
    },
    function printName(obj) {
      console.log(obj.name);
    },
    -6,
    14
];
  
// Завдання 1.2.4
arr1.forEach(item => console.log(item));
  
// Завдання 1.2.5
arr1.splice(arr1.indexOf(5), 1, 8);
  
// Завдання 1.2.6
arr1.splice(arr1.indexOf(4), 0, "Hello");
  
// Завдання 1.2.7
let arr2 = arr1.filter(item => typeof item === 'function');
  
// Завдання 1.2.8
arr2.forEach(func => console.log(func));
  
// Завдання 1.2.9
let arr3 = arr1.filter(item => typeof item === 'number');
  
// Завдання 1.2.10
arr3.forEach(num => console.log(num));
  
// Завдання 1.2.11
let arr3Reversed = arr3.slice().reverse();
  
// Завдання 1.2.12
arr3Reversed.forEach(num => console.log(num));
  
// Завдання 1.2.13
console.log(arr1.indexOf(-6));
  
// Завдання 1.2.14
let filteredArr1 = arr1.filter(item => typeof item === 'number' && item > 4);
console.log(filteredArr1);
  
// Завдання 1.2.15
arr1.find(item => typeof item === 'function' && item.toString().includes('printName'))(arr1.find(item => typeof item === 'object'));
  
// Завдання 1.2.16
let powerFunc = arr1.find(item => typeof item === 'function' && item.toString().includes('fourthPower'));
console.log(powerFunc(-6));
  
// Завдання 1.2.17
for (let index in arr1) {
    console.log(arr1[index]);
}
  
// Завдання 1.2.18
for (let index in arr1) {
    if (typeof arr1[index] === 'object') {
      for (let prop in arr1[index]) {
        console.log(prop);
      }
    }
}
  
// Завдання 1.2.19
for (let item of arr1) {
    console.log(item);
}
  
// Завдання 1.2.20
arr1.version = "1.0.0";
  
// Завдання 1.2.21
for (let index in arr1) {
    console.log(arr1[index]);
}
  
// Завдання 1.2.22
for (let item of arr1) {
    console.log(item);
}
  
// Завдання 1.2.23
let Petryk = {
    name: "Petryk",
    skill: "JS",
    level: "junior"
};
  
let Mychajlyk = {
    name: "Mychajlyk",
    skill: "HTML/CSS",
    level: "middle"
};
  
let Volodyk = {
    name: "Volodyk",
    skill: "TS",
    level: "trainee"
};
  
// Завдання 1.2.24
let map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);
  
// Завдання 1.2.25
console.log(map1.has("Ivanko"));
  
// Завдання 1.2.26
console.log(map1.has("Volodyk"));
  
// Завдання 1.2.27
for (let key of map1.keys()) {
    console.log(key);
}
  
// Завдання 1.2.28
map1.delete("Mychajlyk");
  
// Завдання 1.2.29
for (let [key, value] of map1.entries()) {
    console.log(`${key} is ${value.level} in ${value.skill}`);
}
  
// Завдання 1.2.30
let set1 = new Set();
set1.add(Petryk);
set1.add(Mychajlyk);
set1.add(Volodyk);
  
// Завдання 1.2.31
let Antypko = {
    name: "Antypko",
    skill: "PHP",
    level: "senior"
};
  
// Завдання 1.2.32
console.log(set1.has(Antypko));
  
// Завдання 1.2.33
console.log(set1.has(Mychajlyk));
  
// Завдання 1.2.34
for (let item of set1) {
    console.log(`${item.name} is ${item.level} in ${item.skill}`);
}
  
// Завдання 1.2.35
set1.delete(Volodyk);
  
// Завдання 1.2.36
for (let item of set1) {
    console.log(`${item.name} is ${item.level} in ${item.skill}`);
}
  