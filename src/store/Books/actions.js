import {get,post, del} from '../../api/api'
import {BOOKLIST,BOOKINFO} from './mutation_types'
export default {
	
	getBookList({commit},params) {
		return new Promise((resolve, reject) => {
			get('book/getByPage',params)
	        .then(res => {
	        	commit(BOOKLIST, res);
	            resolve(res);
	        })
	    });
	},
	
	getBook({commit},params) {
		return new Promise((resolve, reject) => {
			get('book/getBookByBookId',params)
	        .then(res => {
	        	commit(BOOKINFO, res);
	            resolve(res);
	        })
	    });
	},
}

