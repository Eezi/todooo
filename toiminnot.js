//DATA Controller
let dataController = (function() {

	//dataa



})();


//UI Controller
let UIController = (function() {



})();



let controller = (function(UICtrl, dataCtrl) {
	
	let addItem = () => {

		//1. Otetaan input kentän data 

		//2. Lisätään itemi UI:hin

		console.log('it works!');
	}
		//Hyvääksyy napin kun painaa pelkkää enteriä
		document.getElementById("plussa").addEventListener('click', addItem);

		document.addEventListener('keypress', function(event) {

			if(event.keyCode === 13) {
				addItem();
			}
			
		});

})(UIController, dataController);
