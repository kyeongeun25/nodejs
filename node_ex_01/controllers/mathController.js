module.exports = (app)=>{
	
	// localhost:3000/add의 요청을 받는 곳
	app.get('/add',(req,res)=>{
		// res.send('덧셈은 숫자값을 보내야 합니다')
		res.render('add')
	})
	
	app.post('/add', (req,res)=>{
		let num1 = parseInt(req.body.num1)
		let num2 = parseInt(req.body.num2)
		let sum = num1 + num2
		
		res.render('add_view',{
			num1 : num1,
			num2 : num2,
			sum : sum
		})
	})
	
	// localhost:3000/add/30의 요청을 받는 곳
	app.get('/add/:num1',(req,res)=>{
		
		// 일반적으로 변수는 별도의 선언하지 않아도 사용이 가능하나
		// 선언하지 않고 사용하면 그 변수는 public이 된다.
		
		// let 키워드는 js에서 특별히 변수를 private로 사용하고자 할 때
		// 사용하는 키워드이다.
		let num1 = req.params.num1
		
		res.send('num1='+num1+' 숫자는 2개를 보내야 함')
		
	})
	
	app.get('/add/:num1/:num2', (req,res)=>{
	
		sum = parseInt(req.params.num1)
		sum += parseInt(req.params.num2)
		
		res.render('add_view',{
			num1 : req.params.num1,
			num2 : req.params.num2,
			sum : sum
		})
		
	})
	
	
}