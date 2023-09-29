//fungsi untuk menghiutng luas persegi
exports.hitungLuasPersegi = function (sisi) {
    return sisi *sisi;
};

//fungsi untuk menghitung keliling persegi
exports.hitungKelilingPersegi = function (sisi){
    return 4*sisi;
} ;

//fungsi untuk menghitung luas persegi panjang
exports.hitungLuasRectangle = function (panjang, lebar) {
    return panjang*lebar;
};

//fungsi untuk menghitung keliling persegi panjang
exports.hitungKelilingRectangle = function (panjang, lebar) {
    return 2 * (panjang + lebar);
};