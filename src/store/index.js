import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        isLoading:true
    },
    mutations:{// 修改vuex要使用mutations
       updatedIsLoading(state,loading){
            state.isLoading = loading;
       }
    }
})
export default store;