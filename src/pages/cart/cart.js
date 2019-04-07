import './cart_base.css'
import './cart_trade.css'
import './cart.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api'




new Vue({
    el:'.container',
    data:{
        cartLists:null,
        checked: false
    },
    computed:{
      allSelected:{
          get(){
              if(this.cartLists){
            return this.cartLists.every(shop=>{
                return shop.checked
            })
          }return false
        },
      }
    },
    created(){
        this.getLists()
    },
    methods:{
        getLists(){
            axios.get(url.cartLists).then(res=>{
              let lists = res.data.cartList
              lists.forEach(shop=>{
                  shop.checked = false
                  shop.goodsList.forEach(good=>{
                      good.checked = false
                  })
              })
              this.cartLists = lists
            })
        },
        selectGood(good,shop){
            good.checked = ! good.checked
            shop.checked = shop.goodsList.every(good=>{
                return good.checked
            })
        },
        selectShop(shop){
            shop.checked = !shop.checked
            shop.goodsList.forEach(good=>{
                good.checked = shop.checked
            })
        },
        selectAll(){
            if(this.cartLists){
            this.cartLists.forEach(shop=>{
                this.selectShop(shop)
            })
        }
       
    },}
    

})