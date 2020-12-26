const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
	// Get active slide
	const activeSlide = document.querySelector('.active');
	activeSlide.classList.remove('active');
	// Get next slide
	let nextSlide = activeSlide.nextElementSibling;
	// If there isn't next slide jump to first one
	if (!nextSlide) {
		nextSlide = slides[0];
	}
	nextSlide.classList.add('active');
}

const prevSlide = () => {
	const activeSlide = document.querySelector('.active');
	activeSlide.classList.remove('active');
	let previousSlide = activeSlide.previousElementSibling;
	console.log(previousSlide)
	if (!previousSlide) previousSlide = slides[slides.length-1];
	previousSlide.classList.add('active');
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide)