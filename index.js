// const express = require('express');
// require('dotenv').config()
// const sequelize = require('./db');
// const swaggerUI = require('swagger-ui-express')
//
// const Swagger = require('./swagger/swagger')
// const models = require('./database/Database')
// const bodyParser = require("body-parser");
// const session = require("express-session");
// const errorHandler = require('./middleware/ErrorHandlingMiddleware')
// const PORT = process.env.PORT;
// const cors = require('cors')
// const fileUpload = require('express-fileupload')
// const mongo = require('./mongo/Mongo')
//
// const router = require('./loader/Routing')
//
// router.use(bodyParser.json());
//
// const app = express();
// app.use(cors())
// app.use(express.json())
// app.use(fileUpload({}))
//
// app.use('/api', swaggerUI.serve, Swagger)
// app.use(router);
//
// //Обработка ошибок
// app.use(errorHandler)
//
// app.listen(PORT, async () => {
//     try{
//         await sequelize.authenticate()
//         await sequelize.sync()
//     }catch (e){
//         console.log(e);
//     }
//     console.log('Server started on port ' + PORT)
// });




const express = require('express');
require('dotenv').config()
const asyncRouter = require('async-express-router')
const mongo = require('./mongo/Mongo')
const loader = require('./loader')
const sequelize = require('./db');

const PORT = process.env.PORT;

const app = express()
asyncRouter(app);

app.use(loader);
app.use(express.json())

app.listen(PORT, async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
    }catch (e){
        console.log(e);
    }
    console.log('Server started on port ' + PORT)
});