function solution(n) {
  let count = 0;
  let result = 666;
  while (true) {
    if (result.toString().includes('666')) {
      count++;
    }
    if (count === n) break;
    result++;
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
