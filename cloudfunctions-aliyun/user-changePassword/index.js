'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	var userId = event.userId
	var password = event.password
	var f = checkNull(userId,password)
	if(!f){
		return {
			message:'error',
			result:'参数错误'
		};
	}
	const connect = db.collection('uni-id-users')
	var d = await connect.where({
		'_id':userId
	}).get()
	if(d.data.length == 1 && password == d.data[0].password){
		return {
			message:'error',
			result:'设置的密码不得与之前的一致'
		};
	}
	var s = await connect.doc(userId).update({
		password:password
	})
	return {
		message:'succ',
		result:'修改成功'
	};
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