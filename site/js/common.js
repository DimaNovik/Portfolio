function ChangePages(pages) {
	let page = pages,
		welcome = document.getElementById('welcome-page').id,
		skills = document.getElementById('skills-page').id,
		project = document.getElementById('project-page').id,
		other = document.getElementById('other-page').id;

	if(page === welcome) {
		document.getElementById(page).style.display = "flex";
		document.getElementById("skills-page").style = '';
		document.getElementById("project-page").style = '';
		document.getElementById("other-page").style = '';			
	}

	if(page === skills) {
		document.getElementById(page).style.display = "block";
		document.getElementById("welcome-page").style.display = 'none';
		document.getElementById("project-page").style.display = 'none';
		document.getElementById("other-page").style.display = 'none';			
	}

	if(page === project) {
		document.getElementById(page).style.display = "block";
		document.getElementById("welcome-page").style.display = 'none';
		document.getElementById("skills-page").style.display = 'none';
		document.getElementById("other-page").style.display = 'none';		
	}

	if(page === other) {
		document.getElementById(page).style.display = "block";
		document.getElementById("welcome-page").style.display = 'none';
		document.getElementById("skills-page").style.display = 'none';
		document.getElementById("project-page").style.display = 'none';		
	}

}