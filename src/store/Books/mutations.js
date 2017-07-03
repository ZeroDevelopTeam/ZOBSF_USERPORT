import {BOOKLIST, BOOKINFO} from './mutation_types'
	  
export default {
		[BOOKLIST](state,data) {
			state.bookList = data;
		},
		[BOOKINFO](state, data) {
			state.bookDataById = data;	
		}
}
