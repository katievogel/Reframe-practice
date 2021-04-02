goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50156){
var map__50157 = p__50156;
var map__50157__$1 = (((((!((map__50157 == null))))?(((((map__50157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50157):map__50157);
var m = map__50157__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50157__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50157__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50159_50406 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50160_50407 = null;
var count__50161_50408 = (0);
var i__50162_50409 = (0);
while(true){
if((i__50162_50409 < count__50161_50408)){
var f_50411 = chunk__50160_50407.cljs$core$IIndexed$_nth$arity$2(null,i__50162_50409);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50411], 0));


var G__50412 = seq__50159_50406;
var G__50413 = chunk__50160_50407;
var G__50414 = count__50161_50408;
var G__50415 = (i__50162_50409 + (1));
seq__50159_50406 = G__50412;
chunk__50160_50407 = G__50413;
count__50161_50408 = G__50414;
i__50162_50409 = G__50415;
continue;
} else {
var temp__5735__auto___50420 = cljs.core.seq(seq__50159_50406);
if(temp__5735__auto___50420){
var seq__50159_50421__$1 = temp__5735__auto___50420;
if(cljs.core.chunked_seq_QMARK_(seq__50159_50421__$1)){
var c__4550__auto___50422 = cljs.core.chunk_first(seq__50159_50421__$1);
var G__50423 = cljs.core.chunk_rest(seq__50159_50421__$1);
var G__50424 = c__4550__auto___50422;
var G__50425 = cljs.core.count(c__4550__auto___50422);
var G__50426 = (0);
seq__50159_50406 = G__50423;
chunk__50160_50407 = G__50424;
count__50161_50408 = G__50425;
i__50162_50409 = G__50426;
continue;
} else {
var f_50428 = cljs.core.first(seq__50159_50421__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50428], 0));


var G__50429 = cljs.core.next(seq__50159_50421__$1);
var G__50430 = null;
var G__50431 = (0);
var G__50432 = (0);
seq__50159_50406 = G__50429;
chunk__50160_50407 = G__50430;
count__50161_50408 = G__50431;
i__50162_50409 = G__50432;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50435 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50435], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50435)))?cljs.core.second(arglists_50435):arglists_50435)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50166_50442 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50167_50443 = null;
var count__50168_50444 = (0);
var i__50169_50445 = (0);
while(true){
if((i__50169_50445 < count__50168_50444)){
var vec__50186_50447 = chunk__50167_50443.cljs$core$IIndexed$_nth$arity$2(null,i__50169_50445);
var name_50448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50186_50447,(0),null);
var map__50189_50449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50186_50447,(1),null);
var map__50189_50450__$1 = (((((!((map__50189_50449 == null))))?(((((map__50189_50449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50189_50449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50189_50449):map__50189_50449);
var doc_50451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50189_50450__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50189_50450__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50448], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50452], 0));

if(cljs.core.truth_(doc_50451)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50451], 0));
} else {
}


var G__50458 = seq__50166_50442;
var G__50459 = chunk__50167_50443;
var G__50460 = count__50168_50444;
var G__50461 = (i__50169_50445 + (1));
seq__50166_50442 = G__50458;
chunk__50167_50443 = G__50459;
count__50168_50444 = G__50460;
i__50169_50445 = G__50461;
continue;
} else {
var temp__5735__auto___50463 = cljs.core.seq(seq__50166_50442);
if(temp__5735__auto___50463){
var seq__50166_50464__$1 = temp__5735__auto___50463;
if(cljs.core.chunked_seq_QMARK_(seq__50166_50464__$1)){
var c__4550__auto___50465 = cljs.core.chunk_first(seq__50166_50464__$1);
var G__50466 = cljs.core.chunk_rest(seq__50166_50464__$1);
var G__50467 = c__4550__auto___50465;
var G__50468 = cljs.core.count(c__4550__auto___50465);
var G__50469 = (0);
seq__50166_50442 = G__50466;
chunk__50167_50443 = G__50467;
count__50168_50444 = G__50468;
i__50169_50445 = G__50469;
continue;
} else {
var vec__50192_50470 = cljs.core.first(seq__50166_50464__$1);
var name_50471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50192_50470,(0),null);
var map__50195_50472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50192_50470,(1),null);
var map__50195_50473__$1 = (((((!((map__50195_50472 == null))))?(((((map__50195_50472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50195_50472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50195_50472):map__50195_50472);
var doc_50474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50195_50473__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50195_50473__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50471], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50475], 0));

if(cljs.core.truth_(doc_50474)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50474], 0));
} else {
}


var G__50478 = cljs.core.next(seq__50166_50464__$1);
var G__50479 = null;
var G__50480 = (0);
var G__50481 = (0);
seq__50166_50442 = G__50478;
chunk__50167_50443 = G__50479;
count__50168_50444 = G__50480;
i__50169_50445 = G__50481;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50200 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50201 = null;
var count__50202 = (0);
var i__50203 = (0);
while(true){
if((i__50203 < count__50202)){
var role = chunk__50201.cljs$core$IIndexed$_nth$arity$2(null,i__50203);
var temp__5735__auto___50491__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50491__$1)){
var spec_50492 = temp__5735__auto___50491__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50492)], 0));
} else {
}


var G__50493 = seq__50200;
var G__50494 = chunk__50201;
var G__50495 = count__50202;
var G__50496 = (i__50203 + (1));
seq__50200 = G__50493;
chunk__50201 = G__50494;
count__50202 = G__50495;
i__50203 = G__50496;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50200);
if(temp__5735__auto____$1){
var seq__50200__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50200__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50200__$1);
var G__50498 = cljs.core.chunk_rest(seq__50200__$1);
var G__50499 = c__4550__auto__;
var G__50500 = cljs.core.count(c__4550__auto__);
var G__50501 = (0);
seq__50200 = G__50498;
chunk__50201 = G__50499;
count__50202 = G__50500;
i__50203 = G__50501;
continue;
} else {
var role = cljs.core.first(seq__50200__$1);
var temp__5735__auto___50506__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50506__$2)){
var spec_50507 = temp__5735__auto___50506__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50507)], 0));
} else {
}


var G__50508 = cljs.core.next(seq__50200__$1);
var G__50509 = null;
var G__50510 = (0);
var G__50511 = (0);
seq__50200 = G__50508;
chunk__50201 = G__50509;
count__50202 = G__50510;
i__50203 = G__50511;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50512 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50513 = cljs.core.ex_cause(t);
via = G__50512;
t = G__50513;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50222 = datafied_throwable;
var map__50222__$1 = (((((!((map__50222 == null))))?(((((map__50222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50222):map__50222);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50222__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50223 = cljs.core.last(via);
var map__50223__$1 = (((((!((map__50223 == null))))?(((((map__50223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50223):map__50223);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50223__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50223__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50223__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50224 = data;
var map__50224__$1 = (((((!((map__50224 == null))))?(((((map__50224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50224):map__50224);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50224__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50224__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50224__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50225 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50225__$1 = (((((!((map__50225 == null))))?(((((map__50225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50225):map__50225);
var top_data = map__50225__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50242 = phase;
var G__50242__$1 = (((G__50242 instanceof cljs.core.Keyword))?G__50242.fqn:null);
switch (G__50242__$1) {
case "read-source":
var map__50245 = data;
var map__50245__$1 = (((((!((map__50245 == null))))?(((((map__50245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50245):map__50245);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50245__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50245__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50247 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50247__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50247,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50247);
var G__50247__$2 = (cljs.core.truth_((function (){var fexpr__50248 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50248.cljs$core$IFn$_invoke$arity$1 ? fexpr__50248.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50248.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50247__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50247__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50247__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50247__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50249 = top_data;
var G__50249__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50249,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50249);
var G__50249__$2 = (cljs.core.truth_((function (){var fexpr__50250 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50250.cljs$core$IFn$_invoke$arity$1 ? fexpr__50250.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50250.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50249__$1);
var G__50249__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50249__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50249__$2);
var G__50249__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50249__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50249__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50249__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50249__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50251 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50251,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50251,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50251,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50251,(3),null);
var G__50254 = top_data;
var G__50254__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50254,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50254);
var G__50254__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50254__$1);
var G__50254__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50254__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50254__$2);
var G__50254__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50254__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50254__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50254__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50254__$4;
}

break;
case "execution":
var vec__50255 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50219_SHARP_){
var or__4120__auto__ = (p1__50219_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__50259 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50259.cljs$core$IFn$_invoke$arity$1 ? fexpr__50259.cljs$core$IFn$_invoke$arity$1(p1__50219_SHARP_) : fexpr__50259.call(null,p1__50219_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__50260 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50260__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50260,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50260);
var G__50260__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50260__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50260__$1);
var G__50260__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50260__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50260__$2);
var G__50260__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50260__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50260__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50260__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50260__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50242__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50280){
var map__50285 = p__50280;
var map__50285__$1 = (((((!((map__50285 == null))))?(((((map__50285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50285):map__50285);
var triage_data = map__50285__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50304 = phase;
var G__50304__$1 = (((G__50304 instanceof cljs.core.Keyword))?G__50304.fqn:null);
switch (G__50304__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50305 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50306 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50307 = loc;
var G__50308 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50317_50556 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50318_50557 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50319_50558 = true;
var _STAR_print_fn_STAR__temp_val__50320_50559 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50319_50558);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50320_50559);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50278_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50278_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50318_50557);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50317_50556);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50305,G__50306,G__50307,G__50308) : format.call(null,G__50305,G__50306,G__50307,G__50308));

break;
case "macroexpansion":
var G__50339 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50340 = cause_type;
var G__50341 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50342 = loc;
var G__50343 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50339,G__50340,G__50341,G__50342,G__50343) : format.call(null,G__50339,G__50340,G__50341,G__50342,G__50343));

break;
case "compile-syntax-check":
var G__50344 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50345 = cause_type;
var G__50346 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50347 = loc;
var G__50348 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50344,G__50345,G__50346,G__50347,G__50348) : format.call(null,G__50344,G__50345,G__50346,G__50347,G__50348));

break;
case "compilation":
var G__50356 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50357 = cause_type;
var G__50358 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50359 = loc;
var G__50360 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50356,G__50357,G__50358,G__50359,G__50360) : format.call(null,G__50356,G__50357,G__50358,G__50359,G__50360));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50361 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50362 = symbol;
var G__50363 = loc;
var G__50364 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50369_50563 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50370_50564 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50371_50565 = true;
var _STAR_print_fn_STAR__temp_val__50372_50566 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50371_50565);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50372_50566);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50279_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50279_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50370_50564);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50369_50563);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50361,G__50362,G__50363,G__50364) : format.call(null,G__50361,G__50362,G__50363,G__50364));
} else {
var G__50393 = "Execution error%s at %s(%s).\n%s\n";
var G__50394 = cause_type;
var G__50395 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50396 = loc;
var G__50397 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50393,G__50394,G__50395,G__50396,G__50397) : format.call(null,G__50393,G__50394,G__50395,G__50396,G__50397));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50304__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
