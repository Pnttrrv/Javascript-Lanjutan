const spanJumlahDurasi = document.querySelector('.total-durasi');
const spanJumlahVid = document.querySelector('.jumlah-video');
const jl = Array.from(document.querySelectorAll('[data-duration]'));

const jumlahvid = jl.filter((e) => e.innerHTML.includes('Javascript'));
console.log(jumlahvid);

// // jl.forEach((text) => {
// //   if (text.innerHTML.includes('Javascript')) {
// //     jumlahvid.push(text);
// //   }
// // });

spanJumlahVid.innerHTML = jumlahvid.length;

let arrDurasi = jl
  .filter((e) => e.innerHTML.includes('Javascript'))
  .map((e) => e.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(':').map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((a, b) => a + b);

let menit = (arrDurasi / 60).toFixed(0);
let jam = (menit / 60).toFixed(0);
let totmen = (menit / 60 - jam).toFixed(2);
// let bulat = jam.toFixed(2);
console.log(totmen);

spanJumlahDurasi.innerHTML = `${jam} jam, ${totmen} menit`;

// let waktu = jl
//   .filter((e) => e.innerHTML.includes('Javascript'))
//   .map((e) => e.dataset.duration)
//   .map((time) => {
//     const parts = time.split(':');
//     let jumlahTime = parseInt(parts[0] * 60) + parseInt(parts[1]);
//     console.log(parts);
//     console.log(jumlahTime);
//   });

// console.log('==========');

// let jumlahWaktu = jl
//   .filter((e) => e.innerHTML.includes('Javascript'))
//   .map((e) => e.dataset.duration)
//   .map((time) => {
//     const parts = time.split(':').map((part) => parseFloat(part));
//     let jumlahTime = parts[0] * 60 + parts[1];
//     console.log(jumlahTime);
//   });
//   .reduce((menit, detik) => menit + detik);

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
