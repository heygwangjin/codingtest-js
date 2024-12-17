function solution(n) {
  let result = 0;
  while (n % 5 !== 0) {
    n -= 3;
    result++;

    if (0 < n && n < 3) {
      return -1;
    }
  }
  result += n / 5;
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
