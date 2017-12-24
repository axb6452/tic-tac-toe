'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#lblSignUpMessage').text('User ' + data.user.email + ' successfully created.').css({'color': 'green', 'background-color': 'white'})
}

const signUpFailure = function (error) {
  console.error(error)
  $('#lblSignUpMessage').text(error).css({'color': 'red', 'background-color': 'white'})
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('.userLogin').hide()
  $('#game-page').show()
  $('#change-password').hide()
}

const signInFailure = function (error) {
  console.error(error)
  $('#lblSignInMessage').text(error).css({'color': 'red', 'background-color': 'white'})
}

const signOutSuccess = function () {
  $('#game-page').hide()
  $('.userLogin').show()
  $('#lblSignOutMessage').text('User ' + store.user.email + ' successfully signedOut.').css({'color': 'green', 'background-color': 'white'})
  $('#change-password-link').text('Change Password').css('color', 'white')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#lblSignOutMessage').text(error).css({'color': 'red', 'background-color': 'white'})
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
