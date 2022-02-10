const iconMenu = document.querySelector('.burger');
if (iconMenu){
    const menuBody = document.querySelector('.nav');
    const burgerBody = document.querySelector('body');
    const burgerContainer = document.querySelector('.conteiner');
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        burgerBody.classList.toggle('_active');
        burgerContainer.classList.toggle('_active');
    });
}

const anchors = document.querySelectorAll('.nav_link[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
    });
}