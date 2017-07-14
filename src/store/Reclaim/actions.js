import {get,post, del} from '../../api/api'
import {MYRETRIEVELIST} from './mutation_types'

export default {
    //分页获取回我的收单
    getMyRetrieveList: ({commit}, params)=> {
    	return new Promise((resolve, reject) => {
			get('retrieve/getRetrieveByUserCode',params)
	        .then(res => {
	        	commit(MYRETRIEVELIST,res);
	            resolve(res);
	        })
	    }); 
    },
}

