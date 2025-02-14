class MaxHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return 0;

    const max = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return max;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] >= this.items[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      const largerChild =
        rightChild < this.size() &&
        this.items[rightChild] > this.items[leftChild]
          ? rightChild
          : leftChild;

      if (this.items[index] >= this.items[largerChild]) break;

      this.swap(index, largerChild); // 더 큰 수랑 바꾼다.
      index = largerChild;
    }
  }
}

function solution(ops) {
  const result = [];
  const maxHeap = new MaxHeap();

  for (const op of ops) {
    if (op === 0) result.push(maxHeap.pop());
    else maxHeap.push(op);
  }

  return result.join('\n');
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
rl.on('line', (line) => {
  inputs.push(line.trim());
}).on('close', () => {
  const ops = inputs.slice(1).map(Number);
  console.log(solution(ops));
  process.exit();
});
