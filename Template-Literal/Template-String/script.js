const nama = 'Dika';
const umur = 27;
let a = 10;
let b = 15;
console.log(`nama saya ${nama} dan umur saya ${umur}`);
console.log(`${a + b}`);
let x = 10;
console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);

// HTML Fragment

const mhs = {
  nama: 'Dika',
  umur: 27,
  npm: 15420913,
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="npm">${mhs.npm}</span>
</div>`;
console.log(el);
