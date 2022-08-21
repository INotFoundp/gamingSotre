let animationDiv = document.createElement('div')
animationDiv.classList.add('background')
let animationSpan 
let animationFragment = document.createDocumentFragment()

function craeateAnimatedBG() {
    for(let i = 0 ; i < 20  ; i++ ) {
        animationSpan = document.createElement('span')
        animationDiv.append(animationSpan)
    }
    animationFragment.append(animationDiv)
    document.body.append(animationFragment)
}

window.addEventListener('load' , craeateAnimatedBG)