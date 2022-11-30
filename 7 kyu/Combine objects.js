function combine(...obj) {
    let result = {}
    for (item of arguments) {
      for ( key in item) {
        if (result[key]) {
          result[key] = result[key] + item[key];
        } else {result[key] = item[key];}
      }
    }
    return result
  }