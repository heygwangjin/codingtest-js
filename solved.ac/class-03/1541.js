function solution(line) {
  let result = 0;

  // '-'를 기준으로 분리
  const groups = line.split('-');

  // 첫 번째 그룹은 더하기만 수행
  result = groups[0]
    .split('+')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

  // 이후 그룹들은 더한 뒤 결과에서 뺌
  for (let i = 1; i < groups.length; i++) {
    const sum = groups[i]
      .split('+')
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);

    result -= sum;
  }

  return result;
}

// - 이후 모든 숫자를 괄호로 묶는다

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});
