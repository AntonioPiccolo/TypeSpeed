const Bb = require('backbone')
const Marionette = require('backbone.marionette')
const Router = require('./routes')
require('bootstrap/dist/js/bootstrap')

const TypeSpeedApp = Marionette.Application.extend({
  region: 'body',
  onStart: function () {
    new Router(this)
    Bb.history.start()
  }
})

const MyApp = new TypeSpeedApp()

MyApp.start()
