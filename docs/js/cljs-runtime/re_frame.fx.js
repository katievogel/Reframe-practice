goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__44145 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44146 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44146);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___44238 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___44238)){
var new_db_44239 = temp__5735__auto___44238;
var fexpr__44149_44240 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__44149_44240.cljs$core$IFn$_invoke$arity$1 ? fexpr__44149_44240.cljs$core$IFn$_invoke$arity$1(new_db_44239) : fexpr__44149_44240.call(null,new_db_44239));
} else {
}

var seq__44150 = cljs.core.seq(effects_without_db);
var chunk__44151 = null;
var count__44152 = (0);
var i__44153 = (0);
while(true){
if((i__44153 < count__44152)){
var vec__44163 = chunk__44151.cljs$core$IIndexed$_nth$arity$2(null,i__44153);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44163,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44163,(1),null);
var temp__5733__auto___44241 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44241)){
var effect_fn_44242 = temp__5733__auto___44241;
(effect_fn_44242.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44242.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44242.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44243 = seq__44150;
var G__44244 = chunk__44151;
var G__44245 = count__44152;
var G__44246 = (i__44153 + (1));
seq__44150 = G__44243;
chunk__44151 = G__44244;
count__44152 = G__44245;
i__44153 = G__44246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44150);
if(temp__5735__auto__){
var seq__44150__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44150__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44150__$1);
var G__44247 = cljs.core.chunk_rest(seq__44150__$1);
var G__44248 = c__4550__auto__;
var G__44249 = cljs.core.count(c__4550__auto__);
var G__44250 = (0);
seq__44150 = G__44247;
chunk__44151 = G__44248;
count__44152 = G__44249;
i__44153 = G__44250;
continue;
} else {
var vec__44167 = cljs.core.first(seq__44150__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44167,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44167,(1),null);
var temp__5733__auto___44251 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44251)){
var effect_fn_44252 = temp__5733__auto___44251;
(effect_fn_44252.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44252.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44252.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44253 = cljs.core.next(seq__44150__$1);
var G__44254 = null;
var G__44255 = (0);
var G__44256 = (0);
seq__44150 = G__44253;
chunk__44151 = G__44254;
count__44152 = G__44255;
i__44153 = G__44256;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__43771__auto___44257 = re_frame.interop.now();
var duration__43772__auto___44258 = (end__43771__auto___44257 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43772__auto___44258,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__43771__auto___44257);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44145);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___44259 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___44259)){
var new_db_44260 = temp__5735__auto___44259;
var fexpr__44171_44261 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__44171_44261.cljs$core$IFn$_invoke$arity$1 ? fexpr__44171_44261.cljs$core$IFn$_invoke$arity$1(new_db_44260) : fexpr__44171_44261.call(null,new_db_44260));
} else {
}

var seq__44172 = cljs.core.seq(effects_without_db);
var chunk__44173 = null;
var count__44174 = (0);
var i__44175 = (0);
while(true){
if((i__44175 < count__44174)){
var vec__44184 = chunk__44173.cljs$core$IIndexed$_nth$arity$2(null,i__44175);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44184,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44184,(1),null);
var temp__5733__auto___44262 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44262)){
var effect_fn_44263 = temp__5733__auto___44262;
(effect_fn_44263.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44263.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44263.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44264 = seq__44172;
var G__44265 = chunk__44173;
var G__44266 = count__44174;
var G__44267 = (i__44175 + (1));
seq__44172 = G__44264;
chunk__44173 = G__44265;
count__44174 = G__44266;
i__44175 = G__44267;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44172);
if(temp__5735__auto__){
var seq__44172__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44172__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44172__$1);
var G__44268 = cljs.core.chunk_rest(seq__44172__$1);
var G__44269 = c__4550__auto__;
var G__44270 = cljs.core.count(c__4550__auto__);
var G__44271 = (0);
seq__44172 = G__44268;
chunk__44173 = G__44269;
count__44174 = G__44270;
i__44175 = G__44271;
continue;
} else {
var vec__44187 = cljs.core.first(seq__44172__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44187,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44187,(1),null);
var temp__5733__auto___44273 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44273)){
var effect_fn_44274 = temp__5733__auto___44273;
(effect_fn_44274.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44274.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44274.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44276 = cljs.core.next(seq__44172__$1);
var G__44277 = null;
var G__44278 = (0);
var G__44279 = (0);
seq__44172 = G__44276;
chunk__44173 = G__44277;
count__44174 = G__44278;
i__44175 = G__44279;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__44191){
var map__44192 = p__44191;
var map__44192__$1 = (((((!((map__44192 == null))))?(((((map__44192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44192):map__44192);
var effect = map__44192__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44192__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44192__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__44194 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44195 = null;
var count__44196 = (0);
var i__44197 = (0);
while(true){
if((i__44197 < count__44196)){
var effect = chunk__44195.cljs$core$IIndexed$_nth$arity$2(null,i__44197);
re_frame.fx.dispatch_later(effect);


var G__44280 = seq__44194;
var G__44281 = chunk__44195;
var G__44282 = count__44196;
var G__44283 = (i__44197 + (1));
seq__44194 = G__44280;
chunk__44195 = G__44281;
count__44196 = G__44282;
i__44197 = G__44283;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44194);
if(temp__5735__auto__){
var seq__44194__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44194__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44194__$1);
var G__44284 = cljs.core.chunk_rest(seq__44194__$1);
var G__44285 = c__4550__auto__;
var G__44286 = cljs.core.count(c__4550__auto__);
var G__44287 = (0);
seq__44194 = G__44284;
chunk__44195 = G__44285;
count__44196 = G__44286;
i__44197 = G__44287;
continue;
} else {
var effect = cljs.core.first(seq__44194__$1);
re_frame.fx.dispatch_later(effect);


var G__44289 = cljs.core.next(seq__44194__$1);
var G__44290 = null;
var G__44291 = (0);
var G__44292 = (0);
seq__44194 = G__44289;
chunk__44195 = G__44290;
count__44196 = G__44291;
i__44197 = G__44292;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__44199 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__44200 = null;
var count__44201 = (0);
var i__44202 = (0);
while(true){
if((i__44202 < count__44201)){
var vec__44212 = chunk__44200.cljs$core$IIndexed$_nth$arity$2(null,i__44202);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44212,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44212,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___44294 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44294)){
var effect_fn_44295 = temp__5733__auto___44294;
(effect_fn_44295.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44295.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44295.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44296 = seq__44199;
var G__44297 = chunk__44200;
var G__44298 = count__44201;
var G__44299 = (i__44202 + (1));
seq__44199 = G__44296;
chunk__44200 = G__44297;
count__44201 = G__44298;
i__44202 = G__44299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44199);
if(temp__5735__auto__){
var seq__44199__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44199__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44199__$1);
var G__44300 = cljs.core.chunk_rest(seq__44199__$1);
var G__44301 = c__4550__auto__;
var G__44302 = cljs.core.count(c__4550__auto__);
var G__44303 = (0);
seq__44199 = G__44300;
chunk__44200 = G__44301;
count__44201 = G__44302;
i__44202 = G__44303;
continue;
} else {
var vec__44215 = cljs.core.first(seq__44199__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44215,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44215,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___44306 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44306)){
var effect_fn_44307 = temp__5733__auto___44306;
(effect_fn_44307.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44307.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44307.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44308 = cljs.core.next(seq__44199__$1);
var G__44309 = null;
var G__44310 = (0);
var G__44311 = (0);
seq__44199 = G__44308;
chunk__44200 = G__44309;
count__44201 = G__44310;
i__44202 = G__44311;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__44226 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44227 = null;
var count__44228 = (0);
var i__44229 = (0);
while(true){
if((i__44229 < count__44228)){
var event = chunk__44227.cljs$core$IIndexed$_nth$arity$2(null,i__44229);
re_frame.router.dispatch(event);


var G__44312 = seq__44226;
var G__44313 = chunk__44227;
var G__44314 = count__44228;
var G__44315 = (i__44229 + (1));
seq__44226 = G__44312;
chunk__44227 = G__44313;
count__44228 = G__44314;
i__44229 = G__44315;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44226);
if(temp__5735__auto__){
var seq__44226__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44226__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44226__$1);
var G__44316 = cljs.core.chunk_rest(seq__44226__$1);
var G__44317 = c__4550__auto__;
var G__44318 = cljs.core.count(c__4550__auto__);
var G__44319 = (0);
seq__44226 = G__44316;
chunk__44227 = G__44317;
count__44228 = G__44318;
i__44229 = G__44319;
continue;
} else {
var event = cljs.core.first(seq__44226__$1);
re_frame.router.dispatch(event);


var G__44321 = cljs.core.next(seq__44226__$1);
var G__44322 = null;
var G__44323 = (0);
var G__44324 = (0);
seq__44226 = G__44321;
chunk__44227 = G__44322;
count__44228 = G__44323;
i__44229 = G__44324;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__44234 = cljs.core.seq(value);
var chunk__44235 = null;
var count__44236 = (0);
var i__44237 = (0);
while(true){
if((i__44237 < count__44236)){
var event = chunk__44235.cljs$core$IIndexed$_nth$arity$2(null,i__44237);
clear_event(event);


var G__44326 = seq__44234;
var G__44327 = chunk__44235;
var G__44328 = count__44236;
var G__44329 = (i__44237 + (1));
seq__44234 = G__44326;
chunk__44235 = G__44327;
count__44236 = G__44328;
i__44237 = G__44329;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44234);
if(temp__5735__auto__){
var seq__44234__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44234__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44234__$1);
var G__44330 = cljs.core.chunk_rest(seq__44234__$1);
var G__44331 = c__4550__auto__;
var G__44332 = cljs.core.count(c__4550__auto__);
var G__44333 = (0);
seq__44234 = G__44330;
chunk__44235 = G__44331;
count__44236 = G__44332;
i__44237 = G__44333;
continue;
} else {
var event = cljs.core.first(seq__44234__$1);
clear_event(event);


var G__44334 = cljs.core.next(seq__44234__$1);
var G__44335 = null;
var G__44336 = (0);
var G__44337 = (0);
seq__44234 = G__44334;
chunk__44235 = G__44335;
count__44236 = G__44336;
i__44237 = G__44337;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
