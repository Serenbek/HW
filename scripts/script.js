// import { sumTwoNums } from "../export/export.js";  //  надо добавить в файл расширение *.js

// console.log(sumTwoNums(30, 30))

import { calculate } from "../export/export.js";

let totalScore = document.querySelector("#totalScore");
let guestsAmount = document.querySelector("#guestsAmount");
let commission = document.querySelector("#commission");
let button = document.querySelector("#button");
let result = document.querySelector("#result");
let form = document.querySelector("form")

button.addEventListener("click", () =>
  calculate(totalScore, commission, guestsAmount, result, form)
);

let cub1 = document.querySelector("#cub1");
let cub2 = document.querySelector("#cub2");
let cub3 = document.querySelector("#cub3");

import { getCub1 } from "../export/export.js";
import { getCub2 } from "../export/export.js";
import { getCub3 } from "../export/export.js";

cub1.addEventListener("click", getCub1);
cub2.addEventListener("click", getCub2);
cub3.addEventListener("click", getCub3);
