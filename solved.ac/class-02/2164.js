class Queue {
  front = 0;
  rear = 0;
  items = [];

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(n) {
  const cards = new Queue();
  for (let i = 1; i <= n; i++) {
    cards.push(i);
  }
  while (cards.size() > 1) {
    cards.pop();
    cards.push(cards.pop());
  }
  return cards.pop();
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  input = Number(line);
  rl.close();
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});
