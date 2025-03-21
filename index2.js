/*======Loading js code ==*/
window.onload = function(){
    const loadingWrapper = document.querySelector('.loading-wrapper');

    if(loadingWrapper){
        loadingWrapper.style.transition = "opacity 0.5s ease-out";
        loadingWrapper.style.opacity = "0";
        setTimeout(function(){
            loadingWrapper.style.display = "none"
        }, 500)
    }
}

/*================Mouse cool effect even if its nor working properly =====*/
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        cursor.remove();
    }, 100);
});
/*==================imgage and info transition =======*/
const animates = document.querySelectorAll('.first');
window.addEventListener('scroll', function(){
    const scrollTrigger = this.window.innerHeight;

    animates.forEach((animate) =>{
        const position = animate.getBoundingClientRect().top;

        if(position < scrollTrigger && position > 0){
            animate.style.animationPlayState = "running"
        }
        else{
            animate.style.animationPlayState ="paused";
            animate.style.animation = "none";
            animate.offsetHeight;
            animate.style.animation= '';
        }
    })
})
const animates2 = document.querySelectorAll('.second');
window.addEventListener('scroll', function(){
    const scrollTrigger = this.window.innerHeight;

    animates2.forEach((animate2) =>{
        const position = animate2.getBoundingClientRect().top;

        if(position < scrollTrigger && position > 0){
            animate2.style.animationPlayState = "running"
        }
        else{
            animate2.style.animationPlayState ="paused";
            animate2.style.animation = "none";
            animate2.offsetHeight;
            animate2.style.animation= '';
        }
    })
})
/*======================Add contact code ========*/
var addcontact = document.querySelectorAll('.addcontact');
addcontact.forEach((contact) => {
    contact.addEventListener('click', function(){

        let contactInput = this.closest('h4').querySelector('.cntact');
        let contactResult = this.closest('.content').querySelector('.display')
        if(contactInput.value.length < 9){
            alert('You must enter a valid number boss')
        }
        else{
         contactResult.innerHTML = contactInput.value;
         contactInput.remove();
         this.remove();
        }
    })
})
/*=============================Carousel animation the slider animation if you prefer=)*/
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelector('.item'),
    runningTime = document.querySelector('.time-running');

 let timeRunning = 8000;
 let timeAutonext = 9000;

nextBtn.onclick = function(){
    showslider('next')
}
prevBtn.onclick = function(){
    showslider('prev')
}

let runTimeOut 
let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutonext)

function showslider(type){
    let sliderItemDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemDom[0])
        carousel.classList.add('next')
    }
    else{
        list.prepend(sliderItemDom[sliderItemDom.length - 1])
        carousel.classList.add('prev')
    }
    clearTimeout(runTimeOut)
    runTimeOut = setTimeout( ()=> {
        nextBtn.click()
    }, timeAutonext)
}