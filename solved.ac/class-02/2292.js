function solution(n) {
  let result = 1;
  let curr = 1;
  let add = 6;

  while (true) {
    if (curr >= n) break;
    result++;
    curr += add;
    add += 6;
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
