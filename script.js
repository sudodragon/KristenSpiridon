// create picture carousel animation
// forward and back buttons
function setCarouselActions(){
    let carousel = document.getElementsByClassName("carouselImage");
    let className = "carouselImage";
    cur = 0;
    
    function nextImg() {
        carousel[cur].classList = className;  //reset old value

        if (cur == 0) {
            cur = carousel.length - 1;
        } else {
            cur = cur - 1;
        }

        carousel[cur].classList = className + " active";
    }

    function prevImg() {
        carousel[cur].classList = className; //reset old value

        if (cur == carousel.length - 1) {
        cur = 0;
        } else {
        cur = cur + 1;
        }

        carousel[cur].classList = className + " active";
    }

    document.getElementsByClassName("carouselButtonPrev")[0].addEventListener("click", nextImg);
    document.getElementsByClassName("carouselButtonNext")[0].addEventListener("click", prevImg);

    setInterval(nextImg, 5000);
}

setCarouselActions();

