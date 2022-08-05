const mongoose = require("mongoose");

const db = 'mongodb+srv://adityasabde:aditya001@cluster0.zhgi0bu.mongodb.net/padhaiskool';

mongoose.connect(db).then(()=>{
    console.log("database connected.......");
}).catch((e)=>{
    console.log(`something went wrong ${e}`)
});
