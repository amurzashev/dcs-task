(this["webpackJsonptest-assignment"]=this["webpackJsonptest-assignment"]||[]).push([[0],{154:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=n(1),u=n(4),l=n(81).a,s=n(3),f=n(25);function d(){var e=Object(u.a)(["\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  box-sizing: border-box;\n"]);return d=function(){return e},e}var p=l("div",{shouldForwardProp:f.a})(d(),s.l,s.i,s.h,s.j,s.g);function m(){var e=Object(u.a)(["\n  margin: 0;\n  font-family: Fjalla One;\n  ",";\n  ",";\n"]);return m=function(){return e},e}var b=l("p",{shouldForwardProp:f.a})(m(),s.n,s.l);function g(){var e=Object(u.a)(["\n  height: 36px;\n  padding: 0 12px;\n  box-sizing: border-box;\n  border-radius: ","px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n  border: 0;\n  width: 100%;\n  &:focus {\n    outline: none;\n  }\n"]);return g=function(){return e},e}var h=l.input(g(),(function(e){return e.theme.borders[0]})),v=n(21);function E(){var e=Object(u.a)(["\n  text-decoration: none;\n  color: inherit;\n  ",";\n"]);return E=function(){return e},e}l(v.b,{shouldForwardProp:f.a})(E(),s.l);function O(){var e=Object(u.a)(['\n  border-radius: 4px;\n  height: 36px;\n  padding: 0 16px;\n  cursor: pointer;\n  font-family: "Fjalla One";\n  ',"\n"]);return O=function(){return e},e}var y=l.button(O(),(function(e){return"regular"===e.appearance?"\n    color: white;\n    background: ".concat(e.theme.colors[e.color],";\n    border: none;\n  "):"\n      color: ".concat(e.theme.colors[e.color],";\n      background: white;\n      border: 1px solid ").concat(e.theme.colors[e.color],";\n      ")}));function j(){var e=Object(u.a)(['\n  * {\n    font-family: "Fjalla One";\n  }\n']);return j=function(){return e},e}var w=l.div(j());function x(){var e=Object(u.a)(["\n  height: 36px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  &:hover {\n    background: ",";\n  }\n"]);return x=function(){return e},e}function k(){var e=Object(u.a)(["\n  display: ",";\n  background: white;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n  padding: 8px 0;\n  border-radius: ","px;\n"]);return k=function(){return e},e}var T=l.ul(k(),(function(e){return e.visible?"block":"none"}),(function(e){return e.theme.borders[0]})),S=l.li(x(),(function(e){return e.theme.colors.primaryDim})),C=function(e){var t=e.cities,n=e.callback;return a.a.createElement(T,{visible:Boolean(t.length)},t.map((function(e){return a.a.createElement(S,{key:e.id,onClick:function(){return n(e)}},a.a.createElement(b,{fontSize:2},e.name,", ",e.country))})))},_=n(72),D=n.n(_),F=function(){return a.a.createElement(D.a,{fonts:[{font:"Fjalla One",weights:[400]}]})},I=function(){return a.a.createElement(p,{p:3},"forecast")},A=n(27),R=n(6),L=n.n(R),z=n(17),P=n(29),B=n.n(P),M=n(73),N=n.n(M),V=B.a.create({baseURL:"http://api.weatherstack.com/",params:{access_key:"697bd60e5a0f3d7ca3c93b9b5493ecba",units:"f"}}),U=new N.a({username:"ablitto",lan:"en",encoding:"JSON"}),Y=function(){var e=Object(z.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.search({q:t,featureCode:"P",maxRows:10,isNameRequired:!0});case 3:return n=e.sent,e.abrupt("return",n.geonames);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),q=n(74),W=n(5),J=n(30),G=n.n(J),H=function(e){return function(t,n){t({type:"SET_MODAL_CITY",id:e.id}),n().cities.some((function(t){return t.id===e.id}))||t({type:"ADD_CITY",city:e})}},$=function(){var e=Object(r.useState)(""),t=Object(A.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),u=Object(A.a)(c,2),l=u[0],s=u[1],f=Object(W.f)(),d=Object(i.c)();return a.a.createElement(p,{p:3},a.a.createElement(p,{position:"relative"},a.a.createElement(q.DebounceInput,{element:h,value:n,onChange:function(e){o(e.target.value),e.target.value.length?Y(e.target.value).then((function(e){return s(e.map((function(e){return{name:e.name,country:e.countryName,lat:e.lat,lng:e.lng,id:String(e.geonameId),population:e.population}})))})):s([])},minLength:0,debounceTimeout:300,placeholder:"Search here..."}),a.a.createElement(p,{position:"absolute",left:0,right:0,mt:2},a.a.createElement(C,{cities:l,callback:function(e){var t={lat:e.lat,lng:e.lng};s([]),o(""),d(H(e)),f.push("?".concat(G.a.stringify(t)))}}))),a.a.createElement(Se,null))},K=Object(i.b)()($),Q=(Object(i.b)()(I),function(e){var t=e.top,n=e.getTop15Cities,o=e.cities;Object(r.useEffect)((function(){t.length||n()}),[t,n]);var c=function(e,t){for(var n=[],r=0;r<e.length;r++)for(var a=0;a<t.length;a++)e[r]===t[a].id&&n.push(t[a]);return n.sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?-1:1}))}(t,o);return a.a.createElement(p,{p:3},a.a.createElement(p,{mb:3,display:"flex",alignItems:"center"},a.a.createElement(b,{fontSize:4,mr:3},t.length?"TOP ".concat(t.length):"Loading top cities"),t.length>=1&&t.length<15?a.a.createElement(y,{appearance:"outline",color:"primary",onClick:function(){return n()}},"Restore list"):null),c.map((function(e){return a.a.createElement(ke,{key:e.id,city:e,isTop:Boolean(t.length>1)})})))}),X=n(37),Z=n(26),ee=n(38),te=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var n=Object(z.a)(L.a.mark((function n(r,a){var o,c,i,u,l,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=a(),c=o.cities,i=c.find((function(t){return t.id===e})),n.next=4,V.get("current",{params:{query:"".concat(i.lat,",").concat(i.lng)}});case 4:u=n.sent,l=u.data,s=l.current,r({type:"SET_FORECAST",forecast:Object(X.a)({},e,Object(Z.a)({},s,{last_update:Date.now()}))}),t&&ee.b.success("Forecast updated");case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},ne=function(e){var t=e.id,n=Object(i.d)((function(e){return e.forecasts[t]}));return n?a.a.createElement(p,{mt:2},"Current: ",n.temperature,"\xb0F"):a.a.createElement(p,{mt:2},"Loading forecast preview")};function re(){var e=Object(u.a)(["\n  text-decoration: underline;\n  z-index: 100;\n"]);return re=function(){return e},e}function ae(){var e=Object(u.a)(["\n  display: block;\n  cursor: pointer;\n  background: ",";\n  color: white;\n  &:not(:last-of-type) {\n    margin-bottom: 8px;\n  }\n  z-index: 90;\n"]);return ae=function(){return e},e}var oe=l(p)(ae(),(function(e){return e.theme.colors.primary})),ce=l(b)(re()),ie=function(e){var t=e.city,n=e.isTop,o=Object(i.c)(),c=Object(W.f)(),u=Object(i.d)((function(e){return e.forecasts[t.id]}));Object(r.useEffect)((function(){u||o(te(t.id))}),[t.id,o,u]);return a.a.createElement(oe,{p:3,onClick:function(){c.push("?lat=".concat(t.lat,"&lng=").concat(t.lng)),o(H(t))}},a.a.createElement(b,null,t.name,", ",t.country),a.a.createElement(b,{mt:1},"Population: ",t.population),a.a.createElement(ne,{id:t.id}),n?a.a.createElement(ce,{onClick:function(e){var n;e.stopPropagation(),o((n=t.id,function(e){e({type:"REMOVE_TOP",id:n})}))}},"Remove from top list"):null)};ie.defaultProps={isTop:!1};var ue=ie,le=function(e){var t=function(e,t){for(var n=[],r=0;r<e.length;r++)for(var a=0;a<t.length;a++)e[r]===t[a].id&&n.push(t[a]);return n}(e.favorites,e.cities);return a.a.createElement(p,{p:3},a.a.createElement(p,{mb:3},a.a.createElement(b,{fontSize:4},"Favorites")),t.map((function(e){return a.a.createElement(ue,{key:e.id,city:e})})))},se=n(46),fe=n.n(se);function de(){var e=Object(u.a)(["\n  background-image: url(",");\n  height: 50px;\n  width: 50px;\n  background-size: contain;\n  border-radius: 4px;\n"]);return de=function(){return e},e}function pe(){var e=Object(u.a)(["\n  color: white;\n"]);return pe=function(){return e},e}function me(){var e=Object(u.a)(["\n  background: ",";\n"]);return me=function(){return e},e}var be=l(p)(me(),(function(e){return e.theme.colors.primary})),ge=l(b)(pe()),he=l(p)(de(),(function(e){return e.src})),ve=function(e){var t=e.forecast,n=e.isFavorite,r=e.id,o=Object(i.c)();if(!t)return a.a.createElement(p,{p:3},a.a.createElement(b,{fontSize:4},"Loading data"));var c=new Date(t.last_update),u=c.toLocaleDateString("default",{month:"short",day:"numeric",year:"numeric"}),l=c.getHours(),s=c.getMinutes();return a.a.createElement(p,{p:3,position:"relative",height:"100%"},a.a.createElement(b,{fontSize:4,mb:3},"Current temperature: ",t.temperature,"\xb0"),a.a.createElement(b,{fontSize:3,mb:3},"Feels like: ",t.feelslike,"\xb0"),a.a.createElement(b,{fontSize:3,mb:3},t.weather_descriptions[0]),a.a.createElement(he,{src:t.weather_icons[0],mb:3}),a.a.createElement(b,null,"Last updated: ",u," ",l,":",s),a.a.createElement(p,{position:"absolute",left:0,right:0,bottom:0,p:3,display:"flex",justifyContent:"space-between"},n?a.a.createElement(y,{appearance:"regular",color:"error",onClick:function(){return o(function(){var e=Object(z.a)(L.a.mark((function e(t,n){var r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n(),a=r.modal,t({type:"REMOVE_FAVORITE",id:a});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}},"Remove from favs"):a.a.createElement(y,{appearance:"regular",color:"primary",onClick:function(){return o(function(){var e=Object(z.a)(L.a.mark((function e(t,n){var r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n(),a=r.modal,t({type:"ADD_FAVORITE",id:a});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}},"Add to favs"),a.a.createElement(y,{appearance:"outline",color:"secondary",onClick:function(){return o(te(r,!0))}},"Update info")))},Ee=function(){var e=Object(i.d)((function(e){return{modal:e.modal,cities:e.cities,forecasts:e.forecasts,favorites:e.favorites}})),t=e.modal,n=e.cities,r=e.forecasts,o=e.favorites,c=r[t],u=n.find((function(e){return e.id===t})),l=o.some((function(e){return e===t}));return a.a.createElement(p,{height:"100%",display:"flex",flexDirection:"column"},a.a.createElement(be,{p:3},a.a.createElement(ge,{fontSize:4,fontWeight:"bold"},u.name,", ",u.country)),a.a.createElement(ve,{forecast:c,isFavorite:l,id:u.id}))},Oe={content:{padding:0,height:400,width:300,position:"relative",top:"initial",bottom:"initial",left:"initial",right:"initial",marginTop:40},overlay:{display:"flex",justifyContent:"center"}};fe.a.setAppElement("body");var ye=function(){var e=Object(W.g)(),t=Object(W.f)(),n=Object(i.c)(),o=Object(i.d)((function(e){return e.modal})),c=G.a.parse(e.search).lat,u=G.a.parse(e.search).lng,l=Object(i.d)((function(e){return e.forecasts[o]})),s=Boolean(c)&&Boolean(u);return Object(r.useEffect)((function(){s&&!l&&n((function(e,t){var n=t(),r=n.modal,a=n.cities.find((function(e){return e.id===r}));e(te(a.id))}))}),[s,n,l]),a.a.createElement(fe.a,{isOpen:s,onRequestClose:function(){return t.push("/")},style:Oe},a.a.createElement(Ee,null))},je=function(e){var t=e.userLocation,n=e.cities,o=function(){var e=Object(r.useState)({}),t=Object(A.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(null),c=Object(A.a)(o,2),i=c[0],u=c[1],l=function(e){var t=e.coords;a({latitude:t.latitude,longitude:t.longitude})},s=function(e){u(e.message)};return Object(r.useEffect)((function(){var e=navigator.geolocation;if(e){var t=e.watchPosition(l,s);return function(){return e.clearWatch(t)}}u("Geolocation is not supported")}),[]),Object(Z.a)({},n,{error:i})}(),c=o.error,u=o.latitude,l=o.longitude,s=Object(i.c)();if(Object(r.useEffect)((function(){var e,t;u&&l&&s((e=u,t=l,function(){var n=Object(z.a)(L.a.mark((function n(r,a){var o,c,i;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.a.get("http://api.geonames.org/findNearbyJSON",{params:{username:"ablitto",lan:"en",lat:e,lng:t}});case 2:o=n.sent,c=o.data,i={name:c.geonames[0].name,country:c.geonames[0].countryName,lat:c.geonames[0].lat,lng:c.geonames[0].lng,id:String(c.geonames[0].geonameId),population:c.geonames[0].population},r({type:"ADD_CITY",city:i}),r({type:"SET_USER_LOCATION",id:i.id});case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()))}),[s,u,l]),c)return a.a.createElement(p,{position:"fixed",bottom:20,right:20},"Please allow position tracking");if(console.log(t),t){var f=n.find((function(e){return e.id===t}));return a.a.createElement(p,{position:"fixed",bottom:20,right:20},a.a.createElement(b,null,"Your current location"),a.a.createElement(ue,{city:f}))}return null},we={getTop15Cities:function(){return function(){var e=Object(z.a)(L.a.mark((function e(t,n){var r,a,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&rows=15&sort=population&facet=timezone&facet=country");case 2:r=e.sent,a=r.data.records.map((function(e){return{name:e.fields.name,country:e.fields.country,lat:e.fields.latitude,lng:e.fields.longitude,id:e.fields.geoname_id,population:e.fields.population}})),o=r.data.records.map((function(e){return e.fields.geoname_id})),t({type:"ADD_CITIES",cities:a}),t({type:"ADD_TOP_CITIES",ids:o});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},xe=Object(i.b)((function(e){return{top:e.top,cities:e.cities}}),we)(Q),ke=Object(i.b)()(ue),Te=Object(i.b)((function(e){return{cities:e.cities,favorites:e.favorites}}))(le),Se=Object(i.b)()(ye),Ce=Object(i.b)((function(e){return{userLocation:e.userLocation,cities:e.cities}}))(je);var _e=function(){return a.a.createElement(p,{height:"100vh"},a.a.createElement(p,{height:"100%",display:"grid",gridTemplateColumns:"320px 1fr 320px"},a.a.createElement(xe,null),a.a.createElement(W.c,null,a.a.createElement(W.a,{path:"/",exact:!0,component:K})),a.a.createElement(Te,null),a.a.createElement(Ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(150);var De=n(75),Fe={colors:{primary:"#00A1E4",primaryDim:"#EBF9FF",secondary:"#04E762",warning:"#FFD147",error:"#FF6B6B"},borders:[4,8,12,16]},Ie=n(13),Ae=n(77),Re=n(78),Le=n(47),ze=n(79),Pe=n.n(ze),Be={},Me=n(18),Ne=[],Ve=[],Ue=[],Ye=Object(Ie.combineReducers)({forecasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORECAST":return Object(Z.a)({},e,{},t.forecast);default:return e}},cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CITY":return[].concat(Object(Me.a)(e),[t.city]);case"ADD_CITIES":return[].concat(Object(Me.a)(e),Object(Me.a)(t.cities)).filter((function(e,t,n){return n.findIndex((function(t){return t.id===e.id}))===t}));default:return e}},top:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TOP_CITIES":return Object(Me.a)(new Set([].concat(Object(Me.a)(e),Object(Me.a)(t.ids))));case"REMOVE_TOP":return e.filter((function(e){return e!==t.id}));default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return[].concat(Object(Me.a)(e),[t.id]);case"REMOVE_FAVORITE":return e.filter((function(e){return e!==t.id}));default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MODAL_CITY":return t.id;default:return e}},userLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_LOCATION":return t.id;default:return e}}}),qe={key:"root",storage:Pe.a},We=Object(Le.a)(qe,Ye),Je=Object(Ie.createStore)(We,Object(Ae.composeWithDevTools)(Object(Ie.applyMiddleware)(Re.a))),Ge=Object(Le.b)(Je),He=n(80);n(153);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:Je},a.a.createElement(He.a,{persistor:Ge,loading:"test"},a.a.createElement(De.a,{theme:Fe},a.a.createElement(w,null,a.a.createElement(v.a,null,a.a.createElement(_e,null)))))),a.a.createElement(F,null),a.a.createElement(ee.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,n){e.exports=n(154)}},[[82,1,2]]]);
//# sourceMappingURL=main.df96ff33.chunk.js.map