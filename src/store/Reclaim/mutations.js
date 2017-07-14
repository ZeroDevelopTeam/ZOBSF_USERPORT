import {
	MYRETRIEVELIST,
} from './mutation_types'
	  
export default {
	[MYRETRIEVELIST](state, data) {
        state.myRetrieveList= data;
   },
}
