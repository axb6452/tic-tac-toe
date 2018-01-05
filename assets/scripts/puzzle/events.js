'use strict'

const puzzleApi = require('./api.js')
const puzzleUi = require('./ui.js')
const store = require('../store')
// const config = require('../config')
// const getFormFields = require('../../../lib/get-form-fields')

let countRows = 0
const checkResult = function (array) {
  if ((array[2] === array[4]) && (array[4] === array[6]) && array[2] !== '' && array[4] !== '' && array[6] !== '') {
    return true
  } else if ((array[0] === array[4]) && (array[4] === array[8]) && array[0] !== '' && array[4] !== '' && array[8] !== '') {
    return true
  } else if ((array[0] === array[3]) && (array[3] === array[6]) && array[0] !== '' && array[3] !== '' && array[6] !== '') {
    return true
  } else if ((array[1] === array[4]) && (array[4] === array[7]) && array[1] !== '' && array[4] !== '' && array[7] !== '') {
    return true
  } else if ((array[2] === array[5]) && (array[5] === array[8]) && array[2] !== '' && array[5] !== '' && array[8] !== '') {
    return true
  } else {
    let tempArray = []
    let i = 0
    while (i < array.length) {
      tempArray.push(array[i])
      if (tempArray.length === 3) {
        if ((tempArray[0] === tempArray[1]) && (tempArray[1] === tempArray[2]) && tempArray[0] !== '' && tempArray[1] !== '' && tempArray[2] !== '') {
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

store.currentSymbol = 'o'
const onInsertSymbol = function (event) {
  if (store.game.over === false && $(event.target).text() === '') {
    if (store.currentSymbol === 'o') {
      store.currentSymbol = 'x'
      event.target.append(store.currentSymbol)
      store.game.cells[parseInt(event.target.id)] = store.currentSymbol
      store.game.over = checkResult(store.game.cells)
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

const onJoinAsO = function (event) {
  event.preventDefault()
  const data = '{}'
  puzzleApi.joinAsO(data)
    .then(puzzleUi.joinAsOSuccess)
    .catch(puzzleUi.joinAsOFailure)
}

const onGetAllCompletedGames = function (event) {
  event.preventDefault()
  puzzleApi.getAllCompletedGames()
    .then(puzzleUi.getAllCompletedGamesSuccess)
    .catch(puzzleUi.getAllCompletedGamesFailure)
}

const onGetAllIncompleteGames = function (event) {
  event.preventDefault()
  puzzleApi.getAllIncompleteGames()
    .then(puzzleUi.getAllIncompleteGamesSuccess)
    .catch(puzzleUi.getAllIncompleteGamesFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  puzzleApi.createGame()
    .then(puzzleUi.createGameSuccess)
    .catch(puzzleUi.createGameFailure)
}

const onGetSingleCompletedGame = function (event) {
  event.preventDefault()
  $('#myModal').modal('toggle')
  const gameId = $('#txt-get-completed-game').val()
  puzzleApi.getSingleGame(gameId)
    .then(puzzleUi.getSingleGameSuccess)
    .catch(puzzleUi.getSingleGameFailure)
}

const onGetSingleIncompleteGame = function (event) {
  event.preventDefault()
  $('#myModal2').modal('toggle')
  const gameId = $('#txt-get-incomplete-game').val()
  puzzleApi.getSingleGame(gameId)
    .then(puzzleUi.getSingleGameSuccess)
    .catch(puzzleUi.getSingleGameFailure)
}

const onBeforeUnload = function (event) {
  localStorage.setItem('totalXWins', $('.td0').text())
  localStorage.setItem('totalDraws', $('.td1').text())
  localStorage.setItem('totalOWins', $('.td2').text())
}

const onLoad = function (event) {
  const xWins = localStorage.getItem('totalXWins') === (undefined || null || '' || 'NaN') ? '0' : localStorage.getItem('totalXWins')
  const draws = localStorage.getItem('totalDraws') === (undefined || null || '' || 'NaN') ? '0' : localStorage.getItem('totalDraws')
  const oWins = localStorage.getItem('totalOWins') === (undefined || null || '' || 'NaN') ? '0' : localStorage.getItem('totalOWins')

  $('.td0').text(xWins)
  $('.td1').text(draws)
  $('.td2').text(oWins)
}

const doNavigation = function (event) {
  if (this.hash !== '') {
    event.preventDefault()
    const hash = this.hash
    $('html').animate({
      scrollTop: $(hash).offset().top
    }, 700, function () {
      window.location.hash = hash
    })
  }
}

const addHandlers = function () {
  $('#game-table').on('click', 'td', onInsertSymbol)
  $('#btn-create-game').on('click', onCreateGame)
  $('#btn-get-completed-game').on('click', onGetSingleCompletedGame)
  $('#btn-get-incomplete-game').on('click', onGetSingleIncompleteGame)
  $('#btn-search-completegames').on('click', onGetAllCompletedGames)
  $('#btn-search-incompletegames').on('click', onGetAllIncompleteGames)
  $(window).on('beforeunload', onBeforeUnload)
  $('a').on('click', doNavigation)
  $('#btn-enterasO').on('click', onJoinAsO)
}

module.exports = {
  addHandlers,
  onLoad
}
