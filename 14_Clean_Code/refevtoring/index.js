const { getGradeByScore } = require('./utils/gradeUtils');

// Contoh penggunaan fungsi
const studentScores = [87, 75, 68, 59, 42, 30];

studentScores.forEach((score, index) => {
  console.log(`Mahasiswa ${index + 1}: Skor = ${score}, Nilai = ${getGradeByScore(score)}`);
});
