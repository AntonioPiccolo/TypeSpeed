const Marionette = require('backbone.marionette')
const template = require('../templates/registration.handlebars')
const $ = require('jquery')

const Registration = Marionette.View.extend({
  template: template,

  events: {
    'click #btn': 'ClickBtn'
  },

  ClickBtn: function() {
    let email = $('#email').val()
    let pw = $('#pw').val()
    let pwConfirm = $('#pw-confirm').val() 

    if(pw === pwConfirm){
      $.post('http://localhost:1337/registration',
      {email: email, password: pw},
      (data) =>{
        if(data){
          this.$('#successBox').css('display', '')
          this.$('#errorEmailBox').css('display', 'none')
          this.$('#errorPwBox').css('display', 'none')
          window.location.href =  'http://localhost:1337/#login'
        }
        else{
          this.$('#successBox').css('display', 'none')
          this.$('#errorEmailBox').css('display', '')
          this.$('#errorPwBox').css('display', 'none')
        }

      })
    }
    else{
      this.$('#successBox').css('display', 'none')
      this.$('#errorEmailBox').css('display', 'none')
      this.$('#errorPwBox').css('display', '')
    }
  }
})

module.exports = Registration
