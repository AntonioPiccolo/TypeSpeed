
const Marionette = require('backbone.marionette')
const template = require('../templates/typebar.handlebars')
const xhttp = require('http')

const radio = require('backbone.radio')

const wordRadio = radio.channel('wordChannel')
const newRadio = radio.channel('timerChannel')
const statsRadio = radio.channel('statsChannel')
const indexWordRadio = radio.channel('indexWordChannel')

const typeBox = Marionette.View.extend({
  template: template,
  regions: {
    typeRegion: 'div'
  },

  attributes: {
    check: true,
    index: 0
  },

  initialize: function () {
    indexWordRadio.on('indexWordChannel', () => {
      console.log('123')
    })
  },

  onRender: function () {
    this.$('#typeBox').focus()
  },

  events: {
    'keypress': 'keyAction'
  },

  keyAction: function (key) {
    if (this.attributes.check) {
      this.attributes.check = false
      newRadio.trigger('updateTimer')
      setTimeout(() => {
        this.attributes.check = true
        statsRadio.trigger('statsBox')
      }, 60000)
    }
    if (String.fromCharCode(key.keyCode) === ' ') {    
      const word = this.$('#typeBox').val()
      wordRadio.trigger('checkWord', word)
      this.attributes.index++
      this.render()
    }
  }
})

module.exports = typeBox
