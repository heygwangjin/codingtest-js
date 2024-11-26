function solution(arr) {
  const t = +arr[0];
  let result = '';
  // 각 테스트 케이스에 대해
  for (let i = 1; i <= t; i++) {
    const [h, w, n] = arr[i].split(' ').map((v) => +v);
    let count = 0;
    // 각 호실에 대해
    for (let col = 0; col < w; col++) {
      // 각 층수에 대해
      for (let row = h - 1; row >= 0; row--) {
        count++;
        if (n === count) {
          result += `${h - row}${(col + 1).toString().padStart(2, 0)}\n`;
        }
      }
    }
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
