webpackJsonp([3],{XKlY:function(t,e){},dXkD:function(t,e){},fRCw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Gu7T"),s=i.n(o),n=i("eUkZ"),a=i("WYLf"),l=i("gr4C"),c=(i("NYxO"),i("Au9i")),r=i("0xDb"),d=i("GQaK"),v={components:{Hearder:n.a,Nullcontent:a.a,Tofoot:l.a},data:function(){return{BS:"",replytop:"",replybody:"",isloging:!0,isOffDown:!0,talk:{topic_id:"",content:""},pn:1}},methods:{getreplytop:function(){var t=this;this.$axios.get("/ddyj/topic/"+this.talk.topic_id).then(function(e){t.replytop=e.data,t.replytop.createTime=Object(r.b)(t.replytop.createTime),t.getreplybody()})},getreplybody:function(){var t=this;this.$axios.get("/ddyj/common/bytopic/"+this.talk.topic_id,{pn:this.pn}).then(function(e){t.isOffDown=!1,e.data.forEach(function(t){t.createTime=Object(r.b)(t.createTime)}),t.replybody=[].concat(s()(t.replybody),s()(e.data)),e.data.length<10&&(t.isloging=!1,t.isOffDown=!0)})},handletalk:function(){var t=this;this.$axios.post("/ddyj/common",this.talk).then(function(e){200==e.code?(Object(c.Toast)("评论成功"),t.replybody="",t.pn=1,t.getreplybody()):Object(c.Toast)(e.msg)})},handleBootom:function(){console.log("下拉了")},initscroll:function(){var t=this.$refs.main;this.BS=new d.a(t,{mouseWhell:!0,scrollbar:!0})}},created:function(){this.talk.topic_id=this.$route.params.id,this.getreplytop()},mounted:function(){this.initscroll(),this.$nextTick(function(){document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.getElementById("app").style.overflow="hidden"})},beforeDestroy:function(){document.documentElement.style.overflow="auto",document.body.style.overflow="auto",document.getElementById("app").style.overflow="auto"}},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:" interdetail"},[o("Hearder",{staticStyle:{position:"absolute"}}),t._v(" "),o("div",{ref:"main",staticClass:" pt110 main2"},[o("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.handleBootom,expression:"handleBootom"}],attrs:{"infinite-scroll-disabled":"isOffDown"}},[t.replytop&&t.replytop.user?o("div",{staticClass:"item itme-ys"},[o("div",{staticClass:"row1"},[o("div",{staticClass:"left"},[o("img",{attrs:{src:t.replytop.user.avatar,alt:""}}),t._v(" "),o("div",[o("div",{staticClass:"title"},[t._v(t._s(t.replytop.user.nicheng))]),t._v(" "),o("div",{staticClass:"date-message"},[o("span",[o("i",{staticClass:"dmiconys iconfont icon-shijian"}),t._v(t._s(t.replytop.createTime))]),t._v(" "),t._m(0)])])]),t._v(" "),o("div",{staticClass:"right"},[t._v("党员互动")])]),t._v(" "),o("div",{staticClass:"row2"},[t._v("\n                    "+t._s(t.replytop.content)+"\n                ")])]):t._e(),t._v(" "),o("div",[t._l(t.replybody,function(e,i){return o("div",{key:i,staticClass:"item "},[o("div",{staticClass:"row1"},[o("div",{staticClass:"left"},[o("img",{attrs:{src:e.user.avatar,alt:""}}),t._v(" "),o("div",[o("div",{staticClass:"title"},[t._v(t._s(e.user.nicheng))]),t._v(" "),o("div",{staticClass:"date-message"},[o("span",[o("i",{staticClass:"dmiconys iconfont icon-shijian"}),t._v(t._s(e.createTime))])])])]),t._v(" "),o("div",{staticClass:"right"},[t._v("党员互动")])]),t._v(" "),o("div",{staticClass:"row2"},[t._v("\n                        "+t._s(e.content)+"\n                    ")])])}),t._v(" "),t.isloging||t.replybody[0]?t._e():o("Nullcontent"),t._v(" "),!t.isloging&&t.replybody[0]?o("Tofoot"):t._e()],2),t._v(" "),t.isloging?o("div",{staticClass:"loading"},[o("img",{attrs:{src:i("deA4"),alt:""}})]):t._e()])]),t._v(" "),o("div",{staticClass:"talk"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.talk.content,expression:"talk.content"}],attrs:{type:"text"},domProps:{value:t.talk.content},on:{input:function(e){e.target.composing||t.$set(t.talk,"content",e.target.value)}}}),t._v(" "),o("button",{on:{click:t.handletalk}},[t._v("评论")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"dmiconys iconfont icon-xiaoxi"}),this._v("公开")])}]};var u=i("VU/8")(v,p,!1,function(t){i("dXkD"),i("XKlY")},"data-v-b10e29c6",null);e.default=u.exports}});
//# sourceMappingURL=3.098be0e80938fb11ecd4.js.map