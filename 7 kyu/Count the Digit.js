function nbDig(n, d) {
    let result = 0;
    for ( let i = 0; i<=n; i++) {    
      [...(i*i).toString()].filter((item)=>{
        if (item == d) {
          result += 1;
        }  
      })
    }
    return result
  }