## 백준 Node.js 입출력 방법 정리

### 한 단어 입력 - 구분자, 띄어쓰기 미포함

테스트 문제 : [별 찍기 - 1 (2438)](https://www.acmicpc.net/problem/2438)

```js
function solution(n) {
  let result = '';
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < n - i + 1; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
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
```

### 한 줄 입력 - 구분자, 띄어쓰기 포함

테스트 문제 : [A-B (1001)](https://www.acmicpc.net/problem/1001)

```js
function solution(arr) {
  let result = 0;
  const a = arr[0];
  const b = arr[1];
  result = a - b;
  return result;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line;
  rl.close();
}).on("close", () => {
  const arr = input.split(" ").map((el) => Number(el));
  console.log(solution(arr));
  process.exit();
});
```

### 여러 줄 입력

테스트 문제 : [A+B - 3(10950)](https://www.acmicpc.net/problem/10950)

```js
function solution(arr) {
  let result = '';
  const n = Number(arr[0]);
  for (let i = 1; i <= n; i++) {
    const [a, b] = arr[i].split(' ').map(Number);
    result += `${a + b}\n`;
  }
  return result;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
rl.on('line', (line) => {
  arr.push(line.trim());
  // rl.close()가 없으므로 계속 입력한다.
  // 로컬에서는 입력을 마친 후, 'ctrl || cmd + D'를 통해 입력을 종료한다.
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
```
