(()=>{"use strict";const e=function(e,t,n,a,c,i){const o=document.createElement(`${e}`);return{displayElement:function(){c&&(o.textContent=`${c}`),n&&o.setAttribute("id",`${n}`),a&&o.classList.add(`${a}`),i&&(o.src=i),t.appendChild(o)},name:o}},t=function(){const t=document.getElementById("content"),n=e("h1",t,"title","","TOP Restaurant"),a=e("img",t,"pic","","","imgs/restaurant.jpg"),c=e("p",t,"description","","The best restaurant.(I believe the title convinced you enough.)");return{createPage:function(){n.displayElement(),a.displayElement(),c.displayElement()}}}(),n=function(){const t=document.getElementById("content"),n=e("h1",t,"title","","Menu"),a=e("img",t,"pic","","","imgs/musaka.jpg");return{createPage:function(){n.displayElement(),a.displayElement()}}}();(function(){const a=document.getElementById("content"),c=e("div",a,"navBar","","",""),i=e("p",c.name,"homeTab","tab","Home"),o=e("p",c.name,"menuTab","tab","Menu"),l=e("p",c.name,"contactTab","tab","Contacts"),s=function(e){for(;a.childNodes.length>1;)a.removeChild(a.lastChild);"menuTab"===e.target.id?(console.log("test1"),n.createPage()):"homeTab"===e.target.id&&(console.log("object"),t.createPage())};return{generatePage:function(){c.displayElement(),i.displayElement(),o.displayElement(),l.displayElement(),document.querySelectorAll(".tab").forEach((function(e){e.addEventListener("click",s)}))}}})().generatePage(),t.createPage()})();