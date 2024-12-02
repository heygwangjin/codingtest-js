# 백준 Node.js 입출력 방법 정리
## 로컬 설정
### 문제 풀기 명령어
- 문제를 풀 때 터미널에서 명령어와 문제 번호를 입력해서 입출력 템플릿 코드와 함께 빠르게 에디터를 실행할 수 있다.
  - vscode 사용자는 각 함수의 마지막 라인에서 `nvim` 대신 `code` 명령어로 수정한다.
- 아래 3개의 함수를 `~/.bashrc` 혹은 `~/.zshrc` 파일에 작성한다.
- `template_path` 변수의 값은 사용자의 템플릿 파일이 있는 경로에 알맞게 수정한다.
- ex. `solw 2438 || soll 1001 || solm 10950`
#### 한 단어 입력 - 구분자, 띄어쓰기 미포함
```zsh
solw() {
  if [ -z "$1" ]; then
    echo "Error: Please provide a problem number"
    return 1
  fi
  
  local num="$1"
  local template_path="$HOME/Workspace/study/codingtest-js/solved.ac/word.js"
  
  if [ ! -f "$template_path" ]; then
    echo "Error: Template file not found at $template_path"
    return 1
  fi
  
  cat "$template_path" > "${num}.js" && nvim "${num}.js"
}
```
#### 한 줄 입력 - 구분자, 띄어쓰기 포함
```zsh
soll() {
  if [ -z "$1" ]; then
    echo "Error: Please provide a problem number"
    return 1
  fi
  
  local num="$1"
  local template_path="$HOME/Workspace/study/codingtest-js/solved.ac/line.js"
  
  if [ ! -f "$template_path" ]; then
    echo "Error: Template file not found at $template_path"
    return 1
  fi
  
  cat "$template_path" > "${num}.js" && nvim "${num}.js"
}
```
#### 여러 줄 입력
```zsh
solm() {
  if [ -z "$1" ]; then
    echo "Error: Please provide a problem number"
    return 1
  fi
  
  local num="$1"
  local template_path="$HOME/Workspace/study/codingtest-js/solved.ac/multiline.js"
  
  if [ ! -f "$template_path" ]; then
    echo "Error: Template file not found at $template_path"
    return 1
  fi
  
  cat "$template_path" > "${num}.js" && nvim "${num}.js"
}
```
### 풀이 복사
- 문제 풀이 완료 후, 백준에 제출하기 전에 풀이를 빠르게 복사하고 싶은 경우 아래 함수도 함께 추가한다.
- 사용법은 문제 풀이 파일이 있는 디렉토리에서 `solved {문제파일}` 커맨드를 입력하면 된다.
- ex. `solved 2438.js`
```zsh
solved() {
  local file="$1"
  cat "${file}" | pbcopy
}
```
## 입출력 템플릿 예시
- 입출력 템플릿을 사용하여 푼 문제들의 예시 코드이다.
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
