'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var userId = event.userId
	var phone = event.phone
	var f = checkNull(userId,phone)
	if(!f){
		return {
			message:'error',
			result:'参数错误'
		};
	}
	const connect = db.collection('uni-id-users')
	var s = await connect.doc(userId).update({
		phone:phone
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