// ❌ Salah:
// var p = 10
// var l=5
// console.log("Luas: "+p*l)

// ✅ Benar:
const { calculateArea, calculatePerimeter } = require('./utils/rectangleUtils');

const length = 10;
const width = 5;

console.log(`Panjang: ${length}`);
console.log(`Lebar: ${width}`);
console.log(`Luas: ${calculateArea(length, width)}`);
console.log(`Keliling: ${calculatePerimeter(length, width)}`);
