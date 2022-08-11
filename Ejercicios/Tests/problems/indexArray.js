//encontrar el indice de la primera aparicion de un string(needle)
//dentro de otro(haystack)
//no se puede utilizar indexOf()

//ejemplo: 
//haystack = 'react-redux'
//needle = 'redux'
//output = 5

//haystack = 'react-redux'
//needle = 'hola'
//output = -1


module.exports =  function findNeedle(haystack, needle) {
    for (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex += 1) {
      for (let needleIndex = 0; needleIndex < needle.length; needleIndex += 1 ) {
        if (haystack[haystackIndex + needleIndex] !== needle[needleIndex]) break;
        if (needleIndex + 1 === needle.length) return haystackIndex;
      }
    }
    return -1;
  }

