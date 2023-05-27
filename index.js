
// We will change background image by trageting carousel div using getElementById property. Background image will change every 15s. we will just translate element to -100vw every fifteen seconds and at the end we will just translate element to it's orignal position. and this procces will countiue infinte times. 



const carousel = document.getElementById("carousel");
const slides = Array.from(carousel.children);

const prevButton = document.querySelector('.carousel-controller-left');
const nextButton = document.querySelector('.carousel-controller-right');

const indicatorsNav = document.querySelector('.indicators-navigation');
const indicatorsDots = Array.from(indicatorsNav.children);


const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


const removeLoading = () => {
}

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}


const moveToSlide = (carousel, currentSlide, targetSlide) => {
    carousel.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
    
}

const upadteDot = (currentDot, targetDot) => {
    currentDot.classList.remove('current_slide')
    targetDot.classList.add('current_slide')
}

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

window.addEventListener('load', ()=>{
    const preLoader = document.getElementById("loading");
    console.log("load")
    preLoader.style.display = 'none';  
})
slides.forEach(setSlidePosition);

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


























// const number = 0;

// setInterval(() => {
//     carousel.style.transform = `translateX(-${number}vw)`;
//     if (number == 700) {
//         number = 0;
//     } else {
//         number += 100;
//     }
// }, 10000)



// let carouselLeft = document.getElementById("carousel-controller-left");

// carouselLeft.addEventListener("click", () => {
//     if (number <= 0) {
//         number == 0;
//         carousel.style.transform = `translateX(-${number}vw)`;
//     } else {
//         number -= 100;
//         carousel.style.transform = `translateX(-${number}vw)`;
//     }
// })


// let carouselRight = document.getElementById("carousel-controller-right");

// carouselRight.addEventListener("click", () => {
//     if (number >= 700) {
//         number == 700;
//         carousel.style.transform = `translateX(-${number}vw)`;
//     } else {
//         number += 100;
//         carousel.style.transform = `translateX(-${number}vw)`;
//     }
// })


// const item1 = document.getElementById("item-1");
// const item2 = document.getElementById("item-2");
// const item3 = document.getElementById("item-3");
// const item4 = document.getElementById("item-4");
// const item5 = document.getElementById("item-5");
// const item6 = document.getElementById("item-6");
// const item7 = document.getElementById("item-7");
// const item8 = document.getElementById("item-8");

// item1.addEventListener('click', () => {
//     number = 0;
//     carousel.style.transform = `translateX(-${number}vw)`;
// });
// item2.addEventListener('click', () => {
//     number = 100;
//     carousel.style.transform = `translateX(-${number}vw)`;
// });
// item3.addEventListener('click', () => {
//     number = 200;
//     carousel.style.transform = `translateX(-${number}vw)`;
// });
// item4.addEventListener('click', () => {
//     number = 300;
//     carousel.style.transform = `translateX(-${number}vw)`;
// });
// item5.addEventListener('click', () => {
//     number = 400;
//     carousel.style.transform = `translateX(-${number}vw)`;
// });
// item6.addEventListener('click', () => {
//     number = 500;
//     carousel.style.transform = `translateX(-${number}vw)`;
// });
// item7.addEventListener('click', () => {
//     number = 600;
//     carousel.style.transform = `translateX(-${number}vw)`;
// });
// item8.addEventListener('click', () => {
//     number = 700;
//     carousel.style.transform = `translateX(-${number}vw)`;
// });


// const UpdateSlide = () =>{
//     carousel.style.transform = `translateX(-${number}*100vw)`;
//     number += 100;
// }