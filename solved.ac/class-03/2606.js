/*
  시간복잡도: O(N + E) 
  풀이 시간: 23m
  시도 횟수: 1
*/
function dfs(adjList, start, visited) {
  visited.add(start);

  const neighbors = adjList[start];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) dfs(adjList, neighbor, visited);
  }
}

function createAdjList(edges, numVertices) {
  const adjList = {};

  // 모든 정점을 초기화
  for (let i = 1; i <= numVertices; i++) {
    adjList[i] = [];
  }

  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u); // 양방향 그래프
  }

  return adjList;
}

function solution(arr) {
  const numVertices = +arr.shift();
  const numEdges = +arr.shift();
  const edges = arr.map((line) => {
    const [u, v] = line.split(' ').map(Number);
    return [u, v];
  });

  // 인접리스트 생성
  const adjList = createAdjList(edges, numVertices);
  const visited = new Set();

  // 1과 인접한 정점들 탐색
  dfs(adjList, 1, visited);

  return visited.size - 1; // 1번 컴퓨터 제외
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
