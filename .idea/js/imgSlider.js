const slide = document.querySelectorAll('.slide');
const slideTrack = document.querySelector('.slide-track');

function setUp(){
    const clonedSlides = Array.from(slide).map((el) => el.cloneNode(true));

    clonedSlides.forEach((el) => {
        slideTrack.appendChild(el);
    })
}
setUp()

