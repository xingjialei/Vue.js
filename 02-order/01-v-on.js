window.onload = function(){
	var app4 = new Vue({
		el:'#app4',
		data:{
			message:'Hello Vue.js!'
		},
		methods: {
    		reverseMessage: function () {
    			console.log('click');
      			this.message = this.message.reverse();
    		}
    	}
	})
}