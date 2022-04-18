const menuItems = document.querySelectorAll('.header-options a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {    
    window.scroll({
        top: to,
        behavior: "smooth",
    });  
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

document.querySelector('.menu--mobile').addEventListener('click', ()=>{       
    document.querySelector('.header-options ul').style.right = '0px';
});

document.querySelector('.menu-closer').addEventListener('click', ()=>{
    document.querySelector('.header-options ul').style.right = '-720px';    
});

document.querySelectorAll('nav a').forEach(e => {
	e.addEventListener('click', ()=> {
		document.querySelector('.header-options ul').style.right = '-720px';
	});
});

document.querySelectorAll('details').forEach(e => {
	e.addEventListener('click', checkAttributeOpenner());
});

function checkAttributeOpenner() {
	let detailsOpener = document.querySelector('details').getAttribute('open');
	let addOpen = document.querySelector('details');
	if(detailsOpener === null) {
		addOpen.setAttribute('open', '');
	} else {
		addOpen.removeAttribute('open');
	}
}