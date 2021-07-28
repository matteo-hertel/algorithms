// Given 2 integers, find the greatest common divisor

export function gcd(a: number, b: number) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
