goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__43793){
var map__43794 = p__43793;
var map__43794__$1 = (((((!((map__43794 == null))))?(((((map__43794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43794):map__43794);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43794__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43794__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43794__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43794__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4120__auto__ = child_of;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__43798_43831 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__43799_43832 = null;
var count__43800_43833 = (0);
var i__43801_43834 = (0);
while(true){
if((i__43801_43834 < count__43800_43833)){
var vec__43814_43838 = chunk__43799_43832.cljs$core$IIndexed$_nth$arity$2(null,i__43801_43834);
var k_43839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43814_43838,(0),null);
var cb_43840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43814_43838,(1),null);
try{var G__43818_43842 = cljs.core.deref(re_frame.trace.traces);
(cb_43840.cljs$core$IFn$_invoke$arity$1 ? cb_43840.cljs$core$IFn$_invoke$arity$1(G__43818_43842) : cb_43840.call(null,G__43818_43842));
}catch (e43817){var e_43843 = e43817;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43839,"while storing",cljs.core.deref(re_frame.trace.traces),e_43843], 0));
}

var G__43844 = seq__43798_43831;
var G__43845 = chunk__43799_43832;
var G__43846 = count__43800_43833;
var G__43847 = (i__43801_43834 + (1));
seq__43798_43831 = G__43844;
chunk__43799_43832 = G__43845;
count__43800_43833 = G__43846;
i__43801_43834 = G__43847;
continue;
} else {
var temp__5735__auto___43848 = cljs.core.seq(seq__43798_43831);
if(temp__5735__auto___43848){
var seq__43798_43852__$1 = temp__5735__auto___43848;
if(cljs.core.chunked_seq_QMARK_(seq__43798_43852__$1)){
var c__4550__auto___43854 = cljs.core.chunk_first(seq__43798_43852__$1);
var G__43855 = cljs.core.chunk_rest(seq__43798_43852__$1);
var G__43856 = c__4550__auto___43854;
var G__43857 = cljs.core.count(c__4550__auto___43854);
var G__43858 = (0);
seq__43798_43831 = G__43855;
chunk__43799_43832 = G__43856;
count__43800_43833 = G__43857;
i__43801_43834 = G__43858;
continue;
} else {
var vec__43819_43861 = cljs.core.first(seq__43798_43852__$1);
var k_43862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43819_43861,(0),null);
var cb_43863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43819_43861,(1),null);
try{var G__43823_43867 = cljs.core.deref(re_frame.trace.traces);
(cb_43863.cljs$core$IFn$_invoke$arity$1 ? cb_43863.cljs$core$IFn$_invoke$arity$1(G__43823_43867) : cb_43863.call(null,G__43823_43867));
}catch (e43822){var e_43868 = e43822;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43862,"while storing",cljs.core.deref(re_frame.trace.traces),e_43868], 0));
}

var G__43869 = cljs.core.next(seq__43798_43852__$1);
var G__43870 = null;
var G__43871 = (0);
var G__43872 = (0);
seq__43798_43831 = G__43869;
chunk__43799_43832 = G__43870;
count__43800_43833 = G__43871;
i__43801_43834 = G__43872;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
