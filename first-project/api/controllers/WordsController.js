/**
 * WordsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  getword: function(req,res) {

   let index
   let array

    Words.find()
      .then(data => {
        index = data.length
        array = data
        while(0 !== index){
          randomIndex = Math.floor(Math.random() * index)
          index -= 1
          let temporaryValue = array[index]
          array[index] = array[randomIndex]
          array[randomIndex] = temporaryValue
        }
        let i = 1
        let map = array.map(item =>{
          let obj = {}
          obj['_id'] = item.id
          obj['body'] = item.body
          obj['id'] = i.toString()
          i++
          return obj
        })
        res.send(map.slice(0,50))
      })
  } 

};

