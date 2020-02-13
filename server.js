const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var jwt = require('jsonwebtoken');
var model = require('./models')
var signup = require('./controllers/signup')
var signin = require('./controllers/signin')
const path = require('path')
var multer = require('multer')


app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'))

var storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: function(req, file,cb) {
        console.log(file)
        cb(null,`IMAGE-${Date.now()}${path.extname(file.originalname)}`)
    }
})
var upload = multer({
    storage:storage
    // limits: {fileSize: '1000000'}
})

app.post('/backend/profile', upload.single('profile'), (req, res) => {
    // console.log(req)
    try{
        res.send(req.file);
    }
    catch(err) {
        res.send(400)
    }
})
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.post('/backend/signup', function (req, res) {
    signup.signup(req,res, model)
})
app.put('/backend/signin', function (req, res) {
    signin.handleSignIn(req,res,model)
})

app.get('/backend/clothing', async function(req, res) {
    console.log("12")
    let result=await model.clothing.findAll({
        include:[
            {model:model.gender},
            {model:model.clothingType}
        ]
    })
    res.send(result)
})
app.get('/backend/watch',async function(req,res) {

let watch = await model.watches.findAll({
    include:[
        {model:model.gender},
        {model:model.watchType}
    ]
})
res.send(watch)
})
app.post('/backend/check', function(req,res) {
    const {token} = req.body
    jwt.verify(token, 'user', function(err, decoded) {
        if(decoded) {
            console.log(decoded)
            res.json({"res":"Correct", "data": decoded})
        }
        else {
            res.json(err)
        }
    })
})
app.post('/backend/role', function(req, res) {
    const {token} = req.body
    jwt.verify(token, 'user', function(err,decoded) {
        if(decoded) {
            res.send(decoded)
        }
    })
})
app.get('/backend/ctype', function(req,res) {
    model.clothingType.findAll({
        attributes: ['id','typename']
    }).then(data=>
        res.json(data)
        )
})
app.get('/backend/wtype', function(req, res) {
    model.watchType.findAll({
        attributes: ['id','typename']
    }).then(data => 
        res.json(data))
})
app.get('/backend/gender', function(req, res) {
    model.gender.findAll({
        attributes: ['id', 'type']
    }).then(data =>
        res.json(data))
})
app.post('/backend/submit', function(req,res) {
    console.log(req.body)
    const {gender, type, stype, name, description, price} = req.body.value
    const {file} = req.body
    console.log(type)
    if(type === "Clothing") {
        console.log("1234")
        model.clothing.create({
            clothingTypeId: stype,
            name: name,
            price: price,
            description: description,
            image: file,
            genderId: gender
        }
        )
        .then(console.log("clothing"))
    }
    else {
        console.log("321")
        model.watches.create({
            watchTypeId: stype,
            name: name,
            price: price,
            description: description,
            image: file,
            genderId: gender
        })
        .then(console.log("watches"))
    }
})

app.get('/backend/getClothing', function(req,res) {
    model.clothing.findAll({
        include:[
            {model:model.gender},
            {model:model.clothingType}
        ]
    }).then(data=> res.json(data))
})
app.get('/backend/getWatches', function(req, res) {
    model.watches.findAll({
        include:[
            {model:model.gender},
            {model:model.watchType}
        ]
    }).then(data=> res.json(data))
})
app.post('/backend/fav', function(req,res) {
    const {id, name,image, price} = req.body.fav
    const user = req.body.id
    console.log(req.body.fav, name, image, price, user)
    model.favourites.create({
        fid: id,
        image: image,
        name: name,
        price: price,
        userId: user
    }).then(console.log("Success"))
})

app.get('/backend/getfav/:id', function(req,res) {
    const id = req.params.id
    console.log(id,"dyuch")
    model.favourites.findAll({
        where:{'userId': id},
        attributes: ['fid', 'name', 'price', 'image'],
        group: ['fid', 'name', 'price', 'image']
    }).then(data=> res.json(data))
    
})

app.listen(3001)