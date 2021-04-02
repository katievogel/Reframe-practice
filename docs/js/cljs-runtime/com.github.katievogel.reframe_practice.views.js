goog.provide('com.github.katievogel.reframe_practice.views');
com.github.katievogel.reframe_practice.views.TabRow = (function com$github$katievogel$reframe_practice$views$TabRow(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link.hello-react","a.nav-link.hello-react",1510735190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-focus","tab-focus",1825598650),new cljs.core.Keyword(null,"hello-react","hello-react",1023306060)], null));
})], null),"Hello React"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link.paragraph","a.nav-link.paragraph",-1857995400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-focus","tab-focus",1825598650),new cljs.core.Keyword(null,"paragraph","paragraph",296707709)], null));
})], null),"Lorem Ipsum"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link.login","a.nav-link.login",-1262182552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-focus","tab-focus",1825598650),new cljs.core.Keyword(null,"login","login",55217519)], null));
})], null),"Login Form"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link.fun-ppl","a.nav-link.fun-ppl",-1617415360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-focus","tab-focus",1825598650),new cljs.core.Keyword(null,"fun-ppl","fun-ppl",-235619224)], null));
})], null),"Fun People"], null)], null)], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-active-tab","get-active-tab",-1088947269),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__45693){
var vec__45694 = p__45693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45694,(0),null);
return new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-db","get-db",-630166596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__45697){
var vec__45698 = p__45697;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45698,(0),null);
return db;
})], 0));
com.github.katievogel.reframe_practice.views.TabContent = (function com$github$katievogel$reframe_practice$views$TabContent(){
var active_tab = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-active-tab","get-active-tab",-1088947269)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"hello-react","hello-react",1023306060))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.reframe_practice.hello.hello_react_text], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"paragraph","paragraph",296707709))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.reframe_practice.paragraph.paragraphs], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"login","login",55217519))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.reframe_practice.login.login], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"fun-ppl","fun-ppl",-235619224))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.reframe_practice.funppl.fun_people], null);
} else {
return null;
}
}
}
}
});
com.github.katievogel.reframe_practice.views.ReframePracticeApp = (function com$github$katievogel$reframe_practice$views$ReframePracticeApp(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"my app"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.reframe_practice.views.TabRow], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.reframe_practice.views.TabContent], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-db","get-db",-630166596)], null)))], 0))], null)], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tab-focus","tab-focus",1825598650),(function (db,p__45701){
var vec__45702 = p__45701;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45702,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45702,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),tab);
}));

//# sourceMappingURL=com.github.katievogel.reframe_practice.views.js.map
