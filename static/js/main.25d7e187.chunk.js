(this.webpackJsonplivecovidtracker=this.webpackJsonplivecovidtracker||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),i=c.n(s),a=(c(11),c(2)),d=c.n(a),j=c(3),h=c(4),l=c(0),o=(c(14),function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),r(c.statewise),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container-fluid mt-5",children:[Object(l.jsx)("div",{className:"main-heading",children:Object(l.jsx)("h1",{children:Object(l.jsxs)("center",{children:[Object(l.jsx)("span",{className:"font-weight-bold",children:"India"}),"Covid19 Dashboard"]})})}),Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"table table-hover",children:[Object(l.jsx)("thead",{className:"thead-dark",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"State"}),Object(l.jsx)("th",{children:"Confirmed"}),Object(l.jsx)("th",{children:"Recoverd"}),Object(l.jsx)("th",{children:"Deaths"}),Object(l.jsx)("th",{children:"Active"}),Object(l.jsx)("th",{children:"Updated"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.state}),Object(l.jsx)("td",{children:e.confirmed}),Object(l.jsx)("td",{children:e.recovered}),Object(l.jsx)("td",{children:e.deaths}),Object(l.jsx)("td",{children:e.active}),Object(l.jsx)("td",{children:e.lastupdatedtime})]},t)}))})]})})]})})}),b=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(o,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.25d7e187.chunk.js.map