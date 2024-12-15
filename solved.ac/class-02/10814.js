function solution(arr) {
  arr = arr.slice(1).sort((a, b) => {
    const ageA = +a.split(' ').shift();
    const ageB = +b.split(' ').shift();
    return ageA - ageB;
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
