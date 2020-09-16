'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var phone = event.phone
	var password = event.password
	var f = checkNull(phone,password)
	if(!f){
		return {
			message:'error',
			result:'参数错误'
		};
	}
	const collection = db.collection('uni-id-users');
	var pd = await collection.where({
		phone:phone
	}).get()
	if(pd.data.length == 0){
		return {
			message:'error',
			result:'找不到此用户'
		};
	}else{
		var td = await collection.where({
			phone:phone,
			password:password
		}).get()
		if(td.data.length == 0){
			return {
				message:'error',
				result:'账号密码错误'
			};
		}else{
			//IP地址获取不到
			// const c1 = db.collection('uni-id-log')
			// console.log('userId: ' + td.data[0]._id)
			// console.log('create_time: ' + new Date().getTime().toString())
			// console.log('ip: ' + JSON.stringify(context.Cl))
			// var s = c1.add({
			// 	'user_id':td.data[0]._id,
			// 	'create_time':new Date().getTime().toString(),
			// 	'ip':context.ClientInfo.toString()
			// })
			// console.log('value: ' + JSON.stringify(s))
			return {
				message:'succ',
				result:'操作成功'
			};
		}
	}
	return event
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