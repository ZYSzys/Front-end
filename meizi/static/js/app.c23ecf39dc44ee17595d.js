webpackJsonp([1],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),s=e("mtWM"),r=e.n(s),a={name:"App",data:function(){return{items:[],urlPrefix:"https://raw.githubusercontent.com/chenjiandongx/mmjpg/master/yummy/",count:1e4}},created:function(){this.fetchJson()},methods:{loadMore:function(){try{for(var t=0;t<6;t++)this.items.push(window.__INITIAL_STATE__[~~(Math.random()*this.count)])}catch(t){}},fetchJson:function(){var t=this;r.a.get("https://raw.githubusercontent.com/chenjiandongx/mmjpg/master/yummy.json").then(function(n){window.__INITIAL_STATE__=n.data,t.count=window.__INITIAL_STATE__.length,t.loadMore()}).catch(function(t){})}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"container",attrs:{"infinite-scroll-distance":"720","infinite-scroll-throttle-delay":"100","infinite-scroll-disabled":"busy",item:t.items}},[e("div",{staticClass:"waterfall"},t._l(t.items,function(n){return e("div",{staticClass:"img-cell"},[e("img",{attrs:{src:t.urlPrefix+n.imgSrc}})])}))])},staticRenderFns:[]};var c={name:"App",components:{imgsList:e("VU/8")(a,o,!1,function(t){e("Zl+H")},null,null).exports}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("imgs-list")],1)},staticRenderFns:[]},u=e("VU/8")(c,l,!1,null,null,null).exports,m=e("bqTm"),d=e.n(m);i.a.use(d.a),i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:u},template:"<App/>"})},"Zl+H":function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.c23ecf39dc44ee17595d.js.map