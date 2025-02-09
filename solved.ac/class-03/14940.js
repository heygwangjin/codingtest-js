function solution(n, m, grid) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // 결과 거리를 저장할 배열을 -1로 초기화
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  // 목표지점(2)의 위치 찾기
  let dest = null;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        dest = [i, j];
        break;
      }
    }
  }

  // BFS : 목표지점의 거리는 0
  dist[dest[0]][dest[1]] = 0;
  const queue = [dest];

  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        grid[nx][ny] !== 0 &&
        dist[nx][ny] === -1
      ) {
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  // 결과 출력: 원래 0인 위치는 0, 나머지는 BFS에서 구한 거리 (-1이면 도달 불가)
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        row.push(0);
      } else {
        row.push(dist[i][j]);
      }
    }
    result.push(row.join(' '));
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
  const [n, m] = arr.shift().split(' ').map(Number);
  const grid = [];
  for (const line of arr) {
    grid.push(line.split(' ').map(Number));
  }
  console.log(solution(n, m, grid));
  process.exit();
});
