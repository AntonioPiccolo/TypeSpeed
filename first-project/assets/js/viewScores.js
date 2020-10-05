const Marionette = require('backbone.marionette')
const template = require('../templates/boxScores.handlebars')
const Table = require('./scores')

const ViewScores = Marionette.View.extend({
  template: template,
  regions: {
    region: '#div' 
  },
  
  onRender: function() {
    this.showChildView('region', new Table())
  }
})

module.exports = ViewScores