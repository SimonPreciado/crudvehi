const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let vehiculoSchema = new Schema({
    placa: {
        type: String,
        //require :  true
        require : [true, "el nombre del producto es obligatorio"]
        //default : 'Sin nombre'
    }, 
    marca:{
        type: String,
        require :[true, "la marca es obligatoria"]
    }, 
    valor:{
        type: Number,
        require: [true, "el valor es obligatorio"]
    },
    color:{
        type: String,
        require: false,
        default: "sin descripcion"
    }
});

module.exports = mongoose.model("Vehiculo", vehiculoSchema);