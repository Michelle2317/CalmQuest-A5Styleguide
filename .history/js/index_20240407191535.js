var path = window.location.pathname
if (path === '/') {
	document.getElementById('logo').classList.add('active')
} else if (path === '/design.html') {
	document.getElementById('design').classList.add('active')
} else if (path === '/references.html') {
	document.getElementById('references').classList.add('active')
}
