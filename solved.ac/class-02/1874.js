function solution(arr) {
  const stack = [];
  const result = [];
  const n = arr.shift();

  let current = 1;
  for (const num of arr) {
    // num까지 스택에 푸시
    while (current <= num) {
      stack.push(current);
      result.push('+');
      current++;
    }

    if (stack[stack.length - 1] === num) {
      stack.pop();
      result.push('-');
    } else {
      return 'NO';
    }
  }

  return result.join('\n');
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
  console.log(solution(arr.map(Number)));
  process.exit();
});
