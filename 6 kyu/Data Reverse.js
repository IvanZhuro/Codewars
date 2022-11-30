function dataReverse(data) {
    let result = []
    while(data.length > 0) {
      result.unshift(...data.splice(0,8))
    }
    return result
  }