const express = require('express')
const passport = require('passport')
const session = require('express-session')
console.log(session)

const RedisStore = require('connect-redis')(session)

const app = express()
console.log(app)
const port = 3001

// app.listen(session({

// }))