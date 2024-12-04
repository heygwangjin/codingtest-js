function solution(arr) {
  const result = [];
  const n = +arr.shift();
  const stack = [];
  for (const cmd of arr) {
    if (cmd === 'pop') {
      if (stack.length === 0) result.push(-1);
      else result.push(stack.pop());
    } else if (cmd === 'size') {
      result.push(stack.length);
    } else if (cmd === 'empty') {
      if (stack.length === 0) result.push(1);
      else result.push(0);
    } else if (cmd === 'top') {
      if (stack.length === 0) result.push(-1);
      else result.push(stack[stack.length - 1]);
    } else {
      const num = +cmd.split(' ')[1];
      stack.push(num);
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
  console.log(solution(arr));
  process.exit();
});
