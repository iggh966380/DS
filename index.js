function bubble(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = 0;
    }
    console.log(arr, i);
  }
}

bubble([2, 83, 3, 5, 3, 4, 96, 15, 4]);
