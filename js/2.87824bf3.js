(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0565":function(e,t,s){"use strict";s("16f0")},"16f0":function(e,t,s){},"8b24":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex flex-center"},[s("q-card",{staticClass:"shadow-24",staticStyle:{width:"1200px"}},[e.cardLoading?s("div",[s("q-card-section",{staticClass:"bg-orange text-white text-h1 text-center text-uppercase"},[e._v("\n        CHECKING PC CONFIGURATION\n      ")]),s("q-inner-loading",{attrs:{showing:e.cardLoading}},[s("q-spinner-clock",{attrs:{color:"white",size:"50px"}})],1)],1):s("div",[null===e.ipErrorMessage?s("div",[s("q-form",{ref:"timeInEmployeeForm",staticClass:"q-gutter-md",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.timeInEmployee.apply(null,arguments))}}},[s("q-card-section",{staticClass:"bg-primary text-white text-h1 text-center text-uppercase"},[e._v("\n            "+e._s(e.station)+"\n          ")]),s("q-card-section",[s("q-input",{ref:"employeeID",staticClass:"employeeID",attrs:{clearable:"",outlined:"",square:"",type:"text",color:"primary",label:"Employee ID","input-style":{fontSize:"90px"},rules:[function(e){return e&&e.length>0||"Please enter Employee ID Number"}],maxlength:"5",autofocus:e.autofocus},on:{focusout:function(t){return e.searchProfile()}},model:{value:e.timeInDetails.code,callback:function(t){e.$set(e.timeInDetails,"code",t)},expression:"timeInDetails.code"}})],1),s("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[s("div",[this.employeeInfo.length>0?s("q-card-section",{},[s("div",{staticClass:"row justify-around"},[s("div",{staticClass:"col-lg-5 col-md-5 col-sm-5 col-xs-5 text-h4 text-center"},[e._v("\n                      NAME:\n                    ")]),s("div",{staticClass:"col-lg-7 col-md-7 col-sm-7 col-xs-7 text-uppercase text-h4"},[e._v("\n                      "+e._s(this.employeeInfo[0].FIRSTNAME)+" "+e._s(this.employeeInfo[0].MIDDLENAME)+" "+e._s(this.employeeInfo[0].LASTNAME)+"\n                      \n                    ")]),s("div",{staticClass:"col-lg-5 col-md-5 col-sm-5 col-xs-5 text-h4 text-center"},[e._v("\n                      POSITION:\n                    ")]),s("div",{staticClass:"col-lg-7 col-md-7 col-sm-7 col-xs-7 text-uppercase text-h4"},["Head"==this.employeeInfo[0].POS_DESC?s("div",[e._v("\n                        "+e._s(this.employeeInfo[0].DEPT_DESC)+" - "+e._s(this.employeeInfo[0].POS_DESC)+" \n                      ")]):s("div",[e._v("\n                        "+e._s(this.employeeInfo[0].POS_DESC)+" \n                      ")])]),void 0!==this.employeeInfo[0].TIMEIN?s("div",{staticClass:"col-lg-5 col-md-5 col-sm-5 col-xs-5 text-h4 text-center"},[e._v("\n                      LAST TIME IN:\n                    ")]):e._e(),s("div",{staticClass:"col-lg-7 col-md-7 col-sm-7 col-xs-7 text-uppercase text-h4"},[e._v("\n                      "+e._s(this.employeeInfo[0].TIMEIN)+"\n                    ")])])]):e._e(),this.employeeInfo.length>0?s("q-card-actions",{staticClass:"flex flex-center"},[s("q-btn",{staticStyle:{width:"250px"},attrs:{type:"submit",size:"xl",loading:e.timeInLoading,disable:e.timeInDisable,push:"",color:"secondary",icon:"alarm_on"},on:{click:e.timeInEmployee},scopedSlots:e._u([{key:"loading",fn:function(){return[s("q-spinner-hourglass",{staticClass:"on-left"}),e._v("\n                      PROCESSING...\n                    ")]},proxy:!0}],null,!1,4091002872)},[s("span",{staticClass:"q-pl-md"},[e._v("TIME IN")])])],1):e._e(),null!==this.timeInMessage?s("q-card-section",[s("q-banner",{staticClass:"text-white text-center text-uppercase bg-green",attrs:{"inline-actions":""}},[s("div",{staticClass:"text-h3"},[e._v("\n                      "+e._s(e.timeInMessage)+"\n                    ")])])],1):e._e()],1)]),s("q-inner-loading",{attrs:{showing:e.loading}},[s("q-spinner-clock",{attrs:{color:"primary",size:"50px"}})],1)],1)],1):s("div",[s("q-card-section",{staticClass:"bg-negative text-white text-h1 text-center text-uppercase"},[e._v("\n          "+e._s(e.ipErrorMessage)+"\n        ")])],1)])])],1)},n=[],a=s("ded3"),l=s.n(a),o=s("2f62"),r={name:"PageIndex",data(){return{station:"",timeInDetails:{code:null,lastName:null,firstName:null,middleName:null,position:null,department:null,timeInLocation:null},loading:!1,showSimulatedReturnData:!1,timeInDisable:!1,errorMessage:[],ipErrorMessage:null,cardLoading:null,timeInLoading:null,timeInMessage:null,showEmployeeInfo:null,autofocus:!0,countDown:15,startTimer:null}},computed:l()({},Object(o["b"])({employeeInfo:"employees/employeeInfo",currentStation:"employees/currentStation",ipAddress:"employees/ipAddress"})),mounted(){this.setInitValues()},watch:{countDown(e){0===e&&this.setOriginalValues()},timeInDetails:{async handler(e){null===e.code?this.setOriginalValues():this.stopCountdown()},deep:!0}},methods:{countDownTimer(){this.countDown>0&&(this.startTimer=setTimeout((()=>{this.countDown-=1,this.countDownTimer()}),1e3))},stopCountdown(){clearTimeout(this.startTimer)},async setInitValues(){this.cardLoading=!0;const e=await this.$store.dispatch("employees/getIPAdress");await this.$store.dispatch("employees/setInitValues"),void 0===e?this.station=this.currentStation:this.ipErrorMessage=e.error,this.cardLoading=!1},async setOriginalValues(){this.timeInDetails.code=null,this.timeInDetails.lastName=null,this.timeInDetails.firstName=null,this.timeInDetails.middleName=null,this.timeInDetails.position=null,this.timeInDetails.department=null,this.timeInDetails.timeInLocation=null,this.errorMessage=[],this.ipErrorMessage=null,this.cardLoading=null,this.timeInLoading=null,this.timeInMessage=null,this.showEmployeeInfo=null,this.countDown=15,await this.$store.dispatch("employees/setInitValues")},async setFormValues(){this.timeInDetails.code=null},async searchProfile(){this.$refs.timeInEmployeeForm.validate().then((async e=>{if(e){this.loading=!0,this.timeInDisable=!0;const e=await this.$store.dispatch("employees/fetchEmployee",this.timeInDetails);if(e.length>0)this.showEmployeeInfo=!0,this.showSimulatedReturnData=!0;else{if(this.showSimulatedReturnData=!0,void 0!==e.error)return this.timeInDisable=!0,this.loading=!1,this.timeInMessage=null,void this.countDownTimer();this.countDownTimer()}this.timeInDisable=!1,this.loading=!1,this.countDownTimer()}}))},async timeInEmployee(){if(this.employeeInfo.length>0&&!this.timeInDisable){this.timeInLoading=!0,this.timeInDetails.code=this.employeeInfo[0].CODE,this.timeInDetails.lastName=this.employeeInfo[0].LASTNAME,this.timeInDetails.firstName=this.employeeInfo[0].FIRSTNAME,this.timeInDetails.middleName=this.employeeInfo[0].MIDDLENAME,this.timeInDetails.position=this.employeeInfo[0].POS_DESC,this.timeInDetails.department=this.employeeInfo[0].DEPT_DESC,this.timeInDetails.timeInLocation=this.ipAddress;const e=await this.$store.dispatch("employees/timeInEmployee",this.timeInDetails);void 0!==e.message&&(this.timeInMessage=`You have succesfully time-in ${this.employeeInfo[0].FIRSTNAME} ${this.employeeInfo[0].MIDDLENAME} ${this.employeeInfo[0].LASTNAME}`),this.timeInLoading=!1,this.countDownTimer()}}}},c=r,m=(s("0565"),s("2877")),h=s("9989"),d=s("f09f"),u=s("0378"),p=s("a370"),I=s("27f9"),f=s("4b7e"),y=s("9c40"),g=s("9149"),D=s("54e1"),x=s("74f7"),E=s("148b"),v=s("8572"),w=s("eebe"),C=s.n(w),_=Object(m["a"])(c,i,n,!1,null,null,null);t["default"]=_.exports;C()(_,"components",{QPage:h["a"],QCard:d["a"],QForm:u["a"],QCardSection:p["a"],QInput:I["a"],QCardActions:f["a"],QBtn:y["a"],QSpinnerHourglass:g["a"],QBanner:D["a"],QInnerLoading:x["a"],QSpinnerClock:E["a"],QField:v["a"]})}}]);