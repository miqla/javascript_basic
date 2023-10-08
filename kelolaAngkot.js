// Membuat object angkot
function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // Apabila penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length === 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    }
    for (var i = 0; i <= this.penumpang.length; i++) {
      if (this.penumpang[i] == undefined) {
        this.penumpang[i] = namaPenumpang;
        return this.penumpang;
      } else if (this.penumpang[i] == this.penumpang.length) {
        this.penumpang[i] = this.penumpang.push(namaPenumpang);
        return this.penumpang;
      }
    }
  };

  // Apabila penumpang turun dan bayar
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("Angkot masih kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (i == this.penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada didalam angkot");
      }
    }
  };
}

var angkot1 = new Angkot("Beta", ["manna", "kota"], [], 0);
var angkot2 = new Angkot("Chandra", ["manna", "kota"], [], 0);
