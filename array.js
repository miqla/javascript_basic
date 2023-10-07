// Method pada array
var arr = ["Mila", "Mida", "Shalah", "Udin"];

// 1. Join: menampilkan array sebagai isinya, bukan sebagai object
console.log(arr.join(" - "));

// 2. push: menambahkan dibelakang
arr.push("ila", "beta");
console.log(arr);

// 3. pop: Menghilangkan yg dibelakang, bisa berkali-kali
arr.pop();
console.log(arr);

// 4. unshift (menggeser kedalam): menambahkan isi didepan array
arr.unshift("ayank");
console.log(arr);

// 5. shift (menggeser keluar): menghilangkan isi yg didepan
arr.shift();
console.log(arr);

// 6. splice (menggabungkan): menambahkan nilai ditengah array
// splice (indexAwal, mauHapusBerapa, elemenBaru1, elemenBaru2)
arr.splice(2, 1, "mantul", "nolan");
console.log(arr.join());

// 7. slice (memotong): membuat array baru tanpa menghilangkan array lama
// slice(indexAwal, indexAkhir); index akhir ga terambil
var arr2 = arr.slice(1, 4);
console.log(arr2.join(", "));

// 8. forEach (Untuk setiap): sama kayak for untuk looping, tapi beda cara penggunaan
var angka = [1, 5, 3, 19, 28, 176, 2543, 6, 8, 4];
var nama = ["Joni", "Jono", "Jinet", "Jingga"];
// for (i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
angka.forEach(function (e) {
  console.log(e);
});
nama.forEach(function (e, i) {
  console.log("Nama ke " + (i + 1) + " adalah " + e);
});
// nama elemen bebas, boleh huruf/tulisan apa aja

// 9. Map: sama kek forEach, tapi dy bisa ngembaliin nilai, jdi bisa pake return
var angka2 = angka.map(function (m) {
  return m * 2;
});
console.log(angka2.join());

// 10. sort
angka.sort();
console.log(angka.join(" - "));
// sort jika ada angka 2 digit
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" - "));

// 11. Filter: bisa mengembalikan banyak nilai
var angka3 = [4, 10, 6, 8, 56, 9, 1, 2];
var angka4 = angka3.filter(function (x) {
  return x > 5;
});
console.log(angka4.join(" - "));

// 12. Find, cuma bisa mengembalikan 1 nilai
var angka5 = angka3.find(function (x) {
  return x > 5;
});
console.log(angka5);
