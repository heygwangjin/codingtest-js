class Queue {
  rear = 0;
  front = 0;
  items = [];

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  empty() {
    return this.rear === this.front;
  }
}
function solution(arr) {
  const result = [];
  let [n, k] = arr;
  const queue = new Queue();
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  for (let i = 1; queue.empty() !== true; i++) {
    if (i % k === 0) {
      result.push(queue.pop());
    } else {
      queue.push(queue.pop());
    }
  }
  return `<${result.join(', ')}>`;
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
