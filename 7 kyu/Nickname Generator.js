function nicknameGenerator(name){
    let result = ''
    if (name.length <= 3) {
      return "Error: Name too short"
    }
    if (/[aeiou]/.test(name[2])) {
      return name.slice(0,4)
    }
    return name.slice(0,3)
  }