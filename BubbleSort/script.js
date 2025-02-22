const angka = [9, 5, 1, 7, 3, 8, 4, 2, 6];

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
