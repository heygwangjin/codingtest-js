function solution(arr) {
  arr = [...new Set(arr.slice(1))].sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    else return a.length - b.length;
  });
  return arr.join('\n');
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
