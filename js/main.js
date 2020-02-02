// JavaScript Document
window.addEventListener("load", function(){
	
	//instantiate singleton
	Main.getInstance();
});

	class Main{
	constructor(){
		this.getNoRenewTotal();
		this.getRenewTotal();
	}
		
	getNoRenewTotal(){
		var price = document.getElementsByName('price');
        var quantity = document.getElementsByName('num');
		var tot = 0;
		
			var handler = quantity[0].addEventListener("keyup", function() {

            if(price[0].value != "" && quantity[0].value != "")
			{
             tot += parseInt(quantity[0].value) * parseInt(price[0].value);
            document.querySelector("#total").innerHTML = tot;
			}
	});		
}

getRenewTotal(){
		var priceR = document.getElementsByName('priceR');
        var quantityR = document.getElementsByName('numR');
		var tot = 0;
		
			quantityR[0].addEventListener("keyup", function() {

            if(priceR[0].value != "" && quantityR[0].value != "")
			{
             tot += parseFloat(quantityR[0].value) * parseFloat(priceR[0].value);
            document.querySelector("#totalSC").innerHTML = tot;
			}
	});	
}
		
	static getInstance(){
		if(!Main._instance){
			Main._instance = new Main(); 
			return Main._instance; 
		}
		else{
			throw SyntaxError('Cannot create a second Course instance');
			}
		}
}