const express = require('express');
const app = express();
const Vehiculo = require("../modelo/mvehiculo.js");

app.get('/', function (req, res) {
    res.json({
        'success': true,
        'mensaje' : 'vehiculo encontrado',
        'data': []
      })
  });
  
  app.get('/vehiculo', function (req, res) {
      
    Vehiculo.find({}).exec((err, vehiList)=>{
        if(err){
            return res.status(400).json({
                'success': false,
                'mensaje' : err,
                'data': []
            });
        }
    
     return res.json({
        'success': true,
        'mensaje' : 'listado de vehiculos',
        'data': [vehiList]
      })
  });
});
  
  app.post('/vehiculo/', function (req, res) {
      let datos = req.body;
        let vehiculo = new Vehiculo({
             placa: datos.placa,
             marca: datos.marca,
             valor: datos.valor,
             color: datos.color
        });
        vehiculo.save((err, vehiculodb)=>{
            if(err){
                return res.status(400).json({
                    'success': false,
                    'mensaje' : err,
                    'data': []
                });
            }
        
         return res.json({
            'success': true,
            'mensaje' : 'producto guardado',
            'data': [vehiculodb]
          })
        });
  });
  
  app.get('/vehiculo/:id', function (req, res) {
    let id = req.params.id;
       Vehiculo.findById(id)
       .exec((err, vehiculodetail)=>{
        if(err){
            return res.status(400).json({
                'success': false,
                'mensaje' : err,
                'data': []
            });
        }
    
     return res.json({
        'success': true,
        'mensaje' : 'id',
        'data': [vehiculodetail]
      })
  });
  
});

  app.put('/vehiculo/:id', function (req, res) {
    let id = req.params.id;
    let datos = req.body;
        
        Vehiculo.findByIdAndUpdate(id, datos, {new: true, upsert: true, runValidators: true},(err, vehiculodb)=>{
            if(err){
                return res.status(400).json({
                    'success': false,
                    'mensaje' : err,
                    'data': []
                });
            }
        
         return res.json({
            'success': true,
            'mensaje' : 'vehiculo actualizado',
            'data': [vehiculodb]
          })
        });
});

app.delete('/vehiculo/:id', function (req, res) {
    let id = req.params.id;
    let datos = req.body;
        
        Vehiculo.findByIdAndDelete(id, datos,(err, vehiculodb)=>{
            if(err){
                return res.status(400).json({
                    'success': false,
                    'mensaje' : err,
                    'data': []
                });
            }
        
         return res.json({
            'success': true,
            'mensaje' : 'vehiculo eliminado',
            'data': [vehiculodb]
          })
        });
});



module.exports =app;