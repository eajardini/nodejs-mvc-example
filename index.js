// ** database **
// https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
// https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-postgresql/

// ** ejs**
// https://ejs.co/
//https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/

// ** MVC **
// https://www.codecademy.com/article/mvc-architecture-for-full-stack-app



const express = require('express')
const usuarios = require("./models/usuarios")

const app = express()
const port = 3000

app.set('view engine', 'ejs')



app.get('/', (req, res) => (async() => {
  let user = await usuarios.getUsers();
  console.log("quantidade de rows:", user.length);  
  res.render('pages/index', { user: user[1].name })
})());


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})