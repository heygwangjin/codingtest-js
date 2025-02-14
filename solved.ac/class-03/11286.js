class AbsMinHeap {
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

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.items[parentIndex], this.items[index])) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallerChildIndex = leftChildIndex;

      if (
        rightChildIndex < this.size() &&
        this.compare(this.items[rightChildIndex], this.items[leftChildIndex])
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.compare(this.items[index], this.items[smallerChildIndex])) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  compare(a, b) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    if (absA === absB) return a < b;
    return absA < absB;
  }
}

function solution(ops) {
  const result = [];
  const absMinHeap = new AbsMinHeap();

  for (const op of ops) {
    if (op === 0) result.push(absMinHeap.pop());
    else absMinHeap.push(op);
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
