import { products } from './productDB.js'

let productsDOM = document.querySelector('.prods')
let prod = ''
for(let i = 0 ; i < 6 ; i++){
    prod = products[i]
    productsDOM.insertAdjacentHTML('beforeend', '<div class="prod-card"><div class="name-image"><img src="' + prod.cover + '" alt=" ' + prod.name + 'Cover' + ' "><span class="game-name"> ' + prod.name + ' </span></div><div class="platforms"><p class="platform"> ' + prod.tag + '</p></div><div class="description"><span class="price">' + prod.price + 'T</span><a href="prodDetail.html?id='+ prod.id +'">مشاهده محصول</a></div></div>')

}
