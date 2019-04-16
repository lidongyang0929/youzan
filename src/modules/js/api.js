let url = {
    hotLists:'/index/hotLists',
    banner:'/index/banner',
    topList:'/category/topList',
    rankLists:'/category/rank',
    subLists:'/category/subList',
    details:'/goods/details',
    deal:'/goods/deal',
    addCart:'/cart/add',
    cartLists:'/cart/list',
    cartReduce:'/cart/reduce',
    cartRemove:'/cart/remove',
    cartMremove:'/cart/mrremove',
    addressLists:'/address/list',
    addressAdd:'/address/add',
    addressRemove:'/address/remove',
    addressUpdate:'/address/update',
    addressSetDefault:'/address/setDefault'

}
let host = 'https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan'


for(let key in url){
    url[key] = host + url[key]
}
export default url