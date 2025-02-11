const video = Array.from(document.querySelectorAll('[data-duration]'));
const spanVideo = document.querySelector('.jumlah-video');
const spanDurasi = document.querySelector('.total-durasi');

let jumlVideo = video.filter((e) => e.innerHTML.includes('Javascript'));
// console.log(jumlVideo);

spanVideo.innerHTML = `${jumlVideo.length} Video`;

// durasi video

let jumlDurasi = video
  .filter((e) => e.innerHTML.includes('Javascript'))
  .map((e) => e.dataset.duration)
  .map((e) => {
    let parts = e.split(':').map((part) => parseFloat(part)); //split memisahkan array dengan kriteria ":", parseFloat mengubah string array menjadi float
    return parts[0] * 60 + parts[1];
  })
  .reduce((a, b) => a + b);

let jam = Math.floor(jumlDurasi / 3600); // 1 jam = 3600 detik
jumlDurasi = jumlDurasi - jam * 3600; //8292 - 2 * 3600
let menit = Math.floor(jumlDurasi / 60); //1092 / 60 = 18,2 math.floor = 18
let detik = jumlDurasi - menit * 60; //1092 - 18 * 60 = 12
console.log(detik);

spanDurasi.innerHTML = `${jam} jam, ${menit} menit, ${detik} detik`;

const token = ~~[Math.random() * 12345678];
const picture = ['1.jpg', '2.jpg', '3.jpg'];

function login(username) {
  console.log('Processing Username now..');

  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != 'dika') {
        failed('Wrong username');
      }
      success({ token, username });
    }, 300);
  });
}

function getUser(token) {
  console.log('Processing apiKey now..');

  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!token) {
        failed('Token empty, cannot access!');
      }
      success({ apiKey: 'xKey123456' });
    }, 800);
  });
}

function getPicture(apiKey) {
  console.log('Processing user picture now..');

  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!apiKey) {
        failed('apiKey empty, cannot access!');
      }
      success({ pic: picture });
    }, 1500);
  });
}

async function displayUser() {
  try {
    const { token } = await login('dika');
    console.log(token);
    const { apiKey } = await getUser(token);
    console.log(apiKey);
    const { pic } = await getPicture(apiKey);
    console.log(pic);
  } catch (err) {
    console.log(err);
  }
}

displayUser();
