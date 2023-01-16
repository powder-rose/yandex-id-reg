let password = document.getElementById('#password')
let passwordRepeat = document.getElementById('#passwordRepeat')
let errors = []



const validateForm = (input) => {
   let validity = input.validity
   input.min = 10
   input.max = 20

   if (validity.valueMissing) {
      errors.push(`Поле '${input.placeholder.toLowerCase()}' не заполнено`)
   }
   if (validity.patternMismatch) {
      errors.push(`Неверный формат заполнения поля ${input.placeholder.toLowerCase()}`)
   }
   if (validity.rangeOverflow == false ){
      errors.push(`Количество символов не может превышать ${input.min}`)
   }
   if (validity.rangeUnderflow == false) {
      errors.push(`Количество символов не может быть меньше чем ${input.min}`)
   }
   

   // if (password.value != passwordRepeat.value) {
   //    errors.push('Пароли не совпадают')
   // }
   
}


const checkAll = () => {
   errors = []
   let inputs = document.querySelectorAll('.registry-form__input')
   for (let input of inputs) {
      validateForm(input)
   }
   
   document.getElementById('err').innerHTML = errors.join(' <br>')
}

  
   let btn = document.getElementById('submit')
   btn.addEventListener('click', checkAll)

