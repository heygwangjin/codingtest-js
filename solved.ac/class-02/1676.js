function factorial(n) {
  if (n === 0) return BigInt(1);
  return BigInt(n) * factorial(n - 1);
}

function solution(n) {
  let result = 0;

  const num = factorial(n).toString();

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === '0') result++;
    else break;
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
