function sentence(List) {
    List.sort((a,b)=>{return (Object.keys(a) - Object.keys(b))})
    return List.reduce((text, item)=>{return text + ' ' + Object.values(item)},'').slice(1)
   }