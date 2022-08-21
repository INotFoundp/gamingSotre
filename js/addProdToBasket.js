import { products } from './productDB.js'
let $ = document

let basketModal = $.querySelector('.shopping-basket-modal')
let totalPrice = $.querySelector('.total-price')
let alertBox = $.querySelector('.alert')
let alertBoxName = $.querySelector('.alert-prod-name')

let allBasket = []
let basketDom = $.querySelector('.basket-item')

let prodDomLists = $.querySelectorAll('.cards')
let btnParrent = ''
let prodName
prodDomLists.forEach(function (prodDomList) {
    prodDomList.addEventListener('click', function (e) {
        if (e.target.className === 'shopping') {
            btnParrent = e.target.parentElement.parentElement
            prodName = btnParrent.childNodes[0].innerText
            prodName = prodName.split('').filter(e => e.trim().length).join('')
            let mainProd = products.filter(function (prod) {
                return prod.name.split('').filter(e => e.trim().length).join('') === prodName
            })
            addToBasket(mainProd[0])
            addProdToLocalStorage(allBasket)
            createProdCard(allBasket, basketDom)
            sumTotalProd(allBasket)

            alertBox.classList.add('active')
            alertBoxName.innerHTML = prodName
            setTimeout(function () {
                alertBox.classList.remove('active')
            }, 2000)
        }
    })
})

function addToBasket(mainprod) {
    allBasket.push(mainprod)
}

function addProdToLocalStorage(prodArry) {
    // console.log(prodArry)
    localStorage.setItem('products', JSON.stringify(prodArry))
}
function getLocalStorage() {
    let mainProdArry = JSON.parse(localStorage.getItem('products'))

    if (!mainProdArry) {
        allBasket = []
    } else {
        allBasket = mainProdArry
    }
    createProdCard(allBasket, basketDom)
}

function createProdCard(products, basketDom) {
    basketDom.innerHTML = ''

    let basketFragment = $.createDocumentFragment()
    products.forEach(function (prod) {
        let basketCardDiv = $.createElement('div')
        basketCardDiv.className = 'product-basket'


        let prodNameDiv = $.createElement('div')
        prodNameDiv.className = 'prod-name'

        let imgFigur = $.createElement('figure')
        let prodImg = $.createElement('img')
        prodImg.src = prod.cover
        imgFigur.append(prodImg)

        let prodNameSpan = $.createElement('span')
        prodNameSpan.innerHTML = prod.name
        prodNameDiv.append(imgFigur, prodNameSpan)


        let priceDiv = $.createElement('div')
        priceDiv.className = 'price'
        let priceSpan = $.createElement('span')
        priceSpan.innerHTML = prod.price
        priceDiv.append(priceSpan)


        let countDeletDiv = $.createElement('div')
        countDeletDiv.className = 'count-delete'


        let countInput = $.createElement('input')
        countInput.type = 'number'
        countInput.id = 'prod-Count'
        countInput.min = 1
        countInput.value = 1
        countInput.addEventListener('change', function (e) {
            prod.count = e.target.value
            sumTotalProd(allBasket)
        })

        let deleteButton = $.createElement('button')
        deleteButton.innerHTML = 'حذف'
        countDeletDiv.append(countInput, deleteButton)
        deleteButton.addEventListener('click', function () {
            removeFromBasket(prod.id)
        })

        basketCardDiv.append(prodNameDiv, priceDiv, countDeletDiv)
        basketFragment.append(basketCardDiv)
    })
    basketDom.append(basketFragment)
    sumTotalProd(allBasket)

}

function removeFromBasket(prodID) {
    let allLocalStorageProd = JSON.parse(localStorage.getItem('products'))
    allBasket = allLocalStorageProd

    let mainProdIndex = allBasket.findIndex(function (prod) {
        return prod.id === prodID
    })
    allBasket.splice(mainProdIndex, 1)
    localStorage.setItem('products', JSON.stringify(allBasket))
    createProdCard(allBasket, basketDom)
    sumTotalProd(allBasket)
}

function sumTotalProd(prodArry) {
    let sumprod = 0
    prodArry.forEach(function (prod) {
        sumprod += prod.price * prod.count
    })
    totalPrice.innerHTML = sumprod
}


function shoBasketModal(e) {
    basketModal.classList.toggle('active')
    showUserBasket.classList.toggle('active')
}

window.addEventListener('load', getLocalStorage)
showUserBasket.addEventListener('click', shoBasketModal)

