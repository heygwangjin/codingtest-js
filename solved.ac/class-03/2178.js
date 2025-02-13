function solution(n, m, grid) {
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const dist = Array.from({ length: n }, () => Array(m).fill(0));

  function bfs(x, y) {
    visited[x][y] = true;
    const queue = [[x, y]];
    dist[x][y] = 1;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of direction) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          !visited[nx][ny] &&
          grid[nx][ny] !== 0
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          dist[nx][ny] = dist[x][y] + 1;
        }
      }
    }
  }

  bfs(0, 0);

  return dist[n - 1][m - 1];
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
  const [n, m] = arr.shift().split(' ').map(Number);
  const grid = [];
  for (const line of arr) {
    grid.push(line.split('').map(Number));
  }
  console.log(solution(n, m, grid));
  process.exit();
});
