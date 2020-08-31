let imageContainer = document.querySelector('.horz-image-container');
let fadeInContainer = document.querySelector('.slideUpContent');

imageContainer.addEventListener('mouseover',(e)=>{
    fadeInContainer.style.display = "flex";
});

imageContainer.addEventListener('mouseout',e=>{
    fadeInContainer.style.display = "none";
});
