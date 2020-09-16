'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var content = event.content
	var userId = event.userId
	var f = checkNull(content,userId)
	if(!f){
		return {
			message:'error',
			result:'参数错误'
		};
	}
	const connect = db.collection('feekback')
	connect.add({
		status:0,//已处理
		content:content,
		user_id:userId,
		create_time:new Date().getTime().toString()
	})
	return {
		message:'succ',
		result:'操作成功'
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