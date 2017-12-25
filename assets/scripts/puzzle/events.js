'use strict'

const puzzleApi = require('./api.js')
const puzzleUi = require('./ui.js')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields')

let countRows = 0
function checkResult (array) {
  if ((array[2] === array[4]) && (array[4] === array[6]) && array[2] !== '' && array[4] !== '' && array[6] !== '') {
    console.log('You win')
    $('td[id=2]').css('textDecoration', 'line-through')
    $('td[id=4]').css('textDecoration', 'line-through')
    $('td[id=6]').css('textDecoration', 'line-through')
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

// const cells = new Array(9)
// cells.fill('')
const cells = store.cells
console.log(cells)
console.log(cells)

let result = false
let currentSymbol = 'o'
const onInsertSymbol = function (event) {
  console.log($(event.target).text())
  console.log(currentSymbol)
  if (result === false && $(event.target).text() === '') {
    if (currentSymbol === 'o') {
      currentSymbol = 'x'
      event.target.append(currentSymbol)
      cells[parseInt(event.target.id)] = currentSymbol
      result = checkResult(cells)
      console.log(cells)
      console.log(result)
      console.log('countRows is ' + countRows)
      if (result) {
        $('#lbl-board-message').text('X wins!').css({'color': 'green', 'background-color': 'white'})
      } else {
        if (countRows === 3) {
          $('#lbl-board-message').text("Ugh, it's a draw.").css({'color': '#F0650E', 'background-color': 'white'})
        } else {
          countRows = 0
          $('#lbl-board-message').text("It's O's turn!").css({'color': '#F0650E', 'background-color': 'white'})
        }
      }
    } else {
      currentSymbol = 'o'
      event.target.append(currentSymbol)
      cells[parseInt(event.target.id)] = currentSymbol
      result = checkResult(cells)
      console.log(cells)
      console.log(result)
      console.log('countRows is ' + countRows)
      if (result) {
        $('#lbl-board-message').text('O wins!').css({'color': 'green', 'background-color': 'white'})
      } else {
        if (countRows === 3) {
          $('#lbl-board-message').text("Ugh, it's a draw.").css({'color': '#F0650E', 'background-color': 'white'})
        } else {
          countRows = 0
          $('#lbl-board-message').text("It's X's turn!").css({'color': '#F0650E', 'background-color': 'white'})
        }
      }
    }
  } else {
    $('#lbl-board-message').text('Invalid click.').css({'color': 'red', 'background-color': 'white'})
  }
  // const clickedCell = $(event.target).closest('td')
  // clickedCell.Add('o')
}

const onGetAllGames = function (event) {
  console.log(event.target)
  event.preventDefault()
  puzzleApi.getAllGames()
    .then(puzzleUi.getAllGamesSuccess)
    .catch(puzzleUi.getAllGamesFailure)
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
  $('#btn-search-incompletegames').on('click', onGetAllGames)
}

module.exports = {
  addHandlers
}
