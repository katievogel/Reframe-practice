goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48502 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48502(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48508 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48508(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47147 = coll;
var G__47148 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47147,G__47148) : shadow.dom.lazy_native_coll_seq.call(null,G__47147,G__47148));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47171 = arguments.length;
switch (G__47171) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47179 = arguments.length;
switch (G__47179) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47189 = arguments.length;
switch (G__47189) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47199 = arguments.length;
switch (G__47199) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47208 = arguments.length;
switch (G__47208) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47224 = arguments.length;
switch (G__47224) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47233){if((e47233 instanceof Object)){
var e = e47233;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47233;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47246 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47247 = null;
var count__47248 = (0);
var i__47249 = (0);
while(true){
if((i__47249 < count__47248)){
var el = chunk__47247.cljs$core$IIndexed$_nth$arity$2(null,i__47249);
var handler_48559__$1 = ((function (seq__47246,chunk__47247,count__47248,i__47249,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47246,chunk__47247,count__47248,i__47249,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48559__$1);


var G__48560 = seq__47246;
var G__48561 = chunk__47247;
var G__48562 = count__47248;
var G__48563 = (i__47249 + (1));
seq__47246 = G__48560;
chunk__47247 = G__48561;
count__47248 = G__48562;
i__47249 = G__48563;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47246);
if(temp__5735__auto__){
var seq__47246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47246__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47246__$1);
var G__48564 = cljs.core.chunk_rest(seq__47246__$1);
var G__48565 = c__4550__auto__;
var G__48566 = cljs.core.count(c__4550__auto__);
var G__48567 = (0);
seq__47246 = G__48564;
chunk__47247 = G__48565;
count__47248 = G__48566;
i__47249 = G__48567;
continue;
} else {
var el = cljs.core.first(seq__47246__$1);
var handler_48568__$1 = ((function (seq__47246,chunk__47247,count__47248,i__47249,el,seq__47246__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47246,chunk__47247,count__47248,i__47249,el,seq__47246__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48568__$1);


var G__48569 = cljs.core.next(seq__47246__$1);
var G__48570 = null;
var G__48571 = (0);
var G__48572 = (0);
seq__47246 = G__48569;
chunk__47247 = G__48570;
count__47248 = G__48571;
i__47249 = G__48572;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47279 = arguments.length;
switch (G__47279) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47284 = cljs.core.seq(events);
var chunk__47285 = null;
var count__47286 = (0);
var i__47287 = (0);
while(true){
if((i__47287 < count__47286)){
var vec__47298 = chunk__47285.cljs$core$IIndexed$_nth$arity$2(null,i__47287);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47298,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47298,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48592 = seq__47284;
var G__48593 = chunk__47285;
var G__48594 = count__47286;
var G__48595 = (i__47287 + (1));
seq__47284 = G__48592;
chunk__47285 = G__48593;
count__47286 = G__48594;
i__47287 = G__48595;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47284);
if(temp__5735__auto__){
var seq__47284__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47284__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47284__$1);
var G__48597 = cljs.core.chunk_rest(seq__47284__$1);
var G__48598 = c__4550__auto__;
var G__48599 = cljs.core.count(c__4550__auto__);
var G__48600 = (0);
seq__47284 = G__48597;
chunk__47285 = G__48598;
count__47286 = G__48599;
i__47287 = G__48600;
continue;
} else {
var vec__47304 = cljs.core.first(seq__47284__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47304,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48601 = cljs.core.next(seq__47284__$1);
var G__48602 = null;
var G__48603 = (0);
var G__48604 = (0);
seq__47284 = G__48601;
chunk__47285 = G__48602;
count__47286 = G__48603;
i__47287 = G__48604;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47310 = cljs.core.seq(styles);
var chunk__47311 = null;
var count__47312 = (0);
var i__47313 = (0);
while(true){
if((i__47313 < count__47312)){
var vec__47326 = chunk__47311.cljs$core$IIndexed$_nth$arity$2(null,i__47313);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47326,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48607 = seq__47310;
var G__48608 = chunk__47311;
var G__48609 = count__47312;
var G__48610 = (i__47313 + (1));
seq__47310 = G__48607;
chunk__47311 = G__48608;
count__47312 = G__48609;
i__47313 = G__48610;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47310);
if(temp__5735__auto__){
var seq__47310__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47310__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47310__$1);
var G__48612 = cljs.core.chunk_rest(seq__47310__$1);
var G__48613 = c__4550__auto__;
var G__48614 = cljs.core.count(c__4550__auto__);
var G__48615 = (0);
seq__47310 = G__48612;
chunk__47311 = G__48613;
count__47312 = G__48614;
i__47313 = G__48615;
continue;
} else {
var vec__47331 = cljs.core.first(seq__47310__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47331,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47331,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48619 = cljs.core.next(seq__47310__$1);
var G__48620 = null;
var G__48621 = (0);
var G__48622 = (0);
seq__47310 = G__48619;
chunk__47311 = G__48620;
count__47312 = G__48621;
i__47313 = G__48622;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47340_48626 = key;
var G__47340_48627__$1 = (((G__47340_48626 instanceof cljs.core.Keyword))?G__47340_48626.fqn:null);
switch (G__47340_48627__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48630 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_48630,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_48630,"aria-");
}
})())){
el.setAttribute(ks_48630,value);
} else {
(el[ks_48630] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47365){
var map__47367 = p__47365;
var map__47367__$1 = (((((!((map__47367 == null))))?(((((map__47367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47367):map__47367);
var props = map__47367__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47367__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47371 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47371,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47371,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47371,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47377 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47377,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47377;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47386 = arguments.length;
switch (G__47386) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47393){
var vec__47395 = p__47393;
var seq__47396 = cljs.core.seq(vec__47395);
var first__47397 = cljs.core.first(seq__47396);
var seq__47396__$1 = cljs.core.next(seq__47396);
var nn = first__47397;
var first__47397__$1 = cljs.core.first(seq__47396__$1);
var seq__47396__$2 = cljs.core.next(seq__47396__$1);
var np = first__47397__$1;
var nc = seq__47396__$2;
var node = vec__47395;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47400 = nn;
var G__47401 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47400,G__47401) : create_fn.call(null,G__47400,G__47401));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47404 = nn;
var G__47405 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47404,G__47405) : create_fn.call(null,G__47404,G__47405));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47407 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47407,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47407,(1),null);
var seq__47410_48663 = cljs.core.seq(node_children);
var chunk__47411_48664 = null;
var count__47412_48665 = (0);
var i__47413_48666 = (0);
while(true){
if((i__47413_48666 < count__47412_48665)){
var child_struct_48669 = chunk__47411_48664.cljs$core$IIndexed$_nth$arity$2(null,i__47413_48666);
var children_48672 = shadow.dom.dom_node(child_struct_48669);
if(cljs.core.seq_QMARK_(children_48672)){
var seq__47448_48674 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48672));
var chunk__47450_48675 = null;
var count__47451_48676 = (0);
var i__47452_48677 = (0);
while(true){
if((i__47452_48677 < count__47451_48676)){
var child_48681 = chunk__47450_48675.cljs$core$IIndexed$_nth$arity$2(null,i__47452_48677);
if(cljs.core.truth_(child_48681)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48681);


var G__48682 = seq__47448_48674;
var G__48683 = chunk__47450_48675;
var G__48684 = count__47451_48676;
var G__48685 = (i__47452_48677 + (1));
seq__47448_48674 = G__48682;
chunk__47450_48675 = G__48683;
count__47451_48676 = G__48684;
i__47452_48677 = G__48685;
continue;
} else {
var G__48686 = seq__47448_48674;
var G__48687 = chunk__47450_48675;
var G__48688 = count__47451_48676;
var G__48689 = (i__47452_48677 + (1));
seq__47448_48674 = G__48686;
chunk__47450_48675 = G__48687;
count__47451_48676 = G__48688;
i__47452_48677 = G__48689;
continue;
}
} else {
var temp__5735__auto___48690 = cljs.core.seq(seq__47448_48674);
if(temp__5735__auto___48690){
var seq__47448_48691__$1 = temp__5735__auto___48690;
if(cljs.core.chunked_seq_QMARK_(seq__47448_48691__$1)){
var c__4550__auto___48693 = cljs.core.chunk_first(seq__47448_48691__$1);
var G__48695 = cljs.core.chunk_rest(seq__47448_48691__$1);
var G__48696 = c__4550__auto___48693;
var G__48697 = cljs.core.count(c__4550__auto___48693);
var G__48698 = (0);
seq__47448_48674 = G__48695;
chunk__47450_48675 = G__48696;
count__47451_48676 = G__48697;
i__47452_48677 = G__48698;
continue;
} else {
var child_48701 = cljs.core.first(seq__47448_48691__$1);
if(cljs.core.truth_(child_48701)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48701);


var G__48705 = cljs.core.next(seq__47448_48691__$1);
var G__48706 = null;
var G__48707 = (0);
var G__48708 = (0);
seq__47448_48674 = G__48705;
chunk__47450_48675 = G__48706;
count__47451_48676 = G__48707;
i__47452_48677 = G__48708;
continue;
} else {
var G__48709 = cljs.core.next(seq__47448_48691__$1);
var G__48710 = null;
var G__48711 = (0);
var G__48712 = (0);
seq__47448_48674 = G__48709;
chunk__47450_48675 = G__48710;
count__47451_48676 = G__48711;
i__47452_48677 = G__48712;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48672);
}


var G__48714 = seq__47410_48663;
var G__48715 = chunk__47411_48664;
var G__48716 = count__47412_48665;
var G__48717 = (i__47413_48666 + (1));
seq__47410_48663 = G__48714;
chunk__47411_48664 = G__48715;
count__47412_48665 = G__48716;
i__47413_48666 = G__48717;
continue;
} else {
var temp__5735__auto___48718 = cljs.core.seq(seq__47410_48663);
if(temp__5735__auto___48718){
var seq__47410_48719__$1 = temp__5735__auto___48718;
if(cljs.core.chunked_seq_QMARK_(seq__47410_48719__$1)){
var c__4550__auto___48721 = cljs.core.chunk_first(seq__47410_48719__$1);
var G__48722 = cljs.core.chunk_rest(seq__47410_48719__$1);
var G__48723 = c__4550__auto___48721;
var G__48724 = cljs.core.count(c__4550__auto___48721);
var G__48725 = (0);
seq__47410_48663 = G__48722;
chunk__47411_48664 = G__48723;
count__47412_48665 = G__48724;
i__47413_48666 = G__48725;
continue;
} else {
var child_struct_48726 = cljs.core.first(seq__47410_48719__$1);
var children_48727 = shadow.dom.dom_node(child_struct_48726);
if(cljs.core.seq_QMARK_(children_48727)){
var seq__47463_48728 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48727));
var chunk__47465_48729 = null;
var count__47466_48730 = (0);
var i__47467_48731 = (0);
while(true){
if((i__47467_48731 < count__47466_48730)){
var child_48734 = chunk__47465_48729.cljs$core$IIndexed$_nth$arity$2(null,i__47467_48731);
if(cljs.core.truth_(child_48734)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48734);


var G__48736 = seq__47463_48728;
var G__48737 = chunk__47465_48729;
var G__48738 = count__47466_48730;
var G__48739 = (i__47467_48731 + (1));
seq__47463_48728 = G__48736;
chunk__47465_48729 = G__48737;
count__47466_48730 = G__48738;
i__47467_48731 = G__48739;
continue;
} else {
var G__48741 = seq__47463_48728;
var G__48742 = chunk__47465_48729;
var G__48743 = count__47466_48730;
var G__48744 = (i__47467_48731 + (1));
seq__47463_48728 = G__48741;
chunk__47465_48729 = G__48742;
count__47466_48730 = G__48743;
i__47467_48731 = G__48744;
continue;
}
} else {
var temp__5735__auto___48745__$1 = cljs.core.seq(seq__47463_48728);
if(temp__5735__auto___48745__$1){
var seq__47463_48746__$1 = temp__5735__auto___48745__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47463_48746__$1)){
var c__4550__auto___48748 = cljs.core.chunk_first(seq__47463_48746__$1);
var G__48751 = cljs.core.chunk_rest(seq__47463_48746__$1);
var G__48752 = c__4550__auto___48748;
var G__48753 = cljs.core.count(c__4550__auto___48748);
var G__48754 = (0);
seq__47463_48728 = G__48751;
chunk__47465_48729 = G__48752;
count__47466_48730 = G__48753;
i__47467_48731 = G__48754;
continue;
} else {
var child_48756 = cljs.core.first(seq__47463_48746__$1);
if(cljs.core.truth_(child_48756)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48756);


var G__48759 = cljs.core.next(seq__47463_48746__$1);
var G__48760 = null;
var G__48761 = (0);
var G__48762 = (0);
seq__47463_48728 = G__48759;
chunk__47465_48729 = G__48760;
count__47466_48730 = G__48761;
i__47467_48731 = G__48762;
continue;
} else {
var G__48764 = cljs.core.next(seq__47463_48746__$1);
var G__48765 = null;
var G__48766 = (0);
var G__48767 = (0);
seq__47463_48728 = G__48764;
chunk__47465_48729 = G__48765;
count__47466_48730 = G__48766;
i__47467_48731 = G__48767;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48727);
}


var G__48768 = cljs.core.next(seq__47410_48719__$1);
var G__48769 = null;
var G__48770 = (0);
var G__48771 = (0);
seq__47410_48663 = G__48768;
chunk__47411_48664 = G__48769;
count__47412_48665 = G__48770;
i__47413_48666 = G__48771;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47518 = cljs.core.seq(node);
var chunk__47519 = null;
var count__47520 = (0);
var i__47521 = (0);
while(true){
if((i__47521 < count__47520)){
var n = chunk__47519.cljs$core$IIndexed$_nth$arity$2(null,i__47521);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48781 = seq__47518;
var G__48782 = chunk__47519;
var G__48783 = count__47520;
var G__48784 = (i__47521 + (1));
seq__47518 = G__48781;
chunk__47519 = G__48782;
count__47520 = G__48783;
i__47521 = G__48784;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47518);
if(temp__5735__auto__){
var seq__47518__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47518__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47518__$1);
var G__48785 = cljs.core.chunk_rest(seq__47518__$1);
var G__48786 = c__4550__auto__;
var G__48788 = cljs.core.count(c__4550__auto__);
var G__48789 = (0);
seq__47518 = G__48785;
chunk__47519 = G__48786;
count__47520 = G__48788;
i__47521 = G__48789;
continue;
} else {
var n = cljs.core.first(seq__47518__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48795 = cljs.core.next(seq__47518__$1);
var G__48796 = null;
var G__48797 = (0);
var G__48798 = (0);
seq__47518 = G__48795;
chunk__47519 = G__48796;
count__47520 = G__48797;
i__47521 = G__48798;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47534 = arguments.length;
switch (G__47534) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47541 = arguments.length;
switch (G__47541) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47558 = arguments.length;
switch (G__47558) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48821 = arguments.length;
var i__4731__auto___48822 = (0);
while(true){
if((i__4731__auto___48822 < len__4730__auto___48821)){
args__4736__auto__.push((arguments[i__4731__auto___48822]));

var G__48827 = (i__4731__auto___48822 + (1));
i__4731__auto___48822 = G__48827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47595_48829 = cljs.core.seq(nodes);
var chunk__47596_48830 = null;
var count__47597_48831 = (0);
var i__47598_48832 = (0);
while(true){
if((i__47598_48832 < count__47597_48831)){
var node_48833 = chunk__47596_48830.cljs$core$IIndexed$_nth$arity$2(null,i__47598_48832);
fragment.appendChild(shadow.dom._to_dom(node_48833));


var G__48834 = seq__47595_48829;
var G__48835 = chunk__47596_48830;
var G__48836 = count__47597_48831;
var G__48837 = (i__47598_48832 + (1));
seq__47595_48829 = G__48834;
chunk__47596_48830 = G__48835;
count__47597_48831 = G__48836;
i__47598_48832 = G__48837;
continue;
} else {
var temp__5735__auto___48838 = cljs.core.seq(seq__47595_48829);
if(temp__5735__auto___48838){
var seq__47595_48839__$1 = temp__5735__auto___48838;
if(cljs.core.chunked_seq_QMARK_(seq__47595_48839__$1)){
var c__4550__auto___48841 = cljs.core.chunk_first(seq__47595_48839__$1);
var G__48842 = cljs.core.chunk_rest(seq__47595_48839__$1);
var G__48843 = c__4550__auto___48841;
var G__48844 = cljs.core.count(c__4550__auto___48841);
var G__48845 = (0);
seq__47595_48829 = G__48842;
chunk__47596_48830 = G__48843;
count__47597_48831 = G__48844;
i__47598_48832 = G__48845;
continue;
} else {
var node_48846 = cljs.core.first(seq__47595_48839__$1);
fragment.appendChild(shadow.dom._to_dom(node_48846));


var G__48850 = cljs.core.next(seq__47595_48839__$1);
var G__48851 = null;
var G__48852 = (0);
var G__48853 = (0);
seq__47595_48829 = G__48850;
chunk__47596_48830 = G__48851;
count__47597_48831 = G__48852;
i__47598_48832 = G__48853;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47586){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47586));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47617_48857 = cljs.core.seq(scripts);
var chunk__47618_48858 = null;
var count__47619_48859 = (0);
var i__47620_48860 = (0);
while(true){
if((i__47620_48860 < count__47619_48859)){
var vec__47636_48861 = chunk__47618_48858.cljs$core$IIndexed$_nth$arity$2(null,i__47620_48860);
var script_tag_48862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47636_48861,(0),null);
var script_body_48863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47636_48861,(1),null);
eval(script_body_48863);


var G__48866 = seq__47617_48857;
var G__48867 = chunk__47618_48858;
var G__48868 = count__47619_48859;
var G__48869 = (i__47620_48860 + (1));
seq__47617_48857 = G__48866;
chunk__47618_48858 = G__48867;
count__47619_48859 = G__48868;
i__47620_48860 = G__48869;
continue;
} else {
var temp__5735__auto___48870 = cljs.core.seq(seq__47617_48857);
if(temp__5735__auto___48870){
var seq__47617_48875__$1 = temp__5735__auto___48870;
if(cljs.core.chunked_seq_QMARK_(seq__47617_48875__$1)){
var c__4550__auto___48876 = cljs.core.chunk_first(seq__47617_48875__$1);
var G__48877 = cljs.core.chunk_rest(seq__47617_48875__$1);
var G__48878 = c__4550__auto___48876;
var G__48879 = cljs.core.count(c__4550__auto___48876);
var G__48880 = (0);
seq__47617_48857 = G__48877;
chunk__47618_48858 = G__48878;
count__47619_48859 = G__48879;
i__47620_48860 = G__48880;
continue;
} else {
var vec__47644_48882 = cljs.core.first(seq__47617_48875__$1);
var script_tag_48883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47644_48882,(0),null);
var script_body_48884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47644_48882,(1),null);
eval(script_body_48884);


var G__48886 = cljs.core.next(seq__47617_48875__$1);
var G__48887 = null;
var G__48888 = (0);
var G__48889 = (0);
seq__47617_48857 = G__48886;
chunk__47618_48858 = G__48887;
count__47619_48859 = G__48888;
i__47620_48860 = G__48889;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47650){
var vec__47651 = p__47650;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47651,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47651,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47676 = arguments.length;
switch (G__47676) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47704 = cljs.core.seq(style_keys);
var chunk__47705 = null;
var count__47706 = (0);
var i__47707 = (0);
while(true){
if((i__47707 < count__47706)){
var it = chunk__47705.cljs$core$IIndexed$_nth$arity$2(null,i__47707);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48910 = seq__47704;
var G__48911 = chunk__47705;
var G__48912 = count__47706;
var G__48913 = (i__47707 + (1));
seq__47704 = G__48910;
chunk__47705 = G__48911;
count__47706 = G__48912;
i__47707 = G__48913;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47704);
if(temp__5735__auto__){
var seq__47704__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47704__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47704__$1);
var G__48915 = cljs.core.chunk_rest(seq__47704__$1);
var G__48916 = c__4550__auto__;
var G__48917 = cljs.core.count(c__4550__auto__);
var G__48918 = (0);
seq__47704 = G__48915;
chunk__47705 = G__48916;
count__47706 = G__48917;
i__47707 = G__48918;
continue;
} else {
var it = cljs.core.first(seq__47704__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48919 = cljs.core.next(seq__47704__$1);
var G__48920 = null;
var G__48921 = (0);
var G__48922 = (0);
seq__47704 = G__48919;
chunk__47705 = G__48920;
count__47706 = G__48921;
i__47707 = G__48922;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k47723,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__47739 = k47723;
var G__47739__$1 = (((G__47739 instanceof cljs.core.Keyword))?G__47739.fqn:null);
switch (G__47739__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47723,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__47745){
var vec__47746 = p__47745;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47746,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47746,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47722){
var self__ = this;
var G__47722__$1 = this;
return (new cljs.core.RecordIter((0),G__47722__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47724,other47725){
var self__ = this;
var this47724__$1 = this;
return (((!((other47725 == null)))) && ((this47724__$1.constructor === other47725.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47724__$1.x,other47725.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47724__$1.y,other47725.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47724__$1.__extmap,other47725.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__47722){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__47776 = cljs.core.keyword_identical_QMARK_;
var expr__47777 = k__4382__auto__;
if(cljs.core.truth_((pred__47776.cljs$core$IFn$_invoke$arity$2 ? pred__47776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47777) : pred__47776.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47777)))){
return (new shadow.dom.Coordinate(G__47722,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47776.cljs$core$IFn$_invoke$arity$2 ? pred__47776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47777) : pred__47776.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47777)))){
return (new shadow.dom.Coordinate(self__.x,G__47722,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__47722),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__47722){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47722,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47729){
var extmap__4413__auto__ = (function (){var G__47798 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47729,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47729)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47798);
} else {
return G__47798;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47729),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47729),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k47830,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__47859 = k47830;
var G__47859__$1 = (((G__47859 instanceof cljs.core.Keyword))?G__47859.fqn:null);
switch (G__47859__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47830,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__47866){
var vec__47870 = p__47866;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47870,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47870,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47829){
var self__ = this;
var G__47829__$1 = this;
return (new cljs.core.RecordIter((0),G__47829__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47831,other47832){
var self__ = this;
var this47831__$1 = this;
return (((!((other47832 == null)))) && ((this47831__$1.constructor === other47832.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47831__$1.w,other47832.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47831__$1.h,other47832.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47831__$1.__extmap,other47832.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__47829){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__47928 = cljs.core.keyword_identical_QMARK_;
var expr__47929 = k__4382__auto__;
if(cljs.core.truth_((pred__47928.cljs$core$IFn$_invoke$arity$2 ? pred__47928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47929) : pred__47928.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47929)))){
return (new shadow.dom.Size(G__47829,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47928.cljs$core$IFn$_invoke$arity$2 ? pred__47928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47929) : pred__47928.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47929)))){
return (new shadow.dom.Size(self__.w,G__47829,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__47829),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__47829){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47829,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47838){
var extmap__4413__auto__ = (function (){var G__47966 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47838,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47838)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47966);
} else {
return G__47966;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47838),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47838),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__49042 = (i + (1));
var G__49043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49042;
ret = G__49043;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48053){
var vec__48055 = p__48053;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48055,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48073 = arguments.length;
switch (G__48073) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49057 = ps;
var G__49058 = (i + (1));
el__$1 = G__49057;
i = G__49058;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48150 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48157_49072 = cljs.core.seq(props);
var chunk__48158_49073 = null;
var count__48159_49074 = (0);
var i__48160_49075 = (0);
while(true){
if((i__48160_49075 < count__48159_49074)){
var vec__48177_49077 = chunk__48158_49073.cljs$core$IIndexed$_nth$arity$2(null,i__48160_49075);
var k_49079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48177_49077,(0),null);
var v_49080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48177_49077,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49079);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49079),v_49080);


var G__49085 = seq__48157_49072;
var G__49086 = chunk__48158_49073;
var G__49087 = count__48159_49074;
var G__49088 = (i__48160_49075 + (1));
seq__48157_49072 = G__49085;
chunk__48158_49073 = G__49086;
count__48159_49074 = G__49087;
i__48160_49075 = G__49088;
continue;
} else {
var temp__5735__auto___49090 = cljs.core.seq(seq__48157_49072);
if(temp__5735__auto___49090){
var seq__48157_49091__$1 = temp__5735__auto___49090;
if(cljs.core.chunked_seq_QMARK_(seq__48157_49091__$1)){
var c__4550__auto___49092 = cljs.core.chunk_first(seq__48157_49091__$1);
var G__49093 = cljs.core.chunk_rest(seq__48157_49091__$1);
var G__49094 = c__4550__auto___49092;
var G__49095 = cljs.core.count(c__4550__auto___49092);
var G__49096 = (0);
seq__48157_49072 = G__49093;
chunk__48158_49073 = G__49094;
count__48159_49074 = G__49095;
i__48160_49075 = G__49096;
continue;
} else {
var vec__48187_49097 = cljs.core.first(seq__48157_49091__$1);
var k_49098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48187_49097,(0),null);
var v_49099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48187_49097,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49098);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49098),v_49099);


var G__49102 = cljs.core.next(seq__48157_49091__$1);
var G__49103 = null;
var G__49104 = (0);
var G__49105 = (0);
seq__48157_49072 = G__49102;
chunk__48158_49073 = G__49103;
count__48159_49074 = G__49104;
i__48160_49075 = G__49105;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48214 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48214,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48214,(1),null);
var seq__48218_49112 = cljs.core.seq(node_children);
var chunk__48220_49113 = null;
var count__48221_49114 = (0);
var i__48222_49115 = (0);
while(true){
if((i__48222_49115 < count__48221_49114)){
var child_struct_49116 = chunk__48220_49113.cljs$core$IIndexed$_nth$arity$2(null,i__48222_49115);
if((!((child_struct_49116 == null)))){
if(typeof child_struct_49116 === 'string'){
var text_49120 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49120),child_struct_49116].join(''));
} else {
var children_49121 = shadow.dom.svg_node(child_struct_49116);
if(cljs.core.seq_QMARK_(children_49121)){
var seq__48319_49122 = cljs.core.seq(children_49121);
var chunk__48321_49123 = null;
var count__48322_49124 = (0);
var i__48323_49125 = (0);
while(true){
if((i__48323_49125 < count__48322_49124)){
var child_49126 = chunk__48321_49123.cljs$core$IIndexed$_nth$arity$2(null,i__48323_49125);
if(cljs.core.truth_(child_49126)){
node.appendChild(child_49126);


var G__49127 = seq__48319_49122;
var G__49128 = chunk__48321_49123;
var G__49129 = count__48322_49124;
var G__49130 = (i__48323_49125 + (1));
seq__48319_49122 = G__49127;
chunk__48321_49123 = G__49128;
count__48322_49124 = G__49129;
i__48323_49125 = G__49130;
continue;
} else {
var G__49131 = seq__48319_49122;
var G__49132 = chunk__48321_49123;
var G__49133 = count__48322_49124;
var G__49134 = (i__48323_49125 + (1));
seq__48319_49122 = G__49131;
chunk__48321_49123 = G__49132;
count__48322_49124 = G__49133;
i__48323_49125 = G__49134;
continue;
}
} else {
var temp__5735__auto___49135 = cljs.core.seq(seq__48319_49122);
if(temp__5735__auto___49135){
var seq__48319_49136__$1 = temp__5735__auto___49135;
if(cljs.core.chunked_seq_QMARK_(seq__48319_49136__$1)){
var c__4550__auto___49137 = cljs.core.chunk_first(seq__48319_49136__$1);
var G__49138 = cljs.core.chunk_rest(seq__48319_49136__$1);
var G__49139 = c__4550__auto___49137;
var G__49140 = cljs.core.count(c__4550__auto___49137);
var G__49141 = (0);
seq__48319_49122 = G__49138;
chunk__48321_49123 = G__49139;
count__48322_49124 = G__49140;
i__48323_49125 = G__49141;
continue;
} else {
var child_49143 = cljs.core.first(seq__48319_49136__$1);
if(cljs.core.truth_(child_49143)){
node.appendChild(child_49143);


var G__49144 = cljs.core.next(seq__48319_49136__$1);
var G__49145 = null;
var G__49146 = (0);
var G__49147 = (0);
seq__48319_49122 = G__49144;
chunk__48321_49123 = G__49145;
count__48322_49124 = G__49146;
i__48323_49125 = G__49147;
continue;
} else {
var G__49148 = cljs.core.next(seq__48319_49136__$1);
var G__49149 = null;
var G__49150 = (0);
var G__49151 = (0);
seq__48319_49122 = G__49148;
chunk__48321_49123 = G__49149;
count__48322_49124 = G__49150;
i__48323_49125 = G__49151;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49121);
}
}


var G__49152 = seq__48218_49112;
var G__49153 = chunk__48220_49113;
var G__49154 = count__48221_49114;
var G__49155 = (i__48222_49115 + (1));
seq__48218_49112 = G__49152;
chunk__48220_49113 = G__49153;
count__48221_49114 = G__49154;
i__48222_49115 = G__49155;
continue;
} else {
var G__49157 = seq__48218_49112;
var G__49158 = chunk__48220_49113;
var G__49159 = count__48221_49114;
var G__49160 = (i__48222_49115 + (1));
seq__48218_49112 = G__49157;
chunk__48220_49113 = G__49158;
count__48221_49114 = G__49159;
i__48222_49115 = G__49160;
continue;
}
} else {
var temp__5735__auto___49164 = cljs.core.seq(seq__48218_49112);
if(temp__5735__auto___49164){
var seq__48218_49165__$1 = temp__5735__auto___49164;
if(cljs.core.chunked_seq_QMARK_(seq__48218_49165__$1)){
var c__4550__auto___49166 = cljs.core.chunk_first(seq__48218_49165__$1);
var G__49167 = cljs.core.chunk_rest(seq__48218_49165__$1);
var G__49168 = c__4550__auto___49166;
var G__49169 = cljs.core.count(c__4550__auto___49166);
var G__49170 = (0);
seq__48218_49112 = G__49167;
chunk__48220_49113 = G__49168;
count__48221_49114 = G__49169;
i__48222_49115 = G__49170;
continue;
} else {
var child_struct_49172 = cljs.core.first(seq__48218_49165__$1);
if((!((child_struct_49172 == null)))){
if(typeof child_struct_49172 === 'string'){
var text_49173 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49173),child_struct_49172].join(''));
} else {
var children_49176 = shadow.dom.svg_node(child_struct_49172);
if(cljs.core.seq_QMARK_(children_49176)){
var seq__48350_49178 = cljs.core.seq(children_49176);
var chunk__48352_49179 = null;
var count__48353_49180 = (0);
var i__48354_49181 = (0);
while(true){
if((i__48354_49181 < count__48353_49180)){
var child_49182 = chunk__48352_49179.cljs$core$IIndexed$_nth$arity$2(null,i__48354_49181);
if(cljs.core.truth_(child_49182)){
node.appendChild(child_49182);


var G__49183 = seq__48350_49178;
var G__49184 = chunk__48352_49179;
var G__49185 = count__48353_49180;
var G__49186 = (i__48354_49181 + (1));
seq__48350_49178 = G__49183;
chunk__48352_49179 = G__49184;
count__48353_49180 = G__49185;
i__48354_49181 = G__49186;
continue;
} else {
var G__49187 = seq__48350_49178;
var G__49188 = chunk__48352_49179;
var G__49189 = count__48353_49180;
var G__49190 = (i__48354_49181 + (1));
seq__48350_49178 = G__49187;
chunk__48352_49179 = G__49188;
count__48353_49180 = G__49189;
i__48354_49181 = G__49190;
continue;
}
} else {
var temp__5735__auto___49192__$1 = cljs.core.seq(seq__48350_49178);
if(temp__5735__auto___49192__$1){
var seq__48350_49193__$1 = temp__5735__auto___49192__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48350_49193__$1)){
var c__4550__auto___49194 = cljs.core.chunk_first(seq__48350_49193__$1);
var G__49195 = cljs.core.chunk_rest(seq__48350_49193__$1);
var G__49196 = c__4550__auto___49194;
var G__49197 = cljs.core.count(c__4550__auto___49194);
var G__49198 = (0);
seq__48350_49178 = G__49195;
chunk__48352_49179 = G__49196;
count__48353_49180 = G__49197;
i__48354_49181 = G__49198;
continue;
} else {
var child_49200 = cljs.core.first(seq__48350_49193__$1);
if(cljs.core.truth_(child_49200)){
node.appendChild(child_49200);


var G__49201 = cljs.core.next(seq__48350_49193__$1);
var G__49202 = null;
var G__49203 = (0);
var G__49204 = (0);
seq__48350_49178 = G__49201;
chunk__48352_49179 = G__49202;
count__48353_49180 = G__49203;
i__48354_49181 = G__49204;
continue;
} else {
var G__49206 = cljs.core.next(seq__48350_49193__$1);
var G__49207 = null;
var G__49208 = (0);
var G__49209 = (0);
seq__48350_49178 = G__49206;
chunk__48352_49179 = G__49207;
count__48353_49180 = G__49208;
i__48354_49181 = G__49209;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49176);
}
}


var G__49210 = cljs.core.next(seq__48218_49165__$1);
var G__49211 = null;
var G__49212 = (0);
var G__49213 = (0);
seq__48218_49112 = G__49210;
chunk__48220_49113 = G__49211;
count__48221_49114 = G__49212;
i__48222_49115 = G__49213;
continue;
} else {
var G__49216 = cljs.core.next(seq__48218_49165__$1);
var G__49217 = null;
var G__49218 = (0);
var G__49219 = (0);
seq__48218_49112 = G__49216;
chunk__48220_49113 = G__49217;
count__48221_49114 = G__49218;
i__48222_49115 = G__49219;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49228 = arguments.length;
var i__4731__auto___49229 = (0);
while(true){
if((i__4731__auto___49229 < len__4730__auto___49228)){
args__4736__auto__.push((arguments[i__4731__auto___49229]));

var G__49230 = (i__4731__auto___49229 + (1));
i__4731__auto___49229 = G__49230;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48384){
var G__48385 = cljs.core.first(seq48384);
var seq48384__$1 = cljs.core.next(seq48384);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48385,seq48384__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48403 = arguments.length;
switch (G__48403) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__44129__auto___49241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_48435){
var state_val_48436 = (state_48435[(1)]);
if((state_val_48436 === (1))){
var state_48435__$1 = state_48435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48435__$1,(2),once_or_cleanup);
} else {
if((state_val_48436 === (2))){
var inst_48432 = (state_48435[(2)]);
var inst_48433 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48435__$1 = (function (){var statearr_48443 = state_48435;
(statearr_48443[(7)] = inst_48432);

return statearr_48443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48435__$1,inst_48433);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43982__auto__ = null;
var shadow$dom$state_machine__43982__auto____0 = (function (){
var statearr_48452 = [null,null,null,null,null,null,null,null];
(statearr_48452[(0)] = shadow$dom$state_machine__43982__auto__);

(statearr_48452[(1)] = (1));

return statearr_48452;
});
var shadow$dom$state_machine__43982__auto____1 = (function (state_48435){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_48435);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e48456){var ex__43985__auto__ = e48456;
var statearr_48457_49246 = state_48435;
(statearr_48457_49246[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_48435[(4)]))){
var statearr_48459_49247 = state_48435;
(statearr_48459_49247[(1)] = cljs.core.first((state_48435[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49248 = state_48435;
state_48435 = G__49248;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
shadow$dom$state_machine__43982__auto__ = function(state_48435){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43982__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43982__auto____1.call(this,state_48435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43982__auto____0;
shadow$dom$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43982__auto____1;
return shadow$dom$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_48465 = f__44130__auto__();
(statearr_48465[(6)] = c__44129__auto___49241);

return statearr_48465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
