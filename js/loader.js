document.body.insertAdjacentHTML('afterbegin' , '<div class="loader " ><div class="bubble"></div><div class="bubble"></div><div class="bubble"></div><div class="bubble"></div><div class="bubble"></div></div>')
let loader= document.querySelector('.loader')
let bubble = document.querySelectorAll('.bubble')

window.addEventListener('load' , function(){
    loader.classList.add('deActive')
    bubble.forEach(function(bubble){
        bubble.remove()
    })
})