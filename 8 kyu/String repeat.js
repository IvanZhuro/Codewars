function repeatStr (n, s) {
    let str = ''
    while(n) {
      n -= 1;
      str += s
    }
    return str;
  }