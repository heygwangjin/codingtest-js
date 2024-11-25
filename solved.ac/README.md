## 백준 Node.js 입출력 방법 정리

### 로컬 설정

로컬에서 입출력 템플릿을 빠르게 사용하고 싶으면, `.bashrc` 혹은 `.zshrc` 파일에 아래 `alias` 키워드들을 작성한다.
`{path}`에는 자신의 환경에 알맞는 경로로 변경한다. (중괄호까지 포함해서 지우고 변경)

```zsh
alias cpw="cat {path}/codingtest-js/solved.ac/word.js | pbcopy"
alias cpl="cat {path}/codingtest-js/solved.ac/line.js | pbcopy"
alias cpm="cat {path}/codingtest-js/solved.ac/multiline.js | pbcopy"
```

### 한 단어 입력 - 구분자, 띄어쓰기 미포함
- 테스트 문제 : [별 찍기 - 1 (2438)](https://www.acmicpc.net/problem/2438)
- 템플릿 코드 : [word.js](https://github.com/heygwangjin/codingtest-js/blob/main/solved.ac/word.js)

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

- 테스트 문제 : [A-B (1001)](https://www.acmicpc.net/problem/1001)
- 템플릿 코드 : [line.js](https://github.com/heygwangjin/codingtest-js/blob/main/solved.ac/line.js)

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

- 테스트 문제 : [A+B - 3(10950)](https://www.acmicpc.net/problem/10950)
- 템플릿 코드 : [multiline.js](https://github.com/heygwangjin/codingtest-js/blob/main/solved.ac/multiline.js)

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
  // 로컬에서는 입력을 마친 후, 'ctrl + C'를 통해 입력을 종료한다.
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
```
