'use strict'

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

module.exports = {
  changePasswordSuccess,
  changePasswordFailure
}
