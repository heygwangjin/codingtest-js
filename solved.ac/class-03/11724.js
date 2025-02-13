function solution(n, m, adjList) {
  const result = [];
  const visited = new Set();

  function bfs(start) {
    if (visited.has(start)) {
      return false;
    }

    visited.add(start);
    const queue = [start];

    while (queue.length) {
      const vertex = queue.shift();

      for (const neighbor of adjList[vertex] || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return true;
  }

  for (let i = 1; i <= n; i++) {
    result.push(bfs(i));
  }

  return result.filter((el) => el).length;
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
  const adjList = {};

  // 정점 초기화
  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
  }

  // 간선 초기화
  for (const line of arr) {
    const [u, v] = line.split(' ').map(Number);
    adjList[u].push(v);
    adjList[v].push(u);
  }

  console.log(solution(n, m, adjList));
  process.exit();
});
