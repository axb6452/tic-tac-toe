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
  $('#game-table').hide()
  $('#lbl-board-message').text('Select an option below to begin').css({'color': '#F0650E', 'background-color': 'white', 'width': '300px'})
}

const signInFailure = function (error) {
  console.error(error)
  $('#lblSignInMessage').text(error).css({'color': 'red', 'background-color': 'white'})
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password')
  $('#lblChangePasswordMessage')
    .text('Successfully changed password')
    .css({'color': 'green', 'background-color': 'white'})
    .show()
  $('#change-password').hide()
  $('#change-password-link').text('Change Password')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#lblChangePasswordMessage').text('Error during change password').css({'color': 'red', 'background-color': 'white'})
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
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
