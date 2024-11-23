function solution(arr) {
  let result = '';
  const n = Number(arr[0]);
  for (let i = 1; i <= n; i++) {
    const [a, b] = arr[i].split(' ').map(Number);
    result += `${a + b}\n`;
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
  // rl.close()가 없으므로 계속 입력한다.
  // 로컬에서는 입력을 마친 후, 'ctrl || cmd + D'를 통해 입력을 종료한다.
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
