(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const L="/http-app/assets/javascript-8dac5379.svg",N=`<div class="modal-dialog">\r
    <form novalidate>\r
        <span>User</span>\r
        <input type="text" name="firstName" placeholder="First Name" />\r
        <input type="text" name="lastName" placeholder="Last Name" />\r
        <input type="number" name="balance" placeholder="Balance" />\r
\r
        <div>\r
            <input type="checkbox" id="is-active" name="isActive" checked/>\r
            <label for="is-active">is active?</label>\r
        </div>\r
\r
        <button type="submit">\r
            Save\r
        </button>\r
\r
    </form>\r
\r
</div>`;class y{constructor({id:t,isActive:a,balance:n,avatar:r,firstName:s,lastName:c,gender:m}){this.id=t,this.isActive=a,this.balance=n,this.avatar=r,this.firstName=s,this.lastName=c,this.gender=m}}const p=e=>{const{avatar:t,balance:a,first_name:n,gender:r,id:s,isActive:c,last_name:m}=e;return new y({avatar:t,balance:a,firstName:n,gender:r,id:s,isActive:c,lastName:m})},P=async e=>{const t=`http://localhost:3001/users/${e}`,n=await(await fetch(t)).json();return p(n)};let i,d,f={};const b=async e=>{if(i==null||i.classList.remove("hide-modal"),f={},!e)return;const t=await P(e);T(t)},v=()=>{i==null||i.classList.add("hide-modal"),d==null||d.reset()},T=e=>{d.querySelector('[name="firstName"]').value=e.firstName,d.querySelector('[name="lastName"]').value=e.lastName,d.querySelector('[name="balance"]').value=e.balance,d.querySelector('[name="isActive"]').checked=e.isActive,f=e},S=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=N,i.className="modal-container hide-modal",d=i.querySelector("form"),i.addEventListener("click",a=>{a.target.className==="modal-container"&&v()}),d.addEventListener("submit",async a=>{a.preventDefault();const n=new FormData(d),r={...f};for(const[s,c]of n){if(s==="balance"){r[s]=+c;continue}if(s==="isActive"){r[s]=c==="on";continue}r[s]=c}await t(r),v()}),e.append(i))};const $=e=>{const t=document.createElement("button");t.innerText="+",t.classList.add("fab-button"),e.append(t),t.addEventListener("click",()=>{b()})},g=async(e=1)=>{const t=`http://localhost:3001/users?_page=${e}`;return(await(await fetch(t)).json()).map(p)},o={currentPage:0,users:[]},E=async()=>{const e=await g(o.currentPage+1);e.length!==0&&(o.currentPage+=1,o.users=e)},w=async()=>{if(o.currentPage<=1)return;const e=await g(o.currentPage-1);e.length!==0&&(o.currentPage-=1,o.users=e)},U=e=>{let t=!1;o.users=o.users.map(a=>a.id===e.id?(t=!0,e):a),o.users.length<10&&!t&&o.users.push(e)},A=async()=>{const e=await g(o.currentPage);if(e.length===0){await w();return}o.users=e},l={loadNextPage:E,loadPreviusPage:w,onUserChanged:U,reloadPage:A,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage},x=async e=>{const t=`http://localhost:3001/users/${e}`;return await(await fetch(t,{method:"DELETE"})).json(),!0};let u;const M=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;const a=document.createElement("tbody");return e.append(t,a),e},k=e=>{const t=e.target.closest(".select-user");if(!t)return;const a=t.getAttribute("data-id");b(a)},B=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const a=t.getAttribute("data-id");try{await x(a),await l.reloadPage(),document.querySelector("#current-page").innerText=l.getCurrentPage(),h()}catch{alert("no se puedo eliminar")}},h=e=>{const t=l.getUsers();u||(u=M(),e.append(u),u.addEventListener("click",k),u.addEventListener("click",B));let a="";t.forEach(n=>{a+=`
        <tr>
            <td>${n.id}</td>
            <td>${n.balance}</td>
            <td>${n.firstName}</td>
            <td>${n.lastName}</td>
            <td>${n.isActive}</td>
            <td>
                <a href="#/" class="select-user" data-id = "${n.id}"> Select </a>
                |
                <a href="#/" class="delete-user" data-id = "${n.id}"> Delete </a>
            </td>
        </tr>
        `}),u.querySelector("tbody").innerHTML=a};const q=e=>{const t=document.createElement("button");t.innerText=" Next >";const a=document.createElement("button");a.innerText="< Prev ";const n=document.createElement("span");n.id="current-page",n.innerText=l.getCurrentPage(),e.append(a,n,t),t.addEventListener("click",async()=>{await l.loadNextPage(),n.innerText=l.getCurrentPage(),h(e)}),a.addEventListener("click",async()=>{await l.loadPreviusPage(),n.innerText=l.getCurrentPage(),h(e)})},H=e=>{const{avatar:t,balance:a,firstName:n,gender:r,id:s,isActive:c,lastName:m}=e;return{avatar:t,balance:a,first_name:n,gender:r,id:s,isActive:c,last_name:m}},j=async e=>{const t=`http://localhost:3001/users/${e.id}`;return await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()},C=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw"Firs and last name are required";const a=H(t);let n;return t.id?n=await j(a):n=await D(a),p(n)},D=async e=>await(await fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json(),F=async e=>{e.innerHTML="Loading...",await l.loadNextPage(),e.innerHTML="",h(e),q(e),$(e),S(e,async t=>{const a=await C(t);l.onUserChanged(a),h()})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${L}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">

    </div>
  </div>
`;const O=document.querySelector(".card");F(O);
