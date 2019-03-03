// This contains the button actions
// not sure if doc.ready is nessesary
// but to be safe its in
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
// This is where the calculations are proccesed
function calculateGrossPay(){


	
		// This is where the inputs go from the form, only numbers
		// Its basically just a x b = c
		if(document.getElementById("forminput2").value >= 41){
			var pay1 = (document.getElementById("forminput1").value * 1.5) * document.getElementById("forminput2").value;
		}
		else{
			var pay1 = document.getElementById("forminput1").value * document.getElementById("forminput2").value;
		}	

		if(document.getElementById("forminput4").value >= 41){
			var pay2 = (document.getElementById("forminput3").value * 1.5) * document.getElementById("forminput4").value;
		}
		else{
			var pay2 = document.getElementById("forminput3").value * document.getElementById("forminput4").value;
		}

		if(document.getElementById("forminput6").value >= 41){
			var pay3 = (document.getElementById("forminput5").value * 1.5) * document.getElementById("forminput6").value;
		}
		else{
			var pay3 = document.getElementById("forminput5").value * document.getElementById("forminput6").value;
		}
		

		// This is to check to see if the answer is a number
		// This isNaN may not be nessasary since my input only accepts numbers with the type=number
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
// This resets everything on screen
function resetForm(){
	document.getElementById("frm1").reset();
	document.getElementById("frm2").reset();
	document.getElementById("frm3").reset();
	document.getElementById("result1").innerHTML="";
	document.getElementById("result2").innerHTML="";
	document.getElementById("result3").innerHTML="";
	console.log("user has reset");
};
