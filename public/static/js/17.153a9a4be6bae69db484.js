webpackJsonp([17],{j3Za:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Gu7T"),i=a.n(n),o=a("eUkZ"),s=a("WYLf"),d=a("gr4C"),c={components:{Hearder:o.a,Tofoot:d.a,Nullcontent:s.a},data:function(){return{categotyTypeId:"",newData:"",page:1,isOffDown:!0,isloading:!0}},methods:{handleBootom:function(){this.page=this.page+1,this.getdata()},getdata:function(){var t=this;this.$axios.get("/ddyj/category/"+this.categotyTypeId+"/news",{pn:this.page}).then(function(e){t.newData=[].concat(i()(t.newData),i()(e.data)),t.isOffDown=!1,0==e.data.length&&(t.isOffDown=!0,t.isloading=!1)})},getCategory:function(){var t=this,e=this.$route.meta.desc;this.$axios.get("/ddyj/category").then(function(a){a.data.forEach(function(a){a.title==e&&(t.categotyTypeId=a._id)}),t.getdata()})}},created:function(){this.getCategory()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hearder"),t._v(" "),n("div",{staticClass:"clearfix pt110"},[n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.handleBootom,expression:"handleBootom"}],attrs:{"infinite-scroll-disabled":"isOffDown"}},t._l(t.newData,function(e,a){return n("div",{key:a,staticClass:"item"},[n("div",{on:{click:function(a){t.$router.push("/newDetail/"+e._id)}}},[n("img",{attrs:{src:e.img,alt:""}}),t._v(" "),n("span",[t._v(t._s(e.title))])])])}))]),t._v(" "),t.isloading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:a("deA4"),alt:""}})]):t._e(),t._v(" "),t.isloading||t.newData[0]?t._e():n("Nullcontent"),t._v(" "),!t.isloading&&t.newData[0]?n("Tofoot"):t._e()],1)},staticRenderFns:[]};var l=a("VU/8")(c,r,!1,function(t){a("l30X")},"data-v-4772da3f",null);e.default=l.exports},l30X:function(t,e){}});
//# sourceMappingURL=17.153a9a4be6bae69db484.js.map