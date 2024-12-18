function solution(arr) {
  const n = arr.shift();
  const obj = {};
  const modes = [];
  const counts = [];

  // 빈도수 저장
  for (const n of arr) {
    if (!obj[n]) obj[n] = 1;
    else obj[n] += 1;
  }

  for (const value of Object.values(obj)) {
    counts.push(value);
  }

  const maxCount = Math.max(...counts);

  for (const [key, value] of Object.entries(obj)) {
    if (maxCount === value) {
      modes.push(key);
    }
  }

  const average = Math.round(arr.reduce((acc, curr) => acc + curr, 0) / n);
  const median = arr.sort((a, b) => a - b)[Math.floor(n / 2)];
  const mode = modes.length > 1 ? modes.sort((a, b) => a - b)[1] : modes[0];
  const range = arr[arr.length - 1] - arr[0];

  return [average, median, mode, range].join('\n');
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
  console.log(solution(arr.map(Number)));
  process.exit();
});
