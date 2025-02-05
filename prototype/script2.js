const token = ~~[Math.random() * 12345678];
const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username) {
  console.log('Processing user data now...');

  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != 'zia') {
        failed('Wrong username, cannot access token');
      }
      success({ token, username });
    }, 300);
  });
}

function getUser(token) {
  console.log('Processing Apikey now...');

  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!token) {
        failed('Token empty, cannot access');
      }
      success({ apiKey: 'xKey1234' });
    }, 800);
  });
}

function getPictures(apiKey) {
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!apiKey) {
        failed('Cannot get ApiKey, cannot access');
      }
      success({ pic: pictures });
    }, 1500);
  });
}

async function userDisplay() {
  try {
    const { token } = await login('zia');
    console.log(token);
    const { apiKey } = await getUser(token);
    console.log(apiKey);
    const { pic } = await getPictures(apiKey);
    console.log(pic);
  } catch (err) {
    console.log(err);
  }
}

// userDisplay();

function Mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energy += porsi;
  console.log(`Halo ${this.nama}, selamat makan.`);
};

Mahasiswa.prototype.main = function (jam) {
  this.energy -= jam;
  console.log(`Halo ${this.nama}, selamat bermain.`);
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energy += jam * 2;
  console.log(`Halo ${this.nama}, selamat beristirahat.`);
};

Mahasiswa.prototype.bagi = function (x) {
  if (x % 2 == 0) {
    return console.log(`${x} is even`);
  } else if (x % 2 == 1) {
    return console.log(`${x} is odd`);
  }
};

Mahasiswa.prototype.emailcek = function (email) {
  if (email.includes('@')) {
    return console.log('email is valid');
  } else {
    console.log('email is invalid');
  }
};

let dika = new Mahasiswa('dika', 10);
