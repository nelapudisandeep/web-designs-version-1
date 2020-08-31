let imageContainer = document.querySelector('.image-container');
let fadeInContainer = document.querySelector('.image-overlay-content');

imageContainer.addEventListener('mouseover',(e)=>{
    fadeInContainer.style.display = "flex";
});

imageContainer.addEventListener('mouseout',e=>{
    fadeInContainer.style.display = "none";
});