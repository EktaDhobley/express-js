const express = require('express')
const app = express() //set up out entire server

app.use(express.static("public"))
app.use(express.urlencoded({extended: true})) //allows us to access info coming from forms
app.use(express.json())

app.set('view engine', 'ejs')


// app.get('/users', (req,res) => {
//     res.send('User List')
// })
// app.get('/users/new', (req,res) => {
//     res.send('User New Form')
// })

const userRouter = require('./routes/users')
app.use('/users', userRouter)




app.listen(3000) //our server is listening 3000

