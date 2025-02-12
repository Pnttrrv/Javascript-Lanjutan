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

let str = coba`Halo nama saya ${nama}, saya ${umur} tahun`;
console.log(str);
