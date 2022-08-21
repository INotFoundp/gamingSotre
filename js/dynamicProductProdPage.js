import { products } from './productDB.js'
let $ = document
let topProdDiv = document.querySelector('.top-card')
let allProdDiv = document.querySelector('.allProduct')
let pagementListDom = document.querySelector('.pagemation')
let filterDiv = $.querySelector('.filter-option')
let filterButton = $.getElementById('filterButton')
let selectPlatform = $.getElementById('select-platform')
let shoppingBtn = $.querySelectorAll('.shopping')

let showUserBasket = $.getElementById('showUserBasket')

let topProd = products.filter(function (prod) {
    return prod.rate > 4
})

let userBasket = []



let CurrentPage = 1
let row = 6
let splicedArry = []


function createAddTopProd(topProdArry, domProd) {

    domProd.innerHTML = ''
    let topProductFragment = $.createDocumentFragment()

    let endSplice = CurrentPage * row
    let startSplice = endSplice - row
    splicedArry = topProdArry.slice(startSplice, endSplice)
    splicedArry.forEach(function (prod) {
        let maincardDiv = $.createElement('div')
        maincardDiv.className = 'card'

        let descriptionDiv = $.createElement('div')
        descriptionDiv.className = 'description'



        let prodNameDiv = $.createElement('div')
        prodNameDiv.className = 'prod-name'
        let prodNameH5 = $.createElement('h5')
        prodNameH5.innerHTML = prod.name
        prodNameDiv.appendChild(prodNameH5)

        /////// Platform&Price ///////
        let platformPriceDiv = $.createElement('div')
        platformPriceDiv.className = 'platform-price'

        let platformDiv = $.createElement('div')
        platformDiv.className = 'P-P-Details'

        let platformSpanStatic = $.createElement('span')
        platformSpanStatic.innerHTML = 'پلتفرم:'

        let platformSpan = $.createElement('span')
        platformSpan.className = 'palt'
        platformSpan.innerHTML = prod.tag

        let tag = platformSpan.innerHTML

        if (tag === "PC") {
            platformSpan.style.color = '#00F0FF'
        }
        else if (tag === "Xbox") {
            platformSpan.style.color = '#34FF48'
        }
        else if (tag === "PS") {
            platformSpan.style.color = '#0500FF'
        }


        platformDiv.append(platformSpanStatic, platformSpan)



        let priceDiv = $.createElement('div')
        priceDiv.className = 'P-P-Details'

        let priceSpanStatic = $.createElement('span')
        priceSpanStatic.innerHTML = 'قیمت:'
        let priceSpan = $.createElement('span')
        priceSpan.className = 'price'
        priceSpan.innerHTML = prod.price

        priceDiv.append(priceSpanStatic, priceSpan)


        platformPriceDiv.append(platformDiv, priceDiv)

        /////// Like&Shopping ///////
        let likeShopping = $.createElement('div')
        likeShopping.className = 'like-shopping'

        let ratingDiv = $.createElement('div')
        ratingDiv.className = 'rating'

        let rateSpan = $.createElement('span')
        rateSpan.innerHTML = prod.rate
        let starIcon = $.createElement('i')
        starIcon.className = 'fa-solid fa-star'
        ratingDiv.append(rateSpan, starIcon)


        let shoppingDiv = $.createElement('div')
        shoppingDiv.className = 'shopping'
        let shoppingSpan = $.createElement('span')
        shoppingSpan.innerHTML = 'خرید'
        shoppingSpan.className = 'shop-span'

        shoppingDiv.append(shoppingSpan)
        

        let likeDiv = $.createElement('div')
        likeDiv.className = 'like'
        let likeIcon = $.createElement('i')
        likeIcon.className = 'fa-regular fa-star'
        likeDiv.append(likeIcon)


        likeShopping.append(ratingDiv, shoppingDiv, likeDiv)


        let coverDetailsDiv = $.createElement('div')
        coverDetailsDiv.className = 'cover-details'

        let coverDiv = $.createElement('div')
        coverDiv.className = 'cover'
        let coverImg = $.createElement('img')
        coverImg.src = prod.cover
        coverImg.alt = prod.name

        coverDiv.append(coverImg)

        let detailDiv = $.createElement('div')
        detailDiv.className = 'details'

        let detailLink = $.createElement('a')
        detailLink.href = `prodDetail.html?id=${prod.id}`
        detailLink.innerHTML = 'درباره محصول'

        detailDiv.append(detailLink)



        descriptionDiv.append(prodNameDiv, platformPriceDiv, likeShopping)
        coverDetailsDiv.append(coverDiv, detailDiv)
        maincardDiv.append(descriptionDiv, coverDetailsDiv)

        topProductFragment.append(maincardDiv)
    })
    domProd.append(topProductFragment)

}

function pagementBtn(pagmentDom, topProdArry, row) {
    let pagementBoxLength = Math.ceil(topProd.length / row)

    for (let i = 0; i < pagementBoxLength; i++) {
        let pageBox = $.createElement('span')
        pageBox.className = 'pagemitionBox'
        pageBox.innerHTML = i + 1
        pageBox.addEventListener('click', function (e) {
            CurrentPage = Number(e.target.innerHTML)
            createAddTopProd(topProd, topProdDiv)

            let activeBox = $.querySelector('.active')
            activeBox.classList.remove('active')

            e.target.classList.add('active')

        })

        pagmentDom.append(pageBox)
        if (pageBox.innerHTML == CurrentPage) {
            pageBox.classList.add('active')
        }

    }


}

function createAllProdCard(prodArry, AllProdDom) {
    AllProdDom.innerHTML = ''
    prodArry.forEach(function (allprod) {
        AllProdDom.insertAdjacentHTML('afterbegin', `<div class="card"><div class="description"><div class="prod-name"><h5>${allprod.name}</h5></div><div class="platform-price"> <div class="P-P-Details"><span id="plat-title">پلتفرم:</span><span class="plat">${allprod.tag}</span></div><div class="P-P-Details"><span id="price-title">قیمت:</span><span id="price">${allprod.price}t</span></div></div><div class="like-shopping"><div class="rating"><span>${allprod.rate}</span><i class="fa-solid fa-star"></i></div><div class="shopping"><span>خرید</span></div><div class="like"><i class="fa-regular fa-star"></i></div></div></div><div class="cover-details"><div class="cover"><img src="${allprod.cover}" alt="gamename" ></div><div class="details"><a href="prodDetail.html?id=${allprod.id}">جزییات محصول</a></div></div></div>`)


    })
    

    let prodTag = $.querySelectorAll('.plat')
    prodTag.forEach(function (tag) {
        let tagname = tag.innerHTML
        if (tagname === "PC") {
            tag.style.color = '#00F0FF'
        }
        else if (tagname === "Xbox") {
            tag.style.color = '#34FF48'
        }
        else if (tagname === "PS") {
            tag.style.color = '#0500FF'
        }

    })

}

function showFilterBox() {
    filterDiv.classList.toggle('active')
}

function filterProd(e) {

    let filtervalue = e.target.value
    let filtredArry = products.filter(function (prod) {
        return prod.tag === filtervalue
    })

    if (filtervalue === 'choose') {
        createAllProdCard(products, allProdDiv)
    }
    else {
        createAllProdCard(filtredArry, allProdDiv)
    }
}

createAddTopProd(topProd, topProdDiv)
pagementBtn(pagementListDom, topProd, row)
createAllProdCard(products, allProdDiv)
filterButton.addEventListener('click', showFilterBox)
selectPlatform.addEventListener('change', filterProd)


