(self.webpackChunktahsily_progress_calculator=self.webpackChunktahsily_progress_calculator||[]).push([[179],{962:(e,t,a)=>{"use strict";e.exports=a.p+"6bf407d27842391bbcd9.svg"},786:(e,t,a)=>{"use strict";const r=new Date,n=r.getDate(),s=r.getMonth()+1,o=r.getFullYear()+"-"+(s.toString().length<2?"0"+s:s)+"-"+(n.toString().length<2?"0"+(n+1):n+1);var i=a(181),l=a(71);const d={en:{translation:JSON.parse('{"title":"Tahsily Progress Calculator","labels":{"tota":"Total","math":"Mathematics","phys":"Physics","chem":"Chemistry","biol":"Biology"},"words":{"page":"page","pages":"pages","day":"day","days":"days"},"report":{"date":"study {{pages}} {{pagesWord}}/day, {{days}} {{daysWord}} remained","lastPage":"last page: {{pageNum}}","subReport":"{{done}} out of {{total}} pages, remained {{remained}} {{pagesWord}}"},"settings":{"title":"Settings","to":"to","btn":"Save changes","language":"عربي"},"main":{"header":"$(title)","date":{"finish":"I want to finish by","test":"My test on"}},"footer":{"openSource":"open source","copyright":"© 2021 made with <i class=\\"lar la-heart\\"></i> by <a href=\\"https://www.linkedin.com/in/hadialqattan/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hadi Alqattan</a>","moreInfo":{"terms":"Terms","privacy":"Privacy","copyright":"Copyright"}}}')},ar:{translation:JSON.parse('{"title":"حاسبة التقدم للتحصيلي","author":"هادي القطان","labels":{"tota":"المجموع الكلي","math":"الرياضيات","phys":"الفيزياء","chem":"الكيمياء","biol":"الأحياء"},"words":{"page":"صفحة","pages":"صفحات","day":"يوم","days":"أيام"},"report":{"date":"ذاكر {{pages}} {{pagesWord}}\\\\يوم، تبقى {{days}} {{daysWord}}","lastPage":"آخر صفحة: {{pageNum}}","subReport":"{{done}} من أصل {{total}} صفحات، تبقى {{remained}} {{pagesWord}}"},"settings":{"title":"الإعدادات","to":"إلى","btn":"حفظ التغييرات","language":"English"},"main":{"header":"$(title)","date":{"finish":"أريد أن أنتهي في","test":"اختباري يوافق"}},"footer":{"openSource":"مفتوح المصدر","copyright":"© 2021 صنع بـ <i class=\\"lar la-heart\\"></i> بواسطة <a href=\\"https://www.linkedin.com/in/hadialqattan/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">هادي القطان</a>","moreInfo":{"terms":"الشروط","privacy":"الخصوصية","copyright":"الحقوق"}}}')}};i.Z.use(l.Z).init({resources:d,fallbackLng:"en"}).then((function(e){Array.from(document.getElementsByClassName("i18n")).forEach((e=>{e.innerHTML=i.Z.t(e.getAttribute("data-i18n"))})),Array.from(document.getElementsByClassName("dir")).forEach((e=>{e.dir=i.Z.dir()}))}));const c=i.Z,g=e=>e.last-e.first+1,u={math:{first:6,last:87},phys:{first:90,last:155},chem:{first:160,last:231},biol:{first:234,last:302}},m=(e,t,a)=>u[e][t]=a,p={math:g(u.math),phys:g(u.phys),chem:g(u.chem),biol:g(u.biol)};var h=Object.values(p).reduce(((e,t)=>e+t));const y={math:{current:u.math.first-1,percentage:0,remained:0},phys:{current:u.phys.first-1,percentage:0,remained:0},chem:{current:u.chem.first-1,percentage:0,remained:0},biol:{current:u.biol.first-1,percentage:0,remained:0}},f=(e,t,a=!1)=>{y[e].current=t,a&&((e=>{var t,a;y[e].remained=(t=y[e].current,a=u[e],p[e]-(t-a.first+1))})(e),(e=>{var t,a;y[e].percentage=(t=p[e],a=y[e].remained,Math.round((t-a)/t*100))})(e))},v=e=>y[e].current,b=()=>{let e=0;for(const t in y)e+=y[t].remained;return e},I={target:"",test:""},w=(e,t)=>I[e]=t,E=e=>I[e],B=e=>"ar"==c.language?e>1&&e<11?"pages":"page":e>1?"pages":"page",k=e=>"ar"==c.language?e>1&&e<11?"days":"day":e>1?"days":"day",L=(e,t)=>c.t("words."+e(t)),S=(e,t)=>{e.classList.remove(e.classList[e.classList.length-1]),e.classList.add("w-"+t)},M=(e,t,a)=>{e.innerHTML=c.t("report.subReport",{done:t-a,total:t,remained:a,pagesWord:L(B,a)})},N=(e,t,a)=>{document.getElementById(e+"-"+t).value=a},T=(e,t)=>{f(e,t,!0);let a=document.getElementById(e+"-input-value"),r=document.getElementById(e+"-progress"),n=document.getElementById(e+"-report");((e,t)=>{e.innerHTML=c.t("report.lastPage",{pageNum:t})})(a,t),S(r,(e=>y[e].percentage)(e)),M(n,p[e],(e=>y[e].remained)(e))},C=(e,t)=>{w(e,t),P(e,t)},P=(e,t)=>{var a,n;((e,t)=>{let a=((e,t)=>Math.ceil(e/(t>0?t:1)))(b(),t);e.innerHTML=c.t("report.date",{pages:a,days:t,pagesWord:L(B,a),daysWord:L(k,t)})})(document.getElementById(e+"date-remained"),(a=r,n=new Date(t),Math.floor((n.getTime()-a.getTime())/864e5)))},W=()=>{P("target",new Date(E("target"))),P("test",new Date(E("test")))},D=e=>document.getElementById(e+"-last").min=parseInt(document.getElementById(e+"-first").value)+1,O=e=>localStorage.setItem(e,v(e)),_=e=>localStorage.setItem(e,E(e.substring(0,e.length-4))),H=(e,t,a)=>localStorage.setItem(e+"-"+t,a);window.onload=()=>{var e,t;setTimeout((()=>{window.scroll({top:0,left:0,behavior:"smooth"})}),100),document.getElementById("save-settings").addEventListener("click",(()=>R("settings"))),document.getElementById("change-language").addEventListener("click",(()=>R("language")));for(const t in u)for(const a in u[t])(e=localStorage.getItem(t+"-"+a))?(m(t,a,e),N(t,a,e)):N(t,a,u[t][a]);(()=>{for(const e in p)p[e]=g(u[e]);h=Object.values(p).reduce(((e,t)=>e+t))})();const a=document.getElementsByClassName("first-input-field");for(const e of a)e.addEventListener("change",(()=>q(e.id)));for(const a in u)(e=localStorage.getItem(a))&&f(a,e),(t=document.getElementById(a+"-input")).min=u[a].first-1,t.max=u[a].last,t.value=v(a),T(a,v(a));for(const t of["target","test"]){(e=localStorage.getItem(t+"date"))&&w(t,e);let a=document.getElementById(t+"date-input");a.value=E(t),a.min=o,C(t,E(t))}const r=document.getElementsByClassName("input-field");for(const e of r)e.addEventListener("input",(t=>A(t,e.id))),e.addEventListener("change",(()=>q(e.id)));Z()};const Z=()=>{let e=document.getElementById("total-progress"),t=document.getElementById("total-report"),a=(()=>{let e=0,t=0;for(const a in y)e+=y[a].percentage,t++;return Math.round(e/t)})();S(e,a),M(t,h,b()),100==a&&party.screen()},A=(e,t)=>{switch(t){case"targetdate-input":return void(e=>{C("target",e.target.value)})(e);case"testdate-input":return void(e=>{C("test",e.target.value)})(e)}switch(t){case"math-input":(e=>{T("math",e.target.value)})(e);break;case"phys-input":(e=>{T("phys",e.target.value)})(e);break;case"chem-input":(e=>{T("chem",e.target.value)})(e);break;case"biol-input":(e=>{T("biol",e.target.value)})(e);break;default:return void console.log("Invalid Input ID: "+t)}Z()},q=e=>{switch(e){case"targetdate-input":return void _("targetdate");case"testdate-input":return void _("testdate")}switch(e){case"math-input":return W(),void O("math");case"phys-input":return W(),void O("phys");case"chem-input":return W(),void O("chem");case"biol-input":return W(),void O("biol")}switch(e){case"math-first":return void D("math");case"phys-first":return void D("phys");case"chem-first":return void D("chem");case"biol-first":return void D("biol");default:return void console.log("Invalid Input ID: "+e)}},R=e=>{switch(e){case"settings":return void(()=>{let e,t;for(const a in u)for(const r in u[a])t=document.getElementById(a+"-"+r),e=parseInt(t.value),isNaN(e)||e==u[a][r]||(e=e>=t.min?e:t.min,t.value=e,H(a,r,e),m(a,r,e));for(const t in u)e=document.getElementById(t+"-input").value,(e<u[t].first||e>u[t].last)&&(e=e<u[t].first?u[t].first-1:u[t].last,T(t,e),O(t));window.onload(),document.getElementById("close-settings").click()})();case"language":return"ar"==c.language?c.changeLanguage("en-US"):c.changeLanguage("ar"),void location.reload();default:return void console.log("Invalid Input ID: "+e)}};a(962),a.e(833).then(a.bind(a,833)),a.e(364).then(a.bind(a,364)),Promise.all([a.e(912),a.e(777)]).then(a.t.bind(a,424,23)),Promise.all([a.e(912),a.e(777)]).then(a.t.bind(a,290,23)),Promise.all([a.e(912),a.e(777)]).then(a.t.bind(a,460,23))}},e=>{"use strict";e.O(0,[912,777],(()=>(786,e(e.s=786)))),e.O()}]);