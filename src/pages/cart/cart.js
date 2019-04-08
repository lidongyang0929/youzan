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
        checked: false,
        total:0
    },
    computed:{
      allSelected(){
              if(this.cartLists){
            return this.cartLists.every(shop=>{
                return shop.checked
            })
          }return false
        },
        selectedLists(){
            let arr = []
            if(this.cartLists){
            this.cartLists.forEach(shop=>{
                shop.goodsList.forEach(good=>{
                    if(good.checked){
                        arr.push(good)
                        this.total += good.price * good.number
                    } 
                })
            })} return
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
                  shop.editing = false
                  shop.editingMsg = '编辑'
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
    },
    edit(shop,shopIndex){
        shop.editing = ! shop.editing
        shop.editingMsg = shop.editing ? '完成':'编辑'
            this.cartLists.forEach((item,index)=>{
               if(shopIndex !== index){
                   item.editing = false
                   item.editingMsg = shop.editing ? '':'编辑'
               }
            })
        
    },
    reduce(good){
        if(good.number===1) return
        axios.post(url.cartReduce,{
            id:good.id,
            number:1
        }).then(res=>{
            good.number --
        })
    },
    add(good){
        axios.post(url.addCart,{
            id:good.id,
            number:1
        }).then(res=>{
            good.number ++
        })
    },
    



}
    

})