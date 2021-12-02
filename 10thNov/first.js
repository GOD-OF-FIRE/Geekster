function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      console.log(n + " is not Prime number");
      return false;
    }
  }
  console.log(n + " is a Prime number");
  return n > 1;
}
console.log(isPrime(5));

