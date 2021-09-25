const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getListWines = $$('.product')
const getProduct = $('.section-wines__product')
const getModalProduct = $('.section-wines__modal')
const getbtnBack = $('.modal__back')
getListWines.forEach((item)=> {
   item.onclick = function() {
      var getImgProduct = item.querySelector('.product__img img').getAttribute('src')
      var getNameProduct = item.querySelector('.product__content--name').innerText
      var getPriceProduct = item.querySelector('.product__content--price').innerText
      
      var modalImgProduct =  getModalProduct.querySelector('.modal__img img')
      var modalNameProduct = getModalProduct.querySelector('.modal__content--name')
      var modalPriceProduct = getModalProduct.querySelector('.modal__content--price')
      getbtnBack.style.display = 'block'    
      $('.section-wines__title').style.display = 'none'
      getProduct.style.display = 'none'
      getModalProduct.style.display = 'block'
      
      modalImgProduct.setAttribute('src',getImgProduct)
      modalNameProduct.innerText = getNameProduct
      modalPriceProduct.innerText = getPriceProduct
   } 
})
      
getbtnBack.onclick = function() {
   getbtnBack.style.display = 'none'
   $('.section-wines__title').style.display = 'block'
   getProduct.style.display = 'block'
   getModalProduct.style.display = 'none'
}