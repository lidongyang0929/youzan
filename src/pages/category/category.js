import 'css/common.css'
import './category.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api'
import foot from 'component/foot'

new Vue({
    el:'#app',
    data:{
    topLists:null,
    goods:null,
    subData:null,
    topIndex:0,
    shops: null,
    keywords: null,
    categoryList:null
    },
    methods:{
        getTopLists(){
            axios.get(url.topList).then(res =>{
               this.topLists = res.data.lists
            })
        },
        getSubLists(index,id){
            this.topIndex = index
            if(index === 0){
                this.getRankLists()
            }else{
            axios.get(url.subLists,{id}).then(res=>{
                this.subData = res.data.data
                 
            })}
        },
        getRankLists(){
            axios.get(url.rankLists).then(res=>{
                this.goods= res.data.data.hotGoods
                this.shops = res.data.data.hotShops
                this.keywords = res.data.data.hotKeywords
            })
        }
        
    },
    created(){
        this.getTopLists()
        this.getSubLists(0)
    },
    components:{
        foot
    }
})