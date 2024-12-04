function solution(arr) {
  return arr
    .slice(1)
    .map((v) => +v)
    .sort((a, b) => a - b)
    .join('\n');
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
