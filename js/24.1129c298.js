(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{a65e:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("welcome",{attrs:{employeeInformation:t.employeeInformation}}),a("registration",{attrs:{formMessage:t.formMessage}})],1)},o=[],s=a("ded3"),i=a.n(s),c=a("2f62"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row q-pa-md justify-center"},[a("div",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[a("q-stepper",{ref:"stepper",attrs:{color:"primary",animated:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("q-step",{attrs:{name:1,title:"Your Category",icon:"settings",done:t.step>1,"header-nav":t.step>1}},[a("register-user",{attrs:{step:this.steps}})],1)],1)],1)])},l=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[t.success?t._e():a("q-form",{ref:"categoryInformation",staticClass:"q-gutter-md",on:{submit:t.onSubmitCategory}},[a("q-select",{attrs:{filled:"","use-input":"","input-debounce":"0",label:"Category",options:t.categoryListOptions,behavior:"menu",color:"primary",disable:t.disableElement,rules:[function(t){return t&&t.length>0||"Please enter Category"}]},on:{filter:t.filterCategoryList},scopedSlots:t._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[t._v("\n            No results\n          ")])],1)]},proxy:!0}],null,!1,1419816591),model:{value:t.categoryData.category,callback:function(e){t.$set(t.categoryData,"category",e)},expression:"categoryData.category"}}),a("q-select",{attrs:{filled:"","use-input":"","input-debounce":"0",label:"Category ID",options:t.categoryIDOptions,behavior:"menu","lazy-rules":"",color:"primary",disable:t.disableElement,rules:[function(t){return t&&t.length>0||"Please enter Category ID"}]},on:{filter:t.filterCategoryID},scopedSlots:t._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[t._v("\n            No results\n          ")])],1)]},proxy:!0}],null,!1,1419816591),model:{value:t.categoryData.categoryID,callback:function(e){t.$set(t.categoryData,"categoryID",e)},expression:"categoryData.categoryID"}}),a("q-input",{attrs:{type:"text",label:"Category ID Number",dense:"",hint:"Your Employee ID",disable:t.disableElement,rules:[function(t){return t&&t.length>0||"Please enter Category ID Number or Your Employee ID"}]},model:{value:t.categoryData.categoryIDNumber,callback:function(e){t.$set(t.categoryData,"categoryIDNumber",e)},expression:"categoryData.categoryIDNumber"}}),a("q-input",{attrs:{type:"text",label:"Philhealth ID Number",hint:"Your Philhealth ID Number"},model:{value:t.categoryData.philhealthID,callback:function(e){t.$set(t.categoryData,"philhealthID",e)},expression:"categoryData.philhealthID"}}),a("q-input",{attrs:{type:"text",label:"PWD ID Number",hint:"Your PWD ID Number"},model:{value:t.categoryData.pwdID,callback:function(e){t.$set(t.categoryData,"pwdID",e)},expression:"categoryData.pwdID"}}),a("q-input",{attrs:{type:"number",label:"Contact Number",hint:"Your Contact Number"},model:{value:t.categoryData.contactNumber,callback:function(e){t.$set(t.categoryData,"contactNumber",e)},expression:"categoryData.contactNumber"}}),a("q-input",{attrs:{type:"text",label:"First Name",hint:"Your First Name"},model:{value:t.categoryData.firstName,callback:function(e){t.$set(t.categoryData,"firstName",e)},expression:"categoryData.firstName"}}),a("q-input",{attrs:{type:"text",label:"Last Name",hint:"Your Last Name"},model:{value:t.categoryData.lastName,callback:function(e){t.$set(t.categoryData,"lastName",e)},expression:"categoryData.lastName"}}),a("q-input",{attrs:{type:"text",label:"Middle Name",hint:"Your Middle Name"},model:{value:t.categoryData.middleName,callback:function(e){t.$set(t.categoryData,"middleName",e)},expression:"categoryData.middleName"}}),a("q-input",{attrs:{type:"text",label:"Department",hint:"Your Department"},model:{value:t.categoryData.department,callback:function(e){t.$set(t.categoryData,"department",e)},expression:"categoryData.department"}}),a("q-stepper-navigation",{staticClass:"flex flex-center"},[a("q-btn",{attrs:{push:"",type:"submit",color:"primary",label:"SAVE",icon:"redo"}})],1),a("div",{staticClass:"flex flex-center"},[""!==t.showError?a("q-banner",{staticClass:"text-white bg-red flex",staticStyle:{width:"50%"},attrs:{"inline-actions":"",align:"center"}},[a("q-icon",{attrs:{name:"report_problem",size:"lg"}}),a("span",{staticClass:"text-h6 q-pl-md"},[t._v(t._s(t.showError))])],1):t._e()],1)],1),t.success?a("div",{staticClass:"row q-pa-lg flex-center"},[a("q-card",{staticClass:"text-center",staticStyle:{width:"80%"}},[a("q-card-section",{staticClass:"bg-primary text-white"},[a("div",{staticClass:"text-h3"},[a("q-icon",{staticClass:"q-pr-md",attrs:{name:"new_releases"}}),t._v("UERM COVID VACCINATION\n        ")],1)]),a("q-card-section",[a("div",{staticClass:"text-h3"},[t._v("\n          YOU HAVE SUCCESSFULLY REGISTERED A USER\n        ")])]),a("q-card-actions",{staticClass:"flex-center"},[a("q-btn",{attrs:{push:"",color:"primary",label:"REGISTER AGAIN",icon:"undo"},on:{click:function(e){return t.setInitValues()}}})],1)],1)],1):t._e()],1)},y=[],m={props:["step"],data(){return{categoryListOptions:this.categoryList,categoryIDOptions:this.categoryID,categoryData:{category:null,categoryID:null,categoryIDNumber:null,philhealthID:null,pwdID:null,contactNumber:null,firstName:null,lastName:null,middleName:null,department:null},disableElement:!1,showError:"",success:!1}},computed:i()({},Object(c["b"])({categoryList:"categoryList",categoryID:"categoryID",categoryInfo:"categoryInfo",employeeInformation:"employeeInformation",fillUpStatus:"fillUpStatus"})),mounted(){this.categoryData.category="Health Care Worker",this.categoryData.categoryID="Facility ID Number"},watch:{async fillUpStatus(t){"registration"===t&&(this.disableElement=!1,this.categoryData.category="Health Care Worker",this.categoryData.categoryID="Facility ID Number",this.categoryData.categoryIDNumber=this.$route.params.id)},async employeeInformation(t){t.Category_ID_Number.length>0&&await this.$store.dispatch("filterCategory",t)},async categoryInfo(t){this.categoryData.category=t.category,this.categoryData.categoryID=t.categoryID,this.categoryData.categoryIDNumber=t.categoryIDNumber,this.categoryData.philhealthID=t.philhealthID,this.categoryData.pwdID=t.pwdID}},methods:{setInitValues(){this.success=!1,this.categoryData.category="Health Care Worker",this.categoryData.categoryID="Facility ID Number",this.categoryData.categoryIDNumber=null,this.categoryData.philhealthID=null,this.categoryData.pwdID=null,this.categoryData.contactNumber=null,this.categoryData.firstName=null,this.categoryData.lastName=null,this.categoryData.middleName=null,this.categoryData.department=null},async onSubmitCategory(){this.$refs.categoryInformation.validate().then((async t=>{if(t){if("registration"===this.fillUpStatus){var e=await this.$store.dispatch("registerManualUser",this.categoryData);if(void 0!==e.error)return void(this.showError=e.error);this.showError=""}else await this.$store.dispatch("registerManualUser",this.categoryData);this.success=!0}else this.formHasError=!0}))},filterCategoryList(t,e){e(""!==t?()=>{const e=t.toLowerCase();this.categoryListOptions=this.categoryList.filter((t=>t.toLowerCase().indexOf(e)>-1))}:()=>{this.categoryListOptions=this.categoryList})},filterCategoryID(t,e){e(""!==t?()=>{const e=t.toLowerCase();this.categoryIDOptions=this.categoryID.filter((t=>t.toLowerCase().indexOf(e)>-1))}:()=>{this.categoryIDOptions=this.categoryID})}}},p=m,g=a("2877"),h=a("0378"),d=a("ddd8"),D=a("66e5"),b=a("4074"),f=a("27f9"),I=a("b19c"),N=a("9c40"),C=a("54e1"),x=a("0016"),v=a("f09f"),w=a("a370"),q=a("4b7e"),k=a("eebe"),E=a.n(k),S=Object(g["a"])(p,u,y,!1,null,null,null),$=S.exports;E()(S,"components",{QForm:h["a"],QSelect:d["a"],QItem:D["a"],QItemSection:b["a"],QInput:f["a"],QStepperNavigation:I["a"],QBtn:N["a"],QBanner:C["a"],QIcon:x["a"],QCard:v["a"],QCardSection:w["a"],QCardActions:q["a"]});var _={components:{RegisterUser:$},data(){return{step:1,done1:!1,done2:!1,done3:!1,done4:!1,category:{submitCategory:"",resetCategory:""}}},computed:i()({},Object(c["b"])({categoryInfo:"categoryInfo",currentPersonalInfo:"currentPersonalInfo",steps:"steps"})),watch:{steps(t){this.step=t}},methods:{async getBack(t){this.step=t,this.checkEmployee()},async checkEmployee(){await this.$store.dispatch("checkEmployee",this.$route.params.id)}}},L=_,O=a("f531"),Q=a("87fe"),U=Object(g["a"])(L,n,l,!1,null,null,null),Y=U.exports;E()(U,"components",{QStepper:O["a"],QStep:Q["a"]});var P=a("1ddd"),A={components:{Registration:Y,Welcome:P["a"]},name:"PageIndex",data(){return{employeeNumber:"",formMessage:{}}},computed:i()({},Object(c["b"])({employeeInformation:"employeeInformation"})),mounted(){this.checkSetCookies()},methods:{async checkSetCookies(){const t=this.$q.cookies.has("user");t?(this.employeeNumber=this.$q.cookies.get("user"),this.$router.push("/employee-form/"+this.employeeNumber)):(await this.$store.dispatch("setFillupStatus"),this.employeeNumber=this.$q.cookies.get("user-code"),await this.$store.dispatch("checkEmployee",this.employeeNumber))}}},F=A,M=a("9989"),R=Object(g["a"])(F,r,o,!1,null,null,null);e["default"]=R.exports;E()(R,"components",{QPage:M["a"]})}}]);