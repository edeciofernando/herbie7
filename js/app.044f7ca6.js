(function(t){function a(a){for(var e,n,i=a[0],c=a[1],l=a[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(a);while(m.length)m.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,a=0;a<s.length;a++){for(var r=s[a],e=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(e=!1)}e&&(s.splice(a--,1),t=n(n.s=r[0]))}return t}var e={},o={app:0},s=[];function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,a,r){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(r,e,function(a){return t[a]}.bind(null,e));return r},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/herbie7/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,a,r){t.exports=r("56d7")},"0442":function(t,a,r){},"3d92":function(t,a,r){"use strict";var e=r("41b1"),o=r.n(e);o.a},"3fe8":function(t,a,r){},"41b1":function(t,a,r){},"56d7":function(t,a,r){"use strict";r.r(a);r("e260"),r("e6cf"),r("cca6"),r("a79d");var e=r("2b0e"),o=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"app"}},[r("menu-principal",{attrs:{user:t.user}}),r("router-view")],1)},s=[],n=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("nav",{staticClass:"navbar navbar-expand-sm bg-primary navbar-dark mb-3"},[r("img",{staticClass:"mx-3",attrs:{src:"herbie.png",alt:"Herbie"}}),r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Revenda Herbie")]),r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbardrop","data-toggle":"dropdown"}},[t._v(" Cadastros ")]),r("div",{staticClass:"dropdown-menu"},[r("router-link",{staticClass:"dropdown-item",attrs:{to:"/cadcarros"}},[t._v("Veículos")]),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Marcas")]),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Usuários")])],1)]),t._m(0),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbardrop","data-toggle":"dropdown"}},[t._v(" Gráficos ")]),r("div",{staticClass:"dropdown-menu"},[r("router-link",{staticClass:"dropdown-item",attrs:{to:"/grafcarrosmarcas"}},[t._v("Veículos por Marcas")]),r("router-link",{staticClass:"dropdown-item",attrs:{to:"/grafcarroscores"}},[t._v("Veículos por Cores")]),r("router-link",{staticClass:"dropdown-item",attrs:{to:"/grafcadastros"}},[t._v("Cadastro de Veículos")]),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Veículos x Propostas")]),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Propostas Mensais")])],1)]),t._m(1)]),r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbardrop","data-toggle":"dropdown"}},[r("i",{staticClass:"fas fa-user mr-1"}),t.user?r("span",[t._v(t._s(t.user))]):r("span",[t._v("(Não Logado)")])]),r("div",{staticClass:"dropdown-menu"},[r("router-link",{staticClass:"dropdown-item",attrs:{to:"/login"}},[t._v("Login")]),r("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.sair}},[t._v("Logout")])],1)])])],1)},i=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbardrop","data-toggle":"dropdown"}},[t._v(" Pesquisas ")]),r("div",{staticClass:"dropdown-menu"},[r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Veículos")]),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Propostas")])])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Utilitários")])])}],c={props:{user:String},methods:{sair:function(){localStorage.removeItem("token"),this.$parent.mudaUser(null)}}},l=c,u=(r("b9f8"),r("2877")),d=Object(u["a"])(l,n,i,!1,null,"205fb86f",null),m=d.exports,f={name:"App",components:{MenuPrincipal:m},data:function(){return{user:null}},methods:{mudaUser:function(t){this.user=t}}},p=f,v=Object(u["a"])(p,o,s,!1,null,null,null),h=v.exports,_=r("8c4f"),C=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container"},[r("h2",[t._v("Área Restrita")]),r("h3",[t._v("Controle de Veículos e Propostas")])])}],g={},w=g,y=Object(u["a"])(w,C,b,!1,null,"7878c6fc",null),x=y.exports,$=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container"},[r("h2",[t._v("Cadastro de Veículos "),r("router-link",{staticClass:"btn btn-success float-right",attrs:{to:"/formcarros"}},[r("i",{staticClass:"fas fa-plus-circle"}),t._v(" Adicionar ")])],1),r("table",{staticClass:"table table-striped"},[t._m(0),r("tbody",t._l(t.carros,(function(a){return r("tr",{key:a.id},[r("td",[t._v(t._s(a.modelo))]),r("td",[t._v(t._s(a.marca))]),r("td",[t._v(t._s(a.cor))]),r("td",{staticClass:"text-center"},[t._v(t._s(a.ano))]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("estiloMoeda")(a.preco)))]),r("td",{staticClass:"text-center"},[r("img",{attrs:{src:a.foto,alt:"Foto do Carro"}})]),t._m(1,!0)])})),0)])])},P=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("thead",[r("tr",[r("th",[t._v("Modelo")]),r("th",[t._v("Marca")]),r("th",[t._v("Cor")]),r("th",[t._v("Ano")]),r("th",[t._v("Preço R$")]),r("th",[t._v("Foto")]),r("th",[t._v("Ações")])])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("td",{staticClass:"text-center"},[r("a",{staticClass:"btn btn-sm btn-warning",attrs:{href:"#",title:"Alterar"}},[r("i",{staticClass:"far fa-edit"})]),r("a",{staticClass:"btn btn-sm btn-danger mx-1",attrs:{href:"#",title:"Excluir"}},[r("i",{staticClass:"fas fa-minus-circle"})]),r("a",{staticClass:"btn btn-sm btn-info",attrs:{href:"#",title:"Destacar"}},[r("i",{staticClass:"far fa-star"})])])}],k=r("bc3a"),E=r.n(k),O={data:function(){return{carros:[]}},methods:{listar:function(){var t=this;E.a.get(this.$urlAPI+"/carros").then((function(a){return t.carros=a.data}))}},mounted:function(){this.listar()},filters:{estiloMoeda:function(t){return t.toLocaleString("pt-br",{minimumFractionDigits:2})}}},M=O,A=(r("bc99"),Object(u["a"])(M,$,P,!1,null,"68c81877",null)),j=A.exports,V=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container"},[r("h2",[t._v("Inclusão de Veículos "),r("button",{staticClass:"btn btn-warning float-right",on:{click:t.goBack}},[r("i",{staticClass:"fas fa-undo"}),t._v(" Voltar")])]),r("form",{on:{submit:function(a){return a.preventDefault(),t.salvar(a)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"modelo"}},[t._v("Modelo do Veículo:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.carro.modelo,expression:"carro.modelo"}],ref:"modelo",staticClass:"form-control",attrs:{type:"text",id:"modelo",required:""},domProps:{value:t.carro.modelo},on:{input:function(a){a.target.composing||t.$set(t.carro,"modelo",a.target.value)}}})])]),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"cor"}},[t._v("Cor:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.carro.cor,expression:"carro.cor"}],staticClass:"form-control",attrs:{type:"text",id:"cor",required:""},domProps:{value:t.carro.cor},on:{input:function(a){a.target.composing||t.$set(t.carro,"cor",a.target.value)}}})])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"marca_id"}},[t._v("Marca:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.carro.marca_id,expression:"carro.marca_id"}],staticClass:"form-control",attrs:{id:"marca_id",required:""},on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.carro,"marca_id",a.target.multiple?r:r[0])}}},t._l(t.marcas,(function(a){return r("option",{key:a.id,domProps:{value:a.id}},[t._v(" "+t._s(a.nome)+" ")])})),0)])]),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"preco"}},[t._v("Preço R$")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.carro.preco,expression:"carro.preco"}],staticClass:"form-control",attrs:{type:"text",id:"preco",required:""},domProps:{value:t.carro.preco},on:{input:function(a){a.target.composing||t.$set(t.carro,"preco",a.target.value)}}})])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"ano"}},[t._v("Ano:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.carro.ano,expression:"carro.ano"}],staticClass:"form-control",attrs:{type:"text",id:"ano",required:""},domProps:{value:t.carro.ano},on:{input:function(a){a.target.composing||t.$set(t.carro,"ano",a.target.value)}}})])]),r("div",{staticClass:"col-sm-9"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"foto"}},[t._v("URL da Foto:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.carro.foto,expression:"carro.foto"}],staticClass:"form-control",attrs:{type:"text",id:"foto",required:""},domProps:{value:t.carro.foto},on:{input:function(a){a.target.composing||t.$set(t.carro,"foto",a.target.value)}}})])])]),t._m(0),t._m(1)])])},I=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("button",{staticClass:"btn btn-success px-4 mr-2",attrs:{type:"submit"}},[r("i",{staticClass:"far fa-save"}),t._v(" Salvar")])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("button",{staticClass:"btn btn-danger px-4",attrs:{type:"reset"}},[r("i",{staticClass:"far fa-window-restore"}),t._v(" Limpar")])}],G={data:function(){return{carro:{id:null,modelo:null,marca_id:null,ano:null,preco:null,cor:null,foto:null,destaque:"-"},marcas:null}},methods:{salvar:function(){localStorage.getItem("token")?(E.a.post(this.$urlAPI+"/carros",this.carro,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){return alert("Ok! Carro cadastrado com código ".concat(t.data.id))})),this.carro={},this.$refs.modelo.focus()):alert("Erro... Usuário deve estar logado para incluir veículos")},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}},mounted:function(){var t=this;E.a.get(this.$urlAPI+"/marcas").then((function(a){return t.marcas=a.data}))}},N=G,S=Object(u["a"])(N,V,I,!1,null,"4f726968",null),L=S.exports,q=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("form",{staticClass:"form-signin mt-5",on:{submit:function(a){return a.preventDefault(),t.logar(a)}}},[t._m(0),r("div",{staticClass:"form-label-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),r("label",{attrs:{for:"inputEmail"}},[t._v("E-mail do Usuário")])]),r("div",{staticClass:"form-label-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.senha},on:{input:function(a){a.target.composing||(t.senha=a.target.value)}}}),r("label",{attrs:{for:"inputPassword"}},[t._v("Senha de Acesso")])]),r("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"}},[t._v("Entrar")])])},R=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"text-center mb-4"},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Identificação do Usuário")])])}],U={data:function(){return{email:null,senha:null}},methods:{logar:function(){var t=this;E.a.post(this.$urlAPI+"/login",{email:this.email,senha:this.senha}).then((function(a){null==a.data.user?alert("Erro... Login ou senha inválidos"):(localStorage.setItem("token",a.data.access_token),t.$parent.mudaUser(a.data.user),t.$router.push("/"))}))}}},D=U,B=(r("3d92"),Object(u["a"])(D,q,R,!1,null,"1b2decd4",null)),F=B.exports,T=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container"},[r("h2",[t._v("Gráfico Relacionando Nº de Veículos por Marca")]),r("GChart",{attrs:{type:"PieChart",data:t.carrosMarcas}})],1)},z=[],H=(r("4160"),r("159b"),r("cb43")),J={components:{GChart:H["GChart"]},data:function(){return{carrosMarcas:[["Marca","Nº Veículos"]]}},mounted:function(){var t=this;E.a.get(this.$urlAPI+"/marcas").then((function(a){var r=a.data;r.forEach((function(a){a.num_carros>0&&t.carrosMarcas.push([a.nome,a.num_carros])}))}))}},K=J,Q=Object(u["a"])(K,T,z,!1,null,"2a71433b",null),W=Q.exports,X=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container"},[r("h2",[t._v("Gráfico Relacionando Carros x Cores")]),r("GChart",{attrs:{type:"PieChart",data:t.carrosCores}})],1)},Y=[],Z={components:{GChart:H["GChart"]},data:function(){return{carrosCores:[["Cor","Nº Veículos"]]}},mounted:function(){var t=this;E.a.get(this.$urlAPI+"/carros_cores").then((function(a){var r=a.data;r.forEach((function(a){t.carrosCores.push([a.cor,a.num])}))}))}},tt=Z,at=Object(u["a"])(tt,X,Y,!1,null,"def2bf5e",null),rt=at.exports,et=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("GChart",{attrs:{settings:{packages:["bar"]},data:t.chartData,options:t.chartOptions,createChart:function(t,a){return new a.charts.Bar(t)}},on:{ready:t.onChartReady}})],1)},ot=[],st={name:"App",components:{GChart:H["GChart"]},data:function(){return{chartsLib:null,chartData:[["Meses","Nº Veículos"]]}},mounted:function(){var t=this;E.a.get(this.$urlAPI+"/cadastros").then((function(a){var r=a.data;r.forEach((function(a){t.chartData.push([a.anomes,a.num])}))}))},computed:{chartOptions:function(){return this.chartsLib?this.chartsLib.charts.Bar.convertOptions({chart:{title:"Gráfico Relacionando Cadastro de Veículos",subtitle:"Últimos 6 meses"},bars:"horizontal",hAxis:{format:"decimal"},height:380,colors:["#1b9e77","#d95f02"]}):null}},methods:{onChartReady:function(t,a){this.chartsLib=a}}},nt=st,it=Object(u["a"])(nt,et,ot,!1,null,null,null),ct=it.exports;e["a"].use(_["a"]);var lt=new _["a"]({mode:"history",routes:[{path:"/",component:x},{path:"/cadcarros",component:j},{path:"/formcarros",component:L},{path:"/grafcarrosmarcas",component:W},{path:"/grafcarroscores",component:rt},{path:"/grafcadastros",component:ct},{path:"/login",component:F}]});e["a"].config.productionTip=!1,e["a"].prototype.$urlAPI="https://edeciofernando.pythonanywhere.com",new e["a"]({router:lt,render:function(t){return t(h)}}).$mount("#app")},b9f8:function(t,a,r){"use strict";var e=r("3fe8"),o=r.n(e);o.a},bc99:function(t,a,r){"use strict";var e=r("0442"),o=r.n(e);o.a}});
//# sourceMappingURL=app.044f7ca6.js.map