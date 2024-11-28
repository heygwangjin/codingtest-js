function solution(n) {
  let result = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= n; i++) {
    const arr = i
      .toString()
      .split('')
      .map((v) => +v);
    const sum = i + arr.reduce((acc, curr) => acc + curr, 0);
    if (n === sum && sum < min) {
      min = sum;
      result = i;
    }
  }
  return result;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  input = Number(line);
  rl.close();
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});
