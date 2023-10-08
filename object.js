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

// Constructor
function Mahasiswa(nama, umur, jurusan) {
  // var this = {};
  this.nama = nama;
  this.umur = umur;
  this.jurusan = jurusan;
  // return this;
}
// memanggil constructor harus ada new
mhs3 = new Mahasiswa("erik", 22, "Teknik Mesin");
