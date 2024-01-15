console.log("hyy")
let slideIndex = 0;
let  myint = setInterval(showSlides, 1000);
let a =1;

function showSlides() {
	

	// get the array of divs' with classname image-sliderfade
	let slides = document.getElementsByClassName("fade");


	
	for (i = 0; i < slides.length; i++) {
		// initially set the display to
		// none for every image.
		slides[i].style.display = "none";
	}

	// increase by 1, Global variable
	slideIndex++;

	// check for boundary
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}


	slides[slideIndex-1].style.display = 'block';

	// Change image every 2 seconds
	
}


let obj = document.getElementById('bt1');

function start() {
	
	if(a == 1 ){
		clearInterval(myint);
		a++;
	}
	else{
	myint =	setInterval(showSlides, 1000);
		a--;
	}
	
    
	
}






