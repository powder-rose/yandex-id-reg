let username = document.getElementById('username')
let surname = document.getElementById('surname')
let login = document.getElementById('login')
let password = document.getElementById('password')
let passwordRepeat = document.getElementById('passwordRepeat')
let tel = document.getElementById('telNumber')
let submit = document.querySelector('.registry-form__btn')

let input = document.querySelector('.registry-form__input')
let errorName = document.querySelector('.errorName')
let errorSurname = document.querySelector('.errorSurname')
let errorLogin = document.querySelector('.errorLogin')
let errorPassoword = document.querySelector('.passwordError')
let errorPasswordRepeat = document.querySelector('.passwordRepeatError') 
let errorTel = document.querySelector('.telError')

function checkName () {
   let validity = username.validity
   if (validity.valueMissing) {
      errorName.innerHTML = 'Укажите ваше имя'
   } else {
      errorName.innerHTML = ''
     
   }
   
}

function checkSurname () {
   let validity = surname.validity
   if (validity.valueMissing) {
  errorSurname.innerHTML = 'Укажите фамилию'
   } else {
      errorSurname.innerHTML = ''
      
   }
   
}

function checkLogin () {
   let validity = login.validity
   if (validity.valueMissing) {
      errorLogin.innerHTML = 'Укажите логин'
   } else if (validity.patternMismatch) {
      errorLogin.innerHTML = 'Неверный формат заполнения поля'
   } else {
      errorLogin.innerHTML = ''
     
   }
   
}

function checkPassword () {
   let validity = password.validity
   if (validity.valueMissing) {
      errorPassoword.innerHTML = 'Укажите пароль'
   } else if (password.value !== passwordRepeat.value) {
      errorPasswordRepeat.innerHTML = 'Пароли не совпадают'
   }  else if (validity.tooShort) {
      errorPassoword.innerHTML = 'Длина пароля не должна быть меньше 8 символов'
   } else if (validity.patternMismatch) {
      errorPassoword.innerHTML = 'Пароль может содержать только латинские буквы или цифры'
   } else { 
      errorPassoword.innerHTML = ''
      errorPasswordRepeat.innerHTML = ''
     
   }
   
}

function checkTel () {
   let validity = tel.validity
   if (validity.valueMissing) {
      errorTel.innerHTML = 'Укажите номер телефона'
   } else if (validity.patternMismatch) {
      errorTel.innerHTML = 'Неверный формат заполнения номера телефона'
   } else {
      errorTel.innerHTML = ''
     
   }
   
}

submit.addEventListener('click', checkName)
submit.addEventListener('click', checkSurname)
submit.addEventListener('click', checkLogin)
submit.addEventListener('click', checkPassword)
submit.addEventListener('click', checkTel)