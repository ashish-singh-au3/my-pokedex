(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),o=(t(98),t(84)),m=t(14),i=t(27),s=t(28),u=t(32),d=t(29),p=t(33),h=(t(52),t(58)),E=t(81),f=t(49),v=t.n(f),g=t(82),b=t.n(g),k=t(79),y=t.n(k),w=t(156),x=t(160),j=t(161),O=t(60),C=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h5",null,l.a.createElement("center",null,"\xa9 Copyright by Ashish Singh")))}}]),a}(n.Component),N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={id:[],name:[],type:[],pokemon:[]},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:4000/pokemon/?_limit=100").then(function(e){return e.json()}).then(function(a){return e.setState({pokemon:a})})}},{key:"render",value:function(){var e=this,a=this.state.pokemon.map(function(a){return l.a.createElement(w.a,{item:!0,xs:4},l.a.createElement(x.a,null,l.a.createElement(j.a,null,a.id,".Name : ",a.name.english),l.a.createElement(j.a,null,"Type : ",a.type[0],",",a.type[1]),l.a.createElement(j.a,null,"Attack level : ",a.base.Attack),l.a.createElement(j.a,null,"Type : ",a.base.Defense),e.editPokemon,l.a.createElement(O.a,{className:"col-md-6 offset-md-3",variant:"dark",href:"/new"},"Add New Details",l.a.createElement(y.a,null))))});return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(h.a,{expand:"lg",variant:"light",bg:"light"},l.a.createElement(E.a,null,l.a.createElement(h.a.Brand,{href:"new",variant:"dark"},l.a.createElement("div",{className:" row-md-6 offset-md-3 nav-bar"}," ",l.a.createElement("strong",null,l.a.createElement("h1",null,"PokedexApp")))))),l.a.createElement("br",null),l.a.createElement(O.a,{variant:"dark",href:"/search",className:"col-md-3 offset-md-4"},"Search your favourite Pokemon here...",l.a.createElement(v.a,null))),l.a.createElement("hr",null),l.a.createElement(O.a,{variant:"dark",href:"/new",className:"col-md-3 offset-md-4"},l.a.createElement(b.a,null)," Create a new Pokemon here"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w.a,{container:!0,spacing:2},a),l.a.createElement(C,null))}}]),a}(n.Component),S=t(83),P=t(15),_=t(30),H=t.n(_),A=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).changeHandler=function(e){t.setState(Object(S.a)({},e.target.name,e.target.value))},t.submitHandler=function(e){e.preventDefault(),console.log(t.state),H.a.post(" http://localhost:4000/newPokemon",t.state).then(function(e){console.log(e)})},t.state={name:"",type:"",attack_level:"",defense_level:"",description:""},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.type,n=e.attack_level,r=e.defense_level,c=e.description;return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"form-wrapper col-md-3 offset-md-4"},l.a.createElement("h2",null," Found a New Pokemon?..."),l.a.createElement(P.a,{onSubmit:this.submitHandler},l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"name"},"Name"),l.a.createElement(P.a.Control,{id:"name",name:"name",as:"textarea",rows:"1",value:a,onChange:this.changeHandler,placeholder:"Enter name of Pokemon..."})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"type"},"Type"),l.a.createElement(P.a.Control,{id:"type",name:"type",as:"textarea",rows:"1",value:t,onChange:this.changeHandler,placeholder:"Enter Type of Pokemon...",isrequired:!0})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"attack_level"},"Attack"),l.a.createElement(P.a.Control,{id:"attack_level",name:"attack_level",as:"textarea",rows:"1",value:n,onChange:this.changeHandler,placeholder:"Enter attack-level..."})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"defense_level"},"Defense"),l.a.createElement(P.a.Control,{id:"defense_level",name:"defense_level",as:"textarea",rows:"1",value:r,onChange:this.changeHandler,placeholder:"Enter defense-level..."})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"description"},"Description"),l.a.createElement(P.a.Control,{id:"description",name:"description",as:"textarea",rows:"3",value:c,onChange:this.changeHandler,placeholder:"Please drop the description here..."})),l.a.createElement(O.a,{className:"d-inline-block",variant:"dark",type:"submit"},"Submit"),l.a.createElement(O.a,{variant:"dark",className:"col-md-3 offset-md-4",href:"/"},"Home"))),l.a.createElement(C,null))}}]),a}(n.Component),I=t(42),L=t(163),T=t(126),B=t(166),F=t(164),D=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},G=t(162),M=t(18),W=Object(G.a)(function(e){return{pokedexContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},searchContainer:{display:"flex",backgroundColor:Object(M.b)(e.palette.common.white,.15),paddingLeft:"20px",paddingRight:"80px",marginTop:"5px",marginBottom:"5px"},searchIcon:{alignSelf:"flex-end",marginBottom:"5px"},searchInput:{width:"200px",margin:"5px"}}}),J=function(e){var a=W(),t=e.history,r=Object(n.useState)({}),c=Object(I.a)(r,2),o=c[0],m=c[1],i=Object(n.useState)(""),s=Object(I.a)(i,2),u=s[0],d=s[1];Object(n.useEffect)(function(){H.a.get("https://pokeapi.co/api/v2/pokemon?limit=100").then(function(e){var a=e.data.results,t={};a.forEach(function(e,a){t[a+1]={id:a+1,name:e.name}}),m(t)})},[]);return l.a.createElement("div",null,l.a.createElement("div",{className:a.searchContainer},l.a.createElement(v.a,{className:a.searchIcon}),l.a.createElement(B.a,{className:a.searchInput,onChange:function(e){d(e.target.value)},label:"Search Pokemon",variant:"standard"})),o?l.a.createElement(w.a,{container:!0,spacing:2,className:a.pokedexContainer},Object.keys(o).map(function(e){return o[e].name.includes(u)&&function(e){var n=o[e],r=n.id,c=n.name,m=n.sprite;return l.a.createElement(w.a,{item:!0,xs:4,key:e},l.a.createElement(x.a,{onClick:function(){return t.push("/".concat(r))}},l.a.createElement(L.a,{className:a.cardMedia,image:m,style:{width:"130px",height:"130px"}}),l.a.createElement(j.a,{className:a.cardContent},l.a.createElement(T.a,null,"".concat(r,". ").concat(D(c))))))}(e)})):l.a.createElement(F.a,null),l.a.createElement(C,null))},R=t(165),q=t(167),U=function(e){var a=e.match,t=e.history,r=a.params.pokemonId,c=Object(n.useState)(void 0),o=Object(I.a)(c,2),m=o[0],i=o[1];Object(n.useEffect)(function(){H.a.get("https://pokeapi.co/api/v2/pokemon/".concat(r,"/")).then(function(e){var a=e.data;i(a)}).catch(function(e){i(!1)})},[r]);return l.a.createElement("div",{className:"poke-card"},void 0===m&&l.a.createElement(F.a,null),void 0!==m&&m&&function(e){var a=e.name,t=e.id,n=e.species,r=e.height,c=e.weight,o=e.types,m=e.sprites,i="https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),s=m.front_default;return l.a.createElement("div",null,l.a.createElement(T.a,{variant:"h1"},"".concat(t,".")," ",D(a),l.a.createElement("img",{src:s})),l.a.createElement("img",{style:{width:"300px",height:"300px"},src:i}),l.a.createElement(T.a,{variant:"h3"},"Pokemon Info"),l.a.createElement(T.a,null,"Species: ",l.a.createElement(R.a,{href:n.url},n.name," ")),l.a.createElement(T.a,null,"Height: ",r," "),l.a.createElement(T.a,null,"Weight: ",c," "),l.a.createElement(T.a,{variant:"h6"}," Types:"),o.map(function(e){var a=e.type.name;return l.a.createElement(T.a,{key:a}," ","".concat(a))}))}(m),!1===m&&l.a.createElement(T.a,null," Pokemon not found"),void 0!==m&&l.a.createElement("center",null,l.a.createElement(q.a,{variant:"contained",onClick:function(){return t.push("/")}},"Back to Home")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C,null))};var $=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:N}),l.a.createElement(m.a,{exact:!0,path:"/new",component:A}),l.a.createElement(m.a,{exact:!0,path:"/search",component:J}),l.a.createElement(m.a,{exact:!0,path:"/:pokemonId",render:function(e){return l.a.createElement(U,e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(123);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},52:function(e,a,t){},93:function(e,a,t){e.exports=t(124)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.3b289f53.chunk.js.map