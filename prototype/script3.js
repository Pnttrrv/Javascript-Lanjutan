// function init() {
//   //   let nama = 'dika';
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }

// let panggilNama = init();
// panggilNama('galih');

// function salam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = salam('pagi');
// selamatPagi('Zia');

// console.dir(selamatPagi);

function increament() {
  let count = 0;
  function increase() {
    console.log(`count increase - ${count}`);
    count++;
  }
  return { increase };
}

const hitung = increament();
hitung.increase();
hitung.increase();
hitung.increase();
