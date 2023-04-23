var sidebar = document.querySelector('.sidebar')
var ham = document.querySelector('.ham');
var __close = document.querySelector('.close');

ham.addEventListener('click',()=>{
 sidebar.style.transform = "translateX(0)"
 ham.style.display = "none"
 __close.style.display = "block"
})

__close.addEventListener('click',()=>{
    sidebar.style.transform = "translateX(-100pc)"
    __close.style.display = "none"
    ham.style.display = "block"
})