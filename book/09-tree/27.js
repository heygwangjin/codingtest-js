// 이진 탐색 트리 구현
class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

// Binary Search Tree
class BST {
  // 초기에 루트 노드는 없다
  constructor() {
    this.root = null;
  }

  // 루트 노드부터 시작해서 이진 탐색 트리 규칙에 맞는 위치에 새 노드 삽입
  insert(key) {
    // 루트 노드가 없는 경우 새로운 노드를 루트 노드로 추가
    if (!this.root) {
      this.root = new Node(key);
      return;
    }

    let curr = this.root;
    while (true) {
      // 삽입하려는 값이 현재 노드의 값보다 작은 경우 왼쪽 자식 노드로 이동
      if (key < curr.val) {
        if (curr.left) {
          curr = curr.left;
        } else {
          // 현재 노드의 왼쪽 자식 노드가 없는 경우 새로운 노드 추가
          curr.left = new Node(key);
          break;
        }
      } else {
        // 삽입하려는 값이 현재 노드의 값보다 큰 경우 오른쪽 자식 노드로 이동
        if (curr.right) {
          curr = curr.right;
        } else {
          // 현재 노드의 오른쪽 자식 노드가 없는 경우 새로운 노드 추가
          curr.right = new Node(key);
          break;
        }
      }
    }
  }

  // 이진 탐색 규칙에 따라 특정 값이 있는지 확인 (루트 노드부터 시작)
  search(key) {
    let curr = this.root;
    // 현재 노드가 존재하고, 찾으려는 값과 현재 노드의 값이 같지 않은 경우 반복
    while (curr && curr.val !== key) {
      // 찾으려는 값이 현재 노드의 값보다 작은 경우 왼쪽 자식 노드로 이동
      if (key < curr.val) {
        curr = curr.left;
      } else {
        // 찾으려는 값이 현재 노드의 값보다 큰 경우 오른쪽 자식 노드로 이동
        curr = curr.right;
      }
    }
    return curr;
  }

  preorder() {
    const result = [];
    function traverse(node) {
      if (node !== null) {
        result.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  inorder() {
    const result = [];
    function traverse(node) {
      if (node !== null) {
        if (node.left) traverse(node.left);
        result.push(node.val);
        if (node.right) traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  postorder() {
    const result = [];
    function traverse(node) {
      if (node !== null) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.val);
      }
    }
    traverse(this.root);
    return result;
  }
}

function solution(list, searchList) {
  const bst = new BST();

  // list의 각 요소를 이용하여 이진 탐색트리 생성
  for (const key of list) {
    bst.insert(key);
  }

  const result = [];

  // searchList의 각 요소를 이진 탐색 트리에서 검색하고, 검색 결과를 배열에 추가
  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
