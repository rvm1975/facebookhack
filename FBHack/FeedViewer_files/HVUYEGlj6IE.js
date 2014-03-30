/*!CK:2522707059!*//*1395624180,178134569*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FVYVs"]); }

__d("ActorURIConfig",[],function(a,b,c,d,e,f){e.exports={PARAMETER_ACTOR:"__av"};});
__d("Button.react",["AbstractButton.react","ReactPropTypes","React","cx"],function(a,b,c,d,e,f,g,h,i,j){var k=i.createClass({displayName:'Button',propTypes:{use:h.oneOf(['special','confirm','default']),size:h.oneOf(['medium','large']),suppressed:h.bool},render:function(){var l=this.props.use||'default',m=this.props.size||'medium',n=(("_42fu")+(l==='special'?' '+"_42gz":'')+(l==='confirm'?' '+"_42g-":'')+(m==='large'?' '+"_42gy":'')+(this.props.suppressed?' '+"_42gx":'')+(l!=='default'?' '+"selected":''));return this.transferPropsTo(g({className:n}));}});e.exports=k;});
__d("LinkshimAsyncLink",["$","AsyncSignal","DOM","UserAgent"],function(a,b,c,d,e,f,g,h,i,j){var k={swap:function(l,m){var n=j.ie()<=8;if(n){var o=i.create('wbr',{},null);i.appendContent(l,o);}l.href=m;if(n)i.remove(o);},referrer_log:function(l,m,n){var o=g('meta_referrer');o.content="origin";k.swap(l,m);setTimeout(function(){o.content="default";new h(n,{}).send();},100);}};e.exports=k;});
__d("legacy:dom-asynclinkshim",["LinkshimAsyncLink"],function(a,b,c,d){a.LinkshimAsyncLink=b('LinkshimAsyncLink');},3);
__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],function(a,b,c,d,e,f,g,h,i){function j(k,l){var m=h.get(l);if((m!=k)&&(m!=null)&&(k!='0')){var n={c:'si_detect_broken_proxy_cache',m:l+' '+k+' '+m},o=new i('/common/scribe_endpoint.php').getQualifiedURI().toString();new g(o,n).send();}}e.exports={run:j};});
__d("ActorURI",["ActorURIConfig","URI"],function(a,b,c,d,e,f,g,h){var i={create:function(j,k){return (new h(j)).addQueryData(g.PARAMETER_ACTOR,k);}};i.PARAMETER_ACTOR=g.PARAMETER_ACTOR;e.exports=i;});
__d("ScubaSample",["Banzai","copyProperties"],function(a,b,c,d,e,f,g,h){var i="scuba_sample";function j(m,n,o){this.fields={};this.flush=function(){if(!m)return;var p={};h(p,this.fields);p._ds=m;if(n)p._lid=n;p._options=o;g.post(i,p);this.flush=function(){};this.flushed=true;};this.lid=n;return this;}function k(m,n,o){if(!this.fields[m])this.fields[m]={};this.fields[m][n]=o;return this;}function l(m){return function(n,o){if(this.flushed)return this;return k.call(this,m,n,o);};}h(j.prototype,{addNormal:l('normal'),addInteger:l('int'),addDenorm:l('denorm'),addTagset:l('tags'),addNormVector:l('normvector')});e.exports=j;});
__d("BehaviorsMixin",["copyProperties"],function(a,b,c,d,e,f,g){function h(l){this._behavior=l;this._enabled=false;}g(h.prototype,{enable:function(){if(!this._enabled){this._enabled=true;this._behavior.enable();}},disable:function(){if(this._enabled){this._enabled=false;this._behavior.disable();}}});var i=1;function j(l){if(!l.__BEHAVIOR_ID)l.__BEHAVIOR_ID=i++;return l.__BEHAVIOR_ID;}var k={enableBehavior:function(l){if(!this._behaviors)this._behaviors={};var m=j(l);if(!this._behaviors[m])this._behaviors[m]=new h(new l(this));this._behaviors[m].enable();return this;},disableBehavior:function(l){if(this._behaviors){var m=j(l);if(this._behaviors[m])this._behaviors[m].disable();}return this;},enableBehaviors:function(l){l.forEach(this.enableBehavior.bind(this));return this;},destroyBehaviors:function(){if(this._behaviors){for(var l in this._behaviors)this._behaviors[l].disable();this._behaviors={};}},hasBehavior:function(l){return this._behaviors&&(j(l) in this._behaviors);}};e.exports=k;});
__d("escapeRegex",[],function(a,b,c,d,e,f){function g(h){return h.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1");}e.exports=g;});
__d("sprintf",[],function(a,b,c,d,e,f){function g(h){var i=Array.prototype.slice.call(arguments,1),j=0;return h.replace(/%s/g,function(k){return i[j++];});}e.exports=g;});
__d("Log",["sprintf"],function(a,b,c,d,e,f,g){var h={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function i(k,l){var m=Array.prototype.slice.call(arguments,2),n=g.apply(null,m),o=window.console;if(o&&j.level>=l)o[k in o?k:'log'](n);}var j={level:-1,Level:h,debug:i.bind(null,'debug',h.DEBUG),info:i.bind(null,'info',h.INFO),warn:i.bind(null,'warn',h.WARNING),error:i.bind(null,'error',h.ERROR)};e.exports=j;});
__d("AjaxPipeRequest",["Arbiter","AsyncRequest","BigPipe","CSS","DOM","Env","PageletSet","ScriptPathState","URI","copyProperties","ge","goOrReplace"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s;function t(w,x){var y=q(w);if(!y)return;if(!x)y.style.minHeight='100px';var z=m.getPageletIDs();for(var aa=0;aa<z.length;aa++){var ba=z[aa];if(k.contains(y,ba))m.removePagelet(ba);}k.empty(y);g.inform('pagelet/destroy',{id:null,root:y});}function u(w,x){var y=q(w);if(y&&!x)y.style.minHeight='100px';}function v(w,x){"use strict";this._uri=w;this._query_data=x;this._request=new h();this._canvas_id=null;this._allow_cross_page_transition=true;}v.prototype.setCanvasId=function(w){"use strict";this._canvas_id=w;return this;};v.prototype.setURI=function(w){"use strict";this._uri=w;return this;};v.prototype.setData=function(w){"use strict";this._query_data=w;return this;};v.prototype.getData=function(w){"use strict";return this._query_data;};v.prototype.setAllowCrossPageTransition=function(w){"use strict";this._allow_cross_page_transition=w;return this;};v.prototype.setAppend=function(w){"use strict";this._append=w;return this;};v.prototype.send=function(){"use strict";var w={ajaxpipe:1,ajaxpipe_token:l.ajaxpipe_token};p(w,n.getParams());n.reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(p(w,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=s;}else s=this._request;this._request.send();return this;};v.prototype._preBootloadFirstResponse=function(w){"use strict";return false;};v.prototype._fireDomContentCallback=function(){"use strict";this._arbiter.inform('ajaxpipe/domcontent_callback',true,g.BEHAVIOR_STATE);};v.prototype._fireOnloadCallback=function(){"use strict";this._arbiter.inform('ajaxpipe/onload_callback',true,g.BEHAVIOR_STATE);};v.prototype._isRelevant=function(w){"use strict";return this._request==s||(this._automatic&&this._relevantRequest==s)||this._jsNonBlock||(s&&s._allowIrrelevantRequests);};v.prototype._preBootloadHandler=function(w){"use strict";var x=w.getPayload();if(!x||x.redirect||!this._isRelevant(w))return false;var y=false;if(w.is_first){!this._append&&!this._displayCallback&&t(this._canvas_id,this._constHeight);this._arbiter=new g();y=this._preBootloadFirstResponse(w);this.pipe=new i({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:'ajaxpipe/domcontent_callback',onloadEvt:'ajaxpipe/onload_callback',jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return y;};v.prototype._redirect=function(w){"use strict";if(w.redirect){if(w.force||!this.isPageActive(w.redirect)){var x=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());r(window.location,o(w.redirect).removeQueryData(x),true);}else{var y=a.PageTransitions;y.go(w.redirect,true);}return true;}else return false;};v.prototype.isPageActive=function(w){"use strict";return true;};v.prototype.getSanitizedParameters=function(){"use strict";return [];};v.prototype._versionCheck=function(w){"use strict";return true;};v.prototype._onInitialResponse=function(w){"use strict";var x=w.getPayload();if(!this._isRelevant(w))return false;if(!x)return true;if(this._redirect(x)||!this._versionCheck(x))return false;return true;};v.prototype._processFirstResponse=function(w){"use strict";var x=w.getPayload();if(q(this._canvas_id)&&x.canvas_class!=null)j.setClass(this._canvas_id,x.canvas_class);};v.prototype.setFirstResponseCallback=function(w){"use strict";this._firstResponseCallback=w;return this;};v.prototype.setFirstResponseHandler=function(w){"use strict";this._processFirstResponse=w;return this;};v.prototype._onResponse=function(w){"use strict";var x=w.payload;if(!this._isRelevant(w))return h.suppressOnloadToken;if(w.is_first){this._processFirstResponse(w);this._firstResponseCallback&&this._firstResponseCallback();x.provides=x.provides||[];x.provides.push('uipage_onload');if(this._append)x.append=this._canvas_id;}if(x){if('content' in x.content&&this._canvas_id!==null&&this._canvas_id!='content'){x.content[this._canvas_id]=x.content.content;delete x.content.content;}this.pipe.onPageletArrive(x);}if(w.is_last)u(this._canvas_id,this._constHeight);return h.suppressOnloadToken;};v.prototype.setNectarModuleDataSafe=function(w){"use strict";this._request.setNectarModuleDataSafe(w);return this;};v.prototype.setFinallyHandler=function(w){"use strict";this._request.setFinallyHandler(w);return this;};v.prototype.setErrorHandler=function(w){"use strict";this._request.setErrorHandler(w);return this;};v.prototype.abort=function(){"use strict";this._request.abort();if(s==this._request)s=null;this._request=null;return this;};v.prototype.setJSNonBlock=function(w){"use strict";this._jsNonBlock=w;return this;};v.prototype.setAutomatic=function(w){"use strict";this._automatic=w;return this;};v.prototype.setDisplayCallback=function(w){"use strict";this._displayCallback=w;return this;};v.prototype.setConstHeight=function(w){"use strict";this._constHeight=w;return this;};v.prototype.setAllowIrrelevantRequests=function(w){"use strict";this._allowIrrelevantRequests=w;return this;};v.prototype.getAsyncRequest=function(){"use strict";return this._request;};v.getCurrentRequest=function(){"use strict";return s;};v.setCurrentRequest=function(w){"use strict";s=w;};e.exports=v;});
__d("BootloadedReact",["Bootloader"],function(a,b,c,d,e,f,g){var h=function(j){g.loadModules(["React"],j);},i={isValidComponent:function(j){if(!j||!j.type||!j.type.prototype)return false;var k=j.type.prototype;return (typeof k.mountComponentIntoNode==='function'&&typeof k.receiveComponent==='function');},initializeTouchEvents:function(j,k){h(function(l){l.initializeTouchEvents(j);k&&k();});},createClass:function(j,k){h(function(l){var m=l.createClass(j);k&&k(m);});},renderComponent:function(j,k,l){h(function(m){var n=m.renderComponent(j,k);l&&l(n);});},unmountComponentAtNode:function(j,k){h(function(l){l.unmountComponentAtNode(j);k&&k();});}};e.exports=i;});
__d("ContextualThing",["CSS","DOM","ge"],function(a,b,c,d,e,f,g,h,i){var j={register:function(k,l){k.setAttribute('data-ownerid',h.getID(l));},containsIncludingLayers:function(k,l){while(l){if(h.contains(k,l))return true;l=j.getContext(l);}return false;},getContext:function(k){var l;while(k){if(k.getAttribute&&(l=k.getAttribute('data-ownerid')))return i(l);k=k.parentNode;}return null;},parentByClass:function(k,l){var m;while(k&&!g.hasClass(k,l))if(k.getAttribute&&(m=k.getAttribute('data-ownerid'))){k=i(m);}else k=k.parentNode;return k;}};e.exports=j;});
__d("DimensionTracking",["Cookie","DOMDimensions","Event","debounce","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){var m=h.getViewportDimensions();g.set('wd',m.width+'x'+m.height);}if(!k()){setTimeout(l,100);i.listen(window,'resize',j(l,250));i.listen(window,'focus',l);}});
__d("Form",["AsyncRequest","AsyncResponse","CSS","DataStore","DOM","DOMQuery","DTSG","Event","Input","Parent","PHPQuerySerializer","URI","createArrayFrom","getElementPosition","trackReferrer"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v='FileList' in window,w='FormData' in window;function x(z){var aa={};q.serialize(z).split('&').forEach(function(ba){if(ba){var ca=/^([^=]*)(?:=(.*))?$/.exec(ba),da=r.decodeComponent(ca[1]),ea=ca[2]?r.decodeComponent(ca[2]):null;aa[da]=ea;}});return aa;}var y={getInputs:function(z){z=z||document;return [].concat(s(l.scry(z,'input')),s(l.scry(z,'select')),s(l.scry(z,'textarea')),s(l.scry(z,'button')));},getInputsByName:function(z){var aa={};y.getInputs(z).forEach(function(ba){var ca=aa[ba.name];aa[ba.name]=typeof ca==='undefined'?ba:[ba].concat(ca);});return aa;},getSelectValue:function(z){return z.options[z.selectedIndex].value;},setSelectValue:function(z,aa){for(var ba=0;ba<z.options.length;++ba)if(z.options[ba].value==aa){z.selectedIndex=ba;break;}},getRadioValue:function(z){for(var aa=0;aa<z.length;aa++)if(z[aa].checked)return z[aa].value;return null;},getElements:function(z){return s(z.tagName=='FORM'&&z.elements!=z?z.elements:y.getInputs(z));},getAttribute:function(z,aa){return (z.getAttributeNode(aa)||{}).value||null;},setDisabled:function(z,aa){y.getElements(z).forEach(function(ba){if(ba.disabled!==undefined){var ca=j.get(ba,'origDisabledState');if(aa){if(ca===undefined)j.set(ba,'origDisabledState',ba.disabled);ba.disabled=aa;}else if(ca===false)ba.disabled=false;}});},bootstrap:function(z,aa){var ba=(y.getAttribute(z,'method')||'GET').toUpperCase();aa=p.byTag(aa,'button')||aa;var ca=p.byClass(aa,'stat_elem')||z;if(i.hasClass(ca,'async_saving'))return;if(aa&&(aa.form!==z||(aa.nodeName!='INPUT'&&aa.nodeName!='BUTTON')||aa.type!='submit')){var da=l.scry(z,'.enter_submit_target')[0];da&&(aa=da);}var ea=y.serialize(z,aa);y.setDisabled(z,true);var fa=y.getAttribute(z,'ajaxify')||y.getAttribute(z,'action');u(z,fa);var ga=new g(fa);ga.setData(ea).setNectarModuleDataSafe(z).setReadOnly(ba=='GET').setMethod(ba).setRelativeTo(z).setStatusElement(ca).setInitialHandler(y.setDisabled.bind(null,z,false)).setHandler(function(ha){n.fire(z,'success',{response:ha});}).setErrorHandler(function(ha){if(n.fire(z,'error',{response:ha})!==false)h.defaultErrorHandler(ha);}).setFinallyHandler(y.setDisabled.bind(null,z,false)).send();},forEachValue:function(z,aa,ba){y.getElements(z).forEach(function(ca){if(!ca.name||ca.disabled)return;if(ca.type==='submit')return;if(ca.type==='reset'||ca.type==='button'||ca.type==='image')return;if((ca.type==='radio'||ca.type==='checkbox')&&!ca.checked)return;if(ca.nodeName==='SELECT'){for(var da=0,ea=ca.options.length;da<ea;da++){var fa=ca.options[da];if(fa.selected)ba('select',ca.name,fa.value);}return;}if(ca.type==='file'){if(v){var ga=ca.files;for(var ha=0;ha<ga.length;ha++)ba('file',ca.name,ga.item(ha));}return;}ba(ca.type,ca.name,o.getValue(ca));});if(aa&&aa.name&&aa.type==='submit'&&l.contains(z,aa)&&l.isNodeOfType(aa,['input','button']))ba('submit',aa.name,aa.value);},createFormData:function(z,aa){if(!w)return null;var ba=new FormData();if(z)if(l.isNode(z)){y.forEachValue(z,aa,function(ea,fa,ga){ba.append(fa,ga);});}else{var ca=x(z);for(var da in ca)ba.append(da,ca[da]);}return ba;},serialize:function(z,aa){var ba={};y.forEachValue(z,aa,function(ca,da,ea){if(ca==='file')return;y._serializeHelper(ba,da,ea);});return y._serializeFix(ba);},_serializeHelper:function(z,aa,ba){var ca=Object.prototype.hasOwnProperty,da=/([^\]]+)\[([^\]]*)\](.*)/.exec(aa);if(da){if(!z[da[1]]||!ca.call(z,da[1])){var ea;z[da[1]]=ea={};if(z[da[1]]!==ea)return;}var fa=0;if(da[2]===''){while(z[da[1]][fa]!==undefined)fa++;}else fa=da[2];if(da[3]===''){z[da[1]][fa]=ba;}else y._serializeHelper(z[da[1]],fa.concat(da[3]),ba);}else z[aa]=ba;},_serializeFix:function(z){for(var aa in z)if(z[aa] instanceof Object)z[aa]=y._serializeFix(z[aa]);var ba=Object.keys(z);if(ba.length===0||ba.some(isNaN))return z;ba.sort(function(ea,fa){return ea-fa;});var ca=0,da=ba.every(function(ea){return +ea===ca++;});if(da)return ba.map(function(ea){return z[ea];});return z;},post:function(z,aa,ba){var ca=document.createElement('form');ca.action=z.toString();ca.method='POST';ca.style.display='none';if(ba)ca.target=ba;aa.fb_dtsg=m.getToken();y.createHiddenInputs(aa,ca);l.getRootElement().appendChild(ca);ca.submit();return false;},createHiddenInputs:function(z,aa,ba,ca){ba=ba||{};var da=x(z);for(var ea in da){if(da[ea]===null)continue;if(ba[ea]&&ca){ba[ea].value=da[ea];}else{var fa=k.create('input',{type:'hidden',name:ea,value:da[ea]});ba[ea]=fa;aa.appendChild(fa);}}return ba;},getFirstElement:function(z,aa){aa=aa||['input[type="text"]','textarea','input[type="password"]','input[type="button"]','input[type="submit"]'];var ba=[];for(var ca=0;ca<aa.length;ca++){ba=l.scry(z,aa[ca]);for(var da=0;da<ba.length;da++){var ea=ba[da];try{var ga=t(ea);if(ga.y>0&&ga.x>0)return ea;}catch(fa){}}}return null;},focusFirst:function(z){var aa=y.getFirstElement(z);if(aa){aa.focus();return true;}return false;}};e.exports=y;});
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(n){if(window.top!==window.self)return;var o=j.create('div');j.appendContent(document.body,o);o.style.cssText='border: 1px solid;'+'border-color: red green;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+n.spacerImage+');';var p=k.get(o,'background-image'),q=k.get(o,'border-top-color'),r=k.get(o,'border-right-color'),s=q==r&&(p&&(p=='none'||p=='url(invalid-url:)'));if(s){h.conditionClass(document.documentElement,'highContrast',s);if(i.getID())g.logHCM();}j.remove(o);m.init=l;}};e.exports=m;});
__d("KeyEventController",["DOM","Event","Run","isEmpty"],function(a,b,c,d,e,f,g,h,i,j){var k=null,l=['input','select','textarea','object','embed'],m={button:1,checkbox:1,radio:1,submit:1},n={BACKSPACE:[8],TAB:[9],RETURN:[13],ESCAPE:[27],LEFT:[37,63234],UP:[38,63232],RIGHT:[39,63235],DOWN:[40,63233],DELETE:[46],COMMA:[188],PERIOD:[190],SLASH:[191],'`':[192],'[':[219],']':[221],PAGE_UP:[33],PAGE_DOWN:[34]},o={8:1,9:1,13:1,27:1,37:1,63234:1,38:1,63232:1,39:1,63235:1,40:1,63233:1,46:1};function p(){"use strict";this.handlers={};document.onkeyup=this.onkeyevent.bind(this,'onkeyup');document.onkeydown=this.onkeyevent.bind(this,'onkeydown');document.onkeypress=this.onkeyevent.bind(this,'onkeypress');}p.prototype.mapKey=function(q){"use strict";if(q>=0&&q<=9){if(typeof(q)!='number')q=q.charCodeAt(0)-48;return [48+q,96+q];}var r=n[q.toUpperCase()];if(r)return r;return [q.toUpperCase().charCodeAt(0)];};p.prototype.onkeyevent=function(q,r){"use strict";r=h.$E(r);var s=this.handlers[r.keyCode]||this.handlers[r.which],t,u,v;if(s)for(var w=0;w<s.length;w++){t=s[w].callback;u=s[w].filter;try{if(!u||u(r,q)){v=t(r,q);if(v===false)return h.kill(r);}}catch(x){}}return true;};p.prototype.resetHandlers=function(){"use strict";this.handlers={};};p.getInstance=function(){"use strict";return k||(k=new p());};p.defaultFilter=function(event,q){"use strict";event=h.$E(event);return p.filterEventTypes(event,q)&&p.filterEventTargets(event,q)&&p.filterEventModifiers(event,q);};p.filterEventTypes=function(event,q){"use strict";if(q==='onkeydown')return true;return false;};p.filterEventTargets=function(event,q){"use strict";var r=event.getTarget(),s=r.contentEditable==='true';return (!(s||g.isNodeOfType(r,l))||r.type in m||(event.keyCode in o&&((g.isNodeOfType(r,['input','textarea'])&&r.value.length===0)||(s&&g.getText(r).length===0))));};p.filterEventModifiers=function(event,q){"use strict";if(event.ctrlKey||event.altKey||event.metaKey||event.repeat)return false;return true;};p.registerKey=function(q,r,s,t){"use strict";if(s===undefined)s=p.defaultFilter;var u=p.getInstance(),v=u.mapKey(q);if(j(u.handlers))i.onLeave(u.resetHandlers.bind(u));var w={};for(var x=0;x<v.length;x++){q=v[x];if(!u.handlers[q]||t)u.handlers[q]=[];var y={callback:r,filter:s};w[q]=y;u.handlers[q].push(y);}return {remove:function(){for(var z in w){if(u.handlers[z]&&u.handlers[z].length){var aa=u.handlers[z].indexOf(w[z]);aa>=0&&u.handlers[z].splice(aa,1);}delete w[z];}}};};e.exports=p;});
__d("KeyStatus",["Event"],function(a,b,c,d,e,f,g){var h=null,i=null;function j(){if(!i)i=g.listen(window,'blur',function(){h=null;k();});}function k(){if(i){i.remove();i=null;}}g.listen(document.documentElement,'keydown',function(m){h=g.getKeyCode(m);j();},g.Priority.URGENT);g.listen(document.documentElement,'keyup',function(m){h=null;k();},g.Priority.URGENT);var l={isKeyDown:function(){return !!h;},getKeyDownCode:function(){return h;}};e.exports=l;});
__d("Layer",["ArbiterMixin","BehaviorsMixin","BootloadedReact","ContextualThing","CSS","DataStore","DOM","Event","HTML","KeyEventController","Parent","Style","copyProperties","ge","mixin","removeFromArray","KeyStatus"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b('KeyStatus');var w=[],x=u(g,h);for(var y in x)if(x.hasOwnProperty(y))aa[y]=x[y];var z=x===null?null:x.prototype;aa.prototype=Object.create(z);aa.prototype.constructor=aa;aa.__superConstructor__=x;function aa(ba,ca){"use strict";this._config=ba||{};if(ca){this._configure(this._config,ca);var da=this._config.addedBehaviors||[];this.enableBehaviors(this._getDefaultBehaviors().concat(da));}}aa.prototype.init=function(ba){"use strict";this._configure(this._config,ba);var ca=this._config.addedBehaviors||[];this.enableBehaviors(this._getDefaultBehaviors().concat(ca));this._initialized=true;return this;};aa.prototype._configure=function(ba,ca){"use strict";if(ca){var da=m.isNode(ca),ea=typeof ca==='string'||o.isHTML(ca);this.containsReactComponent=i.isValidComponent(ca);if(ea){ca=o(ca).getRootNode();}else if(this.containsReactComponent){var fa=document.createElement('div');i.renderComponent(ca,fa);ca=this._reactContainer=fa;}}this._root=this._buildWrapper(ba,ca);if(ba.attributes)m.setAttributes(this._root,ba.attributes);if(ba.classNames)ba.classNames.forEach(k.addClass.bind(null,this._root));k.addClass(this._root,'uiLayer');if(ba.causalElement)this._causalElement=t(ba.causalElement);if(ba.permanent)this._permanent=ba.permanent;l.set(this._root,'layer',this);};aa.prototype._getDefaultBehaviors=function(){"use strict";return [];};aa.prototype.getCausalElement=function(){"use strict";return this._causalElement;};aa.prototype.setCausalElement=function(ba){"use strict";this._causalElement=ba;return this;};aa.prototype.getInsertParent=function(){"use strict";return this._insertParent||document.body;};aa.prototype.getRoot=function(){"use strict";return this._root;};aa.prototype.getContentRoot=function(){"use strict";return this._root;};aa.prototype._buildWrapper=function(ba,ca){"use strict";return ca;};aa.prototype.setInsertParent=function(ba){"use strict";if(ba){if(this._shown&&ba!==this.getInsertParent()){m.appendContent(ba,this.getRoot());this.updatePosition();}this._insertParent=ba;}return this;};aa.prototype.show=function(){"use strict";if(this._shown)return this;var ba=this.getRoot();this.inform('beforeshow');r.set(ba,'visibility','hidden');r.set(ba,'overflow','hidden');k.show(ba);m.appendContent(this.getInsertParent(),ba);if(this.updatePosition()!==false){this._shown=true;this.inform('show');aa.inform('show',this);if(!this._permanent)setTimeout(function(){if(this._shown)w.push(this);}.bind(this),0);}else k.hide(ba);r.set(ba,'visibility','');r.set(ba,'overflow','');this.inform('aftershow');return this;};aa.prototype.hide=function(){"use strict";if(this._hiding||!this._shown||this.inform('beforehide')===false)return this;this._hiding=true;if(this.inform('starthide')!==false)this.finishHide();return this;};aa.prototype.conditionShow=function(ba){"use strict";return ba?this.show():this.hide();};aa.prototype.finishHide=function(){"use strict";if(this._shown){if(!this._permanent)v(w,this);this._hiding=false;this._shown=false;k.hide(this.getRoot());this.inform('hide');aa.inform('hide',this);}};aa.prototype.isShown=function(){"use strict";return this._shown;};aa.prototype.updatePosition=function(){"use strict";return true;};aa.prototype.destroy=function(){"use strict";if(this.containsReactComponent)i.unmountComponentAtNode(this._reactContainer);this.finishHide();var ba=this.getRoot();m.remove(ba);this.destroyBehaviors();this.inform('destroy');aa.inform('destroy',this);l.remove(ba,'layer');this._root=this._causalElement=null;};aa.init=function(ba,ca){"use strict";ba.init(ca);};aa.initAndShow=function(ba,ca){"use strict";ba.init(ca).show();};aa.show=function(ba){"use strict";ba.show();};aa.getTopmostLayer=function(){"use strict";return w[w.length-1];};s(aa,g);s(aa.prototype,{_initialized:false,_root:null,_shown:false,_hiding:false,_causalElement:null,_reactContainer:null});n.listen(document.documentElement,'keydown',function(event){if(p.filterEventTargets(event,'keydown'))for(var ba=w.length-1;ba>=0;ba--)if(w[ba].inform('key',event)===false)return false;},n.Priority.URGENT);n.listen(document.documentElement,'click',function(event){var ba=w.length;if(!ba)return;var ca=event.getTarget();if(!m.contains(document.documentElement,ca))return;if(!ca.offsetWidth)return;if(q.byClass(ca,'generic_dialog'))return;while(ba--){var da=w[ba],ea=da.getContentRoot();if(j.containsIncludingLayers(ea,ca))return;if(da.inform('blur')===false||da.isShown())return;}});e.exports=aa;});
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){var k={_opts:{allowShrink:true,strategy:'vector',timeout:100,widthElement:null},init:function(l){j(k._opts,l);setInterval(k._resizeCheck,k._opts.timeout);},_resizeCheck:function(){var l=g.getViewportDimensions(),m=k._getDocumentSize(),n=i.getTopmostLayer();if(n){var o=n.getRoot().firstChild,p=g.getElementDimensions(o);p.height+=g.measureElementBox(o,'height',true,true,true);p.width+=g.measureElementBox(o,'width',true,true,true);m.height=Math.max(m.height,p.height);m.width=Math.max(m.width,p.width);}var q=m.height-l.height,r=m.width-l.width;if(r<0&&!k._opts.widthElement)r=0;r=r>1?r:0;if(!k._opts.allowShrink&&q<0)q=0;if(q||r)try{window.console&&window.console.firebug;window.resizeBy(r,q);if(r)window.moveBy(r/-2,0);}catch(s){}},_getDocumentSize:function(){var l=g.getDocumentDimensions();if(k._opts.strategy==='offsetHeight')l.height=document.body.offsetHeight;if(k._opts.widthElement){var m=h.scry(document.body,k._opts.widthElement)[0];if(m)l.width=g.getElementDimensions(m).width;}var n=a.Dialog;if(n&&n.max_bottom&&n.max_bottom>l.height)l.height=n.max_bottom;return l;},open:function(l,m,n){var o=typeof window.screenX!='undefined'?window.screenX:window.screenLeft,p=typeof window.screenY!='undefined'?window.screenY:window.screenTop,q=typeof window.outerWidth!='undefined'?window.outerWidth:document.body.clientWidth,r=typeof window.outerHeight!='undefined'?window.outerHeight:(document.body.clientHeight-22),s=parseInt(o+((q-n)/2),10),t=parseInt(p+((r-m)/2.5),10),u=('width='+n+',height='+m+',left='+s+',top='+t);return window.open(l,'_blank',u);}};e.exports=k;});
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","URI","copyProperties","emptyFunction","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(r,s,t){"use strict";var u=r&&j.isElementNode(r)?r.id:r;this._id=u||null;this._element=p(r||j.create('div'));this._src=s||null;this._context_data=t||{};this._data={};this._handler=o;this._request=null;this._use_ajaxpipe=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;}q.prototype.getElement=function(){"use strict";return this._element;};q.prototype.setHandler=function(r){"use strict";this._handler=r;return this;};q.prototype.go=function(r,s){"use strict";if(arguments.length>=2||typeof r=='string'){this._src=r;this._data=s||{};}else if(arguments.length==1)this._data=r;this.refresh();return this;};q.prototype.setAllowCrossPageTransition=function(r){"use strict";this._allow_cross_page_transition=r;return this;};q.prototype.setBundleOption=function(r){"use strict";this._is_bundle=r;return this;};q.prototype.setErrorHandler=function(r){"use strict";this._errorHandler=r;return this;};q.prototype.setTransportErrorHandler=function(r){"use strict";this.transportErrorHandler=r;return this;};q.prototype.refresh=function(){"use strict";if(this._use_ajaxpipe){l.setIsUIPageletRequest(true);this._request=new h();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);}else{var r=function(v){this._request=null;var w=k(v.getPayload());if(this._append){j.appendContent(this._element,w);}else j.setContent(this._element,w);this._handler();}.bind(this),s=this._displayCallback,t=this._finallyHandler;this._request=new i().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(v){if(s){s(r.bind(null,v));}else r(v);t&&t();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);}var u={};n(u,this._context_data);n(u,this._data);if(this._actorID)u[g.PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(u)}).send();return this;};q.prototype.cancel=function(){"use strict";if(this._request)this._request.abort();};q.prototype.setUseAjaxPipe=function(r){"use strict";this._use_ajaxpipe=!!r;return this;};q.prototype.setAppend=function(r){"use strict";this._append=!!r;return this;};q.prototype.setJSNonBlock=function(r){"use strict";this._jsNonblock=!!r;return this;};q.prototype.setAutomatic=function(r){"use strict";this._automatic=!!r;return this;};q.prototype.setDisplayCallback=function(r){"use strict";this._displayCallback=r;return this;};q.prototype.setConstHeight=function(r){"use strict";this._constHeight=!!r;return this;};q.prototype.setFinallyHandler=function(r){"use strict";this._finallyHandler=r;return this;};q.prototype.setAllowIrrelevantRequests=function(r){"use strict";this._allowIrrelevantRequests=r;return this;};q.prototype.setActorID=function(r){"use strict";this._actorID=r;return this;};q.appendToInline=function(r,s){"use strict";var t=p(r),u=p(s);if(t&&u){while(u.firstChild)j.appendContent(t,u.firstChild);j.remove(u);}};q.loadFromEndpoint=function(r,s,t,u){"use strict";u=u||{};var v='/ajax/pagelet/generic.php/'+r;if(u.intern)v='/intern'+v;var w=new m(v.replace(/\/+/g,'/'));if(u.subdomain)w.setSubdomain(u.subdomain);var x=new q(s,w,t).setUseAjaxPipe(u.usePipe).setBundleOption(u.bundle!==false).setAppend(u.append).setJSNonBlock(u.jsNonblock).setAutomatic(u.automatic).setDisplayCallback(u.displayCallback).setConstHeight(u.constHeight).setAllowCrossPageTransition(u.crossPage).setFinallyHandler(u.finallyHandler||o).setErrorHandler(u.errorHandler).setTransportErrorHandler(u.transportErrorHandler).setAllowIrrelevantRequests(u.allowIrrelevantRequests).setActorID(u.actorID);u.handler&&x.setHandler(u.handler);x.go();return x;};e.exports=q;});
__d("UIForm",["ArbiterMixin","BehaviorsMixin","DOM","Event","Form","Run","areObjectsEqual","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=n(g,h);for(var p in o)if(o.hasOwnProperty(p))r[p]=o[p];var q=o===null?null:o.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=o;function r(s,t,u,v,w){"use strict";this._root=s;this.controller=s;this._message=t;if(v){this._confirm_dialog=v;v.subscribe('confirm',this._handleDialogConfirm.bind(this));i.prependContent(this._root,i.create('input',{type:'hidden',name:'confirmed',value:'true'}));}l.onAfterLoad(function(){this._originalState=k.serialize(this._root);}.bind(this));this._forceDirty=u;this._confirmed=false;this._submitted=false;j.listen(this._root,'submit',this._handleSubmit.bind(this));if(w&&w.length)this.enableBehaviors(w);var x=true;l.onBeforeUnload(this.checkUnsaved.bind(this),x);}r.prototype.getRoot=function(){"use strict";return this._root;};r.prototype._handleSubmit=function(){"use strict";if(this._confirm_dialog&&!this._confirmed){this._confirm_dialog.show();return false;}if(this.inform('submit')===false)return false;this._submitted=true;return true;};r.prototype._handleDialogConfirm=function(){"use strict";this._confirmed=true;this._confirm_dialog.hide();if(this._root.getAttribute('ajaxify')){j.fire(this._root,'submit');}else if(this._handleSubmit())this._root.submit();};r.prototype.reset=function(){"use strict";this.inform('reset');this._submitted=false;this._confirmed=false;};r.prototype.isDirty=function(){"use strict";if(this._submitted||!i.contains(document.body,this._root))return false;if(this._forceDirty)return true;if(!this._originalState)return false;var s=k.serialize(this._root);return !m(s,this._originalState);};r.prototype.checkUnsaved=function(){"use strict";if(this.isDirty())return this._message;return null;};e.exports=a.UIForm||r;});