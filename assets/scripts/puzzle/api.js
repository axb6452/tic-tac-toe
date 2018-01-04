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

const updateGame = function (data) {
  console.log('user token is ' + store.user.token)
  console.log('game id is: ' + store.game.id)
  console.log('data for update is ' + data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const joinAsO = function (data) {
  console.log('user token is ' + store.user.token)
  console.log('game id is: ' + $('#game-id-o').val())
  console.log('data for update is ' + data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + $('#game-id-o').val(),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllCompletedGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllIncompleteGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games?over=false',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getSingleGame = function (id) {
  console.log($('.game-id').val())
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  joinAsO,
  getSingleGame,
  getAllCompletedGames,
  getAllIncompleteGames
}
