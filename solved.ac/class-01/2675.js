function solution(arr) {
  let result = '';
  const t = arr[0];
  for (let i = 1; i <= t; i++) {
    const [r, s] = arr[i].split(' ');
    for (let j = 0; j < s.length; j++) {
      for (let k = 0; k < r; k++) {
        result += s[j];
      }
    }
    result += '\n';
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
