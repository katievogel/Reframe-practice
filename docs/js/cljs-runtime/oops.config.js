goog.provide('oops.config');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

(oops.config._STAR_runtime_config_STAR_ = new_config);

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42225 = arguments.length;
var i__4731__auto___42227 = (0);
while(true){
if((i__4731__auto___42227 < len__4730__auto___42225)){
args__4736__auto__.push((arguments[i__4731__auto___42227]));

var G__42228 = (i__4731__auto___42227 + (1));
i__4731__auto___42227 = G__42228;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
}));

(oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq42051){
var G__42056 = cljs.core.first(seq42051);
var seq42051__$1 = cljs.core.next(seq42051);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42056,seq42051__$1);
}));

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42234 = arguments.length;
var i__4731__auto___42235 = (0);
while(true){
if((i__4731__auto___42235 < len__4730__auto___42234)){
args__4736__auto__.push((arguments[i__4731__auto___42235]));

var G__42237 = (i__4731__auto___42235 + (1));
i__4731__auto___42235 = G__42237;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__42080){
var vec__42081 = p__42080;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42081,(0),null);
var G__42084 = (function (){var or__4120__auto__ = config;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__42084) : key.call(null,G__42084));
}));

(oops.config.get_config_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.get_config_key.cljs$lang$applyTo = (function (seq42068){
var G__42069 = cljs.core.first(seq42068);
var seq42068__$1 = cljs.core.next(seq42068);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42069,seq42068__$1);
}));

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42243 = arguments.length;
var i__4731__auto___42244 = (0);
while(true){
if((i__4731__auto___42244 < len__4730__auto___42243)){
args__4736__auto__.push((arguments[i__4731__auto___42244]));

var G__42246 = (i__4731__auto___42244 + (1));
i__4731__auto___42244 = G__42246;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__42096){
var vec__42097 = p__42096;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42097,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__4120__auto__ = config;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
}));

(oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq42089){
var G__42090 = cljs.core.first(seq42089);
var seq42089__$1 = cljs.core.next(seq42089);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42090,seq42089__$1);
}));

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42252 = arguments.length;
var i__4731__auto___42253 = (0);
while(true){
if((i__4731__auto___42253 < len__4730__auto___42252)){
args__4736__auto__.push((arguments[i__4731__auto___42253]));

var G__42254 = (i__4731__auto___42253 + (1));
i__4731__auto___42253 = G__42254;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__42113){
var vec__42116 = p__42113;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42116,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq42105){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42105));
}));

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42258 = arguments.length;
var i__4731__auto___42259 = (0);
while(true){
if((i__4731__auto___42259 < len__4730__auto___42258)){
args__4736__auto__.push((arguments[i__4731__auto___42259]));

var G__42260 = (i__4731__auto___42259 + (1));
i__4731__auto___42259 = G__42260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__42134){
var vec__42137 = p__42134;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42137,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq42123){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42123));
}));

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42265 = arguments.length;
var i__4731__auto___42266 = (0);
while(true){
if((i__4731__auto___42266 < len__4730__auto___42265)){
args__4736__auto__.push((arguments[i__4731__auto___42266]));

var G__42267 = (i__4731__auto___42266 + (1));
i__4731__auto___42266 = G__42267;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__42154){
var vec__42155 = p__42154;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42155,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq42146){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42146));
}));

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42270 = arguments.length;
var i__4731__auto___42271 = (0);
while(true){
if((i__4731__auto___42271 < len__4730__auto___42270)){
args__4736__auto__.push((arguments[i__4731__auto___42271]));

var G__42272 = (i__4731__auto___42271 + (1));
i__4731__auto___42271 = G__42272;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__42169){
var vec__42174 = p__42169;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42174,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_child_factory.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_child_factory.cljs$lang$applyTo = (function (seq42163){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42163));
}));

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42279 = arguments.length;
var i__4731__auto___42280 = (0);
while(true){
if((i__4731__auto___42280 < len__4730__auto___42279)){
args__4736__auto__.push((arguments[i__4731__auto___42280]));

var G__42281 = (i__4731__auto___42280 + (1));
i__4731__auto___42280 = G__42281;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42197){
var vec__42199 = p__42197;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42199,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq42183){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42183));
}));

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42287 = arguments.length;
var i__4731__auto___42288 = (0);
while(true){
if((i__4731__auto___42288 < len__4730__auto___42287)){
args__4736__auto__.push((arguments[i__4731__auto___42288]));

var G__42289 = (i__4731__auto___42288 + (1));
i__4731__auto___42288 = G__42289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42212){
var vec__42213 = p__42212;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42213,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq42207){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42207));
}));


//# sourceMappingURL=oops.config.js.map
