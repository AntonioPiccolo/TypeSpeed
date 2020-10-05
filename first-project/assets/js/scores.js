const Bb = require('backbone')
const Marionette = require('backbone.marionette')
const template = require('../templates/scores.handlebars')
const ScoresRow = require('./scoresRow')
const $ = require('jquery')

const Scores = Marionette.CollectionView.extend({
  collection: new Bb.Collection(),
  template: template,
  childView: ScoresRow,
  childViewContainer: "tbody",

  onRender: function() {
    $.get('http://localhost:1337/scores',
    (data) =>{
      if(data)
        this.collection.set(data)
      else
        window.location.href =  'http://localhost:1337/#login'
    })
  }
})

module.exports = Scores