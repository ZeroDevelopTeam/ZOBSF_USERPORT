import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
//初始化状态
const state = {
	myRetrieveList: [],//分页获取wide回收单数据
}
export default {
    state,
    getters,
    actions,
    mutations
}