import {BOOKLIST, BOOKINFO,BOOKLISTBYTYPE,HOTBOOK,CHEAPBOOK,NEWBOOK} from './mutation_types'
	  
export default {
		[BOOKLIST](state,data) {
			state.bookList = data;
		},
		[BOOKINFO](state, data) {
			state.bookInfo = data;	
		},
		[BOOKLISTBYTYPE](state, data) {
			state.bookListByType = data;	
		},
		[HOTBOOK](state, data) {
			state.hotBook = data;	
		},
		[CHEAPBOOK](state, data) {
			state.cheapBook = data;	
		},
		[NEWBOOK](state, data) {
			state.newBook = data;	
		}
		
}
