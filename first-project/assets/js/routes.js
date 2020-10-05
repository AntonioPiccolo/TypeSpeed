const AppRouter = require('marionette.approuter')
const TypeBox = require('./typeBox')
const LoginBox = require('./login')
const RegistrationBox = require('./registration')
const NavbarBox = require('./navbar')
const HomeBox = require('./home')
const ScoresBox = require('./viewScores')

let mainApp
let body

const PagesController = {
  showHome: () =>{
    body.$('#home').attr('class', 'nav-item active')
    body.$('#registration').attr('class', 'nav-item')
    body.$('#login').attr('class', 'nav-item')
    body.$('#game').attr('class', 'nav-item')
    body.$('#scores').attr('class', 'nav-item')
    body.showChildView('mainBoxRegion', new HomeBox())
    mainApp.showView(body)
  },  
  showRegistration: () =>{
    body.$('#registration').attr('class', 'nav-item active')
    body.$('#home').attr('class', 'nav-item')
    body.$('#login').attr('class', 'nav-item')
    body.$('#game').attr('class', 'nav-item')
    body.$('#scores').attr('class', 'nav-item')
    body.showChildView('mainBoxRegion', new RegistrationBox())
    mainApp.showView(body)
  },
  showLogin: () =>{
    body.$('#login').attr('class', 'nav-item active')
    body.$('#home').attr('class', 'nav-item')
    body.$('#registration').attr('class', 'nav-item')
    body.$('#scores').attr('class', 'nav-item')
    body.$('#game').attr('class', 'nav-item')
    body.showChildView('mainBoxRegion', new LoginBox())
    mainApp.showView(body)
  },
  showGame: () =>{
    body.$('#game').attr('class', 'nav-item active')
    body.$('#home').attr('class', 'nav-item')
    body.$('#login').attr('class', 'nav-item')
    body.$('#scores').attr('class', 'nav-item')
    body.$('#registration').attr('class', 'nav-item')
    body.showChildView('mainBoxRegion', new TypeBox())
    mainApp.showView(body)
  },
  showScores: () =>{
    body.$('#scores').attr('class', 'nav-item active')
    body.$('#registration').attr('class', 'nav-item')
    body.$('#login').attr('class', 'nav-item')
    body.$('#game').attr('class', 'nav-item')
    body.$('#home').attr('class', 'nav-item')
    body.showChildView('mainBoxRegion', new ScoresBox())
    mainApp.showView(body)
  }  
}

const MyRoutes = AppRouter.extend({
  controller: PagesController,

  appRoutes: {
    '': 'showHome',
    'login': 'showLogin',
    'registration': 'showRegistration',
    'game': 'showGame',
    'scores': 'showScores'
  },

  initialize: function(app){
    mainApp = app
    body = new NavbarBox()
  }
})

module.exports = MyRoutes
