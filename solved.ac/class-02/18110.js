function solution(arr) {
  const n = arr.shift();

  let result = 0;

  if (n !== 0) {
    // 난이도 오름차순 정렬
    const ascending = [...arr].sort((a, b) => a - b);
    const countDelete = Math.round(n * 0.15);
    const slicedAscending = ascending.slice(countDelete, n - countDelete);
    result =
      slicedAscending.reduce((acc, curr) => acc + curr, 0) /
      slicedAscending.length;
  }

  return Math.round(result);
}

// 1. 절사평균 30%, 아래 15%, 위 15%

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
