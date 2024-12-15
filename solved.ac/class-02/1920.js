function solution(arr) {
  const obj = {};
  arr[1].split(' ').map((n) => {
    if (!obj[n]) obj[n] = true;
  });
  const result = arr[3].split(' ').map((n) => (obj[n] ? 1 : 0));
  return result.join('\n');
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
