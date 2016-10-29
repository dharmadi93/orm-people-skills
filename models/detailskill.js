'use strict';
module.exports = function(sequelize, DataTypes) {
  var DetailSkill = sequelize.define('DetailSkill', {
    score: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        DetailSkill.belongsTo(models.User)
        DetailSkill.belongsTo(models.Skill)
      }
    }
  });
  return DetailSkill;
};