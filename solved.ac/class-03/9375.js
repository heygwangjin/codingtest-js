function solution(arr) {
  const result = [];
  let t = +arr.shift();

  while (t--) {
    const n = +arr.shift();
    const clothes = {};

    for (let i = 0; i < n; i++) {
      const kind = arr.shift().split(' ')[1];
      if (!clothes[kind]) clothes[kind] = 1;
      else clothes[kind] += 1;
    }

    const values = Object.values(clothes);
    const combis = values
      .map((v) => v + 1)
      .reduce((acc, curr) => acc * curr, 1);

    result.push(combis - 1);
  }

  return result.join('\n');
}

// 옷 종류마다 몇 개인지 카운트 ex. { headgear: 2, eyewear: 1 }
// 각 종류마다 +1을 해준다. (해당 종류를 착용하지 않는 경우를 위해서)
// 종류마다의 개수를 모두 곱한 뒤 1을 빼준다. (알몸인 경우 제외)

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
