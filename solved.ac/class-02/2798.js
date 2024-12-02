function solution(arr) {
  const [n, m] = arr[0].split(' ').map((v) => +v);
  const numbers = arr[1].split(' ').map((v) => +v);

  let maxSum = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = numbers[i] + numbers[j] + numbers[k];
        if (sum <= m && maxSum < sum) {
          maxSum = sum;
        }
      }
    }
  }

  return maxSum;
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
