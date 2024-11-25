function solution(year) {
  let result = 0;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result = 1;
  }
  return result;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  input = Number(line);
  rl.close();
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});
