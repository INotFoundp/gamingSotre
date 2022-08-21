import { products } from './productDB.js'
let $ = document

let searchInput = $.getElementById('search-box')
let searchResult = $.querySelector('.search-result')
function searchOnProd(e) {
    let searchInputValue = e.target.value

    
    if (searchInputValue) {
        searchResult.classList.add('active')
        let filtredProd = products.filter(function (prods) {
            return prods.name.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase())
        })
        createProdLi(filtredProd)
    } else {
        searchResult.classList.remove('active')
    }

    let liResult = $.querySelectorAll('.result-S')
    liResult.forEach(function(li){
        li.addEventListener('click' , goToProdPage)
    })
}

function createProdLi(fillProd) {
    let fillprodLi = fillProd.map(function (filprod) {
        return `<li class= "result-S"> ${filprod.name}</li>`
    })

    if (fillprodLi.length) {
        let prodString = fillprodLi.join('')
        searchResult.innerHTML = prodString
    } else {
        searchResult.innerHTML = '<li class= "result-S-NF">' + searchInput.value + '</li>'
    }

}

function goToProdPage(e){
    let prodName = e.target.innerHTML
    prodName= prodName.split('').filter(e => e.trim().length).join('')

    let prod = products.filter(function(prod){
        return prod.name.split('').filter(e => e.trim().length).join('')=== prodName
    })
    let prodId = prod[0].id

    location.href = 'prodDetail.html?id='+prodId
}



searchInput.addEventListener('keyup', searchOnProd)