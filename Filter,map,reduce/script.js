const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// const angka2 = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     angka2.push(angka[i]);
//   }
// }
// console.log(angka2);

// filter
// const newAngka = angka.filter((e) => e >= 3);

// console.log(newAngka);

// map

// const newAngka = angka.map((e) => e * 2);
// console.log(newAngka);

// reduce

// const newAngka = angka.reduce((a, b) => a + b);
// console.log(newAngka);

// method chaining
const newAngka = angka
  .filter((e) => e > 5)
  .map((e) => e * 3)
  .reduce((a, b) => a + b, 0);
console.log(newAngka);
