var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.form__page-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });
  var name = form.querySelector('[name=name]');
  var email = form.querySelector('[name=email]');
  var weight = form.querySelector('[name=weight]');
  var phone = form.querySelector('[name=phone]');

  name.addEventListener('change', function(e) {
    if (name.validity.typeMismatch || (name.value == false)) {
      name.classList.add('form__input--invalid');
    } else {
      name.classList.remove('form__input--invalid');
    }
  });

  weight.addEventListener('change', function(e) {
    if (weight.value == false || weight.validity.patternMismatch) {
      weight.classList.add('form__input--invalid');
    } else {
      weight.classList.remove('form__input--invalid');
    }
  });

  email.addEventListener('change', function(e) {
    if (email.value == false || email.validity.typeMismatch || email.validity.patternMismatch) {
      email.classList.add('form__input--invalid');
    } else {
      email.classList.remove('form__input--invalid');
    }
  });

  phone.addEventListener('change', function(e) {
    if (phone.value == false || phone.validity.typeMismatch || phone.validity.patternMismatch) {
      phone.classList.add('form__input--invalid');
    } else {
      phone.classList.remove('form__input--invalid');
    }
  });
})

navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
