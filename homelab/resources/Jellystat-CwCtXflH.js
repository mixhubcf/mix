import{s as c}from"./service-C1WMdIg4.js";import{_ as l,G as m,r as f,o as r,c as h,w as d,a as _,b as a,t as u,e as o}from"./index-DRafgg6n.js";const p={name:"Jellyfin",components:{Generic:m},mixins:[c],props:{item:Object},data:()=>({stats:null,error:!1}),computed:{streams:function(){if(!this.stats)return"";let t=0;for(let e of this.stats)"NowPlayingItem"in e&&t++;return t}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){const t={Authorization:`bearer ${this.item.apikey}`};try{const e=await this.fetch("/proxy/getSessions",{headers:t});this.error=!1,this.stats=e}catch(e){this.error=!0,console.error(e)}}}},y={class:"notifs"},g=["title"],k={key:1,class:"notif error fa-solid fa-triangle-exclamation",title:"Unable to fetch current status"};function x(t,e,i,b,v,s){const n=f("Generic");return r(),h(n,{item:i.item},{indicator:d(()=>[_("div",y,[s.streams>0?(r(),a("strong",{key:0,class:"notif playing",title:`${s.streams} active stream${s.streams>1?"s":""}`},u(s.streams),9,g)):o("",!0),t.error?(r(),a("i",k)):o("",!0)])]),_:1},8,["item"])}const G=l(p,[["render",x],["__scopeId","data-v-52d1fe74"]]);export{G as default};
