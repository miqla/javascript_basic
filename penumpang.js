var penumpang = ["mila", undefined, "ila"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika Angkot kososng
  if (penumpang.length == 0) {
    // Tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
    // else
  } else {
    // Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log("maaf " + namaPenumpang + " sudah ada didalam angkot");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};
