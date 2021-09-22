const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getFormLogin = $('.section-sign__login')
const getFormRegist = $('.section-sign__regist')
const getLinkChangeFormLogin = $('.section-sign__create--link#login')
const getLinkChangeFormRegist = $('.section-sign__create--link#regist')


getLinkChangeFormLogin.onclick = function() {
   getFormRegist.style.display = 'none'
   getFormLogin.style.display = 'block'
}
getLinkChangeFormRegist.onclick = function() {
   getFormLogin.style.display = 'none'
   getFormRegist.style.display = 'block'
}