'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function () {
  console.log(store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getSingleGame = function () {
  console.log($('#game-id').val())
  return $.ajax({
    url: config.apiOrigin + '/games/' + $('#game-id').val(),
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  getSingleGame,
  getAllGames
}
