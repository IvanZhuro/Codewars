function colourAssociation(array){
    let result = []
    for (key of array) {
      result.push({[key[0]]:key[1]})
    }
  return result;
  }