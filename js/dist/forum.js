module.exports=function(e){var n={};function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(a,s,function(n){return e[n]}.bind(null,s));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=11)}([function(e,n){e.exports=flarum.core.compat.app},function(e,n){e.exports=flarum.core.compat.extend},function(e,n){e.exports=flarum.core.compat["components/Button"]},function(e,n,t){"use strict";function a(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}t.d(n,"a",(function(){return a}))},function(e,n){e.exports=flarum.core.compat["components/Modal"]},function(e,n){e.exports=flarum.core.compat["components/EditUserModal"]},function(e,n){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,n){e.exports=flarum.core.compat["utils/extractText"]},,,,function(e,n,t){"use strict";t.r(n);var a=t(1),s=t(0),i=t.n(s),o=t(6),r=t.n(o),p=t(7),u=t.n(p),l=t(5),c=t.n(l),d=t(2),f=t.n(d),h=t(3),y=t(4),b=function(e){function n(){return e.apply(this,arguments)||this}Object(h.a)(n,e);var t=n.prototype;return t.init=function(){e.prototype.init.call(this),this.displayname=m.prop(app.session.user.displayName())},t.className=function(){return"ChangeNickNameModal Modal--small"},t.title=function(){return app.translator.trans("dem13n.forum.nickname.change")},t.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{type:"text",autocomplete:"off",name:"nickname",className:"FormControl",bidi:this.displayname,disabled:this.loading})),m("div",{className:"Form-group"},f.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("dem13n.forum.nickname.submit_button")}))))},t.onsubmit=function(e){var n=this;e.preventDefault(),this.displayname()===app.session.user.username()||!this.displayname()&&app.session.user.displayName()===app.session.user.username()?this.hide():(this.loading=!0,app.session.user.save({nickname:this.displayname()},{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).catch((function(){n.loading=!1,m.redraw()})))},n}(t.n(y).a);i.a.initializers.add("dem13n-nickname-changer",(function(){Object(a.extend)(r.a.prototype,"accountItems",(function(e){if(this.displayname=m.prop(i.a.session.user.displayName()),console.log(this.displayname),this.displayname&&""!=this.displayname){var n=i.a.session.user.username().length;this.displayname=m.prop(this.displayname().substring(n+2,this.displayname().length-1))}this.username=m.prop(i.a.session.user.username()),e.add("ChangeNickName",f.a.component({children:i.a.translator.trans("dem13n.forum.nickname.change"),className:"Button",disabled:!0!==i.a.session.user.data.attributes.canPermanentNicknameChange&&!(1==i.a.forum.attribute("NicknameChange")||this.username()==this.displayname()),onclick:function(){return i.a.modal.show(new b)}}))})),Object(a.extend)(c.a.prototype,"init",(function(){var e=this.props.user;if(this.displayname=m.prop(e.displayName()===this.username()?"":e.displayName()),console.log(this.displayname()),this.displayname()&&""!=this.displayname()){var n=this.username().length;this.displayname=m.prop(this.displayname().substring(n+2,this.displayname().length-1))}})),Object(a.extend)(c.a.prototype,"fields",(function(e){e.add("nickname",m("div",{className:"Form-group"},m("label",null,i.a.translator.trans("dem13n.forum.nickname.head_title")),m("input",{className:"FormControl",placeholder:u()(i.a.translator.trans("dem13n.forum.nickname.new_nickname")),bidi:this.displayname})),100)})),Object(a.extend)(c.a.prototype,"data",(function(e){var n=this.props.user;this.displayname()!==this.username()?this.displayname()!==m.prop(n.displayName()===this.username()?"":n.displayName())()&&(e.nickname=this.displayname()):this.hide()}))}))}]);
//# sourceMappingURL=forum.js.map