"use strict";
const num = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10, 11, 12, 13, 14, 15];
const elements = num.filter(a => a % 2 === 0);
console.log(`Elementos pares:\n ${elements}`);
