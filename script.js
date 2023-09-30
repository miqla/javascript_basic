// ----- Latihan 1: belajar alert, prompt, dan confirm -------

// alert("hai cantik");

// var mulai = "true";

// while (mulai) {
//   var nama = prompt("masukkan nama:");
//   alert("halo " + nama);

//   mulai = confirm("main lagi?");
// }
// alert("terimakasih");

// ------- Latihan 2: increment --------

// var awal = 1;
// while (awal <= 5) {
//   console.log("Hello World");
//   awal++;
// }

// ------- Latihan 3: increment + variabel --------

// var awal = 1;
// while (awal <= 5) {
//   console.log("Hello World " + awal + "x");
//   awal++;
// }

//  ----- latihan switch -----
// var item = prompt("masukkan nama makanan: \n contoh: nasi, burger");

// switch (item) {
//   case "nasi":
//   case "sayur":
//   case "susu":
//     alert("makanan sehat");
//     break;
//   case "burger":
//   case "softdrink":
//     alert("makanan tidak sehat");
//     break;
//   default:
//     alert("tidak ada di pilihan");
//     break;
// }

//  ------ Perulangan bersarang: segitiga bintang -------
// var s = "";
// for (var i = 0; i < 10; i++) {
//   // s += "*";
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

//  ------ Perulangan bersarang: segitiga bintang kebalik-------
var s = "";
for (var i = 10; i > 0; i--) {
  // s += "*";
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
