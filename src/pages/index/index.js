import 'css/common.css'
import './index.css'
import Vue from 'vue'
import url from 'js/api'
import axios from 'axios'


new Vue({
    el:'#app',
    data:{
        lists:null,
    },
    created(){
        axios.get(url.hotLists,{
            pageNum:1,
            pageSize: 5
        }).then((res)=>{
          this.lists = res.data.lists
        })
    }

})