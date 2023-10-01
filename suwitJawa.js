// ------ Game Suwit Jawa -------------
var tanya = true;
while (tanya) {
  // tangkap input player
  var player = prompt("Masukkan pilihan: Gajah, Orang, Semut");
  // tangkap input komputer, bangkitkan bilangan random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.68) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  // rules
  var hasil;
  if (player == comp) {
    hasil = "SERI";
  } else if (player == "gajah") {
    // if (comp == "orang") {
    //   hasil = "Menang";
    // } else {
    //   hasil = "KALAH";
    // }
    // gunakan operator ternary untuk menyingkat 5 baris if diatas
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (player == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "Menang";
  } else if (player == "semut") {
    hasil = comp == "gajah" ? "MENANG" : "KALAH";
  } else {
    hasil = "memasukkan jawaban salah";
  }
  // hasil
  alert(
    "Kamu memilih: " +
      player +
      ", Komputer memilih: " +
      comp +
      "\nMaka hasilnya kamu: " +
      hasil
  );
  tanya = confirm("Main lagi ?");
}
alert("Terimakasih sudah bermain");
