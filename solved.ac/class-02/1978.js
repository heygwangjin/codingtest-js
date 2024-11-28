function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let result = 0;
  const nums = arr[1].split(' ').map((n) => +n);
  for (const num of nums) {
    if (isPrime(num)) result++;
  }
  return result;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
rl.on('line', (line) => {
  arr.push(line.trim());
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
