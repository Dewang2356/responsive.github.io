let hamburger = document.querySelector(".hamburger");
	let cross = document.querySelector(".cross");
	let cover = document.querySelector(".cover");
	let sideNav = document.querySelector(".sideNav");
	let body = document.querySelector("body");
	hamburger.addEventListener("click", ()=> {
sideNav.style.left = "0";
cover.style.display = 'block';
body.classList.add("active");
	});

	cross.addEventListener("click", ()=> {
sideNav.style.left = "-100%";
cover.style.display = 'none';
body.classList.remove("active");
	});