/*
  시간복잡도: O(V + E)
  풀이 시간: 풀이 참고
  시도 횟수: 풀이 참고
*/

function dfs(adjList, start, visited) {
  if (!visited.has(start)) {
    visited.add(start);

    const neighbors = adjList[start];
    for (const neighbor of neighbors) {
      dfs(adjList, neighbor, visited);
    }
  }
}

function bfs(adjList, start, visited) {
  const queue = [];
  visited.add(start);
  queue.push(start);

  while (queue.length > 0) {
    const vertex = queue.shift();

    for (const neighbor of adjList[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

function createAdjList(edges, numVertices) {
  const adjList = {};

  // 모든 정점을 초기화
  for (let i = 1; i <= numVertices; i++) {
    adjList[i] = [];
  }

  // 간선 정보 추가
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u); // 양방향 그래프
  }

  return adjList;
}

function solution(arr) {
  const [n, m, start] = arr.shift().split(' ').map(Number);
  const edges = arr.map((line) => {
    const [u, v] = line.split(' ').map(Number);
    return [u, v];
  });

  // 인접 리스트 생성
  const adjList = createAdjList(edges, n);

  // 인접 정점을 오름차순으로 정렬
  for (const [key, value] of Object.entries(adjList)) {
    adjList[key] = value.sort((a, b) => a - b);
  }

  const visitedDfs = new Set();
  const visitedBfs = new Set();
  dfs(adjList, start, visitedDfs);
  bfs(adjList, start, visitedBfs);

  const resultDfs = [];
  for (const vertex of visitedDfs) {
    resultDfs.push(vertex);
  }

  const resultBfs = [];
  for (const vertex of visitedBfs) {
    resultBfs.push(vertex);
  }

  return `${resultDfs.join(' ')}\n${resultBfs.join(' ')}`;
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
