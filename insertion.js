//O(n^2) 데이터가 정렬 되어있을 경우 유용
// if 1,2,3,4,-1
// 최악의 경우 4,3,2,1

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j >= 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      // if (arr[j] < arr[j - 1]) {
      //   [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      // } else break;
    }
  }

  console.log(arr);
  return arr;
}

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  console.log(arr);
  return arr;
}

insertionSort([5, 3, 4, 1, 2]);
insertionSort2([5, 3, 4, 1, 2]);
