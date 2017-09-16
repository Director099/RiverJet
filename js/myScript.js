'use strict'
/*
var riverJet = document.getElementsByClassName('riverJet'),
	chaika = document.getElementsByClassName('chaika'),
	jetStar = document.getElementsByClassName('jetStar'),
	btnRiverJet = document.getElementById('btnRiverJet'),
	btnChaika = document.getElementById('btnChaika'),
	btnJetStar = document.getElementById('btnJetStar');

btnChaika.addEventListener('click', function (event) {
	event.preventDefault();
	for (var i = 0; i < chaika.length; i++) {
		chaika[i].style.display = ('none');
	};
});
*/

var btnBoats = document.getElementsByClassName('btn-boats');
var allProducts = document.querySelectorAll('.product>.col-md-4');
console.log(allProducts);
for (var i = 0, len = btnBoats.length; i < len; i++) {
	btnBoats[i].addEventListener('click', function() {
		var id = this.id;
		for (var j = 0, len = allProducts.length; j < len; j++) {
			allProducts[j].style.display = 'none';
		}
		var toShow = document.querySelectorAll('.product>.' + id);
		for (var j = 0, len = toShow.length; j < len; j++) {
			toShow[j].style.display = 'block';
		}
	});
}

functio sdf() {
	
}
