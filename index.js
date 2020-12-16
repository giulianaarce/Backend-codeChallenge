const CONNECTION_STRING = 'mongodb+srv://clasemongo:Guayerd@cluster0.jnrhw.mongodb.net/guayerd-challenge?retryWrites=true&w=majority';
const PORT = '4200'; 
const mongoose = require('mongoose');
const cors = require("cors");
const morgan = require('morgan');
const Show = require('./Models/Show');
const Search = require('./Models/Search');

//Importar express
const express = require('express');
const fetch = require('node-fetch');

//Instanciar app express
const app = express();

//////////////////// Aplico Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("short"));


//Get 
// app.get('/search/shows/:show', function(req, res){
//     const show = req.params.show[0];
//     `${Show}`.find({show: show})
//     .then((showFinded) => {
//         console.log({ "Show": productoFinded })
//         if(showFinded) return res.status(200).send({showFinded:showFinded})
//         res.status(404).send({error:"Show Not Found"});
//     }).catch(function(err){
//         res.status(500).send({error:err});
//     }) 
// })

app.get('/search/shows/:show', function(req, res){
    const SHOW = req.params.show;
    console.log(SHOW);
    fetch("http://api.tvmaze.com/singlesearch/shows?q=" + encodeURI(SHOW))
    .then(res => { return res.json(); })
    .then(json => { console.log(json.name);
        if(json) return res.status(200).send(json)
        res.status(404).send({error:"Show Not Found"});
    }).catch(function(err){
        res.status(500).send({error:err});
    }) 
})

//Registro de petición del front
app.post('/peticion',function(req,res){
    let search = new Search({
        fecha:req.body.fecha,
        textoBusqueda:req.body.textoBusqueda,
        ip:req.body.ip
    })
    
    //busqueda save 
    search.save().then(function(searchSaved){
        res.status(201).send({search:searchSaved});
    }).catch(function(err){
        res.status(500).send({error:"Error al intentar guardar busqueda"});
    })
})


//Levantar la applicacion luego de realizar la conexion de mongoose a Atlas.

mongoose.connect(CONNECTION_STRING,function(err){
    if(err){
        console.error(err.message)
    }else{
        console.log("Conexion establecida");
        app.listen(PORT,function(){
            console.log("Server Express Listening");
        });
    }
})