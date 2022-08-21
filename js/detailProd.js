import { products } from './productDB.js'
let $ = document
let screenshotProducts = {
    1: ['./image/gameScreenShot/rainbowSix/1.jpg', './image/gameScreenShot/rainbowSix/2.jpg', './image/gameScreenShot/rainbowSix/3.jpg'],
    2: ['./image/gameScreenShot/gtav/1.jpg', './image/gameScreenShot/gtav/2.jpg', './image/gameScreenShot/gtav/3.jpg',],
    3: ['./image/gameScreenShot/Gow/1.jpg', './image/gameScreenShot/Gow/2.jpg', './image/gameScreenShot/Gow/3.jpg',],
    4: ['./image/gameScreenShot/ForHonor/1.jpg', './image/gameScreenShot/ForHonor/2.jpg', './image/gameScreenShot/ForHonor/3.jpg',],
    5: ['./image/gameScreenShot/codMW/1.jpg', './image/gameScreenShot/codMW/2.jpg', './image/gameScreenShot/codMW/3.jpg',],
    6: ['./image/gameScreenShot/WDLegion/1.jpg', './image/gameScreenShot/WDLegion/2.jpg', './image/gameScreenShot/WDLegion/3.jpg',],
    7: ['./image/gameScreenShot/HFF/1.jpg', './image/gameScreenShot/HFF/2.jpg', './image/gameScreenShot/HFF/3.jpg',],
    8: ['./image/gameScreenShot/fifa2022/1.jpg', './image/gameScreenShot/fifa2022/2.jpg', './image/gameScreenShot/fifa2022/3.jpg',],
    9: ['./image/gameScreenShot/MK11/1.jpg', './image/gameScreenShot/MK11/2.jpg', './image/gameScreenShot/MK11/3.jpg',],
    10: ['./image/gameScreenShot/CP2077/1.jpg', './image/gameScreenShot/CP2077/2.jpg', './image/gameScreenShot/CP2077/3.jpg',],
    11: ['./image/gameScreenShot/RE8/1.jpg', './image/gameScreenShot/RE8/2.jpg', './image/gameScreenShot/RE8/3.jpg',],
    12: ['./image/gameScreenShot/SOD2/1.jpg', './image/gameScreenShot/SOD2/2.jpg', './image/gameScreenShot/SOD2/3.jpg',],
    13: ['./image/gameScreenShot/skyrim/1.jpg', './image/gameScreenShot/skyrim/2.jpg', './image/gameScreenShot/skyrim/3.jpg',],
}

let locationPsram = new URLSearchParams(location.search)
let prodId = locationPsram.get('id')
let mainProdphoto
let littleDomPhotos = $.querySelector('.little-image')
let backHistoryBtn = $.getElementById('backTolastPage')

let mainDomPhoto = $.getElementById('main-img')
let DOMProdName = $.getElementById('prodName')
let DOMprodDescriptopn = $.getElementById('prodDescriptopn')
let DOMprodprice = $.getElementById('prodPrice')
let title = $.querySelector('title')


mainProdphoto = products.find(function (prod) {
    return prod.id === Number(prodId)
})


if (mainProdphoto) {
    littleDomPhotos.innerHTML = ''
    let prodKey = mainProdphoto.id

    let littlePhotoFragment = $.createDocumentFragment()
    screenshotProducts[prodKey].forEach(function (photo) {
        let figur, img

        figur = $.createElement('figure')
        img = $.createElement('img')
        img.src = photo
        img.addEventListener('click', function (e) {
            mainDomPhoto.src = e.target.src
        })

        figur.append(img)
        littlePhotoFragment.append(figur)
    })
    littleDomPhotos.append(littlePhotoFragment)


    backHistoryBtn.addEventListener('click', function () {
        history.back()
    })

    let mainprod = products.find(function (prod) {
        return prod.id === Number(prodId)
    })

    DOMProdName.innerHTML = mainprod.name
    DOMprodDescriptopn.innerHTML = mainprod.description
    DOMprodprice.innerHTML = mainprod.price + ' T'
    mainDomPhoto.alt = mainprod.name
    mainDomPhoto.src = screenshotProducts[prodKey][0]

    title.innerHTML = mainprod.name

} else {
    location.href = 'home.html'
}


