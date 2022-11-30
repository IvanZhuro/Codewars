function whoseBicycle(diary1, diary2, diary3) {
    let son =''
    diary1 = [...Object.values(diary1)].reduce((a,b)=>{return a+b},0);
    diary2 = [...Object.values(diary2)].reduce((a,b)=>{return a+b},0);
    diary3 = [...Object.values(diary3)].reduce((a,b)=>{return a+b},0);
    diary1 > diary2 && diary1 > diary3 ? son = 'first' : diary2 > diary3 ? son ='second' : son = 'third';
    let result = `I need to buy a bicycle for my ${son} son.`
    return result;
  }