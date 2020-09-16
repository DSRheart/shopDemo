'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var pageNo = event.pageNo 
	var pageSize = event.pageSize
	var userId = event.userId
	var f = checkNull(pageNo,pageSize,userId)
	if(!f){
		return {
			message:"error",
			result:"参数错误"
		};
	}
	const connect = db.collection('feekback')
	var s = await connect.where({
		user_id:userId
	})
	.orderBy('create_time','asc')
	.skip(pageSize * (pageNo - 1))
	.limit(pageSize).get()
	return {
		message:"succ",
		result:JSON.stringify(s)
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