webpackJsonp([13],{"8zyM":function(t,e){},"rU0+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={components:{Uploadimg:a("YAzi").a},data:function(){return{forData:{}}},methods:{handleSubmit:function(){var t=this;this.$axios.post("/ddyj/category",this.forData).then(function(e){200==e.code?(t.$message.success(e.msg),setTimeout(function(){t.$router.push("/layout/catelist")},500)):t.$message(e.msg)})},getdata:function(){var t=this,e=this.$route.params.id;this.$axios.get("/ddyj/category/"+e).then(function(e){t.forData=e.data})},handlerevise:function(){var t=this,e=this.$route.params.id;this.$axios.put("/ddyj/category/"+e,this.forData).then(function(e){200==e.code?(t.$message.success(e.msg),setTimeout(function(){t.$router.push("/layout/catelist")},500)):t.$message(e.msg)})}},created:function(){},computed:{isrevise:function(){return"修改分类页"==this.$route.meta.title?(this.getdata(),!0):(this.forData={},!1)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{staticClass:"mb30",attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/layout/home"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/layout/catelist"}}},[t._v("分类列表页")]),t._v(" "),t.isrevise?a("el-breadcrumb-item",[t._v("修改分类页")]):a("el-breadcrumb-item",[t._v("添加分类页")])],1),t._v(" "),a("el-card",[a("el-form",{ref:"form",staticClass:"table-ys",staticStyle:{width:"500px"},attrs:{model:t.forData,"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"新闻标题",required:""}},[a("el-input",{model:{value:t.forData.title,callback:function(e){t.$set(t.forData,"title",e)},expression:"forData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"新闻头图"}},[a("Uploadimg",{model:{value:t.forData.icon,callback:function(e){t.$set(t.forData,"icon",e)},expression:"forData.icon"}})],1),t._v(" "),a("el-form-item",[t.isrevise?a("el-button",{attrs:{type:"primary"},on:{click:t.handlerevise}},[t._v("立即修改")]):a("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("立即创建")]),t._v(" "),a("el-button",{on:{click:function(e){t.$router.push("/layout/catelist")}}},[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(t){a("8zyM")},"data-v-129a8abb",null);e.default=s.exports}});
//# sourceMappingURL=13.e88fd05a21ba1542a452.js.map