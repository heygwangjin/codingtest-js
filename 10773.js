function solution(arr) {
  const stack = [];
  const k = arr[0];
  for (let i = 1; i <= k; i++) {
    if (arr[i] === 0) stack.pop();
    else stack.push(arr[i]);
  }
  return stack.reduce((acc, curr) => acc + curr, 0);
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
  console.log(solution(arr.map(Number)));
  process.exit();
});
