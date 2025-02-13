function solution(n, fruits) {
  let maxLen = 0;
  let left = 0;

  const count = new Map();

  for (let right = 0; right < n; right++) {
    // 현재 과일의 종류를 count에 추가
    const fruit = fruits[right];
    count.set(fruit, (count.get(fruit) || 0) + 1);

    // 과일의 종류가 2개를 초과하면 left 포인터를 오른쪽으로 이동하면서 조정
    while (count.size > 2) {
      const leftFruit = fruits[left];
      count.set(leftFruit, count.get(leftFruit) - 1);
      if (count.get(leftFruit) === 0) count.delete(leftFruit);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
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
  console.log(solution(+arr.shift(), arr.shift().split(' ').map(Number)));
  process.exit();
});
