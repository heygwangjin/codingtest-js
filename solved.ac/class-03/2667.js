function solution(n, grid) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function bfs(x, y) {
    grid[x][y] = 0;
    const queue = [[x, y]];
    let count = 1;

    while (queue.length) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 1) {
          grid[nx][ny] = 0;
          queue.push([nx, ny]);
          count++;
        }
      }
    }

    return count;
  }

  const blockCounts = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        blockCounts.push(bfs(i, j));
      }
    }
  }

  blockCounts.sort((a, b) => a - b);

  return [blockCounts.length, ...blockCounts].join('\n');
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
  const n = +arr.shift();
  const grid = [];
  for (line of arr) {
    grid.push(line.split('').map(Number));
  }
  console.log(solution(n, grid));
  process.exit();
});
