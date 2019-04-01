let url = {
    hotLists:'/index/hotLists',
    banner:'/index/banner',
    topList:'/category/topList',
    rankLists:'/category/rank',
    subLists:'/category/subList'
}
let host = 'http://rap2api.taobao.org/app/mock/7058'

for(let key in url){
    url[key] = host + url[key]
}
export default url