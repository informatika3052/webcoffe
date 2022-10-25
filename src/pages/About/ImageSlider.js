
// Image
import lampu1 from './img/lampu1.jpg';
import lampu2 from './img/lampu2.jpg';
import lampu3 from './img/lampu3.jpg';
import lampu4 from './img/lampu4.jpg';
import lampu5 from './img/lampu5.jpg';

export const Slider = [
    {
        image: `${lampu1}`
    },
    {
        image: `${lampu2}`
    },
    {
        image: `${lampu3}`
    },
    {
        image: `${lampu4}`
    },
    {
        image: `${lampu5}`
    }
]








// import React from 'react'

// const ImageSlider = () => {

//     const carouselSlide = document.querySelector('.image-slider');
//     const carouselImage = document.querySelectorAll('.image-slider img');


//     // Button 
//     const prevBtn = document.querySelector('.prevBtn');
//     const nextBtn = document.querySelector('.nextBtn');

//     // Counter

//     let counter = 1;
//     const size = carouselImage[0].clientWidth;
//     // let hasil = -size * counter;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//     nextBtn.addEventListener('click', function () {
//         if (counter >= carouselImage.length - 1) return;
//         carouselSlide.style.transition = "transform 0.4s ease-in-out";
//         counter++;
//         console.log(size);
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     });

//     prevBtn.addEventListener('click', function () {
//         if (counter <= 0) return;
//         carouselSlide.style.transition = "transform 0.4s ease-in-out";
//         counter--;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     });

//     carouselSlide.addEventListener('transitionend', function () {
//         if (carouselImage[counter].id === 'lastClone') {
//             carouselSlide.style.transition = 'none';
//             counter = carouselImage.length - 2;
//             carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//         }
//         if (carouselImage[counter].id === 'firstClone') {
//             carouselSlide.style.transition = 'none';
//             counter = carouselImage.length - counter;
//             carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//         }
//     });

//     return (
//         <div>

//         </div>
//     )
// }

// export default ImageSlider

