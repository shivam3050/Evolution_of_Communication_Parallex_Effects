
time = document.getElementsByClassName('bubbles')[0];


var movingFish2move = 1600;
var movingFish3move = 3000;
var movingFish4move = 1200;

if (screen.width < 400) {


    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')

  
    movingFish2move = 1680;
    movingFish3move = 5000;
    movingFish4move = 4300;
}



window.addEventListener('scroll', function () {

    let value = window.scrollY; 

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';


    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

   
    movingFish1.style.right = (value - 100) * 1 + 'px';
    movingFish2.style.left = (value - movingFish2move) * 1 + 'px';
    movingFish3.style.right = (value - movingFish3move) * 1 + 'px';
    movingFish4.style.left = (value - movingFish4move) * 1 + 'px';
})

