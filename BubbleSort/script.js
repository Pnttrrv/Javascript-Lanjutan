const angka = [10, 4, 1, 6, 2, 7, 3, 5, 8];

// Bubble sort algoritma

for (let j = 0; j <= angka.length; j++) {
  for (let i = 0; i < angka.length; i++) {
    let temp = angka[i];

    if (temp > angka[i + 1]) {
      angka[i] = angka[i + 1];
      angka[i + 1] = temp;
    }
  }
}

console.log(angka);
