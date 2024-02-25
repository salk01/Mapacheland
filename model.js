const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mapaches = require('./index/resources/mapache.json');

app.use(bodyParser.json());



const actionMapa = async (nameFilter) => {
    const mapache = await mapaches.find(y => y.name === nameFilter)
    return mapache
}

const actionMapas = async () => {
    return await mapaches
}

const test = () => {
   console.log("que pasa")
}

const sendImage =  () => {

    
}



module.exports = {
    actionMapa,
    test,
    actionMapas
}