function solution(arr) {
  const result = [];
  const T = +arr.shift();
  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ]; // 상 하 좌 우

  function dfs(x, y, graph, visited, M, N) {
    // 방문 처리
    visited[y][x] = true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < M &&
        ny < N &&
        !visited[ny][nx] &&
        graph[ny][nx] === 1
      ) {
        dfs(nx, ny, graph, visited, M, N);
      }
    }
  }

  for (let i = 0; i < T; i++) {
    const [M, N, K] = arr.shift().split(' ').map(Number); // N개의 행과 M개의 열
    const graph = Array.from({ length: N }, () => Array(M).fill(0)); // 그래프 초기화
    const visited = Array.from({ length: N }, () => Array(M).fill(false)); // 방문 여부 초기화

    // 배추 위치 표시
    for (let j = 0; j < K; j++) {
      const [x, y] = arr.shift().split(' ').map(Number);
      graph[y][x] = 1; // 이차원배열 인덱스랑 반대로
    }

    let wormCount = 0;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (graph[y][x] === 1 && !visited[y][x]) {
          dfs(x, y, graph, visited, M, N);
          wormCount++;
        }
      }
    }

    result.push(wormCount);
  }

  return result.join('\n');
}

// 배추밭에서 서로 인접한 배추 그룹의 수를 구하기
// 상, 하, 좌, 우로 연결된 배추는 같은 그룹

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
