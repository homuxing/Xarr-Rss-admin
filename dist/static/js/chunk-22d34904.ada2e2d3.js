(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22d34904"],{9904:function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"source-setting"},[o("el-button",{staticClass:"add-source-btn",attrs:{type:"primary"},on:{click:t.openDialog}},[t._v("添加数据源")]),o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.sourceData,stripe:""}},[o("el-table-column",{attrs:{prop:"id",label:"ID",width:"70"}}),o("el-table-column",{attrs:{prop:"name",label:"名称",width:"300"}}),o("el-table-column",{attrs:{prop:"url",label:"URL",width:"400"}}),o("el-table-column",{attrs:{prop:"refresh_time",label:"刷新间隔",width:"180"}}),o("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(o){return t.bindEdit(e.row)}}},[t._v("编辑")]),o("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(o){return t.bindDelete(e.row)}}},[t._v("删除")])]}}])})],1),o("el-dialog",{attrs:{title:"新增数据源",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{attrs:{model:t.newSourceForm}},[o("el-form-item",{attrs:{label:"URL","label-width":t.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.newSourceForm.url,callback:function(e){t.$set(t.newSourceForm,"url",e)},expression:"newSourceForm.url"}})],1),o("el-form-item",{attrs:{label:"名称","label-width":t.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.newSourceForm.name,callback:function(e){t.$set(t.newSourceForm,"name",e)},expression:"newSourceForm.name"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)},i=[],r=o("b775");function a(){return Object(r["a"])({url:"/api/v1/sources/get",method:"GET"})}var n={name:"SourceSetting",data:function(){return{sourceData:[],dialogFormVisible:!1,formLabelWidth:"100px",newSourceForm:{url:"",name:""}}},created:function(){var t=this;a().then((function(e){t.sourceData=e.data,console.log(t.sourceData)}))},methods:{bindEdit:function(t){console.log(t),this.$router.push({path:"edit",query:{id:t.id}})},bindDelete:function(t){console.log(t)},openDialog:function(){this.dialogFormVisible=!0}}},c=n,u=(o("eac4"),o("2877")),s=Object(u["a"])(c,l,i,!1,null,"ab33e436",null);e["default"]=s.exports},db3a:function(t,e,o){},eac4:function(t,e,o){"use strict";o("db3a")}}]);