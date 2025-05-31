# Refactoring Project – Modul 14 (Guided Practice)

**Nama:** Ade Fatkhul Anam 
**NIM:** 221114051

## Deskripsi Proyek
Contoh proyek sederhana untuk menghitung luas dan keliling persegi panjang. Kode ini telah direfaktor dari versi asal yang tidak mengikuti standar coding menjadi lebih rapi dan terstruktur.

## Perubahan Refactoring

- ❌ Awalnya menggunakan `var` → ✅ diganti dengan `const`
- ❌ Nama fungsi tidak jelas (`hitung`, `k`) → ✅ diganti dengan `calculateArea`, `calculatePerimeter`
- ❌ Tanpa komentar → ✅ Ditambahkan deskripsi dan JSDoc
- ❌ Semua kode di satu file → ✅ Dipisahkan ke `utils/rectangleUtils.js`
- ✅ Indentasi diperbaiki
- ✅ Kode lebih mudah dibaca dan dipahami

## Struktur Folder

refactoring/
├── index.js
├── utils/
│ └── rectangleUtils.js
├── README.md


## Cara Menjalankan

```bash
node index.js
