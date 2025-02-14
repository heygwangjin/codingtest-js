class MinHeap {
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
    if (this.size() == 0) {
      return 0;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      // MinHeap은 부모가 더 작으면 BubbleUp을 멈춘다.
      if (this.items[parentIndex] <= this.items[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
        rightChild < this.size() && // 오른쪽 자식이 있는지 확인 없으면 바로 왼쪽 자식 선택
        this.items[rightChild] < this.items[leftChild]
          ? rightChild
          : leftChild;
      if (this.items[index] <= this.items[smallerChild]) {
        break;
      }
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(ops) {
  const result = [];
  const minHeap = new MinHeap();

  for (const op of ops) {
    if (op === 0) {
      result.push(minHeap.pop());
    } else {
      minHeap.push(op);
    }
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
