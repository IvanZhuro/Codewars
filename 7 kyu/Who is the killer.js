function killer(suspectInfo, dead) {
    for ( key in suspectInfo) {
      let result = false;
      for ( name of dead) {
        if (suspectInfo[key].indexOf(name) != -1) {
          result = true
        } else result = false
      }
      if (result) return key;
    }
  }