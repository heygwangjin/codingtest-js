function solution(arr) {
  const [n, m] = arr.shift().split(' ').map(Number);
  const map = {};
  const result = [];

  for (let i = 0; i < n; i++) {
    const [url, pwd] = arr[i].split(' ');
    map[url] = pwd;
  }

  for (let i = n; i < n + m; i++) {
    result.push(map[arr[i]]);
  }

  return result.join('\n');
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
