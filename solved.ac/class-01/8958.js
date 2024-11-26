function solution(arr) {
  const t = +arr[0];
  const record = new Array(t).fill(0);
  let result = '';
  for (let i = 0; i < t; i++) {
    const res = arr[i + 1];
    let score = 0;
    for (let j = 0; j < res.length; j++) {
      if (res[j] === 'O') {
        record[i] += ++score;
      } else {
        score = 0;
      }
    }
  }
  record.forEach((n) => {
    result += `${n}\n`;
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
  arr.push(line.trim());
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
