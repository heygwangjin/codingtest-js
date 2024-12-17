/*
  시간복잡도: O(N * log H) (단, N은 나무의 개수이고 H는 최대 나무 높이)
  풀이 시간: 35m
  시도 횟수: 2
*/
function solution(arr) {
  const [n, m] = arr[0].split(' ').map(Number);
  const trees = arr[1].split(' ').map(Number);

  let left = 0;
  let right = Math.max(...trees);
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let slicedTree = 0;
    for (const tree of trees) {
      // 나무 높이가 절단기 높이보다 작으면 skip
      if (tree < mid) continue;
      slicedTree += tree - mid;
    }

    if (slicedTree >= m) {
      // 잘린 나무의 길이가 M을 넘으면 절단기 설정 높이를 더 올린다.
      result = mid; // 최대 높이 갱신
      left = mid + 1;
    } else {
      // 잘린 나무의 길이가 M보다 작으면 절단기 설정 높이를 더 내린다.
      right = mid - 1;
    }
  }

  return result;
}

// 1. 절단기 설정 높이의 최소값은 0, 최대값은 trees 배열의 최댓값
// 2. 각 나무의 높이에서 H (절단기 설정 높이)를 뺀 값의 합이 M보다 크거나 같아야한다.
// 3. M 미터를 충족하면서 가장 높은 H의 값을 구해야한다.

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
