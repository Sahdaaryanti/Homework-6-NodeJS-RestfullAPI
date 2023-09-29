//mengimpor modul 'rumus.js'
const perhitungan = require('./perhitungan');

//menentukan nilai sisi persegi dan menentukan panjang serta lebar persegi panjang
let sisiPersegi = 3;
let panjangRectangle = 8;
let lebarRectangle = 6;

// Menggunakan fungsi dari 'rumus.js' untuk menghitung dan mencetak luas dan keliling
console.log("Luas Persegi dengan Sisi " + sisiPersegi + 
    " Adalah " + perhitungan.hitungLuasPersegi(sisiPersegi));
console.log("Keliling Persegi dengan Sisi " + sisiPersegi + 
    " Adalah " + perhitungan.hitungKelilingPersegi(sisiPersegi));
console.log("Luas Persegi Panjang dengan Panjang " + panjangRectangle + " dan Lebar " + lebarRectangle +
    " Adalah " + perhitungan.hitungLuasRectangle(panjangRectangle, lebarRectangle));
console.log("Keliling Persegi Panjang dengan Panjang " + panjangRectangle + " dan Lebar " +lebarRectangle +
    " Adalah " + perhitungan.hitungKelilingRectangle(panjangRectangle, lebarRectangle));