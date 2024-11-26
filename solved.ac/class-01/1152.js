function solution(arr) {
  if (arr[0] === '') return 0;
  return arr.length;
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
  const arr = input.trim().split(' ');
  console.log(solution(arr));
  process.exit();
});
