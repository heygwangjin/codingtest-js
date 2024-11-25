function solution(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += ' ';
    }
    for (let j = 0; j < i; j++) {
      result += '*';
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

let input;

rl.on('line', (line) => {
  input = line;
  input = Number(line);
  rl.close();
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});
