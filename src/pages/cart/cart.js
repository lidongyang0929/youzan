import './cart_base.css'
import './cart_trade.css'
import './cart.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api'
import foot from 'components/foot'
import { runInThisContext } from 'vm';




new Vue({
    el:'.container',
    data:{
        cartLists:null,
        checked: false,
        total:0,
        editingShop:null,
        editingShopIndex: -1,
        removeChecked:false,
        allRemoveChecked: false,
        editing: false,
        editingMsg:'编辑'
    },
    computed:{
      allSelected:{
          get(){
            if(this.cartLists){
                return this.cartLists.every(shop=>{
                    return shop.checked
                })
              } return false
          },
            set(newVal){
               this.cartLists.forEach(shop=>{
                   shop.checked = newVal
                   shop.goodsList.forEach(good=>{
                       good.checked = newVal
                   })
               })
            }   
        },
        selectedLists(){
            let arr = []
            let total = 0
            if(this.cartLists){
            this.cartLists.forEach(shop=>{
                shop.goodsList.forEach(good=>{
                    if(good.checked){
                        arr.push(good)
                        total += good.price * good.number
                    } 
                })
            })
            this.total = total
            return arr
        } return []   
        },
        removeLists(){
            if(this.editing){
              let arr = []
              this.cartLists.forEach(shop=>{
                  shop.goodsList.forEach(good=>{
                      if(good.removeChecked){
                          arr.push(good)
                      }
                  })
              })
            return arr
        } return []
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
                  shop.removeChecked = false
                  shop.goodsList.forEach(good=>{
                      good.checked = false
                      good.removeChecked = false
                  })
              })
              this.cartLists = lists
            })
        },
        edit(){
            this.editing= !this.editing
            this.editingMsg = this.editing? '完成':'编辑'
         },
        selectGood(good,shop){
            let attr = this.editing? 'removeChecked':'checked'
            good[attr]=!good[attr]
            shop[attr] = shop.goodsList.every(good=>{
                return good[attr]
            })
        },
        selectShop(shop){
            let attr = this.editing?'removeChecked':'checked'
            shop[attr] = !shop[attr]
            shop.goodsList.forEach(good=>{
                good[attr]= shop[attr]
            })
        },
        selectAll(){
           if(this.cartLists){
           this.allSelected = !this.allSelected }
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
    }
   
    
},
components:{
    foot
}
    

})