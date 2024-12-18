function solution(arr) {
  const t = +arr.shift();
  const result = [];

  for (let i = 0; i < arr.length; i += 2) {
    const [n, m] = arr[i].split(' ').map(Number);
    const queue = arr[i + 1].split(' ').map((p, i) => {
      return { index: i, priority: p };
    });

    let order = 0;
    while (queue.length > 0) {
      const first = queue.shift();

      // 큐에 더 높은 우선순위가 있는지 확인
      if (queue.some((item) => item.priority > first.priority)) {
        queue.push(first); // 맨 뒤로 보내기
      } else {
        order++; // 출력 순서 증가
        if (first.index === m) {
          result.push(order);
          break;
        }
      }
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
