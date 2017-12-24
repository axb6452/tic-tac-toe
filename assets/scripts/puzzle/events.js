'use strict'

const puzzleApi = require('./api.js')
const puzzleUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

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
    let i = 0
    let tempArray = []
    while (i < array.length) {
      tempArray.push(array[i])
      if (tempArray.length === 3) {
        if ((tempArray[0] === tempArray[1]) && (tempArray[1] === tempArray[2]) && tempArray[0] !== '' && tempArray[1] !== '' && tempArray[2] !== '') {
          console.log('You win')
          return true
        } else {
          tempArray = []
        }
      }
      i++
    }
  }
  return false
}

const cells = new Array(9)
cells.fill('')
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
      if (result) {
        $('#lbl-board-message').text('X wins!').css({'color': 'green', 'background-color': 'white'})
      } else {
        $('#lbl-board-message').text("It's O's turn!").css({'color': '#F0650E', 'background-color': 'white'})
      }
    } else {
      currentSymbol = 'o'
      event.target.append(currentSymbol)
      cells[parseInt(event.target.id)] = currentSymbol
      result = checkResult(cells)
      console.log(cells)
      console.log(result)
      if (result) {
        $('#lbl-board-message').text('O wins!').css({'color': 'green', 'background-color': 'white'})
      } else {
        $('#lbl-board-message').text("It's X's turn").css({'color': '#F0650E', 'background-color': 'white'})
      }
    }
  } else {
    $('#lbl-board-message').text('Invalid click.').css({'color': 'red', 'background-color': 'white'})
  }
  // const clickedCell = $(event.target).closest('td')
  // clickedCell.Add('o')
}

const onChangePasswordLink = function (event) {
  event.preventDefault()
  console.log($('#change-password').css('display'))
  if ($('#change-password').css('display') === 'none') {
    $('#change-password').show()
    $('#change-password-link').text('Hide').css('color', 'white')
  } else {
    $('#change-password').hide()
    $('#lblChangePasswordMessage').hide()
    $('#change-password-link').text('Change Password')
  }
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  puzzleApi.changePassword(data)
    .then(puzzleUi.changePasswordSuccess)
    .catch(puzzleUi.changePasswordFailure)
}

const addHandlers = function () {
  $('#game-table').on('click', 'td', onInsertSymbol)
  $('#change-password-link').on('click', onChangePasswordLink)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
