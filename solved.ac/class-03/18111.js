function solution(n, m, b, grid) {
  let minTime = Number.MAX_SAFE_INTEGER;
  let height = -1;

  // 모든 높이를 목표 높이로 하여 브루트포스
  for (let h = 0; h <= 256; h++) {
    let inventory = 0;
    let removeCount = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const diff = grid[i][j] - h;

        // diff가 음수인 경우 블록을 더 쌓아야하기 때문에 인벤토리에 블록이 더 필요
        if (diff < 0) {
          inventory -= diff;
        } else {
          removeCount += diff;
        }
      }
    }

    if (removeCount + b >= inventory) {
      const time = removeCount * 2 + inventory;
      if (minTime >= time) {
        minTime = time;
        height = h;
      }
    }
  }

  return `${minTime} ${height}`;
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
  const [n, m, b] = arr.shift().split(' ').map(Number);
  const grid = [];
  for (const line of arr) {
    grid.push(line.split(' ').map(Number));
  }
  console.log(solution(n, m, b, grid));
  process.exit();
});
