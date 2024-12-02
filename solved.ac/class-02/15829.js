function solution(arr) {
  const l = +arr[0];
  const str = arr[1];
  const m = 1234567891;

  let result = 0;
  let r = 1;

  for (let i = 0; i < l; i++) {
    result += (str.charCodeAt(i) - 96) * r;
    result %= m;
    r *= 31;
    r %= m;
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
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
