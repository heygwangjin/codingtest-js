function solution(arr) {
  const result = [];
  const [rows, cols] = arr[0].split(' ').map(Number);
  const board = arr.slice(1);

  function createChessPattern(startColor) {
    const pattern = [];
    for (let i = 0; i < 8; i++) {
      let row = '';
      for (let j = 0; j < 8; j++) {
        row += (i + j) % 2 === 0 ? startColor : startColor === 'W' ? 'B' : 'W';
      }
      pattern.push(row);
    }
    return pattern;
  }

  function checkWhite(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i + x][j + y] !== startsWithWhite[i][j]) count++;
      }
    }
    return count;
  }

  function checkBlack(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i + x][j + y] !== startsWithBlack[i][j]) count++;
      }
    }
    return count;
  }

  // 하얀색이 먼저 시작하는 판
  const startsWithWhite = createChessPattern('W');
  // 검정색이 먼저 시작하는 판
  const startsWithBlack = createChessPattern('B');

  for (let i = 0; i < rows - 7; i++) {
    for (let j = 0; j < cols - 7; j++) {
      result.push(checkWhite(i, j));
      result.push(checkBlack(i, j));
    }
  }

  return Math.min(...result);
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
