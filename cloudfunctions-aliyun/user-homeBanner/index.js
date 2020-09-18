'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const connect = db.collection('meun')
	var s = await connect.where({
		type:1
	}).get()
	return {
		message:"succ",
		result:s
	}
};
