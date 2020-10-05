const Marionette = require('backbone.marionette')
const template = require('../templates/navbar.handlebars')
const Home = require('./home')
const $ = require('jquery')

const Navbar = Marionette.View.extend({
  template: template,
  regions: {
    'mainBoxRegion': '#mainBox'
  },
  events: {
    'click #game': 'ClickBtnPlay',
    'click #scores': 'ClickBtnScores'
  },

  ClickBtnPlay: function() {
    $.get('http://localhost:1337/check',
    (data) =>{
      if(data){
        window.location.href =  'http://localhost:1337/#game'
      }
      else
      window.location.href =  'http://localhost:1337/#login'
    })
  },
  ClickBtnScores: function() {
    $.get('http://localhost:1337/check',
    (data) =>{
      if(data){
        window.location.href =  'http://localhost:1337/#scores'
      }
      else
      window.location.href =  'http://localhost:1337/#login'
    })
  }
})

module.exports = Navbar