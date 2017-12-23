'use strict'

const config = require('../config')
const store = require('../store')

const changePassword = function (data) {
  console.log(config.apiOrigins.development)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  changePassword
}
