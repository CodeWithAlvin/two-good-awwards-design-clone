let menuIcon = document.getElementById('menu-icon')
let menu = document.getElementById('menu')

menuIcon.addEventListener("click",()=>{
	menu.classList.toggle("opened")
})