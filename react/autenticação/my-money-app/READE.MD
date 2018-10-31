# MODULO DE AUTENTICACAO

#BACKEND

## Dependencias



```
npm i --save bcrypt@1.0.2 jsonwebtoken@7.3.0
```

na pasta src .env

.env
```
module.exports = {
    authSecret: 'Chave que vc quiser por'
}
```
```
```

na pasta criar aquivo backend/src/user/user.js


```
const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 12, required: true }
})

module.exports = restful.model('User', userSchema)
```

na pasta criar aquivo backend/src/user/authService.js

```
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('./user');
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}
```


165

authService.js
```
const login = (req, res, next) => {
    const email = req.body.email || ' '
    const password = req.body.password || ' '

    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, user)
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user, env.authSecret, {
                expiresIn: "1 day"
            })
            const { name, email } = user
            res.json({ name, email, token })
        } else {
            return res.status(400).send({ errors: ['Usuario/Senha Invalida'] })
        }
    })
}


//valida token
//verifica se o token esta valido se nao  espira
const validateToken = (req, res, next) => {
    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, function (err, decoded) {
        return res.status(200).send({ valid: !err })
    })
}
```

```
```

```
```

```
```

```
```
```
```
```
```
```
```
```na pasta criar aquivo backend/src/user/user.js
```
