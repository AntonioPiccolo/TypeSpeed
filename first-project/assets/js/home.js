const Marionette = require('backbone.marionette')
const template = require('../templates/home.handlebars')

const Home = Marionette.View.extend({
  template: template
})

module.exports = Home