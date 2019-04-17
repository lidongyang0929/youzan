import Vuex from 'vuex'
import Vue from 'vue'
import Address from 'js/addressService'

Vue.use(Vuex)


const store = new Vuex.Store({
   state:{
       lists: null
   },
   mutations:{
       init(state,lists){
           state.lists = lists
       }
   },
   actions:{
       getLists({commit}){
           Address.list().then(res=>{
               commit('init',res.data.lists)
           })
       }
   }
   
})

export default store