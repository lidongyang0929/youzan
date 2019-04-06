import './cart_base.css'
import './cart_trade.css'
import './cart.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api'




new Vue({
    el:'.container',
    data:{
        cartLists:null
    },
    computed:{},
    created(){
        this.getLists()
    },
    methods:{
        getLists(){
            axios.get(url.cartLists).then(res=>{
                this.cartLists = res.data.cartList
            })
        }
    }

})