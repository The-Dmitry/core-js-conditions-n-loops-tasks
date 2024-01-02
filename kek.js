function getNearestBigger(number) {
  const arr = Array.from(`${number}`, (v) => +v);
  console.log(arr[9]);
  // const l = arr.findLastIndex((v, i, a) => v < a[i + 1]);
  const l = arr.findLastIndex((v, i, a) => v < a[i + 1]);
  console.log(l);
  if (l === -1) {
    return number;
  }
  const g = arr.findLastIndex((v, i, a) => i > l && v > a[l] && v !== 1);
  // const g = arr.lastIndexOf(
  //   Math.min(...arr.filter((v, i) => i > l && v > arr[l] && v !== 1))
  // );

  console.log(g);
  [arr[l], arr[g]] = [arr[g], arr[l]];

  return +[...arr.toSpliced(l + 1), ...arr.toSpliced(0, l + 1).sort()].join('');
}

console.log(getNearestBigger(5657961));

//     52174920893      52174920938
