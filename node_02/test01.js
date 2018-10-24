console.log('대한민국만세')
console.log(3+4)

var a=3 // 변수를 선언한 곳이다라는 표시일 뿐 
var b=4
console.log(a+b)

f = function(){
	return 3 + 4
}

f()

console.log(f())

f = function(a,b){
	return a+b
}

b = f(3,4)
console.log(b)

f = (a,b)=>{return a+b}
f = (a,b)=> a + b

console.log(f(3,4))


f = (a) => {return a}
f = a=>a

console.log(f(3))

f = function(a,b){
	return a + b
}

b = function(f) {
	return f(3,4)
}

console.log(b(f))

sum = 0
for(i = 0 ; i <= 10 ; i++){
	sum+=i
}
console.log(sum)

arr = [3,4,5,61,2,3,1,2,31,2,31,2,3]
for(i=0;i<arr.length;i++){
	console.log(arr[i])
}

// js의 가장 큰 특징, Callback 함수
arr.forEach( function(item){
	console.log(item)
})

f = function(item){
	console.log(item)
}
f('대한민국')

arr.forEach(f)
arr.forEach((item)=>{
	console.log(item)
})