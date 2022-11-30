function mergeArrays(arr1, arr2) {
    let arr = [...arr1,...arr2]
    return Array.from(new Set([...arr].sort((a,b) =>  a - b)))
  }