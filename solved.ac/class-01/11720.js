function solution(arr) {
  let result = 0;
  const numbers = arr[1].split('');
  for (const num of numbers) {
    result += +num;
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
