goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44236 = arguments.length;
switch (G__44236) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44243 = (function (f,blockable,meta44244){
this.f = f;
this.blockable = blockable;
this.meta44244 = meta44244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44245,meta44244__$1){
var self__ = this;
var _44245__$1 = this;
return (new cljs.core.async.t_cljs$core$async44243(self__.f,self__.blockable,meta44244__$1));
}));

(cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44245){
var self__ = this;
var _44245__$1 = this;
return self__.meta44244;
}));

(cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44244","meta44244",-1232245635,null)], null);
}));

(cljs.core.async.t_cljs$core$async44243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44243");

(cljs.core.async.t_cljs$core$async44243.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async44243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44243.
 */
cljs.core.async.__GT_t_cljs$core$async44243 = (function cljs$core$async$__GT_t_cljs$core$async44243(f__$1,blockable__$1,meta44244){
return (new cljs.core.async.t_cljs$core$async44243(f__$1,blockable__$1,meta44244));
});

}

return (new cljs.core.async.t_cljs$core$async44243(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44294 = arguments.length;
switch (G__44294) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44312 = arguments.length;
switch (G__44312) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44334 = arguments.length;
switch (G__44334) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47079 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47079) : fn1.call(null,val_47079));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47079) : fn1.call(null,val_47079));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44350 = arguments.length;
switch (G__44350) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___47096 = n;
var x_47099 = (0);
while(true){
if((x_47099 < n__4607__auto___47096)){
(a[x_47099] = x_47099);

var G__47100 = (x_47099 + (1));
x_47099 = G__47100;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44367 = (function (flag,meta44368){
this.flag = flag;
this.meta44368 = meta44368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44369,meta44368__$1){
var self__ = this;
var _44369__$1 = this;
return (new cljs.core.async.t_cljs$core$async44367(self__.flag,meta44368__$1));
}));

(cljs.core.async.t_cljs$core$async44367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44369){
var self__ = this;
var _44369__$1 = this;
return self__.meta44368;
}));

(cljs.core.async.t_cljs$core$async44367.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44368","meta44368",1403626534,null)], null);
}));

(cljs.core.async.t_cljs$core$async44367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44367");

(cljs.core.async.t_cljs$core$async44367.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async44367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44367.
 */
cljs.core.async.__GT_t_cljs$core$async44367 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44367(flag__$1,meta44368){
return (new cljs.core.async.t_cljs$core$async44367(flag__$1,meta44368));
});

}

return (new cljs.core.async.t_cljs$core$async44367(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44376 = (function (flag,cb,meta44377){
this.flag = flag;
this.cb = cb;
this.meta44377 = meta44377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44378,meta44377__$1){
var self__ = this;
var _44378__$1 = this;
return (new cljs.core.async.t_cljs$core$async44376(self__.flag,self__.cb,meta44377__$1));
}));

(cljs.core.async.t_cljs$core$async44376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44378){
var self__ = this;
var _44378__$1 = this;
return self__.meta44377;
}));

(cljs.core.async.t_cljs$core$async44376.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44377","meta44377",189152843,null)], null);
}));

(cljs.core.async.t_cljs$core$async44376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44376");

(cljs.core.async.t_cljs$core$async44376.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async44376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44376.
 */
cljs.core.async.__GT_t_cljs$core$async44376 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44376(flag__$1,cb__$1,meta44377){
return (new cljs.core.async.t_cljs$core$async44376(flag__$1,cb__$1,meta44377));
});

}

return (new cljs.core.async.t_cljs$core$async44376(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44400_SHARP_){
var G__44427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44400_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44427) : fret.call(null,G__44427));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44402_SHARP_){
var G__44431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44402_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44431) : fret.call(null,G__44431));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47145 = (i + (1));
i = G__47145;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47146 = arguments.length;
var i__4731__auto___47149 = (0);
while(true){
if((i__4731__auto___47149 < len__4730__auto___47146)){
args__4736__auto__.push((arguments[i__4731__auto___47149]));

var G__47151 = (i__4731__auto___47149 + (1));
i__4731__auto___47149 = G__47151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44435){
var map__44436 = p__44435;
var map__44436__$1 = (((((!((map__44436 == null))))?(((((map__44436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44436):map__44436);
var opts = map__44436__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44433){
var G__44434 = cljs.core.first(seq44433);
var seq44433__$1 = cljs.core.next(seq44433);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44434,seq44433__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44442 = arguments.length;
switch (G__44442) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44129__auto___47154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_44466){
var state_val_44467 = (state_44466[(1)]);
if((state_val_44467 === (7))){
var inst_44462 = (state_44466[(2)]);
var state_44466__$1 = state_44466;
var statearr_44479_47160 = state_44466__$1;
(statearr_44479_47160[(2)] = inst_44462);

(statearr_44479_47160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (1))){
var state_44466__$1 = state_44466;
var statearr_44481_47161 = state_44466__$1;
(statearr_44481_47161[(2)] = null);

(statearr_44481_47161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (4))){
var inst_44445 = (state_44466[(7)]);
var inst_44445__$1 = (state_44466[(2)]);
var inst_44446 = (inst_44445__$1 == null);
var state_44466__$1 = (function (){var statearr_44484 = state_44466;
(statearr_44484[(7)] = inst_44445__$1);

return statearr_44484;
})();
if(cljs.core.truth_(inst_44446)){
var statearr_44486_47164 = state_44466__$1;
(statearr_44486_47164[(1)] = (5));

} else {
var statearr_44487_47165 = state_44466__$1;
(statearr_44487_47165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (13))){
var state_44466__$1 = state_44466;
var statearr_44488_47166 = state_44466__$1;
(statearr_44488_47166[(2)] = null);

(statearr_44488_47166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (6))){
var inst_44445 = (state_44466[(7)]);
var state_44466__$1 = state_44466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44466__$1,(11),to,inst_44445);
} else {
if((state_val_44467 === (3))){
var inst_44464 = (state_44466[(2)]);
var state_44466__$1 = state_44466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44466__$1,inst_44464);
} else {
if((state_val_44467 === (12))){
var state_44466__$1 = state_44466;
var statearr_44489_47168 = state_44466__$1;
(statearr_44489_47168[(2)] = null);

(statearr_44489_47168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (2))){
var state_44466__$1 = state_44466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44466__$1,(4),from);
} else {
if((state_val_44467 === (11))){
var inst_44455 = (state_44466[(2)]);
var state_44466__$1 = state_44466;
if(cljs.core.truth_(inst_44455)){
var statearr_44490_47170 = state_44466__$1;
(statearr_44490_47170[(1)] = (12));

} else {
var statearr_44491_47173 = state_44466__$1;
(statearr_44491_47173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (9))){
var state_44466__$1 = state_44466;
var statearr_44492_47174 = state_44466__$1;
(statearr_44492_47174[(2)] = null);

(statearr_44492_47174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (5))){
var state_44466__$1 = state_44466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44493_47175 = state_44466__$1;
(statearr_44493_47175[(1)] = (8));

} else {
var statearr_44494_47176 = state_44466__$1;
(statearr_44494_47176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (14))){
var inst_44460 = (state_44466[(2)]);
var state_44466__$1 = state_44466;
var statearr_44495_47177 = state_44466__$1;
(statearr_44495_47177[(2)] = inst_44460);

(statearr_44495_47177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (10))){
var inst_44452 = (state_44466[(2)]);
var state_44466__$1 = state_44466;
var statearr_44496_47180 = state_44466__$1;
(statearr_44496_47180[(2)] = inst_44452);

(statearr_44496_47180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (8))){
var inst_44449 = cljs.core.async.close_BANG_(to);
var state_44466__$1 = state_44466;
var statearr_44497_47181 = state_44466__$1;
(statearr_44497_47181[(2)] = inst_44449);

(statearr_44497_47181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_44505 = [null,null,null,null,null,null,null,null];
(statearr_44505[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_44505[(1)] = (1));

return statearr_44505;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_44466){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_44466);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e44506){var ex__43985__auto__ = e44506;
var statearr_44507_47188 = state_44466;
(statearr_44507_47188[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_44466[(4)]))){
var statearr_44510_47190 = state_44466;
(statearr_44510_47190[(1)] = cljs.core.first((state_44466[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47193 = state_44466;
state_44466 = G__47193;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_44466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_44466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_44516 = f__44130__auto__();
(statearr_44516[(6)] = c__44129__auto___47154);

return statearr_44516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44529){
var vec__44530 = p__44529;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44530,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44530,(1),null);
var job = vec__44530;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44129__auto___47200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_44541){
var state_val_44542 = (state_44541[(1)]);
if((state_val_44542 === (1))){
var state_44541__$1 = state_44541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44541__$1,(2),res,v);
} else {
if((state_val_44542 === (2))){
var inst_44535 = (state_44541[(2)]);
var inst_44539 = cljs.core.async.close_BANG_(res);
var state_44541__$1 = (function (){var statearr_44543 = state_44541;
(statearr_44543[(7)] = inst_44535);

return statearr_44543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44541__$1,inst_44539);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0 = (function (){
var statearr_44544 = [null,null,null,null,null,null,null,null];
(statearr_44544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__);

(statearr_44544[(1)] = (1));

return statearr_44544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1 = (function (state_44541){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_44541);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e44545){var ex__43985__auto__ = e44545;
var statearr_44546_47203 = state_44541;
(statearr_44546_47203[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_44541[(4)]))){
var statearr_44547_47204 = state_44541;
(statearr_44547_47204[(1)] = cljs.core.first((state_44541[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47207 = state_44541;
state_44541 = G__47207;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = function(state_44541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1.call(this,state_44541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_44548 = f__44130__auto__();
(statearr_44548[(6)] = c__44129__auto___47200);

return statearr_44548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44554){
var vec__44555 = p__44554;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44555,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44555,(1),null);
var job = vec__44555;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___47212 = n;
var __47213 = (0);
while(true){
if((__47213 < n__4607__auto___47212)){
var G__44560_47214 = type;
var G__44560_47215__$1 = (((G__44560_47214 instanceof cljs.core.Keyword))?G__44560_47214.fqn:null);
switch (G__44560_47215__$1) {
case "compute":
var c__44129__auto___47218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47213,c__44129__auto___47218,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async){
return (function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = ((function (__47213,c__44129__auto___47218,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async){
return (function (state_44573){
var state_val_44574 = (state_44573[(1)]);
if((state_val_44574 === (1))){
var state_44573__$1 = state_44573;
var statearr_44579_47219 = state_44573__$1;
(statearr_44579_47219[(2)] = null);

(statearr_44579_47219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44574 === (2))){
var state_44573__$1 = state_44573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44573__$1,(4),jobs);
} else {
if((state_val_44574 === (3))){
var inst_44571 = (state_44573[(2)]);
var state_44573__$1 = state_44573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44573__$1,inst_44571);
} else {
if((state_val_44574 === (4))){
var inst_44563 = (state_44573[(2)]);
var inst_44564 = process(inst_44563);
var state_44573__$1 = state_44573;
if(cljs.core.truth_(inst_44564)){
var statearr_44580_47223 = state_44573__$1;
(statearr_44580_47223[(1)] = (5));

} else {
var statearr_44587_47225 = state_44573__$1;
(statearr_44587_47225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44574 === (5))){
var state_44573__$1 = state_44573;
var statearr_44588_47226 = state_44573__$1;
(statearr_44588_47226[(2)] = null);

(statearr_44588_47226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44574 === (6))){
var state_44573__$1 = state_44573;
var statearr_44589_47227 = state_44573__$1;
(statearr_44589_47227[(2)] = null);

(statearr_44589_47227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44574 === (7))){
var inst_44569 = (state_44573[(2)]);
var state_44573__$1 = state_44573;
var statearr_44590_47229 = state_44573__$1;
(statearr_44590_47229[(2)] = inst_44569);

(statearr_44590_47229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47213,c__44129__auto___47218,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async))
;
return ((function (__47213,switch__43981__auto__,c__44129__auto___47218,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0 = (function (){
var statearr_44597 = [null,null,null,null,null,null,null];
(statearr_44597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__);

(statearr_44597[(1)] = (1));

return statearr_44597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1 = (function (state_44573){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_44573);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e44598){var ex__43985__auto__ = e44598;
var statearr_44599_47234 = state_44573;
(statearr_44599_47234[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_44573[(4)]))){
var statearr_44600_47235 = state_44573;
(statearr_44600_47235[(1)] = cljs.core.first((state_44573[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47242 = state_44573;
state_44573 = G__47242;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = function(state_44573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1.call(this,state_44573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__;
})()
;})(__47213,switch__43981__auto__,c__44129__auto___47218,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async))
})();
var state__44131__auto__ = (function (){var statearr_44601 = f__44130__auto__();
(statearr_44601[(6)] = c__44129__auto___47218);

return statearr_44601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
});})(__47213,c__44129__auto___47218,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async))
);


break;
case "async":
var c__44129__auto___47244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47213,c__44129__auto___47244,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async){
return (function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = ((function (__47213,c__44129__auto___47244,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async){
return (function (state_44626){
var state_val_44627 = (state_44626[(1)]);
if((state_val_44627 === (1))){
var state_44626__$1 = state_44626;
var statearr_44632_47245 = state_44626__$1;
(statearr_44632_47245[(2)] = null);

(statearr_44632_47245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44627 === (2))){
var state_44626__$1 = state_44626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44626__$1,(4),jobs);
} else {
if((state_val_44627 === (3))){
var inst_44615 = (state_44626[(2)]);
var state_44626__$1 = state_44626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44626__$1,inst_44615);
} else {
if((state_val_44627 === (4))){
var inst_44604 = (state_44626[(2)]);
var inst_44605 = async(inst_44604);
var state_44626__$1 = state_44626;
if(cljs.core.truth_(inst_44605)){
var statearr_44634_47250 = state_44626__$1;
(statearr_44634_47250[(1)] = (5));

} else {
var statearr_44635_47251 = state_44626__$1;
(statearr_44635_47251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44627 === (5))){
var state_44626__$1 = state_44626;
var statearr_44636_47252 = state_44626__$1;
(statearr_44636_47252[(2)] = null);

(statearr_44636_47252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44627 === (6))){
var state_44626__$1 = state_44626;
var statearr_44637_47254 = state_44626__$1;
(statearr_44637_47254[(2)] = null);

(statearr_44637_47254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44627 === (7))){
var inst_44610 = (state_44626[(2)]);
var state_44626__$1 = state_44626;
var statearr_44639_47255 = state_44626__$1;
(statearr_44639_47255[(2)] = inst_44610);

(statearr_44639_47255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47213,c__44129__auto___47244,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async))
;
return ((function (__47213,switch__43981__auto__,c__44129__auto___47244,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0 = (function (){
var statearr_44640 = [null,null,null,null,null,null,null];
(statearr_44640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__);

(statearr_44640[(1)] = (1));

return statearr_44640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1 = (function (state_44626){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_44626);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e44641){var ex__43985__auto__ = e44641;
var statearr_44642_47260 = state_44626;
(statearr_44642_47260[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_44626[(4)]))){
var statearr_44643_47261 = state_44626;
(statearr_44643_47261[(1)] = cljs.core.first((state_44626[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47266 = state_44626;
state_44626 = G__47266;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = function(state_44626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1.call(this,state_44626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__;
})()
;})(__47213,switch__43981__auto__,c__44129__auto___47244,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async))
})();
var state__44131__auto__ = (function (){var statearr_44648 = f__44130__auto__();
(statearr_44648[(6)] = c__44129__auto___47244);

return statearr_44648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
});})(__47213,c__44129__auto___47244,G__44560_47214,G__44560_47215__$1,n__4607__auto___47212,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44560_47215__$1)].join('')));

}

var G__47267 = (__47213 + (1));
__47213 = G__47267;
continue;
} else {
}
break;
}

var c__44129__auto___47268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_44673){
var state_val_44674 = (state_44673[(1)]);
if((state_val_44674 === (7))){
var inst_44669 = (state_44673[(2)]);
var state_44673__$1 = state_44673;
var statearr_44676_47272 = state_44673__$1;
(statearr_44676_47272[(2)] = inst_44669);

(statearr_44676_47272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44674 === (1))){
var state_44673__$1 = state_44673;
var statearr_44677_47275 = state_44673__$1;
(statearr_44677_47275[(2)] = null);

(statearr_44677_47275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44674 === (4))){
var inst_44651 = (state_44673[(7)]);
var inst_44651__$1 = (state_44673[(2)]);
var inst_44652 = (inst_44651__$1 == null);
var state_44673__$1 = (function (){var statearr_44679 = state_44673;
(statearr_44679[(7)] = inst_44651__$1);

return statearr_44679;
})();
if(cljs.core.truth_(inst_44652)){
var statearr_44682_47276 = state_44673__$1;
(statearr_44682_47276[(1)] = (5));

} else {
var statearr_44683_47277 = state_44673__$1;
(statearr_44683_47277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44674 === (6))){
var inst_44651 = (state_44673[(7)]);
var inst_44656 = (state_44673[(8)]);
var inst_44656__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44657 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44661 = [inst_44651,inst_44656__$1];
var inst_44662 = (new cljs.core.PersistentVector(null,2,(5),inst_44657,inst_44661,null));
var state_44673__$1 = (function (){var statearr_44685 = state_44673;
(statearr_44685[(8)] = inst_44656__$1);

return statearr_44685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44673__$1,(8),jobs,inst_44662);
} else {
if((state_val_44674 === (3))){
var inst_44671 = (state_44673[(2)]);
var state_44673__$1 = state_44673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44673__$1,inst_44671);
} else {
if((state_val_44674 === (2))){
var state_44673__$1 = state_44673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44673__$1,(4),from);
} else {
if((state_val_44674 === (9))){
var inst_44666 = (state_44673[(2)]);
var state_44673__$1 = (function (){var statearr_44690 = state_44673;
(statearr_44690[(9)] = inst_44666);

return statearr_44690;
})();
var statearr_44691_47281 = state_44673__$1;
(statearr_44691_47281[(2)] = null);

(statearr_44691_47281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44674 === (5))){
var inst_44654 = cljs.core.async.close_BANG_(jobs);
var state_44673__$1 = state_44673;
var statearr_44702_47282 = state_44673__$1;
(statearr_44702_47282[(2)] = inst_44654);

(statearr_44702_47282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44674 === (8))){
var inst_44656 = (state_44673[(8)]);
var inst_44664 = (state_44673[(2)]);
var state_44673__$1 = (function (){var statearr_44703 = state_44673;
(statearr_44703[(10)] = inst_44664);

return statearr_44703;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44673__$1,(9),results,inst_44656);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0 = (function (){
var statearr_44704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__);

(statearr_44704[(1)] = (1));

return statearr_44704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1 = (function (state_44673){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_44673);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e44707){var ex__43985__auto__ = e44707;
var statearr_44708_47291 = state_44673;
(statearr_44708_47291[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_44673[(4)]))){
var statearr_44709_47292 = state_44673;
(statearr_44709_47292[(1)] = cljs.core.first((state_44673[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47296 = state_44673;
state_44673 = G__47296;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = function(state_44673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1.call(this,state_44673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_44712 = f__44130__auto__();
(statearr_44712[(6)] = c__44129__auto___47268);

return statearr_44712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


var c__44129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_44754){
var state_val_44755 = (state_44754[(1)]);
if((state_val_44755 === (7))){
var inst_44750 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44771_47301 = state_44754__$1;
(statearr_44771_47301[(2)] = inst_44750);

(statearr_44771_47301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (20))){
var state_44754__$1 = state_44754;
var statearr_44773_47302 = state_44754__$1;
(statearr_44773_47302[(2)] = null);

(statearr_44773_47302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (1))){
var state_44754__$1 = state_44754;
var statearr_44775_47307 = state_44754__$1;
(statearr_44775_47307[(2)] = null);

(statearr_44775_47307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (4))){
var inst_44716 = (state_44754[(7)]);
var inst_44716__$1 = (state_44754[(2)]);
var inst_44717 = (inst_44716__$1 == null);
var state_44754__$1 = (function (){var statearr_44778 = state_44754;
(statearr_44778[(7)] = inst_44716__$1);

return statearr_44778;
})();
if(cljs.core.truth_(inst_44717)){
var statearr_44779_47308 = state_44754__$1;
(statearr_44779_47308[(1)] = (5));

} else {
var statearr_44780_47309 = state_44754__$1;
(statearr_44780_47309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (15))){
var inst_44729 = (state_44754[(8)]);
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44754__$1,(18),to,inst_44729);
} else {
if((state_val_44755 === (21))){
var inst_44745 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44782_47314 = state_44754__$1;
(statearr_44782_47314[(2)] = inst_44745);

(statearr_44782_47314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (13))){
var inst_44747 = (state_44754[(2)]);
var state_44754__$1 = (function (){var statearr_44783 = state_44754;
(statearr_44783[(9)] = inst_44747);

return statearr_44783;
})();
var statearr_44785_47318 = state_44754__$1;
(statearr_44785_47318[(2)] = null);

(statearr_44785_47318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (6))){
var inst_44716 = (state_44754[(7)]);
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44754__$1,(11),inst_44716);
} else {
if((state_val_44755 === (17))){
var inst_44740 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
if(cljs.core.truth_(inst_44740)){
var statearr_44788_47319 = state_44754__$1;
(statearr_44788_47319[(1)] = (19));

} else {
var statearr_44789_47320 = state_44754__$1;
(statearr_44789_47320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (3))){
var inst_44752 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44754__$1,inst_44752);
} else {
if((state_val_44755 === (12))){
var inst_44726 = (state_44754[(10)]);
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44754__$1,(14),inst_44726);
} else {
if((state_val_44755 === (2))){
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44754__$1,(4),results);
} else {
if((state_val_44755 === (19))){
var state_44754__$1 = state_44754;
var statearr_44795_47325 = state_44754__$1;
(statearr_44795_47325[(2)] = null);

(statearr_44795_47325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (11))){
var inst_44726 = (state_44754[(2)]);
var state_44754__$1 = (function (){var statearr_44796 = state_44754;
(statearr_44796[(10)] = inst_44726);

return statearr_44796;
})();
var statearr_44797_47329 = state_44754__$1;
(statearr_44797_47329[(2)] = null);

(statearr_44797_47329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (9))){
var state_44754__$1 = state_44754;
var statearr_44798_47330 = state_44754__$1;
(statearr_44798_47330[(2)] = null);

(statearr_44798_47330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (5))){
var state_44754__$1 = state_44754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44801_47334 = state_44754__$1;
(statearr_44801_47334[(1)] = (8));

} else {
var statearr_44803_47335 = state_44754__$1;
(statearr_44803_47335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (14))){
var inst_44729 = (state_44754[(8)]);
var inst_44729__$1 = (state_44754[(2)]);
var inst_44732 = (inst_44729__$1 == null);
var inst_44733 = cljs.core.not(inst_44732);
var state_44754__$1 = (function (){var statearr_44806 = state_44754;
(statearr_44806[(8)] = inst_44729__$1);

return statearr_44806;
})();
if(inst_44733){
var statearr_44807_47337 = state_44754__$1;
(statearr_44807_47337[(1)] = (15));

} else {
var statearr_44808_47338 = state_44754__$1;
(statearr_44808_47338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (16))){
var state_44754__$1 = state_44754;
var statearr_44817_47339 = state_44754__$1;
(statearr_44817_47339[(2)] = false);

(statearr_44817_47339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (10))){
var inst_44723 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44819_47341 = state_44754__$1;
(statearr_44819_47341[(2)] = inst_44723);

(statearr_44819_47341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (18))){
var inst_44737 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44823_47342 = state_44754__$1;
(statearr_44823_47342[(2)] = inst_44737);

(statearr_44823_47342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (8))){
var inst_44720 = cljs.core.async.close_BANG_(to);
var state_44754__$1 = state_44754;
var statearr_44825_47343 = state_44754__$1;
(statearr_44825_47343[(2)] = inst_44720);

(statearr_44825_47343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0 = (function (){
var statearr_44827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__);

(statearr_44827[(1)] = (1));

return statearr_44827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1 = (function (state_44754){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_44754);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e44828){var ex__43985__auto__ = e44828;
var statearr_44830_47345 = state_44754;
(statearr_44830_47345[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_44754[(4)]))){
var statearr_44832_47346 = state_44754;
(statearr_44832_47346[(1)] = cljs.core.first((state_44754[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47347 = state_44754;
state_44754 = G__47347;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__ = function(state_44754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1.call(this,state_44754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_44837 = f__44130__auto__();
(statearr_44837[(6)] = c__44129__auto__);

return statearr_44837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));

return c__44129__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44844 = arguments.length;
switch (G__44844) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44855 = arguments.length;
switch (G__44855) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44885 = arguments.length;
switch (G__44885) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44129__auto___47363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_44921){
var state_val_44922 = (state_44921[(1)]);
if((state_val_44922 === (7))){
var inst_44917 = (state_44921[(2)]);
var state_44921__$1 = state_44921;
var statearr_44926_47366 = state_44921__$1;
(statearr_44926_47366[(2)] = inst_44917);

(statearr_44926_47366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (1))){
var state_44921__$1 = state_44921;
var statearr_44927_47369 = state_44921__$1;
(statearr_44927_47369[(2)] = null);

(statearr_44927_47369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (4))){
var inst_44896 = (state_44921[(7)]);
var inst_44896__$1 = (state_44921[(2)]);
var inst_44897 = (inst_44896__$1 == null);
var state_44921__$1 = (function (){var statearr_44933 = state_44921;
(statearr_44933[(7)] = inst_44896__$1);

return statearr_44933;
})();
if(cljs.core.truth_(inst_44897)){
var statearr_44935_47375 = state_44921__$1;
(statearr_44935_47375[(1)] = (5));

} else {
var statearr_44936_47376 = state_44921__$1;
(statearr_44936_47376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (13))){
var state_44921__$1 = state_44921;
var statearr_44937_47378 = state_44921__$1;
(statearr_44937_47378[(2)] = null);

(statearr_44937_47378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (6))){
var inst_44896 = (state_44921[(7)]);
var inst_44903 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44896) : p.call(null,inst_44896));
var state_44921__$1 = state_44921;
if(cljs.core.truth_(inst_44903)){
var statearr_44946_47379 = state_44921__$1;
(statearr_44946_47379[(1)] = (9));

} else {
var statearr_44947_47385 = state_44921__$1;
(statearr_44947_47385[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (3))){
var inst_44919 = (state_44921[(2)]);
var state_44921__$1 = state_44921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44921__$1,inst_44919);
} else {
if((state_val_44922 === (12))){
var state_44921__$1 = state_44921;
var statearr_44949_47387 = state_44921__$1;
(statearr_44949_47387[(2)] = null);

(statearr_44949_47387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (2))){
var state_44921__$1 = state_44921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44921__$1,(4),ch);
} else {
if((state_val_44922 === (11))){
var inst_44896 = (state_44921[(7)]);
var inst_44907 = (state_44921[(2)]);
var state_44921__$1 = state_44921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44921__$1,(8),inst_44907,inst_44896);
} else {
if((state_val_44922 === (9))){
var state_44921__$1 = state_44921;
var statearr_44955_47388 = state_44921__$1;
(statearr_44955_47388[(2)] = tc);

(statearr_44955_47388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (5))){
var inst_44899 = cljs.core.async.close_BANG_(tc);
var inst_44900 = cljs.core.async.close_BANG_(fc);
var state_44921__$1 = (function (){var statearr_44956 = state_44921;
(statearr_44956[(8)] = inst_44899);

return statearr_44956;
})();
var statearr_44957_47390 = state_44921__$1;
(statearr_44957_47390[(2)] = inst_44900);

(statearr_44957_47390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (14))){
var inst_44915 = (state_44921[(2)]);
var state_44921__$1 = state_44921;
var statearr_44959_47391 = state_44921__$1;
(statearr_44959_47391[(2)] = inst_44915);

(statearr_44959_47391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (10))){
var state_44921__$1 = state_44921;
var statearr_44960_47392 = state_44921__$1;
(statearr_44960_47392[(2)] = fc);

(statearr_44960_47392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44922 === (8))){
var inst_44909 = (state_44921[(2)]);
var state_44921__$1 = state_44921;
if(cljs.core.truth_(inst_44909)){
var statearr_44963_47394 = state_44921__$1;
(statearr_44963_47394[(1)] = (12));

} else {
var statearr_44964_47398 = state_44921__$1;
(statearr_44964_47398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_44968 = [null,null,null,null,null,null,null,null,null];
(statearr_44968[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_44968[(1)] = (1));

return statearr_44968;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_44921){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_44921);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e44969){var ex__43985__auto__ = e44969;
var statearr_44970_47399 = state_44921;
(statearr_44970_47399[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_44921[(4)]))){
var statearr_44976_47402 = state_44921;
(statearr_44976_47402[(1)] = cljs.core.first((state_44921[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47406 = state_44921;
state_44921 = G__47406;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_44921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_44921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_44980 = f__44130__auto__();
(statearr_44980[(6)] = c__44129__auto___47363);

return statearr_44980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_45010){
var state_val_45011 = (state_45010[(1)]);
if((state_val_45011 === (7))){
var inst_45004 = (state_45010[(2)]);
var state_45010__$1 = state_45010;
var statearr_45014_47420 = state_45010__$1;
(statearr_45014_47420[(2)] = inst_45004);

(statearr_45014_47420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45011 === (1))){
var inst_44987 = init;
var inst_44988 = inst_44987;
var state_45010__$1 = (function (){var statearr_45015 = state_45010;
(statearr_45015[(7)] = inst_44988);

return statearr_45015;
})();
var statearr_45016_47424 = state_45010__$1;
(statearr_45016_47424[(2)] = null);

(statearr_45016_47424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45011 === (4))){
var inst_44991 = (state_45010[(8)]);
var inst_44991__$1 = (state_45010[(2)]);
var inst_44992 = (inst_44991__$1 == null);
var state_45010__$1 = (function (){var statearr_45018 = state_45010;
(statearr_45018[(8)] = inst_44991__$1);

return statearr_45018;
})();
if(cljs.core.truth_(inst_44992)){
var statearr_45019_47425 = state_45010__$1;
(statearr_45019_47425[(1)] = (5));

} else {
var statearr_45021_47426 = state_45010__$1;
(statearr_45021_47426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45011 === (6))){
var inst_44995 = (state_45010[(9)]);
var inst_44988 = (state_45010[(7)]);
var inst_44991 = (state_45010[(8)]);
var inst_44995__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44988,inst_44991) : f.call(null,inst_44988,inst_44991));
var inst_44996 = cljs.core.reduced_QMARK_(inst_44995__$1);
var state_45010__$1 = (function (){var statearr_45023 = state_45010;
(statearr_45023[(9)] = inst_44995__$1);

return statearr_45023;
})();
if(inst_44996){
var statearr_45024_47429 = state_45010__$1;
(statearr_45024_47429[(1)] = (8));

} else {
var statearr_45025_47430 = state_45010__$1;
(statearr_45025_47430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45011 === (3))){
var inst_45006 = (state_45010[(2)]);
var state_45010__$1 = state_45010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45010__$1,inst_45006);
} else {
if((state_val_45011 === (2))){
var state_45010__$1 = state_45010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45010__$1,(4),ch);
} else {
if((state_val_45011 === (9))){
var inst_44995 = (state_45010[(9)]);
var inst_44988 = inst_44995;
var state_45010__$1 = (function (){var statearr_45029 = state_45010;
(statearr_45029[(7)] = inst_44988);

return statearr_45029;
})();
var statearr_45031_47439 = state_45010__$1;
(statearr_45031_47439[(2)] = null);

(statearr_45031_47439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45011 === (5))){
var inst_44988 = (state_45010[(7)]);
var state_45010__$1 = state_45010;
var statearr_45032_47442 = state_45010__$1;
(statearr_45032_47442[(2)] = inst_44988);

(statearr_45032_47442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45011 === (10))){
var inst_45002 = (state_45010[(2)]);
var state_45010__$1 = state_45010;
var statearr_45033_47443 = state_45010__$1;
(statearr_45033_47443[(2)] = inst_45002);

(statearr_45033_47443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45011 === (8))){
var inst_44995 = (state_45010[(9)]);
var inst_44998 = cljs.core.deref(inst_44995);
var state_45010__$1 = state_45010;
var statearr_45034_47444 = state_45010__$1;
(statearr_45034_47444[(2)] = inst_44998);

(statearr_45034_47444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43982__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43982__auto____0 = (function (){
var statearr_45041 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45041[(0)] = cljs$core$async$reduce_$_state_machine__43982__auto__);

(statearr_45041[(1)] = (1));

return statearr_45041;
});
var cljs$core$async$reduce_$_state_machine__43982__auto____1 = (function (state_45010){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_45010);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e45042){var ex__43985__auto__ = e45042;
var statearr_45051_47445 = state_45010;
(statearr_45051_47445[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_45010[(4)]))){
var statearr_45053_47446 = state_45010;
(statearr_45053_47446[(1)] = cljs.core.first((state_45010[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47447 = state_45010;
state_45010 = G__47447;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43982__auto__ = function(state_45010){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43982__auto____1.call(this,state_45010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43982__auto____0;
cljs$core$async$reduce_$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43982__auto____1;
return cljs$core$async$reduce_$_state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_45062 = f__44130__auto__();
(statearr_45062[(6)] = c__44129__auto__);

return statearr_45062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));

return c__44129__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_45071){
var state_val_45072 = (state_45071[(1)]);
if((state_val_45072 === (1))){
var inst_45066 = cljs.core.async.reduce(f__$1,init,ch);
var state_45071__$1 = state_45071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45071__$1,(2),inst_45066);
} else {
if((state_val_45072 === (2))){
var inst_45068 = (state_45071[(2)]);
var inst_45069 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45068) : f__$1.call(null,inst_45068));
var state_45071__$1 = state_45071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45071__$1,inst_45069);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43982__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43982__auto____0 = (function (){
var statearr_45084 = [null,null,null,null,null,null,null];
(statearr_45084[(0)] = cljs$core$async$transduce_$_state_machine__43982__auto__);

(statearr_45084[(1)] = (1));

return statearr_45084;
});
var cljs$core$async$transduce_$_state_machine__43982__auto____1 = (function (state_45071){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_45071);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e45085){var ex__43985__auto__ = e45085;
var statearr_45086_47456 = state_45071;
(statearr_45086_47456[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_45071[(4)]))){
var statearr_45087_47457 = state_45071;
(statearr_45087_47457[(1)] = cljs.core.first((state_45071[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47458 = state_45071;
state_45071 = G__47458;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43982__auto__ = function(state_45071){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43982__auto____1.call(this,state_45071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43982__auto____0;
cljs$core$async$transduce_$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43982__auto____1;
return cljs$core$async$transduce_$_state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_45088 = f__44130__auto__();
(statearr_45088[(6)] = c__44129__auto__);

return statearr_45088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));

return c__44129__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45090 = arguments.length;
switch (G__45090) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_45137){
var state_val_45138 = (state_45137[(1)]);
if((state_val_45138 === (7))){
var inst_45102 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
var statearr_45157_47469 = state_45137__$1;
(statearr_45157_47469[(2)] = inst_45102);

(statearr_45157_47469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (1))){
var inst_45091 = cljs.core.seq(coll);
var inst_45092 = inst_45091;
var state_45137__$1 = (function (){var statearr_45158 = state_45137;
(statearr_45158[(7)] = inst_45092);

return statearr_45158;
})();
var statearr_45159_47470 = state_45137__$1;
(statearr_45159_47470[(2)] = null);

(statearr_45159_47470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (4))){
var inst_45092 = (state_45137[(7)]);
var inst_45100 = cljs.core.first(inst_45092);
var state_45137__$1 = state_45137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45137__$1,(7),ch,inst_45100);
} else {
if((state_val_45138 === (13))){
var inst_45115 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
var statearr_45160_47474 = state_45137__$1;
(statearr_45160_47474[(2)] = inst_45115);

(statearr_45160_47474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (6))){
var inst_45105 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
if(cljs.core.truth_(inst_45105)){
var statearr_45161_47477 = state_45137__$1;
(statearr_45161_47477[(1)] = (8));

} else {
var statearr_45162_47479 = state_45137__$1;
(statearr_45162_47479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (3))){
var inst_45120 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45137__$1,inst_45120);
} else {
if((state_val_45138 === (12))){
var state_45137__$1 = state_45137;
var statearr_45164_47481 = state_45137__$1;
(statearr_45164_47481[(2)] = null);

(statearr_45164_47481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (2))){
var inst_45092 = (state_45137[(7)]);
var state_45137__$1 = state_45137;
if(cljs.core.truth_(inst_45092)){
var statearr_45167_47485 = state_45137__$1;
(statearr_45167_47485[(1)] = (4));

} else {
var statearr_45169_47486 = state_45137__$1;
(statearr_45169_47486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (11))){
var inst_45112 = cljs.core.async.close_BANG_(ch);
var state_45137__$1 = state_45137;
var statearr_45171_47487 = state_45137__$1;
(statearr_45171_47487[(2)] = inst_45112);

(statearr_45171_47487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (9))){
var state_45137__$1 = state_45137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45172_47493 = state_45137__$1;
(statearr_45172_47493[(1)] = (11));

} else {
var statearr_45173_47495 = state_45137__$1;
(statearr_45173_47495[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (5))){
var inst_45092 = (state_45137[(7)]);
var state_45137__$1 = state_45137;
var statearr_45174_47496 = state_45137__$1;
(statearr_45174_47496[(2)] = inst_45092);

(statearr_45174_47496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (10))){
var inst_45117 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
var statearr_45175_47500 = state_45137__$1;
(statearr_45175_47500[(2)] = inst_45117);

(statearr_45175_47500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (8))){
var inst_45092 = (state_45137[(7)]);
var inst_45107 = cljs.core.next(inst_45092);
var inst_45092__$1 = inst_45107;
var state_45137__$1 = (function (){var statearr_45178 = state_45137;
(statearr_45178[(7)] = inst_45092__$1);

return statearr_45178;
})();
var statearr_45179_47505 = state_45137__$1;
(statearr_45179_47505[(2)] = null);

(statearr_45179_47505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_45180 = [null,null,null,null,null,null,null,null];
(statearr_45180[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_45180[(1)] = (1));

return statearr_45180;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_45137){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_45137);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e45181){var ex__43985__auto__ = e45181;
var statearr_45182_47510 = state_45137;
(statearr_45182_47510[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_45137[(4)]))){
var statearr_45183_47515 = state_45137;
(statearr_45183_47515[(1)] = cljs.core.first((state_45137[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47517 = state_45137;
state_45137 = G__47517;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_45137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_45137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_45184 = f__44130__auto__();
(statearr_45184[(6)] = c__44129__auto__);

return statearr_45184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));

return c__44129__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45196 = arguments.length;
switch (G__45196) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47528 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47528(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47533 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47533(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47538 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47538(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47543 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47543(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45295 = (function (ch,cs,meta45296){
this.ch = ch;
this.cs = cs;
this.meta45296 = meta45296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45297,meta45296__$1){
var self__ = this;
var _45297__$1 = this;
return (new cljs.core.async.t_cljs$core$async45295(self__.ch,self__.cs,meta45296__$1));
}));

(cljs.core.async.t_cljs$core$async45295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45297){
var self__ = this;
var _45297__$1 = this;
return self__.meta45296;
}));

(cljs.core.async.t_cljs$core$async45295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45295.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45295.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45295.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45295.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45296","meta45296",2042045810,null)], null);
}));

(cljs.core.async.t_cljs$core$async45295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45295");

(cljs.core.async.t_cljs$core$async45295.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async45295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45295.
 */
cljs.core.async.__GT_t_cljs$core$async45295 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45295(ch__$1,cs__$1,meta45296){
return (new cljs.core.async.t_cljs$core$async45295(ch__$1,cs__$1,meta45296));
});

}

return (new cljs.core.async.t_cljs$core$async45295(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44129__auto___47561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_45473){
var state_val_45474 = (state_45473[(1)]);
if((state_val_45474 === (7))){
var inst_45469 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45478_47563 = state_45473__$1;
(statearr_45478_47563[(2)] = inst_45469);

(statearr_45478_47563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (20))){
var inst_45364 = (state_45473[(7)]);
var inst_45376 = cljs.core.first(inst_45364);
var inst_45377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45376,(0),null);
var inst_45379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45376,(1),null);
var state_45473__$1 = (function (){var statearr_45483 = state_45473;
(statearr_45483[(8)] = inst_45377);

return statearr_45483;
})();
if(cljs.core.truth_(inst_45379)){
var statearr_45485_47566 = state_45473__$1;
(statearr_45485_47566[(1)] = (22));

} else {
var statearr_45486_47568 = state_45473__$1;
(statearr_45486_47568[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (27))){
var inst_45324 = (state_45473[(9)]);
var inst_45419 = (state_45473[(10)]);
var inst_45414 = (state_45473[(11)]);
var inst_45412 = (state_45473[(12)]);
var inst_45419__$1 = cljs.core._nth(inst_45412,inst_45414);
var inst_45420 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45419__$1,inst_45324,done);
var state_45473__$1 = (function (){var statearr_45487 = state_45473;
(statearr_45487[(10)] = inst_45419__$1);

return statearr_45487;
})();
if(cljs.core.truth_(inst_45420)){
var statearr_45488_47576 = state_45473__$1;
(statearr_45488_47576[(1)] = (30));

} else {
var statearr_45489_47577 = state_45473__$1;
(statearr_45489_47577[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (1))){
var state_45473__$1 = state_45473;
var statearr_45490_47578 = state_45473__$1;
(statearr_45490_47578[(2)] = null);

(statearr_45490_47578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (24))){
var inst_45364 = (state_45473[(7)]);
var inst_45384 = (state_45473[(2)]);
var inst_45389 = cljs.core.next(inst_45364);
var inst_45336 = inst_45389;
var inst_45337 = null;
var inst_45338 = (0);
var inst_45339 = (0);
var state_45473__$1 = (function (){var statearr_45493 = state_45473;
(statearr_45493[(13)] = inst_45339);

(statearr_45493[(14)] = inst_45337);

(statearr_45493[(15)] = inst_45336);

(statearr_45493[(16)] = inst_45338);

(statearr_45493[(17)] = inst_45384);

return statearr_45493;
})();
var statearr_45499_47584 = state_45473__$1;
(statearr_45499_47584[(2)] = null);

(statearr_45499_47584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (39))){
var state_45473__$1 = state_45473;
var statearr_45506_47587 = state_45473__$1;
(statearr_45506_47587[(2)] = null);

(statearr_45506_47587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (4))){
var inst_45324 = (state_45473[(9)]);
var inst_45324__$1 = (state_45473[(2)]);
var inst_45326 = (inst_45324__$1 == null);
var state_45473__$1 = (function (){var statearr_45507 = state_45473;
(statearr_45507[(9)] = inst_45324__$1);

return statearr_45507;
})();
if(cljs.core.truth_(inst_45326)){
var statearr_45508_47589 = state_45473__$1;
(statearr_45508_47589[(1)] = (5));

} else {
var statearr_45509_47590 = state_45473__$1;
(statearr_45509_47590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (15))){
var inst_45339 = (state_45473[(13)]);
var inst_45337 = (state_45473[(14)]);
var inst_45336 = (state_45473[(15)]);
var inst_45338 = (state_45473[(16)]);
var inst_45360 = (state_45473[(2)]);
var inst_45361 = (inst_45339 + (1));
var tmp45503 = inst_45337;
var tmp45504 = inst_45336;
var tmp45505 = inst_45338;
var inst_45336__$1 = tmp45504;
var inst_45337__$1 = tmp45503;
var inst_45338__$1 = tmp45505;
var inst_45339__$1 = inst_45361;
var state_45473__$1 = (function (){var statearr_45515 = state_45473;
(statearr_45515[(13)] = inst_45339__$1);

(statearr_45515[(14)] = inst_45337__$1);

(statearr_45515[(15)] = inst_45336__$1);

(statearr_45515[(16)] = inst_45338__$1);

(statearr_45515[(18)] = inst_45360);

return statearr_45515;
})();
var statearr_45516_47600 = state_45473__$1;
(statearr_45516_47600[(2)] = null);

(statearr_45516_47600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (21))){
var inst_45392 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45521_47602 = state_45473__$1;
(statearr_45521_47602[(2)] = inst_45392);

(statearr_45521_47602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (31))){
var inst_45419 = (state_45473[(10)]);
var inst_45423 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45419);
var state_45473__$1 = state_45473;
var statearr_45523_47603 = state_45473__$1;
(statearr_45523_47603[(2)] = inst_45423);

(statearr_45523_47603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (32))){
var inst_45414 = (state_45473[(11)]);
var inst_45413 = (state_45473[(19)]);
var inst_45411 = (state_45473[(20)]);
var inst_45412 = (state_45473[(12)]);
var inst_45425 = (state_45473[(2)]);
var inst_45427 = (inst_45414 + (1));
var tmp45517 = inst_45413;
var tmp45518 = inst_45411;
var tmp45519 = inst_45412;
var inst_45411__$1 = tmp45518;
var inst_45412__$1 = tmp45519;
var inst_45413__$1 = tmp45517;
var inst_45414__$1 = inst_45427;
var state_45473__$1 = (function (){var statearr_45526 = state_45473;
(statearr_45526[(21)] = inst_45425);

(statearr_45526[(11)] = inst_45414__$1);

(statearr_45526[(19)] = inst_45413__$1);

(statearr_45526[(20)] = inst_45411__$1);

(statearr_45526[(12)] = inst_45412__$1);

return statearr_45526;
})();
var statearr_45527_47608 = state_45473__$1;
(statearr_45527_47608[(2)] = null);

(statearr_45527_47608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (40))){
var inst_45441 = (state_45473[(22)]);
var inst_45446 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45441);
var state_45473__$1 = state_45473;
var statearr_45529_47610 = state_45473__$1;
(statearr_45529_47610[(2)] = inst_45446);

(statearr_45529_47610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (33))){
var inst_45431 = (state_45473[(23)]);
var inst_45433 = cljs.core.chunked_seq_QMARK_(inst_45431);
var state_45473__$1 = state_45473;
if(inst_45433){
var statearr_45530_47611 = state_45473__$1;
(statearr_45530_47611[(1)] = (36));

} else {
var statearr_45534_47613 = state_45473__$1;
(statearr_45534_47613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (13))){
var inst_45350 = (state_45473[(24)]);
var inst_45357 = cljs.core.async.close_BANG_(inst_45350);
var state_45473__$1 = state_45473;
var statearr_45535_47616 = state_45473__$1;
(statearr_45535_47616[(2)] = inst_45357);

(statearr_45535_47616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (22))){
var inst_45377 = (state_45473[(8)]);
var inst_45381 = cljs.core.async.close_BANG_(inst_45377);
var state_45473__$1 = state_45473;
var statearr_45536_47621 = state_45473__$1;
(statearr_45536_47621[(2)] = inst_45381);

(statearr_45536_47621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (36))){
var inst_45431 = (state_45473[(23)]);
var inst_45435 = cljs.core.chunk_first(inst_45431);
var inst_45436 = cljs.core.chunk_rest(inst_45431);
var inst_45437 = cljs.core.count(inst_45435);
var inst_45411 = inst_45436;
var inst_45412 = inst_45435;
var inst_45413 = inst_45437;
var inst_45414 = (0);
var state_45473__$1 = (function (){var statearr_45537 = state_45473;
(statearr_45537[(11)] = inst_45414);

(statearr_45537[(19)] = inst_45413);

(statearr_45537[(20)] = inst_45411);

(statearr_45537[(12)] = inst_45412);

return statearr_45537;
})();
var statearr_45538_47627 = state_45473__$1;
(statearr_45538_47627[(2)] = null);

(statearr_45538_47627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (41))){
var inst_45431 = (state_45473[(23)]);
var inst_45448 = (state_45473[(2)]);
var inst_45449 = cljs.core.next(inst_45431);
var inst_45411 = inst_45449;
var inst_45412 = null;
var inst_45413 = (0);
var inst_45414 = (0);
var state_45473__$1 = (function (){var statearr_45539 = state_45473;
(statearr_45539[(11)] = inst_45414);

(statearr_45539[(19)] = inst_45413);

(statearr_45539[(25)] = inst_45448);

(statearr_45539[(20)] = inst_45411);

(statearr_45539[(12)] = inst_45412);

return statearr_45539;
})();
var statearr_45540_47635 = state_45473__$1;
(statearr_45540_47635[(2)] = null);

(statearr_45540_47635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (43))){
var state_45473__$1 = state_45473;
var statearr_45541_47640 = state_45473__$1;
(statearr_45541_47640[(2)] = null);

(statearr_45541_47640[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (29))){
var inst_45457 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45543_47642 = state_45473__$1;
(statearr_45543_47642[(2)] = inst_45457);

(statearr_45543_47642[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (44))){
var inst_45466 = (state_45473[(2)]);
var state_45473__$1 = (function (){var statearr_45546 = state_45473;
(statearr_45546[(26)] = inst_45466);

return statearr_45546;
})();
var statearr_45548_47648 = state_45473__$1;
(statearr_45548_47648[(2)] = null);

(statearr_45548_47648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (6))){
var inst_45403 = (state_45473[(27)]);
var inst_45402 = cljs.core.deref(cs);
var inst_45403__$1 = cljs.core.keys(inst_45402);
var inst_45404 = cljs.core.count(inst_45403__$1);
var inst_45405 = cljs.core.reset_BANG_(dctr,inst_45404);
var inst_45410 = cljs.core.seq(inst_45403__$1);
var inst_45411 = inst_45410;
var inst_45412 = null;
var inst_45413 = (0);
var inst_45414 = (0);
var state_45473__$1 = (function (){var statearr_45551 = state_45473;
(statearr_45551[(27)] = inst_45403__$1);

(statearr_45551[(11)] = inst_45414);

(statearr_45551[(28)] = inst_45405);

(statearr_45551[(19)] = inst_45413);

(statearr_45551[(20)] = inst_45411);

(statearr_45551[(12)] = inst_45412);

return statearr_45551;
})();
var statearr_45552_47657 = state_45473__$1;
(statearr_45552_47657[(2)] = null);

(statearr_45552_47657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (28))){
var inst_45411 = (state_45473[(20)]);
var inst_45431 = (state_45473[(23)]);
var inst_45431__$1 = cljs.core.seq(inst_45411);
var state_45473__$1 = (function (){var statearr_45553 = state_45473;
(statearr_45553[(23)] = inst_45431__$1);

return statearr_45553;
})();
if(inst_45431__$1){
var statearr_45554_47661 = state_45473__$1;
(statearr_45554_47661[(1)] = (33));

} else {
var statearr_45555_47662 = state_45473__$1;
(statearr_45555_47662[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (25))){
var inst_45414 = (state_45473[(11)]);
var inst_45413 = (state_45473[(19)]);
var inst_45416 = (inst_45414 < inst_45413);
var inst_45417 = inst_45416;
var state_45473__$1 = state_45473;
if(cljs.core.truth_(inst_45417)){
var statearr_45556_47665 = state_45473__$1;
(statearr_45556_47665[(1)] = (27));

} else {
var statearr_45557_47666 = state_45473__$1;
(statearr_45557_47666[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (34))){
var state_45473__$1 = state_45473;
var statearr_45558_47667 = state_45473__$1;
(statearr_45558_47667[(2)] = null);

(statearr_45558_47667[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (17))){
var state_45473__$1 = state_45473;
var statearr_45560_47672 = state_45473__$1;
(statearr_45560_47672[(2)] = null);

(statearr_45560_47672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (3))){
var inst_45471 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45473__$1,inst_45471);
} else {
if((state_val_45474 === (12))){
var inst_45397 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45566_47677 = state_45473__$1;
(statearr_45566_47677[(2)] = inst_45397);

(statearr_45566_47677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (2))){
var state_45473__$1 = state_45473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45473__$1,(4),ch);
} else {
if((state_val_45474 === (23))){
var state_45473__$1 = state_45473;
var statearr_45569_47679 = state_45473__$1;
(statearr_45569_47679[(2)] = null);

(statearr_45569_47679[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (35))){
var inst_45455 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45571_47686 = state_45473__$1;
(statearr_45571_47686[(2)] = inst_45455);

(statearr_45571_47686[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (19))){
var inst_45364 = (state_45473[(7)]);
var inst_45368 = cljs.core.chunk_first(inst_45364);
var inst_45369 = cljs.core.chunk_rest(inst_45364);
var inst_45370 = cljs.core.count(inst_45368);
var inst_45336 = inst_45369;
var inst_45337 = inst_45368;
var inst_45338 = inst_45370;
var inst_45339 = (0);
var state_45473__$1 = (function (){var statearr_45573 = state_45473;
(statearr_45573[(13)] = inst_45339);

(statearr_45573[(14)] = inst_45337);

(statearr_45573[(15)] = inst_45336);

(statearr_45573[(16)] = inst_45338);

return statearr_45573;
})();
var statearr_45575_47688 = state_45473__$1;
(statearr_45575_47688[(2)] = null);

(statearr_45575_47688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (11))){
var inst_45364 = (state_45473[(7)]);
var inst_45336 = (state_45473[(15)]);
var inst_45364__$1 = cljs.core.seq(inst_45336);
var state_45473__$1 = (function (){var statearr_45576 = state_45473;
(statearr_45576[(7)] = inst_45364__$1);

return statearr_45576;
})();
if(inst_45364__$1){
var statearr_45577_47693 = state_45473__$1;
(statearr_45577_47693[(1)] = (16));

} else {
var statearr_45579_47694 = state_45473__$1;
(statearr_45579_47694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (9))){
var inst_45399 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45582_47696 = state_45473__$1;
(statearr_45582_47696[(2)] = inst_45399);

(statearr_45582_47696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (5))){
var inst_45334 = cljs.core.deref(cs);
var inst_45335 = cljs.core.seq(inst_45334);
var inst_45336 = inst_45335;
var inst_45337 = null;
var inst_45338 = (0);
var inst_45339 = (0);
var state_45473__$1 = (function (){var statearr_45587 = state_45473;
(statearr_45587[(13)] = inst_45339);

(statearr_45587[(14)] = inst_45337);

(statearr_45587[(15)] = inst_45336);

(statearr_45587[(16)] = inst_45338);

return statearr_45587;
})();
var statearr_45588_47699 = state_45473__$1;
(statearr_45588_47699[(2)] = null);

(statearr_45588_47699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (14))){
var state_45473__$1 = state_45473;
var statearr_45590_47702 = state_45473__$1;
(statearr_45590_47702[(2)] = null);

(statearr_45590_47702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (45))){
var inst_45463 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45594_47703 = state_45473__$1;
(statearr_45594_47703[(2)] = inst_45463);

(statearr_45594_47703[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (26))){
var inst_45403 = (state_45473[(27)]);
var inst_45459 = (state_45473[(2)]);
var inst_45460 = cljs.core.seq(inst_45403);
var state_45473__$1 = (function (){var statearr_45596 = state_45473;
(statearr_45596[(29)] = inst_45459);

return statearr_45596;
})();
if(inst_45460){
var statearr_45597_47709 = state_45473__$1;
(statearr_45597_47709[(1)] = (42));

} else {
var statearr_45601_47710 = state_45473__$1;
(statearr_45601_47710[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (16))){
var inst_45364 = (state_45473[(7)]);
var inst_45366 = cljs.core.chunked_seq_QMARK_(inst_45364);
var state_45473__$1 = state_45473;
if(inst_45366){
var statearr_45603_47714 = state_45473__$1;
(statearr_45603_47714[(1)] = (19));

} else {
var statearr_45604_47715 = state_45473__$1;
(statearr_45604_47715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (38))){
var inst_45452 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45606_47717 = state_45473__$1;
(statearr_45606_47717[(2)] = inst_45452);

(statearr_45606_47717[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (30))){
var state_45473__$1 = state_45473;
var statearr_45613_47718 = state_45473__$1;
(statearr_45613_47718[(2)] = null);

(statearr_45613_47718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (10))){
var inst_45339 = (state_45473[(13)]);
var inst_45337 = (state_45473[(14)]);
var inst_45349 = cljs.core._nth(inst_45337,inst_45339);
var inst_45350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45349,(0),null);
var inst_45351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45349,(1),null);
var state_45473__$1 = (function (){var statearr_45614 = state_45473;
(statearr_45614[(24)] = inst_45350);

return statearr_45614;
})();
if(cljs.core.truth_(inst_45351)){
var statearr_45615_47726 = state_45473__$1;
(statearr_45615_47726[(1)] = (13));

} else {
var statearr_45618_47727 = state_45473__$1;
(statearr_45618_47727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (18))){
var inst_45395 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45620_47730 = state_45473__$1;
(statearr_45620_47730[(2)] = inst_45395);

(statearr_45620_47730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (42))){
var state_45473__$1 = state_45473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45473__$1,(45),dchan);
} else {
if((state_val_45474 === (37))){
var inst_45324 = (state_45473[(9)]);
var inst_45441 = (state_45473[(22)]);
var inst_45431 = (state_45473[(23)]);
var inst_45441__$1 = cljs.core.first(inst_45431);
var inst_45443 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45441__$1,inst_45324,done);
var state_45473__$1 = (function (){var statearr_45624 = state_45473;
(statearr_45624[(22)] = inst_45441__$1);

return statearr_45624;
})();
if(cljs.core.truth_(inst_45443)){
var statearr_45625_47735 = state_45473__$1;
(statearr_45625_47735[(1)] = (39));

} else {
var statearr_45629_47737 = state_45473__$1;
(statearr_45629_47737[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (8))){
var inst_45339 = (state_45473[(13)]);
var inst_45338 = (state_45473[(16)]);
var inst_45341 = (inst_45339 < inst_45338);
var inst_45342 = inst_45341;
var state_45473__$1 = state_45473;
if(cljs.core.truth_(inst_45342)){
var statearr_45630_47740 = state_45473__$1;
(statearr_45630_47740[(1)] = (10));

} else {
var statearr_45631_47741 = state_45473__$1;
(statearr_45631_47741[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43982__auto__ = null;
var cljs$core$async$mult_$_state_machine__43982__auto____0 = (function (){
var statearr_45632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45632[(0)] = cljs$core$async$mult_$_state_machine__43982__auto__);

(statearr_45632[(1)] = (1));

return statearr_45632;
});
var cljs$core$async$mult_$_state_machine__43982__auto____1 = (function (state_45473){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_45473);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e45637){var ex__43985__auto__ = e45637;
var statearr_45638_47750 = state_45473;
(statearr_45638_47750[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_45473[(4)]))){
var statearr_45639_47752 = state_45473;
(statearr_45639_47752[(1)] = cljs.core.first((state_45473[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47754 = state_45473;
state_45473 = G__47754;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43982__auto__ = function(state_45473){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43982__auto____1.call(this,state_45473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43982__auto____0;
cljs$core$async$mult_$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43982__auto____1;
return cljs$core$async$mult_$_state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_45640 = f__44130__auto__();
(statearr_45640[(6)] = c__44129__auto___47561);

return statearr_45640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45644 = arguments.length;
switch (G__45644) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47764 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47764(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47769 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47769(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47775 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47775(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47780 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47780(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47784 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47784(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47795 = arguments.length;
var i__4731__auto___47796 = (0);
while(true){
if((i__4731__auto___47796 < len__4730__auto___47795)){
args__4736__auto__.push((arguments[i__4731__auto___47796]));

var G__47801 = (i__4731__auto___47796 + (1));
i__4731__auto___47796 = G__47801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45666){
var map__45669 = p__45666;
var map__45669__$1 = (((((!((map__45669 == null))))?(((((map__45669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45669):map__45669);
var opts = map__45669__$1;
var statearr_45672_47809 = state;
(statearr_45672_47809[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45676_47814 = state;
(statearr_45676_47814[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45677_47815 = state;
(statearr_45677_47815[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45662){
var G__45663 = cljs.core.first(seq45662);
var seq45662__$1 = cljs.core.next(seq45662);
var G__45664 = cljs.core.first(seq45662__$1);
var seq45662__$2 = cljs.core.next(seq45662__$1);
var G__45665 = cljs.core.first(seq45662__$2);
var seq45662__$3 = cljs.core.next(seq45662__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45663,G__45664,G__45665,seq45662__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45689 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45690){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45690 = meta45690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45691,meta45690__$1){
var self__ = this;
var _45691__$1 = this;
return (new cljs.core.async.t_cljs$core$async45689(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45690__$1));
}));

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45691){
var self__ = this;
var _45691__$1 = this;
return self__.meta45690;
}));

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45689.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45690","meta45690",-1213927427,null)], null);
}));

(cljs.core.async.t_cljs$core$async45689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45689");

(cljs.core.async.t_cljs$core$async45689.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async45689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45689.
 */
cljs.core.async.__GT_t_cljs$core$async45689 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45689(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45690){
return (new cljs.core.async.t_cljs$core$async45689(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45690));
});

}

return (new cljs.core.async.t_cljs$core$async45689(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44129__auto___47894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_45824){
var state_val_45826 = (state_45824[(1)]);
if((state_val_45826 === (7))){
var inst_45727 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
var statearr_45834_47902 = state_45824__$1;
(statearr_45834_47902[(2)] = inst_45727);

(statearr_45834_47902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (20))){
var inst_45739 = (state_45824[(7)]);
var state_45824__$1 = state_45824;
var statearr_45836_47905 = state_45824__$1;
(statearr_45836_47905[(2)] = inst_45739);

(statearr_45836_47905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (27))){
var state_45824__$1 = state_45824;
var statearr_45839_47908 = state_45824__$1;
(statearr_45839_47908[(2)] = null);

(statearr_45839_47908[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (1))){
var inst_45709 = (state_45824[(8)]);
var inst_45709__$1 = calc_state();
var inst_45713 = (inst_45709__$1 == null);
var inst_45714 = cljs.core.not(inst_45713);
var state_45824__$1 = (function (){var statearr_45840 = state_45824;
(statearr_45840[(8)] = inst_45709__$1);

return statearr_45840;
})();
if(inst_45714){
var statearr_45841_47919 = state_45824__$1;
(statearr_45841_47919[(1)] = (2));

} else {
var statearr_45846_47920 = state_45824__$1;
(statearr_45846_47920[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (24))){
var inst_45783 = (state_45824[(9)]);
var inst_45774 = (state_45824[(10)]);
var inst_45797 = (state_45824[(11)]);
var inst_45797__$1 = (inst_45774.cljs$core$IFn$_invoke$arity$1 ? inst_45774.cljs$core$IFn$_invoke$arity$1(inst_45783) : inst_45774.call(null,inst_45783));
var state_45824__$1 = (function (){var statearr_45848 = state_45824;
(statearr_45848[(11)] = inst_45797__$1);

return statearr_45848;
})();
if(cljs.core.truth_(inst_45797__$1)){
var statearr_45851_47925 = state_45824__$1;
(statearr_45851_47925[(1)] = (29));

} else {
var statearr_45852_47926 = state_45824__$1;
(statearr_45852_47926[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (4))){
var inst_45730 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
if(cljs.core.truth_(inst_45730)){
var statearr_45854_47935 = state_45824__$1;
(statearr_45854_47935[(1)] = (8));

} else {
var statearr_45856_47938 = state_45824__$1;
(statearr_45856_47938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (15))){
var inst_45767 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
if(cljs.core.truth_(inst_45767)){
var statearr_45858_47940 = state_45824__$1;
(statearr_45858_47940[(1)] = (19));

} else {
var statearr_45859_47941 = state_45824__$1;
(statearr_45859_47941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (21))){
var inst_45773 = (state_45824[(12)]);
var inst_45773__$1 = (state_45824[(2)]);
var inst_45774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45773__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45773__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45773__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45824__$1 = (function (){var statearr_45866 = state_45824;
(statearr_45866[(12)] = inst_45773__$1);

(statearr_45866[(13)] = inst_45775);

(statearr_45866[(10)] = inst_45774);

return statearr_45866;
})();
return cljs.core.async.ioc_alts_BANG_(state_45824__$1,(22),inst_45776);
} else {
if((state_val_45826 === (31))){
var inst_45806 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
if(cljs.core.truth_(inst_45806)){
var statearr_45870_47948 = state_45824__$1;
(statearr_45870_47948[(1)] = (32));

} else {
var statearr_45871_47949 = state_45824__$1;
(statearr_45871_47949[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (32))){
var inst_45782 = (state_45824[(14)]);
var state_45824__$1 = state_45824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45824__$1,(35),out,inst_45782);
} else {
if((state_val_45826 === (33))){
var inst_45773 = (state_45824[(12)]);
var inst_45739 = inst_45773;
var state_45824__$1 = (function (){var statearr_45875 = state_45824;
(statearr_45875[(7)] = inst_45739);

return statearr_45875;
})();
var statearr_45877_47956 = state_45824__$1;
(statearr_45877_47956[(2)] = null);

(statearr_45877_47956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (13))){
var inst_45739 = (state_45824[(7)]);
var inst_45755 = inst_45739.cljs$lang$protocol_mask$partition0$;
var inst_45756 = (inst_45755 & (64));
var inst_45758 = inst_45739.cljs$core$ISeq$;
var inst_45759 = (cljs.core.PROTOCOL_SENTINEL === inst_45758);
var inst_45760 = ((inst_45756) || (inst_45759));
var state_45824__$1 = state_45824;
if(cljs.core.truth_(inst_45760)){
var statearr_45882_47959 = state_45824__$1;
(statearr_45882_47959[(1)] = (16));

} else {
var statearr_45884_47960 = state_45824__$1;
(statearr_45884_47960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (22))){
var inst_45783 = (state_45824[(9)]);
var inst_45782 = (state_45824[(14)]);
var inst_45781 = (state_45824[(2)]);
var inst_45782__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45781,(0),null);
var inst_45783__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45781,(1),null);
var inst_45784 = (inst_45782__$1 == null);
var inst_45785 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45783__$1,change);
var inst_45786 = ((inst_45784) || (inst_45785));
var state_45824__$1 = (function (){var statearr_45887 = state_45824;
(statearr_45887[(9)] = inst_45783__$1);

(statearr_45887[(14)] = inst_45782__$1);

return statearr_45887;
})();
if(cljs.core.truth_(inst_45786)){
var statearr_45891_47965 = state_45824__$1;
(statearr_45891_47965[(1)] = (23));

} else {
var statearr_45892_47967 = state_45824__$1;
(statearr_45892_47967[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (36))){
var inst_45773 = (state_45824[(12)]);
var inst_45739 = inst_45773;
var state_45824__$1 = (function (){var statearr_45894 = state_45824;
(statearr_45894[(7)] = inst_45739);

return statearr_45894;
})();
var statearr_45895_47975 = state_45824__$1;
(statearr_45895_47975[(2)] = null);

(statearr_45895_47975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (29))){
var inst_45797 = (state_45824[(11)]);
var state_45824__$1 = state_45824;
var statearr_45897_47978 = state_45824__$1;
(statearr_45897_47978[(2)] = inst_45797);

(statearr_45897_47978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (6))){
var state_45824__$1 = state_45824;
var statearr_45900_47979 = state_45824__$1;
(statearr_45900_47979[(2)] = false);

(statearr_45900_47979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (28))){
var inst_45793 = (state_45824[(2)]);
var inst_45794 = calc_state();
var inst_45739 = inst_45794;
var state_45824__$1 = (function (){var statearr_45901 = state_45824;
(statearr_45901[(7)] = inst_45739);

(statearr_45901[(15)] = inst_45793);

return statearr_45901;
})();
var statearr_45902_47986 = state_45824__$1;
(statearr_45902_47986[(2)] = null);

(statearr_45902_47986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (25))){
var inst_45820 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
var statearr_45906_47988 = state_45824__$1;
(statearr_45906_47988[(2)] = inst_45820);

(statearr_45906_47988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (34))){
var inst_45818 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
var statearr_45908_47990 = state_45824__$1;
(statearr_45908_47990[(2)] = inst_45818);

(statearr_45908_47990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (17))){
var state_45824__$1 = state_45824;
var statearr_45910_47998 = state_45824__$1;
(statearr_45910_47998[(2)] = false);

(statearr_45910_47998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (3))){
var state_45824__$1 = state_45824;
var statearr_45915_48003 = state_45824__$1;
(statearr_45915_48003[(2)] = false);

(statearr_45915_48003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (12))){
var inst_45822 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45824__$1,inst_45822);
} else {
if((state_val_45826 === (2))){
var inst_45709 = (state_45824[(8)]);
var inst_45719 = inst_45709.cljs$lang$protocol_mask$partition0$;
var inst_45720 = (inst_45719 & (64));
var inst_45721 = inst_45709.cljs$core$ISeq$;
var inst_45722 = (cljs.core.PROTOCOL_SENTINEL === inst_45721);
var inst_45723 = ((inst_45720) || (inst_45722));
var state_45824__$1 = state_45824;
if(cljs.core.truth_(inst_45723)){
var statearr_45917_48012 = state_45824__$1;
(statearr_45917_48012[(1)] = (5));

} else {
var statearr_45918_48020 = state_45824__$1;
(statearr_45918_48020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (23))){
var inst_45782 = (state_45824[(14)]);
var inst_45788 = (inst_45782 == null);
var state_45824__$1 = state_45824;
if(cljs.core.truth_(inst_45788)){
var statearr_45919_48026 = state_45824__$1;
(statearr_45919_48026[(1)] = (26));

} else {
var statearr_45920_48027 = state_45824__$1;
(statearr_45920_48027[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (35))){
var inst_45809 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
if(cljs.core.truth_(inst_45809)){
var statearr_45921_48034 = state_45824__$1;
(statearr_45921_48034[(1)] = (36));

} else {
var statearr_45922_48036 = state_45824__$1;
(statearr_45922_48036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (19))){
var inst_45739 = (state_45824[(7)]);
var inst_45770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45739);
var state_45824__$1 = state_45824;
var statearr_45924_48038 = state_45824__$1;
(statearr_45924_48038[(2)] = inst_45770);

(statearr_45924_48038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (11))){
var inst_45739 = (state_45824[(7)]);
var inst_45751 = (inst_45739 == null);
var inst_45752 = cljs.core.not(inst_45751);
var state_45824__$1 = state_45824;
if(inst_45752){
var statearr_45925_48049 = state_45824__$1;
(statearr_45925_48049[(1)] = (13));

} else {
var statearr_45926_48050 = state_45824__$1;
(statearr_45926_48050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (9))){
var inst_45709 = (state_45824[(8)]);
var state_45824__$1 = state_45824;
var statearr_45927_48052 = state_45824__$1;
(statearr_45927_48052[(2)] = inst_45709);

(statearr_45927_48052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (5))){
var state_45824__$1 = state_45824;
var statearr_45931_48054 = state_45824__$1;
(statearr_45931_48054[(2)] = true);

(statearr_45931_48054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (14))){
var state_45824__$1 = state_45824;
var statearr_45932_48061 = state_45824__$1;
(statearr_45932_48061[(2)] = false);

(statearr_45932_48061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (26))){
var inst_45783 = (state_45824[(9)]);
var inst_45790 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45783);
var state_45824__$1 = state_45824;
var statearr_45933_48066 = state_45824__$1;
(statearr_45933_48066[(2)] = inst_45790);

(statearr_45933_48066[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (16))){
var state_45824__$1 = state_45824;
var statearr_45935_48072 = state_45824__$1;
(statearr_45935_48072[(2)] = true);

(statearr_45935_48072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (38))){
var inst_45814 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
var statearr_45937_48077 = state_45824__$1;
(statearr_45937_48077[(2)] = inst_45814);

(statearr_45937_48077[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (30))){
var inst_45783 = (state_45824[(9)]);
var inst_45775 = (state_45824[(13)]);
var inst_45774 = (state_45824[(10)]);
var inst_45800 = cljs.core.empty_QMARK_(inst_45774);
var inst_45802 = (inst_45775.cljs$core$IFn$_invoke$arity$1 ? inst_45775.cljs$core$IFn$_invoke$arity$1(inst_45783) : inst_45775.call(null,inst_45783));
var inst_45803 = cljs.core.not(inst_45802);
var inst_45804 = ((inst_45800) && (inst_45803));
var state_45824__$1 = state_45824;
var statearr_45943_48081 = state_45824__$1;
(statearr_45943_48081[(2)] = inst_45804);

(statearr_45943_48081[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (10))){
var inst_45709 = (state_45824[(8)]);
var inst_45735 = (state_45824[(2)]);
var inst_45736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45735,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45735,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45735,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45739 = inst_45709;
var state_45824__$1 = (function (){var statearr_45947 = state_45824;
(statearr_45947[(7)] = inst_45739);

(statearr_45947[(16)] = inst_45738);

(statearr_45947[(17)] = inst_45737);

(statearr_45947[(18)] = inst_45736);

return statearr_45947;
})();
var statearr_45948_48089 = state_45824__$1;
(statearr_45948_48089[(2)] = null);

(statearr_45948_48089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (18))){
var inst_45764 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
var statearr_45949_48093 = state_45824__$1;
(statearr_45949_48093[(2)] = inst_45764);

(statearr_45949_48093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (37))){
var state_45824__$1 = state_45824;
var statearr_45950_48096 = state_45824__$1;
(statearr_45950_48096[(2)] = null);

(statearr_45950_48096[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45826 === (8))){
var inst_45709 = (state_45824[(8)]);
var inst_45732 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45709);
var state_45824__$1 = state_45824;
var statearr_45953_48100 = state_45824__$1;
(statearr_45953_48100[(2)] = inst_45732);

(statearr_45953_48100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43982__auto__ = null;
var cljs$core$async$mix_$_state_machine__43982__auto____0 = (function (){
var statearr_45956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45956[(0)] = cljs$core$async$mix_$_state_machine__43982__auto__);

(statearr_45956[(1)] = (1));

return statearr_45956;
});
var cljs$core$async$mix_$_state_machine__43982__auto____1 = (function (state_45824){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_45824);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e45960){var ex__43985__auto__ = e45960;
var statearr_45961_48110 = state_45824;
(statearr_45961_48110[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_45824[(4)]))){
var statearr_45962_48111 = state_45824;
(statearr_45962_48111[(1)] = cljs.core.first((state_45824[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48112 = state_45824;
state_45824 = G__48112;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43982__auto__ = function(state_45824){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43982__auto____1.call(this,state_45824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43982__auto____0;
cljs$core$async$mix_$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43982__auto____1;
return cljs$core$async$mix_$_state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_45963 = f__44130__auto__();
(statearr_45963[(6)] = c__44129__auto___47894);

return statearr_45963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48121 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48121(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48132 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48132(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48139 = (function() {
var G__48140 = null;
var G__48140__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48140__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48140 = function(p,v){
switch(arguments.length){
case 1:
return G__48140__1.call(this,p);
case 2:
return G__48140__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48140.cljs$core$IFn$_invoke$arity$1 = G__48140__1;
G__48140.cljs$core$IFn$_invoke$arity$2 = G__48140__2;
return G__48140;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45995 = arguments.length;
switch (G__45995) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48139(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48139(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45999 = arguments.length;
switch (G__45999) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45996_SHARP_){
if(cljs.core.truth_((p1__45996_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45996_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45996_SHARP_.call(null,topic)))){
return p1__45996_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45996_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46003 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46004){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46004 = meta46004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46005,meta46004__$1){
var self__ = this;
var _46005__$1 = this;
return (new cljs.core.async.t_cljs$core$async46003(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46004__$1));
}));

(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46005){
var self__ = this;
var _46005__$1 = this;
return self__.meta46004;
}));

(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46004","meta46004",-647159536,null)], null);
}));

(cljs.core.async.t_cljs$core$async46003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46003");

(cljs.core.async.t_cljs$core$async46003.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46003.
 */
cljs.core.async.__GT_t_cljs$core$async46003 = (function cljs$core$async$__GT_t_cljs$core$async46003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46004){
return (new cljs.core.async.t_cljs$core$async46003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46004));
});

}

return (new cljs.core.async.t_cljs$core$async46003(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44129__auto___48192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46086){
var state_val_46087 = (state_46086[(1)]);
if((state_val_46087 === (7))){
var inst_46082 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
var statearr_46088_48194 = state_46086__$1;
(statearr_46088_48194[(2)] = inst_46082);

(statearr_46088_48194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (20))){
var state_46086__$1 = state_46086;
var statearr_46089_48197 = state_46086__$1;
(statearr_46089_48197[(2)] = null);

(statearr_46089_48197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (1))){
var state_46086__$1 = state_46086;
var statearr_46091_48200 = state_46086__$1;
(statearr_46091_48200[(2)] = null);

(statearr_46091_48200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (24))){
var inst_46065 = (state_46086[(7)]);
var inst_46074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46065);
var state_46086__$1 = state_46086;
var statearr_46093_48208 = state_46086__$1;
(statearr_46093_48208[(2)] = inst_46074);

(statearr_46093_48208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (4))){
var inst_46013 = (state_46086[(8)]);
var inst_46013__$1 = (state_46086[(2)]);
var inst_46014 = (inst_46013__$1 == null);
var state_46086__$1 = (function (){var statearr_46095 = state_46086;
(statearr_46095[(8)] = inst_46013__$1);

return statearr_46095;
})();
if(cljs.core.truth_(inst_46014)){
var statearr_46096_48213 = state_46086__$1;
(statearr_46096_48213[(1)] = (5));

} else {
var statearr_46097_48217 = state_46086__$1;
(statearr_46097_48217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (15))){
var inst_46057 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
var statearr_46098_48224 = state_46086__$1;
(statearr_46098_48224[(2)] = inst_46057);

(statearr_46098_48224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (21))){
var inst_46079 = (state_46086[(2)]);
var state_46086__$1 = (function (){var statearr_46099 = state_46086;
(statearr_46099[(9)] = inst_46079);

return statearr_46099;
})();
var statearr_46100_48225 = state_46086__$1;
(statearr_46100_48225[(2)] = null);

(statearr_46100_48225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (13))){
var inst_46037 = (state_46086[(10)]);
var inst_46039 = cljs.core.chunked_seq_QMARK_(inst_46037);
var state_46086__$1 = state_46086;
if(inst_46039){
var statearr_46102_48230 = state_46086__$1;
(statearr_46102_48230[(1)] = (16));

} else {
var statearr_46103_48231 = state_46086__$1;
(statearr_46103_48231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (22))){
var inst_46071 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
if(cljs.core.truth_(inst_46071)){
var statearr_46104_48240 = state_46086__$1;
(statearr_46104_48240[(1)] = (23));

} else {
var statearr_46105_48241 = state_46086__$1;
(statearr_46105_48241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (6))){
var inst_46065 = (state_46086[(7)]);
var inst_46067 = (state_46086[(11)]);
var inst_46013 = (state_46086[(8)]);
var inst_46065__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46013) : topic_fn.call(null,inst_46013));
var inst_46066 = cljs.core.deref(mults);
var inst_46067__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46066,inst_46065__$1);
var state_46086__$1 = (function (){var statearr_46109 = state_46086;
(statearr_46109[(7)] = inst_46065__$1);

(statearr_46109[(11)] = inst_46067__$1);

return statearr_46109;
})();
if(cljs.core.truth_(inst_46067__$1)){
var statearr_46110_48246 = state_46086__$1;
(statearr_46110_48246[(1)] = (19));

} else {
var statearr_46111_48247 = state_46086__$1;
(statearr_46111_48247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (25))){
var inst_46076 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
var statearr_46113_48250 = state_46086__$1;
(statearr_46113_48250[(2)] = inst_46076);

(statearr_46113_48250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (17))){
var inst_46037 = (state_46086[(10)]);
var inst_46048 = cljs.core.first(inst_46037);
var inst_46049 = cljs.core.async.muxch_STAR_(inst_46048);
var inst_46050 = cljs.core.async.close_BANG_(inst_46049);
var inst_46051 = cljs.core.next(inst_46037);
var inst_46023 = inst_46051;
var inst_46024 = null;
var inst_46025 = (0);
var inst_46026 = (0);
var state_46086__$1 = (function (){var statearr_46115 = state_46086;
(statearr_46115[(12)] = inst_46025);

(statearr_46115[(13)] = inst_46024);

(statearr_46115[(14)] = inst_46026);

(statearr_46115[(15)] = inst_46023);

(statearr_46115[(16)] = inst_46050);

return statearr_46115;
})();
var statearr_46116_48254 = state_46086__$1;
(statearr_46116_48254[(2)] = null);

(statearr_46116_48254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (3))){
var inst_46084 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46086__$1,inst_46084);
} else {
if((state_val_46087 === (12))){
var inst_46059 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
var statearr_46118_48257 = state_46086__$1;
(statearr_46118_48257[(2)] = inst_46059);

(statearr_46118_48257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (2))){
var state_46086__$1 = state_46086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46086__$1,(4),ch);
} else {
if((state_val_46087 === (23))){
var state_46086__$1 = state_46086;
var statearr_46119_48262 = state_46086__$1;
(statearr_46119_48262[(2)] = null);

(statearr_46119_48262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (19))){
var inst_46067 = (state_46086[(11)]);
var inst_46013 = (state_46086[(8)]);
var inst_46069 = cljs.core.async.muxch_STAR_(inst_46067);
var state_46086__$1 = state_46086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46086__$1,(22),inst_46069,inst_46013);
} else {
if((state_val_46087 === (11))){
var inst_46037 = (state_46086[(10)]);
var inst_46023 = (state_46086[(15)]);
var inst_46037__$1 = cljs.core.seq(inst_46023);
var state_46086__$1 = (function (){var statearr_46121 = state_46086;
(statearr_46121[(10)] = inst_46037__$1);

return statearr_46121;
})();
if(inst_46037__$1){
var statearr_46124_48272 = state_46086__$1;
(statearr_46124_48272[(1)] = (13));

} else {
var statearr_46127_48274 = state_46086__$1;
(statearr_46127_48274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (9))){
var inst_46061 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
var statearr_46132_48285 = state_46086__$1;
(statearr_46132_48285[(2)] = inst_46061);

(statearr_46132_48285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (5))){
var inst_46020 = cljs.core.deref(mults);
var inst_46021 = cljs.core.vals(inst_46020);
var inst_46022 = cljs.core.seq(inst_46021);
var inst_46023 = inst_46022;
var inst_46024 = null;
var inst_46025 = (0);
var inst_46026 = (0);
var state_46086__$1 = (function (){var statearr_46141 = state_46086;
(statearr_46141[(12)] = inst_46025);

(statearr_46141[(13)] = inst_46024);

(statearr_46141[(14)] = inst_46026);

(statearr_46141[(15)] = inst_46023);

return statearr_46141;
})();
var statearr_46142_48294 = state_46086__$1;
(statearr_46142_48294[(2)] = null);

(statearr_46142_48294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (14))){
var state_46086__$1 = state_46086;
var statearr_46146_48295 = state_46086__$1;
(statearr_46146_48295[(2)] = null);

(statearr_46146_48295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (16))){
var inst_46037 = (state_46086[(10)]);
var inst_46042 = cljs.core.chunk_first(inst_46037);
var inst_46044 = cljs.core.chunk_rest(inst_46037);
var inst_46045 = cljs.core.count(inst_46042);
var inst_46023 = inst_46044;
var inst_46024 = inst_46042;
var inst_46025 = inst_46045;
var inst_46026 = (0);
var state_46086__$1 = (function (){var statearr_46147 = state_46086;
(statearr_46147[(12)] = inst_46025);

(statearr_46147[(13)] = inst_46024);

(statearr_46147[(14)] = inst_46026);

(statearr_46147[(15)] = inst_46023);

return statearr_46147;
})();
var statearr_46148_48309 = state_46086__$1;
(statearr_46148_48309[(2)] = null);

(statearr_46148_48309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (10))){
var inst_46025 = (state_46086[(12)]);
var inst_46024 = (state_46086[(13)]);
var inst_46026 = (state_46086[(14)]);
var inst_46023 = (state_46086[(15)]);
var inst_46031 = cljs.core._nth(inst_46024,inst_46026);
var inst_46032 = cljs.core.async.muxch_STAR_(inst_46031);
var inst_46033 = cljs.core.async.close_BANG_(inst_46032);
var inst_46034 = (inst_46026 + (1));
var tmp46143 = inst_46025;
var tmp46144 = inst_46024;
var tmp46145 = inst_46023;
var inst_46023__$1 = tmp46145;
var inst_46024__$1 = tmp46144;
var inst_46025__$1 = tmp46143;
var inst_46026__$1 = inst_46034;
var state_46086__$1 = (function (){var statearr_46149 = state_46086;
(statearr_46149[(12)] = inst_46025__$1);

(statearr_46149[(13)] = inst_46024__$1);

(statearr_46149[(14)] = inst_46026__$1);

(statearr_46149[(15)] = inst_46023__$1);

(statearr_46149[(17)] = inst_46033);

return statearr_46149;
})();
var statearr_46150_48326 = state_46086__$1;
(statearr_46150_48326[(2)] = null);

(statearr_46150_48326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (18))){
var inst_46054 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
var statearr_46152_48332 = state_46086__$1;
(statearr_46152_48332[(2)] = inst_46054);

(statearr_46152_48332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (8))){
var inst_46025 = (state_46086[(12)]);
var inst_46026 = (state_46086[(14)]);
var inst_46028 = (inst_46026 < inst_46025);
var inst_46029 = inst_46028;
var state_46086__$1 = state_46086;
if(cljs.core.truth_(inst_46029)){
var statearr_46153_48340 = state_46086__$1;
(statearr_46153_48340[(1)] = (10));

} else {
var statearr_46154_48341 = state_46086__$1;
(statearr_46154_48341[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_46155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46155[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_46155[(1)] = (1));

return statearr_46155;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_46086){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46086);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e46156){var ex__43985__auto__ = e46156;
var statearr_46157_48343 = state_46086;
(statearr_46157_48343[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46086[(4)]))){
var statearr_46158_48344 = state_46086;
(statearr_46158_48344[(1)] = cljs.core.first((state_46086[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48345 = state_46086;
state_46086 = G__48345;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_46086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_46086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_46159 = f__44130__auto__();
(statearr_46159[(6)] = c__44129__auto___48192);

return statearr_46159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46161 = arguments.length;
switch (G__46161) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46169 = arguments.length;
switch (G__46169) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46176 = arguments.length;
switch (G__46176) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44129__auto___48369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46223){
var state_val_46224 = (state_46223[(1)]);
if((state_val_46224 === (7))){
var state_46223__$1 = state_46223;
var statearr_46225_48376 = state_46223__$1;
(statearr_46225_48376[(2)] = null);

(statearr_46225_48376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (1))){
var state_46223__$1 = state_46223;
var statearr_46226_48377 = state_46223__$1;
(statearr_46226_48377[(2)] = null);

(statearr_46226_48377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (4))){
var inst_46182 = (state_46223[(7)]);
var inst_46183 = (state_46223[(8)]);
var inst_46185 = (inst_46183 < inst_46182);
var state_46223__$1 = state_46223;
if(cljs.core.truth_(inst_46185)){
var statearr_46229_48378 = state_46223__$1;
(statearr_46229_48378[(1)] = (6));

} else {
var statearr_46230_48380 = state_46223__$1;
(statearr_46230_48380[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (15))){
var inst_46209 = (state_46223[(9)]);
var inst_46214 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46209);
var state_46223__$1 = state_46223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46223__$1,(17),out,inst_46214);
} else {
if((state_val_46224 === (13))){
var inst_46209 = (state_46223[(9)]);
var inst_46209__$1 = (state_46223[(2)]);
var inst_46210 = cljs.core.some(cljs.core.nil_QMARK_,inst_46209__$1);
var state_46223__$1 = (function (){var statearr_46231 = state_46223;
(statearr_46231[(9)] = inst_46209__$1);

return statearr_46231;
})();
if(cljs.core.truth_(inst_46210)){
var statearr_46232_48386 = state_46223__$1;
(statearr_46232_48386[(1)] = (14));

} else {
var statearr_46233_48388 = state_46223__$1;
(statearr_46233_48388[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (6))){
var state_46223__$1 = state_46223;
var statearr_46234_48390 = state_46223__$1;
(statearr_46234_48390[(2)] = null);

(statearr_46234_48390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (17))){
var inst_46216 = (state_46223[(2)]);
var state_46223__$1 = (function (){var statearr_46239 = state_46223;
(statearr_46239[(10)] = inst_46216);

return statearr_46239;
})();
var statearr_46240_48393 = state_46223__$1;
(statearr_46240_48393[(2)] = null);

(statearr_46240_48393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (3))){
var inst_46221 = (state_46223[(2)]);
var state_46223__$1 = state_46223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46223__$1,inst_46221);
} else {
if((state_val_46224 === (12))){
var _ = (function (){var statearr_46242 = state_46223;
(statearr_46242[(4)] = cljs.core.rest((state_46223[(4)])));

return statearr_46242;
})();
var state_46223__$1 = state_46223;
var ex46238 = (state_46223__$1[(2)]);
var statearr_46244_48395 = state_46223__$1;
(statearr_46244_48395[(5)] = ex46238);


if((ex46238 instanceof Object)){
var statearr_46245_48396 = state_46223__$1;
(statearr_46245_48396[(1)] = (11));

(statearr_46245_48396[(5)] = null);

} else {
throw ex46238;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (2))){
var inst_46181 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46182 = cnt;
var inst_46183 = (0);
var state_46223__$1 = (function (){var statearr_46247 = state_46223;
(statearr_46247[(7)] = inst_46182);

(statearr_46247[(8)] = inst_46183);

(statearr_46247[(11)] = inst_46181);

return statearr_46247;
})();
var statearr_46248_48397 = state_46223__$1;
(statearr_46248_48397[(2)] = null);

(statearr_46248_48397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (11))){
var inst_46188 = (state_46223[(2)]);
var inst_46189 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46223__$1 = (function (){var statearr_46249 = state_46223;
(statearr_46249[(12)] = inst_46188);

return statearr_46249;
})();
var statearr_46250_48401 = state_46223__$1;
(statearr_46250_48401[(2)] = inst_46189);

(statearr_46250_48401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (9))){
var inst_46183 = (state_46223[(8)]);
var _ = (function (){var statearr_46251 = state_46223;
(statearr_46251[(4)] = cljs.core.cons((12),(state_46223[(4)])));

return statearr_46251;
})();
var inst_46195 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46183) : chs__$1.call(null,inst_46183));
var inst_46196 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46183) : done.call(null,inst_46183));
var inst_46197 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46195,inst_46196);
var ___$1 = (function (){var statearr_46252 = state_46223;
(statearr_46252[(4)] = cljs.core.rest((state_46223[(4)])));

return statearr_46252;
})();
var state_46223__$1 = state_46223;
var statearr_46253_48404 = state_46223__$1;
(statearr_46253_48404[(2)] = inst_46197);

(statearr_46253_48404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (5))){
var inst_46207 = (state_46223[(2)]);
var state_46223__$1 = (function (){var statearr_46254 = state_46223;
(statearr_46254[(13)] = inst_46207);

return statearr_46254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46223__$1,(13),dchan);
} else {
if((state_val_46224 === (14))){
var inst_46212 = cljs.core.async.close_BANG_(out);
var state_46223__$1 = state_46223;
var statearr_46255_48405 = state_46223__$1;
(statearr_46255_48405[(2)] = inst_46212);

(statearr_46255_48405[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (16))){
var inst_46219 = (state_46223[(2)]);
var state_46223__$1 = state_46223;
var statearr_46256_48406 = state_46223__$1;
(statearr_46256_48406[(2)] = inst_46219);

(statearr_46256_48406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (10))){
var inst_46183 = (state_46223[(8)]);
var inst_46200 = (state_46223[(2)]);
var inst_46201 = (inst_46183 + (1));
var inst_46183__$1 = inst_46201;
var state_46223__$1 = (function (){var statearr_46257 = state_46223;
(statearr_46257[(8)] = inst_46183__$1);

(statearr_46257[(14)] = inst_46200);

return statearr_46257;
})();
var statearr_46258_48422 = state_46223__$1;
(statearr_46258_48422[(2)] = null);

(statearr_46258_48422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46224 === (8))){
var inst_46205 = (state_46223[(2)]);
var state_46223__$1 = state_46223;
var statearr_46259_48424 = state_46223__$1;
(statearr_46259_48424[(2)] = inst_46205);

(statearr_46259_48424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_46261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46261[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_46261[(1)] = (1));

return statearr_46261;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_46223){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46223);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e46262){var ex__43985__auto__ = e46262;
var statearr_46263_48438 = state_46223;
(statearr_46263_48438[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46223[(4)]))){
var statearr_46264_48441 = state_46223;
(statearr_46264_48441[(1)] = cljs.core.first((state_46223[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48444 = state_46223;
state_46223 = G__48444;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_46223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_46223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_46265 = f__44130__auto__();
(statearr_46265[(6)] = c__44129__auto___48369);

return statearr_46265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46269 = arguments.length;
switch (G__46269) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44129__auto___48464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46303){
var state_val_46304 = (state_46303[(1)]);
if((state_val_46304 === (7))){
var inst_46282 = (state_46303[(7)]);
var inst_46280 = (state_46303[(8)]);
var inst_46280__$1 = (state_46303[(2)]);
var inst_46282__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46280__$1,(0),null);
var inst_46283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46280__$1,(1),null);
var inst_46284 = (inst_46282__$1 == null);
var state_46303__$1 = (function (){var statearr_46305 = state_46303;
(statearr_46305[(9)] = inst_46283);

(statearr_46305[(7)] = inst_46282__$1);

(statearr_46305[(8)] = inst_46280__$1);

return statearr_46305;
})();
if(cljs.core.truth_(inst_46284)){
var statearr_46306_48466 = state_46303__$1;
(statearr_46306_48466[(1)] = (8));

} else {
var statearr_46307_48467 = state_46303__$1;
(statearr_46307_48467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (1))){
var inst_46270 = cljs.core.vec(chs);
var inst_46271 = inst_46270;
var state_46303__$1 = (function (){var statearr_46311 = state_46303;
(statearr_46311[(10)] = inst_46271);

return statearr_46311;
})();
var statearr_46312_48470 = state_46303__$1;
(statearr_46312_48470[(2)] = null);

(statearr_46312_48470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (4))){
var inst_46271 = (state_46303[(10)]);
var state_46303__$1 = state_46303;
return cljs.core.async.ioc_alts_BANG_(state_46303__$1,(7),inst_46271);
} else {
if((state_val_46304 === (6))){
var inst_46299 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
var statearr_46313_48471 = state_46303__$1;
(statearr_46313_48471[(2)] = inst_46299);

(statearr_46313_48471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (3))){
var inst_46301 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46303__$1,inst_46301);
} else {
if((state_val_46304 === (2))){
var inst_46271 = (state_46303[(10)]);
var inst_46273 = cljs.core.count(inst_46271);
var inst_46274 = (inst_46273 > (0));
var state_46303__$1 = state_46303;
if(cljs.core.truth_(inst_46274)){
var statearr_46317_48480 = state_46303__$1;
(statearr_46317_48480[(1)] = (4));

} else {
var statearr_46318_48481 = state_46303__$1;
(statearr_46318_48481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (11))){
var inst_46271 = (state_46303[(10)]);
var inst_46291 = (state_46303[(2)]);
var tmp46314 = inst_46271;
var inst_46271__$1 = tmp46314;
var state_46303__$1 = (function (){var statearr_46321 = state_46303;
(statearr_46321[(11)] = inst_46291);

(statearr_46321[(10)] = inst_46271__$1);

return statearr_46321;
})();
var statearr_46322_48490 = state_46303__$1;
(statearr_46322_48490[(2)] = null);

(statearr_46322_48490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (9))){
var inst_46282 = (state_46303[(7)]);
var state_46303__$1 = state_46303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46303__$1,(11),out,inst_46282);
} else {
if((state_val_46304 === (5))){
var inst_46297 = cljs.core.async.close_BANG_(out);
var state_46303__$1 = state_46303;
var statearr_46325_48491 = state_46303__$1;
(statearr_46325_48491[(2)] = inst_46297);

(statearr_46325_48491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (10))){
var inst_46294 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
var statearr_46326_48492 = state_46303__$1;
(statearr_46326_48492[(2)] = inst_46294);

(statearr_46326_48492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (8))){
var inst_46283 = (state_46303[(9)]);
var inst_46282 = (state_46303[(7)]);
var inst_46280 = (state_46303[(8)]);
var inst_46271 = (state_46303[(10)]);
var inst_46286 = (function (){var cs = inst_46271;
var vec__46276 = inst_46280;
var v = inst_46282;
var c = inst_46283;
return (function (p1__46266_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46266_SHARP_);
});
})();
var inst_46287 = cljs.core.filterv(inst_46286,inst_46271);
var inst_46271__$1 = inst_46287;
var state_46303__$1 = (function (){var statearr_46327 = state_46303;
(statearr_46327[(10)] = inst_46271__$1);

return statearr_46327;
})();
var statearr_46328_48501 = state_46303__$1;
(statearr_46328_48501[(2)] = null);

(statearr_46328_48501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_46331 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46331[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_46331[(1)] = (1));

return statearr_46331;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_46303){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46303);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e46332){var ex__43985__auto__ = e46332;
var statearr_46333_48507 = state_46303;
(statearr_46333_48507[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46303[(4)]))){
var statearr_46336_48509 = state_46303;
(statearr_46336_48509[(1)] = cljs.core.first((state_46303[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48511 = state_46303;
state_46303 = G__48511;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_46303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_46303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_46338 = f__44130__auto__();
(statearr_46338[(6)] = c__44129__auto___48464);

return statearr_46338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46352 = arguments.length;
switch (G__46352) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44129__auto___48518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46385){
var state_val_46386 = (state_46385[(1)]);
if((state_val_46386 === (7))){
var inst_46367 = (state_46385[(7)]);
var inst_46367__$1 = (state_46385[(2)]);
var inst_46368 = (inst_46367__$1 == null);
var inst_46369 = cljs.core.not(inst_46368);
var state_46385__$1 = (function (){var statearr_46388 = state_46385;
(statearr_46388[(7)] = inst_46367__$1);

return statearr_46388;
})();
if(inst_46369){
var statearr_46389_48521 = state_46385__$1;
(statearr_46389_48521[(1)] = (8));

} else {
var statearr_46390_48522 = state_46385__$1;
(statearr_46390_48522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (1))){
var inst_46357 = (0);
var state_46385__$1 = (function (){var statearr_46391 = state_46385;
(statearr_46391[(8)] = inst_46357);

return statearr_46391;
})();
var statearr_46392_48524 = state_46385__$1;
(statearr_46392_48524[(2)] = null);

(statearr_46392_48524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (4))){
var state_46385__$1 = state_46385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46385__$1,(7),ch);
} else {
if((state_val_46386 === (6))){
var inst_46380 = (state_46385[(2)]);
var state_46385__$1 = state_46385;
var statearr_46396_48525 = state_46385__$1;
(statearr_46396_48525[(2)] = inst_46380);

(statearr_46396_48525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (3))){
var inst_46382 = (state_46385[(2)]);
var inst_46383 = cljs.core.async.close_BANG_(out);
var state_46385__$1 = (function (){var statearr_46398 = state_46385;
(statearr_46398[(9)] = inst_46382);

return statearr_46398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46385__$1,inst_46383);
} else {
if((state_val_46386 === (2))){
var inst_46357 = (state_46385[(8)]);
var inst_46364 = (inst_46357 < n);
var state_46385__$1 = state_46385;
if(cljs.core.truth_(inst_46364)){
var statearr_46400_48527 = state_46385__$1;
(statearr_46400_48527[(1)] = (4));

} else {
var statearr_46401_48528 = state_46385__$1;
(statearr_46401_48528[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (11))){
var inst_46357 = (state_46385[(8)]);
var inst_46372 = (state_46385[(2)]);
var inst_46373 = (inst_46357 + (1));
var inst_46357__$1 = inst_46373;
var state_46385__$1 = (function (){var statearr_46403 = state_46385;
(statearr_46403[(8)] = inst_46357__$1);

(statearr_46403[(10)] = inst_46372);

return statearr_46403;
})();
var statearr_46405_48530 = state_46385__$1;
(statearr_46405_48530[(2)] = null);

(statearr_46405_48530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (9))){
var state_46385__$1 = state_46385;
var statearr_46406_48532 = state_46385__$1;
(statearr_46406_48532[(2)] = null);

(statearr_46406_48532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (5))){
var state_46385__$1 = state_46385;
var statearr_46409_48533 = state_46385__$1;
(statearr_46409_48533[(2)] = null);

(statearr_46409_48533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (10))){
var inst_46377 = (state_46385[(2)]);
var state_46385__$1 = state_46385;
var statearr_46411_48537 = state_46385__$1;
(statearr_46411_48537[(2)] = inst_46377);

(statearr_46411_48537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (8))){
var inst_46367 = (state_46385[(7)]);
var state_46385__$1 = state_46385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46385__$1,(11),out,inst_46367);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_46416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46416[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_46416[(1)] = (1));

return statearr_46416;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_46385){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46385);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e46417){var ex__43985__auto__ = e46417;
var statearr_46418_48544 = state_46385;
(statearr_46418_48544[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46385[(4)]))){
var statearr_46422_48546 = state_46385;
(statearr_46422_48546[(1)] = cljs.core.first((state_46385[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48549 = state_46385;
state_46385 = G__48549;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_46385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_46385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_46423 = f__44130__auto__();
(statearr_46423[(6)] = c__44129__auto___48518);

return statearr_46423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46436 = (function (f,ch,meta46437){
this.f = f;
this.ch = ch;
this.meta46437 = meta46437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46438,meta46437__$1){
var self__ = this;
var _46438__$1 = this;
return (new cljs.core.async.t_cljs$core$async46436(self__.f,self__.ch,meta46437__$1));
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46438){
var self__ = this;
var _46438__$1 = this;
return self__.meta46437;
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46440 = (function (f,ch,meta46437,_,fn1,meta46441){
this.f = f;
this.ch = ch;
this.meta46437 = meta46437;
this._ = _;
this.fn1 = fn1;
this.meta46441 = meta46441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46442,meta46441__$1){
var self__ = this;
var _46442__$1 = this;
return (new cljs.core.async.t_cljs$core$async46440(self__.f,self__.ch,self__.meta46437,self__._,self__.fn1,meta46441__$1));
}));

(cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46442){
var self__ = this;
var _46442__$1 = this;
return self__.meta46441;
}));

(cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46427_SHARP_){
var G__46449 = (((p1__46427_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46427_SHARP_) : self__.f.call(null,p1__46427_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46449) : f1.call(null,G__46449));
});
}));

(cljs.core.async.t_cljs$core$async46440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46437","meta46437",153453670,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46436","cljs.core.async/t_cljs$core$async46436",-1178993788,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46441","meta46441",-1125006788,null)], null);
}));

(cljs.core.async.t_cljs$core$async46440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46440");

(cljs.core.async.t_cljs$core$async46440.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46440.
 */
cljs.core.async.__GT_t_cljs$core$async46440 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46440(f__$1,ch__$1,meta46437__$1,___$2,fn1__$1,meta46441){
return (new cljs.core.async.t_cljs$core$async46440(f__$1,ch__$1,meta46437__$1,___$2,fn1__$1,meta46441));
});

}

return (new cljs.core.async.t_cljs$core$async46440(self__.f,self__.ch,self__.meta46437,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46460 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46460) : self__.f.call(null,G__46460));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46437","meta46437",153453670,null)], null);
}));

(cljs.core.async.t_cljs$core$async46436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46436");

(cljs.core.async.t_cljs$core$async46436.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46436.
 */
cljs.core.async.__GT_t_cljs$core$async46436 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46436(f__$1,ch__$1,meta46437){
return (new cljs.core.async.t_cljs$core$async46436(f__$1,ch__$1,meta46437));
});

}

return (new cljs.core.async.t_cljs$core$async46436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46476 = (function (f,ch,meta46477){
this.f = f;
this.ch = ch;
this.meta46477 = meta46477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46478,meta46477__$1){
var self__ = this;
var _46478__$1 = this;
return (new cljs.core.async.t_cljs$core$async46476(self__.f,self__.ch,meta46477__$1));
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46478){
var self__ = this;
var _46478__$1 = this;
return self__.meta46477;
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46477","meta46477",47357897,null)], null);
}));

(cljs.core.async.t_cljs$core$async46476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46476");

(cljs.core.async.t_cljs$core$async46476.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46476.
 */
cljs.core.async.__GT_t_cljs$core$async46476 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46476(f__$1,ch__$1,meta46477){
return (new cljs.core.async.t_cljs$core$async46476(f__$1,ch__$1,meta46477));
});

}

return (new cljs.core.async.t_cljs$core$async46476(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46493 = (function (p,ch,meta46494){
this.p = p;
this.ch = ch;
this.meta46494 = meta46494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46495,meta46494__$1){
var self__ = this;
var _46495__$1 = this;
return (new cljs.core.async.t_cljs$core$async46493(self__.p,self__.ch,meta46494__$1));
}));

(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46495){
var self__ = this;
var _46495__$1 = this;
return self__.meta46494;
}));

(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46494","meta46494",-1590812592,null)], null);
}));

(cljs.core.async.t_cljs$core$async46493.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46493");

(cljs.core.async.t_cljs$core$async46493.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46493");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46493.
 */
cljs.core.async.__GT_t_cljs$core$async46493 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46493(p__$1,ch__$1,meta46494){
return (new cljs.core.async.t_cljs$core$async46493(p__$1,ch__$1,meta46494));
});

}

return (new cljs.core.async.t_cljs$core$async46493(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46528 = arguments.length;
switch (G__46528) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44129__auto___48643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46556){
var state_val_46557 = (state_46556[(1)]);
if((state_val_46557 === (7))){
var inst_46552 = (state_46556[(2)]);
var state_46556__$1 = state_46556;
var statearr_46558_48650 = state_46556__$1;
(statearr_46558_48650[(2)] = inst_46552);

(statearr_46558_48650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (1))){
var state_46556__$1 = state_46556;
var statearr_46561_48654 = state_46556__$1;
(statearr_46561_48654[(2)] = null);

(statearr_46561_48654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (4))){
var inst_46538 = (state_46556[(7)]);
var inst_46538__$1 = (state_46556[(2)]);
var inst_46539 = (inst_46538__$1 == null);
var state_46556__$1 = (function (){var statearr_46565 = state_46556;
(statearr_46565[(7)] = inst_46538__$1);

return statearr_46565;
})();
if(cljs.core.truth_(inst_46539)){
var statearr_46566_48660 = state_46556__$1;
(statearr_46566_48660[(1)] = (5));

} else {
var statearr_46567_48661 = state_46556__$1;
(statearr_46567_48661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (6))){
var inst_46538 = (state_46556[(7)]);
var inst_46543 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46538) : p.call(null,inst_46538));
var state_46556__$1 = state_46556;
if(cljs.core.truth_(inst_46543)){
var statearr_46568_48678 = state_46556__$1;
(statearr_46568_48678[(1)] = (8));

} else {
var statearr_46570_48680 = state_46556__$1;
(statearr_46570_48680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (3))){
var inst_46554 = (state_46556[(2)]);
var state_46556__$1 = state_46556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46556__$1,inst_46554);
} else {
if((state_val_46557 === (2))){
var state_46556__$1 = state_46556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46556__$1,(4),ch);
} else {
if((state_val_46557 === (11))){
var inst_46546 = (state_46556[(2)]);
var state_46556__$1 = state_46556;
var statearr_46571_48692 = state_46556__$1;
(statearr_46571_48692[(2)] = inst_46546);

(statearr_46571_48692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (9))){
var state_46556__$1 = state_46556;
var statearr_46572_48700 = state_46556__$1;
(statearr_46572_48700[(2)] = null);

(statearr_46572_48700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (5))){
var inst_46541 = cljs.core.async.close_BANG_(out);
var state_46556__$1 = state_46556;
var statearr_46573_48713 = state_46556__$1;
(statearr_46573_48713[(2)] = inst_46541);

(statearr_46573_48713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (10))){
var inst_46549 = (state_46556[(2)]);
var state_46556__$1 = (function (){var statearr_46574 = state_46556;
(statearr_46574[(8)] = inst_46549);

return statearr_46574;
})();
var statearr_46575_48720 = state_46556__$1;
(statearr_46575_48720[(2)] = null);

(statearr_46575_48720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (8))){
var inst_46538 = (state_46556[(7)]);
var state_46556__$1 = state_46556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46556__$1,(11),out,inst_46538);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_46582 = [null,null,null,null,null,null,null,null,null];
(statearr_46582[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_46582[(1)] = (1));

return statearr_46582;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_46556){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46556);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e46585){var ex__43985__auto__ = e46585;
var statearr_46586_48747 = state_46556;
(statearr_46586_48747[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46556[(4)]))){
var statearr_46587_48755 = state_46556;
(statearr_46587_48755[(1)] = cljs.core.first((state_46556[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48758 = state_46556;
state_46556 = G__48758;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_46556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_46556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_46591 = f__44130__auto__();
(statearr_46591[(6)] = c__44129__auto___48643);

return statearr_46591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46596 = arguments.length;
switch (G__46596) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46674){
var state_val_46675 = (state_46674[(1)]);
if((state_val_46675 === (7))){
var inst_46669 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
var statearr_46681_48777 = state_46674__$1;
(statearr_46681_48777[(2)] = inst_46669);

(statearr_46681_48777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (20))){
var inst_46639 = (state_46674[(7)]);
var inst_46650 = (state_46674[(2)]);
var inst_46651 = cljs.core.next(inst_46639);
var inst_46623 = inst_46651;
var inst_46624 = null;
var inst_46625 = (0);
var inst_46626 = (0);
var state_46674__$1 = (function (){var statearr_46682 = state_46674;
(statearr_46682[(8)] = inst_46623);

(statearr_46682[(9)] = inst_46626);

(statearr_46682[(10)] = inst_46650);

(statearr_46682[(11)] = inst_46624);

(statearr_46682[(12)] = inst_46625);

return statearr_46682;
})();
var statearr_46683_48790 = state_46674__$1;
(statearr_46683_48790[(2)] = null);

(statearr_46683_48790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (1))){
var state_46674__$1 = state_46674;
var statearr_46684_48800 = state_46674__$1;
(statearr_46684_48800[(2)] = null);

(statearr_46684_48800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (4))){
var inst_46608 = (state_46674[(13)]);
var inst_46608__$1 = (state_46674[(2)]);
var inst_46611 = (inst_46608__$1 == null);
var state_46674__$1 = (function (){var statearr_46685 = state_46674;
(statearr_46685[(13)] = inst_46608__$1);

return statearr_46685;
})();
if(cljs.core.truth_(inst_46611)){
var statearr_46686_48803 = state_46674__$1;
(statearr_46686_48803[(1)] = (5));

} else {
var statearr_46688_48804 = state_46674__$1;
(statearr_46688_48804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (15))){
var state_46674__$1 = state_46674;
var statearr_46694_48809 = state_46674__$1;
(statearr_46694_48809[(2)] = null);

(statearr_46694_48809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (21))){
var state_46674__$1 = state_46674;
var statearr_46698_48811 = state_46674__$1;
(statearr_46698_48811[(2)] = null);

(statearr_46698_48811[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (13))){
var inst_46623 = (state_46674[(8)]);
var inst_46626 = (state_46674[(9)]);
var inst_46624 = (state_46674[(11)]);
var inst_46625 = (state_46674[(12)]);
var inst_46635 = (state_46674[(2)]);
var inst_46636 = (inst_46626 + (1));
var tmp46690 = inst_46623;
var tmp46691 = inst_46624;
var tmp46692 = inst_46625;
var inst_46623__$1 = tmp46690;
var inst_46624__$1 = tmp46691;
var inst_46625__$1 = tmp46692;
var inst_46626__$1 = inst_46636;
var state_46674__$1 = (function (){var statearr_46699 = state_46674;
(statearr_46699[(8)] = inst_46623__$1);

(statearr_46699[(9)] = inst_46626__$1);

(statearr_46699[(11)] = inst_46624__$1);

(statearr_46699[(12)] = inst_46625__$1);

(statearr_46699[(14)] = inst_46635);

return statearr_46699;
})();
var statearr_46700_48815 = state_46674__$1;
(statearr_46700_48815[(2)] = null);

(statearr_46700_48815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (22))){
var state_46674__$1 = state_46674;
var statearr_46701_48817 = state_46674__$1;
(statearr_46701_48817[(2)] = null);

(statearr_46701_48817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (6))){
var inst_46608 = (state_46674[(13)]);
var inst_46621 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46608) : f.call(null,inst_46608));
var inst_46622 = cljs.core.seq(inst_46621);
var inst_46623 = inst_46622;
var inst_46624 = null;
var inst_46625 = (0);
var inst_46626 = (0);
var state_46674__$1 = (function (){var statearr_46710 = state_46674;
(statearr_46710[(8)] = inst_46623);

(statearr_46710[(9)] = inst_46626);

(statearr_46710[(11)] = inst_46624);

(statearr_46710[(12)] = inst_46625);

return statearr_46710;
})();
var statearr_46711_48819 = state_46674__$1;
(statearr_46711_48819[(2)] = null);

(statearr_46711_48819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (17))){
var inst_46639 = (state_46674[(7)]);
var inst_46643 = cljs.core.chunk_first(inst_46639);
var inst_46644 = cljs.core.chunk_rest(inst_46639);
var inst_46645 = cljs.core.count(inst_46643);
var inst_46623 = inst_46644;
var inst_46624 = inst_46643;
var inst_46625 = inst_46645;
var inst_46626 = (0);
var state_46674__$1 = (function (){var statearr_46721 = state_46674;
(statearr_46721[(8)] = inst_46623);

(statearr_46721[(9)] = inst_46626);

(statearr_46721[(11)] = inst_46624);

(statearr_46721[(12)] = inst_46625);

return statearr_46721;
})();
var statearr_46726_48820 = state_46674__$1;
(statearr_46726_48820[(2)] = null);

(statearr_46726_48820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (3))){
var inst_46671 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46674__$1,inst_46671);
} else {
if((state_val_46675 === (12))){
var inst_46659 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
var statearr_46728_48828 = state_46674__$1;
(statearr_46728_48828[(2)] = inst_46659);

(statearr_46728_48828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (2))){
var state_46674__$1 = state_46674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46674__$1,(4),in$);
} else {
if((state_val_46675 === (23))){
var inst_46667 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
var statearr_46729_48840 = state_46674__$1;
(statearr_46729_48840[(2)] = inst_46667);

(statearr_46729_48840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (19))){
var inst_46654 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
var statearr_46730_48847 = state_46674__$1;
(statearr_46730_48847[(2)] = inst_46654);

(statearr_46730_48847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (11))){
var inst_46623 = (state_46674[(8)]);
var inst_46639 = (state_46674[(7)]);
var inst_46639__$1 = cljs.core.seq(inst_46623);
var state_46674__$1 = (function (){var statearr_46731 = state_46674;
(statearr_46731[(7)] = inst_46639__$1);

return statearr_46731;
})();
if(inst_46639__$1){
var statearr_46732_48854 = state_46674__$1;
(statearr_46732_48854[(1)] = (14));

} else {
var statearr_46733_48855 = state_46674__$1;
(statearr_46733_48855[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (9))){
var inst_46661 = (state_46674[(2)]);
var inst_46662 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46674__$1 = (function (){var statearr_46734 = state_46674;
(statearr_46734[(15)] = inst_46661);

return statearr_46734;
})();
if(cljs.core.truth_(inst_46662)){
var statearr_46735_48864 = state_46674__$1;
(statearr_46735_48864[(1)] = (21));

} else {
var statearr_46736_48865 = state_46674__$1;
(statearr_46736_48865[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (5))){
var inst_46615 = cljs.core.async.close_BANG_(out);
var state_46674__$1 = state_46674;
var statearr_46737_48872 = state_46674__$1;
(statearr_46737_48872[(2)] = inst_46615);

(statearr_46737_48872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (14))){
var inst_46639 = (state_46674[(7)]);
var inst_46641 = cljs.core.chunked_seq_QMARK_(inst_46639);
var state_46674__$1 = state_46674;
if(inst_46641){
var statearr_46738_48881 = state_46674__$1;
(statearr_46738_48881[(1)] = (17));

} else {
var statearr_46739_48885 = state_46674__$1;
(statearr_46739_48885[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (16))){
var inst_46657 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
var statearr_46740_48890 = state_46674__$1;
(statearr_46740_48890[(2)] = inst_46657);

(statearr_46740_48890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (10))){
var inst_46626 = (state_46674[(9)]);
var inst_46624 = (state_46674[(11)]);
var inst_46633 = cljs.core._nth(inst_46624,inst_46626);
var state_46674__$1 = state_46674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46674__$1,(13),out,inst_46633);
} else {
if((state_val_46675 === (18))){
var inst_46639 = (state_46674[(7)]);
var inst_46648 = cljs.core.first(inst_46639);
var state_46674__$1 = state_46674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46674__$1,(20),out,inst_46648);
} else {
if((state_val_46675 === (8))){
var inst_46626 = (state_46674[(9)]);
var inst_46625 = (state_46674[(12)]);
var inst_46630 = (inst_46626 < inst_46625);
var inst_46631 = inst_46630;
var state_46674__$1 = state_46674;
if(cljs.core.truth_(inst_46631)){
var statearr_46741_48897 = state_46674__$1;
(statearr_46741_48897[(1)] = (10));

} else {
var statearr_46742_48898 = state_46674__$1;
(statearr_46742_48898[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43982__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43982__auto____0 = (function (){
var statearr_46744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46744[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43982__auto__);

(statearr_46744[(1)] = (1));

return statearr_46744;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43982__auto____1 = (function (state_46674){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46674);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e46745){var ex__43985__auto__ = e46745;
var statearr_46746_48903 = state_46674;
(statearr_46746_48903[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46674[(4)]))){
var statearr_46748_48907 = state_46674;
(statearr_46748_48907[(1)] = cljs.core.first((state_46674[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48908 = state_46674;
state_46674 = G__48908;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43982__auto__ = function(state_46674){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43982__auto____1.call(this,state_46674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43982__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43982__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_46750 = f__44130__auto__();
(statearr_46750[(6)] = c__44129__auto__);

return statearr_46750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));

return c__44129__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46754 = arguments.length;
switch (G__46754) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46759 = arguments.length;
switch (G__46759) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46764 = arguments.length;
switch (G__46764) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44129__auto___48930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46798){
var state_val_46799 = (state_46798[(1)]);
if((state_val_46799 === (7))){
var inst_46793 = (state_46798[(2)]);
var state_46798__$1 = state_46798;
var statearr_46804_48931 = state_46798__$1;
(statearr_46804_48931[(2)] = inst_46793);

(statearr_46804_48931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (1))){
var inst_46766 = null;
var state_46798__$1 = (function (){var statearr_46813 = state_46798;
(statearr_46813[(7)] = inst_46766);

return statearr_46813;
})();
var statearr_46814_48932 = state_46798__$1;
(statearr_46814_48932[(2)] = null);

(statearr_46814_48932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (4))){
var inst_46774 = (state_46798[(8)]);
var inst_46774__$1 = (state_46798[(2)]);
var inst_46775 = (inst_46774__$1 == null);
var inst_46776 = cljs.core.not(inst_46775);
var state_46798__$1 = (function (){var statearr_46815 = state_46798;
(statearr_46815[(8)] = inst_46774__$1);

return statearr_46815;
})();
if(inst_46776){
var statearr_46816_48933 = state_46798__$1;
(statearr_46816_48933[(1)] = (5));

} else {
var statearr_46817_48934 = state_46798__$1;
(statearr_46817_48934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (6))){
var state_46798__$1 = state_46798;
var statearr_46819_48943 = state_46798__$1;
(statearr_46819_48943[(2)] = null);

(statearr_46819_48943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (3))){
var inst_46795 = (state_46798[(2)]);
var inst_46796 = cljs.core.async.close_BANG_(out);
var state_46798__$1 = (function (){var statearr_46821 = state_46798;
(statearr_46821[(9)] = inst_46795);

return statearr_46821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46798__$1,inst_46796);
} else {
if((state_val_46799 === (2))){
var state_46798__$1 = state_46798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46798__$1,(4),ch);
} else {
if((state_val_46799 === (11))){
var inst_46774 = (state_46798[(8)]);
var inst_46787 = (state_46798[(2)]);
var inst_46766 = inst_46774;
var state_46798__$1 = (function (){var statearr_46823 = state_46798;
(statearr_46823[(7)] = inst_46766);

(statearr_46823[(10)] = inst_46787);

return statearr_46823;
})();
var statearr_46824_48958 = state_46798__$1;
(statearr_46824_48958[(2)] = null);

(statearr_46824_48958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (9))){
var inst_46774 = (state_46798[(8)]);
var state_46798__$1 = state_46798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46798__$1,(11),out,inst_46774);
} else {
if((state_val_46799 === (5))){
var inst_46766 = (state_46798[(7)]);
var inst_46774 = (state_46798[(8)]);
var inst_46782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46774,inst_46766);
var state_46798__$1 = state_46798;
if(inst_46782){
var statearr_46827_48961 = state_46798__$1;
(statearr_46827_48961[(1)] = (8));

} else {
var statearr_46828_48962 = state_46798__$1;
(statearr_46828_48962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (10))){
var inst_46790 = (state_46798[(2)]);
var state_46798__$1 = state_46798;
var statearr_46831_48963 = state_46798__$1;
(statearr_46831_48963[(2)] = inst_46790);

(statearr_46831_48963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (8))){
var inst_46766 = (state_46798[(7)]);
var tmp46826 = inst_46766;
var inst_46766__$1 = tmp46826;
var state_46798__$1 = (function (){var statearr_46833 = state_46798;
(statearr_46833[(7)] = inst_46766__$1);

return statearr_46833;
})();
var statearr_46834_48973 = state_46798__$1;
(statearr_46834_48973[(2)] = null);

(statearr_46834_48973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_46835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46835[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_46835[(1)] = (1));

return statearr_46835;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_46798){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46798);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e46837){var ex__43985__auto__ = e46837;
var statearr_46838_48991 = state_46798;
(statearr_46838_48991[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46798[(4)]))){
var statearr_46839_48995 = state_46798;
(statearr_46839_48995[(1)] = cljs.core.first((state_46798[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48996 = state_46798;
state_46798 = G__48996;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_46798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_46798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_46840 = f__44130__auto__();
(statearr_46840[(6)] = c__44129__auto___48930);

return statearr_46840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46842 = arguments.length;
switch (G__46842) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44129__auto___49000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46881){
var state_val_46882 = (state_46881[(1)]);
if((state_val_46882 === (7))){
var inst_46877 = (state_46881[(2)]);
var state_46881__$1 = state_46881;
var statearr_46883_49001 = state_46881__$1;
(statearr_46883_49001[(2)] = inst_46877);

(statearr_46883_49001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (1))){
var inst_46844 = (new Array(n));
var inst_46845 = inst_46844;
var inst_46846 = (0);
var state_46881__$1 = (function (){var statearr_46884 = state_46881;
(statearr_46884[(7)] = inst_46846);

(statearr_46884[(8)] = inst_46845);

return statearr_46884;
})();
var statearr_46885_49006 = state_46881__$1;
(statearr_46885_49006[(2)] = null);

(statearr_46885_49006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (4))){
var inst_46849 = (state_46881[(9)]);
var inst_46849__$1 = (state_46881[(2)]);
var inst_46850 = (inst_46849__$1 == null);
var inst_46851 = cljs.core.not(inst_46850);
var state_46881__$1 = (function (){var statearr_46887 = state_46881;
(statearr_46887[(9)] = inst_46849__$1);

return statearr_46887;
})();
if(inst_46851){
var statearr_46888_49008 = state_46881__$1;
(statearr_46888_49008[(1)] = (5));

} else {
var statearr_46889_49009 = state_46881__$1;
(statearr_46889_49009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (15))){
var inst_46871 = (state_46881[(2)]);
var state_46881__$1 = state_46881;
var statearr_46890_49010 = state_46881__$1;
(statearr_46890_49010[(2)] = inst_46871);

(statearr_46890_49010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (13))){
var state_46881__$1 = state_46881;
var statearr_46891_49011 = state_46881__$1;
(statearr_46891_49011[(2)] = null);

(statearr_46891_49011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (6))){
var inst_46846 = (state_46881[(7)]);
var inst_46867 = (inst_46846 > (0));
var state_46881__$1 = state_46881;
if(cljs.core.truth_(inst_46867)){
var statearr_46892_49012 = state_46881__$1;
(statearr_46892_49012[(1)] = (12));

} else {
var statearr_46893_49018 = state_46881__$1;
(statearr_46893_49018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (3))){
var inst_46879 = (state_46881[(2)]);
var state_46881__$1 = state_46881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46881__$1,inst_46879);
} else {
if((state_val_46882 === (12))){
var inst_46845 = (state_46881[(8)]);
var inst_46869 = cljs.core.vec(inst_46845);
var state_46881__$1 = state_46881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46881__$1,(15),out,inst_46869);
} else {
if((state_val_46882 === (2))){
var state_46881__$1 = state_46881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46881__$1,(4),ch);
} else {
if((state_val_46882 === (11))){
var inst_46861 = (state_46881[(2)]);
var inst_46862 = (new Array(n));
var inst_46845 = inst_46862;
var inst_46846 = (0);
var state_46881__$1 = (function (){var statearr_46894 = state_46881;
(statearr_46894[(7)] = inst_46846);

(statearr_46894[(8)] = inst_46845);

(statearr_46894[(10)] = inst_46861);

return statearr_46894;
})();
var statearr_46895_49020 = state_46881__$1;
(statearr_46895_49020[(2)] = null);

(statearr_46895_49020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (9))){
var inst_46845 = (state_46881[(8)]);
var inst_46859 = cljs.core.vec(inst_46845);
var state_46881__$1 = state_46881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46881__$1,(11),out,inst_46859);
} else {
if((state_val_46882 === (5))){
var inst_46846 = (state_46881[(7)]);
var inst_46849 = (state_46881[(9)]);
var inst_46845 = (state_46881[(8)]);
var inst_46854 = (state_46881[(11)]);
var inst_46853 = (inst_46845[inst_46846] = inst_46849);
var inst_46854__$1 = (inst_46846 + (1));
var inst_46855 = (inst_46854__$1 < n);
var state_46881__$1 = (function (){var statearr_46897 = state_46881;
(statearr_46897[(12)] = inst_46853);

(statearr_46897[(11)] = inst_46854__$1);

return statearr_46897;
})();
if(cljs.core.truth_(inst_46855)){
var statearr_46898_49026 = state_46881__$1;
(statearr_46898_49026[(1)] = (8));

} else {
var statearr_46899_49027 = state_46881__$1;
(statearr_46899_49027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (14))){
var inst_46874 = (state_46881[(2)]);
var inst_46875 = cljs.core.async.close_BANG_(out);
var state_46881__$1 = (function (){var statearr_46901 = state_46881;
(statearr_46901[(13)] = inst_46874);

return statearr_46901;
})();
var statearr_46902_49028 = state_46881__$1;
(statearr_46902_49028[(2)] = inst_46875);

(statearr_46902_49028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (10))){
var inst_46865 = (state_46881[(2)]);
var state_46881__$1 = state_46881;
var statearr_46913_49029 = state_46881__$1;
(statearr_46913_49029[(2)] = inst_46865);

(statearr_46913_49029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46882 === (8))){
var inst_46845 = (state_46881[(8)]);
var inst_46854 = (state_46881[(11)]);
var tmp46900 = inst_46845;
var inst_46845__$1 = tmp46900;
var inst_46846 = inst_46854;
var state_46881__$1 = (function (){var statearr_46918 = state_46881;
(statearr_46918[(7)] = inst_46846);

(statearr_46918[(8)] = inst_46845__$1);

return statearr_46918;
})();
var statearr_46919_49034 = state_46881__$1;
(statearr_46919_49034[(2)] = null);

(statearr_46919_49034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_46925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46925[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_46925[(1)] = (1));

return statearr_46925;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_46881){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46881);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e46926){var ex__43985__auto__ = e46926;
var statearr_46927_49035 = state_46881;
(statearr_46927_49035[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46881[(4)]))){
var statearr_46928_49036 = state_46881;
(statearr_46928_49036[(1)] = cljs.core.first((state_46881[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49037 = state_46881;
state_46881 = G__49037;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_46881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_46881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_46931 = f__44130__auto__();
(statearr_46931[(6)] = c__44129__auto___49000);

return statearr_46931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46934 = arguments.length;
switch (G__46934) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44129__auto___49040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44130__auto__ = (function (){var switch__43981__auto__ = (function (state_46984){
var state_val_46985 = (state_46984[(1)]);
if((state_val_46985 === (7))){
var inst_46980 = (state_46984[(2)]);
var state_46984__$1 = state_46984;
var statearr_46990_49041 = state_46984__$1;
(statearr_46990_49041[(2)] = inst_46980);

(statearr_46990_49041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (1))){
var inst_46936 = [];
var inst_46937 = inst_46936;
var inst_46938 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46984__$1 = (function (){var statearr_46993 = state_46984;
(statearr_46993[(7)] = inst_46937);

(statearr_46993[(8)] = inst_46938);

return statearr_46993;
})();
var statearr_46994_49044 = state_46984__$1;
(statearr_46994_49044[(2)] = null);

(statearr_46994_49044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (4))){
var inst_46941 = (state_46984[(9)]);
var inst_46941__$1 = (state_46984[(2)]);
var inst_46942 = (inst_46941__$1 == null);
var inst_46943 = cljs.core.not(inst_46942);
var state_46984__$1 = (function (){var statearr_46995 = state_46984;
(statearr_46995[(9)] = inst_46941__$1);

return statearr_46995;
})();
if(inst_46943){
var statearr_46997_49046 = state_46984__$1;
(statearr_46997_49046[(1)] = (5));

} else {
var statearr_46998_49047 = state_46984__$1;
(statearr_46998_49047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (15))){
var inst_46972 = (state_46984[(2)]);
var state_46984__$1 = state_46984;
var statearr_46999_49050 = state_46984__$1;
(statearr_46999_49050[(2)] = inst_46972);

(statearr_46999_49050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (13))){
var state_46984__$1 = state_46984;
var statearr_47000_49051 = state_46984__$1;
(statearr_47000_49051[(2)] = null);

(statearr_47000_49051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (6))){
var inst_46937 = (state_46984[(7)]);
var inst_46967 = inst_46937.length;
var inst_46968 = (inst_46967 > (0));
var state_46984__$1 = state_46984;
if(cljs.core.truth_(inst_46968)){
var statearr_47001_49053 = state_46984__$1;
(statearr_47001_49053[(1)] = (12));

} else {
var statearr_47002_49054 = state_46984__$1;
(statearr_47002_49054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (3))){
var inst_46982 = (state_46984[(2)]);
var state_46984__$1 = state_46984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46984__$1,inst_46982);
} else {
if((state_val_46985 === (12))){
var inst_46937 = (state_46984[(7)]);
var inst_46970 = cljs.core.vec(inst_46937);
var state_46984__$1 = state_46984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46984__$1,(15),out,inst_46970);
} else {
if((state_val_46985 === (2))){
var state_46984__$1 = state_46984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46984__$1,(4),ch);
} else {
if((state_val_46985 === (11))){
var inst_46945 = (state_46984[(10)]);
var inst_46941 = (state_46984[(9)]);
var inst_46955 = (state_46984[(2)]);
var inst_46957 = [];
var inst_46958 = inst_46957.push(inst_46941);
var inst_46937 = inst_46957;
var inst_46938 = inst_46945;
var state_46984__$1 = (function (){var statearr_47012 = state_46984;
(statearr_47012[(7)] = inst_46937);

(statearr_47012[(11)] = inst_46955);

(statearr_47012[(12)] = inst_46958);

(statearr_47012[(8)] = inst_46938);

return statearr_47012;
})();
var statearr_47013_49059 = state_46984__$1;
(statearr_47013_49059[(2)] = null);

(statearr_47013_49059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (9))){
var inst_46937 = (state_46984[(7)]);
var inst_46953 = cljs.core.vec(inst_46937);
var state_46984__$1 = state_46984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46984__$1,(11),out,inst_46953);
} else {
if((state_val_46985 === (5))){
var inst_46945 = (state_46984[(10)]);
var inst_46941 = (state_46984[(9)]);
var inst_46938 = (state_46984[(8)]);
var inst_46945__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46941) : f.call(null,inst_46941));
var inst_46946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46945__$1,inst_46938);
var inst_46947 = cljs.core.keyword_identical_QMARK_(inst_46938,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46948 = ((inst_46946) || (inst_46947));
var state_46984__$1 = (function (){var statearr_47017 = state_46984;
(statearr_47017[(10)] = inst_46945__$1);

return statearr_47017;
})();
if(cljs.core.truth_(inst_46948)){
var statearr_47018_49071 = state_46984__$1;
(statearr_47018_49071[(1)] = (8));

} else {
var statearr_47019_49076 = state_46984__$1;
(statearr_47019_49076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (14))){
var inst_46977 = (state_46984[(2)]);
var inst_46978 = cljs.core.async.close_BANG_(out);
var state_46984__$1 = (function (){var statearr_47026 = state_46984;
(statearr_47026[(13)] = inst_46977);

return statearr_47026;
})();
var statearr_47027_49084 = state_46984__$1;
(statearr_47027_49084[(2)] = inst_46978);

(statearr_47027_49084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (10))){
var inst_46961 = (state_46984[(2)]);
var state_46984__$1 = state_46984;
var statearr_47029_49089 = state_46984__$1;
(statearr_47029_49089[(2)] = inst_46961);

(statearr_47029_49089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46985 === (8))){
var inst_46945 = (state_46984[(10)]);
var inst_46937 = (state_46984[(7)]);
var inst_46941 = (state_46984[(9)]);
var inst_46950 = inst_46937.push(inst_46941);
var tmp47024 = inst_46937;
var inst_46937__$1 = tmp47024;
var inst_46938 = inst_46945;
var state_46984__$1 = (function (){var statearr_47031 = state_46984;
(statearr_47031[(7)] = inst_46937__$1);

(statearr_47031[(14)] = inst_46950);

(statearr_47031[(8)] = inst_46938);

return statearr_47031;
})();
var statearr_47039_49100 = state_46984__$1;
(statearr_47039_49100[(2)] = null);

(statearr_47039_49100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43982__auto__ = null;
var cljs$core$async$state_machine__43982__auto____0 = (function (){
var statearr_47052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47052[(0)] = cljs$core$async$state_machine__43982__auto__);

(statearr_47052[(1)] = (1));

return statearr_47052;
});
var cljs$core$async$state_machine__43982__auto____1 = (function (state_46984){
while(true){
var ret_value__43983__auto__ = (function (){try{while(true){
var result__43984__auto__ = switch__43981__auto__(state_46984);
if(cljs.core.keyword_identical_QMARK_(result__43984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43984__auto__;
}
break;
}
}catch (e47054){var ex__43985__auto__ = e47054;
var statearr_47055_49106 = state_46984;
(statearr_47055_49106[(2)] = ex__43985__auto__);


if(cljs.core.seq((state_46984[(4)]))){
var statearr_47056_49111 = state_46984;
(statearr_47056_49111[(1)] = cljs.core.first((state_46984[(4)])));

} else {
throw ex__43985__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49117 = state_46984;
state_46984 = G__49117;
continue;
} else {
return ret_value__43983__auto__;
}
break;
}
});
cljs$core$async$state_machine__43982__auto__ = function(state_46984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43982__auto____1.call(this,state_46984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43982__auto____0;
cljs$core$async$state_machine__43982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43982__auto____1;
return cljs$core$async$state_machine__43982__auto__;
})()
})();
var state__44131__auto__ = (function (){var statearr_47057 = f__44130__auto__();
(statearr_47057[(6)] = c__44129__auto___49040);

return statearr_47057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44131__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
