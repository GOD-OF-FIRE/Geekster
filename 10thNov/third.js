function generateArray(x, y) {
  let arr = new Array();
  for (let n = x; n <= y; n++) {
    arr.push(n);
  }
  return arr;
}

let arr = generateArray(4, 3);
console.log(arr);
