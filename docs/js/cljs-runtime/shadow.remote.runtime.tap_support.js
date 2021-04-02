goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50699,p__50700){
var map__50701 = p__50699;
var map__50701__$1 = (((((!((map__50701 == null))))?(((((map__50701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50701):map__50701);
var svc = map__50701__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50701__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50701__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50701__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50703 = p__50700;
var map__50703__$1 = (((((!((map__50703 == null))))?(((((map__50703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50703):map__50703);
var msg = map__50703__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50703__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50703__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50703__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50703__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50708,p__50709){
var map__50712 = p__50708;
var map__50712__$1 = (((((!((map__50712 == null))))?(((((map__50712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50712):map__50712);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50712__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50713 = p__50709;
var map__50713__$1 = (((((!((map__50713 == null))))?(((((map__50713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50713):map__50713);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50713__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50726,p__50727){
var map__50728 = p__50726;
var map__50728__$1 = (((((!((map__50728 == null))))?(((((map__50728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50728):map__50728);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50728__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50728__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50729 = p__50727;
var map__50729__$1 = (((((!((map__50729 == null))))?(((((map__50729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50729):map__50729);
var msg = map__50729__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50729__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50737,tid){
var map__50738 = p__50737;
var map__50738__$1 = (((((!((map__50738 == null))))?(((((map__50738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50738):map__50738);
var svc = map__50738__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50738__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50748 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50749 = null;
var count__50750 = (0);
var i__50751 = (0);
while(true){
if((i__50751 < count__50750)){
var vec__50764 = chunk__50749.cljs$core$IIndexed$_nth$arity$2(null,i__50751);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50764,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50764,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50783 = seq__50748;
var G__50784 = chunk__50749;
var G__50785 = count__50750;
var G__50786 = (i__50751 + (1));
seq__50748 = G__50783;
chunk__50749 = G__50784;
count__50750 = G__50785;
i__50751 = G__50786;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50748);
if(temp__5735__auto__){
var seq__50748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50748__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50748__$1);
var G__50787 = cljs.core.chunk_rest(seq__50748__$1);
var G__50788 = c__4550__auto__;
var G__50789 = cljs.core.count(c__4550__auto__);
var G__50790 = (0);
seq__50748 = G__50787;
chunk__50749 = G__50788;
count__50750 = G__50789;
i__50751 = G__50790;
continue;
} else {
var vec__50770 = cljs.core.first(seq__50748__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50770,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50770,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50794 = cljs.core.next(seq__50748__$1);
var G__50795 = null;
var G__50796 = (0);
var G__50797 = (0);
seq__50748 = G__50794;
chunk__50749 = G__50795;
count__50750 = G__50796;
i__50751 = G__50797;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50742_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50742_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50743_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50743_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50744_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50744_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50745_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50745_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50776){
var map__50777 = p__50776;
var map__50777__$1 = (((((!((map__50777 == null))))?(((((map__50777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50777):map__50777);
var svc = map__50777__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
