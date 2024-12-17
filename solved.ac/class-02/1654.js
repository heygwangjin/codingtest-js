function solution(arr) {
  const [k, n] = arr.shift().split(' ').map(Number);
  const cables = arr.map(Number);

  let left = 1;
  let right = Math.max(...cables);
  let result = 0;

  // 이진 탐색 수행
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let countCable = 0;

    // mid 길이로 잘랐을 때 만들 수 있는 랜선의 개수 계산
    for (const cable of cables) {
      countCable += Math.floor(cable / mid);
    }

    if (countCable >= n) {
      // mid 길이로 n개 이상의 랜선을 만들 수 있는 경우
      result = mid; // 최대 길이 갱신
      left = mid + 1; // 더 긴 길이로 시도
    } else {
      // mid 길이로 n개 이상의 랜선을 만들 수 없는 경우
      right = mid - 1; // 더 짧은 길이로 시도
    }
  }

  return result;
}

// 1. 랜선 길이의 최소값은 1, 최대값은 k개의 랜선 중 길이가 가장 긴 값
// 2. 이 범위 내에서 이진 탐색을 통해 가능한 최대 랜선 길이를 찾아낸다.
// 3. 각 길이에 대해 만들 수 있는 랜선의 개수를 계산하며 조건(n개 이상)을 만족하는지 확인한다.

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
