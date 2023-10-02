let menuIcon = document.getElementById('menu-icon')
let menu = document.getElementById('menu')
let logo = document.getElementById('logo')
let nav = document.getElementsByTagName("nav")[0]
let btnsDiv = document.getElementsByClassName("btns-div")[0]

menuIcon.addEventListener("click",()=>{
	menu.classList.toggle("opened")
	nav.classList.toggle("color-white")
	// logo.classList.toggle="#fff"
	logo.classList.toggle("invert")
	btnsDiv.classList.toggle("invert")
})