import {MYORDERLIST} from './mutation_types'
	  
export default {
		[MYORDERLIST](state,data) {
				state.myOrderList = data;
		},
}
