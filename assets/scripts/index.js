'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./puzzle/events')
const gameAuth = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// on document ready

$(() => {
  $('#game-page').hide()
  gameAuth.addHandlers()
  gameEvents.addHandlers()
  $('#game-page').on('load', gameEvents.onLoad())
})
