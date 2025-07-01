const express = require('express');
const routes = express.Router();

router.get('/estudiantes', (req, res) =>{
    res.json({msg: 'Consulta estudiante'});
});

router.post('/estudiantes', (req, res) =>{
    res.json({msg: 'Ingreso de estudiantes'});
});

router.put('/estudiantes', (req, res) =>{
    res.json({msg: 'Actualización de estudiantes'});
});

router.delete('/estudiantes', (req, res) =>{
    res.json({msg: 'Borrado de estudiantes'});
});
