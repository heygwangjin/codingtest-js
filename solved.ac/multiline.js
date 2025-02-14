function solution(arr) {
  let result = '';
  return result;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
rl.on('line', (line) => {
  inputs.push(line.trim());
}).on('close', () => {
  console.log(solution(inputs));
  process.exit();
});
