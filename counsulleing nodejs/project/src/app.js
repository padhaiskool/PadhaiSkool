const express = require("express");
require("./conn/conn");
const model = require("./models/model")
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
var bodyParser = require("body-parser");
// Access-Control-Allow-Origin: *;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const template_path = path.join(__dirname,"../template/views");
const partial_path = path.join(__dirname,"../template/partials");

app.set("view engine","hbs");
app.set("views",template_path);
app.set("partials",partial_path);

app.use(express.json());
// express.urlencoded({extended:true})

app.get("/",async (req,res)=>{
    const data = await model.find();
    const result = await model.find();
    res.render("college",{data:result});
})



app.post("/", async (req,res)=>{
    try{
        const v = req.body.percentile;
        const a = await model.find({
            percentile: { $gt: v}});
       
        // console.log(Object.entries(a[0]));


        // console.log(a);
        const data = a.map((num)=>{
            console.log(num._doc.college);
            return num._doc.college
        });
        // data();
        console.log(data);
        if(a.length != 0){
            res.render("college",{data: a.map((num)=>{
               return num._doc.college
            })});
        }else{
            const m = "College Not found";
            res.render("college",{data:m})
        }
        


         
    }catch(e){
         console.log("whats the matter"+e)
    }


})

app.listen(port,(req,res)=>{
      console.log("server connected .......... "+ port)
})