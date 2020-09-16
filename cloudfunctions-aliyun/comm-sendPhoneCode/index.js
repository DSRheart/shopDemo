'use strict';
// const db = uniCloud.database()
exports.main = async (event, context) => {
	var phone = event.phone
	var f = checkNull(phone)
	if(!f){
		return {
			message:'error',
			result:'参数错误'
		};
	}
	var code = "";
	for(var i = 1;i <= 6;i++){
		const num = Math.floor(Math.random()*10);
		code += num;
	}
	// const connect = db.collection('opendb-sms')
	// var s = connect.add({
	// 	code:code,
	// 	phone:phone,
	// 	crateTime: new Date().getTime().toString()
	// })
	// console.log('value: ' + JSON.stringify(s))
	// if(!s.id){
	// 	return {
	// 		message:'error',
	// 		result:'发送失败'
	// 	};
	// }else{
	// 	return {
	// 		message:'succ',
	// 		result:'发送成功'
	// 	};
	// }
	return {
		message:'succ',
		result:code
	};
};

function getRadomStr(){
	var len = length || 32
	var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	var maxLen = $chars.length;
	var str = '';
	for(var i = 0; i < len; i++){
		str += $chars.charAt(Math.floor(Math.random() * maxLen));
	}
	return str;
}
function checkNull(...objs){
	var flag = true;
	objs.forEach(obj => {
		if(!obj){
			flag = false;
		}
	})
	return flag;
}
