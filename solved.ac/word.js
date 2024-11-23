/*
  시간복잡도: 
  풀이 시간: 
  시도 횟수: 
*/
function solution(n) {
  let result = '';
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
