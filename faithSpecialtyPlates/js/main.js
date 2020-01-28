// JavaScript Document
window.addEventListener("load", function(){
	
	//instantiate singleton
	let main = Main.getInstance();
});


class Main{
	constructor(){
		this.getForm();
	}
	
	getForm(){
		var cartButtons = document.querySelectorAll('.button');
				//testing
				//console.log(cartButtons.length);
			
		//loop through all task buttons
		for (var i = 0; i < cartButtons.length; i++) {
		cartButtons[i].addEventListener('click', function() {
	
				//testing
    			console.log("btn id:", this.id);

			//condition for each button
			if (this.id == 'checkBtnNoRenew'){
			document.querySelector("#noRenewal").style.display = "block";
			document.querySelector("#renewal").style.display = "none";
			}
			else if(this.id == 'checkBtnRenew'){
			document.querySelector("#renewal").style.display = "block";
			document.querySelector("#noRenewal").style.display = "none";
			}
			else if(this.id == 'checkBtnRenewal'){
				document.querySelector("#thankyou").style.display = "block";
			}
			else if(this.id == 'checkBtnNoRenewal'){
				document.querySelector("#thankyou").style.display = "block";
			}
  			});
		}
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

