const Marionette = require('backbone.marionette')
const template = require('../templates/timer.handlebars')

const radio = require('backbone.radio')

const newRadio = radio.channel('timerChannel')

const timer = Marionette.View.extend({
  template: template,
  regions: {
    timerRegion: 'h1'
  },

  initialize: function () {
    newRadio.on('updateTimer', () => {
      let seconds = 59
      window.setInterval(() => {
        myFunction(this)
      }, 1000)

      function myFunction (view) {
        if (seconds < 60) {
          if (seconds > 9) {
            view.$('#timerRegion').text('00:' + seconds.toString())
          }
          else {
            view.$('#timerRegion').css('color', '#8B0000')
            view.$('#timerRegion').text('00:' + '0' + seconds.toString())
          }
        }
        if (seconds > 0) {
          seconds--
        }
        else {
          view.$('#timerRegion').text('00:' + '0' + seconds.toString())
        }
      }
    })
  },

  onRender: function () {

  },

  onStart: function () {

  }
})

module.exports = timer
