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

const lagu = {
  judul: 'tetap dalam jiwa',
  penyanyi: 'isyana',
  feat: 'rayi',
};

const ol = `<div class="lagu">
<ul>
<li>${lagu.judul}</li>
<li>${lagu.penyanyi} ${lagu.feat ? `feat ${lagu.feat}` : ''}</li>
</ul>
</div>`;
document.body.innerHTML = ol;
