function ChangePages(pages) {
	let page = pages,
		welcome = document.getElementById('welcome-page'),
		skills = document.getElementById('skills-page'),
		project = document.getElementById('project-page');

	if(page === 'skills-page') {
		document.getElementById("welcome-page").style.display = "none";
	}

}