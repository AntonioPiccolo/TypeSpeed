
module.exports = {

  authentication: function(req,res) {
    const bcrypt = require('bcrypt')

    let originalPw
    let salt

    Users.find({email: req.body.email})
    .then(response => {
      if(response.length === 0)
        res.send(false)
      else{
        originalPw = response[0].password
        salt = response[0].salt
        bcrypt.hash(req.body.password, salt).then(data => {      
          if(data === originalPw){
            req.session.userId = response[0].email
              res.send(true)
            }
          else
            res.send(false)
        })
      }
    })
    
  },

  registration: function(req,res){
    const bcrypt = require('bcrypt')
    let email
    let pw
    let salt

    Users.find({email: req.body.email})
      .then(response => {
        email = req.body.email
        pw = req.body.password
        if(response.length === 0){
          bcrypt.genSalt(10).then(response => {
            salt = response
            bcrypt.hash(pw,salt).then(data =>{
              Users.create({email: email, password: data, salt: salt}).exec(function(err){
                if(err)
                  res.send(500, {error: 'Database error'})
                else
                  res.send(true)
                })
            })
          })
        }
        else
          res.send(false)
      })
  },

  loginCheck: function(req,res) {
    res.send(true)
  }
}