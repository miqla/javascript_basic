//  ----- Angkot 1 ------
// var angkot = 1;
// while (angkot <= 10) {
//   console.log("Angkot No. " + angkot + " beroperasi dengan baik");
//   angkot++;
// }

//  ----- Angkot 1: Benerin rumus ------
// var jmlAngkot = 10;
// var noAngkot = 1;
// while (noAngkot <= jmlAngkot) {
//   console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//   noAngkot++;
// }

//  ----- Contoh pake for -------
// for (var angkot = 1; angkot <= 11; angkot++) {
//   console.log("Angkot No. " + angkot + " Beroperasi dengan baik");
// }

// ----- Angkot 2 -----------
var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
  noAngkot++;
}
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi");
}
// ----- Cara kedua untuk for
// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi");
// }
