'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
      validate: {
        isUnique: sequelize.validateIsUnique('name')
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Skill.hasMany(models.DetailSkill)
      }
    }
  });
  return Skill;
};