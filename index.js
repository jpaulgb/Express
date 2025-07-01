const express = require ('express');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');

//verbos de APIs Rest Full GET, PUT, PUSH, DELETE
app.get('/', (req, res) =>{
    res.send('hola mundo');
})

app.use("/estudiantes", estudiantesRoutes);

app.listen(6500,() => {
    console.log('servidor activo');
});