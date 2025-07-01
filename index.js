const express = require ('express');
const app = express();

//verbos de APIs Rest Full GET, PUT, PUSH, DELETE
app.get('/', (req, res) =>{
    res.send('hola mundo');
})

app.listen(6500,() => {
    console.log('servidor activo');
});