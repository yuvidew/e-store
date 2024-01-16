const cors = require('cors')
const expres = require('express')
const bodyParser = require('body-parser')
const list = require('./Registration')
const proList = require('./StoreApi')
const path = require('path')
const { default: mongoose } = require('mongoose')
const Jwt = require('jsonwebtoken')
const multer  = require('multer')


const app = expres()
const port = process.env.PORT || 2000

/**this is the token key  */
const jwtkey = 'e-store.com108'

// olVOWnkoMOAaBelC

mongoose.connect('mongodb+srv://yd00102:olVOWnkoMOAaBelC@cluster0.qy14jfo.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('mongoDB contected'))
.catch((err) => console.log(err))

/**this is the middilware */

app.use(cors({credentials:true,origin:'http://localhost:5173' }))
app.use(expres.json())
app.use(bodyParser.json())
app.use('/uploads' , expres.static(__dirname + 'uploads'))
app.use(expres.urlencoded({extended : false}))


// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../src/uploads'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname)); // Unique file name (timestamp + original name)
    },
});

// Initialize Multer with configuration
const upload = multer({ storage: storage });


/**this api is for post user informathin */

app.post('/sign/api' , async (req , res) => {
    const {Name , EmailId , Possword} = req.body
    const user = await list.create({
        Name : Name,
        EmailId : EmailId,
        Possword : Possword,
    })

    if(user){
        Jwt.sign({user} , jwtkey , (err , token) => {
            if(err){
                res.status(400).send('not exsist')
            }
            res.status(200).send({user , auth : token})
        })
    }

})

/**this api is handal user logion information */

app.post('/login/api' , async (req , res) => {
    const {EmailId } = req.body
    try{
        const user = await list.find({EmailId : EmailId})
        if(user){
            console.log(user)
            Jwt.sign({user} ,jwtkey , (err , token) => {
                if(err){
                    res.status(400).send('not exsist')
                }
                res.status(200).send({user , auth : token})
            })
        }
    }catch(err){
        res.status(400).json(err)
        console.log(err)
    }
})

/**this api for add the product data  */

app.post('/api/store/product' , upload.single('image'), async (req , res) => {
    const {title , brand , newPrice , oldPrice , dis} = req.body
    const {filename , path} = req.file
    try {
        const newPro = new proList({
            title : title,
            brand : brand,
            newPrice : newPrice,
            oldPrice : oldPrice,
            ImagePath : path,
            ImageName : filename,
            discription : dis
        })

        const saved = await newPro.save()
        if(saved) res.json('ok')
        console.log(newPro);
    } catch (error) {
        res.json(error)
    }
})

app.get('/api/product' , async(req , res) => {
    const userInfoData = await proList.find({})
    res.json(userInfoData)
})

/**this api is get api   */

app.get('/get/api' , async (req , res) =>{
    const userInfoData = await list.find({})
    res.json(userInfoData)
})

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`)
})
