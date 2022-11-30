function sortMyString(S) {
    
    let one = [...S].reduce((text,item,index)=>{
      if(index % 2 == 0) {
        return text += item
      } else return text
    },'');
  let two = [...S].reduce((text,item,index)=>{
      if(index % 2) {
        return text += item
      } else return text
    },'');
  return one +' ' + two
}