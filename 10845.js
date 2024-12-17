class Queue {
  rear = 0;
  front = 0;
  items = [];

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.empty() ? -1 : this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  printFront() {
    return this.empty() ? -1 : this.items[this.front];
  }

  printBack() {
    return this.empty() ? -1 : this.items[this.rear - 1];
  }
}

function solution(arr) {
  const result = [];
  const n = +arr[0];
  const queue = new Queue();
  for (let i = 1; i <= n; i++) {
    const [command, number] = arr[i].split(' ');
    switch (command) {
      case 'push':
        queue.push(+number);
        break;
      case 'pop':
        result.push(queue.pop());
        break;
      case 'size':
        result.push(queue.size());
        break;
      case 'empty':
        result.push(queue.empty());
        break;
      case 'front':
        result.push(queue.printFront());
        break;
      case 'back':
        result.push(queue.printBack());
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
