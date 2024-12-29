function solution(n) {
  // 한 개의 제곱수인지 확인
  if (Number.isInteger(Math.sqrt(n))) return 1;

  // 두 개의 제곱수로 표현되는지 확인
  for (let i = 1; i * i <= n; i++) {
    const remaining = n - i * i;
    if (Number.isInteger(Math.sqrt(remaining))) return 2;
  }

  // 세 개의 제곱수로 표현되는지 확인
  for (let i = 1; i * i <= n; i++) {
    for (let j = 1; j * j <= n - i * i; j++) {
      const remaining = n - i * i - j * j;
      if (Number.isInteger(Math.sqrt(remaining))) return 3;
    }
  }

  // 위의 모든 경우가 아니면 네 개의 제곱수가 필요
  return 4;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  input = Number(line);
  rl.close();
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});
