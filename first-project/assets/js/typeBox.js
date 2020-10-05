const Bb = require('backbone')
const Marionette = require('backbone.marionette')
const template = require('../templates/typeBox.handlebars')
const Text = require('./textCollection')
const TypeBar = require('./typebar')
const Timer = require('./timer')
const Stats = require('./stats')

const typeBox = Marionette.View.extend({
  template: template,

  regions: {
    textRegion: '#textRegion',
    typeRegion: '#typeRegion',
    timerRegion: '#timerRegion',
    statsRegion: '#statsRegion'
  },

  initialize: function () {

  },

  onRender: function () {
    this.showChildView('textRegion', new Text())
    this.showChildView('typeRegion', new TypeBar())
    this.showChildView('timerRegion', new Timer())
    var emptyModel = Bb.Model.extend({
      defaults: {}
    });
    this.showChildView('statsRegion', new Stats({model: new emptyModel}))
  }
})

module.exports = typeBox
