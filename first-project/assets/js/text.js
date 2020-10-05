const Marionette = require('backbone.marionette')
const template = require('../templates/textBox.handlebars')

const textCheck = Marionette.View.extend({
  template: template,
  regions: {
    inputRegion: '#textBox'
  }
})

module.exports = textCheck
