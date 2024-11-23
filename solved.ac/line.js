/*
  시간복잡도: 
  풀이 시간: 
  시도 횟수: 
*/
function solution(arr) {
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
  rl.close();
}).on('close', () => {
  const arr = input.split(' ').map((el) => Number(el));
  console.log(solution(arr));
  process.exit();
});
