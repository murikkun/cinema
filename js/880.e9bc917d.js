"use strict";(self["webpackChunkcinephile"]=self["webpackChunkcinephile"]||[]).push([[880],{880:function(e,n,i){i.r(n),i.d(n,{default:function(){return D}});var t=i(6252),a=i(3577);const o={class:"main__info active"},s={key:0,class:"main__info-block"},c=["src"],l={class:"main__info-content"},m={class:"main__info-content-block"},r={class:"main__info-content-title"},_={class:"main__info-content-text"},u={class:"main__info-content-date"},v={key:0};function g(e,n,i,g,p,f){const d=(0,t.up)("Actors");return(0,t.wg)(),(0,t.iD)("div",o,[g.movie?((0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("img",{src:e.getImgFull+g.movie.backdrop_path,alt:"",class:"main__info-img"},null,8,c),(0,t._)("div",l,[(0,t._)("div",m,[(0,t._)("h2",r,(0,a.zw)(g.movie.title||g.movie.name),1),(0,t._)("p",_,(0,a.zw)(g.movie.overview),1),(0,t._)("p",u,[(0,t._)("span",null,(0,a.zw)(new Date(g.movie.release_date).getFullYear()||new Date(g.movie.first_air_date).getFullYear())+",",1),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(g.movie.genres,((e,n)=>((0,t.wg)(),(0,t.iD)("span",{key:e.id},[(0,t.Uk)((0,a.zw)(e.name)+" ",1),n<g.movie.genres.length-1?((0,t.wg)(),(0,t.iD)("span",v,",")):(0,t.kq)("",!0)])))),128))]),(0,t.Wm)(d,{type:/tv/,id:g.movie.id,count:4},null,8,["id"])])])])):(0,t.kq)("",!0)])}var p=i(2262),f=i(2201),d=i(3907),w=i(8714),k={components:{Actors:w.Z},setup(){const e=(0,p.iH)({}),n=(0,f.yj)();return(0,t.wF)((()=>{fetch(`https://api.themoviedb.org/3/tv/${n.params.id}?api_key=ff73598636b772c5fca88d178c32f1a4&language=ru-RU`).then((e=>e.json())).then((n=>{e.value=n,console.log(n)}))})),{movie:e}},computed:{...(0,d.Se)(["getImgFull","getImg"])}},h=i(3744);const b=(0,h.Z)(k,[["render",g]]);var D=b}}]);
//# sourceMappingURL=880.e9bc917d.js.map