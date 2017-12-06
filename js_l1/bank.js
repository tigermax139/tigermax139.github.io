// started summ
var s0 = 100;
// pozentna stavka
var p = 12;

pz = (p/12)*s0
// end summ
var sn = 10000;
var curent = false;
var curent1 = false;

var f = 2;


if(f == 1){
	for (var month = 1; curent != true ; month++){
		if(s0 < sn){
			s0 = s0 + pz;
		}else if(s0 >= sn){
			console.log(month);
			curent = true;
		}
	}

}else if(f == 2) {
		for (var month = 1; curent1 != true ; month++){
		if(s0 < sn){
			s0 = s0 + (p/12)*s0;
		}else if(s0 >= sn){
			console.log(month);
			curent1 = true;
		}
	} 
}

