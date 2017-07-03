import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import shopping from './Shopping';
import books from './Books';
import bookTypes from './BookTypes';
import user from './User';

export default new Vuex.Store({
    modules: {
        shopping,
        books,
        bookTypes,
        user
    }
});