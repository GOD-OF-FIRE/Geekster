var n = 5;
var star = "";
for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
