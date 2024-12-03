function solution(arr) {
  let result = '';
  let nextIndex = 0;

  arr = arr.map((v) => +v);

  if (!isNaN(arr[0])) {
    nextIndex = arr[0] + 3;
  } else if (!isNaN(arr[1])) {
    nextIndex = arr[1] + 2;
  } else if (!isNaN(arr[2])) {
    nextIndex = arr[2] + 1;
  }

  if (nextIndex % 3 === 0 && nextIndex % 5 === 0) {
    result = 'FizzBuzz';
  } else if (nextIndex % 3 === 0 && nextIndex % 5 !== 0) {
    result = 'Fizz';
  } else if (nextIndex % 3 !== 0 && nextIndex % 5 === 0) {
    result = 'Buzz';
  } else {
    result = nextIndex;
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
