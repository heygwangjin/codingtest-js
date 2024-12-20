function getCombinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환하며 탈출 조건으로도 사용됩니다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출
    const combis = getCombinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합침
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가
    result.push(...combine);
  });

  // 결과 반환
  return result;
}

console.log(getCombinations([1, 2, 3, 4], 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
