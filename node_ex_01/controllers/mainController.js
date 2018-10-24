//var mainController = ()=> {   //function() {
	
module.exports = (app) => {

	app.get( '/', (req, res)=>{
	
		// res.send('안녕하세요')
		// views 폴더안의 index.ejs 파일을 res에 실어서 보내라
		// 	render method는 index.ejs 파일을 html 코드로 변환해서 
		// 	res에 실어서 보낸다.
		res.render('index')
		
	})
	
	app.get('/login',(req,res)=>{
		res.render('login')
	})
	
	// 클라이언트의 요구를 처리하는 부분
	// app.get으로 시작
	app.get('/write',(req,res)=>{
		res.render('write')
	})
	
	// 입력폼으로 부터 어떤 데이터를 받아서 
	// 처리해야 하는 경우는 app.post로 시작
	app.post('/memo_insert',(req,res)=>{
		
		username = req.body.username
		subject = req.body.subject
		memo = req.body.memo
		
		// 여러줄의 문자열들을 보낼 때 시작부터 끝-1 줄까지는 write를 사용해서 보내고
		// 끝줄은 end를 사용해서 보낸다.
		// res.write('글쓴이:'+username+'<br>')
		// res.write('제목:'+subject+'<br>')
		// res.end('메모:'+memo+'<br>')
		
		res.render('memo_view',{username:username, subject:subject, memo:memo, memobody:req.body})
	})
	
	app.get('/join',(req,res)=>{
		res.render('join_form')
	})
	
	app.get('/users', (req, res)=> {
	
		res.send('반갑습니다')
		
	})
	
	app.get('/test', (req, res)=> {
	
		res.send('테스트는 즐거워')
		
	})

	app.get('/news', (req, res)=> {
	
		// 뉴스를 DB에서 읽어오고 client가 요청한 뉴스를 발췌하고
		// 미리 만들어진 뉴스 폼에 내용을 입히고 res에 실어서 보낸다.
		res.json({news : '오늘의 뉴스'})
		
	})
	
}

//module.exports = mainController