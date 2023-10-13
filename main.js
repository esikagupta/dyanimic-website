//show
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
})

// hide

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className === "uil uil-minus";
        }else {
            icon.className = "uil uil-plus";
        }
    })
})



//show
const menu = document.querySelector(".nav_menu");
const menuBtw = document.querySelector("#open-menu-btn");
const closeBtw = document.querySelector("#close-menu-btn");

menuBtw.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtw.style.display = "inline-block";
    menuBtw.style.display = "none";
})



//show
const closeNav = () => {
    menu.style.display = "none";
    closeBtw.style.display = "none";
    menuBtw.style.display = "inline-block";
}

closeBtw.addEventListener('click', closeNav)










