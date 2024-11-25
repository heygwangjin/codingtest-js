function solution(arr) {
  arr = arr.map((v) => +v);
  const max = Math.max(...arr);
  const index = arr.indexOf(max);
  return `${max}\n${index + 1}`;
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
