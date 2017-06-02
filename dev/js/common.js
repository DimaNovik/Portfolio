function ChangePages(pages) {
	let getPage = pages,
		main = document.getElementById('main-content').children;

	for (let i=0; i<main.length; i++) {

		pageName = main[i].id;

		if (getPage === pageName) {
			main[i].style.display = "flex";
		} else {
			main[i].style.display = "none";
		}	
	}
}

function showPop(id) {
	console.log(id);
	let viewId = id;
	return viewId;
}