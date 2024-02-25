const express = require('express')
const actions = require('./model.js')
const path = require('path')


//promise + async
const getMapa = async (req, res) => {
    const mapa = req.query
    const mapas = await actions.actionMapa( mapa.name )
        .then((mapas)=>{
            res.json(mapas.img)
        })
        .catch((err)=>{
            res.json("no existe el mapa")
        })
           
}
//promise + async
const getMapas = async (req, res) => {
    const mapas = await actions.actionMapas()
        .then((mapas)=>{
            console.log(mapas)
            res.json(mapas)
        })
        .catch((err)=>{
            res.json("no se devuelven mapas")
        })
 
}

const sendHtml = async (req, res) => {
    const image = req.query.name;
    const pathFile = '/index/resources/' + image + '.jpg'
    await res.sendFile (path.join(__dirname, pathFile ), function (err) {
        if(err) console.error('ERROR al cargar la foto!!!!!!');
    });
}


module.exports = {
    getMapa,
    sendHtml,
    getMapas
}