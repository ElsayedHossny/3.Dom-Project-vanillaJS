var box = Array.from(document.querySelectorAll(".box img")); //return Nodelist to array 
var backImage = document.querySelector(".coverbox");
var displayImage = document.querySelector(".lightbox-item ");

var rightBtn = document.querySelector("#nextBtn");
var leftBtn = document.querySelector("#prevBtn");
var closeBtn = document.querySelector("#closeBtn");

var CurrentIndexElement;

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function (e) {
        var imgClicked = e.target.src;
        backImage.style.display = "flex";
        CurrentIndexElement = box.indexOf(e.target); //index of element from array(box)
        displayImage.style.backgroundImage = `url(${imgClicked})`;
    })
}

function displayNextImg() {
    CurrentIndexElement++;
    if (CurrentIndexElement == box.length) {
        CurrentIndexElement = 0;
    }
    displayImage.style.backgroundImage = `url(${box[CurrentIndexElement].src})`;
}

function displayPrevImg() {
    CurrentIndexElement--;
    if (CurrentIndexElement < 0) {
        CurrentIndexElement = box.length - 1;
    }
    displayImage.style.backgroundImage = `url(${box[CurrentIndexElement].src})`;
}

// mouse event 
rightBtn.addEventListener('click', function () {
    displayNextImg();
})
leftBtn.addEventListener('click', function () {
    displayPrevImg();
})
closeBtn.addEventListener('click', function () {
    backImage.style.display = "none";
})

backImage.addEventListener('click', function (e) {
    if (e.target !== displayImage && e.target !== rightBtn && e.target !== leftBtn) { // more important [sure that you don't click on image ] 
        backImage.style.display = "none";
    }
})

// Keyboard Event
document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.code === "Tab") {
        backImage.style.display = "none";
    } else if ((e.code === "ArrowRight")) {
        displayNextImg();
    }
    else if ((e.code === "ArrowLeft")) {
        displayPrevImg();
    }
})