// Welcome message
alert("Tebak angka dari: 1 - 10\nKamu punya 3 kesempatan");
// Tangkap input player
var player = parseInt(prompt("Masukkan angka tebakan dari 1 - 10"));
// Tangkap input komputer
var comp = Math.random();
comp =
  comp <= 0.1
    ? 1
    : comp <= 0.2
    ? 2
    : comp <= 0.3
    ? 3
    : comp <= 0.4
    ? 3
    : comp <= 0.5
    ? 5
    : comp <= 0.6
    ? 6
    : comp <= 0.7
    ? 7
    : comp <= 0.8
    ? 8
    : comp <= 0.9
    ? 9
    : 10;
// rules
var hasil = player == comp ? "BENAR" : player < comp ? "KURANG" : "LEBIH";
// hasil
if (hasil == "BENAR") {
  alert("Selamat, Angka yang anda masukkan benar");
} else {
  for (var i = 3; i > 0; i--) {
    if (hasil == "KURANG") {
      alert(
        "Tebakan Anda " +
          hasil +
          "\nAnda Masih memiliki " +
          (i - 1) +
          " kali kesempatan"
      );
      player = parseInt(prompt("Masukkan Angka"));
    } else {
      alert(
        "Tebakan anda " +
          hasil +
          "\nAnda Masih memiliki " +
          (i - 1) +
          " kali kesempatan"
      );
      player = parseInt(prompt("Masukkan Angka"));
    }
  }
  alert("Kesempatan Anda sudah habis, Angka yang benar adalah: " + comp);
}
