function solution(arr) {
  let result = [];

  const [n, str] = arr;
  const scores = str.split(' ').map((v) => +v);
  const max = Math.max(...scores);

  for (let i = 0; i < +n; i++) {
    result.push((scores[i] / max) * 100);
  }

  return result.reduce((acc, curr) => acc + curr, 0) / result.length;
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
