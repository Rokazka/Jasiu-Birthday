const circle = document.querySelector(".heart");
const letter = document.querySelector(".letter");
const envelope = document.querySelector(".envelope-open");
const h1 = document.querySelector("h1");
// const video = document.querySelector("video");


function openLtter() {
    letter.classList.toggle('active');
    circle.classList.toggle('heart-active');

    if (circle.classList.contains('heart-active')) {
        circle.classList.add('heart-active');
        h1.classList.remove('changeTwo')
        h1.classList.add('change')
        envelope.classList.remove("close");
        envelope.classList.add("open");
        video.play();

    } else {
        h1.classList.remove('change')
        h1.classList.add('changeTwo')
        envelope.classList.remove("open");
        envelope.classList.add("close");
        video.pause();
    }


}

circle.addEventListener('click', openLtter)