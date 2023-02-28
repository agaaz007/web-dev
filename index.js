
    const movingText = document.querySelector('.moving-text');

function moveText() {
  const containerWidth = document.querySelector('.container').offsetWidth;
  const textWidth = movingText.offsetWidth;
  let currentPosition = -textWidth;

  function updatePosition() {
    currentPosition += 1;
    if (currentPosition > containerWidth) {
      currentPosition = -textWidth;
    }
    movingText.style.left = currentPosition + 'px';
    requestAnimationFrame(updatePosition);
  }

  updatePosition();
}

moveText();



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// const slideshowImages = document.querySelectorAll('.slideshow-image');
// if (!slideshowImages.length) {
//   console.error('No slideshow images found in the document.');

// }

// let currentImageIndex = 0;

// function showNextImage() {
//   let previousImageIndex = currentImageIndex;
//   currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;

//   slideshowImages[previousImageIndex].classList.remove('active');
//   slideshowImages[currentImageIndex].classList.add('active');
//   console.log(previousImageIndex);
// }

// slideshowImages[currentImageIndex].classList.add('active');

// setInterval(showNextImage, 5000);

// const slideshowImages = document.querySelectorAll('.slideshow-image');
// console.log(slideshowImages)
// let currentImageIndex = 0;

// function showNextImage() {
//   console.log('Entered showNExtImage function')
//   const previousImageIndex = currentImageIndex;
//   currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
// //   console.log(slideshowImages[previousImageIndex])

//   slideshowImages[previousImageIndex].classList.remove('active');
//   slideshowImages[currentImageIndex].classList.add('active');

//   setTimeout(showNextImage, 5000);
// }

// slideshowImages[currentImageIndex].classList.add('active');
// setTimeout(showNextImage, 5000);


	
