'use strict'

const store = require('../store')
// const config = require('../config')
//
// let gameWatcher
// const resourceWatcher = function (url, conf) {
//   const token = function (conf) {
//     return conf && (conf = conf.Authorization) &&
//       (conf = typeof conf === 'string' &&
//         conf.split('=')) &&
//       Array.isArray(conf) && conf[1]
//   }
//   url += '?token=' + token(conf)
//   url += conf.timeout ? '&timeout=' + conf.timeout : ''
//   const es = new EventSource(url)
//   const close = function () {
//     es.close()
//   }
//   const makeHandler = function (handler, close) {
//     return function (e) {
//       if (close) {
//         close()
//       }
//       return handler(e.data ? e.data : e)
//     }
//   }
//
//   const on = function (event, handler) {
//     switch (event) {
//       case 'connect':
//         es.onopen = makeHandler(handler)
//         break
//       case 'change':
//         es.onmessage = makeHandler(handler)
//         break
//       case 'error':
//         es.onerror = makeHandler(handler, close)
//         break
//       default:
//         console.error('Unknown event type:' + event)
//         break
//     }
//   }
//
//   return {
//     close: close,
//     on: on
//   }
// }
//
// const onChange = function (data) {
//   const data1 = JSON.parse(data)
//   console.log('data1: ' + data1)
//   if (data1.game) {
//     const diff = changes => {
//       const before = changes[0]
//       const after = changes[1]
//       for (let i = 0; i < after.length; i++) {
//         if (before[i] !== after[i]) {
//           return {
//             index: i,
//             value: after[i]
//           }
//         }
//       }
//       return { index: -1, value: '' }
//     }
//     const cell = diff(data1.game.cells)
//     $('#' + cell.index).text(cell.value)
//     store.game.cells[cell.index] = cell.value
//     store.currentSymbol = cell.value
//   } else if (data1.timeout) { // not an error
//     gameWatcher.close()
//   }
// }

const createGameSuccess = function (data) {
  store.currentSymbol = 'o'
  store.game = data.game
  // gameWatcher = resourceWatcher(config.apiOrigin + '/games/' + store.game.id + '/watch', {Authorization: 'Token token=' + store.user.token})
  // gameWatcher.on('change', onChange)
  for (let i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
  }
  $('#lbl-board-message').text('Game created: X starts').css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
  $('#game-table').show()
  // $('#game-table').attr('disabled', 'enabled')
  $('#game-table td').hover(function () { $(this).css({'background-color': '#79CEDC', 'color': 'black'}) }, function () { $(this).css({'background-color': '#0F2043', 'color': 'white'}) })
}

const createGameFailure = function () {
  $('#lbl-board-message').text('Error Creating game').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const updateGameSuccess = function (data) {
}

const updateGameFailure = function (data) {
  $('#lbl-board-message').text('Error during update').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const joinAsOSuccess = function (data) {
  store.currentSymbol = 'x'
  store.game = data.game
  // gameWatcher = resourceWatcher(config.apiOrigin + '/games/' + $('#game-id-o').val() + '/watch', {Authorization: 'Token token=' + store.user.token})
  // gameWatcher.on('change', onChange)
  for (let i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
  }
  $('#lbl-board-message').text('Game joined: wait for X to start').css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
  $('#game-table').show()
  $('#game-table td').hover(function () { $(this).css({'background-color': '#79CEDC', 'color': 'black'}) }, function () { $(this).css({'background-color': '#0F2043', 'color': 'white'}) })
}

const joinAsOFailure = function (data) {
  $('#lbl-board-message').text('Error joining as O').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const getSingleGameSuccess = function (data) {
  store.game = data.game
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
  if (store.game.over === false) {
    if (xCount > oCount && xCount !== 0) {
      store.currentSymbol = 'x'
      $('#lbl-board-message').text("It's O's turn!").css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
    } else if (xCount === oCount && xCount !== 0) {
      store.currentSymbol = 'o'
      $('#lbl-board-message').text("It's X's turn!").css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
    } else {
      store.currentSymbol = 'o'
      $('#lbl-board-message').text('Game resumed: X starts').css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
    }
  } else {
    if (blankCount !== 0) {
      if (xCount > oCount) {
        $('#lbl-board-message').text('X won!').css({'color': 'green', 'background-color': 'white', 'width': '200px'})
      } else if (xCount === oCount) {
        $('#lbl-board-message').text('O won!').css({'color': 'green', 'background-color': 'white', 'width': '200px'})
      }
    } else {
      const cells = store.game.cells
      if (((cells[0] === cells[1]) && (cells[1] === cells[2]) && cells[0] === 'x') ||
         ((cells[3] === cells[4]) && (cells[4] === cells[5]) && cells[3] === 'x') ||
         ((cells[6] === cells[7]) && (cells[7] === cells[8]) && cells[6] === 'x') ||
         ((cells[0] === cells[3]) && (cells[3] === cells[6]) && cells[0] === 'x') ||
         ((cells[1] === cells[4]) && (cells[4] === cells[7]) && cells[1] === 'x') ||
         ((cells[2] === cells[5]) && (cells[5] === cells[8]) && cells[2] === 'x') ||
         ((cells[0] === cells[4]) && (cells[4] === cells[8]) && cells[0] === 'x') ||
         ((cells[2] === cells[4]) && (cells[4] === cells[6]) && cells[2] === 'x')) {
        $('#lbl-board-message').text('X won!').css({'color': 'green', 'background-color': 'white', 'width': '200px'})
      } else {
        $('#lbl-board-message').text('Ugh, it was a draw.').css({'color': '#0F2043', 'background-color': 'white', 'width': '200px'})
      }
    }
  }
  $('#game-table').show()
  $('#game-table td').hover(function () { $(this).css({'background-color': '#79CEDC', 'color': 'black'}) }, function () { $(this).css({'background-color': '#0F2043', 'color': 'white'}) })
}

const getSingleGameFailure = function () {
  $('#lbl-board-message').text('Error Getting Single game').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const getAllCompletedGamesSuccess = function (data) {
  $('.modal-body').html('')
  $('.modal-body').css({'height': '100px', 'font-size': '14px', 'text-align': 'center'})
  if (data.games.length === 0) {
    $('.modal-body').append('You have no complete games')
    $('#btn-get-completed-game').attr('disabled', 'disabled')
  } else {
    $('#btn-get-completed-game').removeAttr('disabled')
    for (let i = 0; i < data.games.length; i++) {
      $('.modal-body').append('<ul>game id: ' + data.games[i].id + '</ul><br>')
      if (data.games.length > 5) {
        $('.modal-body').css('height', '350px')
      }
    }
  }
}

const getAllCompletedGamesFailure = function (data) {
  $('#lbl-board-message').text('Error Getting All Completed Games').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

const getAllIncompleteGamesSuccess = function (data) {
  $('.modal-body').html('')
  $('.modal-body').css({'height': '100px', 'font-size': '14px', 'text-align': 'center'})
  if (data.games.length === 0) {
    $('.modal-body').append('You have no incomplete games')
    $('#btn-get-incomplete-game').attr('disabled', 'disabled')
  } else {
    $('#btn-get-incomplete-game').removeAttr('disabled')
    for (let i = 0; i < data.games.length; i++) {
      $('.modal-body').append('<ul>game id: ' + data.games[i].id + '</ul><br>')
      if (data.games.length > 5) {
        $('.modal-body').css('height', '350px')
      }
    }
  }
}

const getAllIncompleteGamesFailure = function (data) {
  $('#lbl-board-message').text('Error Getting All Incomplete Games').css({'background-color': 'white', 'color': 'red', 'width': '300px'})
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  joinAsOSuccess,
  joinAsOFailure,
  getSingleGameSuccess,
  getSingleGameFailure,
  getAllCompletedGamesSuccess,
  getAllCompletedGamesFailure,
  getAllIncompleteGamesSuccess,
  getAllIncompleteGamesFailure
}
