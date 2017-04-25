
var link = document.getElementById('open-menu');

link.onclick = function() {
	var divMenu = document.getElementById("left-menu");
	var allMenu = document.getElementById("content-menu");

	if(divMenu.style.width === '') {
		link.innerHTML = '';
		link.innerHTML = "MENU";
		divMenu.style.width = '20%';
		divMenu.style.transition='1s';	
		allMenu.style.visibility = 'visible';
	} else {
		divMenu.style.width = '';
		link.innerHTML = "<>";
		allMenu.style.visibility = 'hidden';
	}
	
}