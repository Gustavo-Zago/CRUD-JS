const alunoRoute = require('./alunoRoute');
const path = require('path');
module.exports = (app, express) => {
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true })); 
    app.use(alunoRoute);

}