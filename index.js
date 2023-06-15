// ** database **
// https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
// https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-postgresql/

// ** ejs**
// https://ejs.co/
//https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/

// ** MVC **
// https://www.codecademy.com/article/mvc-architecture-for-full-stack-app

// ** Requisição de html
// https://medium.com/swlh/read-html-form-data-using-get-and-post-method-in-node-js-8d2c7880adbf



const express = require('express')
const bodyParser = require('body-parser')
//const usuarios = require("./models/usuarios")
const ctlUsuarios = require("./controllers/ctlusuarios")

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use( bodyParser.urlencoded({ extended: false, })
)



app.get('/', ctlUsuarios.getAllUser);
app.post('/updateUser', ctlUsuarios.updateUser);


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})