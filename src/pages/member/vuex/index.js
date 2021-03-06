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
       },
       add(state,instance){
           state.lists.push(instance)
       },
       remove(state,id){
           let index = state.lists.findIndex(item=>{
               return item.id === id
           })
           state.lists.splice(index,1)
       },
       update(state,instance){
          let index = state.lists.findIndex(item=>{
              return item.id = instance.id
          })
          state.lists[index] = instance
       }
   },
   actions:{
       getLists({commit}){
           Address.list().then(res=>{
            commit('init',res.data.lists)
           })
       },
       addAction({commit},instance){
          commit('add',instance)
         
       },
       removeAction({commit},id){
           commit('remove',id)
       },
       updateAction({commit},instance){
           commit('update',instance)
       }
   }
   
})

export default store