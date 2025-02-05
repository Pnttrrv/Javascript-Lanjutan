// object literal
// let mahasiswa = {
//   nama: 'Dika',
//   energy: 10,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

// construction
// function Mahasiswa(nama, energy, makan) {
//   this.nama = nama;
//   this.energy = energy;
//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, selamat makan.`);
//   };
//   this.main = function (waktu) {
//     this.energy -= waktu;
//     console.log(`Halo ${this.nama}, selamat bermain.`);
//   };
// }

// let mhs1 = new Mahasiswa('Dika', 10);
// let mhs2 = new Mahasiswa('Zia', 10);

// function declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
//   main: function (waktu) {
//     this.energy -= waktu;
//     console.log(`Halo ${this.nama}, selamat bermain.`);
//   },
//   tidur: function (waktu) {
//     this.energy += waktu * 2;
//     console.log(`Halo ${this.nama}, selamat tidur.`);
//   },
// };

// function mahasiswa(nama, energy, makan) {
//   let mhs = Object.create(methodMahasiswa);
//   mhs.nama = nama;
//   mhs.energy = energy;

//   return mhs;
// }

// let mhs1 = mahasiswa('Zia', 10);
// console.log(mhs1);

function Mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `Halo ${this.nama}, selamat makan.`;
};

Mahasiswa.prototype.main = function (waktu) {
  this.energy -= waktu;
  return `Halo ${this.nama}, selamat bermain.`;
};

Mahasiswa.prototype.tidur = function (waktu) {
  this.energy += waktu * 2;
  return `Halo ${this.nama}, selamat tidur.`;
};

Mahasiswa.prototype.gender = function (gender) {
  this.gender = gender;
  return `Halo ${this.nama}, kamu adalah seorang ${gender}`;
};

let mhs1 = new Mahasiswa('Zia', 10);

let jadwalPelajaran = [];
jadwalPelajaran = [
  { jam: '07.00 - 08.00', pelajaran: 'Bahasa Indonesia', guru: 'Pak ari' },
  { jam: '09.00 - 10.00', pelajaran: 'Bahasa Inggris', guru: 'Pak agus' },
  { jam: '11.00 - 12.00', pelajaran: 'Bahasa France', guru: 'Pak arya' },
];
