'use strict';
module.exports = function(sequelize, DataTypes) {
  var DetailSkill = sequelize.define('DetailSkill', {
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return DetailSkill;
};