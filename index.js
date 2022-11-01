const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.nav-links')
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('active')
   navigation.classList.toggle('active')
})




const nav = document.querySelector('.header')
window.addEventListener('scroll', fixNav)

function fixNav(){
   
     if(window.scrollY > nav.offsetHeight + 460){
    nav.classList.add('active')
     }else{
         nav.classList.remove('active')
    }
}