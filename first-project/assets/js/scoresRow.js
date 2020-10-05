const Marionette = require('backbone.marionette')
const template = require('../templates/scoresRaw.handlebars')

const ScoresRow = Marionette.View.extend({
  template: template,
  tagName: 'tr'
})

module.exports = ScoresRow
