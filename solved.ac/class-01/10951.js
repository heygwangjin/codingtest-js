function solution(arr) {
  let result = '';
  for (const str of arr) {
    const [a, b] = str.split(' ');
    result += `${+a + +b}\n`;
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
