(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{fbb2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-page",{staticClass:"row q-pa-lg"},[a("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[a("q-card",{staticClass:"card-border-primary"},[a("q-card-section",[a("q-card",[a("q-card-section",{staticClass:" bg-primary"},[a("div",{staticClass:"text-h5 text-center text-white text-weight-thin"},[t._v("\n              UERM COVID19 VACCINE APPLICATION "),a("span",{staticClass:"text-uppercase"},[t._v("- "+t._s(t.$route.name))])])]),a("q-card-section",[a("analytics-dashboard")],1)],1)],1)],1)],1)])],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null===this.selectedReport?a("div",{staticClass:"row"},t._l(t.analytics,(function(e){return a("div",{key:e.title,staticClass:"col-lg-4 col-md-12 col-xs-12 q-pa-md"},[a("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"cursor-pointer q-hoverable",class:[e.color?"bg-"+e.color:"",e.textColor?e.textColor:""],on:{click:function(a){return t.routeLink(e.link)}}},[a("span",{staticClass:"q-focus-helper"}),a("q-card-section",[a("div",{staticClass:"flex flex-center text-h6 text-weight-thin"},[t._v("\n            "+t._s(e.title)+"\n          ")]),a("div",{staticClass:"flex flex-center"},[a("q-icon",{attrs:{name:e.icon,size:"55px"}})],1)])],1)],1)})),0):a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 q-pa-md"},[a("q-card",[a("q-card-section",[a("filter-header")],1),a("q-card-section",["Census"===this.selectedReport?a("div",[a("census")],1):"Logs"===this.selectedReport?a("div",[a("logs")],1):"TAT"===this.selectedReport?a("div",[a("TAT")],1):t._e()]),a("q-card-actions",{staticClass:"flex flex-center"},[a("q-btn",{attrs:{color:"negative",label:"GO BACK",icon:"undo",push:""},on:{click:function(e){return t.goBack()}}})],1)],1)],1)])])},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 col-sm-12"},[a("q-card",[a("q-expansion-item",{staticClass:"overflow-hidden shadow-1",attrs:{icon:"fas fa-chart-bar",label:"VACCINATED CENSUS","header-class":"bg-primary text-white","expand-icon-class":"text-white","expand-icon":"explore"}},[t.analyticsLoading?t._e():a("q-card",{staticClass:"no-shadow bg-grey-1",attrs:{square:""}},[a("q-card-section",[a("barchart",{attrs:{loading:this.loading,dataSets:this.censusDataSets,categories:this.censusDataHeads,label:"Vaccinated Census",backgroundColor:"primary"}})],1)],1)],1),a("q-separator"),a("q-table",{staticStyle:{"max-height":"415px","overflow-y":"auto"},attrs:{dense:"","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],data:t.fullyVaccinated,columns:t.columns,"row-key":"Category_ID_Number",filter:t.filter,title:"VACCINATED DETAILED CENSUS - "+this.fullyVaccinated.length,loading:t.analyticsLoading},on:{"update:pagination":function(e){t.pagination=e}}},[a("q-card-section",{scopedSlots:t._u([{key:"top-right",fn:function(){return[a("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"loading",fn:function(){return[a("q-inner-loading",{attrs:{showing:"",color:"primary"}})]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"categoryIDNumber",attrs:{props:e}},[t._v("\n                "+t._s(e.row.categoryIDNumber)+"\n              ")]),a("q-td",{key:"fullName",attrs:{props:e}},[t._v("\n                "+t._s(e.row.fullName)+"\n              ")])],1)]}}])})],1)],1)],1)])},c=[],l=a("ded3"),d=a.n(l),u=(a("13d5"),a("4e82"),a("2f62")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chart"}},[a("apexchart",{attrs:{type:"bar",height:"350",options:t.chartOptions,series:t.series}})],1)},f=[],m=a("1321"),h=a.n(m),b={props:["loading","dataSets","categories"],components:{apexchart:h.a},computed:d()({},Object(u["b"])({fullyVaccinated:"analytics/fullyVaccinated"})),data(){return{series:this.dataSets,chartOptions:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10}},xaxis:{categories:this.categories},legend:{position:"right",offsetY:40},fill:{opacity:1}}}}},y=b,g=a("2877"),C=Object(g["a"])(y,p,f,!1,null,null,null),x=C.exports,v={components:{Barchart:x},name:"CensusAnalytics",data(){return{filter:"",pagination:{rowsPerPage:0},censusDataSets:[],censusDataHeads:[],loading:null,columns:[{name:"categoryIDNumber",label:"Category ID Number",align:"center",field:"categoryIDNumber",sortable:!0},{name:"fullName",align:"center",label:"Name",field:"fullName",sortable:!0}]}},computed:d()({},Object(u["b"])({fullyVaccinated:"analytics/fullyVaccinated",analyticsLoading:"analytics/analyticsLoading"})),watch:{fullyVaccinated(t){this.setCensusBarchart()}},mounted(){this.setCensusBarchart()},methods:{setCensusBarchart(){const t=this.fullyVaccinated.map((t=>t.finalVaccinationDate)),e=t.reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),Object.create(null)),a=Object.keys(e).sort().reduce(((t,a)=>(t[a]=e[a],t)),{}),s=Object.values(a);this.censusDataHeads=Object.keys(a),this.censusDataSets=[{name:"VACCINATED",data:s}]}}},D=v,q=a("f09f"),w=a("3b73"),k=a("a370"),_=a("eb85"),A=a("eaac"),S=a("27f9"),T=a("0016"),I=a("74f7"),Q=a("bd08"),N=a("db86"),O=a("eebe"),E=a.n(O),L=Object(g["a"])(D,o,c,!1,null,null,null),j=L.exports;E()(L,"components",{QCard:q["a"],QExpansionItem:w["a"],QCardSection:k["a"],QSeparator:_["a"],QTable:A["a"],QInput:S["a"],QIcon:T["a"],QInnerLoading:I["a"],QTr:Q["a"],QTd:N["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-form",{ref:"reservationInformation",on:{submit:t.filterReport}},[a("q-card-section",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 q-pa-xs"},[a("div",{staticClass:"flex flex-center"},[a("q-input",{staticClass:"q-pa-md",staticStyle:{width:"220px"},attrs:{outlined:"",mask:"date",label:"From Date",rules:["date"],hint:"From Date (YYYY/MM/DD)"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{model:{value:t.criteria.fromDate,callback:function(e){t.$set(t.criteria,"fromDate",e)},expression:"criteria.fromDate"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.criteria.fromDate,callback:function(e){t.$set(t.criteria,"fromDate",e)},expression:"criteria.fromDate"}}),a("q-input",{staticClass:"q-pa-md",staticStyle:{width:"220px"},attrs:{outlined:"",mask:"date",label:"To Date",rules:["date"],hint:"To Date (YYYY/MM/DD)"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{model:{value:t.criteria.toDate,callback:function(e){t.$set(t.criteria,"toDate",e)},expression:"criteria.toDate"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.criteria.toDate,callback:function(e){t.$set(t.criteria,"toDate",e)},expression:"criteria.toDate"}})],1)]),a("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 q-pt-md"},[a("div",{staticClass:"flex flex-center"},[a("q-btn",{attrs:{push:"",color:"primary",disable:t.analyticsLoading,type:"submit",label:"GENERATE",icon:"fas fa-folder-open",align:"center"}})],1)])])])],1)],1)},$=[],R={name:"FilterHeaderAnalytics",data(){return{criteria:{fromDate:null,toDate:null}}},mounted(){this.setDates()},computed:d()({},Object(u["b"])({analyticsLoading:"analytics/analyticsLoading"})),methods:{async filterReport(){await this.$store.dispatch("analytics/populateVaccinated",this.criteria)},setDates(){const t=new Date,e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),a=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(t),s=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t),n=`${e}-${a}-${s}`;this.criteria.fromDate=n,this.criteria.toDate=n}}},P=R,Y=a("0378"),B=a("7cbe"),F=a("52ee"),H=a("9c40"),M=a("7f67"),G=Object(g["a"])(P,V,$,!1,null,null,null),U=G.exports;E()(G,"components",{QForm:Y["a"],QCardSection:k["a"],QInput:S["a"],QIcon:T["a"],QPopupProxy:B["a"],QDate:F["a"],QBtn:H["a"]}),E()(G,"directives",{ClosePopup:M["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n  LOGS\n")])},J=[],K={name:"LogsAnalytics"},X=K,W=Object(g["a"])(X,z,J,!1,null,null,null),Z=W.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n  TAT\n")])},et=[],at={name:"TATAnalytics"},st=at,nt=Object(g["a"])(st,tt,et,!1,null,null,null),rt=nt.exports,it={components:{Logs:Z,Census:j,TAT:rt,FilterHeader:U},name:"AnalyticsDashboard",data(){return{selectedReport:null,analytics:[{title:"CENSUS",icon:"fas fa-chart-bar",link:"Census",color:"primary",textColor:"text-white"},{title:"LOGS",icon:"fas fa-chart-line",link:"Logs",color:"green",textColor:"text-white"},{title:"TAT",icon:"fas fa-stopwatch",link:"TAT",color:"red",textColor:"text-white"}]}},methods:{routeLink(t){this.selectedReport=t},goBack(){this.selectedReport=null}}},ot=it,ct=a("4b7e"),lt=a("714f"),dt=Object(g["a"])(ot,r,i,!1,null,null,null),ut=dt.exports;E()(dt,"components",{QCard:q["a"],QCardSection:k["a"],QIcon:T["a"],QCardActions:ct["a"],QBtn:H["a"]}),E()(dt,"directives",{Ripple:lt["a"]});var pt={components:{AnalyticsDashboard:ut},name:"VASAnalytics"},ft=pt,mt=a("9989"),ht=Object(g["a"])(ft,s,n,!1,null,null,null);e["default"]=ht.exports;E()(ht,"components",{QPage:mt["a"],QCard:q["a"],QCardSection:k["a"]})}}]);