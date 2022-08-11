
//tu codigo aqui:

module.exports = function mDSumArray(array) {
    var acc = 0;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        acc = acc + mDSumArray(array[i])
      } else {
        acc = acc + array[i];
      }
    }
    return acc;
  }