'use strict'

// const puzzleApi = require('./api.js')
// const puzzleUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')

function checkResult (array) {
  if ((array[2] === array[4]) && (array[4] === array[6]) && array[2] !== '' && array[4] !== '' && array[6] !== '') {
    console.log('You win')
    $('td[id=2]').css('textDecoration', 'line-through')
    $('td[id=4]').css('textDecoration', 'line-through')
    $('td[id=6]').css('textDecoration', 'line-through')
    return 'You win'
  } else if ((array[0] === array[4]) && (array[4] === array[8]) && array[0] !== '' && array[4] !== '' && array[8] !== '') {
    console.log('You win')
    return 'You win'
  } else if ((array[0] === array[3]) && (array[3] === array[6]) && array[0] !== '' && array[3] !== '' && array[6] !== '') {
    console.log('You win')
    return 'You win'
  } else if ((array[1] === array[4]) && (array[4] === array[7]) && array[1] !== '' && array[4] !== '' && array[7] !== '') {
    console.log('You win')
    return 'You win'
  } else if ((array[2] === array[5]) && (array[5] === array[8]) && array[2] !== '' && array[5] !== '' && array[8] !== '') {
    console.log('You win')
    return 'You win'
  } else {
    let i = 0
    let tempArray = []
    while (i < array.length) {
      tempArray.push(array[i])
      if (tempArray.length === 3) {
        if ((tempArray[0] === tempArray[1]) && (tempArray[1] === tempArray[2]) && tempArray[0] !== '' && tempArray[1] !== '' && tempArray[2] !== '') {
          console.log('You win')
          return 'You win'
        } else {
          tempArray = []
        }
      }
      i++
    }
  }
}

let currentSymbol = 'o'
const cells = new Array(9)
cells.fill('')
console.log(cells)
const onInsertSymbol = function (event) {
  console.log($(event.target).text())
  console.log(currentSymbol)
  if ($(event.target).text() === '') {
    if (currentSymbol === 'o') {
      currentSymbol = 'x'
      event.target.append(currentSymbol)
      cells[parseInt(event.target.id)] = currentSymbol
      const result = checkResult(cells)
      console.log(cells)
      console.log(result)
    } else {
      currentSymbol = 'o'
      event.target.append(currentSymbol)
      cells[parseInt(event.target.id)] = currentSymbol
      const result = checkResult(cells)
      console.log(cells)
      console.log(result)
    }
  } else {
    $('#lbl-message').text('Invalid click.').css('color', 'red')
  }
  // const clickedCell = $(event.target).closest('td')
  // clickedCell.Add('o')
}

module.exports = {
  onInsertSymbol
}
