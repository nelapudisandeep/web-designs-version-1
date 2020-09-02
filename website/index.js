let imageContainer = document.querySelectorAll('.card-image-container');
let fadeInContainer = document.querySelectorAll('.image-overlay-content');

imageContainer.forEach((el,index)=>el.addEventListener('mouseover',(e)=>{
    fadeInContainer[index].style.display = "flex";
}));

imageContainer.forEach((el,index)=>el.addEventListener('mouseout',e=>{
    fadeInContainer[index].style.display = "none";
}));
