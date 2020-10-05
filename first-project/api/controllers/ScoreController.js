
module.exports = {
  savescore: function(req,res) {
    let today = new Date(); 
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let score = parseInt(req.body.score)

    Score.create({name: req.session.userId, score:score, date:date}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database error'})
      }
    })
  },

  findscore: function(req,res) {
    const name = req.session.userId
    
    Score.find({name: name})
      .then(response => {
        res.send(response)
      })
  }
};

