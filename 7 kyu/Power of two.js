function isPowerOfTwo(n){
    while(n>2) {
      n = n/2
    }
    if (n==2 || n == 1) {
      return true
    } else {
      return false
    }
  }