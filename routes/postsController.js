const express = require('express');
const router = express.Router();
const ObjectID =require('mongoose').Types.ObjectId;

const {PostsModel} = require('../models/postsModel');
const {PostsModelP} = require('../models/postsPlantesModels');
const {PostsModelMeteo} = require('../models/postsMeteo');
const {PostsModelTwitchUsers} = require('../models/postsTwitchUsers');
const {PostsModelQrTwitch} = require('../models/postsQrTwitch');

router.get('/', (req, res) =>{
   PostsModel.find((err,docs) => {
    if(!err) res.send(docs);
    else console.log("Error to get data :" + err);
    }) 
});
router.post('/',(req,res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });
    newRecord.save((err,docs) => {
        if(!err) res.send(docs);
        else console.log('Error creating new data' + err );
    })
})

router.put("/:id",(req,res) => {

    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow :" + req.params.id);

    const updateRecord ={
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,  
        {$set: updateRecord},
        {new: true},
        (err, docs) =>{
            if(!err) res.send(docs);
            else console.log("Update Error");
        }
    )
});

router.delete("/:id", (req,res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("id Unknow :" + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Delete Error : " + err);
        })
});


// CHETO EuD Verdure ... get posts put

router.get('/plantes',(req,res) =>{
    PostsModelP.find((err,docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :" + err);
        }) 
});

router.post('/plantes',(req,res) => {
    const newRecord =new PostsModelP({
    author: req.body.author,
    categorie: req.body.categorie,
    type: req.body.type,
    nom: req.body.nom,
    tdp: req.body.tdp,
    climasMin: req.body.climasMin,
    climasMax: req.body.climasMax,
    hydratation: req.body.hydratation,
    jrsArrosage: req.body.jrsArrosage,
    });
    newRecord.save((err,docs) => {
        if(!err) res.send(docs);
        else console.log('Error creating new data' + err );
    })
})

router.put("/plantes/:id",(req,res) => {

    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow :" + req.params.id);

    const updateRecord ={
    author: req.body.author,
    categorie: req.body.categorie,
    type: req.body.type,
    nom: req.body.nom,
    tdp: req.body.tdp,
    climasMin: req.body.climasMin,
    climasMax: req.body.climasMax,
    hydratation: req.body.hydratation,
    jrsArrosage: req.body.jrsArrosage
    };

    PostsModelP.findByIdAndUpdate(
        req.params.id,  
        {$set: updateRecord},
        {new: true},
        (err, docs) =>{
            if(!err) res.send(docs);
            else console.log("Update Error");
        }
    )
});

// C l'router Twitch ma geule GET POST PUT ! DEFINE A La Racine(posts/EulBazard)//

router.get('/twitchUsers', (req,res) =>{
    PostsModelTwitchUsers.find((err,docs) => {
        if(!err)res.send(docs);
        else console.log("Error to get data :" + err)
    })
})

router.post('/twitchUsers' , (req,res) => {
    const newModel = new PostsModelTwitchUsers({
        channel: req.body.channel,
        serveur: req.body.serveur,
        author: req.body.author,
        nbrCo: req.body.nbrCo,
        nbrMsg: req.body.nbrMsg,
        points: req.body.points
    });
    newModel.save((err,docs) => {
        if(!err)res.send(docs);
        else console.log('Error creating new data' +err);
    })
})

router.put("/twitch/:id",(req,res) => {

    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow :" + req.params.id);
    
    const updateRecord ={
        channel: req.body.channel,
        serveur: req.body.serveur,
        author: req.body.author,
        nbrCo: req.body.nbrCo,
        nbrMsg: req.body.nbrMsg,
        points: req.body.points
    };

    PostsModelTwitchUsers.findByIdAndUpdate(
        req.params.id,  
        {$set: updateRecord},
        {new: true},
        (err, docs) =>{
            if(!err) res.send(docs);
            else console.log("Update Error");
        }
    )
});

// Eul QR Code ICHI

router.get("/qrTwitch",(req,res) => {
    PostsModelQrTwitch.find((err,docs) => {
        if(!err)res.send(docs)
        else console.log('error creating new data' + err)
    })
})

router.post('/qrTwitch',(req,res) => {
    const newRecord = new PostsModelQrTwitch({
        author: req.body.author,
        question: req.body.question,
        solution: req.body.solution
    });
    newRecord.save((err,docs) => {
        if(!err) res.send(docs);
        else console.log('error' + err);
    })
})

router.put("twitch/:id",(req,res) => {

    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow :" + req.params.id);
    const updateRecord ={
        author: req.body.author,
        question: req.body.question,
        solution: req.body.solution
    };

    PostsModelQrTwitch.findByIdAndUpdate(
        req.params.id,  
        {$set: updateRecord},
        {new: true},
        (err, docs) =>{
            if(!err) res.send(docs);
            else console.log("Update Error");
        }
    )
});


// Meteo Fetch // 

router.get("/meteo",(req,res) => {
    PostsModelMeteo.find((err,docs) => {
        if(!err)res.send(docs)
        else console.log('error creating new data' + err)
    })
})

router.post('/meteo' , (req,res) => {
    const newModel = new PostsModelMeteo({
        author: req.body.author,
        ville: req.body.ville,
        temperature: req.body.temperature,
        humiditer: req.body.humiditer,
        pression: req.body.pression,
        visibiliter: req.body.visibiliter,
        vent: req.body.vent
    });
    newModel.save((err,docs) => {
        if(!err)res.send(docs);
        else console.log('Error creating new data' +err);
    })
})


module.exports = router;
