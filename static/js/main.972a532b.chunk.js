(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(4),s=a(7),c=a(2),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(9),m=a.n(u),j=a(0),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},h=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(j.jsxs)("article",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(j.jsx)(b,{user:r})]})},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})};function f(e){return l.find((function(t){return t.id===e}))||null}var p=d.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:f(e.userId)})})),x=Math.max.apply(Math,Object(s.a)(d.map((function(e){return e.id})))),v=function(){var e=Object(o.useState)({title:"",userId:0}),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(p),d=Object(r.a)(i,2),u=d[0],m=d[1],b=Object(o.useState)(!0),h=Object(r.a)(b,2),v=h[0],y=h[1],I=Object(o.useState)(!0),N=Object(r.a)(I,2),S=N[0],g=N[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=x+1,i=a.title,r=a.userId,c={id:t,userId:Number(r),title:i,completed:!1,user:f(Number(r))};y(!!i.trim()),g(!!r),i.trim()&&r&&(m([].concat(Object(s.a)(u),[c])),n({title:"",userId:0}))},children:[Object(j.jsxs)("div",{className:"field",children:["Title: ",Object(j.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a.title,onChange:function(e){var t=e.target.value.replace(/[^a-z\u0430-\u044f\u0451\d\s]/gi,"");n((function(e){return Object(c.a)(Object(c.a)({},e),{},{title:t})})),y(!!t.trim())}}),!v&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:["User: ",Object(j.jsxs)("select",{"data-cy":"userSelect",value:a.userId,onChange:function(e){n((function(t){return Object(c.a)(Object(c.a)({},t),{},{userId:+e.target.value})})),g(!0)},children:[Object(j.jsx)("option",{value:"0",defaultChecked:!0,disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),!S&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(O,{todos:u})]})};i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.972a532b.chunk.js.map