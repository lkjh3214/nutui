import{c as e}from"./mobile.f5fbf9f2.js";import{k as l,r as n,o as s,c as r,f as t,i as a}from"./vendor.ed841bd5.js";import"./index.6aaff52e.js";const{createDemo:u}=e("price");var d=u({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}});const i={class:"demo"},o=t("h2",null,"基本用法",-1),c=t("h2",null,"有人民币符号，无千位分隔",-1),p=t("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),f=t("h2",null,"异步随机变更",-1);d.render=function(e,l,u,d,m,h){const b=n("nut-price"),v=n("nut-cell");return s(),r("div",i,[o,t(v,null,{default:a((()=>[t(b,{price:0,"need-symbol":!1,thousands:!0})])),_:1}),c,t(v,null,{default:a((()=>[t(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,t(v,null,{default:a((()=>[t(b,{price:15213.123,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),f,t(v,null,{default:a((()=>[t(b,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export default d;
