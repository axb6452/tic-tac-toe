'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  console.log('data: ', data)
  console.log('game is: ' + data.game.id)
  store.currentSymbol = 'o'
  store.game = data.game
  console.log(store.game.cells)
  for (let i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
  }
  $('#lbl-board-message').text('X starts').css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
  $('#game-table').show()
}

const createGameFailure = function () {
  $('#lbl-board-message').text('Error Creating game').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const updateGameSuccess = function (data) {
  console.log('data: ', data)
}

const updateGameFailure = function (data) {
  $('#lbl-board-message').text('Error Getting Single game').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const getSingleGameSuccess = function (data) {
  console.log('data: ', data)
  console.log('game is: ' + data.game.id)
  store.game = data.game
  console.log(store.game.cells)
  console.log('id is ' + store.game.id)
  let xCount = 0
  let oCount = 0
  let blankCount = 0
  for (let i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
    if (store.game.cells[i] === 'x') {
      xCount++
    } else if (store.game.cells[i] === 'o') {
      oCount++
    } else {
      blankCount++
    }
  }
  console.log('blanks: ' + blankCount)
  if (store.game.over === false) {
    if (xCount > oCount && xCount !== 0) {
      store.currentSymbol = 'x'
      $('#lbl-board-message').text("It's O's turn!").css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
    } else if (xCount === oCount && xCount !== 0) {
      store.currentSymbol = 'o'
      $('#lbl-board-message').text("It's X's turn!").css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
    } else {
      store.currentSymbol = 'o'
      $('#lbl-board-message').text('X starts').css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
    }
  } else {
    if (blankCount !== 0) {
      if (xCount > oCount) {
        $('#lbl-board-message').text('X Wins!').css({'color': 'green', 'background-color': 'white', 'width': '200px'})
      } else if (xCount === oCount) {
        $('#lbl-board-message').text('O Wins!').css({'color': 'green', 'background-color': 'white', 'width': '200px'})
      }
    } else {
      const cells = store.game.cells
      console.log(((cells[0] === cells[1]) && (cells[1] === cells[2]) && cells[0] === 'x'))
      console.log(((cells[3] === cells[4]) && (cells[4] === cells[5]) && cells[3] === 'x'))
      console.log(((cells[6] === cells[7]) && (cells[7] === cells[8]) && cells[6] === 'x'))
      console.log(((cells[0] === cells[3]) && (cells[3] === cells[6]) && cells[0] === 'x'))
      console.log(((cells[1] === cells[4]) && (cells[4] === cells[7]) && cells[1] === 'x'))
      console.log(((cells[2] === cells[5]) && (cells[5] === cells[8]) && cells[2] === 'x'))
      console.log(((cells[0] === cells[4]) && (cells[4] === cells[8]) && cells[0] === 'x'))
      console.log(((cells[2] === cells[4]) && (cells[4] === cells[6]) && cells[2] === 'x'))
      let result
      if (((cells[0] === cells[1]) && (cells[1] === cells[2]) && cells[0] === 'x') ||
         ((cells[3] === cells[4]) && (cells[4] === cells[5]) && cells[3] === 'x') ||
         ((cells[6] === cells[7]) && (cells[7] === cells[8]) && cells[6] === 'x') ||
         ((cells[0] === cells[3]) && (cells[3] === cells[6]) && cells[0] === 'x') ||
         ((cells[1] === cells[4]) && (cells[4] === cells[7]) && cells[1] === 'x') ||
         ((cells[2] === cells[5]) && (cells[5] === cells[8]) && cells[2] === 'x') ||
         ((cells[0] === cells[4]) && (cells[4] === cells[8]) && cells[0] === 'x') ||
         ((cells[2] === cells[4]) && (cells[4] === cells[6]) && cells[2] === 'x')) {
        result = true
        console.log(result)
        $('#lbl-board-message').text('X wins!').css({'color': 'green', 'background-color': 'white', 'width': '200px'})
      } else {
        result = false
        console.log(result)
        $('#lbl-board-message').text("Ugh, it's a draw.").css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
      }
    }
  }
  $('#game-table').show()
}

const getSingleGameFailure = function () {
  $('#lbl-board-message').text('Error Getting Single game').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const getAllCompletedGamesSuccess = function (data) {
  console.log('data: ', data)
  $('#game-table').hide()
  $('#lbl-board-message').text('Check console for a list of completed games. Enter game id to view result').css({'color': '#F0650E', 'background-color': 'white', 'width': '560px'})
}

const getAllCompletedGamesFailure = function (data) {
  $('#lbl-board-message').text('Error Getting All games').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const getAllIncompleteGamesSuccess = function (data) {
  console.log('data: ', data)
  $('#game-table').hide()
  $('#lbl-board-message').text('Check console for a list of incomplete games. Enter game id to resume game').css({'color': '#F0650E', 'background-color': 'white', 'width': '600px'})
}

const getAllIncompleteGamesFailure = function (data) {
  $('#lbl-board-message').text('Error Getting All games').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getSingleGameSuccess,
  getSingleGameFailure,
  getAllCompletedGamesSuccess,
  getAllCompletedGamesFailure,
  getAllIncompleteGamesSuccess,
  getAllIncompleteGamesFailure
}
