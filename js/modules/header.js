
const header = ()=>{
    const navActionMenu =  document.getElementById('navActionMenu');
    const navActionClose =  document.getElementById('navActionClose');
    const menu__link = document.querySelectorAll('.menu__link');

    const openMenu =()=>{
        const nav = document.querySelector('.nav');
        nav.classList.add('nav--open');
    }

    const closeMenu = ()=>{
        const nav = document.querySelector('.nav');
        nav.classList.remove('nav--open');
    }

    navActionMenu.addEventListener('click',openMenu);
    navActionClose.addEventListener('click',closeMenu);
    menu__link.forEach((element)=>{
        element.addEventListener('click',closeMenu);
    });

};

export default header;