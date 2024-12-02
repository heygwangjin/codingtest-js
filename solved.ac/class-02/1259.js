function solution(arr) {
  let result = '';

  for (let i = 0; i < arr.length - 1; i++) {
    const str = arr[i];
    let isPalindrome = true;
    for (let j = 0; j < str.length; j++) {
      if (str[j] !== str[str.length - 1 - j]) {
        isPalindrome = false;
        break;
      }
    }
    result += isPalindrome ? 'yes\n' : 'no\n';
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
