const express = require('express')
const app = express();
const router = express.Router()
const getMapa = require('./controller.js');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/comiendo', (req, res)=>{
    console.log('el mapache esta comiendo')

})

router.get('/index',getMapa.sendHtml )


router.get('/durmiendo', (req, res)=>{
    console.log('el mapache esta durmiendo')

})

router.get('/mapache', getMapa.getMapa)

router.get('/mapache/all', getMapa.getMapas)

module.exports = router
