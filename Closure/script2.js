// const Mahasiswa = function () {
//   this.nama = 'dika';
//   this.umur = 27;
//   this.sayHello = () => {
//     return `Halo ${this.nama} umur kamu adalah ${this.umur}`;
//   };
//   // setInterval(() => {
//   //   console.log(this.umur++);
//   // }, 800);
// };

// let mhs1 = new Mahasiswa();

// // const mhs = {
// //   nama: 'dika',
// //   umur: 27,
// //   sayHello: () => {
// //     return `Halo ${nama}, umur kamu adalah ${umur}`;
// //   },
// // };

const box = document.querySelector('.box');

box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';
  if (box.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
