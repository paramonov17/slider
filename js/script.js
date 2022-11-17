const btnControl = document.querySelector('.slider__control-btn');

btnControl.disabled = true;

const sliderItem = document.querySelectorAll('.slider__item');

const dotsItem = document.querySelectorAll('.slider__dots-item');

let current = 0;

const btnNext = document.querySelector('.next');

btnNext.onclick = function next() {
    for (let i = 0; i < sliderItem.length; i++){
        sliderItem[i].classList.remove('active');
        dotsItem[i].classList.remove('active');
    }

    if (current >= sliderItem.length-1) {
        current = 0;
        btnControl.disabled = false;
    }
    else {
        current++;
    } 
    sliderItem[current].classList.add('active');
    dotsItem[current].classList.add('active');  
}

const btnPrev = document.querySelector('.prev');

btnPrev.onclick = function prev() {

    if (current <= 0){
        current = sliderItem.length-1;      
    }
    else {
        current--;
    }

    for (let i = 0; i < sliderItem.length; i++){
        sliderItem[i].classList.remove('active');
        dotsItem[i].classList.remove('active');
        }
    sliderItem[current].classList.add('active');
    dotsItem[current].classList.add('active');

    if (current == 0){
        btnControl.disabled = false;
    }    
}



