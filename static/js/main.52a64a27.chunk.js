(this.webpackJsonpsection7=this.webpackJsonpsection7||[]).push([[0],{42:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(33),o=a.n(s),i=(a(42),a(4)),l=a(2),d=function(e){return Object(n.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark bg-danger mb-3 py-0",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("a",{href:"/",className:"navbar-brand",children:"Contact manager"}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-home mr-1","aria-hidden":"true"}),"Home"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/contact/add",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-plus mr-1","aria-hidden":"true"}),"Add"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/contacts",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-info mr-1","aria-hidden":"true"}),"Contacts"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/posts",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-info mr-1","aria-hidden":"true"}),"Posts"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/about",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-info mr-1","aria-hidden":"true"}),"About"]})})]})})]})})},j=a(9),u=a(10),h=a(12),m=a(11),b=a(5),p=a.n(b),O=a(14),x=a(36),f=a(17),v=a(15),y=a.n(v),N=r.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return console.log("delete action is called"),Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.PAYLOAD}))});case"ADD_CONTACT":return console.log("add action is called"),Object(f.a)(Object(f.a)({},e),{},{contacts:[t.PAYLOAD].concat(Object(x.a)(e.contacts))});case"UPDATE_CONTACT":return console.log("edit action is called"),Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.map((function(e){return e=e.id===t.payload.id?t.payload:e}))})}},C=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return g(e,t)}))}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)(N.Provider,{value:this.state,children:this.props.children})}}]),a}(c.Component),k=N.Consumer,w=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={is_shown:!0},e.DeleteonClick=function(){var e=Object(O.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete btn clicked"),e.next=3,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",PAYLOAD:t});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,c=t.name,r=t.email,s=t.phone,o=this.state.is_shown;return Object(n.jsx)(k,{children:function(t){var l=t.dispatch;return Object(n.jsxs)("div",{className:"card card-body mb-3",children:[Object(n.jsxs)("h3",{children:[c,Object(n.jsx)("i",{onClick:function(){return e.setState({is_shown:!e.state.is_shown})},className:"fa fa-sort-desc",style:{marginLeft:"5px",cursor:"pointer"},"aria-hidden":"true"}),Object(n.jsx)("i",{onClick:e.DeleteonClick.bind(e,a,l),className:"fa fa-trash",style:{float:"right",color:"#c02",cursor:"pointer"},"aria-hidden":"true"}),Object(n.jsx)(i.b,{to:"contact/edit/".concat(a),style:{float:"right",marginRight:"5px",cursor:"pointer"},children:Object(n.jsx)("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})})]}),o?Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Email: ",r]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Phone: ",s]})]}):null]})}})}}]),a}(c.Component),A=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(k,{children:function(e){console.log(e);var t=e.contacts;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("h2",{className:"display-4 mb-3",children:"Contacts"}),t.map((function(e){return Object(n.jsx)(w,{contact:e},e.id)}))]})}})}}]),a}(c.Component),S=a(18),E=a(35),D=a.n(E),T=function(e){var t=e.label,a=e.name,c=e.value,r=e.placeholder,s=e.type,o=e.onChange,i=e.error;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("label",{htmlFor:"name",children:[" ",t," "]}),Object(n.jsx)("input",{value:c,onChange:o,type:s,name:a,placeholder:r,className:D()("form-control form-control-lg",{"is-invalid":i})}),i&&Object(n.jsx)("div",{className:"invalid-feedback",children:i})]})};T.defaultProps={type:"text"};var P=T,_=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(O.a)(p.a.mark((function t(a,n){var c,r,s,o,i,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log(e.state),c=e.state,r=c.name,s=c.email,o=c.phone,""!==r){t.next=6;break}return e.setState({errors:{name:"Name must be yours and required!"}}),t.abrupt("return");case 6:if(""!==s){t.next=9;break}return e.setState({errors:{email:"Email must valid and required!"}}),t.abrupt("return");case 9:if(""!==o){t.next=12;break}return e.setState({errors:{phone:"Phone number would not be extra!"}}),t.abrupt("return");case 12:return i={name:r,email:s,phone:o},t.prev=13,t.next=16,y.a.post("https://jsonplaceholder.typicode.com/users",i);case 16:l=t.sent,a({type:"ADD_CONTACT",PAYLOAD:l.data}),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(13),console.log(t.t0);case 23:e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 25:case"end":return t.stop()}}),t,null,[[13,20]])})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,c=t.email,r=t.phone,s=t.errors;return Object(n.jsx)(k,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"card-header h2",children:"Add contact form"}),Object(n.jsx)("div",{className:"card card-body mb-3",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(P,{label:"Name:",name:"name",placeholder:"Enter name",onChange:e.onChange,value:a,error:s.name}),Object(n.jsx)(P,{label:"Email:",name:"email",placeholder:"Enter email",type:"email",onChange:e.onChange,value:c,error:s.email}),Object(n.jsx)(P,{label:"Phone:",name:"phone",placeholder:"Enter phone",type:"phone",onChange:e.onChange,value:r,error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-primary"})]})})]})}})}}]),a}(c.Component),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(O.a)(p.a.mark((function t(a,n){var c,r,s,o,i,l,d;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log(e.state),c=e.state,r=c.name,s=c.email,o=c.phone,""!==r){t.next=6;break}return e.setState({errors:{name:"Name must be yours and required!"}}),t.abrupt("return");case 6:if(""!==s){t.next=9;break}return e.setState({errors:{email:"Email must valid and required!"}}),t.abrupt("return");case 9:if(""!==o){t.next=12;break}return e.setState({errors:{phone:"Phone number would not be extra!"}}),t.abrupt("return");case 12:return i={name:r,email:s,phone:o},l=e.props.match.params.id,t.next=16,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 16:d=t.sent,a({type:"UPDATE_CONTACT",payload:d.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 20:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,console.log(t),e.next=4,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 4:a=e.sent,n=a.data,console.log(a.data),this.setState({name:n.name,email:n.email,phone:n.phone});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,c=t.email,r=t.phone,s=t.errors;return Object(n.jsx)(k,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"card-header h2",children:"Edit contact form"}),Object(n.jsx)("div",{className:"card card-body mb-3",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(P,{label:"Name:",name:"name",placeholder:"Enter name",onChange:e.onChange,value:a,error:s.name}),Object(n.jsx)(P,{label:"Email:",name:"email",placeholder:"Enter email",type:"email",onChange:e.onChange,value:c,error:s.email}),Object(n.jsx)(P,{label:"Phone:",name:"phone",placeholder:"Enter phone",type:"phone",onChange:e.onChange,value:r,error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-block btn-primary"})]})})]})}})}}]),a}(c.Component),q=(a(66),a(67),function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"Contact Manager - Home page "}),Object(n.jsx)("p",{className:"lead",children:"Simple app to manage your contacts from the coure Brad Traversy's React."}),Object(n.jsx)("p",{className:"text-secondary",children:"Version: 1.0.0"}),Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/contact/add",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-plus mr-1","aria-hidden":"true"}),"Add"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/contacts",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-info mr-1","aria-hidden":"true"}),"Contacts"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/posts",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-info mr-1","aria-hidden":"true"}),"Posts"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(i.b,{to:"/about",className:"nav-link",children:[Object(n.jsx)("i",{className:"fa fa-info mr-1","aria-hidden":"true"}),"About"]})})]})]})}),M=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{className:"display-4",children:[e.match.params.item," "]}),Object(n.jsx)("p",{className:"lead",children:"Simple app to manage your contacts"}),Object(n.jsx)("p",{className:"text-secondary",children:"Version: 1.0.0"})]})},Y=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"404 - Page not found!"}),Object(n.jsx)("p",{className:"lead",children:"Sorry! The page does not exist."})]})},B=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={posts:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(1111),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({posts:t})}))}},{key:"render",value:function(){var e=this.state.posts;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Posts from https://jsonplaceholder.typicode.com/posts "}),Object(n.jsx)("div",{className:"posts",children:Object.keys(e).map((function(t,a){return Object(n.jsxs)("div",{className:"card p-2 mb-2",children:[Object(n.jsx)("h3",{children:e[t].title}),Object(n.jsx)("p",{children:e[t].body})]},a)}))})]})}}]),a}(c.Component);var U=function(){return Object(n.jsx)(C,{children:Object(n.jsx)(i.a,{basename:"/cm",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-8 mx-auto",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:q}),Object(n.jsx)(l.a,{exact:!0,path:"/contacts",component:A}),Object(n.jsx)(l.a,{exact:!0,path:"/contact/add",component:_}),Object(n.jsx)(l.a,{exact:!0,path:"/contact/edit/:id",component:L}),Object(n.jsx)(l.a,{exact:!0,path:"/about",component:M}),Object(n.jsx)(l.a,{exact:!0,path:"/posts",component:B}),Object(n.jsx)(l.a,{component:Y})]})})})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.52a64a27.chunk.js.map