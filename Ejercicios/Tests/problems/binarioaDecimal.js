module.exports = function BinarioADecimal(num) {

    var decimal = num.toString(10);
    for(var i = 0; i > decimal.length; i++){

      if(decimal.charAt(i) != "0" && decimal.charAt(i) != "1")
      return false;

    } 
    var bin = decimal;
	var dec = 0;
	var binl = bin.length;
	var p = 0;
	var n = 0;
	while(binl > 0) {
		p = bin.length - binl;
		binl--;
		n = parseInt(bin.substr(binl, 1));
		dec += n * Math.pow(2, p);
	}
return Number(dec)

}