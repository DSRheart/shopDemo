'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var name = '用户' + event.phone.substring(7,11)
	var phone = event.phone
	var password = event.password
	var avatar = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-zservice/9ff9c580-f40d-11ea-8ff1-d5dcf8779628.png'
	var flag = checkNull(name,phone,password)
	if(!flag){
		return {
			message:'error',
			result:'参数错误'
		};
	}
	const collection = db.collection('uni-id-users');
	var d = await collection.where({
		phone:phone
	}).get()
	if(d.data.length == 0){
		var count = await collection.add({
			name:name,
			phone:phone,
			password:password,
			avatar:avatar
		});
		if(!count.id){
			return {
				message:'error',
				result:'操作失败'
			};
		}else{
			return {
				message:'succ',
				result:'注册成功'
			};
		}
	}else{
		return {
			message:'error',
			result:'手机号码已经被注册'
		};
	}
};

function checkNull(...objs){
	var flag = true;
	objs.forEach(obj => {
		if(!obj){
			flag = false;
		}
	})
	return flag;
}