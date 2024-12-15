function solution(arr) {
  const result = [...arr].sort((a, b) => {
    const [x1, y1] = a.split(' ').map(Number);
    const [x2, y2] = b.split(' ').map(Number);
    if (y1 === y2) return x1 - x2;
    else return y1 - y2;
  });
  return result.join('\n');
}

// 1. y좌표가 증가하는 순서
// 2. y좌표가 같으면 x좌표가 증가하는 순서로 정렬

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
rl.on('line', (line) => {
  arr.push(line.trim());
}).on('close', () => {
  console.log(solution(arr.slice(1)));
  process.exit();
});
