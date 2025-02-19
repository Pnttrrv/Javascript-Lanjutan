// const mhs = {
//   nama: 'Dika',
//   umur: 27,
//   npm: 15420913,
//   email: 'ndhkptr@gmail.com',
// };

// const ol = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="npm">${mhs.npm}</span>
// </div>`;

// const mhs = [
//   {
//     nama: 'Dika',
//     email: 'ndhkptr@gmail.com',
//   },
//   {
//     nama: 'doddy',
//     email: 'ndhkptr@gmail.com',
//   },
//   {
//     nama: 'erik',
//     email: 'ndhkptr@gmail.com',
//   },
// ];

// const ol = `<div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//   )
//   .join('')}
// </div>`;

// const lagu = {
//   judul: 'tetap dalam jiwa',
//   penyanyi: 'isyana',
//   feat: 'rayi',
// };

// const ol = `<div class="lagu">
// <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi} ${lagu.feat ? `feat ${lagu.feat}` : ''}</li>
// </ul>
// </div>`;

// nestef html fragment

// const mhs = {
//   nama: 'dika',
//   semester: 5,
//   matkul: ['rpl', 'matdis', 'algo', 'pbo'],
// };

// function cetakMataKuliah(matakuliah) {
//   return ` <ul>
//     ${matakuliah.map((mk) => `<li>${mk}</li>`).join('')}

//     </ul>`;
// }
// const ol = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="mhs">${mhs.semester}</span>
// <h4>Mata Kuliah</h4>

// ${cetakMataKuliah(mhs.matkul)}

// </div>`;
// document.body.innerHTML = ol;

const nama = 'Dika';
const umur = 27;

function coba(strings, ...values) {
  //   let str = '';
  //   strings.forEach((Text, i) => {
  //     str += `${Text}${values[i] || ''}`;
  //   });

  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');

  //   console.log(str);
}
let total = 0;
function tambah(...args) {
  for (let angka of args) {
    total += angka;
  }
  return `${total} adalah ${total % 2 == 0 ? 'Genap' : 'Ganjil'}`;
}

// spread operator
let arr1 = [0, 1, 2, 3, '"part 1"'];
let arr2 = [...arr1, '"part 2"', 4, 5, 6, 7];
// console.log(arr2);

let hasil1 = 0;
// rest menampung element dari spread angka
function pertambahan(...args) {
  for (let hasil of args) {
    hasil1 += hasil;
  }
  return hasil1;
}
let angka = [1, 2, 3, 4, 5];
// spread angka untuk masuk ke dalam rest parameter args
let jumlah = pertambahan(...angka);
console.log(jumlah);

// spread concat
let text1 = ['nama saya'];
let text2 = ['adalah budi'];
let text3 = [...text1, ...text2];
console.log(text3);
let hasilKali = [];
function kali(angka1, ...argg) {
  argg.forEach((element) => {
    hasilKali.push(angka1 * element);
  });
  return hasilKali;
}
// kali(2, 1, 2, 3);

const temperature = [50, 72, 32, 25, 76, 46, 22, 10];
console.log(Math.min(...temperature));

function siswa(nama, kelas, ...nilai) {
  let totalNilai = 0;
  for (let i of nilai) {
    totalNilai += i;
  }
  return `Nama : ${nama}, Kelas : ${kelas}, Total Nilai : ${totalNilai}`;
}

let str = coba`Halo nama saya ${nama}, saya ${umur} tahun`;
console.log(str);
