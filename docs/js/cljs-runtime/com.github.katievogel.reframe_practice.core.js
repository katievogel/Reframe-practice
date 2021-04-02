goog.provide('com.github.katievogel.reframe_practice.core');
com.github.katievogel.reframe_practice.core.app_container_el = goog.dom.getElement("appContainer");
com.github.katievogel.reframe_practice.core.begin_render_BANG_ = goog.functions.once((function (){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return com.github.katievogel.reframe_practice.views.ReframePracticeApp;},new cljs.core.Symbol("com.github.katievogel.reframe-practice.views","ReframePracticeApp","com.github.katievogel.reframe-practice.views/ReframePracticeApp",1478398178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.github.katievogel.reframe-practice.views","com.github.katievogel.reframe-practice.views",-1253809781,null),new cljs.core.Symbol(null,"ReframePracticeApp","ReframePracticeApp",198111967,null),"com/github/katievogel/reframe_practice/views.cljs",25,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(com.github.katievogel.reframe_practice.views.ReframePracticeApp)?com.github.katievogel.reframe_practice.views.ReframePracticeApp.cljs$lang$test:null)]))], null),com.github.katievogel.reframe_practice.core.app_container_el);
}));
com.github.katievogel.reframe_practice.core.init_BANG_ = (function com$github$katievogel$reframe_practice$core$init_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["it's running"], 0));

return (com.github.katievogel.reframe_practice.core.begin_render_BANG_.cljs$core$IFn$_invoke$arity$0 ? com.github.katievogel.reframe_practice.core.begin_render_BANG_.cljs$core$IFn$_invoke$arity$0() : com.github.katievogel.reframe_practice.core.begin_render_BANG_.call(null));
});
var target_obj_45705_45711 = window;
var _STAR_runtime_state_STAR__orig_val__45709_45712 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__45710_45713 = oops.state.prepare_state(target_obj_45705_45711,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__45710_45713);

try{var call_info_45707_45714 = [target_obj_45705_45711,(function (){var next_obj_45708 = ((oops.core.validate_object_access_dynamically(target_obj_45705_45711,(0),"addEventListener",true,true,false))?(target_obj_45705_45711["addEventListener"]):null);
return next_obj_45708;
})()];
var fn_45706_45715 = (call_info_45707_45714[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_45706_45715,oops.state.get_last_access_modifier())){
if((!((fn_45706_45715 == null)))){
fn_45706_45715.call((call_info_45707_45714[(0)]),"load",com.github.katievogel.reframe_practice.core.init_BANG_);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__45709_45712);
}
//# sourceMappingURL=com.github.katievogel.reframe_practice.core.js.map
