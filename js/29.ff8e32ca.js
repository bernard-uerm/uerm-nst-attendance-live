(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"12d7":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("q-page",{staticClass:"row q-pa-lg"},[e("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[e("q-card",[e("q-card-section",{staticClass:" bg-primary"},[e("div",{staticClass:"text-h5 text-center text-white text-weight-thin"},[a._v("\n            UERM COVID19 VACCINE APPLICATION "),e("span",{staticClass:"text-uppercase"},[a._v("- "+a._s(a.$route.name))])])]),e("q-tab-panels",{attrs:{animated:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"firstDose"}},[e("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[e("q-card",{staticClass:"card-border-primary"},[e("q-card-section",[e("q-card",[e("FilteringMasterList",{attrs:{dataLoaded:a.dataLoaded,dosage:"FIRST DOSE"}})],1)],1)],1)],1),a.dataLoaded?e("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 q-mt-md"},[e("q-card",{staticClass:"card-border-primary"},[e("q-card-section",[e("q-card",[e("table-vaccine-master-list",{attrs:{vaccineMasterList:a.registeredVaccinee}})],1)],1)],1)],1):a._e()]),e("q-tab-panel",{attrs:{name:"secondDose"}},[e("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[e("q-card",{staticClass:"card-border-primary"},[e("q-card-section",[e("q-card",[e("FilteringMasterList",{attrs:{dataLoaded:a.dataLoaded,dosage:"SECOND DOSE"}})],1)],1)],1)],1),a.dataLoaded?e("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 q-mt-md"},[e("q-card",{staticClass:"card-border-primary"},[e("q-card-section",[e("q-card",[e("table-second-dose",{attrs:{vaccineMasterList:a.secondDoseRegisteredVaccinee}})],1)],1)],1)],1):a._e()])],1),e("q-separator"),e("q-tabs",{staticClass:"text-white bg-primary",attrs:{dense:"","active-color":"white","indicator-color":"white",align:"justify","narrow-indicator":""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab",{attrs:{name:"firstDose",label:"FIRST DOSE"}}),e("q-tab",{attrs:{name:"secondDose",label:"SECOND DOSE"}})],1)],1)],1)])],1)},i=[],c=e("ded3"),r=e.n(c),o=e("7c1c"),n=e("9fa2"),d=e("3c75"),l=e("2f62"),p={name:"VASRegistration",components:{TableSecondDose:d["a"],TableVaccineMasterList:n["a"],FilteringMasterList:o["a"]},computed:r()({},Object(l["b"])({registeredVaccinee:"registeredVaccinee",secondDoseRegisteredVaccinee:"secondDoseRegisteredVaccinee",dataLoaded:"dataLoaded"})),data(){return{tab:"firstDose"}},watch:{tab(a){this.setInitValues()},registeredVaccinee(a){console.log(a)}},mounted(){this.setInitValues(),this.redirect()},methods:{async setInitValues(){await this.$store.dispatch("setInitValuesVAS")},redirect(){const a=this.$q.cookies.get("module");"Screening"===a?this.$router.push("/vaccine-application-screening"):"Vaccination"===a?this.$router.push("/vaccine-application-vaccination"):"Monitoring"===a?this.$router.push("/vaccine-application-monitoring"):"Configuration"===a?this.$router.push("/vaccine-application-configuration"):void 0===a&&this.$router.push("/vaccine-application")}}},b=p,u=e("2877"),g=e("9989"),m=e("f09f"),h=e("a370"),q=e("adad"),v=e("823b"),C=e("eb85"),V=e("429b"),f=e("7460"),D=e("eebe"),w=e.n(D),L=Object(u["a"])(b,s,i,!1,null,null,null);t["default"]=L.exports;w()(L,"components",{QPage:g["a"],QCard:m["a"],QCardSection:h["a"],QTabPanels:q["a"],QTabPanel:v["a"],QSeparator:C["a"],QTabs:V["a"],QTab:f["a"]})}}]);