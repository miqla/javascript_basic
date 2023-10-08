// Membuat object (literal)
var mahasiswaO = {
  nama: "Mila",
  umur: 25,
  lulus: true,
  alamat: {
    jalan: "Jalan pegangsaan timur no 2",
    kota: "bandung",
    provinsi: "Jawa Barat",
  },
};
// this pada objek literal, mengembalikan object yg bersangkutan

// Object dengan function declaration
function membuatObjectMahasiswa(nama, umur, jurusan) {
  // Deklarasikan dulu
  var mhs = {};
  mhs.nama = nama;
  mhs.umur = umur;
  mhs.jurusan = jurusan;
  return mhs; //kembalikan nilai
}
// menambahkan data dengan memanggil funtion
mhs2 = membuatObjectMahasiswa("agus", 26, "Teknik Kimia");
// this pada funct declaration mengembalikan object global / window

// Constructor, nama funtionnya biasanya pake huruf kapital utk membedakan dy dengan function declaration
function Mahasiswa(nama, umur, jurusan) {
  // var this = {};  gaperlu deklarasi kek gini
  this.nama = nama;
  this.umur = umur;
  this.jurusan = jurusan;
  // return this;  gaperlu returnn
}
// memanggil constructor harus ada new, untuk membedakan dy dengan declaration, kalo gapake new harus ada deklarasi dan return nya
mhs3 = new Mahasiswa("erik", 22, "Teknik Mesin");
// this pada constructor mengembalikan object yang (new) baru dibuat
