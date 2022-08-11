function stack(haystack, needle) {
    for (let i = 0; i < haystack.length; i += 1) {
      for (let j = 0; j < needle.length; j += 1 ) {
        if (haystack[i + j] !== needle[j]) break;
        if (j + 1 === needle.length) return i;
      }
    }
    return -1;
  }


  function numeroOcurrencia(s0, s1){
    const contador = 0;
    while (true){
       let index = needleInstack(s0,s1); 
       if (index === -1){
           return contador;
       }else{
           contador = contador + 1;
           s0 = s0.slice(index + 1)
       }
    }
  }