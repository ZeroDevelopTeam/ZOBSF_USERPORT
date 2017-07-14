import {get, post, del} from '../../api/api'
import {MYORDERLIST} from './mutation_types'
export default {
	//新增订单
	addOrder({commit},params) {
		return new Promise((resolve, reject) => {
			post('order/addOrder',params)
	        .then(res => {
	            resolve(res);
	        })
	    });
	},
	
	//根据用户id,订单分类获取订单号（我的订单）
	getMyOrderList({commit},params) {
		return new Promise((resolve, reject) => {
			get('order/getAllByUserCodeAndState',params)
	        .then(res => {
	        	commit(MYORDERLIST, res);
	            resolve(res);
	        })
	    });
	
	},
}

