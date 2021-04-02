goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__42692 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__42692)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__42692)){
var G__42694 = (console["error"]);
var G__42695 = msg;
var G__42696 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__42693 = oops.state.get_console_reporter();
return (fexpr__42693.cljs$core$IFn$_invoke$arity$3 ? fexpr__42693.cljs$core$IFn$_invoke$arity$3(G__42694,G__42695,G__42696) : fexpr__42693.call(null,G__42694,G__42695,G__42696));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__42692)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42692)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__42697 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__42697)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__42697)){
var G__42699 = (console["warn"]);
var G__42700 = msg;
var G__42701 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__42698 = oops.state.get_console_reporter();
return (fexpr__42698.cljs$core$IFn$_invoke$arity$3 ? fexpr__42698.cljs$core$IFn$_invoke$arity$3(G__42699,G__42700,G__42701) : fexpr__42698.call(null,G__42699,G__42700,G__42701));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__42697)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42697)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42788 = arguments.length;
var i__4731__auto___42789 = (0);
while(true){
if((i__4731__auto___42789 < len__4730__auto___42788)){
args__4736__auto__.push((arguments[i__4731__auto___42789]));

var G__42790 = (i__4731__auto___42789 + (1));
i__4731__auto___42789 = G__42790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__42707){
var vec__42708 = p__42707;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42708,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__42714_42792 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__42714_42792)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__42714_42792)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__42714_42792)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__42714_42792)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42714_42792)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq42705){
var G__42706 = cljs.core.first(seq42705);
var seq42705__$1 = cljs.core.next(seq42705);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42706,seq42705__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4109__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__4109__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5737__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5737__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
return true;

}
}
} else {
var descriptor_42715 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_42715);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_42716 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_42716,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__4109__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_42726 = oops.config.get_child_factory();
var child_factory_42726__$1 = (function (){var G__42727 = child_factory_42726;
var G__42727__$1 = (((G__42727 instanceof cljs.core.Keyword))?G__42727.fqn:null);
switch (G__42727__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_42726;

}
})();

var child_obj_42725 = (child_factory_42726__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_42726__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_42726__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_42725);
} else {
}

return child_obj_42725;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_42730 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_42730);

return selector_path_42730;
} else {
var selector_path_42731 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_42731);

return selector_path_42731;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_42732 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_42732);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_42741 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_42741,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_42734 = (function (){var path_42733 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_42733,(0));

return path_42733;
})();
var len_42735 = path_42734.length;
var i_42736 = (0);
var obj_42737 = obj;
while(true){
if((i_42736 < len_42735)){
var mode_42738 = (path_42734[i_42736]);
var key_42739 = (path_42734[(i_42736 + (1))]);
var next_obj_42740 = oops.core.get_key_dynamically(obj_42737,key_42739,mode_42738);
var G__42742 = mode_42738;
switch (G__42742) {
case (0):
var G__42804 = (i_42736 + (2));
var G__42805 = next_obj_42740;
i_42736 = G__42804;
obj_42737 = G__42805;
continue;

break;
case (1):
if((!((next_obj_42740 == null)))){
var G__42806 = (i_42736 + (2));
var G__42807 = next_obj_42740;
i_42736 = G__42806;
obj_42737 = G__42807;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_42740 == null)))){
var G__42808 = (i_42736 + (2));
var G__42809 = next_obj_42740;
i_42736 = G__42808;
obj_42737 = G__42809;
continue;
} else {
var G__42810 = (i_42736 + (2));
var G__42811 = oops.core.punch_key_dynamically_BANG_.call(null,obj_42737,key_42739);
i_42736 = G__42810;
obj_42737 = G__42811;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42742)].join('')));

}
} else {
return obj_42737;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_42768 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_42768,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_42744 = (function (){var path_42743 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_42743,(0));

return path_42743;
})();
var len_42745 = path_42744.length;
if((len_42745 < (4))){
return [obj,(function (){var path_42747 = path_42744;
var len_42748 = path_42747.length;
var i_42749 = (0);
var obj_42750 = obj;
while(true){
if((i_42749 < len_42748)){
var mode_42751 = (path_42747[i_42749]);
var key_42752 = (path_42747[(i_42749 + (1))]);
var next_obj_42753 = oops.core.get_key_dynamically(obj_42750,key_42752,mode_42751);
var G__42769 = mode_42751;
switch (G__42769) {
case (0):
var G__42813 = (i_42749 + (2));
var G__42814 = next_obj_42753;
i_42749 = G__42813;
obj_42750 = G__42814;
continue;

break;
case (1):
if((!((next_obj_42753 == null)))){
var G__42815 = (i_42749 + (2));
var G__42816 = next_obj_42753;
i_42749 = G__42815;
obj_42750 = G__42816;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_42753 == null)))){
var G__42818 = (i_42749 + (2));
var G__42819 = next_obj_42753;
i_42749 = G__42818;
obj_42750 = G__42819;
continue;
} else {
var G__42820 = (i_42749 + (2));
var G__42821 = oops.core.punch_key_dynamically_BANG_.call(null,obj_42750,key_42752);
i_42749 = G__42820;
obj_42750 = G__42821;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42769)].join('')));

}
} else {
return obj_42750;
}
break;
}
})()];
} else {
var target_obj_42746 = (function (){var path_42754 = path_42744.slice((0),(len_42745 - (2)));
var len_42755 = path_42754.length;
var i_42756 = (0);
var obj_42757 = obj;
while(true){
if((i_42756 < len_42755)){
var mode_42758 = (path_42754[i_42756]);
var key_42759 = (path_42754[(i_42756 + (1))]);
var next_obj_42760 = oops.core.get_key_dynamically(obj_42757,key_42759,mode_42758);
var G__42770 = mode_42758;
switch (G__42770) {
case (0):
var G__42824 = (i_42756 + (2));
var G__42825 = next_obj_42760;
i_42756 = G__42824;
obj_42757 = G__42825;
continue;

break;
case (1):
if((!((next_obj_42760 == null)))){
var G__42826 = (i_42756 + (2));
var G__42827 = next_obj_42760;
i_42756 = G__42826;
obj_42757 = G__42827;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_42760 == null)))){
var G__42828 = (i_42756 + (2));
var G__42829 = next_obj_42760;
i_42756 = G__42828;
obj_42757 = G__42829;
continue;
} else {
var G__42830 = (i_42756 + (2));
var G__42831 = oops.core.punch_key_dynamically_BANG_.call(null,obj_42757,key_42759);
i_42756 = G__42830;
obj_42757 = G__42831;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42770)].join('')));

}
} else {
return obj_42757;
}
break;
}
})();
return [target_obj_42746,(function (){var path_42761 = [(path_42744[(len_42745 - (2))]),(path_42744[(len_42745 - (1))])];
var len_42762 = path_42761.length;
var i_42763 = (0);
var obj_42764 = target_obj_42746;
while(true){
if((i_42763 < len_42762)){
var mode_42765 = (path_42761[i_42763]);
var key_42766 = (path_42761[(i_42763 + (1))]);
var next_obj_42767 = oops.core.get_key_dynamically(obj_42764,key_42766,mode_42765);
var G__42771 = mode_42765;
switch (G__42771) {
case (0):
var G__42833 = (i_42763 + (2));
var G__42834 = next_obj_42767;
i_42763 = G__42833;
obj_42764 = G__42834;
continue;

break;
case (1):
if((!((next_obj_42767 == null)))){
var G__42835 = (i_42763 + (2));
var G__42836 = next_obj_42767;
i_42763 = G__42835;
obj_42764 = G__42836;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_42767 == null)))){
var G__42837 = (i_42763 + (2));
var G__42838 = next_obj_42767;
i_42763 = G__42837;
obj_42764 = G__42838;
continue;
} else {
var G__42839 = (i_42763 + (2));
var G__42840 = oops.core.punch_key_dynamically_BANG_.call(null,obj_42764,key_42766);
i_42763 = G__42839;
obj_42764 = G__42840;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42771)].join('')));

}
} else {
return obj_42764;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_42786 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_42786,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_42773 = (function (){var path_42772 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_42772,(1));

return path_42772;
})();
var len_42776 = path_42773.length;
var parent_obj_path_42777 = path_42773.slice((0),(len_42776 - (2)));
var key_42774 = (path_42773[(len_42776 - (1))]);
var mode_42775 = (path_42773[(len_42776 - (2))]);
var parent_obj_42778 = (function (){var path_42779 = parent_obj_path_42777;
var len_42780 = path_42779.length;
var i_42781 = (0);
var obj_42782 = obj;
while(true){
if((i_42781 < len_42780)){
var mode_42783 = (path_42779[i_42781]);
var key_42784 = (path_42779[(i_42781 + (1))]);
var next_obj_42785 = oops.core.get_key_dynamically(obj_42782,key_42784,mode_42783);
var G__42787 = mode_42783;
switch (G__42787) {
case (0):
var G__42842 = (i_42781 + (2));
var G__42843 = next_obj_42785;
i_42781 = G__42842;
obj_42782 = G__42843;
continue;

break;
case (1):
if((!((next_obj_42785 == null)))){
var G__42844 = (i_42781 + (2));
var G__42845 = next_obj_42785;
i_42781 = G__42844;
obj_42782 = G__42845;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_42785 == null)))){
var G__42846 = (i_42781 + (2));
var G__42847 = next_obj_42785;
i_42781 = G__42846;
obj_42782 = G__42847;
continue;
} else {
var G__42848 = (i_42781 + (2));
var G__42849 = oops.core.punch_key_dynamically_BANG_.call(null,obj_42782,key_42784);
i_42781 = G__42848;
obj_42782 = G__42849;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42787)].join('')));

}
} else {
return obj_42782;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_42778,key_42774,val,mode_42775);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
