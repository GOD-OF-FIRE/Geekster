var n = 5;
var star = "";
for (var i = 0; i <= n; i++) {
  for (var j = n; j > i; j--) {
    star += " ";
  }
  for (var k = 0; k < i * 2 - 1; k++) {
    star += "*";
  }
  star += "\n";
}
for (var i = 1; i < n; i++) {
  for (var j = 0; j < i; j++) {
    star += " ";
  }
  for (var k =0; k < 2 * (n-i)-1 ; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
