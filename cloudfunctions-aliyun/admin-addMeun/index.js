'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var type = event.type
	var name = event.name
	var status = event.status
	var img = event.img
	var f = checkNull(type,name,status,img)
	if(!f){
		return {
			"message":"error",
			"result":"参数错误"
		};
	}
	const c = db.collection('meun')
	var s = await c.add({
		type:type,
		name:name,
		img:img,
		status: status || 1
	})
	return {
		"message":"succ",
		"result":"添加成功"
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