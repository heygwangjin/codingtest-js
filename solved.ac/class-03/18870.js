function solution(coords) {
  const result = [];
  const count = {};

  for (const num of coords) {
    if (count[num] === undefined) count[num] = 1;
    else count[num] += 1;
  }

  const uniqueSorted = Object.keys(count)
    .map(Number)
    .sort((a, b) => a - b);

  for (const c of coords) {
    let left = 0;
    let right = uniqueSorted.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (uniqueSorted[mid] < c) left = mid + 1;
      else right = mid - 1;
    }
    result.push(left);
  }

  return result.join(' ');
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
  console.log(solution(arr[1].split(' ').map(Number)));
  process.exit();
});
