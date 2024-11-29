function find(parents, x) {
  // x가 루트 노드인 경우
  if (parents[x] === x) {
    return x;
  }

  // 그렇지 않다면 x의 부모를 찾아서 parents[x]에 저장
  // 그 부모 노드의 루트 노드를 찾아서 parents[x]에 저장
  parents[x] = find(parents, parents[x]); // 경로 압축

  return parents[x];
}

function union(parents, x, y) {
  const rootX = find(parents, x); // x가 속한 집합의 루트 노드 찾기
  const rootY = find(parents, y); // y가 속한 집합의 루트 노드 찾기

  parents[rootY] = rootX; // y가 속한 집합을 x가 속한 집합에 합침
}

function solution(k, operations) {
  // 처음에는 모든 노드가 루트 노드
  const parents = Array.from({ length: k }, (_, i) => i);
  let result = k; // 집합의 개수를 저장할 변수, 처음에는 모든 노드가 서로 다른 집합에 있으므로 k

  for (const op of operations) {
    if (op[0] === 'u') {
      union(parents, op[1], op[2]); // op[1]과 op[2]가 속한 집합을 합침
    } else if (op[0] === 'f') {
      find(parents, op[1]); // op[1]이 속한 집합의 루트 노드를 찾음
    }

    // 모든 노드의 루트 노드를 찾아서 집합의 개수를 계산
    result = new Set(Array.from({ length: k }, (_, i) => find(parents, i)))
      .size;
  }

  return result;
}

console.log(
  solution(3, [
    ['u', 0, 1],
    ['u', 1, 2],
    ['f', 2],
  ]),
);
console.log(
  solution(4, [
    ['u', 0, 1],
    ['u', 2, 3],
    ['f', 0],
  ]),
);
