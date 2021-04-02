goog.provide('com.github.katievogel.reframe_practice.paragraph');
com.github.katievogel.reframe_practice.paragraph.lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVivamus faucibus at magna sit amet tristique.\nSuspendisse ut varius dui, tincidunt semper sapien.\nNullam bibendum eros lectus, eu posuere velit ultrices sed.\nProin consectetur lacus nec metus ullamcorper, ac tempus felis eleifend.\nDonec eu euismod nisl. Morbi fringilla justo sit amet blandit dictum.\nFusce sollicitudin ipsum ut mauris posuere pharetra.\nPraesent vitae elit nec ex placerat faucibus a in diam.\nSed bibendum sit amet dui at facilisis.\nVivamus vitae felis lacinia, gravida lectus id, placerat ipsum.\nInterdum et malesuada fames ac ante ipsum primis in faucibus.\nInteger feugiat, sem in interdum tempor, nisi enim mollis nibh, luctus laoreet massa ligula nec ex.";
com.github.katievogel.reframe_practice.paragraph.ParagraphText = (function com$github$katievogel$reframe_practice$paragraph$ParagraphText(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.paragraph-text","p.paragraph-text",-1971916579),com.github.katievogel.reframe_practice.paragraph.lorem_ipsum], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"para-state","para-state",249876331),(function (_db,_event){
return com.github.katievogel.reframe_practice.state.initial_state;
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-paragraph-count","get-paragraph-count",1060667900),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__45681){
var vec__45682 = p__45681;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45682,(0),null);
return new cljs.core.Keyword(null,"para-count","para-count",-1722500759).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p-counter-inc","p-counter-inc",455416295),(function (db,p__45685){
var vec__45686 = p__45685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45686,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"para-count","para-count",-1722500759),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p-counter-dec","p-counter-dec",91742109),(function (db,p__45689){
var vec__45690 = p__45689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45690,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"para-count","para-count",-1722500759),cljs.core.dec);
}));
com.github.katievogel.reframe_practice.paragraph.paragraphs = (function com$github$katievogel$reframe_practice$paragraph$paragraphs(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Number of Lorem Ipsum paragraphs: ",cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-paragraph-count","get-paragraph-count",1060667900)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.add-para","button.btn.btn-primary.add-para",547391413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-counter-inc","p-counter-inc",455416295)], null));
})], null),"Add Paragraph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.rem-para","button.btn.btn-primary.rem-para",1917220894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-counter-dec","p-counter-dec",91742109)], null));
})], null),"Remove Paragraph"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.reframe_practice.paragraph.ParagraphText], null)], null);
});

//# sourceMappingURL=com.github.katievogel.reframe_practice.paragraph.js.map
