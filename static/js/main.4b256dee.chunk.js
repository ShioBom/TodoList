(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n(31)},23:function(t,e,n){},24:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),s=(n(23),n(24),n(5)),c=n(6),u=n(9),l=n(7),d=n(10),h=n(3),p=(n(29),function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("li",{className:"item"},o.a.createElement("input",{type:"checkbox",checked:"finish"===this.props.status,onChange:function(e){return t.props.handleFinish(e,t.props.index)}}),o.a.createElement("p",null,this.props.todo.value),o.a.createElement("button",{onClick:function(){return t.props.handleDel(t.props.index)}},"\u5220\u9664"))}}]),e}(a.Component)),f=Object(h.b)(function(t){return{todos:t.todos}},function(t){return{handleDel:function(e){t({type:"DEL_TODO",payload:e})},handleFinish:function(e,n){e.target.checked?t({type:"FINISH_TODO",payload:n}):t(function(t){return{type:"UPDATE_TODO",payload:t}}(n))}}})(p),v=(n(30),function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).state={value:""},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"todolist"},o.a.createElement("input",{type:"text",placeholder:"\u6dfb\u52a0TODO",value:this.state.value,onChange:function(e){t.handleChange(e)}}),o.a.createElement("button",{onClick:function(){t.props.handleAdd(t.state.value)}},"\u6dfb\u52a0"),o.a.createElement("div",null,o.a.createElement("h3",null,"\u8fdb\u884c\u4e2d",o.a.createElement("span",null,this.props.waiting.length)),this.props.waiting.map(function(t,e){return o.a.createElement(f,{key:t.id,todo:t,index:t.id,status:t.status})})),o.a.createElement("div",null,o.a.createElement("h3",null,"\u5df2\u5b8c\u6210",o.a.createElement("span",null,this.props.finish.length)),this.props.finish.map(function(t,e){return o.a.createElement(f,{key:t.id,todo:t,index:t.id,status:t.status})})))}}]),e}(a.Component)),m=Object(h.b)(function(t){return{waiting:t.todos.filter(function(t){return"waiting"===t.status}),finish:t.todos.filter(function(t){return"finish"===t.status})}},function(t,e){return{handleAdd:function(e){var n=parseInt(1e9*Math.random());console.log(n),t({type:"ADD_TODO",payload:{id:n,val:e}})}}})(v);var O=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(8),g=n(14),b={todos:[{value:"1\u4e2a\u5f85\u529e\u4e8b\u9879",status:"finish",id:1},{value:"2\u4e2a\u5f85\u529e\u4e8b\u9879",status:"waiting",id:2},{value:"3\u4e2a\u5f85\u529e\u4e8b\u9879",status:"waiting",id:3}]},w=Object(E.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"ADD_TODO":var o={value:a.val,status:"waiting",id:a.id};return{todos:[].concat(Object(g.a)(t.todos),[o])};case"DEL_TODO":console.log(a);var i=t.todos.filter(function(t){return t.id!==a});return console.log(i),{todos:Object(g.a)(i)};case"FINISH_TODO":var r=[];return t.todos.forEach(function(t){t.id===a&&(t.status="finish"),r.push(t)}),{todos:[].concat(r)};case"UPDATE_TODO":var s=[];return t.todos.forEach(function(t){t.id===a&&(t.status="waiting"),s.push(t)}),{todos:[].concat(s)};default:return t}});r.a.render(o.a.createElement(h.a,{store:w},o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.4b256dee.chunk.js.map