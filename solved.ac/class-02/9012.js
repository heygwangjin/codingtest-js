function solution(arr) {
  const result = [];
  for (str of arr.slice(1)) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (stack.length === 0 && str[i] === ')') {
        stack.push(str[i]);
        break;
      }

      if (stack[stack.length - 1] === '(' && str[i] === ')') {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
    if (stack.length === 0) result.push('YES');
    else result.push('NO');
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
  console.log(solution(arr));
  process.exit();
});
