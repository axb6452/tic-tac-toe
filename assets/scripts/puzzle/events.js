'use strict'

const puzzleApi = require('./api.js')
const puzzleUi = require('./ui.js')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields')

let countRows = 0
const checkResult = function (array) {
  if ((array[2] === array[4]) && (array[4] === array[6]) && array[2] !== '' && array[4] !== '' && array[6] !== '') {
    console.log('You win')
    // $('td[id=2]').css('textDecoration', 'line-through')
    // $('td[id=4]').css('textDecoration', 'line-through')
    // $('td[id=6]').css('textDecoration', 'line-through')
    return true
  } else if ((array[0] === array[4]) && (array[4] === array[8]) && array[0] !== '' && array[4] !== '' && array[8] !== '') {
    console.log('You win')
    return true
  } else if ((array[0] === array[3]) && (array[3] === array[6]) && array[0] !== '' && array[3] !== '' && array[6] !== '') {
    console.log('You win')
    return true
  } else if ((array[1] === array[4]) && (array[4] === array[7]) && array[1] !== '' && array[4] !== '' && array[7] !== '') {
    console.log('You win')
    return true
  } else if ((array[2] === array[5]) && (array[5] === array[8]) && array[2] !== '' && array[5] !== '' && array[8] !== '') {
    console.log('You win')
    return true
  } else {
    let tempArray = []
    let i = 0
    while (i < array.length) {
      tempArray.push(array[i])
      if (tempArray.length === 3) {
        if ((tempArray[0] === tempArray[1]) && (tempArray[1] === tempArray[2]) && tempArray[0] !== '' && tempArray[1] !== '' && tempArray[2] !== '') {
          console.log('You win')
          return true
        } else if (tempArray[0] !== '' && tempArray[1] !== '' && tempArray[2] !== '') {
          countRows++
          tempArray = []
        } else {
          tempArray = []
        }
      }
      i++
    }
  }
  return false
}

// let cells = new Array(9)
// console.log('game object is ' + store.game)
// if (store.game) {
//   cells = store.game.cells
// } else {
//   cells.fill('')
// }
// console.log(cells)
// let result = false

store.currentSymbol = 'o'
const onInsertSymbol = function (event) {
  console.log($(event.target).text())
  console.log(store.currentSymbol)
  if (store.game.over === false && $(event.target).text() === '') {
    if (store.currentSymbol === 'o') {
      store.currentSymbol = 'x'
      event.target.append(store.currentSymbol)
      store.game.cells[parseInt(event.target.id)] = store.currentSymbol
      store.game.over = checkResult(store.game.cells)
      console.log(store.game.cells)
      console.log('result is ' + store.game.over)
      console.log('countRows is ' + countRows)
      if (store.game.over) {
        $('#lbl-board-message').text('X wins!').css({'color': 'green', 'background-color': 'white', 'width': '200px'})
        $('.td0').text((parseInt($('.td0').text()) + 1).toString())
        const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': true}}
        puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
        countRows = 0
      } else {
        if (countRows === 3) {
          $('#lbl-board-message').text("Ugh, it's a draw.").css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
          $('.td1').text((parseInt($('.td1').text()) + 1).toString())
          const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': true}}
          puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
          countRows = 0
        } else {
          countRows = 0
          $('#lbl-board-message').text("It's O's turn!").css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
          const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': false}}
          puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
        }
      }
    } else {
      store.currentSymbol = 'o'
      event.target.append(store.currentSymbol)
      store.game.cells[parseInt(event.target.id)] = store.currentSymbol
      store.game.over = checkResult(store.game.cells)
      console.log(store.game.cells)
      console.log('result is ' + store.game.over)
      console.log('countRows is ' + countRows)
      if (store.game.over) {
        $('#lbl-board-message').text('O wins!').css({'color': 'green', 'background-color': 'white', 'width': '200px'})
        $('.td2').text((parseInt($('.td2').text()) + 1).toString())
        const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': true}}
        puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
        countRows = 0
      } else {
        if (countRows === 3) {
          $('#lbl-board-message').text("Ugh, it's a draw.").css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
          $('.td1').text((parseInt($('.td1').text()) + 1).toString())
          const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': true}}
          puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
          countRows = 0
        } else {
          countRows = 0
          $('#lbl-board-message').text("It's X's turn!").css({'color': '#F0650E', 'background-color': 'white', 'width': '200px'})
          const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': false}}
          puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
        }
      }
    }
  } else {
    $('#lbl-board-message').text('Invalid click.').css({'color': 'red', 'background-color': 'white', 'width': '200px'})
  }
  // const clickedCell = $(event.target).closest('td')
  // clickedCell.Add('o')
}

const onGetAllCompletedGames = function (event) {
  console.log(event.target)
  event.preventDefault()
  puzzleApi.getAllCompletedGames()
    .then(puzzleUi.getAllCompletedGamesSuccess)
    .catch(puzzleUi.getAllCompletedGamesFailure)
}

const onGetAllIncompleteGames = function (event) {
  console.log(event.target)
  event.preventDefault()
  puzzleApi.getAllIncompleteGames()
    .then(puzzleUi.getAllIncompleteGamesSuccess)
    .catch(puzzleUi.getAllIncompleteGamesFailure)
}

const onCreateGame = function (event) {
  console.log(event.target)
  event.preventDefault()
  puzzleApi.createGame()
    .then(puzzleUi.createGameSuccess)
    .catch(puzzleUi.createGameFailure)
}

const onGetSingleGame = function (event) {
  console.log(event.target)
  event.preventDefault()
  puzzleApi.getSingleGame()
    .then(puzzleUi.getSingleGameSuccess)
    .catch(puzzleUi.getSingleGameFailure)
}

const addHandlers = function () {
  $('#game-table').on('click', 'td', onInsertSymbol)
  $('#btn-create-game').on('click', onCreateGame)
  $('#btn-get-game').on('click', onGetSingleGame)
  $('#btn-search-completegames').on('click', onGetAllCompletedGames)
  $('#btn-search-incompletegames').on('click', onGetAllIncompleteGames)
}

module.exports = {
  addHandlers
}
