
const loginInput = document.querySelector('.userLogin');
const passwordInput = document.querySelector('.userPassword');
const submitButton = document.querySelector('.submitBtn');


function checkInputs() {
  if (loginInput.value.length > 0 && passwordInput.value.length > 0) {
      submitButton.removeAttribute('disabled');
  } else {
      submitButton.setAttribute('disabled', 'disabled');
  }
}

loginInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

submitButton.addEventListener('click' , function() {
  submitButton.innerText = 'Loading...';
  setTimeout(function () {
    window.location.href = 'index2.html'
  },3000)
})


