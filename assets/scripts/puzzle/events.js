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
  console.log('td position top is ' + $(event.target).position().top)
  console.log('td position left is ' + $(event.target).position().left)
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
        $('.td0').text((parseInt($('.td0').text()) + 1))
        const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': true}}
        puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
        countRows = 0
      } else {
        if (countRows === 3) {
          $('#lbl-board-message').text("Ugh, it's a draw.").css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
          $('.td1').text((parseInt($('.td1').text()) + 1))
          const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': true}}
          puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
          countRows = 0
        } else {
          countRows = 0
          $('#lbl-board-message').text("It's O's turn!").css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
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
        $('.td2').text((parseInt($('.td2').text()) + 1))
        const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': true}}
        puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
        countRows = 0
      } else {
        if (countRows === 3) {
          $('#lbl-board-message').text("Ugh, it's a draw.").css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
          $('.td1').text((parseInt($('.td1').text()) + 1))
          const updateGameData = {'game': {'cell': {'index': parseInt(event.target.id), 'value': store.currentSymbol}, 'over': true}}
          puzzleApi.updateGame(updateGameData).then(puzzleUi.updateGameSuccess).catch(puzzleUi.updateGameFailure)
          countRows = 0
        } else {
          countRows = 0
          $('#lbl-board-message').text("It's X's turn!").css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
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

const onBeforeUnload = function (event) {
  console.log('type of outgoing is ' + typeof ($('.td0').text()))
  console.log('type of outgoing is ' + typeof ($('.td1').text()))
  console.log('type of outgoing is ' + typeof ($('.td2').text()))
  localStorage.setItem('totalXWins', $('.td0').text())
  console.log($('.td0').text())
  localStorage.setItem('totalDraws', $('.td1').text())
  console.log($('.td1').text())
  localStorage.setItem('totalOWins', $('.td2').text())
  console.log($('.td2').text())
}

const onLoad = function (event) {
  const xWins = typeof (parseInt(localStorage.getItem('totalXWins'))) !== 'number' ? 0 : localStorage.getItem('totalXWins')
  console.log('get item result ' + localStorage.getItem('totalXWins'))
  console.log('xWins: ' + xWins)
  console.log('type of is ' + typeof (xWins))
  const draws = typeof (parseInt(localStorage.getItem('totalDraws'))) !== 'number' ? 0 : localStorage.getItem('totalDraws')
  console.log('get item result ' + localStorage.getItem('totalDraws'))
  console.log('Draws: ' + draws)
  console.log('type of is ' + typeof (draws))
  const oWins = typeof (parseInt(localStorage.getItem('totalOWins'))) !== 'number' ? 0 : localStorage.getItem('totalOWins')
  console.log('get item result ' + localStorage.getItem('totalOWins'))
  console.log('oWins: ' + oWins)
  console.log('type of is ' + typeof (oWins))

  $('.td0').text(xWins)
  console.log($('.td0').text())
  $('.td1').text(draws)
  console.log($('.td1').text())
  $('.td2').text(oWins)
  console.log($('.td2').text())
}

const doNavigation = function (event) {
  if (this.hash !== '') {
    event.preventDefault()
    const hash = this.hash
    $('main').animate({
      scrollTop: $(hash).offset().top
    }, 200, function () {
      window.location.hash = hash
    })
  }
}

const addHandlers = function () {
  $('#game-table').on('click', 'td', onInsertSymbol)
  $('#btn-create-game').on('click', onCreateGame)
  $('#btn-get-game').on('click', onGetSingleGame)
  $('#btn-search-completegames').on('click', onGetAllCompletedGames)
  $('#btn-search-incompletegames').on('click', onGetAllIncompleteGames)
  $(window).on('beforeunload', onBeforeUnload)
  $('a').on('click', doNavigation)
}

module.exports = {
  addHandlers,
  onLoad
}
