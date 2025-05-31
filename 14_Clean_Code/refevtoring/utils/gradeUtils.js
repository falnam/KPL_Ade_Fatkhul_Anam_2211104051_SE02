/**
 * Mengonversi skor mahasiswa menjadi nilai huruf berdasarkan rentang tertentu.
 * @param {number} studentScore - Skor mahasiswa (0–100)
 * @returns {string} Nilai huruf (A, AB, B, BC, C, D, E)
 */
function getGradeByScore(studentScore) {
  const grades = ['A', 'AB', 'B', 'BC', 'C', 'D', 'E'];
  const rangeLimit = [80, 70, 65, 60, 50, 40, 0];

  for (let i = 0; i < rangeLimit.length; i++) {
    if (studentScore >= rangeLimit[i]) {
      return grades[i];
    }
  }

  // Nilai default jika tidak masuk dalam range
  return 'E';
}

module.exports = {
  getGradeByScore,
};
