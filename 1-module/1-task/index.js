function factorial(n) {
  let p = 1;
  for (let i = 0; i < n; i += 1) {
    p = p * (n - i);
  }
  return p;
}
