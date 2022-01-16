$(function(){

	function dec2bin(num) {
		return parseInt(num, 10).toString(2);
	}
	
	function output(val) {
		$("#decimal").html(val);
		$("#binario").html(dec2bin(val));
	}
	
	function calcular(e){
		var result = 0;
		$(e.target).toggleClass("on off");
		$(".lampada").each(function(k, v){
			if ($(v).hasClass('on')) {
				result += $(v).data('number');
			}
		});
		output(result);
	}
	
	function lampadasSet(binario) {
		var binario = binario.split("").reverse().join("");
		$(".lampada").removeClass("on").addClass("off");
		$($(".lampada").get().reverse()).each(function(i, v){
			if (binario[i] == '1') {
				$(v).toggleClass("on off");
			}
		});
	}
	
	function mudaNumero(n) {
		function operacao() {
			var val = parseInt($("#decimal").html()) + n;
			if (val >= 0 && val <= 255) {
				lampadasSet(dec2bin(val));
				output(val);
			}
		}
		return operacao;
	}
	
	$("#apagar_todas").click(function(){
		$(".lampada").removeClass("on").addClass("off");
		output(0);
	});
	
	$("#ligar_todas").click(function(){
		$(".lampada").removeClass("off").addClass("on");
		output(255);
		
	});
	
	$(".lampada").click(calcular);
	$("#minus").click(mudaNumero(-1));
	$("#plus").click(mudaNumero(1));
	
});