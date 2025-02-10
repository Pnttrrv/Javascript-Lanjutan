const spanJumlahDurasi = document.querySelector('.total-durasi');
const spanJumlahVid = document.querySelector('.jumlah-video');
const jl = Array.from(document.querySelectorAll('[data-duration]'));

const jumlahvid = [];
jl.forEach((text) => {
  if (text.innerHTML.includes('Javascript')) {
    jumlahvid.push(text);
  }
});

spanJumlahVid.innerHTML = jumlahvid.length;
console.log(jumlahvid);

// let arrDurasi = [];
// let totDurasi = jl.forEach((atri) => {
//   if (atri.innerHTML.includes('Javascript')) {
//     let a = atri.getAttribute('data-duration');
//     arrDurasi.push(a);
//   }
// });
// let h = [];
// let j = arrDurasi.toString();
// let x = j.split(':');
// // let j = arrDurasi.forEach((x) => {
// //   x.split(':');
// //   h.push(x);
// //   console.log(x);
// // });
// // for (let i = 0; i < arrDurasi.length; i++) {
// //   let j = arrDurasi.toString();
// //   x = j.split(':');
// //   h.push(x);
// // }
// // let arrDurasi2 =
// console.log(arrDurasi);

// console.log(x);
