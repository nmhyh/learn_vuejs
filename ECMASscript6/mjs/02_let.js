function drawShape() {
	let mContent = document.getElementById('mContent');
	mContent.innerHTML = '';
	for (let i = 1; i < 11; i++) {
		let elP = document.createElement('p');
		elP.innerHTML = i;
		elP.onclick = function () {
			alert('Selected: ' + i);
		};
		mContent.appendChild(elP);
	}
}

function clearShape() {
	var mContent = document.getElementById('mContent');
	mContent.innerHTML = '';
}
