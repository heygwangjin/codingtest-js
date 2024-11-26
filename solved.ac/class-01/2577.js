function solution(arr) {
  let result = '';
  const numbers = arr
    .reduce((acc, curr) => acc * +curr, 1)
    .toString()
    .split('');
  const counts = new Array(10).fill(0);
  numbers.forEach((num) => {
    counts[num]++;
  });
  counts.forEach((num) => {
    result += `${num}\n`;
  });
  return result;
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
