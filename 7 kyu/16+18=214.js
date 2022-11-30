function add(num1, num2) {
    [num1,num2] = [Array.from(num1.toString(), Number),Array.from(num2.toString(), Number)]
    while (num1.length !== num2.length) {
      num1.length > num2.length ? num2.unshift(0) : num1.unshift(0)
    }
    let result = num1.reduce((previousValue, currentItem, index, arr)=>{
      return previousValue + (currentItem + num2[index]).toString()
    },'')
    return Number(result);
  }