function vowelOne(s){
    let result = ''
    for ( key of s) {
      /[aeiou]/.test(key.toLowerCase()) ? result += 1 : result += 0
    }
    return result
  }