goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42375__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42378__i = 0, G__42378__a = new Array(arguments.length -  0);
while (G__42378__i < G__42378__a.length) {G__42378__a[G__42378__i] = arguments[G__42378__i + 0]; ++G__42378__i;}
  args = new cljs.core.IndexedSeq(G__42378__a,0,null);
} 
return G__42375__delegate.call(this,args);};
G__42375.cljs$lang$maxFixedArity = 0;
G__42375.cljs$lang$applyTo = (function (arglist__42379){
var args = cljs.core.seq(arglist__42379);
return G__42375__delegate(args);
});
G__42375.cljs$core$IFn$_invoke$arity$variadic = G__42375__delegate;
return G__42375;
})()
);

(o.error = (function() { 
var G__42380__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42383__i = 0, G__42383__a = new Array(arguments.length -  0);
while (G__42383__i < G__42383__a.length) {G__42383__a[G__42383__i] = arguments[G__42383__i + 0]; ++G__42383__i;}
  args = new cljs.core.IndexedSeq(G__42383__a,0,null);
} 
return G__42380__delegate.call(this,args);};
G__42380.cljs$lang$maxFixedArity = 0;
G__42380.cljs$lang$applyTo = (function (arglist__42384){
var args = cljs.core.seq(arglist__42384);
return G__42380__delegate(args);
});
G__42380.cljs$core$IFn$_invoke$arity$variadic = G__42380__delegate;
return G__42380;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
