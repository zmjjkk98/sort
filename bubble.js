// O(n^2) 거의 정렬된 배열에서 유용

function bubbleSort(arr) {
  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      noSwap = true;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
      if (noSwap) break;
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 1, 2, 4]));
