
$(document).ready(function(){

  $("#reset").click(function(){
  	resetForm();
  	console.log("clicked reset");
  });

  $("#calc").click(function(){
  	calculateGrossPay();
  	console.log("clicked calc");
  });

});

function calculateGrossPay(){


	

		if(document.getElementById("forminput1").value >= 41){
			var pay1 = ((35*.5)+35) * document.getElementById("forminput1").value;
		}
		else{
			var pay1 = 35 * document.getElementById("forminput1").value;
		}	

		if(document.getElementById("forminput2").value >= 41){
			var pay2 = ((35*.5)+35) * document.getElementById("forminput2").value;
		}
		else{
			var pay2 = 35 * document.getElementById("forminput2").value;
		}
		if(document.getElementById("forminput3").value >= 41){
			var pay3 = ((35*.5)+35) * document.getElementById("forminput3").value;
		}
		else{
			var pay3 = 35 * document.getElementById("forminput3").value;
		}

		if(!isNaN(pay1)){
			document.getElementById("result1").innerHTML="Your pay is $" + pay1;
		if(!isNaN(pay2)){
			document.getElementById("result2").innerHTML="Your pay is $" + pay2;
		}
		if(!isNaN(pay3)){
			document.getElementById("result3").innerHTML="Your pay is $" + pay3;
		}
		};
		console.log("user has calculated");
	
};

function resetForm(){
	document.getElementById("frm").reset();
	document.getElementById("result1").innerHTML="";
	document.getElementById("result2").innerHTML="";
	document.getElementById("result3").innerHTML="";
	console.log("user has reset");
};
