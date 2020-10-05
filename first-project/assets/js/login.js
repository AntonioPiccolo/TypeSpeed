const Marionette = require('backbone.marionette')
const template = require('../templates/login.handlebars')
const $ = require('jquery')

const loginBox = Marionette.View.extend({
  template: template,
  events: {
    'click #btn': 'ClickBtn'
  },

  ClickBtn: function() {
    let email = $('#email').val()
    let pw = $('#pw').val()

    $.post('http://localhost:1337/authentication',
    {email: email, password: pw},
    (data) =>{
      if(data === true){
            window.location.href =  'http://localhost:1337/#game'
      }
      else
        this.$('#errorBox').css('display', '')
    })
  }
})

module.exports = loginBox