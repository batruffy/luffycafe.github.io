
//Targeting All Elements Here

const carousel = document.getElementById("carousel");
const slides = Array.from(carousel.children);
const prevButton = document.querySelector('.carousel-controller-left');
const nextButton = document.querySelector('.carousel-controller-right');
const indicatorsNav = document.querySelector('.indicators-navigation');
const indicatorsDots = Array.from(indicatorsNav.children);
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//All Function listed here..
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

//Fuunction to move Slides...
const moveToSlide = (carousel, currentSlide, targetSlide) => {
    carousel.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');

}

//Function to upadte indicators.....
const upadteDot = (currentDot, targetDot) => {
    currentDot.classList.remove('current_slide')
    targetDot.classList.add('current_slide')
}

//Function to upadte controller.....
const addControllerArrow = (targetDotIndex, nextButton, prevButton, slides) => {
    if (targetDotIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetDotIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


//Adding Loading page while loading........
window.addEventListener('load', () => {
    const preLoader = document.getElementById("loading");
    console.log("load")
    preLoader.style.display = 'none';
})


//Setting postion of all slides...
slides.forEach(setSlidePosition);


//Adding events on next button....
nextButton.addEventListener('click', () => {
    const currentSlide = carousel.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = indicatorsNav.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(carousel, currentSlide, nextSlide);
    upadteDot(currentDot, nextDot);
    addControllerArrow(nextIndex, nextButton, prevButton, slides);

});


//Adding events on prev button....
prevButton.addEventListener('click', () => {
    const currentSlide = carousel.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = indicatorsNav.querySelector('.current_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(carousel, currentSlide, prevSlide);
    upadteDot(currentDot, prevDot);
    addControllerArrow(prevIndex, nextButton, prevButton, slides);
});

//Adding events on indicators....
indicatorsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('span');

    if (!targetDot) return;

    const currentSlide = carousel.querySelector('.current_slide');
    const currentDot = indicatorsNav.querySelector('.current_slide');
    const targetDotIndex = indicatorsDots.findIndex(dot =>
        dot === targetDot
    );
    const targetSlide = slides[targetDotIndex];

    moveToSlide(carousel, currentSlide, targetSlide);
    upadteDot(currentDot, targetDot);
    addControllerArrow(targetDotIndex, nextButton, prevButton, slides);
});



//Adding Custom Cursor Function.....

const cursor = document.querySelector('.cursor');
const cursorDets = cursor.getBoundingClientRect();
const cursorWidth = cursorDets.width;
const cursorHeight = cursorDets.height;
console.log(cursorWidth);
console.log(cursorHeight);


const landing = document.querySelector('.landing');
const tags = document.querySelector('.tags');
console.log(tags)
const tag = document.querySelector('.tags-list');
const nav = document.querySelector('.navigation-bar');
const tagItems = document.querySelectorAll('.tags-items');
const hover = document.querySelectorAll('.hover');
const spanLinks = document.querySelectorAll('.span-links');
const icons = document.querySelector('.others-nav-links');
console.log(nav);

window.addEventListener('mousemove', (dets) => {
    
    cursor.style.transform = `translate(${dets.clientX - cursorWidth/2}px, ${dets.clientY - cursorHeight/2}px)`;
});


//Function to Add the cursor events on any element.....


const cursorEvent = (scale) => {
    cursor.style.width = `${cursorWidth * scale}px`;
    cursor.style.height = `${cursorHeight * scale}px`;
    
}



hover.forEach(element => {
    element.addEventListener('mousemove',()=>{
        cursorEvent(2);
        element.style.color ="white";
        // element.style.transform =`translateY(-100%)`;
        cursor.style.mixBlendMode = `difference`;
    })
    element.addEventListener('mouseleave',()=>{
        cursorEvent(1);
        element.style.color = "black";
        // element.style.transform =`translateY(0)`;
        cursor.style.mixBlendMode = `normal`;
    })
})
