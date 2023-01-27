let leftArrow = document.querySelector(".fa-angle-left");
let rightArrow = document.querySelector(".fa-angle-right");
let cardColumns = document.querySelector(".featuredcard-columns");

leftArrow.addEventListener("click", function(){
    cardColumns.scrollLeft -= 50;
});
rightArrow.addEventListener("click", function(){
    cardColumns.scrollLeft += 50;
});
