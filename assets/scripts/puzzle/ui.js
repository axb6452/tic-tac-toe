'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  console.log('data: ', data)
  console.log('game is: ' + data.game.id)
  store.game = data.game
  console.log(store.game)
  for (let i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
  }
}

const createGameFailure = function () {
  $('#lbl-board-message').text('Error Creating game').css({'background-color': 'white', 'color': 'red'})
}

const getSingleGameSuccess = function (data) {
  console.log('data: ', data)
  console.log('game is: ' + data.game.id)
  store.game = data.game
  console.log(store.game.cells)
  console.log('id is ' + store.game.id)
  for (let i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
  }
}

const getSingleGameFailure = function () {
  $('#lbl-board-message').text('Error Getting Single game').css({'background-color': 'white', 'color': 'red'})
}

const getAllGamesSuccess = function (data) {
  console.log('data: ', data)
  // console.log('game is: ' + data.game.id)
  store.game = data.game
  console.log(store.game)
  // console.log('id is ' + store.game.id)
  // for (let i = 0; i < store.game.cells.length; i++) {
  //   $('#' + i).text(store.game.cells[i])
  // }
}

const getAllGamesFailure = function (data) {
  $('#lbl-board-message').text('Error Getting All games').css({'background-color': 'white', 'color': 'red'})
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  getSingleGameSuccess,
  getSingleGameFailure,
  getAllGamesSuccess,
  getAllGamesFailure
}
