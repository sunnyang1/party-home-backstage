webpackJsonp([11],{LZ1h:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={components:{Hearder:e("eUkZ").a},data:function(){return{content:"",isloading:!0}},methods:{getData:function(){var t=this;this.$axios.get("/ddyj/partytoday").then(function(i){t.content=i.content,t.isloading=!1})}},created:function(){this.getData()}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"today pt110"},[i("Hearder"),this._v(" "),this.isloading?i("div",{staticClass:"loading"},[i("img",{attrs:{src:e("deA4"),alt:""}})]):this._e(),this._v(" "),i("div",{staticClass:"detail"},[i("div",{domProps:{innerHTML:this._s(this.content)}})])],1)},staticRenderFns:[]};var a=e("VU/8")(n,s,!1,function(t){e("i4iD")},null,null);i.default=a.exports},i4iD:function(t,i){}});
//# sourceMappingURL=11.5c0dcac2794ca878916d.js.map