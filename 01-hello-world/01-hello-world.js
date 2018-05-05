//通过script引入，vue是全局变量
window.onload = function(){
	var dataList = {
		classValue: 'app',
		innerText: 'Hello World'
	}
	new Vue({
		el: 'div',
		data: dataList
	})
}