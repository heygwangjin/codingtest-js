function solution(arr) {
  const ascending = [...arr].sort((a, b) => a - b);
  const descending = [...arr].sort((a, b) => b - a);

  const isAscending = arr.every((num, i) => {
    if (num !== ascending[i]) {
      return false;
    }
    return true;
  });

  const isDescending = arr.every((num, i) => {
    if (num !== descending[i]) {
      return false;
    }
    return true;
  });

  return isAscending ? 'ascending' : isDescending ? 'descending' : 'mixed';
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  const arr = input.split(' ').map((el) => Number(el));
  console.log(solution(arr));
  process.exit();
});
