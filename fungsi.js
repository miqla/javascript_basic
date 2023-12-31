// Fungsi description
function volumeDuaKubus(a, b) {
  var volA = a * a * a;
  var volB = b * b * b;
  var hasil = volA + volB;
  return hasil;
}
console.log(volumeDuaKubus(8, 3));
console.log(volumeDuaKubus(4, 9));

// Arguments = Array yg menyimpan argument yg dikirimkan sebagai input parameter
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
coba = tambah(1, 5, 8, 7, 6, 4);
console.log(coba);

// Refactoring / Menyederhanakan fungsi yg sudah kita buat
function jumlahVolumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}
console.log(jumlahVolumeDuaKubus(8, 3));

// Fungsi rekursif
function tampilAngka(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  tampilAngka(n - 1);
}
tampilAngka(5);

function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
console.log(faktorial(5));

// Fungsi expression
var tampilNama = function (nama) {
  alert("hai, salam kenal " + nama);
};
tampilNama("Mida");
