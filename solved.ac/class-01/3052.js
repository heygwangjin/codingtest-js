function solution(arr) {
  const map = {};
  const remainders = arr.map((n) => n % 42);
  remainders.forEach((n) => {
    if (!map[n]) map[n] = true;
  });
  return Object.keys(map).length;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
rl.on('line', (line) => {
  arr.push(+line.trim());
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
