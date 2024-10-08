// O(n^2) 스왑이 빈번하지 않을 때 유용
// 성능이 좋지 않지만 알고리즘이 쉽다.

function selectionSort(arr) {
  let smallest;
  for (let i = 0; i < arr.length; i++) {
    smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) smallest = j;
    }
    if (i !== smallest) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([0, 2, 10, 17, 19, 3]));
