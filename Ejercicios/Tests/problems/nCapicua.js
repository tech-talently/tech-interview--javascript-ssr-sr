function esPolindromo(num) {
    const string = num.toString();
    const newArray = string.split("").reverse().join('')

    if (newArray === string) {
        return true
    } else {
        return false
    }

}
function siguientePolindromo(num) {
    while (true) {

        if (esCapicua(num)) {

            return num;
        } else {

            num = num + 1;

        }

    }


}
module.exports = {

    esPolindromo,
    siguientePolindromo

}