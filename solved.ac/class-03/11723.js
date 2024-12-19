/*
  시간복잡도: 
  풀이 시간: 
  시도 횟수: 
*/
function solution(arr) {
  const m = +arr.shift();
  const result = [];
  const all = Array.from({ length: 20 }, (_, i) => i + 1);
  let set = new Set();

  for (const line of arr) {
    const [cmd, x] = line.split(' ');

    switch (cmd) {
      case 'add':
        set.add(+x);
        break;
      case 'remove':
        set.delete(+x);
        break;
      case 'check':
        set.has(+x) ? result.push(1) : result.push(0);
        break;
      case 'toggle':
        set.has(+x) ? set.delete(+x) : set.add(+x);
        break;
      case 'all':
        set = new Set(all);
        break;
      case 'empty':
        set = new Set();
        break;
    }
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
