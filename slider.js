let winWidth = window.innerWidth;
//let winHight =  window.innerHeight;

let prev = document.querySelector('.nextSlide');
let next = document.querySelector('.prevewSlide');
let firstDot = document.querySelector('.firstDot');
let secondDot = document.querySelector('.secondDot');


prev.addEventListener("click", function SlideRight(){ 

  if (document.querySelector('.team-member__items__band').style.transform = "translateX(100% )" && winWidth > 900) {
document.querySelector('.team-member__items__band').style.transform = "translateX(-42%   )";

secondDot.style.backgroundImage = "url(icons/dot.png)";
   firstDot.style.backgroundImage = "url(icons/dot-2.png)";
   }
});
next.addEventListener("click", function SlideLeft(){ 
if (document.querySelector('.team-member__items__band').style.transform = "translateX(-42%)" && winWidth > 900) {
   document.querySelector('.team-member__items__band').style.transform = "translateX(0px)";
   firstDot.style.backgroundImage = "url(icons/dot.png)";
secondDot.style.backgroundImage = "url(icons/dot-2.png)";

}
 
     
  })
