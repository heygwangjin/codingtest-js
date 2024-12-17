function solution(arr) {
  const result = [];
  const pair = {
    ']': '[',
    ')': '(',
  };
  arr = arr.slice(0, arr.length - 1); // 마지막 온점 제거
  for (const line of arr) {
    const stack = [];

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === ']' || char === ')') {
        if (stack.length > 0 && stack[stack.length - 1] === pair[char]) {
          stack.pop();
        } else {
          stack.push(char);
          break;
        }
      }
      if (char === '[' || char === '(') {
        stack.push(char);
      }
    }

    if (stack.length > 0) result.push('no');
    else result.push('yes');
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
