(this.webpackJsonpemployeeapp=this.webpackJsonpemployeeapp||[]).push([[0],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(60),c=a.n(r),o=(a(70),a(4)),s=a(5),i=a(7),m=a(6),u=a(8),h=(a(71),a(72),a(2)),p=a(23);var d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){a.setState({currentPage:Number(e.target.id)})},a.onChangename=function(e){var t,n=e.target.value;t=a.state.result.filter((function(e){return-1!==e.employee_name.toLowerCase().search(n.toLowerCase())})),a.setState({result:t}),console.log(a.state.result)},a.state={currentPage:1,todosPerPage:6,result:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setState({categories:[{id:1,title:"Home"},{id:2,title:"Gallery"}]})}},{key:"render",value:function(){var e=this,t=this.state.result.map((function(t,a){return l.a.createElement("p",{key:a,onClick:function(){return e.props.action(t.employee_id,0)}},t.employee_name)}));return l.a.createElement("div",{className:"skillmatrix"},l.a.createElement("div",{className:"staff_list_cover"},l.a.createElement("h1",null,"Staff List"),l.a.createElement("input",{type:"text",onChange:this.onChangename,placeholder:"Search The Staff"}),l.a.createElement("div",{className:"staff_list"},l.a.createElement("div",null,l.a.createElement("div",{className:"stafflist"},t)))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{result:e.result}}}]),t}(n.Component);var f=a(62),g=a.n(f),y=a(64),E=a.n(y),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).tagcloud=function(e){var t=[],n=[],r=[];a.props.result.forEach((function(e){var a;(a=r).push.apply(a,Object(h.a)(e.employee_tech.map((function(e,t){return e.technology})))),t.push.apply(t,Object(h.a)(e.employee_tech.map((function(e,t){return[e.technology,e.profValue]}))))})),r=Object(h.a)(new Set(r)),t.sort();for(var c=0,o=[],s=function(e){t.forEach((function(t){t[0]===r[e]?c+=Number(t[1]):0!==c&&(o.push([c,t[0]]),c=0)}))},i=0;i<t.length;i++)s(i);o.sort((function(e,t){return e[0]<t[0]?1:-1}));var m={0:{fontSize:100,fontWeight:"bold"},1:{fontSize:75,fontWeight:"bold"},2:{fontSize:50,opacity:.7},3:{fontSize:35,opacity:.7},4:{fontSize:25,opacity:.7},5:{fontSize:20,opacity:.7},6:{fontSize:16,opacity:.7}};return n.push.apply(n,Object(h.a)(o.map((function(e,t){return l.a.createElement("div",{key:t,onClick:function(){return a.props.action(0,e[1])},style:m[t]},e[1])})))),n},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.forceUpdate()}),3e3)}},{key:"render",value:function(){var e=this.tagcloud();return l.a.createElement("div",{className:"app-outer"},l.a.createElement("h1",null,"Skill Cloud"),l.a.createElement("div",{className:"app-inner"},l.a.createElement(g.a,{className:"tag-cloud",style:{fontFamily:"sans-serif",fontSize:30,fontWeight:"bold",fontStyle:"italic",color:function(){return E()()},padding:5,width:"100%",height:"100%"}},e)))}}]),t}(n.Component);var b=function(e){var t,a=[],n=[],r=[],c=[],o=[];if(e.techId)e.result.forEach((function(t){t.employee_tech.map((function(a){a.technology===e.techId&&(o.push(t.employee_name),r.push(a.profValue))}))})),c={labels:[].concat(o),datasets:[{label:e.techId+"'s Skill Matrix",backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB","#ffc0f6","#86c5f6"],borderColor:"rgba(255,99,132,1)",data:r}]};else if(e.empId){e.result.forEach((function(n){n.employee_id===e.empId&&(t=n.employee_name,a.push.apply(a,Object(h.a)(n.employee_tech.map((function(e,t){return e.technology})))),r.push.apply(r,Object(h.a)(n.employee_tech.map((function(e,t){return e.profValue})))))}));n.push.apply(n,Object(h.a)(function(e){return e.filter((function(t,a){return e.indexOf(t)===a}))}(a))),c={labels:[].concat(n),datasets:[{label:t+"'s Skill Matrix",backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB","#ffc0f6","#86c5f6"],borderColor:"rgba(255,99,132,1)",data:r,position:"top"}]}}return l.a.createElement("div",{className:"PolarChart"},l.a.createElement(p.a,{data:c,height:null,width:null,options:{scales:{yAxes:[{stacked:!0,ticks:{stepSize:25,min:0,max:100}}]}}}))},C=function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(b,{techId:this.props.statustechid,empId:this.props.statusempId,result:this.props.result})}}]),t}(n.Component),S=function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"addskill mb-3"},l.a.createElement("button",{onClick:this.props.action,type:"button",className:"btn btn-warning"},"Add Skills"))}}]),t}(n.Component),_=a(24),N=a.n(_),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=Object(h.a)(a.state.employee_tech),n=[0,25,50,75,100];e.target.previousSibling.innerHTML=n[e.target.value];for(var l=!1,r=0;r<t.length;r++)t[r].technology===e.target.name&&(l=!0,t[r].profValue=n[e.target.value]);l||t.push({technology:e.target.name,profValue:n[e.target.value]}),a.setState({employee_tech:t})},a.onChangeUsername=function(e){a.setState({employee_name:e.target.value})},a.onChangeId=function(e){a.setState({employee_id:e.target.value})},a.handleChangemanager=function(e){a.setState({employee_manager:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.setState({loading:!0});var t,n={employee_name:a.state.employee_name,employee_manager:a.state.employee_manager,employee_id:a.state.employee_id,employee_tech:a.state.employee_tech};N.a.post("http://localhost:5000/users/add",n).then((function(e){t=l.a.createElement("div",{className:"alert alert-success"},"sumitted successfully"),a.setState({loading:!1,success:t,employee_name:"",employee_manager:"",employee_id:"",employee_tech:[]}),document.getElementById("myForm").reset(),document.getElementById("myForm").getElementsByTagName("span").innerHTML=0})).catch((function(e){t=l.a.createElement("div",{className:"alert alert-danger"},"Failed!! Please Retry"),a.setState({loading:!1,success:t})}))},a.state={loading:!1,employee_name:"",employee_manager:"",employee_id:"",employee_tech:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({employee_name:"",employee_manager:"",employee_id:"",employee_tech:[]})}},{key:"render",value:function(){var e,t;return this.state.success&&(t=l.a.createElement("div",null,this.state.success)),this.state.loading&&(e=l.a.createElement("div",null,l.a.createElement("div",{className:"loader"}),l.a.createElement("div",{className:"loaderbg"}))),l.a.createElement("div",null,e,t,l.a.createElement("h3",null,"Add Your SkillSet"),l.a.createElement("form",{id:"myForm",className:"skilladd  text-left border border-light p-5",onSubmit:this.onSubmit},l.a.createElement("input",{type:"text",name:"employee_name",className:"form-control mb-4",placeholder:"Employee Name",value:this.state.employee_name,onChange:this.onChangeUsername}),l.a.createElement("input",{type:"text",name:"employee_id",className:"form-control mb-4",placeholder:"Employee ID",value:this.state.employee_id,onChange:this.onChangeId}),l.a.createElement("div",null,l.a.createElement("label",null,"Manager"),l.a.createElement("select",{name:"employee_manager",className:"browser-default manager-select mb-4",value:this.state.employee_manager,onChange:this.handleChangemanager},l.a.createElement("option",{value:"",disabled:!0},"Choose option"),l.a.createElement("option",{value:"manager1"},"Manager1"),l.a.createElement("option",{value:"manager1"},"Manager2"))),l.a.createElement("h2",null,"SKILLS"),l.a.createElement("div",{className:"text-center"},l.a.createElement("div",null,l.a.createElement("label",null,"php")," ",l.a.createElement("span",null,"0"),l.a.createElement("input",{name:"php",type:"range",min:"0",max:"4",defaultValue:"0",className:"slider",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"css")," ",l.a.createElement("span",null,"0"),l.a.createElement("input",{type:"range",name:"css",min:"0",max:"4",defaultValue:"0",className:"slider",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"js")," ",l.a.createElement("span",null,"0"),l.a.createElement("input",{type:"range",name:"js",min:"0",max:"4",defaultValue:"0",className:"slider",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"VueJs")," ",l.a.createElement("span",null,"0"),l.a.createElement("input",{type:"range",name:"VueJs",min:"0",max:"4",defaultValue:"0",className:"slider",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"jquery")," ",l.a.createElement("span",null,"0"),l.a.createElement("input",{type:"range",min:"0",name:"jquery",max:"4",defaultValue:"0",className:"slider",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Html")," ",l.a.createElement("span",null,"0"),l.a.createElement("input",{type:"range",name:"Html",min:"0",max:"4",defaultValue:"0",className:"slider",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"angular")," ",l.a.createElement("span",null,"0"),l.a.createElement("input",{type:"range",name:"angular",min:"0",max:"4",defaultValue:"0",className:"slider",onChange:this.handleChange}))),l.a.createElement("button",{className:"btn btn-info btn-block",type:"submit"},"Send")))}}]),t}(n.Component);var k=function(){return l.a.createElement("div",{className:"container-fluid bg  mb-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("h1",{className:"text-center py-4"},"Skill Matrix"))))},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).addskill=function(){a.setState({addSkill:!0})},a.showGraph=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;a.setState({showGraph:!0,empId:e,techId:t})},a.state={empId:"",techId:"",showGraph:!1,addSkill:!1,list:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://localhost:5000/users/").then((function(t){var a=t.data;e.setState({list:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement(v,{action:this.showGraph,result:this.state.list})),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement(S,{action:this.addskill}),l.a.createElement(d,{action:this.showGraph,result:this.state.list})))),l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-7"},this.state.showGraph&&l.a.createElement(C,{statustechid:this.state.techId,statusempId:this.state.empId,statusshowGraph:this.state.showGraph,result:this.state.list}),this.state.addSkill&&l.a.createElement(j,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,a){e.exports=a(191)},70:function(e,t,a){},71:function(e,t,a){},72:function(e){e.exports=JSON.parse("{}")}},[[65,1,2]]]);
//# sourceMappingURL=main.e0c3bb29.chunk.js.map