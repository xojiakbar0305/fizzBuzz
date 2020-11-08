var elForm = document.querySelector('.fizzbuzz-form') //forma

var elInput = document.querySelector('.fizzbuzz-input')//input

var elButton = document.querySelector('.button')//button

var elAlert = document.querySelector('.counter-alert')

var fizzBuzz = function (evt) {
  evt.preventDefault();
  var elInputResult = parseInt(elInput.value.trim(), 10)
  if (isNaN(elInputResult)) {
    elAlert.textContent = 'Siz kiritgsn ma\'lumot son emas!'
    elAlert.classList.add('alert-danger')
  }
  else if (elInputResult < 0) {
    elAlert.textContent = 'Musbat son kiriting!'
    elAlert.classList.add('alert-danger')
  }
  else if (elInputResult % 5 === 0 && elInputResult % 3 === 0) {
    elAlert.textContent = 'FizzBuzz'
    elAlert.classList.add('alert-primary')
    elAlert.classList.remove('alert-success')
    elAlert.classList.remove('alert-danger')
    elAlert.classList.remove('alert-dark')
  }
  else if (elInputResult % 5 === 0) {
    elAlert.textContent = "Fizz"
    elAlert.classList.add('alert-dark')
    elAlert.classList.remove('alert-primary')
    elAlert.classList.remove('alert-danger')
  }
  else if (elInputResult % 3 === 0) {
    elAlert.textContent = "Buzz"
    elAlert.classList.add('alert-success')
    elAlert.classList.remove('alert-dark')
    elAlert.classList.remove('alert-primary')
    elAlert.classList.remove('alert-danger')
  }
  else {
    elAlert.textContent = elInputResult
    elAlert.classList.add('alet-primary')
    elAlert.classList.add('alert-success')
    elAlert.classList.remove('alert-dark')
    elAlert.classList.remove('alert-danger')
  }
}

elForm.addEventListener('submit', fizzBuzz)