(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{54:function(e,c,t){},55:function(e,c,t){},56:function(e,c,t){},57:function(e,c,t){},64:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t(0),n=t.n(a),i=t(20),r=t.n(i),l=(t(54),t(55),t(6)),o=(t(56),t(29)),j=t.n(o),h=t(81),d=t(17),b=(t(57),t(39)),u=t.n(b),O=t(27),m=t.n(O),x=t(80),g=t(4),_=Object(a.createContext)(),p=function(e){var c=e.reducer,t=e.initialState,n=e.children;return Object(s.jsx)(_.Provider,{value:Object(a.useReducer)(c,t),children:n})},v=function(){return Object(a.useContext)(_)},f="SET_SEARCH_TERM";var N=function(e){var c=e.hideButton,t=void 0!==c&&c,n=v(),i=Object(d.a)(n,2),r=(i[0].term,i[1]),l=Object(a.useState)(""),o=Object(d.a)(l,2),j=o[0],h=o[1],b=Object(g.f)(),O=function(e){e.preventDefault(),r({type:f,term:j}),b.push("./search")};return Object(s.jsxs)("form",{className:"search",children:[Object(s.jsxs)("div",{className:"search__input",children:[Object(s.jsx)(m.a,{className:"search__inputIcon"}),Object(s.jsx)("input",{className:"search__inputField",value:j,onChange:function(e){return h(e.target.value)}}),Object(s.jsx)(u.a,{})]}),t?Object(s.jsxs)("div",{className:"search__buttons",children:[Object(s.jsx)(x.a,{className:"search__buttonsHidden",type:"submit",onClick:O,variant:"outlined",children:"Google Search"}),Object(s.jsx)(x.a,{className:"search__buttonsHidden",variant:"outlined",children:"I'am Feeling Lucky"})]}):Object(s.jsxs)("div",{className:"search__buttons",children:[Object(s.jsx)(x.a,{type:"submit",onClick:O,variant:"outlined",children:"Google Search"}),Object(s.jsx)(x.a,{variant:"outlined",children:"I'am Feeling Lucky"})]})]})};var P=function(){return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsxs)("div",{className:"home__header",children:[Object(s.jsxs)("div",{className:"home__headerLeft",children:[Object(s.jsx)(l.b,{to:"/about",children:"About"}),Object(s.jsx)(l.b,{to:"/store",children:"Store"})]}),Object(s.jsxs)("div",{className:"home__headerRight",children:[Object(s.jsx)(l.b,{to:"/gmail",children:"Gmail"}),Object(s.jsx)(l.b,{to:"/images",children:"Images"}),Object(s.jsx)(j.a,{}),Object(s.jsx)(h.a,{})]})]}),Object(s.jsxs)("div",{className:"home__body",children:[Object(s.jsx)("img",{alt:"google",src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}),Object(s.jsx)(N,{})]}),Object(s.jsx)("div",{className:"home__inputContainer",children:Object(s.jsx)("span",{className:"home__owner",children:"Made by Shihas"})})]})},S=(t(64),t(32)),w=t.n(S),y=t(40),k=function(e){var c=Object(a.useState)(null),t=Object(d.a)(c,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var c=Object(y.a)(w.a.mark((function c(){return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyCJ0iY4bmyxF5-kO8uFbiSVW5a6P2VNXHM","&cx=").concat("51a9e3defee29b00a","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[e]),{data:s}},C=t(41),I=t.n(C),F=t(42),L=t.n(F),T=t(43),M=t.n(T),R=t(44),A=t.n(R),B=t(45),E=t.n(B);var H=function(){var e=v(),c=Object(d.a)(e,2),t=c[0].term,a=(c[1],k(t).data);return console.log(a),Object(s.jsxs)("div",{className:"searchPage",children:[Object(s.jsxs)("div",{className:"searchPage__header",children:[Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"})}),Object(s.jsxs)("div",{className:"searchPage__headerBody",children:[Object(s.jsx)(N,{hideButton:!0,value:t}),Object(s.jsxs)("div",{className:"searchPage__options",children:[Object(s.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(s.jsxs)("div",{className:"searchPage__option active",children:[Object(s.jsx)(m.a,{}),Object(s.jsx)(l.b,{to:"/all",children:"All"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(I.a,{}),Object(s.jsx)(l.b,{to:"/all",children:"News"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(L.a,{}),Object(s.jsx)(l.b,{to:"/all",children:"Images"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(M.a,{}),Object(s.jsx)(l.b,{to:"/all",children:"Shopping"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(A.a,{}),Object(s.jsx)(l.b,{to:"/all",children:"Maps"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(E.a,{}),Object(s.jsx)(l.b,{to:"/all",children:"More"})]})]}),Object(s.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(s.jsx)("div",{className:"searchPage__option",children:Object(s.jsx)(l.b,{to:"/all",children:"Settings"})}),Object(s.jsx)("div",{className:"searchPage__option",children:Object(s.jsx)(l.b,{to:"/all",children:"Tools"})})]})]})]})]}),a?Object(s.jsxs)("div",{className:"searchPage__results",children:[Object(s.jsx)("div",{className:"searchPage__resultCount",children:Object(s.jsxs)("p",{children:["About ",null===a||void 0===a?void 0:a.searchInformation.formattedTotalResults," results (",null===a||void 0===a?void 0:a.searchInformation.formattedSearchTime,") for ",t]})}),a.items.map((function(e){return Object(s.jsxs)("div",{className:"searchPage__result",children:[e.pagemap.cse_thumbnail?Object(s.jsx)("img",{className:"searchPage__resultImage",src:e.pagemap.cse_thumbnail[0].src}):"",Object(s.jsx)("a",{className:"searchPage__resultLink",href:e.link,children:e.displayLink}),Object(s.jsx)("a",{className:"searchPage__resultTitle",href:e.link,children:Object(s.jsx)("h3",{children:e.title})}),Object(s.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]},e.cacheId)}))]}):""]})};var G=function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(l.a,{children:Object(s.jsxs)(g.c,{children:[Object(s.jsx)(g.a,{path:"/search",children:Object(s.jsx)(H,{})}),Object(s.jsx)(g.a,{path:"/",children:Object(s.jsx)(P,{})})]})})})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{initialState:{term:null},reducer:function(e,c){switch(console.log(c),c.type){case f:return{term:c.term};default:return e}},children:Object(s.jsx)(G,{})})}),document.getElementById("root")),J()}},[[66,1,2]]]);
//# sourceMappingURL=main.0832f998.chunk.js.map