'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log(config.apiOrigins.development)
  console.log(config.apiOrigin)
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(config.apiOrigins.development)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  console.log(config.apiOrigins.development)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}