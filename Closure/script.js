function countScore() {
  let score = 0;

  function tambahScore(point) {
    score += point;
    return `+ ${point} pts`;
  }

  function kurangScore(point) {
    score -= point;
    return `- ${point} pts`;
  }

  function getScore() {
    return score;
  }
  return { tambahScore, kurangScore, getScore };
}

let count = countScore();
count.tambahScore(5);

function getNama({ nama, umur, jurusan, job = 'unemployed' }) {
  console.log(`nama : ${nama}`);
  console.log(`job : ${job}`);
  console.log(`umur : ${umur}`);
}
const person1 = {
  nama: 'dika',
  umur: 27,
  jurusan: 'informatika',
};

const person2 = {
  nama: 'zia',
  umur: 29,
  jurusan: 'farmasi',
  job: 'Apoteker',
};

// const { nama, umur, jurusan, job = 'unemployed' } = person2;
// console.log(nama, job);

getNama(person1);

function salam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}`);
  };
}

const selamatPagi = salam('pagi');
selamatPagi('dika');

const selamatMalam = salam('malam');
selamatMalam('dika');

function hitungCounter() {
  let counter = 0;
  function tambah() {
    counter++;
    console.log(`+ ${counter}`);
  }
  function getCounter() {
    return counter;
  }
  return { tambah, getCounter };
}

let counting = hitungCounter();
counting.tambah();
counting.tambah();
counting.tambah();
counting.tambah();

console.log(counting.getCounter());

let tambah = (angka1, angka2) => angka1 + angka2;

let mahasiswa = ['dika', 'zia', 'fara'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);

let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, panjang: nama.length }));

console.log(jumlahHuruf);
