function solution(arr) {
  const result = [];
  const n = +arr.shift();
  for (let i = 0; i < n; i++) {
    const [x, y] = arr[i].split(' ').map(Number);
    let numBigger = 0;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const [p, q] = arr[j].split(' ').map(Number);
      if (x < p && y < q) {
        numBigger++;
      }
    }
    result.push(++numBigger);
  }
  return result.join(' ');
}

// 몸무게도 많고, 키도 더 큰 사람이 나보다 덩치가 큰 사람
// 덩치가 큰 사람의 수 + 1이 나의 등수

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
