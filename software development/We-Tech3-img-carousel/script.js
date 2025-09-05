let currentImgindex = 0;
let imageCaro = document.querySelectorAll(".carousel-img");
let nextBtn = document.getElementById("next");
let prev = document.getElementById("prev");

// it shows my first image on the screen
imageCaro[currentImgindex].classList.add("active");

prev.addEventListener("click", ()=> {
    imageCaro[currentImgindex].classList.remove("active");
    currentImgindex--;
    if(currentImgindex <= 0){
        currentImgindex = imageCaro.length - 1;
    }
    imageCaro[currentImgindex].classList.add("active");

})

nextBtn.addEventListener("click",()=>{
    
//    then when the next button is clicked it removes the first image on the screen
   imageCaro[currentImgindex].classList.remove("active");
    // then the ++ increases the index of the image
    currentImgindex++;
//   it shows the first image on the screen if the index is the same as the last image index
     if (currentImgindex >= imageCaro.length) {
        currentImgindex = 0;
    }
// if not it diplays the incremented index image 
    imageCaro[currentImgindex].classList.add("active");
});

