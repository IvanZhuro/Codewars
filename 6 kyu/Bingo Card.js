function getCard() {
    let result = []
    for ( let i = 0; i<5; i++) {
      result.push(`B${parseInt(Math.random()*15+1)}`)
    }
      for ( let i = 0; i<5; i++) {
      result.push(`I${parseInt(Math.random()*15+16)}`)
    }
      for ( let i = 0; i<4; i++) {
      result.push(`N${parseInt(Math.random()*15+31)}`)
    }
      for ( let i = 0; i<5; i++) {
      result.push(`G${parseInt(Math.random()*15+46)}`)
    }
      for ( let i = 0; i<5; i++) {
      result.push(`O${parseInt(Math.random()*15+61)}`)
    }
    return result
  }