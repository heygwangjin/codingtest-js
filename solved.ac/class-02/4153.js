function solution(arr) {
  let result = '';
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    const [c, a, b] = arr[i]
      .split(' ')
      .map((n) => +n)
      .sort((a, b) => b - a);

    if (c ** 2 === a ** 2 + b ** 2) result += 'right\n';
    else result += 'wrong\n';
  }

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
