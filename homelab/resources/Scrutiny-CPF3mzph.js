import{s as d}from"./service-C1WMdIg4.js";import{_ as u,G as f,r as m,o as s,c as h,w as p,a as _,b as o,t as c,e as i}from"./index-DRafgg6n.js";const v={name:"Scrutiny",components:{Generic:f},mixins:[d],props:{item:Object},data:()=>({passed:null,failed:null,unknown:null,serverError:!1}),created:function(){const e=parseInt(this.item.updateInterval,10)||0;e>0&&setInterval(()=>this.fetchSummary(),e),this.fetchSummary()},methods:{fetchSummary:function(){this.fetch("/api/summary").then(e=>{var r,a;const n=Object.values(e.data.summary);this.passed=((r=n.filter(t=>t.device.device_status===0))==null?void 0:r.length)||0,this.failed=((a=n.filter(t=>t.device.device_status>0&&t.device.device_status<=3))==null?void 0:a.length)||0,this.unknown=n.length-(this.passed+this.failed)||0}).catch(e=>{console.error(e),this.serverError=!0})}}},y={class:"notifs"},k={key:0,class:"notif passed",title:"Passed"},g={key:1,class:"notif failed",title:"Failed"},w={key:2,class:"notif unknown",title:"Unknown"},S={key:3,class:"notif errors",title:"Connection error to Scrutiny API, check your url in config.yml"};function I(e,n,r,a,t,B){const l=m("Generic");return s(),h(l,{item:r.item},{indicator:p(()=>[_("div",y,[e.passed>0?(s(),o("strong",k,c(e.passed),1)):i("",!0),e.failed>0?(s(),o("strong",g,c(e.failed),1)):i("",!0),e.unknown>0?(s(),o("strong",w,c(e.unknown),1)):i("",!0),e.serverError?(s(),o("strong",S,"?")):i("",!0)])]),_:1},8,["item"])}const G=u(v,[["render",I],["__scopeId","data-v-67c742fc"]]);export{G as default};
