// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3256738 = arguments.length;
switch (G__3256738) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async3256739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3256739 = (function (f,blockable,meta3256740){
this.f = f;
this.blockable = blockable;
this.meta3256740 = meta3256740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3256739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3256741,meta3256740__$1){
var self__ = this;
var _3256741__$1 = this;
return (new cljs.core.async.t_cljs$core$async3256739(self__.f,self__.blockable,meta3256740__$1));
});

cljs.core.async.t_cljs$core$async3256739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3256741){
var self__ = this;
var _3256741__$1 = this;
return self__.meta3256740;
});

cljs.core.async.t_cljs$core$async3256739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3256739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3256739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3256739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3256739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3256740","meta3256740",93094457,null)], null);
});

cljs.core.async.t_cljs$core$async3256739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3256739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3256739";

cljs.core.async.t_cljs$core$async3256739.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3256739");
});

cljs.core.async.__GT_t_cljs$core$async3256739 = (function cljs$core$async$__GT_t_cljs$core$async3256739(f__$1,blockable__$1,meta3256740){
return (new cljs.core.async.t_cljs$core$async3256739(f__$1,blockable__$1,meta3256740));
});

}

return (new cljs.core.async.t_cljs$core$async3256739(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__3256745 = arguments.length;
switch (G__3256745) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__3256748 = arguments.length;
switch (G__3256748) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__3256751 = arguments.length;
switch (G__3256751) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3256753 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3256753);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3256753,ret){
return (function (){
return fn1.call(null,val_3256753);
});})(val_3256753,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__3256755 = arguments.length;
switch (G__3256755) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__50564__auto___3256757 = n;
var x_3256758 = (0);
while(true){
if((x_3256758 < n__50564__auto___3256757)){
(a[x_3256758] = (0));

var G__3256759 = (x_3256758 + (1));
x_3256758 = G__3256759;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__3256760 = (i + (1));
i = G__3256760;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async3256761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3256761 = (function (flag,meta3256762){
this.flag = flag;
this.meta3256762 = meta3256762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3256761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3256763,meta3256762__$1){
var self__ = this;
var _3256763__$1 = this;
return (new cljs.core.async.t_cljs$core$async3256761(self__.flag,meta3256762__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3256761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3256763){
var self__ = this;
var _3256763__$1 = this;
return self__.meta3256762;
});})(flag))
;

cljs.core.async.t_cljs$core$async3256761.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3256761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3256761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3256761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3256761.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3256762","meta3256762",-1618231979,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3256761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3256761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3256761";

cljs.core.async.t_cljs$core$async3256761.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3256761");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async3256761 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3256761(flag__$1,meta3256762){
return (new cljs.core.async.t_cljs$core$async3256761(flag__$1,meta3256762));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3256761(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async3256764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3256764 = (function (flag,cb,meta3256765){
this.flag = flag;
this.cb = cb;
this.meta3256765 = meta3256765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3256764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3256766,meta3256765__$1){
var self__ = this;
var _3256766__$1 = this;
return (new cljs.core.async.t_cljs$core$async3256764(self__.flag,self__.cb,meta3256765__$1));
});

cljs.core.async.t_cljs$core$async3256764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3256766){
var self__ = this;
var _3256766__$1 = this;
return self__.meta3256765;
});

cljs.core.async.t_cljs$core$async3256764.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3256764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3256764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3256764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3256764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3256765","meta3256765",205680479,null)], null);
});

cljs.core.async.t_cljs$core$async3256764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3256764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3256764";

cljs.core.async.t_cljs$core$async3256764.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3256764");
});

cljs.core.async.__GT_t_cljs$core$async3256764 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3256764(flag__$1,cb__$1,meta3256765){
return (new cljs.core.async.t_cljs$core$async3256764(flag__$1,cb__$1,meta3256765));
});

}

return (new cljs.core.async.t_cljs$core$async3256764(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3256767_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3256767_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3256768_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3256768_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__49521__auto__ = wport;
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3256769 = (i + (1));
i = G__3256769;
continue;
}
} else {
return null;
}
break;
}
})();
var or__49521__auto__ = ret;
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__49509__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__49509__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__49509__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__50805__auto__ = [];
var len__50798__auto___3256775 = arguments.length;
var i__50799__auto___3256776 = (0);
while(true){
if((i__50799__auto___3256776 < len__50798__auto___3256775)){
args__50805__auto__.push((arguments[i__50799__auto___3256776]));

var G__3256777 = (i__50799__auto___3256776 + (1));
i__50799__auto___3256776 = G__3256777;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3256772){
var map__3256773 = p__3256772;
var map__3256773__$1 = ((((!((map__3256773 == null)))?((((map__3256773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3256773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3256773):map__3256773);
var opts = map__3256773__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3256770){
var G__3256771 = cljs.core.first.call(null,seq3256770);
var seq3256770__$1 = cljs.core.next.call(null,seq3256770);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3256771,seq3256770__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__3256779 = arguments.length;
switch (G__3256779) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__53126__auto___3256825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3256825){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3256825){
return (function (state_3256803){
var state_val_3256804 = (state_3256803[(1)]);
if((state_val_3256804 === (7))){
var inst_3256799 = (state_3256803[(2)]);
var state_3256803__$1 = state_3256803;
var statearr_3256805_3256826 = state_3256803__$1;
(statearr_3256805_3256826[(2)] = inst_3256799);

(statearr_3256805_3256826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (1))){
var state_3256803__$1 = state_3256803;
var statearr_3256806_3256827 = state_3256803__$1;
(statearr_3256806_3256827[(2)] = null);

(statearr_3256806_3256827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (4))){
var inst_3256782 = (state_3256803[(7)]);
var inst_3256782__$1 = (state_3256803[(2)]);
var inst_3256783 = (inst_3256782__$1 == null);
var state_3256803__$1 = (function (){var statearr_3256807 = state_3256803;
(statearr_3256807[(7)] = inst_3256782__$1);

return statearr_3256807;
})();
if(cljs.core.truth_(inst_3256783)){
var statearr_3256808_3256828 = state_3256803__$1;
(statearr_3256808_3256828[(1)] = (5));

} else {
var statearr_3256809_3256829 = state_3256803__$1;
(statearr_3256809_3256829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (13))){
var state_3256803__$1 = state_3256803;
var statearr_3256810_3256830 = state_3256803__$1;
(statearr_3256810_3256830[(2)] = null);

(statearr_3256810_3256830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (6))){
var inst_3256782 = (state_3256803[(7)]);
var state_3256803__$1 = state_3256803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3256803__$1,(11),to,inst_3256782);
} else {
if((state_val_3256804 === (3))){
var inst_3256801 = (state_3256803[(2)]);
var state_3256803__$1 = state_3256803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3256803__$1,inst_3256801);
} else {
if((state_val_3256804 === (12))){
var state_3256803__$1 = state_3256803;
var statearr_3256811_3256831 = state_3256803__$1;
(statearr_3256811_3256831[(2)] = null);

(statearr_3256811_3256831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (2))){
var state_3256803__$1 = state_3256803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3256803__$1,(4),from);
} else {
if((state_val_3256804 === (11))){
var inst_3256792 = (state_3256803[(2)]);
var state_3256803__$1 = state_3256803;
if(cljs.core.truth_(inst_3256792)){
var statearr_3256812_3256832 = state_3256803__$1;
(statearr_3256812_3256832[(1)] = (12));

} else {
var statearr_3256813_3256833 = state_3256803__$1;
(statearr_3256813_3256833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (9))){
var state_3256803__$1 = state_3256803;
var statearr_3256814_3256834 = state_3256803__$1;
(statearr_3256814_3256834[(2)] = null);

(statearr_3256814_3256834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (5))){
var state_3256803__$1 = state_3256803;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3256815_3256835 = state_3256803__$1;
(statearr_3256815_3256835[(1)] = (8));

} else {
var statearr_3256816_3256836 = state_3256803__$1;
(statearr_3256816_3256836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (14))){
var inst_3256797 = (state_3256803[(2)]);
var state_3256803__$1 = state_3256803;
var statearr_3256817_3256837 = state_3256803__$1;
(statearr_3256817_3256837[(2)] = inst_3256797);

(statearr_3256817_3256837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (10))){
var inst_3256789 = (state_3256803[(2)]);
var state_3256803__$1 = state_3256803;
var statearr_3256818_3256838 = state_3256803__$1;
(statearr_3256818_3256838[(2)] = inst_3256789);

(statearr_3256818_3256838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256804 === (8))){
var inst_3256786 = cljs.core.async.close_BANG_.call(null,to);
var state_3256803__$1 = state_3256803;
var statearr_3256819_3256839 = state_3256803__$1;
(statearr_3256819_3256839[(2)] = inst_3256786);

(statearr_3256819_3256839[(1)] = (10));


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
});})(c__53126__auto___3256825))
;
return ((function (switch__53103__auto__,c__53126__auto___3256825){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3256820 = [null,null,null,null,null,null,null,null];
(statearr_3256820[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3256820[(1)] = (1));

return statearr_3256820;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3256803){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3256803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3256821){if((e3256821 instanceof Object)){
var ex__53107__auto__ = e3256821;
var statearr_3256822_3256840 = state_3256803;
(statearr_3256822_3256840[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3256803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3256821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3256841 = state_3256803;
state_3256803 = G__3256841;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3256803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3256803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3256825))
})();
var state__53128__auto__ = (function (){var statearr_3256823 = f__53127__auto__.call(null);
(statearr_3256823[(6)] = c__53126__auto___3256825);

return statearr_3256823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3256825))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3256842){
var vec__3256843 = p__3256842;
var v = cljs.core.nth.call(null,vec__3256843,(0),null);
var p = cljs.core.nth.call(null,vec__3256843,(1),null);
var job = vec__3256843;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__53126__auto___3257014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3257014,res,vec__3256843,v,p,job,jobs,results){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3257014,res,vec__3256843,v,p,job,jobs,results){
return (function (state_3256850){
var state_val_3256851 = (state_3256850[(1)]);
if((state_val_3256851 === (1))){
var state_3256850__$1 = state_3256850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3256850__$1,(2),res,v);
} else {
if((state_val_3256851 === (2))){
var inst_3256847 = (state_3256850[(2)]);
var inst_3256848 = cljs.core.async.close_BANG_.call(null,res);
var state_3256850__$1 = (function (){var statearr_3256852 = state_3256850;
(statearr_3256852[(7)] = inst_3256847);

return statearr_3256852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3256850__$1,inst_3256848);
} else {
return null;
}
}
});})(c__53126__auto___3257014,res,vec__3256843,v,p,job,jobs,results))
;
return ((function (switch__53103__auto__,c__53126__auto___3257014,res,vec__3256843,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0 = (function (){
var statearr_3256853 = [null,null,null,null,null,null,null,null];
(statearr_3256853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__);

(statearr_3256853[(1)] = (1));

return statearr_3256853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1 = (function (state_3256850){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3256850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3256854){if((e3256854 instanceof Object)){
var ex__53107__auto__ = e3256854;
var statearr_3256855_3257015 = state_3256850;
(statearr_3256855_3257015[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3256850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3256854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257016 = state_3256850;
state_3256850 = G__3257016;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = function(state_3256850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1.call(this,state_3256850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3257014,res,vec__3256843,v,p,job,jobs,results))
})();
var state__53128__auto__ = (function (){var statearr_3256856 = f__53127__auto__.call(null);
(statearr_3256856[(6)] = c__53126__auto___3257014);

return statearr_3256856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3257014,res,vec__3256843,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3256857){
var vec__3256858 = p__3256857;
var v = cljs.core.nth.call(null,vec__3256858,(0),null);
var p = cljs.core.nth.call(null,vec__3256858,(1),null);
var job = vec__3256858;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__50564__auto___3257017 = n;
var __3257018 = (0);
while(true){
if((__3257018 < n__50564__auto___3257017)){
var G__3256861_3257019 = type;
var G__3256861_3257020__$1 = (((G__3256861_3257019 instanceof cljs.core.Keyword))?G__3256861_3257019.fqn:null);
switch (G__3256861_3257020__$1) {
case "compute":
var c__53126__auto___3257022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3257018,c__53126__auto___3257022,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (__3257018,c__53126__auto___3257022,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async){
return (function (state_3256874){
var state_val_3256875 = (state_3256874[(1)]);
if((state_val_3256875 === (1))){
var state_3256874__$1 = state_3256874;
var statearr_3256876_3257023 = state_3256874__$1;
(statearr_3256876_3257023[(2)] = null);

(statearr_3256876_3257023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256875 === (2))){
var state_3256874__$1 = state_3256874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3256874__$1,(4),jobs);
} else {
if((state_val_3256875 === (3))){
var inst_3256872 = (state_3256874[(2)]);
var state_3256874__$1 = state_3256874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3256874__$1,inst_3256872);
} else {
if((state_val_3256875 === (4))){
var inst_3256864 = (state_3256874[(2)]);
var inst_3256865 = process.call(null,inst_3256864);
var state_3256874__$1 = state_3256874;
if(cljs.core.truth_(inst_3256865)){
var statearr_3256877_3257024 = state_3256874__$1;
(statearr_3256877_3257024[(1)] = (5));

} else {
var statearr_3256878_3257025 = state_3256874__$1;
(statearr_3256878_3257025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256875 === (5))){
var state_3256874__$1 = state_3256874;
var statearr_3256879_3257026 = state_3256874__$1;
(statearr_3256879_3257026[(2)] = null);

(statearr_3256879_3257026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256875 === (6))){
var state_3256874__$1 = state_3256874;
var statearr_3256880_3257027 = state_3256874__$1;
(statearr_3256880_3257027[(2)] = null);

(statearr_3256880_3257027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256875 === (7))){
var inst_3256870 = (state_3256874[(2)]);
var state_3256874__$1 = state_3256874;
var statearr_3256881_3257028 = state_3256874__$1;
(statearr_3256881_3257028[(2)] = inst_3256870);

(statearr_3256881_3257028[(1)] = (3));


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
});})(__3257018,c__53126__auto___3257022,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async))
;
return ((function (__3257018,switch__53103__auto__,c__53126__auto___3257022,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0 = (function (){
var statearr_3256882 = [null,null,null,null,null,null,null];
(statearr_3256882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__);

(statearr_3256882[(1)] = (1));

return statearr_3256882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1 = (function (state_3256874){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3256874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3256883){if((e3256883 instanceof Object)){
var ex__53107__auto__ = e3256883;
var statearr_3256884_3257029 = state_3256874;
(statearr_3256884_3257029[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3256874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3256883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257030 = state_3256874;
state_3256874 = G__3257030;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = function(state_3256874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1.call(this,state_3256874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__;
})()
;})(__3257018,switch__53103__auto__,c__53126__auto___3257022,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async))
})();
var state__53128__auto__ = (function (){var statearr_3256885 = f__53127__auto__.call(null);
(statearr_3256885[(6)] = c__53126__auto___3257022);

return statearr_3256885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(__3257018,c__53126__auto___3257022,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async))
);


break;
case "async":
var c__53126__auto___3257031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3257018,c__53126__auto___3257031,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (__3257018,c__53126__auto___3257031,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async){
return (function (state_3256898){
var state_val_3256899 = (state_3256898[(1)]);
if((state_val_3256899 === (1))){
var state_3256898__$1 = state_3256898;
var statearr_3256900_3257032 = state_3256898__$1;
(statearr_3256900_3257032[(2)] = null);

(statearr_3256900_3257032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256899 === (2))){
var state_3256898__$1 = state_3256898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3256898__$1,(4),jobs);
} else {
if((state_val_3256899 === (3))){
var inst_3256896 = (state_3256898[(2)]);
var state_3256898__$1 = state_3256898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3256898__$1,inst_3256896);
} else {
if((state_val_3256899 === (4))){
var inst_3256888 = (state_3256898[(2)]);
var inst_3256889 = async.call(null,inst_3256888);
var state_3256898__$1 = state_3256898;
if(cljs.core.truth_(inst_3256889)){
var statearr_3256901_3257033 = state_3256898__$1;
(statearr_3256901_3257033[(1)] = (5));

} else {
var statearr_3256902_3257034 = state_3256898__$1;
(statearr_3256902_3257034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256899 === (5))){
var state_3256898__$1 = state_3256898;
var statearr_3256903_3257035 = state_3256898__$1;
(statearr_3256903_3257035[(2)] = null);

(statearr_3256903_3257035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256899 === (6))){
var state_3256898__$1 = state_3256898;
var statearr_3256904_3257036 = state_3256898__$1;
(statearr_3256904_3257036[(2)] = null);

(statearr_3256904_3257036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256899 === (7))){
var inst_3256894 = (state_3256898[(2)]);
var state_3256898__$1 = state_3256898;
var statearr_3256905_3257037 = state_3256898__$1;
(statearr_3256905_3257037[(2)] = inst_3256894);

(statearr_3256905_3257037[(1)] = (3));


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
});})(__3257018,c__53126__auto___3257031,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async))
;
return ((function (__3257018,switch__53103__auto__,c__53126__auto___3257031,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0 = (function (){
var statearr_3256906 = [null,null,null,null,null,null,null];
(statearr_3256906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__);

(statearr_3256906[(1)] = (1));

return statearr_3256906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1 = (function (state_3256898){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3256898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3256907){if((e3256907 instanceof Object)){
var ex__53107__auto__ = e3256907;
var statearr_3256908_3257038 = state_3256898;
(statearr_3256908_3257038[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3256898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3256907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257039 = state_3256898;
state_3256898 = G__3257039;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = function(state_3256898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1.call(this,state_3256898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__;
})()
;})(__3257018,switch__53103__auto__,c__53126__auto___3257031,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async))
})();
var state__53128__auto__ = (function (){var statearr_3256909 = f__53127__auto__.call(null);
(statearr_3256909[(6)] = c__53126__auto___3257031);

return statearr_3256909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(__3257018,c__53126__auto___3257031,G__3256861_3257019,G__3256861_3257020__$1,n__50564__auto___3257017,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3256861_3257020__$1)].join('')));

}

var G__3257040 = (__3257018 + (1));
__3257018 = G__3257040;
continue;
} else {
}
break;
}

var c__53126__auto___3257041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3257041,jobs,results,process,async){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3257041,jobs,results,process,async){
return (function (state_3256931){
var state_val_3256932 = (state_3256931[(1)]);
if((state_val_3256932 === (1))){
var state_3256931__$1 = state_3256931;
var statearr_3256933_3257042 = state_3256931__$1;
(statearr_3256933_3257042[(2)] = null);

(statearr_3256933_3257042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256932 === (2))){
var state_3256931__$1 = state_3256931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3256931__$1,(4),from);
} else {
if((state_val_3256932 === (3))){
var inst_3256929 = (state_3256931[(2)]);
var state_3256931__$1 = state_3256931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3256931__$1,inst_3256929);
} else {
if((state_val_3256932 === (4))){
var inst_3256912 = (state_3256931[(7)]);
var inst_3256912__$1 = (state_3256931[(2)]);
var inst_3256913 = (inst_3256912__$1 == null);
var state_3256931__$1 = (function (){var statearr_3256934 = state_3256931;
(statearr_3256934[(7)] = inst_3256912__$1);

return statearr_3256934;
})();
if(cljs.core.truth_(inst_3256913)){
var statearr_3256935_3257043 = state_3256931__$1;
(statearr_3256935_3257043[(1)] = (5));

} else {
var statearr_3256936_3257044 = state_3256931__$1;
(statearr_3256936_3257044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256932 === (5))){
var inst_3256915 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3256931__$1 = state_3256931;
var statearr_3256937_3257045 = state_3256931__$1;
(statearr_3256937_3257045[(2)] = inst_3256915);

(statearr_3256937_3257045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256932 === (6))){
var inst_3256912 = (state_3256931[(7)]);
var inst_3256917 = (state_3256931[(8)]);
var inst_3256917__$1 = cljs.core.async.chan.call(null,(1));
var inst_3256918 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3256919 = [inst_3256912,inst_3256917__$1];
var inst_3256920 = (new cljs.core.PersistentVector(null,2,(5),inst_3256918,inst_3256919,null));
var state_3256931__$1 = (function (){var statearr_3256938 = state_3256931;
(statearr_3256938[(8)] = inst_3256917__$1);

return statearr_3256938;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3256931__$1,(8),jobs,inst_3256920);
} else {
if((state_val_3256932 === (7))){
var inst_3256927 = (state_3256931[(2)]);
var state_3256931__$1 = state_3256931;
var statearr_3256939_3257046 = state_3256931__$1;
(statearr_3256939_3257046[(2)] = inst_3256927);

(statearr_3256939_3257046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256932 === (8))){
var inst_3256917 = (state_3256931[(8)]);
var inst_3256922 = (state_3256931[(2)]);
var state_3256931__$1 = (function (){var statearr_3256940 = state_3256931;
(statearr_3256940[(9)] = inst_3256922);

return statearr_3256940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3256931__$1,(9),results,inst_3256917);
} else {
if((state_val_3256932 === (9))){
var inst_3256924 = (state_3256931[(2)]);
var state_3256931__$1 = (function (){var statearr_3256941 = state_3256931;
(statearr_3256941[(10)] = inst_3256924);

return statearr_3256941;
})();
var statearr_3256942_3257047 = state_3256931__$1;
(statearr_3256942_3257047[(2)] = null);

(statearr_3256942_3257047[(1)] = (2));


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
});})(c__53126__auto___3257041,jobs,results,process,async))
;
return ((function (switch__53103__auto__,c__53126__auto___3257041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0 = (function (){
var statearr_3256943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3256943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__);

(statearr_3256943[(1)] = (1));

return statearr_3256943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1 = (function (state_3256931){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3256931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3256944){if((e3256944 instanceof Object)){
var ex__53107__auto__ = e3256944;
var statearr_3256945_3257048 = state_3256931;
(statearr_3256945_3257048[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3256931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3256944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257049 = state_3256931;
state_3256931 = G__3257049;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = function(state_3256931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1.call(this,state_3256931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3257041,jobs,results,process,async))
})();
var state__53128__auto__ = (function (){var statearr_3256946 = f__53127__auto__.call(null);
(statearr_3256946[(6)] = c__53126__auto___3257041);

return statearr_3256946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3257041,jobs,results,process,async))
);


var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__,jobs,results,process,async){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__,jobs,results,process,async){
return (function (state_3256984){
var state_val_3256985 = (state_3256984[(1)]);
if((state_val_3256985 === (7))){
var inst_3256980 = (state_3256984[(2)]);
var state_3256984__$1 = state_3256984;
var statearr_3256986_3257050 = state_3256984__$1;
(statearr_3256986_3257050[(2)] = inst_3256980);

(statearr_3256986_3257050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (20))){
var state_3256984__$1 = state_3256984;
var statearr_3256987_3257051 = state_3256984__$1;
(statearr_3256987_3257051[(2)] = null);

(statearr_3256987_3257051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (1))){
var state_3256984__$1 = state_3256984;
var statearr_3256988_3257052 = state_3256984__$1;
(statearr_3256988_3257052[(2)] = null);

(statearr_3256988_3257052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (4))){
var inst_3256949 = (state_3256984[(7)]);
var inst_3256949__$1 = (state_3256984[(2)]);
var inst_3256950 = (inst_3256949__$1 == null);
var state_3256984__$1 = (function (){var statearr_3256989 = state_3256984;
(statearr_3256989[(7)] = inst_3256949__$1);

return statearr_3256989;
})();
if(cljs.core.truth_(inst_3256950)){
var statearr_3256990_3257053 = state_3256984__$1;
(statearr_3256990_3257053[(1)] = (5));

} else {
var statearr_3256991_3257054 = state_3256984__$1;
(statearr_3256991_3257054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (15))){
var inst_3256962 = (state_3256984[(8)]);
var state_3256984__$1 = state_3256984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3256984__$1,(18),to,inst_3256962);
} else {
if((state_val_3256985 === (21))){
var inst_3256975 = (state_3256984[(2)]);
var state_3256984__$1 = state_3256984;
var statearr_3256992_3257055 = state_3256984__$1;
(statearr_3256992_3257055[(2)] = inst_3256975);

(statearr_3256992_3257055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (13))){
var inst_3256977 = (state_3256984[(2)]);
var state_3256984__$1 = (function (){var statearr_3256993 = state_3256984;
(statearr_3256993[(9)] = inst_3256977);

return statearr_3256993;
})();
var statearr_3256994_3257056 = state_3256984__$1;
(statearr_3256994_3257056[(2)] = null);

(statearr_3256994_3257056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (6))){
var inst_3256949 = (state_3256984[(7)]);
var state_3256984__$1 = state_3256984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3256984__$1,(11),inst_3256949);
} else {
if((state_val_3256985 === (17))){
var inst_3256970 = (state_3256984[(2)]);
var state_3256984__$1 = state_3256984;
if(cljs.core.truth_(inst_3256970)){
var statearr_3256995_3257057 = state_3256984__$1;
(statearr_3256995_3257057[(1)] = (19));

} else {
var statearr_3256996_3257058 = state_3256984__$1;
(statearr_3256996_3257058[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (3))){
var inst_3256982 = (state_3256984[(2)]);
var state_3256984__$1 = state_3256984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3256984__$1,inst_3256982);
} else {
if((state_val_3256985 === (12))){
var inst_3256959 = (state_3256984[(10)]);
var state_3256984__$1 = state_3256984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3256984__$1,(14),inst_3256959);
} else {
if((state_val_3256985 === (2))){
var state_3256984__$1 = state_3256984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3256984__$1,(4),results);
} else {
if((state_val_3256985 === (19))){
var state_3256984__$1 = state_3256984;
var statearr_3256997_3257059 = state_3256984__$1;
(statearr_3256997_3257059[(2)] = null);

(statearr_3256997_3257059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (11))){
var inst_3256959 = (state_3256984[(2)]);
var state_3256984__$1 = (function (){var statearr_3256998 = state_3256984;
(statearr_3256998[(10)] = inst_3256959);

return statearr_3256998;
})();
var statearr_3256999_3257060 = state_3256984__$1;
(statearr_3256999_3257060[(2)] = null);

(statearr_3256999_3257060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (9))){
var state_3256984__$1 = state_3256984;
var statearr_3257000_3257061 = state_3256984__$1;
(statearr_3257000_3257061[(2)] = null);

(statearr_3257000_3257061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (5))){
var state_3256984__$1 = state_3256984;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3257001_3257062 = state_3256984__$1;
(statearr_3257001_3257062[(1)] = (8));

} else {
var statearr_3257002_3257063 = state_3256984__$1;
(statearr_3257002_3257063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (14))){
var inst_3256964 = (state_3256984[(11)]);
var inst_3256962 = (state_3256984[(8)]);
var inst_3256962__$1 = (state_3256984[(2)]);
var inst_3256963 = (inst_3256962__$1 == null);
var inst_3256964__$1 = cljs.core.not.call(null,inst_3256963);
var state_3256984__$1 = (function (){var statearr_3257003 = state_3256984;
(statearr_3257003[(11)] = inst_3256964__$1);

(statearr_3257003[(8)] = inst_3256962__$1);

return statearr_3257003;
})();
if(inst_3256964__$1){
var statearr_3257004_3257064 = state_3256984__$1;
(statearr_3257004_3257064[(1)] = (15));

} else {
var statearr_3257005_3257065 = state_3256984__$1;
(statearr_3257005_3257065[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (16))){
var inst_3256964 = (state_3256984[(11)]);
var state_3256984__$1 = state_3256984;
var statearr_3257006_3257066 = state_3256984__$1;
(statearr_3257006_3257066[(2)] = inst_3256964);

(statearr_3257006_3257066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (10))){
var inst_3256956 = (state_3256984[(2)]);
var state_3256984__$1 = state_3256984;
var statearr_3257007_3257067 = state_3256984__$1;
(statearr_3257007_3257067[(2)] = inst_3256956);

(statearr_3257007_3257067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (18))){
var inst_3256967 = (state_3256984[(2)]);
var state_3256984__$1 = state_3256984;
var statearr_3257008_3257068 = state_3256984__$1;
(statearr_3257008_3257068[(2)] = inst_3256967);

(statearr_3257008_3257068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3256985 === (8))){
var inst_3256953 = cljs.core.async.close_BANG_.call(null,to);
var state_3256984__$1 = state_3256984;
var statearr_3257009_3257069 = state_3256984__$1;
(statearr_3257009_3257069[(2)] = inst_3256953);

(statearr_3257009_3257069[(1)] = (10));


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
});})(c__53126__auto__,jobs,results,process,async))
;
return ((function (switch__53103__auto__,c__53126__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0 = (function (){
var statearr_3257010 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3257010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__);

(statearr_3257010[(1)] = (1));

return statearr_3257010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1 = (function (state_3256984){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3256984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3257011){if((e3257011 instanceof Object)){
var ex__53107__auto__ = e3257011;
var statearr_3257012_3257070 = state_3256984;
(statearr_3257012_3257070[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3256984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3257011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257071 = state_3256984;
state_3256984 = G__3257071;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__ = function(state_3256984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1.call(this,state_3256984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__,jobs,results,process,async))
})();
var state__53128__auto__ = (function (){var statearr_3257013 = f__53127__auto__.call(null);
(statearr_3257013[(6)] = c__53126__auto__);

return statearr_3257013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__,jobs,results,process,async))
);

return c__53126__auto__;
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
var G__3257073 = arguments.length;
switch (G__3257073) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__3257076 = arguments.length;
switch (G__3257076) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__3257079 = arguments.length;
switch (G__3257079) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__53126__auto___3257128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3257128,tc,fc){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3257128,tc,fc){
return (function (state_3257105){
var state_val_3257106 = (state_3257105[(1)]);
if((state_val_3257106 === (7))){
var inst_3257101 = (state_3257105[(2)]);
var state_3257105__$1 = state_3257105;
var statearr_3257107_3257129 = state_3257105__$1;
(statearr_3257107_3257129[(2)] = inst_3257101);

(statearr_3257107_3257129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (1))){
var state_3257105__$1 = state_3257105;
var statearr_3257108_3257130 = state_3257105__$1;
(statearr_3257108_3257130[(2)] = null);

(statearr_3257108_3257130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (4))){
var inst_3257082 = (state_3257105[(7)]);
var inst_3257082__$1 = (state_3257105[(2)]);
var inst_3257083 = (inst_3257082__$1 == null);
var state_3257105__$1 = (function (){var statearr_3257109 = state_3257105;
(statearr_3257109[(7)] = inst_3257082__$1);

return statearr_3257109;
})();
if(cljs.core.truth_(inst_3257083)){
var statearr_3257110_3257131 = state_3257105__$1;
(statearr_3257110_3257131[(1)] = (5));

} else {
var statearr_3257111_3257132 = state_3257105__$1;
(statearr_3257111_3257132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (13))){
var state_3257105__$1 = state_3257105;
var statearr_3257112_3257133 = state_3257105__$1;
(statearr_3257112_3257133[(2)] = null);

(statearr_3257112_3257133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (6))){
var inst_3257082 = (state_3257105[(7)]);
var inst_3257088 = p.call(null,inst_3257082);
var state_3257105__$1 = state_3257105;
if(cljs.core.truth_(inst_3257088)){
var statearr_3257113_3257134 = state_3257105__$1;
(statearr_3257113_3257134[(1)] = (9));

} else {
var statearr_3257114_3257135 = state_3257105__$1;
(statearr_3257114_3257135[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (3))){
var inst_3257103 = (state_3257105[(2)]);
var state_3257105__$1 = state_3257105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3257105__$1,inst_3257103);
} else {
if((state_val_3257106 === (12))){
var state_3257105__$1 = state_3257105;
var statearr_3257115_3257136 = state_3257105__$1;
(statearr_3257115_3257136[(2)] = null);

(statearr_3257115_3257136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (2))){
var state_3257105__$1 = state_3257105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3257105__$1,(4),ch);
} else {
if((state_val_3257106 === (11))){
var inst_3257082 = (state_3257105[(7)]);
var inst_3257092 = (state_3257105[(2)]);
var state_3257105__$1 = state_3257105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3257105__$1,(8),inst_3257092,inst_3257082);
} else {
if((state_val_3257106 === (9))){
var state_3257105__$1 = state_3257105;
var statearr_3257116_3257137 = state_3257105__$1;
(statearr_3257116_3257137[(2)] = tc);

(statearr_3257116_3257137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (5))){
var inst_3257085 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3257086 = cljs.core.async.close_BANG_.call(null,fc);
var state_3257105__$1 = (function (){var statearr_3257117 = state_3257105;
(statearr_3257117[(8)] = inst_3257085);

return statearr_3257117;
})();
var statearr_3257118_3257138 = state_3257105__$1;
(statearr_3257118_3257138[(2)] = inst_3257086);

(statearr_3257118_3257138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (14))){
var inst_3257099 = (state_3257105[(2)]);
var state_3257105__$1 = state_3257105;
var statearr_3257119_3257139 = state_3257105__$1;
(statearr_3257119_3257139[(2)] = inst_3257099);

(statearr_3257119_3257139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (10))){
var state_3257105__$1 = state_3257105;
var statearr_3257120_3257140 = state_3257105__$1;
(statearr_3257120_3257140[(2)] = fc);

(statearr_3257120_3257140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257106 === (8))){
var inst_3257094 = (state_3257105[(2)]);
var state_3257105__$1 = state_3257105;
if(cljs.core.truth_(inst_3257094)){
var statearr_3257121_3257141 = state_3257105__$1;
(statearr_3257121_3257141[(1)] = (12));

} else {
var statearr_3257122_3257142 = state_3257105__$1;
(statearr_3257122_3257142[(1)] = (13));

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
});})(c__53126__auto___3257128,tc,fc))
;
return ((function (switch__53103__auto__,c__53126__auto___3257128,tc,fc){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3257123 = [null,null,null,null,null,null,null,null,null];
(statearr_3257123[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3257123[(1)] = (1));

return statearr_3257123;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3257105){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3257105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3257124){if((e3257124 instanceof Object)){
var ex__53107__auto__ = e3257124;
var statearr_3257125_3257143 = state_3257105;
(statearr_3257125_3257143[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3257124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257144 = state_3257105;
state_3257105 = G__3257144;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3257105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3257105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3257128,tc,fc))
})();
var state__53128__auto__ = (function (){var statearr_3257126 = f__53127__auto__.call(null);
(statearr_3257126[(6)] = c__53126__auto___3257128);

return statearr_3257126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3257128,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__){
return (function (state_3257165){
var state_val_3257166 = (state_3257165[(1)]);
if((state_val_3257166 === (7))){
var inst_3257161 = (state_3257165[(2)]);
var state_3257165__$1 = state_3257165;
var statearr_3257167_3257185 = state_3257165__$1;
(statearr_3257167_3257185[(2)] = inst_3257161);

(statearr_3257167_3257185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257166 === (1))){
var inst_3257145 = init;
var state_3257165__$1 = (function (){var statearr_3257168 = state_3257165;
(statearr_3257168[(7)] = inst_3257145);

return statearr_3257168;
})();
var statearr_3257169_3257186 = state_3257165__$1;
(statearr_3257169_3257186[(2)] = null);

(statearr_3257169_3257186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257166 === (4))){
var inst_3257148 = (state_3257165[(8)]);
var inst_3257148__$1 = (state_3257165[(2)]);
var inst_3257149 = (inst_3257148__$1 == null);
var state_3257165__$1 = (function (){var statearr_3257170 = state_3257165;
(statearr_3257170[(8)] = inst_3257148__$1);

return statearr_3257170;
})();
if(cljs.core.truth_(inst_3257149)){
var statearr_3257171_3257187 = state_3257165__$1;
(statearr_3257171_3257187[(1)] = (5));

} else {
var statearr_3257172_3257188 = state_3257165__$1;
(statearr_3257172_3257188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257166 === (6))){
var inst_3257148 = (state_3257165[(8)]);
var inst_3257152 = (state_3257165[(9)]);
var inst_3257145 = (state_3257165[(7)]);
var inst_3257152__$1 = f.call(null,inst_3257145,inst_3257148);
var inst_3257153 = cljs.core.reduced_QMARK_.call(null,inst_3257152__$1);
var state_3257165__$1 = (function (){var statearr_3257173 = state_3257165;
(statearr_3257173[(9)] = inst_3257152__$1);

return statearr_3257173;
})();
if(inst_3257153){
var statearr_3257174_3257189 = state_3257165__$1;
(statearr_3257174_3257189[(1)] = (8));

} else {
var statearr_3257175_3257190 = state_3257165__$1;
(statearr_3257175_3257190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257166 === (3))){
var inst_3257163 = (state_3257165[(2)]);
var state_3257165__$1 = state_3257165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3257165__$1,inst_3257163);
} else {
if((state_val_3257166 === (2))){
var state_3257165__$1 = state_3257165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3257165__$1,(4),ch);
} else {
if((state_val_3257166 === (9))){
var inst_3257152 = (state_3257165[(9)]);
var inst_3257145 = inst_3257152;
var state_3257165__$1 = (function (){var statearr_3257176 = state_3257165;
(statearr_3257176[(7)] = inst_3257145);

return statearr_3257176;
})();
var statearr_3257177_3257191 = state_3257165__$1;
(statearr_3257177_3257191[(2)] = null);

(statearr_3257177_3257191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257166 === (5))){
var inst_3257145 = (state_3257165[(7)]);
var state_3257165__$1 = state_3257165;
var statearr_3257178_3257192 = state_3257165__$1;
(statearr_3257178_3257192[(2)] = inst_3257145);

(statearr_3257178_3257192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257166 === (10))){
var inst_3257159 = (state_3257165[(2)]);
var state_3257165__$1 = state_3257165;
var statearr_3257179_3257193 = state_3257165__$1;
(statearr_3257179_3257193[(2)] = inst_3257159);

(statearr_3257179_3257193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257166 === (8))){
var inst_3257152 = (state_3257165[(9)]);
var inst_3257155 = cljs.core.deref.call(null,inst_3257152);
var state_3257165__$1 = state_3257165;
var statearr_3257180_3257194 = state_3257165__$1;
(statearr_3257180_3257194[(2)] = inst_3257155);

(statearr_3257180_3257194[(1)] = (10));


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
});})(c__53126__auto__))
;
return ((function (switch__53103__auto__,c__53126__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__53104__auto__ = null;
var cljs$core$async$reduce_$_state_machine__53104__auto____0 = (function (){
var statearr_3257181 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3257181[(0)] = cljs$core$async$reduce_$_state_machine__53104__auto__);

(statearr_3257181[(1)] = (1));

return statearr_3257181;
});
var cljs$core$async$reduce_$_state_machine__53104__auto____1 = (function (state_3257165){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3257165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3257182){if((e3257182 instanceof Object)){
var ex__53107__auto__ = e3257182;
var statearr_3257183_3257195 = state_3257165;
(statearr_3257183_3257195[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3257182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257196 = state_3257165;
state_3257165 = G__3257196;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__53104__auto__ = function(state_3257165){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__53104__auto____1.call(this,state_3257165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__53104__auto____0;
cljs$core$async$reduce_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__53104__auto____1;
return cljs$core$async$reduce_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__))
})();
var state__53128__auto__ = (function (){var statearr_3257184 = f__53127__auto__.call(null);
(statearr_3257184[(6)] = c__53126__auto__);

return statearr_3257184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__))
);

return c__53126__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__,f__$1){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__,f__$1){
return (function (state_3257202){
var state_val_3257203 = (state_3257202[(1)]);
if((state_val_3257203 === (1))){
var inst_3257197 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3257202__$1 = state_3257202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3257202__$1,(2),inst_3257197);
} else {
if((state_val_3257203 === (2))){
var inst_3257199 = (state_3257202[(2)]);
var inst_3257200 = f__$1.call(null,inst_3257199);
var state_3257202__$1 = state_3257202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3257202__$1,inst_3257200);
} else {
return null;
}
}
});})(c__53126__auto__,f__$1))
;
return ((function (switch__53103__auto__,c__53126__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__53104__auto__ = null;
var cljs$core$async$transduce_$_state_machine__53104__auto____0 = (function (){
var statearr_3257204 = [null,null,null,null,null,null,null];
(statearr_3257204[(0)] = cljs$core$async$transduce_$_state_machine__53104__auto__);

(statearr_3257204[(1)] = (1));

return statearr_3257204;
});
var cljs$core$async$transduce_$_state_machine__53104__auto____1 = (function (state_3257202){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3257202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3257205){if((e3257205 instanceof Object)){
var ex__53107__auto__ = e3257205;
var statearr_3257206_3257208 = state_3257202;
(statearr_3257206_3257208[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3257205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257209 = state_3257202;
state_3257202 = G__3257209;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__53104__auto__ = function(state_3257202){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__53104__auto____1.call(this,state_3257202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__53104__auto____0;
cljs$core$async$transduce_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__53104__auto____1;
return cljs$core$async$transduce_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__,f__$1))
})();
var state__53128__auto__ = (function (){var statearr_3257207 = f__53127__auto__.call(null);
(statearr_3257207[(6)] = c__53126__auto__);

return statearr_3257207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__,f__$1))
);

return c__53126__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__3257211 = arguments.length;
switch (G__3257211) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__){
return (function (state_3257236){
var state_val_3257237 = (state_3257236[(1)]);
if((state_val_3257237 === (7))){
var inst_3257218 = (state_3257236[(2)]);
var state_3257236__$1 = state_3257236;
var statearr_3257238_3257259 = state_3257236__$1;
(statearr_3257238_3257259[(2)] = inst_3257218);

(statearr_3257238_3257259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (1))){
var inst_3257212 = cljs.core.seq.call(null,coll);
var inst_3257213 = inst_3257212;
var state_3257236__$1 = (function (){var statearr_3257239 = state_3257236;
(statearr_3257239[(7)] = inst_3257213);

return statearr_3257239;
})();
var statearr_3257240_3257260 = state_3257236__$1;
(statearr_3257240_3257260[(2)] = null);

(statearr_3257240_3257260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (4))){
var inst_3257213 = (state_3257236[(7)]);
var inst_3257216 = cljs.core.first.call(null,inst_3257213);
var state_3257236__$1 = state_3257236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3257236__$1,(7),ch,inst_3257216);
} else {
if((state_val_3257237 === (13))){
var inst_3257230 = (state_3257236[(2)]);
var state_3257236__$1 = state_3257236;
var statearr_3257241_3257261 = state_3257236__$1;
(statearr_3257241_3257261[(2)] = inst_3257230);

(statearr_3257241_3257261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (6))){
var inst_3257221 = (state_3257236[(2)]);
var state_3257236__$1 = state_3257236;
if(cljs.core.truth_(inst_3257221)){
var statearr_3257242_3257262 = state_3257236__$1;
(statearr_3257242_3257262[(1)] = (8));

} else {
var statearr_3257243_3257263 = state_3257236__$1;
(statearr_3257243_3257263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (3))){
var inst_3257234 = (state_3257236[(2)]);
var state_3257236__$1 = state_3257236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3257236__$1,inst_3257234);
} else {
if((state_val_3257237 === (12))){
var state_3257236__$1 = state_3257236;
var statearr_3257244_3257264 = state_3257236__$1;
(statearr_3257244_3257264[(2)] = null);

(statearr_3257244_3257264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (2))){
var inst_3257213 = (state_3257236[(7)]);
var state_3257236__$1 = state_3257236;
if(cljs.core.truth_(inst_3257213)){
var statearr_3257245_3257265 = state_3257236__$1;
(statearr_3257245_3257265[(1)] = (4));

} else {
var statearr_3257246_3257266 = state_3257236__$1;
(statearr_3257246_3257266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (11))){
var inst_3257227 = cljs.core.async.close_BANG_.call(null,ch);
var state_3257236__$1 = state_3257236;
var statearr_3257247_3257267 = state_3257236__$1;
(statearr_3257247_3257267[(2)] = inst_3257227);

(statearr_3257247_3257267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (9))){
var state_3257236__$1 = state_3257236;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3257248_3257268 = state_3257236__$1;
(statearr_3257248_3257268[(1)] = (11));

} else {
var statearr_3257249_3257269 = state_3257236__$1;
(statearr_3257249_3257269[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (5))){
var inst_3257213 = (state_3257236[(7)]);
var state_3257236__$1 = state_3257236;
var statearr_3257250_3257270 = state_3257236__$1;
(statearr_3257250_3257270[(2)] = inst_3257213);

(statearr_3257250_3257270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (10))){
var inst_3257232 = (state_3257236[(2)]);
var state_3257236__$1 = state_3257236;
var statearr_3257251_3257271 = state_3257236__$1;
(statearr_3257251_3257271[(2)] = inst_3257232);

(statearr_3257251_3257271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257237 === (8))){
var inst_3257213 = (state_3257236[(7)]);
var inst_3257223 = cljs.core.next.call(null,inst_3257213);
var inst_3257213__$1 = inst_3257223;
var state_3257236__$1 = (function (){var statearr_3257252 = state_3257236;
(statearr_3257252[(7)] = inst_3257213__$1);

return statearr_3257252;
})();
var statearr_3257253_3257272 = state_3257236__$1;
(statearr_3257253_3257272[(2)] = null);

(statearr_3257253_3257272[(1)] = (2));


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
});})(c__53126__auto__))
;
return ((function (switch__53103__auto__,c__53126__auto__){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3257254 = [null,null,null,null,null,null,null,null];
(statearr_3257254[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3257254[(1)] = (1));

return statearr_3257254;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3257236){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3257236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3257255){if((e3257255 instanceof Object)){
var ex__53107__auto__ = e3257255;
var statearr_3257256_3257273 = state_3257236;
(statearr_3257256_3257273[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3257255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257274 = state_3257236;
state_3257236 = G__3257274;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3257236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3257236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__))
})();
var state__53128__auto__ = (function (){var statearr_3257257 = f__53127__auto__.call(null);
(statearr_3257257[(6)] = c__53126__auto__);

return statearr_3257257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__))
);

return c__53126__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__50254__auto__ = (((_ == null))?null:_);
var m__50255__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,_);
} else {
var m__50255__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__50254__auto__ = (((m == null))?null:m);
var m__50255__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__50255__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__50254__auto__ = (((m == null))?null:m);
var m__50255__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,m,ch);
} else {
var m__50255__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__50254__auto__ = (((m == null))?null:m);
var m__50255__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,m);
} else {
var m__50255__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async3257275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3257275 = (function (ch,cs,meta3257276){
this.ch = ch;
this.cs = cs;
this.meta3257276 = meta3257276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3257275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3257277,meta3257276__$1){
var self__ = this;
var _3257277__$1 = this;
return (new cljs.core.async.t_cljs$core$async3257275(self__.ch,self__.cs,meta3257276__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3257275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3257277){
var self__ = this;
var _3257277__$1 = this;
return self__.meta3257276;
});})(cs))
;

cljs.core.async.t_cljs$core$async3257275.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3257275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3257275.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3257275.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3257275.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3257275.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3257275.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3257276","meta3257276",-1696069757,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3257275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3257275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3257275";

cljs.core.async.t_cljs$core$async3257275.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3257275");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async3257275 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3257275(ch__$1,cs__$1,meta3257276){
return (new cljs.core.async.t_cljs$core$async3257275(ch__$1,cs__$1,meta3257276));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3257275(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__53126__auto___3257497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3257497,cs,m,dchan,dctr,done){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3257497,cs,m,dchan,dctr,done){
return (function (state_3257412){
var state_val_3257413 = (state_3257412[(1)]);
if((state_val_3257413 === (7))){
var inst_3257408 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257414_3257498 = state_3257412__$1;
(statearr_3257414_3257498[(2)] = inst_3257408);

(statearr_3257414_3257498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (20))){
var inst_3257311 = (state_3257412[(7)]);
var inst_3257323 = cljs.core.first.call(null,inst_3257311);
var inst_3257324 = cljs.core.nth.call(null,inst_3257323,(0),null);
var inst_3257325 = cljs.core.nth.call(null,inst_3257323,(1),null);
var state_3257412__$1 = (function (){var statearr_3257415 = state_3257412;
(statearr_3257415[(8)] = inst_3257324);

return statearr_3257415;
})();
if(cljs.core.truth_(inst_3257325)){
var statearr_3257416_3257499 = state_3257412__$1;
(statearr_3257416_3257499[(1)] = (22));

} else {
var statearr_3257417_3257500 = state_3257412__$1;
(statearr_3257417_3257500[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (27))){
var inst_3257280 = (state_3257412[(9)]);
var inst_3257360 = (state_3257412[(10)]);
var inst_3257355 = (state_3257412[(11)]);
var inst_3257353 = (state_3257412[(12)]);
var inst_3257360__$1 = cljs.core._nth.call(null,inst_3257353,inst_3257355);
var inst_3257361 = cljs.core.async.put_BANG_.call(null,inst_3257360__$1,inst_3257280,done);
var state_3257412__$1 = (function (){var statearr_3257418 = state_3257412;
(statearr_3257418[(10)] = inst_3257360__$1);

return statearr_3257418;
})();
if(cljs.core.truth_(inst_3257361)){
var statearr_3257419_3257501 = state_3257412__$1;
(statearr_3257419_3257501[(1)] = (30));

} else {
var statearr_3257420_3257502 = state_3257412__$1;
(statearr_3257420_3257502[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (1))){
var state_3257412__$1 = state_3257412;
var statearr_3257421_3257503 = state_3257412__$1;
(statearr_3257421_3257503[(2)] = null);

(statearr_3257421_3257503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (24))){
var inst_3257311 = (state_3257412[(7)]);
var inst_3257330 = (state_3257412[(2)]);
var inst_3257331 = cljs.core.next.call(null,inst_3257311);
var inst_3257289 = inst_3257331;
var inst_3257290 = null;
var inst_3257291 = (0);
var inst_3257292 = (0);
var state_3257412__$1 = (function (){var statearr_3257422 = state_3257412;
(statearr_3257422[(13)] = inst_3257292);

(statearr_3257422[(14)] = inst_3257330);

(statearr_3257422[(15)] = inst_3257289);

(statearr_3257422[(16)] = inst_3257290);

(statearr_3257422[(17)] = inst_3257291);

return statearr_3257422;
})();
var statearr_3257423_3257504 = state_3257412__$1;
(statearr_3257423_3257504[(2)] = null);

(statearr_3257423_3257504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (39))){
var state_3257412__$1 = state_3257412;
var statearr_3257427_3257505 = state_3257412__$1;
(statearr_3257427_3257505[(2)] = null);

(statearr_3257427_3257505[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (4))){
var inst_3257280 = (state_3257412[(9)]);
var inst_3257280__$1 = (state_3257412[(2)]);
var inst_3257281 = (inst_3257280__$1 == null);
var state_3257412__$1 = (function (){var statearr_3257428 = state_3257412;
(statearr_3257428[(9)] = inst_3257280__$1);

return statearr_3257428;
})();
if(cljs.core.truth_(inst_3257281)){
var statearr_3257429_3257506 = state_3257412__$1;
(statearr_3257429_3257506[(1)] = (5));

} else {
var statearr_3257430_3257507 = state_3257412__$1;
(statearr_3257430_3257507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (15))){
var inst_3257292 = (state_3257412[(13)]);
var inst_3257289 = (state_3257412[(15)]);
var inst_3257290 = (state_3257412[(16)]);
var inst_3257291 = (state_3257412[(17)]);
var inst_3257307 = (state_3257412[(2)]);
var inst_3257308 = (inst_3257292 + (1));
var tmp3257424 = inst_3257289;
var tmp3257425 = inst_3257290;
var tmp3257426 = inst_3257291;
var inst_3257289__$1 = tmp3257424;
var inst_3257290__$1 = tmp3257425;
var inst_3257291__$1 = tmp3257426;
var inst_3257292__$1 = inst_3257308;
var state_3257412__$1 = (function (){var statearr_3257431 = state_3257412;
(statearr_3257431[(13)] = inst_3257292__$1);

(statearr_3257431[(18)] = inst_3257307);

(statearr_3257431[(15)] = inst_3257289__$1);

(statearr_3257431[(16)] = inst_3257290__$1);

(statearr_3257431[(17)] = inst_3257291__$1);

return statearr_3257431;
})();
var statearr_3257432_3257508 = state_3257412__$1;
(statearr_3257432_3257508[(2)] = null);

(statearr_3257432_3257508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (21))){
var inst_3257334 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257436_3257509 = state_3257412__$1;
(statearr_3257436_3257509[(2)] = inst_3257334);

(statearr_3257436_3257509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (31))){
var inst_3257360 = (state_3257412[(10)]);
var inst_3257364 = done.call(null,null);
var inst_3257365 = cljs.core.async.untap_STAR_.call(null,m,inst_3257360);
var state_3257412__$1 = (function (){var statearr_3257437 = state_3257412;
(statearr_3257437[(19)] = inst_3257364);

return statearr_3257437;
})();
var statearr_3257438_3257510 = state_3257412__$1;
(statearr_3257438_3257510[(2)] = inst_3257365);

(statearr_3257438_3257510[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (32))){
var inst_3257354 = (state_3257412[(20)]);
var inst_3257355 = (state_3257412[(11)]);
var inst_3257352 = (state_3257412[(21)]);
var inst_3257353 = (state_3257412[(12)]);
var inst_3257367 = (state_3257412[(2)]);
var inst_3257368 = (inst_3257355 + (1));
var tmp3257433 = inst_3257354;
var tmp3257434 = inst_3257352;
var tmp3257435 = inst_3257353;
var inst_3257352__$1 = tmp3257434;
var inst_3257353__$1 = tmp3257435;
var inst_3257354__$1 = tmp3257433;
var inst_3257355__$1 = inst_3257368;
var state_3257412__$1 = (function (){var statearr_3257439 = state_3257412;
(statearr_3257439[(22)] = inst_3257367);

(statearr_3257439[(20)] = inst_3257354__$1);

(statearr_3257439[(11)] = inst_3257355__$1);

(statearr_3257439[(21)] = inst_3257352__$1);

(statearr_3257439[(12)] = inst_3257353__$1);

return statearr_3257439;
})();
var statearr_3257440_3257511 = state_3257412__$1;
(statearr_3257440_3257511[(2)] = null);

(statearr_3257440_3257511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (40))){
var inst_3257380 = (state_3257412[(23)]);
var inst_3257384 = done.call(null,null);
var inst_3257385 = cljs.core.async.untap_STAR_.call(null,m,inst_3257380);
var state_3257412__$1 = (function (){var statearr_3257441 = state_3257412;
(statearr_3257441[(24)] = inst_3257384);

return statearr_3257441;
})();
var statearr_3257442_3257512 = state_3257412__$1;
(statearr_3257442_3257512[(2)] = inst_3257385);

(statearr_3257442_3257512[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (33))){
var inst_3257371 = (state_3257412[(25)]);
var inst_3257373 = cljs.core.chunked_seq_QMARK_.call(null,inst_3257371);
var state_3257412__$1 = state_3257412;
if(inst_3257373){
var statearr_3257443_3257513 = state_3257412__$1;
(statearr_3257443_3257513[(1)] = (36));

} else {
var statearr_3257444_3257514 = state_3257412__$1;
(statearr_3257444_3257514[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (13))){
var inst_3257301 = (state_3257412[(26)]);
var inst_3257304 = cljs.core.async.close_BANG_.call(null,inst_3257301);
var state_3257412__$1 = state_3257412;
var statearr_3257445_3257515 = state_3257412__$1;
(statearr_3257445_3257515[(2)] = inst_3257304);

(statearr_3257445_3257515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (22))){
var inst_3257324 = (state_3257412[(8)]);
var inst_3257327 = cljs.core.async.close_BANG_.call(null,inst_3257324);
var state_3257412__$1 = state_3257412;
var statearr_3257446_3257516 = state_3257412__$1;
(statearr_3257446_3257516[(2)] = inst_3257327);

(statearr_3257446_3257516[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (36))){
var inst_3257371 = (state_3257412[(25)]);
var inst_3257375 = cljs.core.chunk_first.call(null,inst_3257371);
var inst_3257376 = cljs.core.chunk_rest.call(null,inst_3257371);
var inst_3257377 = cljs.core.count.call(null,inst_3257375);
var inst_3257352 = inst_3257376;
var inst_3257353 = inst_3257375;
var inst_3257354 = inst_3257377;
var inst_3257355 = (0);
var state_3257412__$1 = (function (){var statearr_3257447 = state_3257412;
(statearr_3257447[(20)] = inst_3257354);

(statearr_3257447[(11)] = inst_3257355);

(statearr_3257447[(21)] = inst_3257352);

(statearr_3257447[(12)] = inst_3257353);

return statearr_3257447;
})();
var statearr_3257448_3257517 = state_3257412__$1;
(statearr_3257448_3257517[(2)] = null);

(statearr_3257448_3257517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (41))){
var inst_3257371 = (state_3257412[(25)]);
var inst_3257387 = (state_3257412[(2)]);
var inst_3257388 = cljs.core.next.call(null,inst_3257371);
var inst_3257352 = inst_3257388;
var inst_3257353 = null;
var inst_3257354 = (0);
var inst_3257355 = (0);
var state_3257412__$1 = (function (){var statearr_3257449 = state_3257412;
(statearr_3257449[(20)] = inst_3257354);

(statearr_3257449[(27)] = inst_3257387);

(statearr_3257449[(11)] = inst_3257355);

(statearr_3257449[(21)] = inst_3257352);

(statearr_3257449[(12)] = inst_3257353);

return statearr_3257449;
})();
var statearr_3257450_3257518 = state_3257412__$1;
(statearr_3257450_3257518[(2)] = null);

(statearr_3257450_3257518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (43))){
var state_3257412__$1 = state_3257412;
var statearr_3257451_3257519 = state_3257412__$1;
(statearr_3257451_3257519[(2)] = null);

(statearr_3257451_3257519[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (29))){
var inst_3257396 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257452_3257520 = state_3257412__$1;
(statearr_3257452_3257520[(2)] = inst_3257396);

(statearr_3257452_3257520[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (44))){
var inst_3257405 = (state_3257412[(2)]);
var state_3257412__$1 = (function (){var statearr_3257453 = state_3257412;
(statearr_3257453[(28)] = inst_3257405);

return statearr_3257453;
})();
var statearr_3257454_3257521 = state_3257412__$1;
(statearr_3257454_3257521[(2)] = null);

(statearr_3257454_3257521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (6))){
var inst_3257344 = (state_3257412[(29)]);
var inst_3257343 = cljs.core.deref.call(null,cs);
var inst_3257344__$1 = cljs.core.keys.call(null,inst_3257343);
var inst_3257345 = cljs.core.count.call(null,inst_3257344__$1);
var inst_3257346 = cljs.core.reset_BANG_.call(null,dctr,inst_3257345);
var inst_3257351 = cljs.core.seq.call(null,inst_3257344__$1);
var inst_3257352 = inst_3257351;
var inst_3257353 = null;
var inst_3257354 = (0);
var inst_3257355 = (0);
var state_3257412__$1 = (function (){var statearr_3257455 = state_3257412;
(statearr_3257455[(29)] = inst_3257344__$1);

(statearr_3257455[(20)] = inst_3257354);

(statearr_3257455[(11)] = inst_3257355);

(statearr_3257455[(21)] = inst_3257352);

(statearr_3257455[(12)] = inst_3257353);

(statearr_3257455[(30)] = inst_3257346);

return statearr_3257455;
})();
var statearr_3257456_3257522 = state_3257412__$1;
(statearr_3257456_3257522[(2)] = null);

(statearr_3257456_3257522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (28))){
var inst_3257371 = (state_3257412[(25)]);
var inst_3257352 = (state_3257412[(21)]);
var inst_3257371__$1 = cljs.core.seq.call(null,inst_3257352);
var state_3257412__$1 = (function (){var statearr_3257457 = state_3257412;
(statearr_3257457[(25)] = inst_3257371__$1);

return statearr_3257457;
})();
if(inst_3257371__$1){
var statearr_3257458_3257523 = state_3257412__$1;
(statearr_3257458_3257523[(1)] = (33));

} else {
var statearr_3257459_3257524 = state_3257412__$1;
(statearr_3257459_3257524[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (25))){
var inst_3257354 = (state_3257412[(20)]);
var inst_3257355 = (state_3257412[(11)]);
var inst_3257357 = (inst_3257355 < inst_3257354);
var inst_3257358 = inst_3257357;
var state_3257412__$1 = state_3257412;
if(cljs.core.truth_(inst_3257358)){
var statearr_3257460_3257525 = state_3257412__$1;
(statearr_3257460_3257525[(1)] = (27));

} else {
var statearr_3257461_3257526 = state_3257412__$1;
(statearr_3257461_3257526[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (34))){
var state_3257412__$1 = state_3257412;
var statearr_3257462_3257527 = state_3257412__$1;
(statearr_3257462_3257527[(2)] = null);

(statearr_3257462_3257527[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (17))){
var state_3257412__$1 = state_3257412;
var statearr_3257463_3257528 = state_3257412__$1;
(statearr_3257463_3257528[(2)] = null);

(statearr_3257463_3257528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (3))){
var inst_3257410 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3257412__$1,inst_3257410);
} else {
if((state_val_3257413 === (12))){
var inst_3257339 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257464_3257529 = state_3257412__$1;
(statearr_3257464_3257529[(2)] = inst_3257339);

(statearr_3257464_3257529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (2))){
var state_3257412__$1 = state_3257412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3257412__$1,(4),ch);
} else {
if((state_val_3257413 === (23))){
var state_3257412__$1 = state_3257412;
var statearr_3257465_3257530 = state_3257412__$1;
(statearr_3257465_3257530[(2)] = null);

(statearr_3257465_3257530[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (35))){
var inst_3257394 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257466_3257531 = state_3257412__$1;
(statearr_3257466_3257531[(2)] = inst_3257394);

(statearr_3257466_3257531[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (19))){
var inst_3257311 = (state_3257412[(7)]);
var inst_3257315 = cljs.core.chunk_first.call(null,inst_3257311);
var inst_3257316 = cljs.core.chunk_rest.call(null,inst_3257311);
var inst_3257317 = cljs.core.count.call(null,inst_3257315);
var inst_3257289 = inst_3257316;
var inst_3257290 = inst_3257315;
var inst_3257291 = inst_3257317;
var inst_3257292 = (0);
var state_3257412__$1 = (function (){var statearr_3257467 = state_3257412;
(statearr_3257467[(13)] = inst_3257292);

(statearr_3257467[(15)] = inst_3257289);

(statearr_3257467[(16)] = inst_3257290);

(statearr_3257467[(17)] = inst_3257291);

return statearr_3257467;
})();
var statearr_3257468_3257532 = state_3257412__$1;
(statearr_3257468_3257532[(2)] = null);

(statearr_3257468_3257532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (11))){
var inst_3257311 = (state_3257412[(7)]);
var inst_3257289 = (state_3257412[(15)]);
var inst_3257311__$1 = cljs.core.seq.call(null,inst_3257289);
var state_3257412__$1 = (function (){var statearr_3257469 = state_3257412;
(statearr_3257469[(7)] = inst_3257311__$1);

return statearr_3257469;
})();
if(inst_3257311__$1){
var statearr_3257470_3257533 = state_3257412__$1;
(statearr_3257470_3257533[(1)] = (16));

} else {
var statearr_3257471_3257534 = state_3257412__$1;
(statearr_3257471_3257534[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (9))){
var inst_3257341 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257472_3257535 = state_3257412__$1;
(statearr_3257472_3257535[(2)] = inst_3257341);

(statearr_3257472_3257535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (5))){
var inst_3257287 = cljs.core.deref.call(null,cs);
var inst_3257288 = cljs.core.seq.call(null,inst_3257287);
var inst_3257289 = inst_3257288;
var inst_3257290 = null;
var inst_3257291 = (0);
var inst_3257292 = (0);
var state_3257412__$1 = (function (){var statearr_3257473 = state_3257412;
(statearr_3257473[(13)] = inst_3257292);

(statearr_3257473[(15)] = inst_3257289);

(statearr_3257473[(16)] = inst_3257290);

(statearr_3257473[(17)] = inst_3257291);

return statearr_3257473;
})();
var statearr_3257474_3257536 = state_3257412__$1;
(statearr_3257474_3257536[(2)] = null);

(statearr_3257474_3257536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (14))){
var state_3257412__$1 = state_3257412;
var statearr_3257475_3257537 = state_3257412__$1;
(statearr_3257475_3257537[(2)] = null);

(statearr_3257475_3257537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (45))){
var inst_3257402 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257476_3257538 = state_3257412__$1;
(statearr_3257476_3257538[(2)] = inst_3257402);

(statearr_3257476_3257538[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (26))){
var inst_3257344 = (state_3257412[(29)]);
var inst_3257398 = (state_3257412[(2)]);
var inst_3257399 = cljs.core.seq.call(null,inst_3257344);
var state_3257412__$1 = (function (){var statearr_3257477 = state_3257412;
(statearr_3257477[(31)] = inst_3257398);

return statearr_3257477;
})();
if(inst_3257399){
var statearr_3257478_3257539 = state_3257412__$1;
(statearr_3257478_3257539[(1)] = (42));

} else {
var statearr_3257479_3257540 = state_3257412__$1;
(statearr_3257479_3257540[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (16))){
var inst_3257311 = (state_3257412[(7)]);
var inst_3257313 = cljs.core.chunked_seq_QMARK_.call(null,inst_3257311);
var state_3257412__$1 = state_3257412;
if(inst_3257313){
var statearr_3257480_3257541 = state_3257412__$1;
(statearr_3257480_3257541[(1)] = (19));

} else {
var statearr_3257481_3257542 = state_3257412__$1;
(statearr_3257481_3257542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (38))){
var inst_3257391 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257482_3257543 = state_3257412__$1;
(statearr_3257482_3257543[(2)] = inst_3257391);

(statearr_3257482_3257543[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (30))){
var state_3257412__$1 = state_3257412;
var statearr_3257483_3257544 = state_3257412__$1;
(statearr_3257483_3257544[(2)] = null);

(statearr_3257483_3257544[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (10))){
var inst_3257292 = (state_3257412[(13)]);
var inst_3257290 = (state_3257412[(16)]);
var inst_3257300 = cljs.core._nth.call(null,inst_3257290,inst_3257292);
var inst_3257301 = cljs.core.nth.call(null,inst_3257300,(0),null);
var inst_3257302 = cljs.core.nth.call(null,inst_3257300,(1),null);
var state_3257412__$1 = (function (){var statearr_3257484 = state_3257412;
(statearr_3257484[(26)] = inst_3257301);

return statearr_3257484;
})();
if(cljs.core.truth_(inst_3257302)){
var statearr_3257485_3257545 = state_3257412__$1;
(statearr_3257485_3257545[(1)] = (13));

} else {
var statearr_3257486_3257546 = state_3257412__$1;
(statearr_3257486_3257546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (18))){
var inst_3257337 = (state_3257412[(2)]);
var state_3257412__$1 = state_3257412;
var statearr_3257487_3257547 = state_3257412__$1;
(statearr_3257487_3257547[(2)] = inst_3257337);

(statearr_3257487_3257547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (42))){
var state_3257412__$1 = state_3257412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3257412__$1,(45),dchan);
} else {
if((state_val_3257413 === (37))){
var inst_3257280 = (state_3257412[(9)]);
var inst_3257380 = (state_3257412[(23)]);
var inst_3257371 = (state_3257412[(25)]);
var inst_3257380__$1 = cljs.core.first.call(null,inst_3257371);
var inst_3257381 = cljs.core.async.put_BANG_.call(null,inst_3257380__$1,inst_3257280,done);
var state_3257412__$1 = (function (){var statearr_3257488 = state_3257412;
(statearr_3257488[(23)] = inst_3257380__$1);

return statearr_3257488;
})();
if(cljs.core.truth_(inst_3257381)){
var statearr_3257489_3257548 = state_3257412__$1;
(statearr_3257489_3257548[(1)] = (39));

} else {
var statearr_3257490_3257549 = state_3257412__$1;
(statearr_3257490_3257549[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257413 === (8))){
var inst_3257292 = (state_3257412[(13)]);
var inst_3257291 = (state_3257412[(17)]);
var inst_3257294 = (inst_3257292 < inst_3257291);
var inst_3257295 = inst_3257294;
var state_3257412__$1 = state_3257412;
if(cljs.core.truth_(inst_3257295)){
var statearr_3257491_3257550 = state_3257412__$1;
(statearr_3257491_3257550[(1)] = (10));

} else {
var statearr_3257492_3257551 = state_3257412__$1;
(statearr_3257492_3257551[(1)] = (11));

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
});})(c__53126__auto___3257497,cs,m,dchan,dctr,done))
;
return ((function (switch__53103__auto__,c__53126__auto___3257497,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__53104__auto__ = null;
var cljs$core$async$mult_$_state_machine__53104__auto____0 = (function (){
var statearr_3257493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3257493[(0)] = cljs$core$async$mult_$_state_machine__53104__auto__);

(statearr_3257493[(1)] = (1));

return statearr_3257493;
});
var cljs$core$async$mult_$_state_machine__53104__auto____1 = (function (state_3257412){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3257412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3257494){if((e3257494 instanceof Object)){
var ex__53107__auto__ = e3257494;
var statearr_3257495_3257552 = state_3257412;
(statearr_3257495_3257552[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3257494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257553 = state_3257412;
state_3257412 = G__3257553;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__53104__auto__ = function(state_3257412){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__53104__auto____1.call(this,state_3257412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__53104__auto____0;
cljs$core$async$mult_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__53104__auto____1;
return cljs$core$async$mult_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3257497,cs,m,dchan,dctr,done))
})();
var state__53128__auto__ = (function (){var statearr_3257496 = f__53127__auto__.call(null);
(statearr_3257496[(6)] = c__53126__auto___3257497);

return statearr_3257496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3257497,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__3257555 = arguments.length;
switch (G__3257555) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__50254__auto__ = (((m == null))?null:m);
var m__50255__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,m,ch);
} else {
var m__50255__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__50254__auto__ = (((m == null))?null:m);
var m__50255__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,m,ch);
} else {
var m__50255__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__50254__auto__ = (((m == null))?null:m);
var m__50255__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,m);
} else {
var m__50255__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__50254__auto__ = (((m == null))?null:m);
var m__50255__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,m,state_map);
} else {
var m__50255__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__50254__auto__ = (((m == null))?null:m);
var m__50255__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,m,mode);
} else {
var m__50255__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3257567 = arguments.length;
var i__50799__auto___3257568 = (0);
while(true){
if((i__50799__auto___3257568 < len__50798__auto___3257567)){
args__50805__auto__.push((arguments[i__50799__auto___3257568]));

var G__3257569 = (i__50799__auto___3257568 + (1));
i__50799__auto___3257568 = G__3257569;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((3) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__50806__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3257561){
var map__3257562 = p__3257561;
var map__3257562__$1 = ((((!((map__3257562 == null)))?((((map__3257562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3257562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3257562):map__3257562);
var opts = map__3257562__$1;
var statearr_3257564_3257570 = state;
(statearr_3257564_3257570[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__3257562,map__3257562__$1,opts){
return (function (val){
var statearr_3257565_3257571 = state;
(statearr_3257565_3257571[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__3257562,map__3257562__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_3257566_3257572 = state;
(statearr_3257566_3257572[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3257557){
var G__3257558 = cljs.core.first.call(null,seq3257557);
var seq3257557__$1 = cljs.core.next.call(null,seq3257557);
var G__3257559 = cljs.core.first.call(null,seq3257557__$1);
var seq3257557__$2 = cljs.core.next.call(null,seq3257557__$1);
var G__3257560 = cljs.core.first.call(null,seq3257557__$2);
var seq3257557__$3 = cljs.core.next.call(null,seq3257557__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3257558,G__3257559,G__3257560,seq3257557__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async3257573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3257573 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta3257574){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta3257574 = meta3257574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3257575,meta3257574__$1){
var self__ = this;
var _3257575__$1 = this;
return (new cljs.core.async.t_cljs$core$async3257573(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta3257574__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3257575){
var self__ = this;
var _3257575__$1 = this;
return self__.meta3257574;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta3257574","meta3257574",681028212,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3257573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3257573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3257573";

cljs.core.async.t_cljs$core$async3257573.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3257573");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async3257573 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async3257573(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3257574){
return (new cljs.core.async.t_cljs$core$async3257573(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3257574));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async3257573(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53126__auto___3257737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3257737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3257737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_3257677){
var state_val_3257678 = (state_3257677[(1)]);
if((state_val_3257678 === (7))){
var inst_3257592 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
var statearr_3257679_3257738 = state_3257677__$1;
(statearr_3257679_3257738[(2)] = inst_3257592);

(statearr_3257679_3257738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (20))){
var inst_3257604 = (state_3257677[(7)]);
var state_3257677__$1 = state_3257677;
var statearr_3257680_3257739 = state_3257677__$1;
(statearr_3257680_3257739[(2)] = inst_3257604);

(statearr_3257680_3257739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (27))){
var state_3257677__$1 = state_3257677;
var statearr_3257681_3257740 = state_3257677__$1;
(statearr_3257681_3257740[(2)] = null);

(statearr_3257681_3257740[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (1))){
var inst_3257579 = (state_3257677[(8)]);
var inst_3257579__$1 = calc_state.call(null);
var inst_3257581 = (inst_3257579__$1 == null);
var inst_3257582 = cljs.core.not.call(null,inst_3257581);
var state_3257677__$1 = (function (){var statearr_3257682 = state_3257677;
(statearr_3257682[(8)] = inst_3257579__$1);

return statearr_3257682;
})();
if(inst_3257582){
var statearr_3257683_3257741 = state_3257677__$1;
(statearr_3257683_3257741[(1)] = (2));

} else {
var statearr_3257684_3257742 = state_3257677__$1;
(statearr_3257684_3257742[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (24))){
var inst_3257651 = (state_3257677[(9)]);
var inst_3257637 = (state_3257677[(10)]);
var inst_3257628 = (state_3257677[(11)]);
var inst_3257651__$1 = inst_3257628.call(null,inst_3257637);
var state_3257677__$1 = (function (){var statearr_3257685 = state_3257677;
(statearr_3257685[(9)] = inst_3257651__$1);

return statearr_3257685;
})();
if(cljs.core.truth_(inst_3257651__$1)){
var statearr_3257686_3257743 = state_3257677__$1;
(statearr_3257686_3257743[(1)] = (29));

} else {
var statearr_3257687_3257744 = state_3257677__$1;
(statearr_3257687_3257744[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (4))){
var inst_3257595 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
if(cljs.core.truth_(inst_3257595)){
var statearr_3257688_3257745 = state_3257677__$1;
(statearr_3257688_3257745[(1)] = (8));

} else {
var statearr_3257689_3257746 = state_3257677__$1;
(statearr_3257689_3257746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (15))){
var inst_3257622 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
if(cljs.core.truth_(inst_3257622)){
var statearr_3257690_3257747 = state_3257677__$1;
(statearr_3257690_3257747[(1)] = (19));

} else {
var statearr_3257691_3257748 = state_3257677__$1;
(statearr_3257691_3257748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (21))){
var inst_3257627 = (state_3257677[(12)]);
var inst_3257627__$1 = (state_3257677[(2)]);
var inst_3257628 = cljs.core.get.call(null,inst_3257627__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3257629 = cljs.core.get.call(null,inst_3257627__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3257630 = cljs.core.get.call(null,inst_3257627__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_3257677__$1 = (function (){var statearr_3257692 = state_3257677;
(statearr_3257692[(11)] = inst_3257628);

(statearr_3257692[(13)] = inst_3257629);

(statearr_3257692[(12)] = inst_3257627__$1);

return statearr_3257692;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_3257677__$1,(22),inst_3257630);
} else {
if((state_val_3257678 === (31))){
var inst_3257659 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
if(cljs.core.truth_(inst_3257659)){
var statearr_3257693_3257749 = state_3257677__$1;
(statearr_3257693_3257749[(1)] = (32));

} else {
var statearr_3257694_3257750 = state_3257677__$1;
(statearr_3257694_3257750[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (32))){
var inst_3257636 = (state_3257677[(14)]);
var state_3257677__$1 = state_3257677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3257677__$1,(35),out,inst_3257636);
} else {
if((state_val_3257678 === (33))){
var inst_3257627 = (state_3257677[(12)]);
var inst_3257604 = inst_3257627;
var state_3257677__$1 = (function (){var statearr_3257695 = state_3257677;
(statearr_3257695[(7)] = inst_3257604);

return statearr_3257695;
})();
var statearr_3257696_3257751 = state_3257677__$1;
(statearr_3257696_3257751[(2)] = null);

(statearr_3257696_3257751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (13))){
var inst_3257604 = (state_3257677[(7)]);
var inst_3257611 = inst_3257604.cljs$lang$protocol_mask$partition0$;
var inst_3257612 = (inst_3257611 & (64));
var inst_3257613 = inst_3257604.cljs$core$ISeq$;
var inst_3257614 = (cljs.core.PROTOCOL_SENTINEL === inst_3257613);
var inst_3257615 = (inst_3257612) || (inst_3257614);
var state_3257677__$1 = state_3257677;
if(cljs.core.truth_(inst_3257615)){
var statearr_3257697_3257752 = state_3257677__$1;
(statearr_3257697_3257752[(1)] = (16));

} else {
var statearr_3257698_3257753 = state_3257677__$1;
(statearr_3257698_3257753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (22))){
var inst_3257636 = (state_3257677[(14)]);
var inst_3257637 = (state_3257677[(10)]);
var inst_3257635 = (state_3257677[(2)]);
var inst_3257636__$1 = cljs.core.nth.call(null,inst_3257635,(0),null);
var inst_3257637__$1 = cljs.core.nth.call(null,inst_3257635,(1),null);
var inst_3257638 = (inst_3257636__$1 == null);
var inst_3257639 = cljs.core._EQ_.call(null,inst_3257637__$1,change);
var inst_3257640 = (inst_3257638) || (inst_3257639);
var state_3257677__$1 = (function (){var statearr_3257699 = state_3257677;
(statearr_3257699[(14)] = inst_3257636__$1);

(statearr_3257699[(10)] = inst_3257637__$1);

return statearr_3257699;
})();
if(cljs.core.truth_(inst_3257640)){
var statearr_3257700_3257754 = state_3257677__$1;
(statearr_3257700_3257754[(1)] = (23));

} else {
var statearr_3257701_3257755 = state_3257677__$1;
(statearr_3257701_3257755[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (36))){
var inst_3257627 = (state_3257677[(12)]);
var inst_3257604 = inst_3257627;
var state_3257677__$1 = (function (){var statearr_3257702 = state_3257677;
(statearr_3257702[(7)] = inst_3257604);

return statearr_3257702;
})();
var statearr_3257703_3257756 = state_3257677__$1;
(statearr_3257703_3257756[(2)] = null);

(statearr_3257703_3257756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (29))){
var inst_3257651 = (state_3257677[(9)]);
var state_3257677__$1 = state_3257677;
var statearr_3257704_3257757 = state_3257677__$1;
(statearr_3257704_3257757[(2)] = inst_3257651);

(statearr_3257704_3257757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (6))){
var state_3257677__$1 = state_3257677;
var statearr_3257705_3257758 = state_3257677__$1;
(statearr_3257705_3257758[(2)] = false);

(statearr_3257705_3257758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (28))){
var inst_3257647 = (state_3257677[(2)]);
var inst_3257648 = calc_state.call(null);
var inst_3257604 = inst_3257648;
var state_3257677__$1 = (function (){var statearr_3257706 = state_3257677;
(statearr_3257706[(7)] = inst_3257604);

(statearr_3257706[(15)] = inst_3257647);

return statearr_3257706;
})();
var statearr_3257707_3257759 = state_3257677__$1;
(statearr_3257707_3257759[(2)] = null);

(statearr_3257707_3257759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (25))){
var inst_3257673 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
var statearr_3257708_3257760 = state_3257677__$1;
(statearr_3257708_3257760[(2)] = inst_3257673);

(statearr_3257708_3257760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (34))){
var inst_3257671 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
var statearr_3257709_3257761 = state_3257677__$1;
(statearr_3257709_3257761[(2)] = inst_3257671);

(statearr_3257709_3257761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (17))){
var state_3257677__$1 = state_3257677;
var statearr_3257710_3257762 = state_3257677__$1;
(statearr_3257710_3257762[(2)] = false);

(statearr_3257710_3257762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (3))){
var state_3257677__$1 = state_3257677;
var statearr_3257711_3257763 = state_3257677__$1;
(statearr_3257711_3257763[(2)] = false);

(statearr_3257711_3257763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (12))){
var inst_3257675 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3257677__$1,inst_3257675);
} else {
if((state_val_3257678 === (2))){
var inst_3257579 = (state_3257677[(8)]);
var inst_3257584 = inst_3257579.cljs$lang$protocol_mask$partition0$;
var inst_3257585 = (inst_3257584 & (64));
var inst_3257586 = inst_3257579.cljs$core$ISeq$;
var inst_3257587 = (cljs.core.PROTOCOL_SENTINEL === inst_3257586);
var inst_3257588 = (inst_3257585) || (inst_3257587);
var state_3257677__$1 = state_3257677;
if(cljs.core.truth_(inst_3257588)){
var statearr_3257712_3257764 = state_3257677__$1;
(statearr_3257712_3257764[(1)] = (5));

} else {
var statearr_3257713_3257765 = state_3257677__$1;
(statearr_3257713_3257765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (23))){
var inst_3257636 = (state_3257677[(14)]);
var inst_3257642 = (inst_3257636 == null);
var state_3257677__$1 = state_3257677;
if(cljs.core.truth_(inst_3257642)){
var statearr_3257714_3257766 = state_3257677__$1;
(statearr_3257714_3257766[(1)] = (26));

} else {
var statearr_3257715_3257767 = state_3257677__$1;
(statearr_3257715_3257767[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (35))){
var inst_3257662 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
if(cljs.core.truth_(inst_3257662)){
var statearr_3257716_3257768 = state_3257677__$1;
(statearr_3257716_3257768[(1)] = (36));

} else {
var statearr_3257717_3257769 = state_3257677__$1;
(statearr_3257717_3257769[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (19))){
var inst_3257604 = (state_3257677[(7)]);
var inst_3257624 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3257604);
var state_3257677__$1 = state_3257677;
var statearr_3257718_3257770 = state_3257677__$1;
(statearr_3257718_3257770[(2)] = inst_3257624);

(statearr_3257718_3257770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (11))){
var inst_3257604 = (state_3257677[(7)]);
var inst_3257608 = (inst_3257604 == null);
var inst_3257609 = cljs.core.not.call(null,inst_3257608);
var state_3257677__$1 = state_3257677;
if(inst_3257609){
var statearr_3257719_3257771 = state_3257677__$1;
(statearr_3257719_3257771[(1)] = (13));

} else {
var statearr_3257720_3257772 = state_3257677__$1;
(statearr_3257720_3257772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (9))){
var inst_3257579 = (state_3257677[(8)]);
var state_3257677__$1 = state_3257677;
var statearr_3257721_3257773 = state_3257677__$1;
(statearr_3257721_3257773[(2)] = inst_3257579);

(statearr_3257721_3257773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (5))){
var state_3257677__$1 = state_3257677;
var statearr_3257722_3257774 = state_3257677__$1;
(statearr_3257722_3257774[(2)] = true);

(statearr_3257722_3257774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (14))){
var state_3257677__$1 = state_3257677;
var statearr_3257723_3257775 = state_3257677__$1;
(statearr_3257723_3257775[(2)] = false);

(statearr_3257723_3257775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (26))){
var inst_3257637 = (state_3257677[(10)]);
var inst_3257644 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_3257637);
var state_3257677__$1 = state_3257677;
var statearr_3257724_3257776 = state_3257677__$1;
(statearr_3257724_3257776[(2)] = inst_3257644);

(statearr_3257724_3257776[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (16))){
var state_3257677__$1 = state_3257677;
var statearr_3257725_3257777 = state_3257677__$1;
(statearr_3257725_3257777[(2)] = true);

(statearr_3257725_3257777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (38))){
var inst_3257667 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
var statearr_3257726_3257778 = state_3257677__$1;
(statearr_3257726_3257778[(2)] = inst_3257667);

(statearr_3257726_3257778[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (30))){
var inst_3257637 = (state_3257677[(10)]);
var inst_3257628 = (state_3257677[(11)]);
var inst_3257629 = (state_3257677[(13)]);
var inst_3257654 = cljs.core.empty_QMARK_.call(null,inst_3257628);
var inst_3257655 = inst_3257629.call(null,inst_3257637);
var inst_3257656 = cljs.core.not.call(null,inst_3257655);
var inst_3257657 = (inst_3257654) && (inst_3257656);
var state_3257677__$1 = state_3257677;
var statearr_3257727_3257779 = state_3257677__$1;
(statearr_3257727_3257779[(2)] = inst_3257657);

(statearr_3257727_3257779[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (10))){
var inst_3257579 = (state_3257677[(8)]);
var inst_3257600 = (state_3257677[(2)]);
var inst_3257601 = cljs.core.get.call(null,inst_3257600,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3257602 = cljs.core.get.call(null,inst_3257600,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3257603 = cljs.core.get.call(null,inst_3257600,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3257604 = inst_3257579;
var state_3257677__$1 = (function (){var statearr_3257728 = state_3257677;
(statearr_3257728[(7)] = inst_3257604);

(statearr_3257728[(16)] = inst_3257601);

(statearr_3257728[(17)] = inst_3257603);

(statearr_3257728[(18)] = inst_3257602);

return statearr_3257728;
})();
var statearr_3257729_3257780 = state_3257677__$1;
(statearr_3257729_3257780[(2)] = null);

(statearr_3257729_3257780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (18))){
var inst_3257619 = (state_3257677[(2)]);
var state_3257677__$1 = state_3257677;
var statearr_3257730_3257781 = state_3257677__$1;
(statearr_3257730_3257781[(2)] = inst_3257619);

(statearr_3257730_3257781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (37))){
var state_3257677__$1 = state_3257677;
var statearr_3257731_3257782 = state_3257677__$1;
(statearr_3257731_3257782[(2)] = null);

(statearr_3257731_3257782[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257678 === (8))){
var inst_3257579 = (state_3257677[(8)]);
var inst_3257597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3257579);
var state_3257677__$1 = state_3257677;
var statearr_3257732_3257783 = state_3257677__$1;
(statearr_3257732_3257783[(2)] = inst_3257597);

(statearr_3257732_3257783[(1)] = (10));


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
});})(c__53126__auto___3257737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__53103__auto__,c__53126__auto___3257737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__53104__auto__ = null;
var cljs$core$async$mix_$_state_machine__53104__auto____0 = (function (){
var statearr_3257733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3257733[(0)] = cljs$core$async$mix_$_state_machine__53104__auto__);

(statearr_3257733[(1)] = (1));

return statearr_3257733;
});
var cljs$core$async$mix_$_state_machine__53104__auto____1 = (function (state_3257677){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3257677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3257734){if((e3257734 instanceof Object)){
var ex__53107__auto__ = e3257734;
var statearr_3257735_3257784 = state_3257677;
(statearr_3257735_3257784[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3257734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257785 = state_3257677;
state_3257677 = G__3257785;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__53104__auto__ = function(state_3257677){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__53104__auto____1.call(this,state_3257677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__53104__auto____0;
cljs$core$async$mix_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__53104__auto____1;
return cljs$core$async$mix_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3257737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__53128__auto__ = (function (){var statearr_3257736 = f__53127__auto__.call(null);
(statearr_3257736[(6)] = c__53126__auto___3257737);

return statearr_3257736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3257737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__50254__auto__ = (((p == null))?null:p);
var m__50255__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__50255__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__50254__auto__ = (((p == null))?null:p);
var m__50255__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,p,v,ch);
} else {
var m__50255__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__3257787 = arguments.length;
switch (G__3257787) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__50254__auto__ = (((p == null))?null:p);
var m__50255__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,p);
} else {
var m__50255__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__50254__auto__ = (((p == null))?null:p);
var m__50255__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,p,v);
} else {
var m__50255__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__3257791 = arguments.length;
switch (G__3257791) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__49521__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__49521__auto__,mults){
return (function (p1__3257789_SHARP_){
if(cljs.core.truth_(p1__3257789_SHARP_.call(null,topic))){
return p1__3257789_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3257789_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__49521__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async3257792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3257792 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta3257793){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta3257793 = meta3257793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_3257794,meta3257793__$1){
var self__ = this;
var _3257794__$1 = this;
return (new cljs.core.async.t_cljs$core$async3257792(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta3257793__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_3257794){
var self__ = this;
var _3257794__$1 = this;
return self__.meta3257793;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3257792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3257792.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta3257793","meta3257793",-2060909860,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3257792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3257792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3257792";

cljs.core.async.t_cljs$core$async3257792.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3257792");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async3257792 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async3257792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3257793){
return (new cljs.core.async.t_cljs$core$async3257792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3257793));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async3257792(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53126__auto___3257912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3257912,mults,ensure_mult,p){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3257912,mults,ensure_mult,p){
return (function (state_3257866){
var state_val_3257867 = (state_3257866[(1)]);
if((state_val_3257867 === (7))){
var inst_3257862 = (state_3257866[(2)]);
var state_3257866__$1 = state_3257866;
var statearr_3257868_3257913 = state_3257866__$1;
(statearr_3257868_3257913[(2)] = inst_3257862);

(statearr_3257868_3257913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (20))){
var state_3257866__$1 = state_3257866;
var statearr_3257869_3257914 = state_3257866__$1;
(statearr_3257869_3257914[(2)] = null);

(statearr_3257869_3257914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (1))){
var state_3257866__$1 = state_3257866;
var statearr_3257870_3257915 = state_3257866__$1;
(statearr_3257870_3257915[(2)] = null);

(statearr_3257870_3257915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (24))){
var inst_3257845 = (state_3257866[(7)]);
var inst_3257854 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_3257845);
var state_3257866__$1 = state_3257866;
var statearr_3257871_3257916 = state_3257866__$1;
(statearr_3257871_3257916[(2)] = inst_3257854);

(statearr_3257871_3257916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (4))){
var inst_3257797 = (state_3257866[(8)]);
var inst_3257797__$1 = (state_3257866[(2)]);
var inst_3257798 = (inst_3257797__$1 == null);
var state_3257866__$1 = (function (){var statearr_3257872 = state_3257866;
(statearr_3257872[(8)] = inst_3257797__$1);

return statearr_3257872;
})();
if(cljs.core.truth_(inst_3257798)){
var statearr_3257873_3257917 = state_3257866__$1;
(statearr_3257873_3257917[(1)] = (5));

} else {
var statearr_3257874_3257918 = state_3257866__$1;
(statearr_3257874_3257918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (15))){
var inst_3257839 = (state_3257866[(2)]);
var state_3257866__$1 = state_3257866;
var statearr_3257875_3257919 = state_3257866__$1;
(statearr_3257875_3257919[(2)] = inst_3257839);

(statearr_3257875_3257919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (21))){
var inst_3257859 = (state_3257866[(2)]);
var state_3257866__$1 = (function (){var statearr_3257876 = state_3257866;
(statearr_3257876[(9)] = inst_3257859);

return statearr_3257876;
})();
var statearr_3257877_3257920 = state_3257866__$1;
(statearr_3257877_3257920[(2)] = null);

(statearr_3257877_3257920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (13))){
var inst_3257821 = (state_3257866[(10)]);
var inst_3257823 = cljs.core.chunked_seq_QMARK_.call(null,inst_3257821);
var state_3257866__$1 = state_3257866;
if(inst_3257823){
var statearr_3257878_3257921 = state_3257866__$1;
(statearr_3257878_3257921[(1)] = (16));

} else {
var statearr_3257879_3257922 = state_3257866__$1;
(statearr_3257879_3257922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (22))){
var inst_3257851 = (state_3257866[(2)]);
var state_3257866__$1 = state_3257866;
if(cljs.core.truth_(inst_3257851)){
var statearr_3257880_3257923 = state_3257866__$1;
(statearr_3257880_3257923[(1)] = (23));

} else {
var statearr_3257881_3257924 = state_3257866__$1;
(statearr_3257881_3257924[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (6))){
var inst_3257797 = (state_3257866[(8)]);
var inst_3257847 = (state_3257866[(11)]);
var inst_3257845 = (state_3257866[(7)]);
var inst_3257845__$1 = topic_fn.call(null,inst_3257797);
var inst_3257846 = cljs.core.deref.call(null,mults);
var inst_3257847__$1 = cljs.core.get.call(null,inst_3257846,inst_3257845__$1);
var state_3257866__$1 = (function (){var statearr_3257882 = state_3257866;
(statearr_3257882[(11)] = inst_3257847__$1);

(statearr_3257882[(7)] = inst_3257845__$1);

return statearr_3257882;
})();
if(cljs.core.truth_(inst_3257847__$1)){
var statearr_3257883_3257925 = state_3257866__$1;
(statearr_3257883_3257925[(1)] = (19));

} else {
var statearr_3257884_3257926 = state_3257866__$1;
(statearr_3257884_3257926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (25))){
var inst_3257856 = (state_3257866[(2)]);
var state_3257866__$1 = state_3257866;
var statearr_3257885_3257927 = state_3257866__$1;
(statearr_3257885_3257927[(2)] = inst_3257856);

(statearr_3257885_3257927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (17))){
var inst_3257821 = (state_3257866[(10)]);
var inst_3257830 = cljs.core.first.call(null,inst_3257821);
var inst_3257831 = cljs.core.async.muxch_STAR_.call(null,inst_3257830);
var inst_3257832 = cljs.core.async.close_BANG_.call(null,inst_3257831);
var inst_3257833 = cljs.core.next.call(null,inst_3257821);
var inst_3257807 = inst_3257833;
var inst_3257808 = null;
var inst_3257809 = (0);
var inst_3257810 = (0);
var state_3257866__$1 = (function (){var statearr_3257886 = state_3257866;
(statearr_3257886[(12)] = inst_3257807);

(statearr_3257886[(13)] = inst_3257809);

(statearr_3257886[(14)] = inst_3257810);

(statearr_3257886[(15)] = inst_3257832);

(statearr_3257886[(16)] = inst_3257808);

return statearr_3257886;
})();
var statearr_3257887_3257928 = state_3257866__$1;
(statearr_3257887_3257928[(2)] = null);

(statearr_3257887_3257928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (3))){
var inst_3257864 = (state_3257866[(2)]);
var state_3257866__$1 = state_3257866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3257866__$1,inst_3257864);
} else {
if((state_val_3257867 === (12))){
var inst_3257841 = (state_3257866[(2)]);
var state_3257866__$1 = state_3257866;
var statearr_3257888_3257929 = state_3257866__$1;
(statearr_3257888_3257929[(2)] = inst_3257841);

(statearr_3257888_3257929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (2))){
var state_3257866__$1 = state_3257866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3257866__$1,(4),ch);
} else {
if((state_val_3257867 === (23))){
var state_3257866__$1 = state_3257866;
var statearr_3257889_3257930 = state_3257866__$1;
(statearr_3257889_3257930[(2)] = null);

(statearr_3257889_3257930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (19))){
var inst_3257797 = (state_3257866[(8)]);
var inst_3257847 = (state_3257866[(11)]);
var inst_3257849 = cljs.core.async.muxch_STAR_.call(null,inst_3257847);
var state_3257866__$1 = state_3257866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3257866__$1,(22),inst_3257849,inst_3257797);
} else {
if((state_val_3257867 === (11))){
var inst_3257807 = (state_3257866[(12)]);
var inst_3257821 = (state_3257866[(10)]);
var inst_3257821__$1 = cljs.core.seq.call(null,inst_3257807);
var state_3257866__$1 = (function (){var statearr_3257890 = state_3257866;
(statearr_3257890[(10)] = inst_3257821__$1);

return statearr_3257890;
})();
if(inst_3257821__$1){
var statearr_3257891_3257931 = state_3257866__$1;
(statearr_3257891_3257931[(1)] = (13));

} else {
var statearr_3257892_3257932 = state_3257866__$1;
(statearr_3257892_3257932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (9))){
var inst_3257843 = (state_3257866[(2)]);
var state_3257866__$1 = state_3257866;
var statearr_3257893_3257933 = state_3257866__$1;
(statearr_3257893_3257933[(2)] = inst_3257843);

(statearr_3257893_3257933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (5))){
var inst_3257804 = cljs.core.deref.call(null,mults);
var inst_3257805 = cljs.core.vals.call(null,inst_3257804);
var inst_3257806 = cljs.core.seq.call(null,inst_3257805);
var inst_3257807 = inst_3257806;
var inst_3257808 = null;
var inst_3257809 = (0);
var inst_3257810 = (0);
var state_3257866__$1 = (function (){var statearr_3257894 = state_3257866;
(statearr_3257894[(12)] = inst_3257807);

(statearr_3257894[(13)] = inst_3257809);

(statearr_3257894[(14)] = inst_3257810);

(statearr_3257894[(16)] = inst_3257808);

return statearr_3257894;
})();
var statearr_3257895_3257934 = state_3257866__$1;
(statearr_3257895_3257934[(2)] = null);

(statearr_3257895_3257934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (14))){
var state_3257866__$1 = state_3257866;
var statearr_3257899_3257935 = state_3257866__$1;
(statearr_3257899_3257935[(2)] = null);

(statearr_3257899_3257935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (16))){
var inst_3257821 = (state_3257866[(10)]);
var inst_3257825 = cljs.core.chunk_first.call(null,inst_3257821);
var inst_3257826 = cljs.core.chunk_rest.call(null,inst_3257821);
var inst_3257827 = cljs.core.count.call(null,inst_3257825);
var inst_3257807 = inst_3257826;
var inst_3257808 = inst_3257825;
var inst_3257809 = inst_3257827;
var inst_3257810 = (0);
var state_3257866__$1 = (function (){var statearr_3257900 = state_3257866;
(statearr_3257900[(12)] = inst_3257807);

(statearr_3257900[(13)] = inst_3257809);

(statearr_3257900[(14)] = inst_3257810);

(statearr_3257900[(16)] = inst_3257808);

return statearr_3257900;
})();
var statearr_3257901_3257936 = state_3257866__$1;
(statearr_3257901_3257936[(2)] = null);

(statearr_3257901_3257936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (10))){
var inst_3257807 = (state_3257866[(12)]);
var inst_3257809 = (state_3257866[(13)]);
var inst_3257810 = (state_3257866[(14)]);
var inst_3257808 = (state_3257866[(16)]);
var inst_3257815 = cljs.core._nth.call(null,inst_3257808,inst_3257810);
var inst_3257816 = cljs.core.async.muxch_STAR_.call(null,inst_3257815);
var inst_3257817 = cljs.core.async.close_BANG_.call(null,inst_3257816);
var inst_3257818 = (inst_3257810 + (1));
var tmp3257896 = inst_3257807;
var tmp3257897 = inst_3257809;
var tmp3257898 = inst_3257808;
var inst_3257807__$1 = tmp3257896;
var inst_3257808__$1 = tmp3257898;
var inst_3257809__$1 = tmp3257897;
var inst_3257810__$1 = inst_3257818;
var state_3257866__$1 = (function (){var statearr_3257902 = state_3257866;
(statearr_3257902[(12)] = inst_3257807__$1);

(statearr_3257902[(13)] = inst_3257809__$1);

(statearr_3257902[(14)] = inst_3257810__$1);

(statearr_3257902[(17)] = inst_3257817);

(statearr_3257902[(16)] = inst_3257808__$1);

return statearr_3257902;
})();
var statearr_3257903_3257937 = state_3257866__$1;
(statearr_3257903_3257937[(2)] = null);

(statearr_3257903_3257937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (18))){
var inst_3257836 = (state_3257866[(2)]);
var state_3257866__$1 = state_3257866;
var statearr_3257904_3257938 = state_3257866__$1;
(statearr_3257904_3257938[(2)] = inst_3257836);

(statearr_3257904_3257938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257867 === (8))){
var inst_3257809 = (state_3257866[(13)]);
var inst_3257810 = (state_3257866[(14)]);
var inst_3257812 = (inst_3257810 < inst_3257809);
var inst_3257813 = inst_3257812;
var state_3257866__$1 = state_3257866;
if(cljs.core.truth_(inst_3257813)){
var statearr_3257905_3257939 = state_3257866__$1;
(statearr_3257905_3257939[(1)] = (10));

} else {
var statearr_3257906_3257940 = state_3257866__$1;
(statearr_3257906_3257940[(1)] = (11));

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
});})(c__53126__auto___3257912,mults,ensure_mult,p))
;
return ((function (switch__53103__auto__,c__53126__auto___3257912,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3257907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3257907[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3257907[(1)] = (1));

return statearr_3257907;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3257866){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3257866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3257908){if((e3257908 instanceof Object)){
var ex__53107__auto__ = e3257908;
var statearr_3257909_3257941 = state_3257866;
(statearr_3257909_3257941[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3257908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3257942 = state_3257866;
state_3257866 = G__3257942;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3257866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3257866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3257912,mults,ensure_mult,p))
})();
var state__53128__auto__ = (function (){var statearr_3257910 = f__53127__auto__.call(null);
(statearr_3257910[(6)] = c__53126__auto___3257912);

return statearr_3257910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3257912,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__3257944 = arguments.length;
switch (G__3257944) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__3257947 = arguments.length;
switch (G__3257947) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__3257950 = arguments.length;
switch (G__3257950) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__53126__auto___3258017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3258017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3258017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_3257989){
var state_val_3257990 = (state_3257989[(1)]);
if((state_val_3257990 === (7))){
var state_3257989__$1 = state_3257989;
var statearr_3257991_3258018 = state_3257989__$1;
(statearr_3257991_3258018[(2)] = null);

(statearr_3257991_3258018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (1))){
var state_3257989__$1 = state_3257989;
var statearr_3257992_3258019 = state_3257989__$1;
(statearr_3257992_3258019[(2)] = null);

(statearr_3257992_3258019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (4))){
var inst_3257953 = (state_3257989[(7)]);
var inst_3257955 = (inst_3257953 < cnt);
var state_3257989__$1 = state_3257989;
if(cljs.core.truth_(inst_3257955)){
var statearr_3257993_3258020 = state_3257989__$1;
(statearr_3257993_3258020[(1)] = (6));

} else {
var statearr_3257994_3258021 = state_3257989__$1;
(statearr_3257994_3258021[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (15))){
var inst_3257985 = (state_3257989[(2)]);
var state_3257989__$1 = state_3257989;
var statearr_3257995_3258022 = state_3257989__$1;
(statearr_3257995_3258022[(2)] = inst_3257985);

(statearr_3257995_3258022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (13))){
var inst_3257978 = cljs.core.async.close_BANG_.call(null,out);
var state_3257989__$1 = state_3257989;
var statearr_3257996_3258023 = state_3257989__$1;
(statearr_3257996_3258023[(2)] = inst_3257978);

(statearr_3257996_3258023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (6))){
var state_3257989__$1 = state_3257989;
var statearr_3257997_3258024 = state_3257989__$1;
(statearr_3257997_3258024[(2)] = null);

(statearr_3257997_3258024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (3))){
var inst_3257987 = (state_3257989[(2)]);
var state_3257989__$1 = state_3257989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3257989__$1,inst_3257987);
} else {
if((state_val_3257990 === (12))){
var inst_3257975 = (state_3257989[(8)]);
var inst_3257975__$1 = (state_3257989[(2)]);
var inst_3257976 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_3257975__$1);
var state_3257989__$1 = (function (){var statearr_3257998 = state_3257989;
(statearr_3257998[(8)] = inst_3257975__$1);

return statearr_3257998;
})();
if(cljs.core.truth_(inst_3257976)){
var statearr_3257999_3258025 = state_3257989__$1;
(statearr_3257999_3258025[(1)] = (13));

} else {
var statearr_3258000_3258026 = state_3257989__$1;
(statearr_3258000_3258026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (2))){
var inst_3257952 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_3257953 = (0);
var state_3257989__$1 = (function (){var statearr_3258001 = state_3257989;
(statearr_3258001[(9)] = inst_3257952);

(statearr_3258001[(7)] = inst_3257953);

return statearr_3258001;
})();
var statearr_3258002_3258027 = state_3257989__$1;
(statearr_3258002_3258027[(2)] = null);

(statearr_3258002_3258027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (11))){
var inst_3257953 = (state_3257989[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_3257989,(10),Object,null,(9));
var inst_3257962 = chs__$1.call(null,inst_3257953);
var inst_3257963 = done.call(null,inst_3257953);
var inst_3257964 = cljs.core.async.take_BANG_.call(null,inst_3257962,inst_3257963);
var state_3257989__$1 = state_3257989;
var statearr_3258003_3258028 = state_3257989__$1;
(statearr_3258003_3258028[(2)] = inst_3257964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (9))){
var inst_3257953 = (state_3257989[(7)]);
var inst_3257966 = (state_3257989[(2)]);
var inst_3257967 = (inst_3257953 + (1));
var inst_3257953__$1 = inst_3257967;
var state_3257989__$1 = (function (){var statearr_3258004 = state_3257989;
(statearr_3258004[(10)] = inst_3257966);

(statearr_3258004[(7)] = inst_3257953__$1);

return statearr_3258004;
})();
var statearr_3258005_3258029 = state_3257989__$1;
(statearr_3258005_3258029[(2)] = null);

(statearr_3258005_3258029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (5))){
var inst_3257973 = (state_3257989[(2)]);
var state_3257989__$1 = (function (){var statearr_3258006 = state_3257989;
(statearr_3258006[(11)] = inst_3257973);

return statearr_3258006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3257989__$1,(12),dchan);
} else {
if((state_val_3257990 === (14))){
var inst_3257975 = (state_3257989[(8)]);
var inst_3257980 = cljs.core.apply.call(null,f,inst_3257975);
var state_3257989__$1 = state_3257989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3257989__$1,(16),out,inst_3257980);
} else {
if((state_val_3257990 === (16))){
var inst_3257982 = (state_3257989[(2)]);
var state_3257989__$1 = (function (){var statearr_3258007 = state_3257989;
(statearr_3258007[(12)] = inst_3257982);

return statearr_3258007;
})();
var statearr_3258008_3258030 = state_3257989__$1;
(statearr_3258008_3258030[(2)] = null);

(statearr_3258008_3258030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (10))){
var inst_3257957 = (state_3257989[(2)]);
var inst_3257958 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_3257989__$1 = (function (){var statearr_3258009 = state_3257989;
(statearr_3258009[(13)] = inst_3257957);

return statearr_3258009;
})();
var statearr_3258010_3258031 = state_3257989__$1;
(statearr_3258010_3258031[(2)] = inst_3257958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3257990 === (8))){
var inst_3257971 = (state_3257989[(2)]);
var state_3257989__$1 = state_3257989;
var statearr_3258011_3258032 = state_3257989__$1;
(statearr_3258011_3258032[(2)] = inst_3257971);

(statearr_3258011_3258032[(1)] = (5));


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
});})(c__53126__auto___3258017,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__53103__auto__,c__53126__auto___3258017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3258012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3258012[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3258012[(1)] = (1));

return statearr_3258012;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3257989){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3257989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3258013){if((e3258013 instanceof Object)){
var ex__53107__auto__ = e3258013;
var statearr_3258014_3258033 = state_3257989;
(statearr_3258014_3258033[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3257989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3258034 = state_3257989;
state_3257989 = G__3258034;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3257989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3257989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3258017,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__53128__auto__ = (function (){var statearr_3258015 = f__53127__auto__.call(null);
(statearr_3258015[(6)] = c__53126__auto___3258017);

return statearr_3258015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3258017,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__3258037 = arguments.length;
switch (G__3258037) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53126__auto___3258091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3258091,out){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3258091,out){
return (function (state_3258069){
var state_val_3258070 = (state_3258069[(1)]);
if((state_val_3258070 === (7))){
var inst_3258049 = (state_3258069[(7)]);
var inst_3258048 = (state_3258069[(8)]);
var inst_3258048__$1 = (state_3258069[(2)]);
var inst_3258049__$1 = cljs.core.nth.call(null,inst_3258048__$1,(0),null);
var inst_3258050 = cljs.core.nth.call(null,inst_3258048__$1,(1),null);
var inst_3258051 = (inst_3258049__$1 == null);
var state_3258069__$1 = (function (){var statearr_3258071 = state_3258069;
(statearr_3258071[(9)] = inst_3258050);

(statearr_3258071[(7)] = inst_3258049__$1);

(statearr_3258071[(8)] = inst_3258048__$1);

return statearr_3258071;
})();
if(cljs.core.truth_(inst_3258051)){
var statearr_3258072_3258092 = state_3258069__$1;
(statearr_3258072_3258092[(1)] = (8));

} else {
var statearr_3258073_3258093 = state_3258069__$1;
(statearr_3258073_3258093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258070 === (1))){
var inst_3258038 = cljs.core.vec.call(null,chs);
var inst_3258039 = inst_3258038;
var state_3258069__$1 = (function (){var statearr_3258074 = state_3258069;
(statearr_3258074[(10)] = inst_3258039);

return statearr_3258074;
})();
var statearr_3258075_3258094 = state_3258069__$1;
(statearr_3258075_3258094[(2)] = null);

(statearr_3258075_3258094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258070 === (4))){
var inst_3258039 = (state_3258069[(10)]);
var state_3258069__$1 = state_3258069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_3258069__$1,(7),inst_3258039);
} else {
if((state_val_3258070 === (6))){
var inst_3258065 = (state_3258069[(2)]);
var state_3258069__$1 = state_3258069;
var statearr_3258076_3258095 = state_3258069__$1;
(statearr_3258076_3258095[(2)] = inst_3258065);

(statearr_3258076_3258095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258070 === (3))){
var inst_3258067 = (state_3258069[(2)]);
var state_3258069__$1 = state_3258069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3258069__$1,inst_3258067);
} else {
if((state_val_3258070 === (2))){
var inst_3258039 = (state_3258069[(10)]);
var inst_3258041 = cljs.core.count.call(null,inst_3258039);
var inst_3258042 = (inst_3258041 > (0));
var state_3258069__$1 = state_3258069;
if(cljs.core.truth_(inst_3258042)){
var statearr_3258078_3258096 = state_3258069__$1;
(statearr_3258078_3258096[(1)] = (4));

} else {
var statearr_3258079_3258097 = state_3258069__$1;
(statearr_3258079_3258097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258070 === (11))){
var inst_3258039 = (state_3258069[(10)]);
var inst_3258058 = (state_3258069[(2)]);
var tmp3258077 = inst_3258039;
var inst_3258039__$1 = tmp3258077;
var state_3258069__$1 = (function (){var statearr_3258080 = state_3258069;
(statearr_3258080[(10)] = inst_3258039__$1);

(statearr_3258080[(11)] = inst_3258058);

return statearr_3258080;
})();
var statearr_3258081_3258098 = state_3258069__$1;
(statearr_3258081_3258098[(2)] = null);

(statearr_3258081_3258098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258070 === (9))){
var inst_3258049 = (state_3258069[(7)]);
var state_3258069__$1 = state_3258069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258069__$1,(11),out,inst_3258049);
} else {
if((state_val_3258070 === (5))){
var inst_3258063 = cljs.core.async.close_BANG_.call(null,out);
var state_3258069__$1 = state_3258069;
var statearr_3258082_3258099 = state_3258069__$1;
(statearr_3258082_3258099[(2)] = inst_3258063);

(statearr_3258082_3258099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258070 === (10))){
var inst_3258061 = (state_3258069[(2)]);
var state_3258069__$1 = state_3258069;
var statearr_3258083_3258100 = state_3258069__$1;
(statearr_3258083_3258100[(2)] = inst_3258061);

(statearr_3258083_3258100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258070 === (8))){
var inst_3258050 = (state_3258069[(9)]);
var inst_3258039 = (state_3258069[(10)]);
var inst_3258049 = (state_3258069[(7)]);
var inst_3258048 = (state_3258069[(8)]);
var inst_3258053 = (function (){var cs = inst_3258039;
var vec__3258044 = inst_3258048;
var v = inst_3258049;
var c = inst_3258050;
return ((function (cs,vec__3258044,v,c,inst_3258050,inst_3258039,inst_3258049,inst_3258048,state_val_3258070,c__53126__auto___3258091,out){
return (function (p1__3258035_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__3258035_SHARP_);
});
;})(cs,vec__3258044,v,c,inst_3258050,inst_3258039,inst_3258049,inst_3258048,state_val_3258070,c__53126__auto___3258091,out))
})();
var inst_3258054 = cljs.core.filterv.call(null,inst_3258053,inst_3258039);
var inst_3258039__$1 = inst_3258054;
var state_3258069__$1 = (function (){var statearr_3258084 = state_3258069;
(statearr_3258084[(10)] = inst_3258039__$1);

return statearr_3258084;
})();
var statearr_3258085_3258101 = state_3258069__$1;
(statearr_3258085_3258101[(2)] = null);

(statearr_3258085_3258101[(1)] = (2));


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
});})(c__53126__auto___3258091,out))
;
return ((function (switch__53103__auto__,c__53126__auto___3258091,out){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3258086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3258086[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3258086[(1)] = (1));

return statearr_3258086;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3258069){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3258069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3258087){if((e3258087 instanceof Object)){
var ex__53107__auto__ = e3258087;
var statearr_3258088_3258102 = state_3258069;
(statearr_3258088_3258102[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3258069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3258103 = state_3258069;
state_3258069 = G__3258103;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3258069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3258069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3258091,out))
})();
var state__53128__auto__ = (function (){var statearr_3258089 = f__53127__auto__.call(null);
(statearr_3258089[(6)] = c__53126__auto___3258091);

return statearr_3258089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3258091,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__3258105 = arguments.length;
switch (G__3258105) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53126__auto___3258150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3258150,out){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3258150,out){
return (function (state_3258129){
var state_val_3258130 = (state_3258129[(1)]);
if((state_val_3258130 === (7))){
var inst_3258111 = (state_3258129[(7)]);
var inst_3258111__$1 = (state_3258129[(2)]);
var inst_3258112 = (inst_3258111__$1 == null);
var inst_3258113 = cljs.core.not.call(null,inst_3258112);
var state_3258129__$1 = (function (){var statearr_3258131 = state_3258129;
(statearr_3258131[(7)] = inst_3258111__$1);

return statearr_3258131;
})();
if(inst_3258113){
var statearr_3258132_3258151 = state_3258129__$1;
(statearr_3258132_3258151[(1)] = (8));

} else {
var statearr_3258133_3258152 = state_3258129__$1;
(statearr_3258133_3258152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258130 === (1))){
var inst_3258106 = (0);
var state_3258129__$1 = (function (){var statearr_3258134 = state_3258129;
(statearr_3258134[(8)] = inst_3258106);

return statearr_3258134;
})();
var statearr_3258135_3258153 = state_3258129__$1;
(statearr_3258135_3258153[(2)] = null);

(statearr_3258135_3258153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258130 === (4))){
var state_3258129__$1 = state_3258129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3258129__$1,(7),ch);
} else {
if((state_val_3258130 === (6))){
var inst_3258124 = (state_3258129[(2)]);
var state_3258129__$1 = state_3258129;
var statearr_3258136_3258154 = state_3258129__$1;
(statearr_3258136_3258154[(2)] = inst_3258124);

(statearr_3258136_3258154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258130 === (3))){
var inst_3258126 = (state_3258129[(2)]);
var inst_3258127 = cljs.core.async.close_BANG_.call(null,out);
var state_3258129__$1 = (function (){var statearr_3258137 = state_3258129;
(statearr_3258137[(9)] = inst_3258126);

return statearr_3258137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3258129__$1,inst_3258127);
} else {
if((state_val_3258130 === (2))){
var inst_3258106 = (state_3258129[(8)]);
var inst_3258108 = (inst_3258106 < n);
var state_3258129__$1 = state_3258129;
if(cljs.core.truth_(inst_3258108)){
var statearr_3258138_3258155 = state_3258129__$1;
(statearr_3258138_3258155[(1)] = (4));

} else {
var statearr_3258139_3258156 = state_3258129__$1;
(statearr_3258139_3258156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258130 === (11))){
var inst_3258106 = (state_3258129[(8)]);
var inst_3258116 = (state_3258129[(2)]);
var inst_3258117 = (inst_3258106 + (1));
var inst_3258106__$1 = inst_3258117;
var state_3258129__$1 = (function (){var statearr_3258140 = state_3258129;
(statearr_3258140[(8)] = inst_3258106__$1);

(statearr_3258140[(10)] = inst_3258116);

return statearr_3258140;
})();
var statearr_3258141_3258157 = state_3258129__$1;
(statearr_3258141_3258157[(2)] = null);

(statearr_3258141_3258157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258130 === (9))){
var state_3258129__$1 = state_3258129;
var statearr_3258142_3258158 = state_3258129__$1;
(statearr_3258142_3258158[(2)] = null);

(statearr_3258142_3258158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258130 === (5))){
var state_3258129__$1 = state_3258129;
var statearr_3258143_3258159 = state_3258129__$1;
(statearr_3258143_3258159[(2)] = null);

(statearr_3258143_3258159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258130 === (10))){
var inst_3258121 = (state_3258129[(2)]);
var state_3258129__$1 = state_3258129;
var statearr_3258144_3258160 = state_3258129__$1;
(statearr_3258144_3258160[(2)] = inst_3258121);

(statearr_3258144_3258160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258130 === (8))){
var inst_3258111 = (state_3258129[(7)]);
var state_3258129__$1 = state_3258129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258129__$1,(11),out,inst_3258111);
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
});})(c__53126__auto___3258150,out))
;
return ((function (switch__53103__auto__,c__53126__auto___3258150,out){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3258145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3258145[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3258145[(1)] = (1));

return statearr_3258145;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3258129){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3258129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3258146){if((e3258146 instanceof Object)){
var ex__53107__auto__ = e3258146;
var statearr_3258147_3258161 = state_3258129;
(statearr_3258147_3258161[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3258129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3258162 = state_3258129;
state_3258129 = G__3258162;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3258129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3258129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3258150,out))
})();
var state__53128__auto__ = (function (){var statearr_3258148 = f__53127__auto__.call(null);
(statearr_3258148[(6)] = c__53126__auto___3258150);

return statearr_3258148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3258150,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async3258164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3258164 = (function (f,ch,meta3258165){
this.f = f;
this.ch = ch;
this.meta3258165 = meta3258165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3258166,meta3258165__$1){
var self__ = this;
var _3258166__$1 = this;
return (new cljs.core.async.t_cljs$core$async3258164(self__.f,self__.ch,meta3258165__$1));
});

cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3258166){
var self__ = this;
var _3258166__$1 = this;
return self__.meta3258165;
});

cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async3258167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3258167 = (function (f,ch,meta3258165,_,fn1,meta3258168){
this.f = f;
this.ch = ch;
this.meta3258165 = meta3258165;
this._ = _;
this.fn1 = fn1;
this.meta3258168 = meta3258168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3258167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_3258169,meta3258168__$1){
var self__ = this;
var _3258169__$1 = this;
return (new cljs.core.async.t_cljs$core$async3258167(self__.f,self__.ch,self__.meta3258165,self__._,self__.fn1,meta3258168__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async3258167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_3258169){
var self__ = this;
var _3258169__$1 = this;
return self__.meta3258168;
});})(___$1))
;

cljs.core.async.t_cljs$core$async3258167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async3258167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async3258167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__3258163_SHARP_){
return f1.call(null,(((p1__3258163_SHARP_ == null))?null:self__.f.call(null,p1__3258163_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async3258167.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3258165","meta3258165",143343437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async3258164","cljs.core.async/t_cljs$core$async3258164",1211118239,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta3258168","meta3258168",1872896242,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async3258167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3258167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3258167";

cljs.core.async.t_cljs$core$async3258167.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3258167");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async3258167 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async3258167(f__$1,ch__$1,meta3258165__$1,___$2,fn1__$1,meta3258168){
return (new cljs.core.async.t_cljs$core$async3258167(f__$1,ch__$1,meta3258165__$1,___$2,fn1__$1,meta3258168));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async3258167(self__.f,self__.ch,self__.meta3258165,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__49509__auto__ = ret;
if(cljs.core.truth_(and__49509__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__49509__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async3258164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3258165","meta3258165",143343437,null)], null);
});

cljs.core.async.t_cljs$core$async3258164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3258164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3258164";

cljs.core.async.t_cljs$core$async3258164.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3258164");
});

cljs.core.async.__GT_t_cljs$core$async3258164 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async3258164(f__$1,ch__$1,meta3258165){
return (new cljs.core.async.t_cljs$core$async3258164(f__$1,ch__$1,meta3258165));
});

}

return (new cljs.core.async.t_cljs$core$async3258164(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async3258170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3258170 = (function (f,ch,meta3258171){
this.f = f;
this.ch = ch;
this.meta3258171 = meta3258171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3258170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3258172,meta3258171__$1){
var self__ = this;
var _3258172__$1 = this;
return (new cljs.core.async.t_cljs$core$async3258170(self__.f,self__.ch,meta3258171__$1));
});

cljs.core.async.t_cljs$core$async3258170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3258172){
var self__ = this;
var _3258172__$1 = this;
return self__.meta3258171;
});

cljs.core.async.t_cljs$core$async3258170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async3258170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async3258170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async3258170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3258171","meta3258171",377558087,null)], null);
});

cljs.core.async.t_cljs$core$async3258170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3258170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3258170";

cljs.core.async.t_cljs$core$async3258170.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3258170");
});

cljs.core.async.__GT_t_cljs$core$async3258170 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async3258170(f__$1,ch__$1,meta3258171){
return (new cljs.core.async.t_cljs$core$async3258170(f__$1,ch__$1,meta3258171));
});

}

return (new cljs.core.async.t_cljs$core$async3258170(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async3258173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3258173 = (function (p,ch,meta3258174){
this.p = p;
this.ch = ch;
this.meta3258174 = meta3258174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3258175,meta3258174__$1){
var self__ = this;
var _3258175__$1 = this;
return (new cljs.core.async.t_cljs$core$async3258173(self__.p,self__.ch,meta3258174__$1));
});

cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3258175){
var self__ = this;
var _3258175__$1 = this;
return self__.meta3258174;
});

cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3258173.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async3258173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3258174","meta3258174",1305443711,null)], null);
});

cljs.core.async.t_cljs$core$async3258173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3258173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3258173";

cljs.core.async.t_cljs$core$async3258173.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async3258173");
});

cljs.core.async.__GT_t_cljs$core$async3258173 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async3258173(p__$1,ch__$1,meta3258174){
return (new cljs.core.async.t_cljs$core$async3258173(p__$1,ch__$1,meta3258174));
});

}

return (new cljs.core.async.t_cljs$core$async3258173(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__3258177 = arguments.length;
switch (G__3258177) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53126__auto___3258217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3258217,out){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3258217,out){
return (function (state_3258198){
var state_val_3258199 = (state_3258198[(1)]);
if((state_val_3258199 === (7))){
var inst_3258194 = (state_3258198[(2)]);
var state_3258198__$1 = state_3258198;
var statearr_3258200_3258218 = state_3258198__$1;
(statearr_3258200_3258218[(2)] = inst_3258194);

(statearr_3258200_3258218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258199 === (1))){
var state_3258198__$1 = state_3258198;
var statearr_3258201_3258219 = state_3258198__$1;
(statearr_3258201_3258219[(2)] = null);

(statearr_3258201_3258219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258199 === (4))){
var inst_3258180 = (state_3258198[(7)]);
var inst_3258180__$1 = (state_3258198[(2)]);
var inst_3258181 = (inst_3258180__$1 == null);
var state_3258198__$1 = (function (){var statearr_3258202 = state_3258198;
(statearr_3258202[(7)] = inst_3258180__$1);

return statearr_3258202;
})();
if(cljs.core.truth_(inst_3258181)){
var statearr_3258203_3258220 = state_3258198__$1;
(statearr_3258203_3258220[(1)] = (5));

} else {
var statearr_3258204_3258221 = state_3258198__$1;
(statearr_3258204_3258221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258199 === (6))){
var inst_3258180 = (state_3258198[(7)]);
var inst_3258185 = p.call(null,inst_3258180);
var state_3258198__$1 = state_3258198;
if(cljs.core.truth_(inst_3258185)){
var statearr_3258205_3258222 = state_3258198__$1;
(statearr_3258205_3258222[(1)] = (8));

} else {
var statearr_3258206_3258223 = state_3258198__$1;
(statearr_3258206_3258223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258199 === (3))){
var inst_3258196 = (state_3258198[(2)]);
var state_3258198__$1 = state_3258198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3258198__$1,inst_3258196);
} else {
if((state_val_3258199 === (2))){
var state_3258198__$1 = state_3258198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3258198__$1,(4),ch);
} else {
if((state_val_3258199 === (11))){
var inst_3258188 = (state_3258198[(2)]);
var state_3258198__$1 = state_3258198;
var statearr_3258207_3258224 = state_3258198__$1;
(statearr_3258207_3258224[(2)] = inst_3258188);

(statearr_3258207_3258224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258199 === (9))){
var state_3258198__$1 = state_3258198;
var statearr_3258208_3258225 = state_3258198__$1;
(statearr_3258208_3258225[(2)] = null);

(statearr_3258208_3258225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258199 === (5))){
var inst_3258183 = cljs.core.async.close_BANG_.call(null,out);
var state_3258198__$1 = state_3258198;
var statearr_3258209_3258226 = state_3258198__$1;
(statearr_3258209_3258226[(2)] = inst_3258183);

(statearr_3258209_3258226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258199 === (10))){
var inst_3258191 = (state_3258198[(2)]);
var state_3258198__$1 = (function (){var statearr_3258210 = state_3258198;
(statearr_3258210[(8)] = inst_3258191);

return statearr_3258210;
})();
var statearr_3258211_3258227 = state_3258198__$1;
(statearr_3258211_3258227[(2)] = null);

(statearr_3258211_3258227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258199 === (8))){
var inst_3258180 = (state_3258198[(7)]);
var state_3258198__$1 = state_3258198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258198__$1,(11),out,inst_3258180);
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
});})(c__53126__auto___3258217,out))
;
return ((function (switch__53103__auto__,c__53126__auto___3258217,out){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3258212 = [null,null,null,null,null,null,null,null,null];
(statearr_3258212[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3258212[(1)] = (1));

return statearr_3258212;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3258198){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3258198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3258213){if((e3258213 instanceof Object)){
var ex__53107__auto__ = e3258213;
var statearr_3258214_3258228 = state_3258198;
(statearr_3258214_3258228[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3258198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3258229 = state_3258198;
state_3258198 = G__3258229;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3258198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3258198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3258217,out))
})();
var state__53128__auto__ = (function (){var statearr_3258215 = f__53127__auto__.call(null);
(statearr_3258215[(6)] = c__53126__auto___3258217);

return statearr_3258215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3258217,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__3258231 = arguments.length;
switch (G__3258231) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__){
return (function (state_3258294){
var state_val_3258295 = (state_3258294[(1)]);
if((state_val_3258295 === (7))){
var inst_3258290 = (state_3258294[(2)]);
var state_3258294__$1 = state_3258294;
var statearr_3258296_3258334 = state_3258294__$1;
(statearr_3258296_3258334[(2)] = inst_3258290);

(statearr_3258296_3258334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (20))){
var inst_3258260 = (state_3258294[(7)]);
var inst_3258271 = (state_3258294[(2)]);
var inst_3258272 = cljs.core.next.call(null,inst_3258260);
var inst_3258246 = inst_3258272;
var inst_3258247 = null;
var inst_3258248 = (0);
var inst_3258249 = (0);
var state_3258294__$1 = (function (){var statearr_3258297 = state_3258294;
(statearr_3258297[(8)] = inst_3258246);

(statearr_3258297[(9)] = inst_3258271);

(statearr_3258297[(10)] = inst_3258247);

(statearr_3258297[(11)] = inst_3258248);

(statearr_3258297[(12)] = inst_3258249);

return statearr_3258297;
})();
var statearr_3258298_3258335 = state_3258294__$1;
(statearr_3258298_3258335[(2)] = null);

(statearr_3258298_3258335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (1))){
var state_3258294__$1 = state_3258294;
var statearr_3258299_3258336 = state_3258294__$1;
(statearr_3258299_3258336[(2)] = null);

(statearr_3258299_3258336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (4))){
var inst_3258235 = (state_3258294[(13)]);
var inst_3258235__$1 = (state_3258294[(2)]);
var inst_3258236 = (inst_3258235__$1 == null);
var state_3258294__$1 = (function (){var statearr_3258300 = state_3258294;
(statearr_3258300[(13)] = inst_3258235__$1);

return statearr_3258300;
})();
if(cljs.core.truth_(inst_3258236)){
var statearr_3258301_3258337 = state_3258294__$1;
(statearr_3258301_3258337[(1)] = (5));

} else {
var statearr_3258302_3258338 = state_3258294__$1;
(statearr_3258302_3258338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (15))){
var state_3258294__$1 = state_3258294;
var statearr_3258306_3258339 = state_3258294__$1;
(statearr_3258306_3258339[(2)] = null);

(statearr_3258306_3258339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (21))){
var state_3258294__$1 = state_3258294;
var statearr_3258307_3258340 = state_3258294__$1;
(statearr_3258307_3258340[(2)] = null);

(statearr_3258307_3258340[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (13))){
var inst_3258246 = (state_3258294[(8)]);
var inst_3258247 = (state_3258294[(10)]);
var inst_3258248 = (state_3258294[(11)]);
var inst_3258249 = (state_3258294[(12)]);
var inst_3258256 = (state_3258294[(2)]);
var inst_3258257 = (inst_3258249 + (1));
var tmp3258303 = inst_3258246;
var tmp3258304 = inst_3258247;
var tmp3258305 = inst_3258248;
var inst_3258246__$1 = tmp3258303;
var inst_3258247__$1 = tmp3258304;
var inst_3258248__$1 = tmp3258305;
var inst_3258249__$1 = inst_3258257;
var state_3258294__$1 = (function (){var statearr_3258308 = state_3258294;
(statearr_3258308[(14)] = inst_3258256);

(statearr_3258308[(8)] = inst_3258246__$1);

(statearr_3258308[(10)] = inst_3258247__$1);

(statearr_3258308[(11)] = inst_3258248__$1);

(statearr_3258308[(12)] = inst_3258249__$1);

return statearr_3258308;
})();
var statearr_3258309_3258341 = state_3258294__$1;
(statearr_3258309_3258341[(2)] = null);

(statearr_3258309_3258341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (22))){
var state_3258294__$1 = state_3258294;
var statearr_3258310_3258342 = state_3258294__$1;
(statearr_3258310_3258342[(2)] = null);

(statearr_3258310_3258342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (6))){
var inst_3258235 = (state_3258294[(13)]);
var inst_3258244 = f.call(null,inst_3258235);
var inst_3258245 = cljs.core.seq.call(null,inst_3258244);
var inst_3258246 = inst_3258245;
var inst_3258247 = null;
var inst_3258248 = (0);
var inst_3258249 = (0);
var state_3258294__$1 = (function (){var statearr_3258311 = state_3258294;
(statearr_3258311[(8)] = inst_3258246);

(statearr_3258311[(10)] = inst_3258247);

(statearr_3258311[(11)] = inst_3258248);

(statearr_3258311[(12)] = inst_3258249);

return statearr_3258311;
})();
var statearr_3258312_3258343 = state_3258294__$1;
(statearr_3258312_3258343[(2)] = null);

(statearr_3258312_3258343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (17))){
var inst_3258260 = (state_3258294[(7)]);
var inst_3258264 = cljs.core.chunk_first.call(null,inst_3258260);
var inst_3258265 = cljs.core.chunk_rest.call(null,inst_3258260);
var inst_3258266 = cljs.core.count.call(null,inst_3258264);
var inst_3258246 = inst_3258265;
var inst_3258247 = inst_3258264;
var inst_3258248 = inst_3258266;
var inst_3258249 = (0);
var state_3258294__$1 = (function (){var statearr_3258313 = state_3258294;
(statearr_3258313[(8)] = inst_3258246);

(statearr_3258313[(10)] = inst_3258247);

(statearr_3258313[(11)] = inst_3258248);

(statearr_3258313[(12)] = inst_3258249);

return statearr_3258313;
})();
var statearr_3258314_3258344 = state_3258294__$1;
(statearr_3258314_3258344[(2)] = null);

(statearr_3258314_3258344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (3))){
var inst_3258292 = (state_3258294[(2)]);
var state_3258294__$1 = state_3258294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3258294__$1,inst_3258292);
} else {
if((state_val_3258295 === (12))){
var inst_3258280 = (state_3258294[(2)]);
var state_3258294__$1 = state_3258294;
var statearr_3258315_3258345 = state_3258294__$1;
(statearr_3258315_3258345[(2)] = inst_3258280);

(statearr_3258315_3258345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (2))){
var state_3258294__$1 = state_3258294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3258294__$1,(4),in$);
} else {
if((state_val_3258295 === (23))){
var inst_3258288 = (state_3258294[(2)]);
var state_3258294__$1 = state_3258294;
var statearr_3258316_3258346 = state_3258294__$1;
(statearr_3258316_3258346[(2)] = inst_3258288);

(statearr_3258316_3258346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (19))){
var inst_3258275 = (state_3258294[(2)]);
var state_3258294__$1 = state_3258294;
var statearr_3258317_3258347 = state_3258294__$1;
(statearr_3258317_3258347[(2)] = inst_3258275);

(statearr_3258317_3258347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (11))){
var inst_3258246 = (state_3258294[(8)]);
var inst_3258260 = (state_3258294[(7)]);
var inst_3258260__$1 = cljs.core.seq.call(null,inst_3258246);
var state_3258294__$1 = (function (){var statearr_3258318 = state_3258294;
(statearr_3258318[(7)] = inst_3258260__$1);

return statearr_3258318;
})();
if(inst_3258260__$1){
var statearr_3258319_3258348 = state_3258294__$1;
(statearr_3258319_3258348[(1)] = (14));

} else {
var statearr_3258320_3258349 = state_3258294__$1;
(statearr_3258320_3258349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (9))){
var inst_3258282 = (state_3258294[(2)]);
var inst_3258283 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_3258294__$1 = (function (){var statearr_3258321 = state_3258294;
(statearr_3258321[(15)] = inst_3258282);

return statearr_3258321;
})();
if(cljs.core.truth_(inst_3258283)){
var statearr_3258322_3258350 = state_3258294__$1;
(statearr_3258322_3258350[(1)] = (21));

} else {
var statearr_3258323_3258351 = state_3258294__$1;
(statearr_3258323_3258351[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (5))){
var inst_3258238 = cljs.core.async.close_BANG_.call(null,out);
var state_3258294__$1 = state_3258294;
var statearr_3258324_3258352 = state_3258294__$1;
(statearr_3258324_3258352[(2)] = inst_3258238);

(statearr_3258324_3258352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (14))){
var inst_3258260 = (state_3258294[(7)]);
var inst_3258262 = cljs.core.chunked_seq_QMARK_.call(null,inst_3258260);
var state_3258294__$1 = state_3258294;
if(inst_3258262){
var statearr_3258325_3258353 = state_3258294__$1;
(statearr_3258325_3258353[(1)] = (17));

} else {
var statearr_3258326_3258354 = state_3258294__$1;
(statearr_3258326_3258354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (16))){
var inst_3258278 = (state_3258294[(2)]);
var state_3258294__$1 = state_3258294;
var statearr_3258327_3258355 = state_3258294__$1;
(statearr_3258327_3258355[(2)] = inst_3258278);

(statearr_3258327_3258355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258295 === (10))){
var inst_3258247 = (state_3258294[(10)]);
var inst_3258249 = (state_3258294[(12)]);
var inst_3258254 = cljs.core._nth.call(null,inst_3258247,inst_3258249);
var state_3258294__$1 = state_3258294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258294__$1,(13),out,inst_3258254);
} else {
if((state_val_3258295 === (18))){
var inst_3258260 = (state_3258294[(7)]);
var inst_3258269 = cljs.core.first.call(null,inst_3258260);
var state_3258294__$1 = state_3258294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258294__$1,(20),out,inst_3258269);
} else {
if((state_val_3258295 === (8))){
var inst_3258248 = (state_3258294[(11)]);
var inst_3258249 = (state_3258294[(12)]);
var inst_3258251 = (inst_3258249 < inst_3258248);
var inst_3258252 = inst_3258251;
var state_3258294__$1 = state_3258294;
if(cljs.core.truth_(inst_3258252)){
var statearr_3258328_3258356 = state_3258294__$1;
(statearr_3258328_3258356[(1)] = (10));

} else {
var statearr_3258329_3258357 = state_3258294__$1;
(statearr_3258329_3258357[(1)] = (11));

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
});})(c__53126__auto__))
;
return ((function (switch__53103__auto__,c__53126__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__53104__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__53104__auto____0 = (function (){
var statearr_3258330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3258330[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__53104__auto__);

(statearr_3258330[(1)] = (1));

return statearr_3258330;
});
var cljs$core$async$mapcat_STAR__$_state_machine__53104__auto____1 = (function (state_3258294){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3258294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3258331){if((e3258331 instanceof Object)){
var ex__53107__auto__ = e3258331;
var statearr_3258332_3258358 = state_3258294;
(statearr_3258332_3258358[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3258294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3258359 = state_3258294;
state_3258294 = G__3258359;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__53104__auto__ = function(state_3258294){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__53104__auto____1.call(this,state_3258294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__53104__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__53104__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__))
})();
var state__53128__auto__ = (function (){var statearr_3258333 = f__53127__auto__.call(null);
(statearr_3258333[(6)] = c__53126__auto__);

return statearr_3258333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__))
);

return c__53126__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__3258361 = arguments.length;
switch (G__3258361) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__3258364 = arguments.length;
switch (G__3258364) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__3258367 = arguments.length;
switch (G__3258367) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53126__auto___3258414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3258414,out){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3258414,out){
return (function (state_3258391){
var state_val_3258392 = (state_3258391[(1)]);
if((state_val_3258392 === (7))){
var inst_3258386 = (state_3258391[(2)]);
var state_3258391__$1 = state_3258391;
var statearr_3258393_3258415 = state_3258391__$1;
(statearr_3258393_3258415[(2)] = inst_3258386);

(statearr_3258393_3258415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258392 === (1))){
var inst_3258368 = null;
var state_3258391__$1 = (function (){var statearr_3258394 = state_3258391;
(statearr_3258394[(7)] = inst_3258368);

return statearr_3258394;
})();
var statearr_3258395_3258416 = state_3258391__$1;
(statearr_3258395_3258416[(2)] = null);

(statearr_3258395_3258416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258392 === (4))){
var inst_3258371 = (state_3258391[(8)]);
var inst_3258371__$1 = (state_3258391[(2)]);
var inst_3258372 = (inst_3258371__$1 == null);
var inst_3258373 = cljs.core.not.call(null,inst_3258372);
var state_3258391__$1 = (function (){var statearr_3258396 = state_3258391;
(statearr_3258396[(8)] = inst_3258371__$1);

return statearr_3258396;
})();
if(inst_3258373){
var statearr_3258397_3258417 = state_3258391__$1;
(statearr_3258397_3258417[(1)] = (5));

} else {
var statearr_3258398_3258418 = state_3258391__$1;
(statearr_3258398_3258418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258392 === (6))){
var state_3258391__$1 = state_3258391;
var statearr_3258399_3258419 = state_3258391__$1;
(statearr_3258399_3258419[(2)] = null);

(statearr_3258399_3258419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258392 === (3))){
var inst_3258388 = (state_3258391[(2)]);
var inst_3258389 = cljs.core.async.close_BANG_.call(null,out);
var state_3258391__$1 = (function (){var statearr_3258400 = state_3258391;
(statearr_3258400[(9)] = inst_3258388);

return statearr_3258400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3258391__$1,inst_3258389);
} else {
if((state_val_3258392 === (2))){
var state_3258391__$1 = state_3258391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3258391__$1,(4),ch);
} else {
if((state_val_3258392 === (11))){
var inst_3258371 = (state_3258391[(8)]);
var inst_3258380 = (state_3258391[(2)]);
var inst_3258368 = inst_3258371;
var state_3258391__$1 = (function (){var statearr_3258401 = state_3258391;
(statearr_3258401[(10)] = inst_3258380);

(statearr_3258401[(7)] = inst_3258368);

return statearr_3258401;
})();
var statearr_3258402_3258420 = state_3258391__$1;
(statearr_3258402_3258420[(2)] = null);

(statearr_3258402_3258420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258392 === (9))){
var inst_3258371 = (state_3258391[(8)]);
var state_3258391__$1 = state_3258391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258391__$1,(11),out,inst_3258371);
} else {
if((state_val_3258392 === (5))){
var inst_3258371 = (state_3258391[(8)]);
var inst_3258368 = (state_3258391[(7)]);
var inst_3258375 = cljs.core._EQ_.call(null,inst_3258371,inst_3258368);
var state_3258391__$1 = state_3258391;
if(inst_3258375){
var statearr_3258404_3258421 = state_3258391__$1;
(statearr_3258404_3258421[(1)] = (8));

} else {
var statearr_3258405_3258422 = state_3258391__$1;
(statearr_3258405_3258422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258392 === (10))){
var inst_3258383 = (state_3258391[(2)]);
var state_3258391__$1 = state_3258391;
var statearr_3258406_3258423 = state_3258391__$1;
(statearr_3258406_3258423[(2)] = inst_3258383);

(statearr_3258406_3258423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258392 === (8))){
var inst_3258368 = (state_3258391[(7)]);
var tmp3258403 = inst_3258368;
var inst_3258368__$1 = tmp3258403;
var state_3258391__$1 = (function (){var statearr_3258407 = state_3258391;
(statearr_3258407[(7)] = inst_3258368__$1);

return statearr_3258407;
})();
var statearr_3258408_3258424 = state_3258391__$1;
(statearr_3258408_3258424[(2)] = null);

(statearr_3258408_3258424[(1)] = (2));


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
});})(c__53126__auto___3258414,out))
;
return ((function (switch__53103__auto__,c__53126__auto___3258414,out){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3258409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3258409[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3258409[(1)] = (1));

return statearr_3258409;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3258391){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3258391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3258410){if((e3258410 instanceof Object)){
var ex__53107__auto__ = e3258410;
var statearr_3258411_3258425 = state_3258391;
(statearr_3258411_3258425[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3258391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3258426 = state_3258391;
state_3258391 = G__3258426;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3258391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3258391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3258414,out))
})();
var state__53128__auto__ = (function (){var statearr_3258412 = f__53127__auto__.call(null);
(statearr_3258412[(6)] = c__53126__auto___3258414);

return statearr_3258412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3258414,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__3258428 = arguments.length;
switch (G__3258428) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53126__auto___3258494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3258494,out){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3258494,out){
return (function (state_3258466){
var state_val_3258467 = (state_3258466[(1)]);
if((state_val_3258467 === (7))){
var inst_3258462 = (state_3258466[(2)]);
var state_3258466__$1 = state_3258466;
var statearr_3258468_3258495 = state_3258466__$1;
(statearr_3258468_3258495[(2)] = inst_3258462);

(statearr_3258468_3258495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (1))){
var inst_3258429 = (new Array(n));
var inst_3258430 = inst_3258429;
var inst_3258431 = (0);
var state_3258466__$1 = (function (){var statearr_3258469 = state_3258466;
(statearr_3258469[(7)] = inst_3258431);

(statearr_3258469[(8)] = inst_3258430);

return statearr_3258469;
})();
var statearr_3258470_3258496 = state_3258466__$1;
(statearr_3258470_3258496[(2)] = null);

(statearr_3258470_3258496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (4))){
var inst_3258434 = (state_3258466[(9)]);
var inst_3258434__$1 = (state_3258466[(2)]);
var inst_3258435 = (inst_3258434__$1 == null);
var inst_3258436 = cljs.core.not.call(null,inst_3258435);
var state_3258466__$1 = (function (){var statearr_3258471 = state_3258466;
(statearr_3258471[(9)] = inst_3258434__$1);

return statearr_3258471;
})();
if(inst_3258436){
var statearr_3258472_3258497 = state_3258466__$1;
(statearr_3258472_3258497[(1)] = (5));

} else {
var statearr_3258473_3258498 = state_3258466__$1;
(statearr_3258473_3258498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (15))){
var inst_3258456 = (state_3258466[(2)]);
var state_3258466__$1 = state_3258466;
var statearr_3258474_3258499 = state_3258466__$1;
(statearr_3258474_3258499[(2)] = inst_3258456);

(statearr_3258474_3258499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (13))){
var state_3258466__$1 = state_3258466;
var statearr_3258475_3258500 = state_3258466__$1;
(statearr_3258475_3258500[(2)] = null);

(statearr_3258475_3258500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (6))){
var inst_3258431 = (state_3258466[(7)]);
var inst_3258452 = (inst_3258431 > (0));
var state_3258466__$1 = state_3258466;
if(cljs.core.truth_(inst_3258452)){
var statearr_3258476_3258501 = state_3258466__$1;
(statearr_3258476_3258501[(1)] = (12));

} else {
var statearr_3258477_3258502 = state_3258466__$1;
(statearr_3258477_3258502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (3))){
var inst_3258464 = (state_3258466[(2)]);
var state_3258466__$1 = state_3258466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3258466__$1,inst_3258464);
} else {
if((state_val_3258467 === (12))){
var inst_3258430 = (state_3258466[(8)]);
var inst_3258454 = cljs.core.vec.call(null,inst_3258430);
var state_3258466__$1 = state_3258466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258466__$1,(15),out,inst_3258454);
} else {
if((state_val_3258467 === (2))){
var state_3258466__$1 = state_3258466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3258466__$1,(4),ch);
} else {
if((state_val_3258467 === (11))){
var inst_3258446 = (state_3258466[(2)]);
var inst_3258447 = (new Array(n));
var inst_3258430 = inst_3258447;
var inst_3258431 = (0);
var state_3258466__$1 = (function (){var statearr_3258478 = state_3258466;
(statearr_3258478[(7)] = inst_3258431);

(statearr_3258478[(10)] = inst_3258446);

(statearr_3258478[(8)] = inst_3258430);

return statearr_3258478;
})();
var statearr_3258479_3258503 = state_3258466__$1;
(statearr_3258479_3258503[(2)] = null);

(statearr_3258479_3258503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (9))){
var inst_3258430 = (state_3258466[(8)]);
var inst_3258444 = cljs.core.vec.call(null,inst_3258430);
var state_3258466__$1 = state_3258466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258466__$1,(11),out,inst_3258444);
} else {
if((state_val_3258467 === (5))){
var inst_3258431 = (state_3258466[(7)]);
var inst_3258434 = (state_3258466[(9)]);
var inst_3258439 = (state_3258466[(11)]);
var inst_3258430 = (state_3258466[(8)]);
var inst_3258438 = (inst_3258430[inst_3258431] = inst_3258434);
var inst_3258439__$1 = (inst_3258431 + (1));
var inst_3258440 = (inst_3258439__$1 < n);
var state_3258466__$1 = (function (){var statearr_3258480 = state_3258466;
(statearr_3258480[(11)] = inst_3258439__$1);

(statearr_3258480[(12)] = inst_3258438);

return statearr_3258480;
})();
if(cljs.core.truth_(inst_3258440)){
var statearr_3258481_3258504 = state_3258466__$1;
(statearr_3258481_3258504[(1)] = (8));

} else {
var statearr_3258482_3258505 = state_3258466__$1;
(statearr_3258482_3258505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (14))){
var inst_3258459 = (state_3258466[(2)]);
var inst_3258460 = cljs.core.async.close_BANG_.call(null,out);
var state_3258466__$1 = (function (){var statearr_3258484 = state_3258466;
(statearr_3258484[(13)] = inst_3258459);

return statearr_3258484;
})();
var statearr_3258485_3258506 = state_3258466__$1;
(statearr_3258485_3258506[(2)] = inst_3258460);

(statearr_3258485_3258506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (10))){
var inst_3258450 = (state_3258466[(2)]);
var state_3258466__$1 = state_3258466;
var statearr_3258486_3258507 = state_3258466__$1;
(statearr_3258486_3258507[(2)] = inst_3258450);

(statearr_3258486_3258507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258467 === (8))){
var inst_3258439 = (state_3258466[(11)]);
var inst_3258430 = (state_3258466[(8)]);
var tmp3258483 = inst_3258430;
var inst_3258430__$1 = tmp3258483;
var inst_3258431 = inst_3258439;
var state_3258466__$1 = (function (){var statearr_3258487 = state_3258466;
(statearr_3258487[(7)] = inst_3258431);

(statearr_3258487[(8)] = inst_3258430__$1);

return statearr_3258487;
})();
var statearr_3258488_3258508 = state_3258466__$1;
(statearr_3258488_3258508[(2)] = null);

(statearr_3258488_3258508[(1)] = (2));


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
});})(c__53126__auto___3258494,out))
;
return ((function (switch__53103__auto__,c__53126__auto___3258494,out){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3258489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3258489[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3258489[(1)] = (1));

return statearr_3258489;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3258466){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3258466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3258490){if((e3258490 instanceof Object)){
var ex__53107__auto__ = e3258490;
var statearr_3258491_3258509 = state_3258466;
(statearr_3258491_3258509[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3258466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3258510 = state_3258466;
state_3258466 = G__3258510;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3258466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3258466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3258494,out))
})();
var state__53128__auto__ = (function (){var statearr_3258492 = f__53127__auto__.call(null);
(statearr_3258492[(6)] = c__53126__auto___3258494);

return statearr_3258492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3258494,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__3258512 = arguments.length;
switch (G__3258512) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53126__auto___3258582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3258582,out){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3258582,out){
return (function (state_3258554){
var state_val_3258555 = (state_3258554[(1)]);
if((state_val_3258555 === (7))){
var inst_3258550 = (state_3258554[(2)]);
var state_3258554__$1 = state_3258554;
var statearr_3258556_3258583 = state_3258554__$1;
(statearr_3258556_3258583[(2)] = inst_3258550);

(statearr_3258556_3258583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (1))){
var inst_3258513 = [];
var inst_3258514 = inst_3258513;
var inst_3258515 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_3258554__$1 = (function (){var statearr_3258557 = state_3258554;
(statearr_3258557[(7)] = inst_3258515);

(statearr_3258557[(8)] = inst_3258514);

return statearr_3258557;
})();
var statearr_3258558_3258584 = state_3258554__$1;
(statearr_3258558_3258584[(2)] = null);

(statearr_3258558_3258584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (4))){
var inst_3258518 = (state_3258554[(9)]);
var inst_3258518__$1 = (state_3258554[(2)]);
var inst_3258519 = (inst_3258518__$1 == null);
var inst_3258520 = cljs.core.not.call(null,inst_3258519);
var state_3258554__$1 = (function (){var statearr_3258559 = state_3258554;
(statearr_3258559[(9)] = inst_3258518__$1);

return statearr_3258559;
})();
if(inst_3258520){
var statearr_3258560_3258585 = state_3258554__$1;
(statearr_3258560_3258585[(1)] = (5));

} else {
var statearr_3258561_3258586 = state_3258554__$1;
(statearr_3258561_3258586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (15))){
var inst_3258544 = (state_3258554[(2)]);
var state_3258554__$1 = state_3258554;
var statearr_3258562_3258587 = state_3258554__$1;
(statearr_3258562_3258587[(2)] = inst_3258544);

(statearr_3258562_3258587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (13))){
var state_3258554__$1 = state_3258554;
var statearr_3258563_3258588 = state_3258554__$1;
(statearr_3258563_3258588[(2)] = null);

(statearr_3258563_3258588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (6))){
var inst_3258514 = (state_3258554[(8)]);
var inst_3258539 = inst_3258514.length;
var inst_3258540 = (inst_3258539 > (0));
var state_3258554__$1 = state_3258554;
if(cljs.core.truth_(inst_3258540)){
var statearr_3258564_3258589 = state_3258554__$1;
(statearr_3258564_3258589[(1)] = (12));

} else {
var statearr_3258565_3258590 = state_3258554__$1;
(statearr_3258565_3258590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (3))){
var inst_3258552 = (state_3258554[(2)]);
var state_3258554__$1 = state_3258554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3258554__$1,inst_3258552);
} else {
if((state_val_3258555 === (12))){
var inst_3258514 = (state_3258554[(8)]);
var inst_3258542 = cljs.core.vec.call(null,inst_3258514);
var state_3258554__$1 = state_3258554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258554__$1,(15),out,inst_3258542);
} else {
if((state_val_3258555 === (2))){
var state_3258554__$1 = state_3258554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3258554__$1,(4),ch);
} else {
if((state_val_3258555 === (11))){
var inst_3258522 = (state_3258554[(10)]);
var inst_3258518 = (state_3258554[(9)]);
var inst_3258532 = (state_3258554[(2)]);
var inst_3258533 = [];
var inst_3258534 = inst_3258533.push(inst_3258518);
var inst_3258514 = inst_3258533;
var inst_3258515 = inst_3258522;
var state_3258554__$1 = (function (){var statearr_3258566 = state_3258554;
(statearr_3258566[(11)] = inst_3258534);

(statearr_3258566[(12)] = inst_3258532);

(statearr_3258566[(7)] = inst_3258515);

(statearr_3258566[(8)] = inst_3258514);

return statearr_3258566;
})();
var statearr_3258567_3258591 = state_3258554__$1;
(statearr_3258567_3258591[(2)] = null);

(statearr_3258567_3258591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (9))){
var inst_3258514 = (state_3258554[(8)]);
var inst_3258530 = cljs.core.vec.call(null,inst_3258514);
var state_3258554__$1 = state_3258554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3258554__$1,(11),out,inst_3258530);
} else {
if((state_val_3258555 === (5))){
var inst_3258522 = (state_3258554[(10)]);
var inst_3258515 = (state_3258554[(7)]);
var inst_3258518 = (state_3258554[(9)]);
var inst_3258522__$1 = f.call(null,inst_3258518);
var inst_3258523 = cljs.core._EQ_.call(null,inst_3258522__$1,inst_3258515);
var inst_3258524 = cljs.core.keyword_identical_QMARK_.call(null,inst_3258515,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_3258525 = (inst_3258523) || (inst_3258524);
var state_3258554__$1 = (function (){var statearr_3258568 = state_3258554;
(statearr_3258568[(10)] = inst_3258522__$1);

return statearr_3258568;
})();
if(cljs.core.truth_(inst_3258525)){
var statearr_3258569_3258592 = state_3258554__$1;
(statearr_3258569_3258592[(1)] = (8));

} else {
var statearr_3258570_3258593 = state_3258554__$1;
(statearr_3258570_3258593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (14))){
var inst_3258547 = (state_3258554[(2)]);
var inst_3258548 = cljs.core.async.close_BANG_.call(null,out);
var state_3258554__$1 = (function (){var statearr_3258572 = state_3258554;
(statearr_3258572[(13)] = inst_3258547);

return statearr_3258572;
})();
var statearr_3258573_3258594 = state_3258554__$1;
(statearr_3258573_3258594[(2)] = inst_3258548);

(statearr_3258573_3258594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (10))){
var inst_3258537 = (state_3258554[(2)]);
var state_3258554__$1 = state_3258554;
var statearr_3258574_3258595 = state_3258554__$1;
(statearr_3258574_3258595[(2)] = inst_3258537);

(statearr_3258574_3258595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3258555 === (8))){
var inst_3258522 = (state_3258554[(10)]);
var inst_3258518 = (state_3258554[(9)]);
var inst_3258514 = (state_3258554[(8)]);
var inst_3258527 = inst_3258514.push(inst_3258518);
var tmp3258571 = inst_3258514;
var inst_3258514__$1 = tmp3258571;
var inst_3258515 = inst_3258522;
var state_3258554__$1 = (function (){var statearr_3258575 = state_3258554;
(statearr_3258575[(7)] = inst_3258515);

(statearr_3258575[(14)] = inst_3258527);

(statearr_3258575[(8)] = inst_3258514__$1);

return statearr_3258575;
})();
var statearr_3258576_3258596 = state_3258554__$1;
(statearr_3258576_3258596[(2)] = null);

(statearr_3258576_3258596[(1)] = (2));


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
});})(c__53126__auto___3258582,out))
;
return ((function (switch__53103__auto__,c__53126__auto___3258582,out){
return (function() {
var cljs$core$async$state_machine__53104__auto__ = null;
var cljs$core$async$state_machine__53104__auto____0 = (function (){
var statearr_3258577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3258577[(0)] = cljs$core$async$state_machine__53104__auto__);

(statearr_3258577[(1)] = (1));

return statearr_3258577;
});
var cljs$core$async$state_machine__53104__auto____1 = (function (state_3258554){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3258554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3258578){if((e3258578 instanceof Object)){
var ex__53107__auto__ = e3258578;
var statearr_3258579_3258597 = state_3258554;
(statearr_3258579_3258597[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3258554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3258598 = state_3258554;
state_3258554 = G__3258598;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
cljs$core$async$state_machine__53104__auto__ = function(state_3258554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53104__auto____1.call(this,state_3258554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53104__auto____0;
cljs$core$async$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53104__auto____1;
return cljs$core$async$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3258582,out))
})();
var state__53128__auto__ = (function (){var statearr_3258580 = f__53127__auto__.call(null);
(statearr_3258580[(6)] = c__53126__auto___3258582);

return statearr_3258580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3258582,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509468957505
