'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const connect = db.collection('meun')
	var s = await connect.where({
		type:2
	}).get()
	return {
		message:"succ",
		result:JSON.stringify(s)
	}

};
