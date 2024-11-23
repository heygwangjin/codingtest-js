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

const arr = [];
rl.on('line', (line) => {
  arr.push(line.trim());
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
