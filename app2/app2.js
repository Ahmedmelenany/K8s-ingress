const express = require('express')
const app = express()
const port = 3000
 
app.get('/features', (req, res) => {
    res.send('Hello from new features')
  })
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
