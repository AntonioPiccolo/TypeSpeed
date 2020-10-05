const Marionette = require('backbone.marionette')
const Bb = require('backbone')
const template = require('../templates/textBox.handlebars')
const wordView = require('./word')


const Text = Marionette.CollectionView.extend({
  collection: new Bb.Collection(),
  childView: wordView,
  childViewContainer: 'div',
  template: template,

  initialize: function(){
    fetch('http://localhost:1337/getRandomWords')
    .then((resp) => resp.json())
    .then((data) => {
      this.collection.set(data)
      this.render()
    })
  }
})

module.exports = Text
