function solution(arr) {
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  return `${+a + +b - +c}\n${a + b - c}`;
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
