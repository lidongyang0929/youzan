webpackJsonp([4],{10:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,i){return n("li",{class:{active:i===t.curIndex},on:{click:function(n){return t.changeNav(e,i)}}},[n("a",[n("i",{class:e.icon}),n("div",[t._v(t._s(e.name))])])])}),0)])},c=[],s={render:i,staticRenderFns:c};e.a=s},2:function(t,e,n){"use strict";var i=n(15),c=n.n(i),s=[{name:"首页",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.a={data:function(){return{navConfig:s,curIndex:parseInt(c.a.parse(location.search.substr(1)).index)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}},4:function(t,e,n){"use strict";var i={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",rankLists:"/category/rank",subLists:"/category/subList",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var c in i)i[c]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+i[c];e.a=i},65:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(66),c=(n.n(i),n(68)),s=(n.n(c),n(69)),o=(n.n(s),n(14)),r=n.n(o),a=n(6),d=n(4),u=n(8),f=n(92);n.n(f);new a.default({el:".container",data:{cartLists:null,checked:!1,total:0,editing:!1,editingMsg:"编辑",removePopup:!1},computed:{allSelected:{get:function(){return!!this.cartLists&&this.cartLists.every(function(t){return t.checked})},set:function(t){this.cartLists.forEach(function(e){e.checked=t,e.goodsList.forEach(function(e){e.checked=t})})}},allRemoveSelected:{get:function(){if(this.cartLists)return this.cartLists.every(function(t){return t.removeChecked})},set:function(t){this.cartLists.forEach(function(e){e.removeChecked=t,e.goodsList.forEach(function(e){e.removeChecked=t})})}},selectedLists:function(){var t=[],e=0;return this.cartLists?(this.cartLists.forEach(function(n){n.goodsList.forEach(function(n){n.checked&&(t.push(n),e+=n.price*n.number)})}),this.total=e,t):[]},removeLists:function(){if(this.editing){var t=[];return this.cartLists.forEach(function(e){e.goodsList.forEach(function(e){e.removeChecked&&t.push(e)})}),t}return[]}},created:function(){this.getLists()},methods:{getLists:function(){var t=this;r.a.get(d.a.cartLists).then(function(e){var n=e.data.cartList;n.forEach(function(t){t.checked=!1,t.removeChecked=!1,t.goodsList.forEach(function(t){t.checked=!1,t.removeChecked=!1})}),t.cartLists=n})},edit:function(){this.editing=!this.editing,this.editingMsg=this.editing?"完成":"编辑"},selectGood:function(t,e){var n=this.editing?"removeChecked":"checked";t[n]=!t[n],e[n]=e.goodsList.every(function(t){return t[n]})},selectShop:function(t){var e=this.editing?"removeChecked":"checked";t[e]=!t[e],t.goodsList.forEach(function(n){n[e]=t[e]})},selectAll:function(){var t=this.editing?"allRemoveSelected":"allSelected";this[t]=!this[t]},reduce:function(t){1!==t.number&&r.a.post(d.a.cartReduce,{id:t.id,number:1}).then(function(e){t.number--})},add:function(t){r.a.post(d.a.addCart,{id:t.id,number:1}).then(function(e){t.number++})},removeConfirm:function(){var t=this,e=[];this.removeLists.forEach(function(t){e.push(t.id)}),r.a.post(d.a.cartMremove,e).then(function(e){t.removePopup=!1,t.cartLists.forEach(function(e,n){var i=[];e.goodsList.forEach(function(e){-1===t.removeLists.findIndex(function(t){return t.id===e.id})&&i.push(e)}),e.goodsList=i,i.length||t.cartLists.splice(n,1)})})}},components:{foot:u.a}})},66:function(t,e){},68:function(t,e){},69:function(t,e){},8:function(t,e,n){"use strict";function i(t){n(9)}var c=n(2),s=n(10),o=n(5),r=i,a=o(c.a,s.a,!1,r,null,null);e.a=a.exports},9:function(t,e){}},[65]);
//# sourceMappingURL=cart.76c0db297ddb9b856345.js.map