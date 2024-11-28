function solution(arr) {
  const n = +arr[0];
  const sizes = arr[1].split(' ').map((n) => +n);
  const [t, p] = arr[2].split(' ').map((n) => +n);

  let minT = 0;
  let minP = Math.floor(n / p);
  let singleP = n % p;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i] / t === Math.floor(sizes[i] / t)) {
      minT += sizes[i] / t;
    } else {
      minT += Math.floor(sizes[i] / t) + 1;
    }
  }

  return `${minT}\n${minP} ${singleP}`;
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

// 펜은 남거나 부족하면 안 된다.
// 티셔츠는 남아도 된다.
