function solution(arr) {
  const result = [];
  const nArr = arr[1].split(' ').map(Number);
  const mArr = arr[3].split(' ').map(Number);
  const obj = {};

  // 타겟 숫자의 빈도수를 0으로 초기화
  mArr.forEach((target) => {
    if (!obj[target]) {
      obj[target] = 0;
      result.push(target); // 타겟 숫자의 순서를 저장하기 위해
    }
  });

  // 타겟 숫자가 나오면 빈도수 +1
  nArr.forEach((num) => {
    if (obj[num] !== undefined) obj[num] += 1;
  });

  // 각 타겟 숫자의 자리를 빈도수로 업데이트 후 반환
  return result.map((target) => obj[target]).join(' ');
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
