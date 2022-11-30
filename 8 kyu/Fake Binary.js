function fakeBin(x){
    let bin =''
    for (num of x) {
      if(num < 5) {
        bin += '0'
      } else bin += '1'
    }
    return bin;
  }