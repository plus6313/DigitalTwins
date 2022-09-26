let express=require('express');
let cors = require('cors')
let greenArea=require("./apis/greenArea.js");
let port = process.env.PORT || 3000;


let app=express();
app.use(cors());
app.use("/api/",greenArea);
app.get('/', function (req, res) {
    res.send('Hello')
})

app.listen(3000,(err)=>{
	if(err){
		console.log("init server error",err);
	}else{
		console.log("listen on PORT",port);
	}
});