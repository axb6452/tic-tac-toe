'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#lblSignUpMessage').text('User ' + data.user.email + ' successfully created.').css({'color': 'green', 'background-color': 'white'})
}

const signUpFailure = function (error) {
  console.error(error)
  $('#lblSignUpMessage').text('Error during sign up').css({'color': 'red', 'background-color': 'white'})
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('.userlogin').hide()
  $('#game-page').show()
  $('#change-password').hide()
  $('#game-table').hide()
  // $('#game-table td').empty()
  // $('#game-table td').hover(function () { $(this).css('background-color', '#0F2043') }, function () { $(this).css('background-color', '#0F2043') })
  $('#lbl-board-message').text('Select an option below to begin').css({'color': '#0F2043', 'background-color': 'white', 'width': '300px'})
}

const signInFailure = function (error) {
  console.error(error)
  $('#lblSignInMessage').text('Error during sign in').css({'color': 'red', 'background-color': 'white'})
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
  $('.userlogin').show()
  $('#lblSignOutMessage').text('User ' + store.user.email + ' successfully signedOut.').css({'color': 'green', 'background-color': 'white'})
  $('#change-password-link').text('Change Password').css('color', 'black')
  $('#lblSignInMessage').text('')
  $('#lblSignUpMessage').text('')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#lblSignOutMessage').text('Error during sign out').css({'color': 'red', 'background-color': 'white'})
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
