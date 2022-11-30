function noSpace(x){
    let str = ''
    for (key of x) {
      if(key !== ' ') str += key
     }
    return str
  }