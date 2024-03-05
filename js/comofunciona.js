setTimeout(function(){
    const inicio = document.getElementById('inicio')
    inicio.classList.add('hidden')
    const site = document.getElementById('site')
    site.classList.add('site2')
}, 6000)
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
    const context = this;
    const later = function() {
    timeout = null;
    if(!immediate) func.apply(context, args)
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout= setTimeout(later, wait);
    if(callNow) func.apply(context, args);
    };
    };

const target = document.querySelectorAll('[data-anima]')
const animationClass = 'anima'

function animaScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight*0.75))
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass)
        } else{
            element.classList.remove(animationClass)
        }
    })
}
animaScroll()
if(target.length){
   window.addEventListener('scroll', debounce(function(){
    animaScroll() 
   },100
   )
   )
}
