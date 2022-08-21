let $ = document

let banners = [
    {Id :1 , imageSrc : '/image/banners/windows.png' , title : 'اکانت های بازی با هر ظرفیتی<br>ظریت های 3 و 2'} ,
    {Id :2 , imageSrc : '/image/banners/Xbox.png' , title : 'اکانت های بازی با هر ظرفیتی<br>ظریت های 3 و 2'} ,
    {Id :3 , imageSrc : '/image/banners/playstation.png' , title : 'اکانت های بازی با هر ظرفیتی<br>ظریت های 3 و 2'} ,
    {Id :4 , imageSrc : '/image/banners/nintendo.png' , title : 'اکانت های بازی با هر ظرفیتی<br>ظریت های 3 و 2'} ,
]

banners.forEach(function(slid){

})



let allPhotos = $.querySelectorAll('.slider')
let nextPohtoBtn = $.querySelectorAll('.next')
let priviosPhotoBtn = $.querySelectorAll('.privos')

let photoIndex = 0
// let intervaltime = 4000
function nextSlide() {

    photoIndex++
    allPhotos.forEach(function (photo) {
        photo.classList.remove('active')
    })

    if (photoIndex > allPhotos.length - 1) {
        photoIndex = 0
    }

    let mainPohot = allPhotos[photoIndex]

    mainPohot.classList.add('active')

}

function prevSlide() {
    photoIndex--
    allPhotos.forEach(function (photo) {
        photo.classList.remove('active')
    })

    if (photoIndex < 0) {
        photoIndex = allPhotos.length - 1
    }

    let mainPohot = allPhotos[photoIndex]

    mainPohot.classList.add('active')

}

setInterval(nextSlide, 4000)

nextPohtoBtn.forEach(function (btn) {
    btn.addEventListener('click', nextSlide)
})

priviosPhotoBtn.forEach(function (btn) {
    btn.addEventListener('click', prevSlide)
})





