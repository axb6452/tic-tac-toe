'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log('Form fields data is ' + data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePasswordLink = function (event) {
  event.preventDefault()
  console.log($('#change-password').css('display'))
  if ($('#change-password').css('display') === 'none') {
    $('#change-password').show()
    $('#change-password-link').text('Hide').css('color', 'white')
  } else {
    $('#change-password').hide()
    $('#lblChangePasswordMessage').hide()
    $('#change-password-link').text('Change Password')
  }
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  // $('#change-password-link').on('submit', $('#change-password').show())
  $('#change-password-link').on('click', onChangePasswordLink)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-link').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
