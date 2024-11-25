function solution(arr) {
  arr = arr[1].split(' ').map((v) => +v);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${min} ${max}`;
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
