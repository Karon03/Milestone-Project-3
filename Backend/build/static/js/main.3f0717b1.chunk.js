(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(5),a=n.n(r),i=(n(11),n(4)),o=n(3),l=n(1);const j=Object(c.createContext)();var d=function(e){let{children:t}=e;const[n,s]=Object(c.useState)(null);return Object(c.useEffect)((()=>{(async()=>{try{const e=localStorage.getItem("token");if(!e)return void console.error("No token found");console.log(e);const t=await fetch("/api/authentication/profile",{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw new Error(`Error: ${t.status} ${t.statusText}`);const n=await t.json();console.log("I have the auth response",n),s(n)}catch(e){console.error("Error fetching user profile:",e.message||e)}})()}),[]),Object(l.jsx)(j.Provider,{value:{currentUser:n,setCurrentUser:s},children:t})},b=n.p+"static/media/logo.335ebc39.jpg";const u={container:{textAlign:"center",padding:"20px",backgroundColor:"#9c88ff"},buttons:{margin:"20px 0"},button:{textDecoration:"none",padding:"10px 20px",color:"#fff",backgroundColor:"#007bff",borderRadius:"5px",margin:"5px",fontSize:"16px"}};var h=()=>{const{currentUser:e,setCurrentUser:t}=Object(c.useContext)(j),n=Object(o.o)();Object(c.useEffect)((()=>{e&&console.log("currentUser",e)}),[e]);return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"},children:[Object(l.jsx)("img",{src:b,alt:"logo",style:{width:"100px",height:"100px",paddingBottom:"20px"}}),e?Object(l.jsxs)("div",{style:u.buttons,children:[Object(l.jsx)(i.b,{to:"/dashboard",style:u.button,children:"Go to your Dashboard"}),Object(l.jsx)("button",{onClick:()=>(localStorage.removeItem("token"),t(null),void n("/")),style:u.button,children:"Log Out"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{style:u.buttons,children:[Object(l.jsx)(i.b,{to:"/login",style:u.button,children:"Log In"}),Object(l.jsx)(i.b,{to:"/signup",style:u.button,children:"Sign Up"})]}),Object(l.jsxs)("p",{children:["Already have an account?"," ",Object(l.jsx)(i.b,{className:"login-link",to:"/login",children:"Log in here"})]})]})]})})};var O=()=>{const[e,t]=Object(c.useState)(""),[n,s]=Object(c.useState)(""),[r,a]=Object(c.useState)(""),[d,b]=Object(c.useState)(!1),u=Object(o.o)(),{setCurrentUser:h}=Object(c.useContext)(j);return Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"},children:[Object(l.jsx)("h2",{children:"Login to Your Account"}),r&&Object(l.jsx)("p",{className:"error",children:r}),d?Object(l.jsx)("p",{className:"success",children:"Login successful! Redirecting..."}):Object(l.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),a("");const c={email:e,password:n};try{const e=await fetch("/api/authentication",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(e.ok){const t=(await e.json()).token;localStorage.setItem("token",t);const n=await fetch("/api/authentication/profile",{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error("Failed to fetch user profile");const c=await n.json();h(c),b(!0),u("/dashboard")}else{const t=await e.json();a(t.error||"Login failed, please check your credentials.")}}catch(r){a("An error occurred during login.")}},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Email:"}),Object(l.jsx)("input",{type:"email",value:e,onChange:e=>t(e.target.value),required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Password:"}),Object(l.jsx)("input",{type:"password",value:n,onChange:e=>s(e.target.value),required:!0})]}),Object(l.jsx)("button",{type:"submit",children:"Login"})]}),Object(l.jsxs)("p",{children:["Don't have an account? ",Object(l.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})};var x=e=>{let{user:t}=e;return t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"User Profile"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Username:"})," ",t.username]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Email:"})," ",t.email]})]}):Object(l.jsx)("p",{children:"No user data available"})};var p=e=>{let{onAddTransaction:t}=e;const[n,s]=Object(c.useState)("income"),[r,a]=Object(c.useState)(""),[i,o]=Object(c.useState)(""),[j,d]=Object(c.useState)("");return Object(l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r&&i&&j?(t({type:n,category:r,amount:parseFloat(i),date:j}),a(""),o(""),d("")):alert("Please fill out all fields")},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Type:"}),Object(l.jsxs)("select",{value:n,onChange:e=>s(e.target.value),children:[Object(l.jsx)("option",{value:"income",children:"Income"}),Object(l.jsx)("option",{value:"expense",children:"Expense"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Category:"}),Object(l.jsx)("input",{type:"text",value:r,onChange:e=>a(e.target.value),placeholder:"Category",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Amount:"}),Object(l.jsx)("input",{type:"number",value:i,onChange:e=>o(e.target.value),placeholder:"Amount",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Date:"}),Object(l.jsx)("input",{type:"date",value:j,onChange:e=>d(e.target.value),required:!0})]}),Object(l.jsx)("button",{type:"submit",children:"Add Transaction"})]})};var g=e=>{let{transactions:t}=e;return t.length?Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Transaction History"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Category"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Account"})]})}),Object(l.jsx)("tbody",{children:t.map(((e,t)=>Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.type}),Object(l.jsx)("td",{children:e.category}),Object(l.jsxs)("td",{children:["$",e.amount.toFixed(2)]}),Object(l.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),Object(l.jsx)("td",{children:e.account_id})]},t)))})]})]}):Object(l.jsx)("p",{children:"No transactions found"})};var m=()=>{const[e,t]=Object(c.useState)(""),[n,s]=Object(c.useState)(""),[r,a]=Object(c.useState)(""),[i,j]=Object(c.useState)(""),[d,b]=Object(c.useState)(""),[u,h]=Object(c.useState)(!1),[O,x]=Object(c.useState)(""),p=Object(o.o)();return Object(l.jsxs)("div",{className:"signup-container",children:[Object(l.jsx)("h2",{children:"Sign Up"}),d&&Object(l.jsx)("p",{className:"error",children:d}),u?Object(l.jsx)("p",{className:"success",children:"Signup successful! Please log in."}):Object(l.jsxs)("form",{onSubmit:async t=>{if(t.preventDefault(),b(""),r!==i)return void b("Passwords do not match.");const c={username:e,email:n,password:r};try{const e=await fetch("/api/accounts/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(e.ok)h(!0),p("/dashboard");else{const t=await e.json();b(t.error||"Signup failed.")}}catch(d){b("An error occurred during signup.")}},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Username:"}),Object(l.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Email:"}),Object(l.jsx)("input",{type:"email",value:n,onChange:e=>s(e.target.value),required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Password:"}),Object(l.jsx)("input",{type:"password",value:r,onChange:e=>a(e.target.value),required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Confirm Password:"}),Object(l.jsx)("input",{type:"password",value:i,onChange:e=>j(e.target.value),required:!0})]}),Object(l.jsx)("button",{type:"submit",children:"Sign Up"})]})]})};var f=e=>{let{children:t}=e;return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:()=>window.location.href="/",style:{position:"absolute",top:"10px",left:"10px",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"1000"},children:Object(l.jsx)("p",{style:{color:"white",fontSize:"10px"},children:"Home"})}),t]})};var v=()=>{const{currentUser:e}=Object(c.useContext)(j),[t,n]=Object(c.useState)(void 0),[s,r]=Object(c.useState)(""),[a,i]=Object(c.useState)(""),[d,b]=Object(c.useState)([]),u=Object(o.o)();Object(c.useEffect)((()=>{e&&e.account_id&&n(e.account_id)}),[e,t]),Object(c.useEffect)((()=>{t&&(async()=>{if(e)try{const e=await fetch(`/api/transactions/account/${t}`),n=await e.json();Array.isArray(n)?b(n):console.error("Expected array, but got:",n)}catch(n){console.error("Error fetching transactions:",n)}else console.error("User not logged in")})()}),[t,e]);return e?Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h2",{children:"Dashboard"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Input Your Income"}),Object(l.jsx)("input",{type:"number",value:s,onChange:e=>{r(e.target.value)},placeholder:"Enter your income here"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Log Your Transactions"}),Object(l.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),a)try{const n=await fetch("/api/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:t,type:"expense",category:"General",amount:parseFloat(a),date:(new Date).toISOString()})});if(n.ok){const e=await n.json();b((t=>[...t,e])),i("")}else console.error("Error adding transaction",e)}catch(n){console.error("Error adding transaction:",n)}},children:[Object(l.jsx)("input",{type:"number",value:a,onChange:e=>{i(e.target.value)},placeholder:"Enter a transaction amount",required:!0}),Object(l.jsx)("button",{type:"submit",children:"Add Transaction"})]})]}),Object(l.jsx)("h4",{children:"Transactions List"}),Object(l.jsx)("ul",{children:Array.isArray(d)&&d.length>0?d.map((e=>Object(l.jsxs)("li",{children:["$",e.amount.toFixed(2)," - ",e.category," (",e.type,")"]},e.transaction_id))):Object(l.jsx)("p",{children:"No transactions found."})})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Dashboard"}),Object(l.jsx)("p",{children:"Please login to view your dashboard."}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px"},children:Object(l.jsx)("button",{onClick:()=>u("/login"),children:"Login"})})]})};var y=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"404: PAGE NOT FOUND"}),Object(l.jsx)("p",{children:"Oops, sorry, we can't find this page!"}),Object(l.jsx)("img",{src:"http://localhost:5000/images/kittykat.jpeg",alt:"cute cat pic"})]})};n(13);var S=function(){return Object(l.jsx)(f,{children:Object(l.jsx)(d,{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(h,{})}),Object(l.jsx)(o.a,{path:"/login",element:Object(l.jsx)(O,{})}),Object(l.jsx)(o.a,{path:"/user",element:Object(l.jsx)(x,{})}),Object(l.jsx)(o.a,{path:"/form",element:Object(l.jsx)(p,{})}),Object(l.jsx)(o.a,{path:"/dashboard",element:Object(l.jsx)(v,{})}),Object(l.jsx)(o.a,{path:"/transactionlist",element:Object(l.jsx)(g,{})}),Object(l.jsx)(o.a,{path:"/signup",element:Object(l.jsx)(m,{})}),Object(l.jsx)(o.a,{path:"*",element:Object(l.jsx)(y,{})})]})})})})};var w=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((t=>{let{getCLS:n,getFID:c,getFCP:s,getLCP:r,getTTFB:a}=t;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),w()}},[[14,1,2]]]);
//# sourceMappingURL=main.3f0717b1.chunk.js.map