export default{
	// 验证手机号
	isPhone(phone){
		var reg=/^1[3-9]\d{9}$/;
		if(reg.test(phone)){
			return true;
		}else{
			return false;
		}
	},
	// 非空判断
	checkNull(...objs){
		var flag = true;
		objs.forEach(obj => {
			if(!obj){
				flag = false;
			}
		})
		return flag;
	}
	
	
}