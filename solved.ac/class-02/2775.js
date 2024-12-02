function solution(arr) {
  let result = [];

  const T = arr.shift();

  for (let i = 0; i < T; i++) {
    const k = arr.shift(); // 층
    const n = arr.shift(); // 호
    const apartment = Array.from({ length: k + 1 }, (_, idx) => {
      // 0층은 모두 호수 + 1으로 초기화
      if (idx === 0) {
        return Array.from({ length: n }, (_, i) => i + 1);
      }
      // 나머지층은 0으로 초기화
      return Array(n).fill(0);
    });

    for (let i = 1; i <= k; i++) {
      apartment[i][0] = 1; // 0호는 모두 1
      for (let j = 1; j < n; j++) {
        apartment[i][j] = apartment[i - 1][j] + apartment[i][j - 1];
      }
    }

    result.push(apartment[k][n - 1]);
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
  arr.push(+line.trim());
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
