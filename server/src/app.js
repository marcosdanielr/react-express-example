const express = require('express')

const app = express()
const port = 3333
const cors = require('cors')

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/create', async (req, res) => {
  try {
    const { title, description } = req.body

    if (!title || !description) {
      return res.status(406).send('Fill title and description')
    }

    await prisma.food.create({
      data: {
        title,
        description
      }
    })

    res.send('Food created')
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

app.get('/list', async (req, res) => {
  const foods = await prisma.food.findMany()
  res.send(foods)
})

app.listen(port, () => {
  console.log(`HTTP Server Running on port ${port}`)
})
