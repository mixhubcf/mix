import{s as c}from"./service-C1WMdIg4.js";import{_ as h,G as l,r as p,o as s,c as m,w as f,a as g,b as r,t as o,e as n}from"./index-DRafgg6n.js";const y="/api/v3",d="/api",_={name:"Sonarr",components:{Generic:l},mixins:[c],props:{item:Object},data:()=>({activity:null,missing:null,warnings:null,errors:null,serverError:!1}),computed:{apiPath(){return this.item.legacyApi?d:y}},created:function(){this.fetchConfig()},methods:{fetchConfig:function(){const t=e=>{console.error(e),this.serverError=!0};this.fetch(`${this.apiPath}/health?apikey=${this.item.apikey}`).then(e=>{this.warnings=e.filter(i=>i.type==="warning").length,this.errors=e.filter(i=>i.type==="errors").length}).catch(t),this.fetch(`${this.apiPath}/queue?apikey=${this.item.apikey}`).then(e=>{if(this.activity=0,this.item.legacyApi)for(var i=0;i<e.length;i++)e[i].series&&this.activity++;else this.activity=e.totalRecords}).catch(t),this.fetch(`${this.apiPath}/wanted/missing?apikey=${this.item.apikey}`).then(e=>{this.missing=e.totalRecords}).catch(t)}}},u={class:"notifs"},v={key:0,class:"notif activity",title:"Activity"},k={key:1,class:"notif missing",title:"Missing"},w={key:2,class:"notif warnings",title:"Warning"},$={key:3,class:"notif errors",title:"Error"},A={key:4,class:"notif errors",title:"Connection error to Sonarr API, check url and apikey in config.yml"};function C(t,e,i,E,P,G){const a=p("Generic");return s(),m(a,{item:i.item},{indicator:f(()=>[g("div",u,[t.activity>0?(s(),r("strong",v,o(t.activity),1)):n("",!0),t.missing>0?(s(),r("strong",k,o(t.missing),1)):n("",!0),t.warnings>0?(s(),r("strong",w,o(t.warnings),1)):n("",!0),t.errors>0?(s(),r("strong",$,o(t.errors),1)):n("",!0),t.serverError?(s(),r("strong",A," ? ")):n("",!0)])]),_:1},8,["item"])}const S=h(_,[["render",C],["__scopeId","data-v-e30be365"]]);export{S as default};