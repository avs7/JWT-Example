const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())

const posts = [
  {
    userName: 'User1',
    title: 'Post 1',
    content:
      'Occaecat incididunt aliquip nulla et consequat adipisicing deserunt.',
  },
  {
    userName: 'User2',
    title: 'Post 2',
    content:
      'Magna minim mollit excepteur minim. Aute aliquip Lorem incididunt ad voluptate commodo incididunt aliqua aliqua do mollit. Cupidatat irure sit sint ad cupidatat quis excepteur eu tempor non. Lorem ullamco pariatur ipsum et mollit nostrud quis eu excepteur aliquip ex pariatur cupidatat id. Quis enim elit sint aliquip veniam elit nulla amet irure. Exercitation tempor ex tempor fugiat nulla non adipisicing et quis commodo commodo aute.',
  },
  {
    userName: 'User3',
    title: 'Post 3',
    content:
      'Aute ea aliquip reprehenderit velit voluptate minim voluptate amet adipisicing ut. In consectetur elit mollit laboris officia commodo consectetur cillum laborum voluptate. Ipsum laborum sit in laboris. Adipisicing laborum non nisi aliqua deserunt elit dolore. Dolor et consequat magna cupidatat anim excepteur cupidatat ipsum aliquip pariatur laborum cillum elit laboris.',
  },
]

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.post('/login', (req, res) => {
  // some code to authenticate the user here
  const userName = req.body.userName

})

app.listen(3000)
