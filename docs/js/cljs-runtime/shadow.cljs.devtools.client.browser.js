goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51154 = arguments.length;
var i__4731__auto___51155 = (0);
while(true){
if((i__4731__auto___51155 < len__4730__auto___51154)){
args__4736__auto__.push((arguments[i__4731__auto___51155]));

var G__51156 = (i__4731__auto___51155 + (1));
i__4731__auto___51155 = G__51156;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51002){
var G__51003 = cljs.core.first(seq51002);
var seq51002__$1 = cljs.core.next(seq51002);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51003,seq51002__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51004 = cljs.core.seq(sources);
var chunk__51005 = null;
var count__51006 = (0);
var i__51007 = (0);
while(true){
if((i__51007 < count__51006)){
var map__51016 = chunk__51005.cljs$core$IIndexed$_nth$arity$2(null,i__51007);
var map__51016__$1 = (((((!((map__51016 == null))))?(((((map__51016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51016):map__51016);
var src = map__51016__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51016__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51016__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51016__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51016__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51018){var e_51157 = e51018;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51157);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51157.message)].join('')));
}

var G__51158 = seq__51004;
var G__51159 = chunk__51005;
var G__51160 = count__51006;
var G__51161 = (i__51007 + (1));
seq__51004 = G__51158;
chunk__51005 = G__51159;
count__51006 = G__51160;
i__51007 = G__51161;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51004);
if(temp__5735__auto__){
var seq__51004__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51004__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51004__$1);
var G__51162 = cljs.core.chunk_rest(seq__51004__$1);
var G__51163 = c__4550__auto__;
var G__51164 = cljs.core.count(c__4550__auto__);
var G__51165 = (0);
seq__51004 = G__51162;
chunk__51005 = G__51163;
count__51006 = G__51164;
i__51007 = G__51165;
continue;
} else {
var map__51022 = cljs.core.first(seq__51004__$1);
var map__51022__$1 = (((((!((map__51022 == null))))?(((((map__51022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51022):map__51022);
var src = map__51022__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51024){var e_51166 = e51024;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51166);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51166.message)].join('')));
}

var G__51167 = cljs.core.next(seq__51004__$1);
var G__51168 = null;
var G__51169 = (0);
var G__51170 = (0);
seq__51004 = G__51167;
chunk__51005 = G__51168;
count__51006 = G__51169;
i__51007 = G__51170;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51027 = cljs.core.seq(js_requires);
var chunk__51028 = null;
var count__51029 = (0);
var i__51030 = (0);
while(true){
if((i__51030 < count__51029)){
var js_ns = chunk__51028.cljs$core$IIndexed$_nth$arity$2(null,i__51030);
var require_str_51171 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51171);


var G__51172 = seq__51027;
var G__51173 = chunk__51028;
var G__51174 = count__51029;
var G__51175 = (i__51030 + (1));
seq__51027 = G__51172;
chunk__51028 = G__51173;
count__51029 = G__51174;
i__51030 = G__51175;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51027);
if(temp__5735__auto__){
var seq__51027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51027__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51027__$1);
var G__51176 = cljs.core.chunk_rest(seq__51027__$1);
var G__51177 = c__4550__auto__;
var G__51178 = cljs.core.count(c__4550__auto__);
var G__51179 = (0);
seq__51027 = G__51176;
chunk__51028 = G__51177;
count__51029 = G__51178;
i__51030 = G__51179;
continue;
} else {
var js_ns = cljs.core.first(seq__51027__$1);
var require_str_51180 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51180);


var G__51181 = cljs.core.next(seq__51027__$1);
var G__51182 = null;
var G__51183 = (0);
var G__51184 = (0);
seq__51027 = G__51181;
chunk__51028 = G__51182;
count__51029 = G__51183;
i__51030 = G__51184;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51032){
var map__51033 = p__51032;
var map__51033__$1 = (((((!((map__51033 == null))))?(((((map__51033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51033):map__51033);
var msg = map__51033__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51033__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51033__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51035(s__51036){
return (new cljs.core.LazySeq(null,(function (){
var s__51036__$1 = s__51036;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51036__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__51041 = cljs.core.first(xs__6292__auto__);
var map__51041__$1 = (((((!((map__51041 == null))))?(((((map__51041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51041):map__51041);
var src = map__51041__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51041__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51041__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__51036__$1,map__51041,map__51041__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51033,map__51033__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51035_$_iter__51037(s__51038){
return (new cljs.core.LazySeq(null,((function (s__51036__$1,map__51041,map__51041__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51033,map__51033__$1,msg,info,reload_info){
return (function (){
var s__51038__$1 = s__51038;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51038__$1);
if(temp__5735__auto____$1){
var s__51038__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51038__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51038__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51040 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51039 = (0);
while(true){
if((i__51039 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__51039);
cljs.core.chunk_append(b__51040,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51185 = (i__51039 + (1));
i__51039 = G__51185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51040),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51035_$_iter__51037(cljs.core.chunk_rest(s__51038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51040),null);
}
} else {
var warning = cljs.core.first(s__51038__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51035_$_iter__51037(cljs.core.rest(s__51038__$2)));
}
} else {
return null;
}
break;
}
});})(s__51036__$1,map__51041,map__51041__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51033,map__51033__$1,msg,info,reload_info))
,null,null));
});})(s__51036__$1,map__51041,map__51041__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51033,map__51033__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51035(cljs.core.rest(s__51036__$1)));
} else {
var G__51186 = cljs.core.rest(s__51036__$1);
s__51036__$1 = G__51186;
continue;
}
} else {
var G__51187 = cljs.core.rest(s__51036__$1);
s__51036__$1 = G__51187;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51043_51188 = cljs.core.seq(warnings);
var chunk__51044_51189 = null;
var count__51045_51190 = (0);
var i__51046_51191 = (0);
while(true){
if((i__51046_51191 < count__51045_51190)){
var map__51053_51192 = chunk__51044_51189.cljs$core$IIndexed$_nth$arity$2(null,i__51046_51191);
var map__51053_51193__$1 = (((((!((map__51053_51192 == null))))?(((((map__51053_51192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51053_51192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51053_51192):map__51053_51192);
var w_51194 = map__51053_51193__$1;
var msg_51195__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51053_51193__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51053_51193__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51053_51193__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51053_51193__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51198)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51196),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51197),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51195__$1)].join(''));


var G__51199 = seq__51043_51188;
var G__51200 = chunk__51044_51189;
var G__51201 = count__51045_51190;
var G__51202 = (i__51046_51191 + (1));
seq__51043_51188 = G__51199;
chunk__51044_51189 = G__51200;
count__51045_51190 = G__51201;
i__51046_51191 = G__51202;
continue;
} else {
var temp__5735__auto___51203 = cljs.core.seq(seq__51043_51188);
if(temp__5735__auto___51203){
var seq__51043_51204__$1 = temp__5735__auto___51203;
if(cljs.core.chunked_seq_QMARK_(seq__51043_51204__$1)){
var c__4550__auto___51205 = cljs.core.chunk_first(seq__51043_51204__$1);
var G__51206 = cljs.core.chunk_rest(seq__51043_51204__$1);
var G__51207 = c__4550__auto___51205;
var G__51208 = cljs.core.count(c__4550__auto___51205);
var G__51209 = (0);
seq__51043_51188 = G__51206;
chunk__51044_51189 = G__51207;
count__51045_51190 = G__51208;
i__51046_51191 = G__51209;
continue;
} else {
var map__51055_51210 = cljs.core.first(seq__51043_51204__$1);
var map__51055_51211__$1 = (((((!((map__51055_51210 == null))))?(((((map__51055_51210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51055_51210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51055_51210):map__51055_51210);
var w_51212 = map__51055_51211__$1;
var msg_51213__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51055_51211__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51055_51211__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51055_51211__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51055_51211__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51216)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51214),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51215),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51213__$1)].join(''));


var G__51217 = cljs.core.next(seq__51043_51204__$1);
var G__51218 = null;
var G__51219 = (0);
var G__51220 = (0);
seq__51043_51188 = G__51217;
chunk__51044_51189 = G__51218;
count__51045_51190 = G__51219;
i__51046_51191 = G__51220;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51031_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51031_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51057){
var map__51058 = p__51057;
var map__51058__$1 = (((((!((map__51058 == null))))?(((((map__51058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51058):map__51058);
var msg = map__51058__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51060 = cljs.core.seq(updates);
var chunk__51062 = null;
var count__51063 = (0);
var i__51064 = (0);
while(true){
if((i__51064 < count__51063)){
var path = chunk__51062.cljs$core$IIndexed$_nth$arity$2(null,i__51064);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51094_51221 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51098_51222 = null;
var count__51099_51223 = (0);
var i__51100_51224 = (0);
while(true){
if((i__51100_51224 < count__51099_51223)){
var node_51225 = chunk__51098_51222.cljs$core$IIndexed$_nth$arity$2(null,i__51100_51224);
if(cljs.core.not(node_51225.shadow$old)){
var path_match_51226 = shadow.cljs.devtools.client.browser.match_paths(node_51225.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51226)){
var new_link_51227 = (function (){var G__51106 = node_51225.cloneNode(true);
G__51106.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51226),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51106;
})();
(node_51225.shadow$old = true);

(new_link_51227.onload = ((function (seq__51094_51221,chunk__51098_51222,count__51099_51223,i__51100_51224,seq__51060,chunk__51062,count__51063,i__51064,new_link_51227,path_match_51226,node_51225,path,map__51058,map__51058__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51225);
});})(seq__51094_51221,chunk__51098_51222,count__51099_51223,i__51100_51224,seq__51060,chunk__51062,count__51063,i__51064,new_link_51227,path_match_51226,node_51225,path,map__51058,map__51058__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51226], 0));

goog.dom.insertSiblingAfter(new_link_51227,node_51225);


var G__51228 = seq__51094_51221;
var G__51229 = chunk__51098_51222;
var G__51230 = count__51099_51223;
var G__51231 = (i__51100_51224 + (1));
seq__51094_51221 = G__51228;
chunk__51098_51222 = G__51229;
count__51099_51223 = G__51230;
i__51100_51224 = G__51231;
continue;
} else {
var G__51232 = seq__51094_51221;
var G__51233 = chunk__51098_51222;
var G__51234 = count__51099_51223;
var G__51235 = (i__51100_51224 + (1));
seq__51094_51221 = G__51232;
chunk__51098_51222 = G__51233;
count__51099_51223 = G__51234;
i__51100_51224 = G__51235;
continue;
}
} else {
var G__51236 = seq__51094_51221;
var G__51237 = chunk__51098_51222;
var G__51238 = count__51099_51223;
var G__51239 = (i__51100_51224 + (1));
seq__51094_51221 = G__51236;
chunk__51098_51222 = G__51237;
count__51099_51223 = G__51238;
i__51100_51224 = G__51239;
continue;
}
} else {
var temp__5735__auto___51240 = cljs.core.seq(seq__51094_51221);
if(temp__5735__auto___51240){
var seq__51094_51241__$1 = temp__5735__auto___51240;
if(cljs.core.chunked_seq_QMARK_(seq__51094_51241__$1)){
var c__4550__auto___51242 = cljs.core.chunk_first(seq__51094_51241__$1);
var G__51243 = cljs.core.chunk_rest(seq__51094_51241__$1);
var G__51244 = c__4550__auto___51242;
var G__51245 = cljs.core.count(c__4550__auto___51242);
var G__51246 = (0);
seq__51094_51221 = G__51243;
chunk__51098_51222 = G__51244;
count__51099_51223 = G__51245;
i__51100_51224 = G__51246;
continue;
} else {
var node_51247 = cljs.core.first(seq__51094_51241__$1);
if(cljs.core.not(node_51247.shadow$old)){
var path_match_51248 = shadow.cljs.devtools.client.browser.match_paths(node_51247.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51248)){
var new_link_51249 = (function (){var G__51107 = node_51247.cloneNode(true);
G__51107.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51248),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51107;
})();
(node_51247.shadow$old = true);

(new_link_51249.onload = ((function (seq__51094_51221,chunk__51098_51222,count__51099_51223,i__51100_51224,seq__51060,chunk__51062,count__51063,i__51064,new_link_51249,path_match_51248,node_51247,seq__51094_51241__$1,temp__5735__auto___51240,path,map__51058,map__51058__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51247);
});})(seq__51094_51221,chunk__51098_51222,count__51099_51223,i__51100_51224,seq__51060,chunk__51062,count__51063,i__51064,new_link_51249,path_match_51248,node_51247,seq__51094_51241__$1,temp__5735__auto___51240,path,map__51058,map__51058__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51248], 0));

goog.dom.insertSiblingAfter(new_link_51249,node_51247);


var G__51250 = cljs.core.next(seq__51094_51241__$1);
var G__51251 = null;
var G__51252 = (0);
var G__51253 = (0);
seq__51094_51221 = G__51250;
chunk__51098_51222 = G__51251;
count__51099_51223 = G__51252;
i__51100_51224 = G__51253;
continue;
} else {
var G__51254 = cljs.core.next(seq__51094_51241__$1);
var G__51255 = null;
var G__51256 = (0);
var G__51257 = (0);
seq__51094_51221 = G__51254;
chunk__51098_51222 = G__51255;
count__51099_51223 = G__51256;
i__51100_51224 = G__51257;
continue;
}
} else {
var G__51258 = cljs.core.next(seq__51094_51241__$1);
var G__51259 = null;
var G__51260 = (0);
var G__51261 = (0);
seq__51094_51221 = G__51258;
chunk__51098_51222 = G__51259;
count__51099_51223 = G__51260;
i__51100_51224 = G__51261;
continue;
}
}
} else {
}
}
break;
}


var G__51262 = seq__51060;
var G__51263 = chunk__51062;
var G__51264 = count__51063;
var G__51265 = (i__51064 + (1));
seq__51060 = G__51262;
chunk__51062 = G__51263;
count__51063 = G__51264;
i__51064 = G__51265;
continue;
} else {
var G__51266 = seq__51060;
var G__51267 = chunk__51062;
var G__51268 = count__51063;
var G__51269 = (i__51064 + (1));
seq__51060 = G__51266;
chunk__51062 = G__51267;
count__51063 = G__51268;
i__51064 = G__51269;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51060);
if(temp__5735__auto__){
var seq__51060__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51060__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51060__$1);
var G__51270 = cljs.core.chunk_rest(seq__51060__$1);
var G__51271 = c__4550__auto__;
var G__51272 = cljs.core.count(c__4550__auto__);
var G__51273 = (0);
seq__51060 = G__51270;
chunk__51062 = G__51271;
count__51063 = G__51272;
i__51064 = G__51273;
continue;
} else {
var path = cljs.core.first(seq__51060__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51108_51274 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51112_51275 = null;
var count__51113_51276 = (0);
var i__51114_51277 = (0);
while(true){
if((i__51114_51277 < count__51113_51276)){
var node_51278 = chunk__51112_51275.cljs$core$IIndexed$_nth$arity$2(null,i__51114_51277);
if(cljs.core.not(node_51278.shadow$old)){
var path_match_51279 = shadow.cljs.devtools.client.browser.match_paths(node_51278.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51279)){
var new_link_51280 = (function (){var G__51120 = node_51278.cloneNode(true);
G__51120.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51279),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51120;
})();
(node_51278.shadow$old = true);

(new_link_51280.onload = ((function (seq__51108_51274,chunk__51112_51275,count__51113_51276,i__51114_51277,seq__51060,chunk__51062,count__51063,i__51064,new_link_51280,path_match_51279,node_51278,path,seq__51060__$1,temp__5735__auto__,map__51058,map__51058__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51278);
});})(seq__51108_51274,chunk__51112_51275,count__51113_51276,i__51114_51277,seq__51060,chunk__51062,count__51063,i__51064,new_link_51280,path_match_51279,node_51278,path,seq__51060__$1,temp__5735__auto__,map__51058,map__51058__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51279], 0));

goog.dom.insertSiblingAfter(new_link_51280,node_51278);


var G__51281 = seq__51108_51274;
var G__51282 = chunk__51112_51275;
var G__51283 = count__51113_51276;
var G__51284 = (i__51114_51277 + (1));
seq__51108_51274 = G__51281;
chunk__51112_51275 = G__51282;
count__51113_51276 = G__51283;
i__51114_51277 = G__51284;
continue;
} else {
var G__51285 = seq__51108_51274;
var G__51286 = chunk__51112_51275;
var G__51287 = count__51113_51276;
var G__51288 = (i__51114_51277 + (1));
seq__51108_51274 = G__51285;
chunk__51112_51275 = G__51286;
count__51113_51276 = G__51287;
i__51114_51277 = G__51288;
continue;
}
} else {
var G__51289 = seq__51108_51274;
var G__51290 = chunk__51112_51275;
var G__51291 = count__51113_51276;
var G__51292 = (i__51114_51277 + (1));
seq__51108_51274 = G__51289;
chunk__51112_51275 = G__51290;
count__51113_51276 = G__51291;
i__51114_51277 = G__51292;
continue;
}
} else {
var temp__5735__auto___51293__$1 = cljs.core.seq(seq__51108_51274);
if(temp__5735__auto___51293__$1){
var seq__51108_51294__$1 = temp__5735__auto___51293__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51108_51294__$1)){
var c__4550__auto___51295 = cljs.core.chunk_first(seq__51108_51294__$1);
var G__51296 = cljs.core.chunk_rest(seq__51108_51294__$1);
var G__51297 = c__4550__auto___51295;
var G__51298 = cljs.core.count(c__4550__auto___51295);
var G__51299 = (0);
seq__51108_51274 = G__51296;
chunk__51112_51275 = G__51297;
count__51113_51276 = G__51298;
i__51114_51277 = G__51299;
continue;
} else {
var node_51300 = cljs.core.first(seq__51108_51294__$1);
if(cljs.core.not(node_51300.shadow$old)){
var path_match_51301 = shadow.cljs.devtools.client.browser.match_paths(node_51300.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51301)){
var new_link_51302 = (function (){var G__51121 = node_51300.cloneNode(true);
G__51121.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51301),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51121;
})();
(node_51300.shadow$old = true);

(new_link_51302.onload = ((function (seq__51108_51274,chunk__51112_51275,count__51113_51276,i__51114_51277,seq__51060,chunk__51062,count__51063,i__51064,new_link_51302,path_match_51301,node_51300,seq__51108_51294__$1,temp__5735__auto___51293__$1,path,seq__51060__$1,temp__5735__auto__,map__51058,map__51058__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51300);
});})(seq__51108_51274,chunk__51112_51275,count__51113_51276,i__51114_51277,seq__51060,chunk__51062,count__51063,i__51064,new_link_51302,path_match_51301,node_51300,seq__51108_51294__$1,temp__5735__auto___51293__$1,path,seq__51060__$1,temp__5735__auto__,map__51058,map__51058__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51301], 0));

goog.dom.insertSiblingAfter(new_link_51302,node_51300);


var G__51303 = cljs.core.next(seq__51108_51294__$1);
var G__51304 = null;
var G__51305 = (0);
var G__51306 = (0);
seq__51108_51274 = G__51303;
chunk__51112_51275 = G__51304;
count__51113_51276 = G__51305;
i__51114_51277 = G__51306;
continue;
} else {
var G__51307 = cljs.core.next(seq__51108_51294__$1);
var G__51308 = null;
var G__51309 = (0);
var G__51310 = (0);
seq__51108_51274 = G__51307;
chunk__51112_51275 = G__51308;
count__51113_51276 = G__51309;
i__51114_51277 = G__51310;
continue;
}
} else {
var G__51311 = cljs.core.next(seq__51108_51294__$1);
var G__51312 = null;
var G__51313 = (0);
var G__51314 = (0);
seq__51108_51274 = G__51311;
chunk__51112_51275 = G__51312;
count__51113_51276 = G__51313;
i__51114_51277 = G__51314;
continue;
}
}
} else {
}
}
break;
}


var G__51315 = cljs.core.next(seq__51060__$1);
var G__51316 = null;
var G__51317 = (0);
var G__51318 = (0);
seq__51060 = G__51315;
chunk__51062 = G__51316;
count__51063 = G__51317;
i__51064 = G__51318;
continue;
} else {
var G__51319 = cljs.core.next(seq__51060__$1);
var G__51320 = null;
var G__51321 = (0);
var G__51322 = (0);
seq__51060 = G__51319;
chunk__51062 = G__51320;
count__51063 = G__51321;
i__51064 = G__51322;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51122){
var map__51123 = p__51122;
var map__51123__$1 = (((((!((map__51123 == null))))?(((((map__51123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51123):map__51123);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51125){
var map__51126 = p__51125;
var map__51126__$1 = (((((!((map__51126 == null))))?(((((map__51126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51126):map__51126);
var _ = map__51126__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51128,done,error){
var map__51129 = p__51128;
var map__51129__$1 = (((((!((map__51129 == null))))?(((((map__51129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51129):map__51129);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51129__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51131,done,error){
var map__51132 = p__51131;
var map__51132__$1 = (((((!((map__51132 == null))))?(((((map__51132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51132):map__51132);
var msg = map__51132__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51134){
var map__51135 = p__51134;
var map__51135__$1 = (((((!((map__51135 == null))))?(((((map__51135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51135):map__51135);
var src = map__51135__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51137 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51137) : done.call(null,G__51137));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51138){
var map__51139 = p__51138;
var map__51139__$1 = (((((!((map__51139 == null))))?(((((map__51139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51139):map__51139);
var msg__$1 = map__51139__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51139__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51141){var ex = e51141;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51142){
var map__51143 = p__51142;
var map__51143__$1 = (((((!((map__51143 == null))))?(((((map__51143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51143):map__51143);
var env = map__51143__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51145){
var map__51146 = p__51145;
var map__51146__$1 = (((((!((map__51146 == null))))?(((((map__51146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51146):map__51146);
var msg = map__51146__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51148){
var map__51149 = p__51148;
var map__51149__$1 = (((((!((map__51149 == null))))?(((((map__51149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51149):map__51149);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51151){
var map__51152 = p__51151;
var map__51152__$1 = (((((!((map__51152 == null))))?(((((map__51152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51152):map__51152);
var svc = map__51152__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51152__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
