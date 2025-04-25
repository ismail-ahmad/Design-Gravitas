let list = document.querySelector(".logos-container");
const speed = 1;


function scrollAnimation() {
    list.scrollLeft += speed;
    const firstItem = list.children[0];
    const gap = parseInt(getComputedStyle(list).gap);
    const marginRight = parseInt(getComputedStyle(firstItem).marginRight);
    const fullWidth = firstItem.offsetWidth + gap + marginRight;
    if(list.scrollLeft >= fullWidth) {
        list.appendChild(firstItem);
        list.scrollLeft -= fullWidth;
    }
    requestAnimationFrame(scrollAnimation);
    
}

scrollAnimation();