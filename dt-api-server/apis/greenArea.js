let express=require('express');
let greenArea=express.Router();

greenArea.get("/rice/greenArea/:farmId",(req,res)=>{
	
	let farmId=req.params.farmId;
	let time=req.query.t;
	let n=req.query.n;
	console.log("get greenArea",farmId,time,n);
	//query from db to get greenArea,暫時先隨機製造一組數據
	if(time && n){
		res.send({
			"success":true,
			"data":Math.random()
		});
	}else{
		res.send({
			"success":false,
			"data":"time or n can't be null"
		});
	}
	
	
});

module.exports= greenArea;	
  	