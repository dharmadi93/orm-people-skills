"use strict"

var models = require('./models')

var User = models.User
var Skill = models.Skill
var DetailSkill = models.DetailSkill



// User.create({
//   name: "lolo",
//   username: "lala",
//   email: "lili@gmail.com"
// }).catch(function(err) {
//   console.log(err.message);
// })

// Skill.create({
//   name: "makan"
// }).catch(function(err) {
//   console.log(err.message);
// })

// User.findAll().then(function (data) {
//   for (var i = 0 ; i < data.length; i++) {
//     console.log(`${data[i].id} ${data[i].name} ${data[i].username} ${data[i].email}`)
//   }
// }).catch(function (err) {
//   console.log(err.message)
// })


DetailSkill.findAll({
  include: [
    {
      model: User
    }, {
      model: Skill
    }
  ]
}).then(function (data) {
  // console.log(vehicle[0]);
  var data_array = []
  for (var i = 0; i < data.length; i++) {
    data_array.push(data[i])
    // console.log(data_array[i].Skill)
  }
  console.log(data_array)
})