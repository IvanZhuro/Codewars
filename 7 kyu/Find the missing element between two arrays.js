function findMissing(arr1, arr2) {
    let sum1 = arr1.reduce((previousValue, currentValue, index, array) => {
    return previousValue + currentValue;
  },0)
      let sum2 = arr2.reduce((previousValue, currentValue, index, array) => {
    return previousValue + currentValue;
  },0)
    return arr1.length > arr2.length ? sum1 - sum2 : sum2 - sum1
  }