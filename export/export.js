// export function sumTwoNums(a, b) {
//   return a + b;
// }

export function calculate(totalScore, commission, guestsAmount, result, form) {
  let sum = (totalScore.value * commission.value) / guestsAmount.value;
  result.textContent = sum + "$";
  form.reset()
}

// export function counter() {
//   let count = 0;
//   return function () {
//     count++;
//   };
// }

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getCub1() {
  cub1.style.backgroundColor = `rgb(${getRandom(0, 254)}, ${getRandom(
    0,
    254
  )}, ${getRandom(0, 254)})`;
}

export function getCub2() {
  cub2.style.backgroundColor = `rgb(${getRandom(0, 254)}, ${getRandom(
    0,
    254
  )}, ${getRandom(0, 254)})`;
}

export function getCub3() {
  cub3.style.backgroundColor = `rgb(${getRandom(0, 254)}, ${getRandom(
    0,
    254
  )}, ${getRandom(0, 254)})`;
}
