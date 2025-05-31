// ❌ Salah:
// function hitung(p, l){
// return p*l}

// ✅ Benar:
/**
 * Menghitung luas persegi panjang.
 * @param {number} length - Panjang sisi
 * @param {number} width - Lebar sisi
 * @returns {number} Luas
 */
function calculateArea(length, width) {
  return length * width;
}

// ❌ Salah:
// function k(a,b){return 2*(a+b)}

// ✅ Benar:
/**
 * Menghitung keliling persegi panjang.
 * @param {number} length - Panjang sisi
 * @param {number} width - Lebar sisi
 * @returns {number} Keliling
 */
function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

module.exports = {
  calculateArea,
  calculatePerimeter,
};
