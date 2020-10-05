const Bb = require('backbone')
const Marionette = require('backbone.marionette')
const template = require('../templates/stats.handlebars')

const radio = require('backbone.radio')
const statsRadio = radio.channel('statsChannel')
const scoreIndex = radio.channel('scoreIndexChannel')

const statsBox = Marionette.View.extend({
  template: template,
  tagName: 'div',
  right: 0,
  wrong: 0,

  initialize: function () {
    scoreIndex.on('score', (i) =>{
      if(i === true)
        this.right++
      else
        this.wrong++
    })
    statsRadio.on('statsBox', () => {

      this.model.set({n1: (this.right/2).toString() + " p/m", n2: (this.right/2).toString() + ' corrette', n3: (this.wrong/2).toString() + ' sbagliate'})
      this.render()
      this.$('#statsBox').css('display', 'inline-block')

      //  Salava lo score nel DadaBase
      let xhttp = new XMLHttpRequest();
      xhttp.open('POST', 'http://localhost:1337/saveScore', true)
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send('score=' + (this.right/2).toString()); 
    })
  }
})

module.exports = statsBox
