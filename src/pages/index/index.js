import 'css/common.css'
import './index.css'
import Vue from 'vue'
import url from 'js/api'
import axios from 'axios'
import { InfiniteScroll } from 'mint-ui'
import  foot from 'component/foot'

Vue.use(InfiniteScroll);


new Vue({
    el:'#app',
    data:{
        lists:null,
        pageNum: 1,
        pageSize:6,
        loading: false,    
        allLoaded: false
    },
    created(){
      this.getLists() 
    },
    methods:{
        getLists(){
            if(this.allLoaded) return
            this.loading = true     
            axios.get(url.hotLists,{
                pageNum:this.pageNum,
                pageSize: this.pageSize
            }).then((res)=>{
              let curLists = res.data.lists
              if(curLists.length < this.pageSize){ this.allLoaded = true}
              if(this.lists){
              this.lists = this.lists.concat(curLists)
            }else{
                this.lists = res.data.lists
            }
            this.loading = false 
            this.pageNum ++
        })
            
        } 
    },
    components:{
        foot
    }
   

})