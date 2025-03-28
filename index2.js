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

function filterStudents() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const students = document.querySelectorAll('#student .side');

    students.forEach(student => {
        const name = student.querySelector('span').textContent.toLowerCase();
        if (name.includes(input)) {
            student.style.display = '';
        } else {
            student.style.display = 'none';
        }
    });
}
/*
const searchBtn = document.getElementById('search-button')
searchBtn.addEventListener('click', function(){
    filterStudents()
})

let friends = {
    0: {
        'nom': 'amida',
        'number': '237688086860',
        'location': 'Olembe',
        'institute': 'pkf',
        'image': 'amida.jpg'
    },
    1: {
        'nom': 'awa',
        'number': '23768878566',
        'location': 'Emana',
        'institute': 'pkf',
        'image': 'awa.jpeg'
    }
};

Object.values(friends).forEach((friend) => {
    let listfriends = document.querySelector('.list-friends');
    let signlefriend = `<div class="side ${friend.nom}">
                <div class="img second">
                    <img src="img/${friend.image}" alt="">
                    <img src="img/amida1.jpg" alt="">
                </div>
                <div class="content first">
                    <h4>Name :</h4>
                    <span>${friend.nom}</span>
                    <h4>Age :${friend.age}</h4>
                    <p>20</p> <!-- Age should ideally come from data -->
                    <h4>Height :</h4>
                    <p>1.7m</p> <!-- Height should ideally come from data -->
                    <h4>Location :</h4>
                    <p>${friend.location}</p>
                    <h4>
                        Contact :
                        <input type="text" title="contact" class="contact">
                        <button class="addcontact">Add contact</button>
                    </h4>
                    <p class="display">......</p>
                    <h4>Bio</h4>
                    <p>Comes early to school as if she was in her house,
                        does all assignments and is never punished, too big 
                        to wash the class, loves only her book just like her bench mate loves trouble. <br>
                        <span>PS. "Mammy I swear" what will you swear with.</span>
                    </p>
                </div>
            </div>`;
    listfriends.insertAdjacentHTML('beforeend', signlefriend);
}); */