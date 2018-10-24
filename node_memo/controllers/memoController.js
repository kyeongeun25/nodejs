module.exports = (app) =>{
	
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	app.get('./write',(req,res)=>{
		res.render('index',{body:'memo_write'})
	})
	
}