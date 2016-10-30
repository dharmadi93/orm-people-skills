# ORM People Skills

## Install Sequelize

```
npm install sequelize-cli -g
npm install sequelize --save
sequelize init
```

## Install Portgre

```
npm install pg --save
```

## config.json

```
"development": {
    "username": "<POSTGRE_USERNAME>",
    "password": "<PASSWORD>",
    "database": "<DATABASE_NAME",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
```

## Create Model

```
sequelize model:create --name <MODEL_NAME> --attributes <ATTRIBUTES_NAME>
```

## Create Migration

```
sequelize migration:create --name <MIGRATION_NAME>
```

## Create Seeders

```
sequelize seed:create --name <SEED_NAME>
```

## Run Seeders

```
sequelize db:seed:all
```

## Create User

```javascript
var models = require('./models')
var User = models.User

User.create({
  name: "<NAME>",
  username: "<USERNAME>",
  email: "<EMAIL>"
}).catch(function(err) {
  console.log(err.message);
})
```

## Create Skill

```javascript
var models = require('./models')
var Skill = models.Skill

Skill.create({
  name: "<NAME>"
}).catch(function(err) {
  console.log(err.message);
})
```

## Create DetailSkill

```javascript
var models = require('./models')
var DetailSkill = models.DetailSkill

DetailSkill.create({
  score: "<SCORE>",
  UserId: "<USER_ID>",
  SkillId: "<SKILL_ID>"
}).catch(function(err) {
  console.log(err.message);
})
```

## View Data

```javascript
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
```

