const express = require('express')
const actions = require('./model.js')
const path = require('path')

const getMapa = async (req, res) => {
    const mapa = req.query
    const mapas = await actions.actionMapa( mapa.name )
    if(mapas == undefined) res.json("no existe")
    res.json(mapas.img)
}

const getMapas = async (req, res) => {
    const mapas = await actions.actionMapas()
    console.log(mapas)
    res.json(mapas)
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