(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(68)},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),s=(a(39),a(6)),o=a(13),u=a(1),i=function(e){var t=e.handleChange;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("label",null,"Country"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"country",placeholder:"Enter Country"})),l.a.createElement("div",null,l.a.createElement("label",null,"Category"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"category",placeholder:"Enter Category"})))},m=function(e){var t=e.handleChange;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("label",null,"Search only in Title of the article"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"qInTitle",placeholder:"Search Title"})),l.a.createElement("div",null,l.a.createElement("label",null,"News Domains"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"domains",placeholder:"example.com"})),l.a.createElement("div",null,l.a.createElement("label",null,"Exclude News Domains"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"excludeDomains",placeholder:"example.com"})),l.a.createElement("div",null,l.a.createElement("label",null,"News From Date"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"from",placeholder:"2021-22-05"})),l.a.createElement("div",null,l.a.createElement("label",null,"News To Date"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"to",placeholder:"2021-22-05"})),l.a.createElement("div",null,l.a.createElement("label",null,"Language"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"language",placeholder:"en"})),l.a.createElement("div",null,l.a.createElement("label",null,"Sort By"),l.a.createElement("select",{defaultValue:"publishedAt",onChange:function(e){return t(e)},name:"sortBy"},l.a.createElement("option",{value:"publishedAt"},"Published At"),l.a.createElement("option",{value:"relevancy"},"Relevance"),l.a.createElement("option",{value:"popularity"},"Popularity"))))},d=(a(40),function(e){var t=e.filters,a=e.setFilters,r=e.currentPage,c=Object(n.useRef)(),s=function(e){var n=t,l=e.target;"q"!==l.name&&"qInTitle"!==l.name||(n[l.name]="all-news"===r?encodeURI(l.value):l.value),n[l.name]="q"===l.name||"qInTitle"===l.name?encodeURI(l.value):l.value,!r&&n.sources.length&&(n.country.length||n.category.length)&&(c.current.value="",n.sources="",alert("Sources can't be combined with country or category, clearing sources fiter value")),n.page=1,a(n)};return l.a.createElement("div",{className:"filters"},l.a.createElement("div",null,l.a.createElement("label",null,"Search in Title or body of the article"),l.a.createElement("input",{type:"text",onChange:function(e){return s(e)},name:"q",placeholder:"Search Key"})),l.a.createElement("div",null,l.a.createElement("label",null,"News Sources, you can add comma separated sources upto maximum of 20 sources."," ",r?"":"Can't be combined with country or category"),l.a.createElement("input",{type:"text",onChange:function(e){return s(e)},name:"sources",placeholder:"Enter Source",ref:c})),"all-news"===r?l.a.createElement(m,{handleChange:s}):l.a.createElement(i,{handleChange:s}),l.a.createElement("div",null,l.a.createElement("label",null,"Page Size"),l.a.createElement("select",{defaultValue:"10",onChange:function(e){return s(e)},name:"pageSize"},l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"25"},"25"),l.a.createElement("option",{value:"50"},"50"),l.a.createElement("option",{value:"100"},"100"))))}),E=a(12),p=a.n(E),g=(a(59),function(e){var t=e.setResults,a=e.setMessage,r=e.filters,c=e.setFilters,s=e.currentPage,o=(e.totalResults,e.setTotalResults),u=e.setLoader;Object(n.useEffect)((function(){i()}),[]);var i=function(){console.log(r.test.myname),u(!0);var e="http://localhost:3001/".concat(s||"","?");for(var n in r)r[n].length&&(e+="".concat(n,"=").concat(r[n],"&"));p.a.get(e).then((function(e){return e.data.error?("missingParams"===e.data.code&&a(e.data.message),t([]),void u(!1)):(t(e.data.articles),o(e.data.totalResults),e.data.articles.length?a("Showing ".concat(e.data.articles.length," of ").concat(e.data.totalResults)):a("No search results found, please search with different parameters"),void u(!1))}))};return l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),i()}(e)}},l.a.createElement(d,{filters:r,setFilters:c,currentPage:s}),l.a.createElement("div",{className:"load-more-container"},l.a.createElement("button",null,"GET NEWS")))}),h=a(17),f=(a(60),function(e){var t=e.results,a=e.setResults,n=e.setMessage,r=e.filters,c=e.setFilters,s=e.currentPage,o=e.totalResults,u=e.setTotalResults,i=e.setLoader,m=function(){i(!0);var e="http://localhost:3001/".concat(s||"","?");for(var l in r)r[l].length&&(e+="".concat(l,"=").concat(r[l],"&"));p.a.get(e).then((function(e){if(e.data.error)return"missingParams"===e.data.code&&n(e.data.message),a([]),void i(!1);var l=[].concat(Object(h.a)(t),Object(h.a)(e.data.articles));return a(l),u(e.data.totalResults),e.data.articles.length?n("Showing ".concat(l.length," of ").concat(e.data.totalResults)):n("No search results found, please search with different parameters"),void i(!1)}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,t.map((function(e,t){var a;return l.a.createElement("li",{className:"results-list",key:"atricle-".concat(t)},l.a.createElement("div",{className:"article-preview"},l.a.createElement("div",{className:"title-container"},l.a.createElement("p",{className:"article-title"},l.a.createElement("b",null,e.title))),l.a.createElement("div",{className:"right-content-container"},e.urlToImage?l.a.createElement("img",{className:"thumbnail",src:e.urlToImage,alt:""}):null,l.a.createElement("p",{className:"published-date"},e.publishedAt?new Date(e.publishedAt).toUTCString():""))),l.a.createElement("div",{className:"full-article"},l.a.createElement("p",{className:"article-description"},e.description?e.description.replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/<\/?[^>]+(>|$)/g,""):""),e.content?l.a.createElement("p",{className:"article-content"},e.content.slice(0,e.content.indexOf("[+")).replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/<\/?[^>]+(>|$)/g,"")):"",l.a.createElement("div",{className:"bottom"},l.a.createElement("a",{rel:"noopener noreferrer",href:e.url,target:"_blank",className:"article-link"},"[+ more]"),l.a.createElement("p",{className:"author-name"},(null===(a=e.source)||void 0===a?void 0:a.name)?" -  ".concat(e.author):""))))}))),parseInt(o)-parseInt(r.pageSize*r.page)<=0?null:l.a.createElement("div",{className:"load-more-container"},l.a.createElement("button",{onClick:function(e){return function(e){var t=r;t.page++,c(t),m()}()}},"LOAD MORE")))}),v=function(e){var t=e.message;return l.a.createElement("div",null,l.a.createElement("h2",null,t))},b=function(e){var t=e.setLoader,a=Object(n.useState)({q:"",country:"",category:"",sources:"",pageSize:"10",page:1}),r=Object(s.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)([]),i=Object(s.a)(u,2),m=i[0],d=i[1],E=Object(n.useState)([]),p=Object(s.a)(E,2),h=p[0],b=p[1],y=Object(n.useState)(""),w=Object(s.a)(y,2),N=w[0],S=w[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"page-title"},"UK News"),l.a.createElement(g,{setResults:d,setMessage:S,filters:c,setFilters:o,totalResults:h,setTotalResults:b,setLoader:t}),l.a.createElement(v,{message:N}),l.a.createElement(f,{results:m,setResults:d,setMessage:S,filters:c,setFilters:o,totalResults:h,setTotalResults:b,setLoader:t}))},y=function(e){var t=e.setLoader,a=Object(n.useState)({q:"",qInTitle:"",sources:"",domains:"",excludeDomains:"",from:"",to:"",language:"en",sortBy:"publishedAt",pageSize:"10",page:1}),r=Object(s.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)([]),i=Object(s.a)(u,2),m=i[0],d=i[1],E=Object(n.useState)([]),p=Object(s.a)(E,2),h=p[0],b=p[1],y=Object(n.useState)(""),w=Object(s.a)(y,2),N=w[0],S=w[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"page-title"},"All News"),l.a.createElement(g,{setResults:d,setMessage:S,filters:c,setFilters:o,totalResults:h,setTotalResults:b,currentPage:"all-news",setLoader:t}),l.a.createElement(v,{message:N}),l.a.createElement(f,{results:m,setResults:d,setMessage:S,filters:c,setFilters:o,totalResults:h,setTotalResults:b,currentPage:"all-news",setLoader:t}))},w=a(29),N=a(30),S=a(33),O=a(32),R=(a(61),function(e){Object(S.a)(a,e);var t=Object(O.a)(a);function a(){var e;return Object(w.a)(this,a),(e=t.call(this)).state={error:!1},e}return Object(N.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return l.a.createElement("div",{className:"error-boundary"},this.state.error?l.a.createElement("h2",null,"Something went Wrong! Please try after some time"):this.props.children)}}],[{key:"getDerivedStateFromError",value:function(e){return{error:!0}}}]),a}(l.a.Component)),j=(a(62),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(o.a,null,l.a.createElement("div",{className:"app"},l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"link-tabs"},l.a.createElement(o.b,{to:"/"},"UK News")),"|",l.a.createElement("div",null,l.a.createElement(o.b,{to:"/all-news/"},"All News"))),l.a.createElement("div",{className:"container"},a?l.a.createElement("div",{className:"overlay"},l.a.createElement("img",{src:"".concat(window.location.origin,"/loader.gif")})):null,l.a.createElement(R,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(b,{setLoader:r})),l.a.createElement(u.a,{exact:!0,path:"/all-news/"},l.a.createElement(y,{setLoader:r})))),l.a.createElement("footer",{className:"footer"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.370bc3b6.chunk.js.map