function solution(arr) {
  return arr[0] * arr[1];
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  const arr = input.split(' ').map((el) => Number(el));
  console.log(solution(arr));
  process.exit();
});