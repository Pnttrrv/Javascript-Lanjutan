const Mahasiswa = function () {
  this.nama = 'dika';
  this.umur = 27;
  this.sayHello = () => {
    return `Halo ${this.nama} umur kamu adalah ${this.umur}`;
  };
  //   this.tambahUmur = setInterval(() => {
  //     console.log(this.umur++);
  //   }, 800);
};

let mhs1 = new Mahasiswa();

// const mhs = {
//   nama: 'dika',
//   umur: 27,
//   sayHello: () => {
//     return `Halo ${nama}, umur kamu adalah ${umur}`;
//   },
// };
