require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
  {
    username: 'User1',
    title: 'Post 1',
    content:
      'Occaecat incididunt aliquip nulla et consequat adipisicing deserunt.',
  },
  {
    username: 'User2',
    title: 'Post 2',
    content:
      'Magna minim mollit excepteur minim. Aute aliquip Lorem incididunt ad voluptate commodo incididunt aliqua aliqua do mollit. Cupidatat irure sit sint ad cupidatat quis excepteur eu tempor non. Lorem ullamco pariatur ipsum et mollit nostrud quis eu excepteur aliquip ex pariatur cupidatat id. Quis enim elit sint aliquip veniam elit nulla amet irure. Exercitation tempor ex tempor fugiat nulla non adipisicing et quis commodo commodo aute.',
  },
  {
    username: 'User3',
    title: 'Post 3',
    content:
      'Aute ea aliquip reprehenderit velit voluptate minim voluptate amet adipisicing ut. In consectetur elit mollit laboris officia commodo consectetur cillum laborum voluptate. Ipsum laborum sit in laboris. Adipisicing laborum non nisi aliqua deserunt elit dolore. Dolor et consequat magna cupidatat anim excepteur cupidatat ipsum aliquip pariatur laborum cillum elit laboris.',
  },
]

// authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken })
})

app.listen(3000)
