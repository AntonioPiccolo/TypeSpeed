const Marionette = require('backbone.marionette')
const template = require('../templates/word.handlebars')

const radio = require('backbone.radio')

const wordRadio = radio.channel('wordChannel')
const scoreIndex = radio.channel('scoreIndexChannel')

const Word = Marionette.View.extend({
  template: template,

  tagName: 'span',

  index: 0,

  correctWords: 0,
  incorrectWord: 0,

  initialize: function () {
    wordRadio.on('checkWord', (word) => {
      this.index++
      const index = this.index.toString()
      const nextIndex = (this.index + 1)
      const stringNextIndex = nextIndex.toString()
      if (index === this.model.attributes.id) {
        if (word === this.model.attributes.body) {
          scoreIndex.trigger('score', true)
          this.$('#' + index).css('background-color', 'rgba(26, 172, 26, 0.516)')
        }
        else {
          scoreIndex.trigger('score', false)
          this.$('#' + index).css('background-color', 'rgba(172, 43, 26, 0.700)')
        }
      }
      if (this.model.attributes.id === stringNextIndex) {
        this.$('#' + stringNextIndex).css('background-color', 'rgb(169,169,169)')
      }
    })
  },

  onRender: function () {
    this.$('#1').css('background-color', 'rgb(169,169,169)')
  }
})

module.exports = Word
