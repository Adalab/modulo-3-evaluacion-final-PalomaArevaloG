(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(8),n=c.n(r),s=c(11),i=c(12),j=(c(17),c(18),c.p+"static/media/RickMortyLogo.de13d484.png"),o=c(1),d=function(e){return Object(o.jsxs)("article",{children:[Object(o.jsx)("img",{src:e.characterData.image,alt:"Foto de ".concat(e.characterData.name)}),Object(o.jsxs)("p",{children:["Nombre: ",e.characterData.name]}),Object(o.jsxs)("p",{children:["Especie: ",e.characterData.specie]})]})},h=function(e){console.log("character list",e);var t=e.data.map((function(e){return Object(o.jsx)("li",{className:"card",children:Object(o.jsx)(d,{characterData:e})},e.id)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{className:"characterList",children:t})})};var u=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,specie:e.species}}))}))},l=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){u().then((function(e){console.log(e),r(e)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("img",{className:"header_img",src:j,title:"Rick y Morty",alt:"Rick y Morty"}),Object(o.jsxs)("form",{children:["Buscador de personajes:",Object(o.jsx)("input",{type:"text"})]})]}),Object(o.jsx)("main",{children:Object(o.jsx)(h,{data:c})})]})};n.a.render(Object(o.jsx)(s.a,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0115af91.chunk.js.map