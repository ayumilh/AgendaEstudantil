var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnPrimary = document.querySelector('.btnPrimary')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnPrimary.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnPrimary.style.left = "110px"
})