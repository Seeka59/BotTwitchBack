const { default: mongoose } = require('mongoose');


mongoose.connect(
    "mongodb://localhost:27017/nodeCours",
    {useNewUrlParser: true, useUnifiedTopology:true},
    (err) =>{
        if(!err)console.log("MongoDb Connect");
        else console.log("Connection error :" + err);
    }
)