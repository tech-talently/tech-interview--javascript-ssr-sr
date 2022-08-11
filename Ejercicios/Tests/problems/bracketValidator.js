// Crear un bracket validator,
// que este balanceado correctamente, los brackets validos son los siguientes,

// '{[],()}' deberia devolver true
// '{[(])}' deberia devolver false
// '{[(' deberia devolver false
// {[([{()[]{}}])]} deberia devolver true

module.exports = function bracketValidator(cadena) {

    const bracket = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    const openBracket = [];
    for (var i = 0; i < cadena.length; i++) {
        if (bracket[cadena[i]]) {
            openBracket.push(cadena[i])
        }
        else if (bracket[openBracket.pop()] !== cadena[i]) {
            return false;
        }
        else continue;
    }
    return !openBracket.length;
}
