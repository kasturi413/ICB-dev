const sideBar = document.querySelector('.sideBar');
const hamBurger = document.querySelector('.hamBurger');
const cross = document.querySelector('.cross');
hamBurger.addEventListener('click', e=>{
    sideBar.style.left = '0';
    setTimeout(()=>{
        cross.style.display = 'flex';
    }, 500);
})
cross.addEventListener('click', e=>{
    sideBar.style.left= '-35vw';
    cross.style.display = 'none';
})