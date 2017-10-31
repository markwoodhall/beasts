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
var G__55546 = arguments.length;
switch (G__55546) {
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
if(typeof cljs.core.async.t_cljs$core$async55547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55547 = (function (f,blockable,meta55548){
this.f = f;
this.blockable = blockable;
this.meta55548 = meta55548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55549,meta55548__$1){
var self__ = this;
var _55549__$1 = this;
return (new cljs.core.async.t_cljs$core$async55547(self__.f,self__.blockable,meta55548__$1));
});

cljs.core.async.t_cljs$core$async55547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55549){
var self__ = this;
var _55549__$1 = this;
return self__.meta55548;
});

cljs.core.async.t_cljs$core$async55547.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async55547.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async55547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async55547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta55548","meta55548",973160496,null)], null);
});

cljs.core.async.t_cljs$core$async55547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55547";

cljs.core.async.t_cljs$core$async55547.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async55547");
});

cljs.core.async.__GT_t_cljs$core$async55547 = (function cljs$core$async$__GT_t_cljs$core$async55547(f__$1,blockable__$1,meta55548){
return (new cljs.core.async.t_cljs$core$async55547(f__$1,blockable__$1,meta55548));
});

}

return (new cljs.core.async.t_cljs$core$async55547(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55553 = arguments.length;
switch (G__55553) {
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
var G__55556 = arguments.length;
switch (G__55556) {
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
var G__55559 = arguments.length;
switch (G__55559) {
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
var val_55561 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_55561);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_55561,ret){
return (function (){
return fn1.call(null,val_55561);
});})(val_55561,ret))
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
var G__55563 = arguments.length;
switch (G__55563) {
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
var n__50564__auto___55565 = n;
var x_55566 = (0);
while(true){
if((x_55566 < n__50564__auto___55565)){
(a[x_55566] = (0));

var G__55567 = (x_55566 + (1));
x_55566 = G__55567;
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

var G__55568 = (i + (1));
i = G__55568;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async55569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55569 = (function (flag,meta55570){
this.flag = flag;
this.meta55570 = meta55570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_55571,meta55570__$1){
var self__ = this;
var _55571__$1 = this;
return (new cljs.core.async.t_cljs$core$async55569(self__.flag,meta55570__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async55569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_55571){
var self__ = this;
var _55571__$1 = this;
return self__.meta55570;
});})(flag))
;

cljs.core.async.t_cljs$core$async55569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async55569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async55569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async55569.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta55570","meta55570",1530268875,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async55569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55569";

cljs.core.async.t_cljs$core$async55569.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async55569");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async55569 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async55569(flag__$1,meta55570){
return (new cljs.core.async.t_cljs$core$async55569(flag__$1,meta55570));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async55569(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async55572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55572 = (function (flag,cb,meta55573){
this.flag = flag;
this.cb = cb;
this.meta55573 = meta55573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55574,meta55573__$1){
var self__ = this;
var _55574__$1 = this;
return (new cljs.core.async.t_cljs$core$async55572(self__.flag,self__.cb,meta55573__$1));
});

cljs.core.async.t_cljs$core$async55572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55574){
var self__ = this;
var _55574__$1 = this;
return self__.meta55573;
});

cljs.core.async.t_cljs$core$async55572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async55572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async55572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async55572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta55573","meta55573",-767527097,null)], null);
});

cljs.core.async.t_cljs$core$async55572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55572";

cljs.core.async.t_cljs$core$async55572.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async55572");
});

cljs.core.async.__GT_t_cljs$core$async55572 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async55572(flag__$1,cb__$1,meta55573){
return (new cljs.core.async.t_cljs$core$async55572(flag__$1,cb__$1,meta55573));
});

}

return (new cljs.core.async.t_cljs$core$async55572(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__55575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55575_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55576_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55576_SHARP_,port], null));
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
var G__55577 = (i + (1));
i = G__55577;
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
var len__50798__auto___55583 = arguments.length;
var i__50799__auto___55584 = (0);
while(true){
if((i__50799__auto___55584 < len__50798__auto___55583)){
args__50805__auto__.push((arguments[i__50799__auto___55584]));

var G__55585 = (i__50799__auto___55584 + (1));
i__50799__auto___55584 = G__55585;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__55580){
var map__55581 = p__55580;
var map__55581__$1 = ((((!((map__55581 == null)))?((((map__55581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55581):map__55581);
var opts = map__55581__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq55578){
var G__55579 = cljs.core.first.call(null,seq55578);
var seq55578__$1 = cljs.core.next.call(null,seq55578);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55579,seq55578__$1);
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
var G__55587 = arguments.length;
switch (G__55587) {
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
var c__55486__auto___55633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___55633){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___55633){
return (function (state_55611){
var state_val_55612 = (state_55611[(1)]);
if((state_val_55612 === (7))){
var inst_55607 = (state_55611[(2)]);
var state_55611__$1 = state_55611;
var statearr_55613_55634 = state_55611__$1;
(statearr_55613_55634[(2)] = inst_55607);

(statearr_55613_55634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (1))){
var state_55611__$1 = state_55611;
var statearr_55614_55635 = state_55611__$1;
(statearr_55614_55635[(2)] = null);

(statearr_55614_55635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (4))){
var inst_55590 = (state_55611[(7)]);
var inst_55590__$1 = (state_55611[(2)]);
var inst_55591 = (inst_55590__$1 == null);
var state_55611__$1 = (function (){var statearr_55615 = state_55611;
(statearr_55615[(7)] = inst_55590__$1);

return statearr_55615;
})();
if(cljs.core.truth_(inst_55591)){
var statearr_55616_55636 = state_55611__$1;
(statearr_55616_55636[(1)] = (5));

} else {
var statearr_55617_55637 = state_55611__$1;
(statearr_55617_55637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (13))){
var state_55611__$1 = state_55611;
var statearr_55618_55638 = state_55611__$1;
(statearr_55618_55638[(2)] = null);

(statearr_55618_55638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (6))){
var inst_55590 = (state_55611[(7)]);
var state_55611__$1 = state_55611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55611__$1,(11),to,inst_55590);
} else {
if((state_val_55612 === (3))){
var inst_55609 = (state_55611[(2)]);
var state_55611__$1 = state_55611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55611__$1,inst_55609);
} else {
if((state_val_55612 === (12))){
var state_55611__$1 = state_55611;
var statearr_55619_55639 = state_55611__$1;
(statearr_55619_55639[(2)] = null);

(statearr_55619_55639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (2))){
var state_55611__$1 = state_55611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55611__$1,(4),from);
} else {
if((state_val_55612 === (11))){
var inst_55600 = (state_55611[(2)]);
var state_55611__$1 = state_55611;
if(cljs.core.truth_(inst_55600)){
var statearr_55620_55640 = state_55611__$1;
(statearr_55620_55640[(1)] = (12));

} else {
var statearr_55621_55641 = state_55611__$1;
(statearr_55621_55641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (9))){
var state_55611__$1 = state_55611;
var statearr_55622_55642 = state_55611__$1;
(statearr_55622_55642[(2)] = null);

(statearr_55622_55642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (5))){
var state_55611__$1 = state_55611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55623_55643 = state_55611__$1;
(statearr_55623_55643[(1)] = (8));

} else {
var statearr_55624_55644 = state_55611__$1;
(statearr_55624_55644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (14))){
var inst_55605 = (state_55611[(2)]);
var state_55611__$1 = state_55611;
var statearr_55625_55645 = state_55611__$1;
(statearr_55625_55645[(2)] = inst_55605);

(statearr_55625_55645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (10))){
var inst_55597 = (state_55611[(2)]);
var state_55611__$1 = state_55611;
var statearr_55626_55646 = state_55611__$1;
(statearr_55626_55646[(2)] = inst_55597);

(statearr_55626_55646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55612 === (8))){
var inst_55594 = cljs.core.async.close_BANG_.call(null,to);
var state_55611__$1 = state_55611;
var statearr_55627_55647 = state_55611__$1;
(statearr_55627_55647[(2)] = inst_55594);

(statearr_55627_55647[(1)] = (10));


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
});})(c__55486__auto___55633))
;
return ((function (switch__55396__auto__,c__55486__auto___55633){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_55628 = [null,null,null,null,null,null,null,null];
(statearr_55628[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_55628[(1)] = (1));

return statearr_55628;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_55611){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_55611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e55629){if((e55629 instanceof Object)){
var ex__55400__auto__ = e55629;
var statearr_55630_55648 = state_55611;
(statearr_55630_55648[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55649 = state_55611;
state_55611 = G__55649;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_55611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_55611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___55633))
})();
var state__55488__auto__ = (function (){var statearr_55631 = f__55487__auto__.call(null);
(statearr_55631[(6)] = c__55486__auto___55633);

return statearr_55631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___55633))
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
return (function (p__55650){
var vec__55651 = p__55650;
var v = cljs.core.nth.call(null,vec__55651,(0),null);
var p = cljs.core.nth.call(null,vec__55651,(1),null);
var job = vec__55651;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__55486__auto___55822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___55822,res,vec__55651,v,p,job,jobs,results){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___55822,res,vec__55651,v,p,job,jobs,results){
return (function (state_55658){
var state_val_55659 = (state_55658[(1)]);
if((state_val_55659 === (1))){
var state_55658__$1 = state_55658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55658__$1,(2),res,v);
} else {
if((state_val_55659 === (2))){
var inst_55655 = (state_55658[(2)]);
var inst_55656 = cljs.core.async.close_BANG_.call(null,res);
var state_55658__$1 = (function (){var statearr_55660 = state_55658;
(statearr_55660[(7)] = inst_55655);

return statearr_55660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55658__$1,inst_55656);
} else {
return null;
}
}
});})(c__55486__auto___55822,res,vec__55651,v,p,job,jobs,results))
;
return ((function (switch__55396__auto__,c__55486__auto___55822,res,vec__55651,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0 = (function (){
var statearr_55661 = [null,null,null,null,null,null,null,null];
(statearr_55661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__);

(statearr_55661[(1)] = (1));

return statearr_55661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1 = (function (state_55658){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_55658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e55662){if((e55662 instanceof Object)){
var ex__55400__auto__ = e55662;
var statearr_55663_55823 = state_55658;
(statearr_55663_55823[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55824 = state_55658;
state_55658 = G__55824;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = function(state_55658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1.call(this,state_55658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___55822,res,vec__55651,v,p,job,jobs,results))
})();
var state__55488__auto__ = (function (){var statearr_55664 = f__55487__auto__.call(null);
(statearr_55664[(6)] = c__55486__auto___55822);

return statearr_55664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___55822,res,vec__55651,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__55665){
var vec__55666 = p__55665;
var v = cljs.core.nth.call(null,vec__55666,(0),null);
var p = cljs.core.nth.call(null,vec__55666,(1),null);
var job = vec__55666;
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
var n__50564__auto___55825 = n;
var __55826 = (0);
while(true){
if((__55826 < n__50564__auto___55825)){
var G__55669_55827 = type;
var G__55669_55828__$1 = (((G__55669_55827 instanceof cljs.core.Keyword))?G__55669_55827.fqn:null);
switch (G__55669_55828__$1) {
case "compute":
var c__55486__auto___55830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__55826,c__55486__auto___55830,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (__55826,c__55486__auto___55830,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async){
return (function (state_55682){
var state_val_55683 = (state_55682[(1)]);
if((state_val_55683 === (1))){
var state_55682__$1 = state_55682;
var statearr_55684_55831 = state_55682__$1;
(statearr_55684_55831[(2)] = null);

(statearr_55684_55831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55683 === (2))){
var state_55682__$1 = state_55682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55682__$1,(4),jobs);
} else {
if((state_val_55683 === (3))){
var inst_55680 = (state_55682[(2)]);
var state_55682__$1 = state_55682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55682__$1,inst_55680);
} else {
if((state_val_55683 === (4))){
var inst_55672 = (state_55682[(2)]);
var inst_55673 = process.call(null,inst_55672);
var state_55682__$1 = state_55682;
if(cljs.core.truth_(inst_55673)){
var statearr_55685_55832 = state_55682__$1;
(statearr_55685_55832[(1)] = (5));

} else {
var statearr_55686_55833 = state_55682__$1;
(statearr_55686_55833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55683 === (5))){
var state_55682__$1 = state_55682;
var statearr_55687_55834 = state_55682__$1;
(statearr_55687_55834[(2)] = null);

(statearr_55687_55834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55683 === (6))){
var state_55682__$1 = state_55682;
var statearr_55688_55835 = state_55682__$1;
(statearr_55688_55835[(2)] = null);

(statearr_55688_55835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55683 === (7))){
var inst_55678 = (state_55682[(2)]);
var state_55682__$1 = state_55682;
var statearr_55689_55836 = state_55682__$1;
(statearr_55689_55836[(2)] = inst_55678);

(statearr_55689_55836[(1)] = (3));


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
});})(__55826,c__55486__auto___55830,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async))
;
return ((function (__55826,switch__55396__auto__,c__55486__auto___55830,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0 = (function (){
var statearr_55690 = [null,null,null,null,null,null,null];
(statearr_55690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__);

(statearr_55690[(1)] = (1));

return statearr_55690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1 = (function (state_55682){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_55682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e55691){if((e55691 instanceof Object)){
var ex__55400__auto__ = e55691;
var statearr_55692_55837 = state_55682;
(statearr_55692_55837[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55838 = state_55682;
state_55682 = G__55838;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = function(state_55682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1.call(this,state_55682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__;
})()
;})(__55826,switch__55396__auto__,c__55486__auto___55830,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async))
})();
var state__55488__auto__ = (function (){var statearr_55693 = f__55487__auto__.call(null);
(statearr_55693[(6)] = c__55486__auto___55830);

return statearr_55693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(__55826,c__55486__auto___55830,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async))
);


break;
case "async":
var c__55486__auto___55839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__55826,c__55486__auto___55839,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (__55826,c__55486__auto___55839,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async){
return (function (state_55706){
var state_val_55707 = (state_55706[(1)]);
if((state_val_55707 === (1))){
var state_55706__$1 = state_55706;
var statearr_55708_55840 = state_55706__$1;
(statearr_55708_55840[(2)] = null);

(statearr_55708_55840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (2))){
var state_55706__$1 = state_55706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55706__$1,(4),jobs);
} else {
if((state_val_55707 === (3))){
var inst_55704 = (state_55706[(2)]);
var state_55706__$1 = state_55706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55706__$1,inst_55704);
} else {
if((state_val_55707 === (4))){
var inst_55696 = (state_55706[(2)]);
var inst_55697 = async.call(null,inst_55696);
var state_55706__$1 = state_55706;
if(cljs.core.truth_(inst_55697)){
var statearr_55709_55841 = state_55706__$1;
(statearr_55709_55841[(1)] = (5));

} else {
var statearr_55710_55842 = state_55706__$1;
(statearr_55710_55842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (5))){
var state_55706__$1 = state_55706;
var statearr_55711_55843 = state_55706__$1;
(statearr_55711_55843[(2)] = null);

(statearr_55711_55843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (6))){
var state_55706__$1 = state_55706;
var statearr_55712_55844 = state_55706__$1;
(statearr_55712_55844[(2)] = null);

(statearr_55712_55844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (7))){
var inst_55702 = (state_55706[(2)]);
var state_55706__$1 = state_55706;
var statearr_55713_55845 = state_55706__$1;
(statearr_55713_55845[(2)] = inst_55702);

(statearr_55713_55845[(1)] = (3));


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
});})(__55826,c__55486__auto___55839,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async))
;
return ((function (__55826,switch__55396__auto__,c__55486__auto___55839,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0 = (function (){
var statearr_55714 = [null,null,null,null,null,null,null];
(statearr_55714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__);

(statearr_55714[(1)] = (1));

return statearr_55714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1 = (function (state_55706){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_55706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e55715){if((e55715 instanceof Object)){
var ex__55400__auto__ = e55715;
var statearr_55716_55846 = state_55706;
(statearr_55716_55846[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55847 = state_55706;
state_55706 = G__55847;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = function(state_55706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1.call(this,state_55706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__;
})()
;})(__55826,switch__55396__auto__,c__55486__auto___55839,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async))
})();
var state__55488__auto__ = (function (){var statearr_55717 = f__55487__auto__.call(null);
(statearr_55717[(6)] = c__55486__auto___55839);

return statearr_55717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(__55826,c__55486__auto___55839,G__55669_55827,G__55669_55828__$1,n__50564__auto___55825,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55669_55828__$1)].join('')));

}

var G__55848 = (__55826 + (1));
__55826 = G__55848;
continue;
} else {
}
break;
}

var c__55486__auto___55849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___55849,jobs,results,process,async){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___55849,jobs,results,process,async){
return (function (state_55739){
var state_val_55740 = (state_55739[(1)]);
if((state_val_55740 === (1))){
var state_55739__$1 = state_55739;
var statearr_55741_55850 = state_55739__$1;
(statearr_55741_55850[(2)] = null);

(statearr_55741_55850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55740 === (2))){
var state_55739__$1 = state_55739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55739__$1,(4),from);
} else {
if((state_val_55740 === (3))){
var inst_55737 = (state_55739[(2)]);
var state_55739__$1 = state_55739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55739__$1,inst_55737);
} else {
if((state_val_55740 === (4))){
var inst_55720 = (state_55739[(7)]);
var inst_55720__$1 = (state_55739[(2)]);
var inst_55721 = (inst_55720__$1 == null);
var state_55739__$1 = (function (){var statearr_55742 = state_55739;
(statearr_55742[(7)] = inst_55720__$1);

return statearr_55742;
})();
if(cljs.core.truth_(inst_55721)){
var statearr_55743_55851 = state_55739__$1;
(statearr_55743_55851[(1)] = (5));

} else {
var statearr_55744_55852 = state_55739__$1;
(statearr_55744_55852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55740 === (5))){
var inst_55723 = cljs.core.async.close_BANG_.call(null,jobs);
var state_55739__$1 = state_55739;
var statearr_55745_55853 = state_55739__$1;
(statearr_55745_55853[(2)] = inst_55723);

(statearr_55745_55853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55740 === (6))){
var inst_55725 = (state_55739[(8)]);
var inst_55720 = (state_55739[(7)]);
var inst_55725__$1 = cljs.core.async.chan.call(null,(1));
var inst_55726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55727 = [inst_55720,inst_55725__$1];
var inst_55728 = (new cljs.core.PersistentVector(null,2,(5),inst_55726,inst_55727,null));
var state_55739__$1 = (function (){var statearr_55746 = state_55739;
(statearr_55746[(8)] = inst_55725__$1);

return statearr_55746;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55739__$1,(8),jobs,inst_55728);
} else {
if((state_val_55740 === (7))){
var inst_55735 = (state_55739[(2)]);
var state_55739__$1 = state_55739;
var statearr_55747_55854 = state_55739__$1;
(statearr_55747_55854[(2)] = inst_55735);

(statearr_55747_55854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55740 === (8))){
var inst_55725 = (state_55739[(8)]);
var inst_55730 = (state_55739[(2)]);
var state_55739__$1 = (function (){var statearr_55748 = state_55739;
(statearr_55748[(9)] = inst_55730);

return statearr_55748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55739__$1,(9),results,inst_55725);
} else {
if((state_val_55740 === (9))){
var inst_55732 = (state_55739[(2)]);
var state_55739__$1 = (function (){var statearr_55749 = state_55739;
(statearr_55749[(10)] = inst_55732);

return statearr_55749;
})();
var statearr_55750_55855 = state_55739__$1;
(statearr_55750_55855[(2)] = null);

(statearr_55750_55855[(1)] = (2));


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
});})(c__55486__auto___55849,jobs,results,process,async))
;
return ((function (switch__55396__auto__,c__55486__auto___55849,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0 = (function (){
var statearr_55751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__);

(statearr_55751[(1)] = (1));

return statearr_55751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1 = (function (state_55739){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_55739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e55752){if((e55752 instanceof Object)){
var ex__55400__auto__ = e55752;
var statearr_55753_55856 = state_55739;
(statearr_55753_55856[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55857 = state_55739;
state_55739 = G__55857;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = function(state_55739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1.call(this,state_55739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___55849,jobs,results,process,async))
})();
var state__55488__auto__ = (function (){var statearr_55754 = f__55487__auto__.call(null);
(statearr_55754[(6)] = c__55486__auto___55849);

return statearr_55754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___55849,jobs,results,process,async))
);


var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__,jobs,results,process,async){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__,jobs,results,process,async){
return (function (state_55792){
var state_val_55793 = (state_55792[(1)]);
if((state_val_55793 === (7))){
var inst_55788 = (state_55792[(2)]);
var state_55792__$1 = state_55792;
var statearr_55794_55858 = state_55792__$1;
(statearr_55794_55858[(2)] = inst_55788);

(statearr_55794_55858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (20))){
var state_55792__$1 = state_55792;
var statearr_55795_55859 = state_55792__$1;
(statearr_55795_55859[(2)] = null);

(statearr_55795_55859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (1))){
var state_55792__$1 = state_55792;
var statearr_55796_55860 = state_55792__$1;
(statearr_55796_55860[(2)] = null);

(statearr_55796_55860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (4))){
var inst_55757 = (state_55792[(7)]);
var inst_55757__$1 = (state_55792[(2)]);
var inst_55758 = (inst_55757__$1 == null);
var state_55792__$1 = (function (){var statearr_55797 = state_55792;
(statearr_55797[(7)] = inst_55757__$1);

return statearr_55797;
})();
if(cljs.core.truth_(inst_55758)){
var statearr_55798_55861 = state_55792__$1;
(statearr_55798_55861[(1)] = (5));

} else {
var statearr_55799_55862 = state_55792__$1;
(statearr_55799_55862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (15))){
var inst_55770 = (state_55792[(8)]);
var state_55792__$1 = state_55792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55792__$1,(18),to,inst_55770);
} else {
if((state_val_55793 === (21))){
var inst_55783 = (state_55792[(2)]);
var state_55792__$1 = state_55792;
var statearr_55800_55863 = state_55792__$1;
(statearr_55800_55863[(2)] = inst_55783);

(statearr_55800_55863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (13))){
var inst_55785 = (state_55792[(2)]);
var state_55792__$1 = (function (){var statearr_55801 = state_55792;
(statearr_55801[(9)] = inst_55785);

return statearr_55801;
})();
var statearr_55802_55864 = state_55792__$1;
(statearr_55802_55864[(2)] = null);

(statearr_55802_55864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (6))){
var inst_55757 = (state_55792[(7)]);
var state_55792__$1 = state_55792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55792__$1,(11),inst_55757);
} else {
if((state_val_55793 === (17))){
var inst_55778 = (state_55792[(2)]);
var state_55792__$1 = state_55792;
if(cljs.core.truth_(inst_55778)){
var statearr_55803_55865 = state_55792__$1;
(statearr_55803_55865[(1)] = (19));

} else {
var statearr_55804_55866 = state_55792__$1;
(statearr_55804_55866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (3))){
var inst_55790 = (state_55792[(2)]);
var state_55792__$1 = state_55792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55792__$1,inst_55790);
} else {
if((state_val_55793 === (12))){
var inst_55767 = (state_55792[(10)]);
var state_55792__$1 = state_55792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55792__$1,(14),inst_55767);
} else {
if((state_val_55793 === (2))){
var state_55792__$1 = state_55792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55792__$1,(4),results);
} else {
if((state_val_55793 === (19))){
var state_55792__$1 = state_55792;
var statearr_55805_55867 = state_55792__$1;
(statearr_55805_55867[(2)] = null);

(statearr_55805_55867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (11))){
var inst_55767 = (state_55792[(2)]);
var state_55792__$1 = (function (){var statearr_55806 = state_55792;
(statearr_55806[(10)] = inst_55767);

return statearr_55806;
})();
var statearr_55807_55868 = state_55792__$1;
(statearr_55807_55868[(2)] = null);

(statearr_55807_55868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (9))){
var state_55792__$1 = state_55792;
var statearr_55808_55869 = state_55792__$1;
(statearr_55808_55869[(2)] = null);

(statearr_55808_55869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (5))){
var state_55792__$1 = state_55792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55809_55870 = state_55792__$1;
(statearr_55809_55870[(1)] = (8));

} else {
var statearr_55810_55871 = state_55792__$1;
(statearr_55810_55871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (14))){
var inst_55770 = (state_55792[(8)]);
var inst_55772 = (state_55792[(11)]);
var inst_55770__$1 = (state_55792[(2)]);
var inst_55771 = (inst_55770__$1 == null);
var inst_55772__$1 = cljs.core.not.call(null,inst_55771);
var state_55792__$1 = (function (){var statearr_55811 = state_55792;
(statearr_55811[(8)] = inst_55770__$1);

(statearr_55811[(11)] = inst_55772__$1);

return statearr_55811;
})();
if(inst_55772__$1){
var statearr_55812_55872 = state_55792__$1;
(statearr_55812_55872[(1)] = (15));

} else {
var statearr_55813_55873 = state_55792__$1;
(statearr_55813_55873[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (16))){
var inst_55772 = (state_55792[(11)]);
var state_55792__$1 = state_55792;
var statearr_55814_55874 = state_55792__$1;
(statearr_55814_55874[(2)] = inst_55772);

(statearr_55814_55874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (10))){
var inst_55764 = (state_55792[(2)]);
var state_55792__$1 = state_55792;
var statearr_55815_55875 = state_55792__$1;
(statearr_55815_55875[(2)] = inst_55764);

(statearr_55815_55875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (18))){
var inst_55775 = (state_55792[(2)]);
var state_55792__$1 = state_55792;
var statearr_55816_55876 = state_55792__$1;
(statearr_55816_55876[(2)] = inst_55775);

(statearr_55816_55876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55793 === (8))){
var inst_55761 = cljs.core.async.close_BANG_.call(null,to);
var state_55792__$1 = state_55792;
var statearr_55817_55877 = state_55792__$1;
(statearr_55817_55877[(2)] = inst_55761);

(statearr_55817_55877[(1)] = (10));


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
});})(c__55486__auto__,jobs,results,process,async))
;
return ((function (switch__55396__auto__,c__55486__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0 = (function (){
var statearr_55818 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__);

(statearr_55818[(1)] = (1));

return statearr_55818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1 = (function (state_55792){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_55792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e55819){if((e55819 instanceof Object)){
var ex__55400__auto__ = e55819;
var statearr_55820_55878 = state_55792;
(statearr_55820_55878[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55879 = state_55792;
state_55792 = G__55879;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__ = function(state_55792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1.call(this,state_55792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__,jobs,results,process,async))
})();
var state__55488__auto__ = (function (){var statearr_55821 = f__55487__auto__.call(null);
(statearr_55821[(6)] = c__55486__auto__);

return statearr_55821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__,jobs,results,process,async))
);

return c__55486__auto__;
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
var G__55881 = arguments.length;
switch (G__55881) {
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
var G__55884 = arguments.length;
switch (G__55884) {
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
var G__55887 = arguments.length;
switch (G__55887) {
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
var c__55486__auto___55936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___55936,tc,fc){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___55936,tc,fc){
return (function (state_55913){
var state_val_55914 = (state_55913[(1)]);
if((state_val_55914 === (7))){
var inst_55909 = (state_55913[(2)]);
var state_55913__$1 = state_55913;
var statearr_55915_55937 = state_55913__$1;
(statearr_55915_55937[(2)] = inst_55909);

(statearr_55915_55937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (1))){
var state_55913__$1 = state_55913;
var statearr_55916_55938 = state_55913__$1;
(statearr_55916_55938[(2)] = null);

(statearr_55916_55938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (4))){
var inst_55890 = (state_55913[(7)]);
var inst_55890__$1 = (state_55913[(2)]);
var inst_55891 = (inst_55890__$1 == null);
var state_55913__$1 = (function (){var statearr_55917 = state_55913;
(statearr_55917[(7)] = inst_55890__$1);

return statearr_55917;
})();
if(cljs.core.truth_(inst_55891)){
var statearr_55918_55939 = state_55913__$1;
(statearr_55918_55939[(1)] = (5));

} else {
var statearr_55919_55940 = state_55913__$1;
(statearr_55919_55940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (13))){
var state_55913__$1 = state_55913;
var statearr_55920_55941 = state_55913__$1;
(statearr_55920_55941[(2)] = null);

(statearr_55920_55941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (6))){
var inst_55890 = (state_55913[(7)]);
var inst_55896 = p.call(null,inst_55890);
var state_55913__$1 = state_55913;
if(cljs.core.truth_(inst_55896)){
var statearr_55921_55942 = state_55913__$1;
(statearr_55921_55942[(1)] = (9));

} else {
var statearr_55922_55943 = state_55913__$1;
(statearr_55922_55943[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (3))){
var inst_55911 = (state_55913[(2)]);
var state_55913__$1 = state_55913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55913__$1,inst_55911);
} else {
if((state_val_55914 === (12))){
var state_55913__$1 = state_55913;
var statearr_55923_55944 = state_55913__$1;
(statearr_55923_55944[(2)] = null);

(statearr_55923_55944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (2))){
var state_55913__$1 = state_55913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55913__$1,(4),ch);
} else {
if((state_val_55914 === (11))){
var inst_55890 = (state_55913[(7)]);
var inst_55900 = (state_55913[(2)]);
var state_55913__$1 = state_55913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55913__$1,(8),inst_55900,inst_55890);
} else {
if((state_val_55914 === (9))){
var state_55913__$1 = state_55913;
var statearr_55924_55945 = state_55913__$1;
(statearr_55924_55945[(2)] = tc);

(statearr_55924_55945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (5))){
var inst_55893 = cljs.core.async.close_BANG_.call(null,tc);
var inst_55894 = cljs.core.async.close_BANG_.call(null,fc);
var state_55913__$1 = (function (){var statearr_55925 = state_55913;
(statearr_55925[(8)] = inst_55893);

return statearr_55925;
})();
var statearr_55926_55946 = state_55913__$1;
(statearr_55926_55946[(2)] = inst_55894);

(statearr_55926_55946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (14))){
var inst_55907 = (state_55913[(2)]);
var state_55913__$1 = state_55913;
var statearr_55927_55947 = state_55913__$1;
(statearr_55927_55947[(2)] = inst_55907);

(statearr_55927_55947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (10))){
var state_55913__$1 = state_55913;
var statearr_55928_55948 = state_55913__$1;
(statearr_55928_55948[(2)] = fc);

(statearr_55928_55948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55914 === (8))){
var inst_55902 = (state_55913[(2)]);
var state_55913__$1 = state_55913;
if(cljs.core.truth_(inst_55902)){
var statearr_55929_55949 = state_55913__$1;
(statearr_55929_55949[(1)] = (12));

} else {
var statearr_55930_55950 = state_55913__$1;
(statearr_55930_55950[(1)] = (13));

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
});})(c__55486__auto___55936,tc,fc))
;
return ((function (switch__55396__auto__,c__55486__auto___55936,tc,fc){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_55931 = [null,null,null,null,null,null,null,null,null];
(statearr_55931[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_55931[(1)] = (1));

return statearr_55931;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_55913){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_55913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e55932){if((e55932 instanceof Object)){
var ex__55400__auto__ = e55932;
var statearr_55933_55951 = state_55913;
(statearr_55933_55951[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55952 = state_55913;
state_55913 = G__55952;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_55913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_55913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___55936,tc,fc))
})();
var state__55488__auto__ = (function (){var statearr_55934 = f__55487__auto__.call(null);
(statearr_55934[(6)] = c__55486__auto___55936);

return statearr_55934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___55936,tc,fc))
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
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__){
return (function (state_55973){
var state_val_55974 = (state_55973[(1)]);
if((state_val_55974 === (7))){
var inst_55969 = (state_55973[(2)]);
var state_55973__$1 = state_55973;
var statearr_55975_55993 = state_55973__$1;
(statearr_55975_55993[(2)] = inst_55969);

(statearr_55975_55993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55974 === (1))){
var inst_55953 = init;
var state_55973__$1 = (function (){var statearr_55976 = state_55973;
(statearr_55976[(7)] = inst_55953);

return statearr_55976;
})();
var statearr_55977_55994 = state_55973__$1;
(statearr_55977_55994[(2)] = null);

(statearr_55977_55994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55974 === (4))){
var inst_55956 = (state_55973[(8)]);
var inst_55956__$1 = (state_55973[(2)]);
var inst_55957 = (inst_55956__$1 == null);
var state_55973__$1 = (function (){var statearr_55978 = state_55973;
(statearr_55978[(8)] = inst_55956__$1);

return statearr_55978;
})();
if(cljs.core.truth_(inst_55957)){
var statearr_55979_55995 = state_55973__$1;
(statearr_55979_55995[(1)] = (5));

} else {
var statearr_55980_55996 = state_55973__$1;
(statearr_55980_55996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55974 === (6))){
var inst_55960 = (state_55973[(9)]);
var inst_55956 = (state_55973[(8)]);
var inst_55953 = (state_55973[(7)]);
var inst_55960__$1 = f.call(null,inst_55953,inst_55956);
var inst_55961 = cljs.core.reduced_QMARK_.call(null,inst_55960__$1);
var state_55973__$1 = (function (){var statearr_55981 = state_55973;
(statearr_55981[(9)] = inst_55960__$1);

return statearr_55981;
})();
if(inst_55961){
var statearr_55982_55997 = state_55973__$1;
(statearr_55982_55997[(1)] = (8));

} else {
var statearr_55983_55998 = state_55973__$1;
(statearr_55983_55998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55974 === (3))){
var inst_55971 = (state_55973[(2)]);
var state_55973__$1 = state_55973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55973__$1,inst_55971);
} else {
if((state_val_55974 === (2))){
var state_55973__$1 = state_55973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55973__$1,(4),ch);
} else {
if((state_val_55974 === (9))){
var inst_55960 = (state_55973[(9)]);
var inst_55953 = inst_55960;
var state_55973__$1 = (function (){var statearr_55984 = state_55973;
(statearr_55984[(7)] = inst_55953);

return statearr_55984;
})();
var statearr_55985_55999 = state_55973__$1;
(statearr_55985_55999[(2)] = null);

(statearr_55985_55999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55974 === (5))){
var inst_55953 = (state_55973[(7)]);
var state_55973__$1 = state_55973;
var statearr_55986_56000 = state_55973__$1;
(statearr_55986_56000[(2)] = inst_55953);

(statearr_55986_56000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55974 === (10))){
var inst_55967 = (state_55973[(2)]);
var state_55973__$1 = state_55973;
var statearr_55987_56001 = state_55973__$1;
(statearr_55987_56001[(2)] = inst_55967);

(statearr_55987_56001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55974 === (8))){
var inst_55960 = (state_55973[(9)]);
var inst_55963 = cljs.core.deref.call(null,inst_55960);
var state_55973__$1 = state_55973;
var statearr_55988_56002 = state_55973__$1;
(statearr_55988_56002[(2)] = inst_55963);

(statearr_55988_56002[(1)] = (10));


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
});})(c__55486__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__55397__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55397__auto____0 = (function (){
var statearr_55989 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55989[(0)] = cljs$core$async$reduce_$_state_machine__55397__auto__);

(statearr_55989[(1)] = (1));

return statearr_55989;
});
var cljs$core$async$reduce_$_state_machine__55397__auto____1 = (function (state_55973){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_55973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e55990){if((e55990 instanceof Object)){
var ex__55400__auto__ = e55990;
var statearr_55991_56003 = state_55973;
(statearr_55991_56003[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56004 = state_55973;
state_55973 = G__56004;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55397__auto__ = function(state_55973){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55397__auto____1.call(this,state_55973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55397__auto____0;
cljs$core$async$reduce_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55397__auto____1;
return cljs$core$async$reduce_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__))
})();
var state__55488__auto__ = (function (){var statearr_55992 = f__55487__auto__.call(null);
(statearr_55992[(6)] = c__55486__auto__);

return statearr_55992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__))
);

return c__55486__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__,f__$1){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__,f__$1){
return (function (state_56010){
var state_val_56011 = (state_56010[(1)]);
if((state_val_56011 === (1))){
var inst_56005 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_56010__$1 = state_56010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56010__$1,(2),inst_56005);
} else {
if((state_val_56011 === (2))){
var inst_56007 = (state_56010[(2)]);
var inst_56008 = f__$1.call(null,inst_56007);
var state_56010__$1 = state_56010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56010__$1,inst_56008);
} else {
return null;
}
}
});})(c__55486__auto__,f__$1))
;
return ((function (switch__55396__auto__,c__55486__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__55397__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55397__auto____0 = (function (){
var statearr_56012 = [null,null,null,null,null,null,null];
(statearr_56012[(0)] = cljs$core$async$transduce_$_state_machine__55397__auto__);

(statearr_56012[(1)] = (1));

return statearr_56012;
});
var cljs$core$async$transduce_$_state_machine__55397__auto____1 = (function (state_56010){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_56010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e56013){if((e56013 instanceof Object)){
var ex__55400__auto__ = e56013;
var statearr_56014_56016 = state_56010;
(statearr_56014_56016[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56017 = state_56010;
state_56010 = G__56017;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55397__auto__ = function(state_56010){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55397__auto____1.call(this,state_56010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55397__auto____0;
cljs$core$async$transduce_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55397__auto____1;
return cljs$core$async$transduce_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__,f__$1))
})();
var state__55488__auto__ = (function (){var statearr_56015 = f__55487__auto__.call(null);
(statearr_56015[(6)] = c__55486__auto__);

return statearr_56015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__,f__$1))
);

return c__55486__auto__;
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
var G__56019 = arguments.length;
switch (G__56019) {
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
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__){
return (function (state_56044){
var state_val_56045 = (state_56044[(1)]);
if((state_val_56045 === (7))){
var inst_56026 = (state_56044[(2)]);
var state_56044__$1 = state_56044;
var statearr_56046_56067 = state_56044__$1;
(statearr_56046_56067[(2)] = inst_56026);

(statearr_56046_56067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (1))){
var inst_56020 = cljs.core.seq.call(null,coll);
var inst_56021 = inst_56020;
var state_56044__$1 = (function (){var statearr_56047 = state_56044;
(statearr_56047[(7)] = inst_56021);

return statearr_56047;
})();
var statearr_56048_56068 = state_56044__$1;
(statearr_56048_56068[(2)] = null);

(statearr_56048_56068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (4))){
var inst_56021 = (state_56044[(7)]);
var inst_56024 = cljs.core.first.call(null,inst_56021);
var state_56044__$1 = state_56044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56044__$1,(7),ch,inst_56024);
} else {
if((state_val_56045 === (13))){
var inst_56038 = (state_56044[(2)]);
var state_56044__$1 = state_56044;
var statearr_56049_56069 = state_56044__$1;
(statearr_56049_56069[(2)] = inst_56038);

(statearr_56049_56069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (6))){
var inst_56029 = (state_56044[(2)]);
var state_56044__$1 = state_56044;
if(cljs.core.truth_(inst_56029)){
var statearr_56050_56070 = state_56044__$1;
(statearr_56050_56070[(1)] = (8));

} else {
var statearr_56051_56071 = state_56044__$1;
(statearr_56051_56071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (3))){
var inst_56042 = (state_56044[(2)]);
var state_56044__$1 = state_56044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56044__$1,inst_56042);
} else {
if((state_val_56045 === (12))){
var state_56044__$1 = state_56044;
var statearr_56052_56072 = state_56044__$1;
(statearr_56052_56072[(2)] = null);

(statearr_56052_56072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (2))){
var inst_56021 = (state_56044[(7)]);
var state_56044__$1 = state_56044;
if(cljs.core.truth_(inst_56021)){
var statearr_56053_56073 = state_56044__$1;
(statearr_56053_56073[(1)] = (4));

} else {
var statearr_56054_56074 = state_56044__$1;
(statearr_56054_56074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (11))){
var inst_56035 = cljs.core.async.close_BANG_.call(null,ch);
var state_56044__$1 = state_56044;
var statearr_56055_56075 = state_56044__$1;
(statearr_56055_56075[(2)] = inst_56035);

(statearr_56055_56075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (9))){
var state_56044__$1 = state_56044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56056_56076 = state_56044__$1;
(statearr_56056_56076[(1)] = (11));

} else {
var statearr_56057_56077 = state_56044__$1;
(statearr_56057_56077[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (5))){
var inst_56021 = (state_56044[(7)]);
var state_56044__$1 = state_56044;
var statearr_56058_56078 = state_56044__$1;
(statearr_56058_56078[(2)] = inst_56021);

(statearr_56058_56078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (10))){
var inst_56040 = (state_56044[(2)]);
var state_56044__$1 = state_56044;
var statearr_56059_56079 = state_56044__$1;
(statearr_56059_56079[(2)] = inst_56040);

(statearr_56059_56079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56045 === (8))){
var inst_56021 = (state_56044[(7)]);
var inst_56031 = cljs.core.next.call(null,inst_56021);
var inst_56021__$1 = inst_56031;
var state_56044__$1 = (function (){var statearr_56060 = state_56044;
(statearr_56060[(7)] = inst_56021__$1);

return statearr_56060;
})();
var statearr_56061_56080 = state_56044__$1;
(statearr_56061_56080[(2)] = null);

(statearr_56061_56080[(1)] = (2));


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
});})(c__55486__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_56062 = [null,null,null,null,null,null,null,null];
(statearr_56062[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_56062[(1)] = (1));

return statearr_56062;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_56044){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_56044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e56063){if((e56063 instanceof Object)){
var ex__55400__auto__ = e56063;
var statearr_56064_56081 = state_56044;
(statearr_56064_56081[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56082 = state_56044;
state_56044 = G__56082;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_56044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_56044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__))
})();
var state__55488__auto__ = (function (){var statearr_56065 = f__55487__auto__.call(null);
(statearr_56065[(6)] = c__55486__auto__);

return statearr_56065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__))
);

return c__55486__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async56083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56083 = (function (ch,cs,meta56084){
this.ch = ch;
this.cs = cs;
this.meta56084 = meta56084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_56085,meta56084__$1){
var self__ = this;
var _56085__$1 = this;
return (new cljs.core.async.t_cljs$core$async56083(self__.ch,self__.cs,meta56084__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async56083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_56085){
var self__ = this;
var _56085__$1 = this;
return self__.meta56084;
});})(cs))
;

cljs.core.async.t_cljs$core$async56083.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async56083.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56083.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56083.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56083.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56083.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56084","meta56084",1207374280,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async56083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56083";

cljs.core.async.t_cljs$core$async56083.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async56083");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async56083 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async56083(ch__$1,cs__$1,meta56084){
return (new cljs.core.async.t_cljs$core$async56083(ch__$1,cs__$1,meta56084));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async56083(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__55486__auto___56305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___56305,cs,m,dchan,dctr,done){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___56305,cs,m,dchan,dctr,done){
return (function (state_56220){
var state_val_56221 = (state_56220[(1)]);
if((state_val_56221 === (7))){
var inst_56216 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56222_56306 = state_56220__$1;
(statearr_56222_56306[(2)] = inst_56216);

(statearr_56222_56306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (20))){
var inst_56119 = (state_56220[(7)]);
var inst_56131 = cljs.core.first.call(null,inst_56119);
var inst_56132 = cljs.core.nth.call(null,inst_56131,(0),null);
var inst_56133 = cljs.core.nth.call(null,inst_56131,(1),null);
var state_56220__$1 = (function (){var statearr_56223 = state_56220;
(statearr_56223[(8)] = inst_56132);

return statearr_56223;
})();
if(cljs.core.truth_(inst_56133)){
var statearr_56224_56307 = state_56220__$1;
(statearr_56224_56307[(1)] = (22));

} else {
var statearr_56225_56308 = state_56220__$1;
(statearr_56225_56308[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (27))){
var inst_56088 = (state_56220[(9)]);
var inst_56163 = (state_56220[(10)]);
var inst_56161 = (state_56220[(11)]);
var inst_56168 = (state_56220[(12)]);
var inst_56168__$1 = cljs.core._nth.call(null,inst_56161,inst_56163);
var inst_56169 = cljs.core.async.put_BANG_.call(null,inst_56168__$1,inst_56088,done);
var state_56220__$1 = (function (){var statearr_56226 = state_56220;
(statearr_56226[(12)] = inst_56168__$1);

return statearr_56226;
})();
if(cljs.core.truth_(inst_56169)){
var statearr_56227_56309 = state_56220__$1;
(statearr_56227_56309[(1)] = (30));

} else {
var statearr_56228_56310 = state_56220__$1;
(statearr_56228_56310[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (1))){
var state_56220__$1 = state_56220;
var statearr_56229_56311 = state_56220__$1;
(statearr_56229_56311[(2)] = null);

(statearr_56229_56311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (24))){
var inst_56119 = (state_56220[(7)]);
var inst_56138 = (state_56220[(2)]);
var inst_56139 = cljs.core.next.call(null,inst_56119);
var inst_56097 = inst_56139;
var inst_56098 = null;
var inst_56099 = (0);
var inst_56100 = (0);
var state_56220__$1 = (function (){var statearr_56230 = state_56220;
(statearr_56230[(13)] = inst_56100);

(statearr_56230[(14)] = inst_56097);

(statearr_56230[(15)] = inst_56099);

(statearr_56230[(16)] = inst_56098);

(statearr_56230[(17)] = inst_56138);

return statearr_56230;
})();
var statearr_56231_56312 = state_56220__$1;
(statearr_56231_56312[(2)] = null);

(statearr_56231_56312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (39))){
var state_56220__$1 = state_56220;
var statearr_56235_56313 = state_56220__$1;
(statearr_56235_56313[(2)] = null);

(statearr_56235_56313[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (4))){
var inst_56088 = (state_56220[(9)]);
var inst_56088__$1 = (state_56220[(2)]);
var inst_56089 = (inst_56088__$1 == null);
var state_56220__$1 = (function (){var statearr_56236 = state_56220;
(statearr_56236[(9)] = inst_56088__$1);

return statearr_56236;
})();
if(cljs.core.truth_(inst_56089)){
var statearr_56237_56314 = state_56220__$1;
(statearr_56237_56314[(1)] = (5));

} else {
var statearr_56238_56315 = state_56220__$1;
(statearr_56238_56315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (15))){
var inst_56100 = (state_56220[(13)]);
var inst_56097 = (state_56220[(14)]);
var inst_56099 = (state_56220[(15)]);
var inst_56098 = (state_56220[(16)]);
var inst_56115 = (state_56220[(2)]);
var inst_56116 = (inst_56100 + (1));
var tmp56232 = inst_56097;
var tmp56233 = inst_56099;
var tmp56234 = inst_56098;
var inst_56097__$1 = tmp56232;
var inst_56098__$1 = tmp56234;
var inst_56099__$1 = tmp56233;
var inst_56100__$1 = inst_56116;
var state_56220__$1 = (function (){var statearr_56239 = state_56220;
(statearr_56239[(13)] = inst_56100__$1);

(statearr_56239[(14)] = inst_56097__$1);

(statearr_56239[(15)] = inst_56099__$1);

(statearr_56239[(18)] = inst_56115);

(statearr_56239[(16)] = inst_56098__$1);

return statearr_56239;
})();
var statearr_56240_56316 = state_56220__$1;
(statearr_56240_56316[(2)] = null);

(statearr_56240_56316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (21))){
var inst_56142 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56244_56317 = state_56220__$1;
(statearr_56244_56317[(2)] = inst_56142);

(statearr_56244_56317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (31))){
var inst_56168 = (state_56220[(12)]);
var inst_56172 = done.call(null,null);
var inst_56173 = cljs.core.async.untap_STAR_.call(null,m,inst_56168);
var state_56220__$1 = (function (){var statearr_56245 = state_56220;
(statearr_56245[(19)] = inst_56172);

return statearr_56245;
})();
var statearr_56246_56318 = state_56220__$1;
(statearr_56246_56318[(2)] = inst_56173);

(statearr_56246_56318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (32))){
var inst_56162 = (state_56220[(20)]);
var inst_56163 = (state_56220[(10)]);
var inst_56160 = (state_56220[(21)]);
var inst_56161 = (state_56220[(11)]);
var inst_56175 = (state_56220[(2)]);
var inst_56176 = (inst_56163 + (1));
var tmp56241 = inst_56162;
var tmp56242 = inst_56160;
var tmp56243 = inst_56161;
var inst_56160__$1 = tmp56242;
var inst_56161__$1 = tmp56243;
var inst_56162__$1 = tmp56241;
var inst_56163__$1 = inst_56176;
var state_56220__$1 = (function (){var statearr_56247 = state_56220;
(statearr_56247[(20)] = inst_56162__$1);

(statearr_56247[(10)] = inst_56163__$1);

(statearr_56247[(21)] = inst_56160__$1);

(statearr_56247[(22)] = inst_56175);

(statearr_56247[(11)] = inst_56161__$1);

return statearr_56247;
})();
var statearr_56248_56319 = state_56220__$1;
(statearr_56248_56319[(2)] = null);

(statearr_56248_56319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (40))){
var inst_56188 = (state_56220[(23)]);
var inst_56192 = done.call(null,null);
var inst_56193 = cljs.core.async.untap_STAR_.call(null,m,inst_56188);
var state_56220__$1 = (function (){var statearr_56249 = state_56220;
(statearr_56249[(24)] = inst_56192);

return statearr_56249;
})();
var statearr_56250_56320 = state_56220__$1;
(statearr_56250_56320[(2)] = inst_56193);

(statearr_56250_56320[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (33))){
var inst_56179 = (state_56220[(25)]);
var inst_56181 = cljs.core.chunked_seq_QMARK_.call(null,inst_56179);
var state_56220__$1 = state_56220;
if(inst_56181){
var statearr_56251_56321 = state_56220__$1;
(statearr_56251_56321[(1)] = (36));

} else {
var statearr_56252_56322 = state_56220__$1;
(statearr_56252_56322[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (13))){
var inst_56109 = (state_56220[(26)]);
var inst_56112 = cljs.core.async.close_BANG_.call(null,inst_56109);
var state_56220__$1 = state_56220;
var statearr_56253_56323 = state_56220__$1;
(statearr_56253_56323[(2)] = inst_56112);

(statearr_56253_56323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (22))){
var inst_56132 = (state_56220[(8)]);
var inst_56135 = cljs.core.async.close_BANG_.call(null,inst_56132);
var state_56220__$1 = state_56220;
var statearr_56254_56324 = state_56220__$1;
(statearr_56254_56324[(2)] = inst_56135);

(statearr_56254_56324[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (36))){
var inst_56179 = (state_56220[(25)]);
var inst_56183 = cljs.core.chunk_first.call(null,inst_56179);
var inst_56184 = cljs.core.chunk_rest.call(null,inst_56179);
var inst_56185 = cljs.core.count.call(null,inst_56183);
var inst_56160 = inst_56184;
var inst_56161 = inst_56183;
var inst_56162 = inst_56185;
var inst_56163 = (0);
var state_56220__$1 = (function (){var statearr_56255 = state_56220;
(statearr_56255[(20)] = inst_56162);

(statearr_56255[(10)] = inst_56163);

(statearr_56255[(21)] = inst_56160);

(statearr_56255[(11)] = inst_56161);

return statearr_56255;
})();
var statearr_56256_56325 = state_56220__$1;
(statearr_56256_56325[(2)] = null);

(statearr_56256_56325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (41))){
var inst_56179 = (state_56220[(25)]);
var inst_56195 = (state_56220[(2)]);
var inst_56196 = cljs.core.next.call(null,inst_56179);
var inst_56160 = inst_56196;
var inst_56161 = null;
var inst_56162 = (0);
var inst_56163 = (0);
var state_56220__$1 = (function (){var statearr_56257 = state_56220;
(statearr_56257[(27)] = inst_56195);

(statearr_56257[(20)] = inst_56162);

(statearr_56257[(10)] = inst_56163);

(statearr_56257[(21)] = inst_56160);

(statearr_56257[(11)] = inst_56161);

return statearr_56257;
})();
var statearr_56258_56326 = state_56220__$1;
(statearr_56258_56326[(2)] = null);

(statearr_56258_56326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (43))){
var state_56220__$1 = state_56220;
var statearr_56259_56327 = state_56220__$1;
(statearr_56259_56327[(2)] = null);

(statearr_56259_56327[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (29))){
var inst_56204 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56260_56328 = state_56220__$1;
(statearr_56260_56328[(2)] = inst_56204);

(statearr_56260_56328[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (44))){
var inst_56213 = (state_56220[(2)]);
var state_56220__$1 = (function (){var statearr_56261 = state_56220;
(statearr_56261[(28)] = inst_56213);

return statearr_56261;
})();
var statearr_56262_56329 = state_56220__$1;
(statearr_56262_56329[(2)] = null);

(statearr_56262_56329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (6))){
var inst_56152 = (state_56220[(29)]);
var inst_56151 = cljs.core.deref.call(null,cs);
var inst_56152__$1 = cljs.core.keys.call(null,inst_56151);
var inst_56153 = cljs.core.count.call(null,inst_56152__$1);
var inst_56154 = cljs.core.reset_BANG_.call(null,dctr,inst_56153);
var inst_56159 = cljs.core.seq.call(null,inst_56152__$1);
var inst_56160 = inst_56159;
var inst_56161 = null;
var inst_56162 = (0);
var inst_56163 = (0);
var state_56220__$1 = (function (){var statearr_56263 = state_56220;
(statearr_56263[(30)] = inst_56154);

(statearr_56263[(20)] = inst_56162);

(statearr_56263[(10)] = inst_56163);

(statearr_56263[(21)] = inst_56160);

(statearr_56263[(29)] = inst_56152__$1);

(statearr_56263[(11)] = inst_56161);

return statearr_56263;
})();
var statearr_56264_56330 = state_56220__$1;
(statearr_56264_56330[(2)] = null);

(statearr_56264_56330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (28))){
var inst_56179 = (state_56220[(25)]);
var inst_56160 = (state_56220[(21)]);
var inst_56179__$1 = cljs.core.seq.call(null,inst_56160);
var state_56220__$1 = (function (){var statearr_56265 = state_56220;
(statearr_56265[(25)] = inst_56179__$1);

return statearr_56265;
})();
if(inst_56179__$1){
var statearr_56266_56331 = state_56220__$1;
(statearr_56266_56331[(1)] = (33));

} else {
var statearr_56267_56332 = state_56220__$1;
(statearr_56267_56332[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (25))){
var inst_56162 = (state_56220[(20)]);
var inst_56163 = (state_56220[(10)]);
var inst_56165 = (inst_56163 < inst_56162);
var inst_56166 = inst_56165;
var state_56220__$1 = state_56220;
if(cljs.core.truth_(inst_56166)){
var statearr_56268_56333 = state_56220__$1;
(statearr_56268_56333[(1)] = (27));

} else {
var statearr_56269_56334 = state_56220__$1;
(statearr_56269_56334[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (34))){
var state_56220__$1 = state_56220;
var statearr_56270_56335 = state_56220__$1;
(statearr_56270_56335[(2)] = null);

(statearr_56270_56335[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (17))){
var state_56220__$1 = state_56220;
var statearr_56271_56336 = state_56220__$1;
(statearr_56271_56336[(2)] = null);

(statearr_56271_56336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (3))){
var inst_56218 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56220__$1,inst_56218);
} else {
if((state_val_56221 === (12))){
var inst_56147 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56272_56337 = state_56220__$1;
(statearr_56272_56337[(2)] = inst_56147);

(statearr_56272_56337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (2))){
var state_56220__$1 = state_56220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56220__$1,(4),ch);
} else {
if((state_val_56221 === (23))){
var state_56220__$1 = state_56220;
var statearr_56273_56338 = state_56220__$1;
(statearr_56273_56338[(2)] = null);

(statearr_56273_56338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (35))){
var inst_56202 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56274_56339 = state_56220__$1;
(statearr_56274_56339[(2)] = inst_56202);

(statearr_56274_56339[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (19))){
var inst_56119 = (state_56220[(7)]);
var inst_56123 = cljs.core.chunk_first.call(null,inst_56119);
var inst_56124 = cljs.core.chunk_rest.call(null,inst_56119);
var inst_56125 = cljs.core.count.call(null,inst_56123);
var inst_56097 = inst_56124;
var inst_56098 = inst_56123;
var inst_56099 = inst_56125;
var inst_56100 = (0);
var state_56220__$1 = (function (){var statearr_56275 = state_56220;
(statearr_56275[(13)] = inst_56100);

(statearr_56275[(14)] = inst_56097);

(statearr_56275[(15)] = inst_56099);

(statearr_56275[(16)] = inst_56098);

return statearr_56275;
})();
var statearr_56276_56340 = state_56220__$1;
(statearr_56276_56340[(2)] = null);

(statearr_56276_56340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (11))){
var inst_56119 = (state_56220[(7)]);
var inst_56097 = (state_56220[(14)]);
var inst_56119__$1 = cljs.core.seq.call(null,inst_56097);
var state_56220__$1 = (function (){var statearr_56277 = state_56220;
(statearr_56277[(7)] = inst_56119__$1);

return statearr_56277;
})();
if(inst_56119__$1){
var statearr_56278_56341 = state_56220__$1;
(statearr_56278_56341[(1)] = (16));

} else {
var statearr_56279_56342 = state_56220__$1;
(statearr_56279_56342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (9))){
var inst_56149 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56280_56343 = state_56220__$1;
(statearr_56280_56343[(2)] = inst_56149);

(statearr_56280_56343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (5))){
var inst_56095 = cljs.core.deref.call(null,cs);
var inst_56096 = cljs.core.seq.call(null,inst_56095);
var inst_56097 = inst_56096;
var inst_56098 = null;
var inst_56099 = (0);
var inst_56100 = (0);
var state_56220__$1 = (function (){var statearr_56281 = state_56220;
(statearr_56281[(13)] = inst_56100);

(statearr_56281[(14)] = inst_56097);

(statearr_56281[(15)] = inst_56099);

(statearr_56281[(16)] = inst_56098);

return statearr_56281;
})();
var statearr_56282_56344 = state_56220__$1;
(statearr_56282_56344[(2)] = null);

(statearr_56282_56344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (14))){
var state_56220__$1 = state_56220;
var statearr_56283_56345 = state_56220__$1;
(statearr_56283_56345[(2)] = null);

(statearr_56283_56345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (45))){
var inst_56210 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56284_56346 = state_56220__$1;
(statearr_56284_56346[(2)] = inst_56210);

(statearr_56284_56346[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (26))){
var inst_56152 = (state_56220[(29)]);
var inst_56206 = (state_56220[(2)]);
var inst_56207 = cljs.core.seq.call(null,inst_56152);
var state_56220__$1 = (function (){var statearr_56285 = state_56220;
(statearr_56285[(31)] = inst_56206);

return statearr_56285;
})();
if(inst_56207){
var statearr_56286_56347 = state_56220__$1;
(statearr_56286_56347[(1)] = (42));

} else {
var statearr_56287_56348 = state_56220__$1;
(statearr_56287_56348[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (16))){
var inst_56119 = (state_56220[(7)]);
var inst_56121 = cljs.core.chunked_seq_QMARK_.call(null,inst_56119);
var state_56220__$1 = state_56220;
if(inst_56121){
var statearr_56288_56349 = state_56220__$1;
(statearr_56288_56349[(1)] = (19));

} else {
var statearr_56289_56350 = state_56220__$1;
(statearr_56289_56350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (38))){
var inst_56199 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56290_56351 = state_56220__$1;
(statearr_56290_56351[(2)] = inst_56199);

(statearr_56290_56351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (30))){
var state_56220__$1 = state_56220;
var statearr_56291_56352 = state_56220__$1;
(statearr_56291_56352[(2)] = null);

(statearr_56291_56352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (10))){
var inst_56100 = (state_56220[(13)]);
var inst_56098 = (state_56220[(16)]);
var inst_56108 = cljs.core._nth.call(null,inst_56098,inst_56100);
var inst_56109 = cljs.core.nth.call(null,inst_56108,(0),null);
var inst_56110 = cljs.core.nth.call(null,inst_56108,(1),null);
var state_56220__$1 = (function (){var statearr_56292 = state_56220;
(statearr_56292[(26)] = inst_56109);

return statearr_56292;
})();
if(cljs.core.truth_(inst_56110)){
var statearr_56293_56353 = state_56220__$1;
(statearr_56293_56353[(1)] = (13));

} else {
var statearr_56294_56354 = state_56220__$1;
(statearr_56294_56354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (18))){
var inst_56145 = (state_56220[(2)]);
var state_56220__$1 = state_56220;
var statearr_56295_56355 = state_56220__$1;
(statearr_56295_56355[(2)] = inst_56145);

(statearr_56295_56355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (42))){
var state_56220__$1 = state_56220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56220__$1,(45),dchan);
} else {
if((state_val_56221 === (37))){
var inst_56179 = (state_56220[(25)]);
var inst_56088 = (state_56220[(9)]);
var inst_56188 = (state_56220[(23)]);
var inst_56188__$1 = cljs.core.first.call(null,inst_56179);
var inst_56189 = cljs.core.async.put_BANG_.call(null,inst_56188__$1,inst_56088,done);
var state_56220__$1 = (function (){var statearr_56296 = state_56220;
(statearr_56296[(23)] = inst_56188__$1);

return statearr_56296;
})();
if(cljs.core.truth_(inst_56189)){
var statearr_56297_56356 = state_56220__$1;
(statearr_56297_56356[(1)] = (39));

} else {
var statearr_56298_56357 = state_56220__$1;
(statearr_56298_56357[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56221 === (8))){
var inst_56100 = (state_56220[(13)]);
var inst_56099 = (state_56220[(15)]);
var inst_56102 = (inst_56100 < inst_56099);
var inst_56103 = inst_56102;
var state_56220__$1 = state_56220;
if(cljs.core.truth_(inst_56103)){
var statearr_56299_56358 = state_56220__$1;
(statearr_56299_56358[(1)] = (10));

} else {
var statearr_56300_56359 = state_56220__$1;
(statearr_56300_56359[(1)] = (11));

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
});})(c__55486__auto___56305,cs,m,dchan,dctr,done))
;
return ((function (switch__55396__auto__,c__55486__auto___56305,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__55397__auto__ = null;
var cljs$core$async$mult_$_state_machine__55397__auto____0 = (function (){
var statearr_56301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56301[(0)] = cljs$core$async$mult_$_state_machine__55397__auto__);

(statearr_56301[(1)] = (1));

return statearr_56301;
});
var cljs$core$async$mult_$_state_machine__55397__auto____1 = (function (state_56220){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_56220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e56302){if((e56302 instanceof Object)){
var ex__55400__auto__ = e56302;
var statearr_56303_56360 = state_56220;
(statearr_56303_56360[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56361 = state_56220;
state_56220 = G__56361;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55397__auto__ = function(state_56220){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55397__auto____1.call(this,state_56220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55397__auto____0;
cljs$core$async$mult_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55397__auto____1;
return cljs$core$async$mult_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___56305,cs,m,dchan,dctr,done))
})();
var state__55488__auto__ = (function (){var statearr_56304 = f__55487__auto__.call(null);
(statearr_56304[(6)] = c__55486__auto___56305);

return statearr_56304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___56305,cs,m,dchan,dctr,done))
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
var G__56363 = arguments.length;
switch (G__56363) {
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
var len__50798__auto___56375 = arguments.length;
var i__50799__auto___56376 = (0);
while(true){
if((i__50799__auto___56376 < len__50798__auto___56375)){
args__50805__auto__.push((arguments[i__50799__auto___56376]));

var G__56377 = (i__50799__auto___56376 + (1));
i__50799__auto___56376 = G__56377;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((3) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__50806__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56369){
var map__56370 = p__56369;
var map__56370__$1 = ((((!((map__56370 == null)))?((((map__56370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56370):map__56370);
var opts = map__56370__$1;
var statearr_56372_56378 = state;
(statearr_56372_56378[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__56370,map__56370__$1,opts){
return (function (val){
var statearr_56373_56379 = state;
(statearr_56373_56379[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__56370,map__56370__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_56374_56380 = state;
(statearr_56374_56380[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56365){
var G__56366 = cljs.core.first.call(null,seq56365);
var seq56365__$1 = cljs.core.next.call(null,seq56365);
var G__56367 = cljs.core.first.call(null,seq56365__$1);
var seq56365__$2 = cljs.core.next.call(null,seq56365__$1);
var G__56368 = cljs.core.first.call(null,seq56365__$2);
var seq56365__$3 = cljs.core.next.call(null,seq56365__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56366,G__56367,G__56368,seq56365__$3);
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
if(typeof cljs.core.async.t_cljs$core$async56381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56381 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta56382){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta56382 = meta56382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_56383,meta56382__$1){
var self__ = this;
var _56383__$1 = this;
return (new cljs.core.async.t_cljs$core$async56381(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta56382__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_56383){
var self__ = this;
var _56383__$1 = this;
return self__.meta56382;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async56381.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async56381.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta56382","meta56382",2099891534,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async56381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56381";

cljs.core.async.t_cljs$core$async56381.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async56381");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async56381 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async56381(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta56382){
return (new cljs.core.async.t_cljs$core$async56381(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta56382));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async56381(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55486__auto___56545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___56545,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___56545,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_56485){
var state_val_56486 = (state_56485[(1)]);
if((state_val_56486 === (7))){
var inst_56400 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
var statearr_56487_56546 = state_56485__$1;
(statearr_56487_56546[(2)] = inst_56400);

(statearr_56487_56546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (20))){
var inst_56412 = (state_56485[(7)]);
var state_56485__$1 = state_56485;
var statearr_56488_56547 = state_56485__$1;
(statearr_56488_56547[(2)] = inst_56412);

(statearr_56488_56547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (27))){
var state_56485__$1 = state_56485;
var statearr_56489_56548 = state_56485__$1;
(statearr_56489_56548[(2)] = null);

(statearr_56489_56548[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (1))){
var inst_56387 = (state_56485[(8)]);
var inst_56387__$1 = calc_state.call(null);
var inst_56389 = (inst_56387__$1 == null);
var inst_56390 = cljs.core.not.call(null,inst_56389);
var state_56485__$1 = (function (){var statearr_56490 = state_56485;
(statearr_56490[(8)] = inst_56387__$1);

return statearr_56490;
})();
if(inst_56390){
var statearr_56491_56549 = state_56485__$1;
(statearr_56491_56549[(1)] = (2));

} else {
var statearr_56492_56550 = state_56485__$1;
(statearr_56492_56550[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (24))){
var inst_56436 = (state_56485[(9)]);
var inst_56445 = (state_56485[(10)]);
var inst_56459 = (state_56485[(11)]);
var inst_56459__$1 = inst_56436.call(null,inst_56445);
var state_56485__$1 = (function (){var statearr_56493 = state_56485;
(statearr_56493[(11)] = inst_56459__$1);

return statearr_56493;
})();
if(cljs.core.truth_(inst_56459__$1)){
var statearr_56494_56551 = state_56485__$1;
(statearr_56494_56551[(1)] = (29));

} else {
var statearr_56495_56552 = state_56485__$1;
(statearr_56495_56552[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (4))){
var inst_56403 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
if(cljs.core.truth_(inst_56403)){
var statearr_56496_56553 = state_56485__$1;
(statearr_56496_56553[(1)] = (8));

} else {
var statearr_56497_56554 = state_56485__$1;
(statearr_56497_56554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (15))){
var inst_56430 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
if(cljs.core.truth_(inst_56430)){
var statearr_56498_56555 = state_56485__$1;
(statearr_56498_56555[(1)] = (19));

} else {
var statearr_56499_56556 = state_56485__$1;
(statearr_56499_56556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (21))){
var inst_56435 = (state_56485[(12)]);
var inst_56435__$1 = (state_56485[(2)]);
var inst_56436 = cljs.core.get.call(null,inst_56435__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56437 = cljs.core.get.call(null,inst_56435__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56438 = cljs.core.get.call(null,inst_56435__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_56485__$1 = (function (){var statearr_56500 = state_56485;
(statearr_56500[(9)] = inst_56436);

(statearr_56500[(13)] = inst_56437);

(statearr_56500[(12)] = inst_56435__$1);

return statearr_56500;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_56485__$1,(22),inst_56438);
} else {
if((state_val_56486 === (31))){
var inst_56467 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
if(cljs.core.truth_(inst_56467)){
var statearr_56501_56557 = state_56485__$1;
(statearr_56501_56557[(1)] = (32));

} else {
var statearr_56502_56558 = state_56485__$1;
(statearr_56502_56558[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (32))){
var inst_56444 = (state_56485[(14)]);
var state_56485__$1 = state_56485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56485__$1,(35),out,inst_56444);
} else {
if((state_val_56486 === (33))){
var inst_56435 = (state_56485[(12)]);
var inst_56412 = inst_56435;
var state_56485__$1 = (function (){var statearr_56503 = state_56485;
(statearr_56503[(7)] = inst_56412);

return statearr_56503;
})();
var statearr_56504_56559 = state_56485__$1;
(statearr_56504_56559[(2)] = null);

(statearr_56504_56559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (13))){
var inst_56412 = (state_56485[(7)]);
var inst_56419 = inst_56412.cljs$lang$protocol_mask$partition0$;
var inst_56420 = (inst_56419 & (64));
var inst_56421 = inst_56412.cljs$core$ISeq$;
var inst_56422 = (cljs.core.PROTOCOL_SENTINEL === inst_56421);
var inst_56423 = (inst_56420) || (inst_56422);
var state_56485__$1 = state_56485;
if(cljs.core.truth_(inst_56423)){
var statearr_56505_56560 = state_56485__$1;
(statearr_56505_56560[(1)] = (16));

} else {
var statearr_56506_56561 = state_56485__$1;
(statearr_56506_56561[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (22))){
var inst_56444 = (state_56485[(14)]);
var inst_56445 = (state_56485[(10)]);
var inst_56443 = (state_56485[(2)]);
var inst_56444__$1 = cljs.core.nth.call(null,inst_56443,(0),null);
var inst_56445__$1 = cljs.core.nth.call(null,inst_56443,(1),null);
var inst_56446 = (inst_56444__$1 == null);
var inst_56447 = cljs.core._EQ_.call(null,inst_56445__$1,change);
var inst_56448 = (inst_56446) || (inst_56447);
var state_56485__$1 = (function (){var statearr_56507 = state_56485;
(statearr_56507[(14)] = inst_56444__$1);

(statearr_56507[(10)] = inst_56445__$1);

return statearr_56507;
})();
if(cljs.core.truth_(inst_56448)){
var statearr_56508_56562 = state_56485__$1;
(statearr_56508_56562[(1)] = (23));

} else {
var statearr_56509_56563 = state_56485__$1;
(statearr_56509_56563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (36))){
var inst_56435 = (state_56485[(12)]);
var inst_56412 = inst_56435;
var state_56485__$1 = (function (){var statearr_56510 = state_56485;
(statearr_56510[(7)] = inst_56412);

return statearr_56510;
})();
var statearr_56511_56564 = state_56485__$1;
(statearr_56511_56564[(2)] = null);

(statearr_56511_56564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (29))){
var inst_56459 = (state_56485[(11)]);
var state_56485__$1 = state_56485;
var statearr_56512_56565 = state_56485__$1;
(statearr_56512_56565[(2)] = inst_56459);

(statearr_56512_56565[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (6))){
var state_56485__$1 = state_56485;
var statearr_56513_56566 = state_56485__$1;
(statearr_56513_56566[(2)] = false);

(statearr_56513_56566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (28))){
var inst_56455 = (state_56485[(2)]);
var inst_56456 = calc_state.call(null);
var inst_56412 = inst_56456;
var state_56485__$1 = (function (){var statearr_56514 = state_56485;
(statearr_56514[(15)] = inst_56455);

(statearr_56514[(7)] = inst_56412);

return statearr_56514;
})();
var statearr_56515_56567 = state_56485__$1;
(statearr_56515_56567[(2)] = null);

(statearr_56515_56567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (25))){
var inst_56481 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
var statearr_56516_56568 = state_56485__$1;
(statearr_56516_56568[(2)] = inst_56481);

(statearr_56516_56568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (34))){
var inst_56479 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
var statearr_56517_56569 = state_56485__$1;
(statearr_56517_56569[(2)] = inst_56479);

(statearr_56517_56569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (17))){
var state_56485__$1 = state_56485;
var statearr_56518_56570 = state_56485__$1;
(statearr_56518_56570[(2)] = false);

(statearr_56518_56570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (3))){
var state_56485__$1 = state_56485;
var statearr_56519_56571 = state_56485__$1;
(statearr_56519_56571[(2)] = false);

(statearr_56519_56571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (12))){
var inst_56483 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56485__$1,inst_56483);
} else {
if((state_val_56486 === (2))){
var inst_56387 = (state_56485[(8)]);
var inst_56392 = inst_56387.cljs$lang$protocol_mask$partition0$;
var inst_56393 = (inst_56392 & (64));
var inst_56394 = inst_56387.cljs$core$ISeq$;
var inst_56395 = (cljs.core.PROTOCOL_SENTINEL === inst_56394);
var inst_56396 = (inst_56393) || (inst_56395);
var state_56485__$1 = state_56485;
if(cljs.core.truth_(inst_56396)){
var statearr_56520_56572 = state_56485__$1;
(statearr_56520_56572[(1)] = (5));

} else {
var statearr_56521_56573 = state_56485__$1;
(statearr_56521_56573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (23))){
var inst_56444 = (state_56485[(14)]);
var inst_56450 = (inst_56444 == null);
var state_56485__$1 = state_56485;
if(cljs.core.truth_(inst_56450)){
var statearr_56522_56574 = state_56485__$1;
(statearr_56522_56574[(1)] = (26));

} else {
var statearr_56523_56575 = state_56485__$1;
(statearr_56523_56575[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (35))){
var inst_56470 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
if(cljs.core.truth_(inst_56470)){
var statearr_56524_56576 = state_56485__$1;
(statearr_56524_56576[(1)] = (36));

} else {
var statearr_56525_56577 = state_56485__$1;
(statearr_56525_56577[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (19))){
var inst_56412 = (state_56485[(7)]);
var inst_56432 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56412);
var state_56485__$1 = state_56485;
var statearr_56526_56578 = state_56485__$1;
(statearr_56526_56578[(2)] = inst_56432);

(statearr_56526_56578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (11))){
var inst_56412 = (state_56485[(7)]);
var inst_56416 = (inst_56412 == null);
var inst_56417 = cljs.core.not.call(null,inst_56416);
var state_56485__$1 = state_56485;
if(inst_56417){
var statearr_56527_56579 = state_56485__$1;
(statearr_56527_56579[(1)] = (13));

} else {
var statearr_56528_56580 = state_56485__$1;
(statearr_56528_56580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (9))){
var inst_56387 = (state_56485[(8)]);
var state_56485__$1 = state_56485;
var statearr_56529_56581 = state_56485__$1;
(statearr_56529_56581[(2)] = inst_56387);

(statearr_56529_56581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (5))){
var state_56485__$1 = state_56485;
var statearr_56530_56582 = state_56485__$1;
(statearr_56530_56582[(2)] = true);

(statearr_56530_56582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (14))){
var state_56485__$1 = state_56485;
var statearr_56531_56583 = state_56485__$1;
(statearr_56531_56583[(2)] = false);

(statearr_56531_56583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (26))){
var inst_56445 = (state_56485[(10)]);
var inst_56452 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_56445);
var state_56485__$1 = state_56485;
var statearr_56532_56584 = state_56485__$1;
(statearr_56532_56584[(2)] = inst_56452);

(statearr_56532_56584[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (16))){
var state_56485__$1 = state_56485;
var statearr_56533_56585 = state_56485__$1;
(statearr_56533_56585[(2)] = true);

(statearr_56533_56585[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (38))){
var inst_56475 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
var statearr_56534_56586 = state_56485__$1;
(statearr_56534_56586[(2)] = inst_56475);

(statearr_56534_56586[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (30))){
var inst_56436 = (state_56485[(9)]);
var inst_56437 = (state_56485[(13)]);
var inst_56445 = (state_56485[(10)]);
var inst_56462 = cljs.core.empty_QMARK_.call(null,inst_56436);
var inst_56463 = inst_56437.call(null,inst_56445);
var inst_56464 = cljs.core.not.call(null,inst_56463);
var inst_56465 = (inst_56462) && (inst_56464);
var state_56485__$1 = state_56485;
var statearr_56535_56587 = state_56485__$1;
(statearr_56535_56587[(2)] = inst_56465);

(statearr_56535_56587[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (10))){
var inst_56387 = (state_56485[(8)]);
var inst_56408 = (state_56485[(2)]);
var inst_56409 = cljs.core.get.call(null,inst_56408,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56410 = cljs.core.get.call(null,inst_56408,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56411 = cljs.core.get.call(null,inst_56408,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56412 = inst_56387;
var state_56485__$1 = (function (){var statearr_56536 = state_56485;
(statearr_56536[(16)] = inst_56409);

(statearr_56536[(17)] = inst_56410);

(statearr_56536[(7)] = inst_56412);

(statearr_56536[(18)] = inst_56411);

return statearr_56536;
})();
var statearr_56537_56588 = state_56485__$1;
(statearr_56537_56588[(2)] = null);

(statearr_56537_56588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (18))){
var inst_56427 = (state_56485[(2)]);
var state_56485__$1 = state_56485;
var statearr_56538_56589 = state_56485__$1;
(statearr_56538_56589[(2)] = inst_56427);

(statearr_56538_56589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (37))){
var state_56485__$1 = state_56485;
var statearr_56539_56590 = state_56485__$1;
(statearr_56539_56590[(2)] = null);

(statearr_56539_56590[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56486 === (8))){
var inst_56387 = (state_56485[(8)]);
var inst_56405 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56387);
var state_56485__$1 = state_56485;
var statearr_56540_56591 = state_56485__$1;
(statearr_56540_56591[(2)] = inst_56405);

(statearr_56540_56591[(1)] = (10));


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
});})(c__55486__auto___56545,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__55396__auto__,c__55486__auto___56545,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__55397__auto__ = null;
var cljs$core$async$mix_$_state_machine__55397__auto____0 = (function (){
var statearr_56541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56541[(0)] = cljs$core$async$mix_$_state_machine__55397__auto__);

(statearr_56541[(1)] = (1));

return statearr_56541;
});
var cljs$core$async$mix_$_state_machine__55397__auto____1 = (function (state_56485){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_56485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e56542){if((e56542 instanceof Object)){
var ex__55400__auto__ = e56542;
var statearr_56543_56592 = state_56485;
(statearr_56543_56592[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56593 = state_56485;
state_56485 = G__56593;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55397__auto__ = function(state_56485){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55397__auto____1.call(this,state_56485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55397__auto____0;
cljs$core$async$mix_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55397__auto____1;
return cljs$core$async$mix_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___56545,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__55488__auto__ = (function (){var statearr_56544 = f__55487__auto__.call(null);
(statearr_56544[(6)] = c__55486__auto___56545);

return statearr_56544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___56545,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__56595 = arguments.length;
switch (G__56595) {
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
var G__56599 = arguments.length;
switch (G__56599) {
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
return (function (p1__56597_SHARP_){
if(cljs.core.truth_(p1__56597_SHARP_.call(null,topic))){
return p1__56597_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__56597_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__49521__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async56600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56600 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56601){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56601 = meta56601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_56602,meta56601__$1){
var self__ = this;
var _56602__$1 = this;
return (new cljs.core.async.t_cljs$core$async56600(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56601__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_56602){
var self__ = this;
var _56602__$1 = this;
return self__.meta56601;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56600.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56601","meta56601",1039568511,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56600";

cljs.core.async.t_cljs$core$async56600.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async56600");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async56600 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async56600(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56601){
return (new cljs.core.async.t_cljs$core$async56600(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56601));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async56600(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55486__auto___56720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___56720,mults,ensure_mult,p){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___56720,mults,ensure_mult,p){
return (function (state_56674){
var state_val_56675 = (state_56674[(1)]);
if((state_val_56675 === (7))){
var inst_56670 = (state_56674[(2)]);
var state_56674__$1 = state_56674;
var statearr_56676_56721 = state_56674__$1;
(statearr_56676_56721[(2)] = inst_56670);

(statearr_56676_56721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (20))){
var state_56674__$1 = state_56674;
var statearr_56677_56722 = state_56674__$1;
(statearr_56677_56722[(2)] = null);

(statearr_56677_56722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (1))){
var state_56674__$1 = state_56674;
var statearr_56678_56723 = state_56674__$1;
(statearr_56678_56723[(2)] = null);

(statearr_56678_56723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (24))){
var inst_56653 = (state_56674[(7)]);
var inst_56662 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_56653);
var state_56674__$1 = state_56674;
var statearr_56679_56724 = state_56674__$1;
(statearr_56679_56724[(2)] = inst_56662);

(statearr_56679_56724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (4))){
var inst_56605 = (state_56674[(8)]);
var inst_56605__$1 = (state_56674[(2)]);
var inst_56606 = (inst_56605__$1 == null);
var state_56674__$1 = (function (){var statearr_56680 = state_56674;
(statearr_56680[(8)] = inst_56605__$1);

return statearr_56680;
})();
if(cljs.core.truth_(inst_56606)){
var statearr_56681_56725 = state_56674__$1;
(statearr_56681_56725[(1)] = (5));

} else {
var statearr_56682_56726 = state_56674__$1;
(statearr_56682_56726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (15))){
var inst_56647 = (state_56674[(2)]);
var state_56674__$1 = state_56674;
var statearr_56683_56727 = state_56674__$1;
(statearr_56683_56727[(2)] = inst_56647);

(statearr_56683_56727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (21))){
var inst_56667 = (state_56674[(2)]);
var state_56674__$1 = (function (){var statearr_56684 = state_56674;
(statearr_56684[(9)] = inst_56667);

return statearr_56684;
})();
var statearr_56685_56728 = state_56674__$1;
(statearr_56685_56728[(2)] = null);

(statearr_56685_56728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (13))){
var inst_56629 = (state_56674[(10)]);
var inst_56631 = cljs.core.chunked_seq_QMARK_.call(null,inst_56629);
var state_56674__$1 = state_56674;
if(inst_56631){
var statearr_56686_56729 = state_56674__$1;
(statearr_56686_56729[(1)] = (16));

} else {
var statearr_56687_56730 = state_56674__$1;
(statearr_56687_56730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (22))){
var inst_56659 = (state_56674[(2)]);
var state_56674__$1 = state_56674;
if(cljs.core.truth_(inst_56659)){
var statearr_56688_56731 = state_56674__$1;
(statearr_56688_56731[(1)] = (23));

} else {
var statearr_56689_56732 = state_56674__$1;
(statearr_56689_56732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (6))){
var inst_56605 = (state_56674[(8)]);
var inst_56653 = (state_56674[(7)]);
var inst_56655 = (state_56674[(11)]);
var inst_56653__$1 = topic_fn.call(null,inst_56605);
var inst_56654 = cljs.core.deref.call(null,mults);
var inst_56655__$1 = cljs.core.get.call(null,inst_56654,inst_56653__$1);
var state_56674__$1 = (function (){var statearr_56690 = state_56674;
(statearr_56690[(7)] = inst_56653__$1);

(statearr_56690[(11)] = inst_56655__$1);

return statearr_56690;
})();
if(cljs.core.truth_(inst_56655__$1)){
var statearr_56691_56733 = state_56674__$1;
(statearr_56691_56733[(1)] = (19));

} else {
var statearr_56692_56734 = state_56674__$1;
(statearr_56692_56734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (25))){
var inst_56664 = (state_56674[(2)]);
var state_56674__$1 = state_56674;
var statearr_56693_56735 = state_56674__$1;
(statearr_56693_56735[(2)] = inst_56664);

(statearr_56693_56735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (17))){
var inst_56629 = (state_56674[(10)]);
var inst_56638 = cljs.core.first.call(null,inst_56629);
var inst_56639 = cljs.core.async.muxch_STAR_.call(null,inst_56638);
var inst_56640 = cljs.core.async.close_BANG_.call(null,inst_56639);
var inst_56641 = cljs.core.next.call(null,inst_56629);
var inst_56615 = inst_56641;
var inst_56616 = null;
var inst_56617 = (0);
var inst_56618 = (0);
var state_56674__$1 = (function (){var statearr_56694 = state_56674;
(statearr_56694[(12)] = inst_56616);

(statearr_56694[(13)] = inst_56618);

(statearr_56694[(14)] = inst_56615);

(statearr_56694[(15)] = inst_56640);

(statearr_56694[(16)] = inst_56617);

return statearr_56694;
})();
var statearr_56695_56736 = state_56674__$1;
(statearr_56695_56736[(2)] = null);

(statearr_56695_56736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (3))){
var inst_56672 = (state_56674[(2)]);
var state_56674__$1 = state_56674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56674__$1,inst_56672);
} else {
if((state_val_56675 === (12))){
var inst_56649 = (state_56674[(2)]);
var state_56674__$1 = state_56674;
var statearr_56696_56737 = state_56674__$1;
(statearr_56696_56737[(2)] = inst_56649);

(statearr_56696_56737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (2))){
var state_56674__$1 = state_56674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56674__$1,(4),ch);
} else {
if((state_val_56675 === (23))){
var state_56674__$1 = state_56674;
var statearr_56697_56738 = state_56674__$1;
(statearr_56697_56738[(2)] = null);

(statearr_56697_56738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (19))){
var inst_56605 = (state_56674[(8)]);
var inst_56655 = (state_56674[(11)]);
var inst_56657 = cljs.core.async.muxch_STAR_.call(null,inst_56655);
var state_56674__$1 = state_56674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56674__$1,(22),inst_56657,inst_56605);
} else {
if((state_val_56675 === (11))){
var inst_56629 = (state_56674[(10)]);
var inst_56615 = (state_56674[(14)]);
var inst_56629__$1 = cljs.core.seq.call(null,inst_56615);
var state_56674__$1 = (function (){var statearr_56698 = state_56674;
(statearr_56698[(10)] = inst_56629__$1);

return statearr_56698;
})();
if(inst_56629__$1){
var statearr_56699_56739 = state_56674__$1;
(statearr_56699_56739[(1)] = (13));

} else {
var statearr_56700_56740 = state_56674__$1;
(statearr_56700_56740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (9))){
var inst_56651 = (state_56674[(2)]);
var state_56674__$1 = state_56674;
var statearr_56701_56741 = state_56674__$1;
(statearr_56701_56741[(2)] = inst_56651);

(statearr_56701_56741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (5))){
var inst_56612 = cljs.core.deref.call(null,mults);
var inst_56613 = cljs.core.vals.call(null,inst_56612);
var inst_56614 = cljs.core.seq.call(null,inst_56613);
var inst_56615 = inst_56614;
var inst_56616 = null;
var inst_56617 = (0);
var inst_56618 = (0);
var state_56674__$1 = (function (){var statearr_56702 = state_56674;
(statearr_56702[(12)] = inst_56616);

(statearr_56702[(13)] = inst_56618);

(statearr_56702[(14)] = inst_56615);

(statearr_56702[(16)] = inst_56617);

return statearr_56702;
})();
var statearr_56703_56742 = state_56674__$1;
(statearr_56703_56742[(2)] = null);

(statearr_56703_56742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (14))){
var state_56674__$1 = state_56674;
var statearr_56707_56743 = state_56674__$1;
(statearr_56707_56743[(2)] = null);

(statearr_56707_56743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (16))){
var inst_56629 = (state_56674[(10)]);
var inst_56633 = cljs.core.chunk_first.call(null,inst_56629);
var inst_56634 = cljs.core.chunk_rest.call(null,inst_56629);
var inst_56635 = cljs.core.count.call(null,inst_56633);
var inst_56615 = inst_56634;
var inst_56616 = inst_56633;
var inst_56617 = inst_56635;
var inst_56618 = (0);
var state_56674__$1 = (function (){var statearr_56708 = state_56674;
(statearr_56708[(12)] = inst_56616);

(statearr_56708[(13)] = inst_56618);

(statearr_56708[(14)] = inst_56615);

(statearr_56708[(16)] = inst_56617);

return statearr_56708;
})();
var statearr_56709_56744 = state_56674__$1;
(statearr_56709_56744[(2)] = null);

(statearr_56709_56744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (10))){
var inst_56616 = (state_56674[(12)]);
var inst_56618 = (state_56674[(13)]);
var inst_56615 = (state_56674[(14)]);
var inst_56617 = (state_56674[(16)]);
var inst_56623 = cljs.core._nth.call(null,inst_56616,inst_56618);
var inst_56624 = cljs.core.async.muxch_STAR_.call(null,inst_56623);
var inst_56625 = cljs.core.async.close_BANG_.call(null,inst_56624);
var inst_56626 = (inst_56618 + (1));
var tmp56704 = inst_56616;
var tmp56705 = inst_56615;
var tmp56706 = inst_56617;
var inst_56615__$1 = tmp56705;
var inst_56616__$1 = tmp56704;
var inst_56617__$1 = tmp56706;
var inst_56618__$1 = inst_56626;
var state_56674__$1 = (function (){var statearr_56710 = state_56674;
(statearr_56710[(12)] = inst_56616__$1);

(statearr_56710[(13)] = inst_56618__$1);

(statearr_56710[(17)] = inst_56625);

(statearr_56710[(14)] = inst_56615__$1);

(statearr_56710[(16)] = inst_56617__$1);

return statearr_56710;
})();
var statearr_56711_56745 = state_56674__$1;
(statearr_56711_56745[(2)] = null);

(statearr_56711_56745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (18))){
var inst_56644 = (state_56674[(2)]);
var state_56674__$1 = state_56674;
var statearr_56712_56746 = state_56674__$1;
(statearr_56712_56746[(2)] = inst_56644);

(statearr_56712_56746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56675 === (8))){
var inst_56618 = (state_56674[(13)]);
var inst_56617 = (state_56674[(16)]);
var inst_56620 = (inst_56618 < inst_56617);
var inst_56621 = inst_56620;
var state_56674__$1 = state_56674;
if(cljs.core.truth_(inst_56621)){
var statearr_56713_56747 = state_56674__$1;
(statearr_56713_56747[(1)] = (10));

} else {
var statearr_56714_56748 = state_56674__$1;
(statearr_56714_56748[(1)] = (11));

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
});})(c__55486__auto___56720,mults,ensure_mult,p))
;
return ((function (switch__55396__auto__,c__55486__auto___56720,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_56715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56715[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_56715[(1)] = (1));

return statearr_56715;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_56674){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_56674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e56716){if((e56716 instanceof Object)){
var ex__55400__auto__ = e56716;
var statearr_56717_56749 = state_56674;
(statearr_56717_56749[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56750 = state_56674;
state_56674 = G__56750;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_56674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_56674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___56720,mults,ensure_mult,p))
})();
var state__55488__auto__ = (function (){var statearr_56718 = f__55487__auto__.call(null);
(statearr_56718[(6)] = c__55486__auto___56720);

return statearr_56718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___56720,mults,ensure_mult,p))
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
var G__56752 = arguments.length;
switch (G__56752) {
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
var G__56755 = arguments.length;
switch (G__56755) {
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
var G__56758 = arguments.length;
switch (G__56758) {
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
var c__55486__auto___56825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___56825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___56825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_56797){
var state_val_56798 = (state_56797[(1)]);
if((state_val_56798 === (7))){
var state_56797__$1 = state_56797;
var statearr_56799_56826 = state_56797__$1;
(statearr_56799_56826[(2)] = null);

(statearr_56799_56826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (1))){
var state_56797__$1 = state_56797;
var statearr_56800_56827 = state_56797__$1;
(statearr_56800_56827[(2)] = null);

(statearr_56800_56827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (4))){
var inst_56761 = (state_56797[(7)]);
var inst_56763 = (inst_56761 < cnt);
var state_56797__$1 = state_56797;
if(cljs.core.truth_(inst_56763)){
var statearr_56801_56828 = state_56797__$1;
(statearr_56801_56828[(1)] = (6));

} else {
var statearr_56802_56829 = state_56797__$1;
(statearr_56802_56829[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (15))){
var inst_56793 = (state_56797[(2)]);
var state_56797__$1 = state_56797;
var statearr_56803_56830 = state_56797__$1;
(statearr_56803_56830[(2)] = inst_56793);

(statearr_56803_56830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (13))){
var inst_56786 = cljs.core.async.close_BANG_.call(null,out);
var state_56797__$1 = state_56797;
var statearr_56804_56831 = state_56797__$1;
(statearr_56804_56831[(2)] = inst_56786);

(statearr_56804_56831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (6))){
var state_56797__$1 = state_56797;
var statearr_56805_56832 = state_56797__$1;
(statearr_56805_56832[(2)] = null);

(statearr_56805_56832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (3))){
var inst_56795 = (state_56797[(2)]);
var state_56797__$1 = state_56797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56797__$1,inst_56795);
} else {
if((state_val_56798 === (12))){
var inst_56783 = (state_56797[(8)]);
var inst_56783__$1 = (state_56797[(2)]);
var inst_56784 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_56783__$1);
var state_56797__$1 = (function (){var statearr_56806 = state_56797;
(statearr_56806[(8)] = inst_56783__$1);

return statearr_56806;
})();
if(cljs.core.truth_(inst_56784)){
var statearr_56807_56833 = state_56797__$1;
(statearr_56807_56833[(1)] = (13));

} else {
var statearr_56808_56834 = state_56797__$1;
(statearr_56808_56834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (2))){
var inst_56760 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_56761 = (0);
var state_56797__$1 = (function (){var statearr_56809 = state_56797;
(statearr_56809[(9)] = inst_56760);

(statearr_56809[(7)] = inst_56761);

return statearr_56809;
})();
var statearr_56810_56835 = state_56797__$1;
(statearr_56810_56835[(2)] = null);

(statearr_56810_56835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (11))){
var inst_56761 = (state_56797[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56797,(10),Object,null,(9));
var inst_56770 = chs__$1.call(null,inst_56761);
var inst_56771 = done.call(null,inst_56761);
var inst_56772 = cljs.core.async.take_BANG_.call(null,inst_56770,inst_56771);
var state_56797__$1 = state_56797;
var statearr_56811_56836 = state_56797__$1;
(statearr_56811_56836[(2)] = inst_56772);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (9))){
var inst_56761 = (state_56797[(7)]);
var inst_56774 = (state_56797[(2)]);
var inst_56775 = (inst_56761 + (1));
var inst_56761__$1 = inst_56775;
var state_56797__$1 = (function (){var statearr_56812 = state_56797;
(statearr_56812[(10)] = inst_56774);

(statearr_56812[(7)] = inst_56761__$1);

return statearr_56812;
})();
var statearr_56813_56837 = state_56797__$1;
(statearr_56813_56837[(2)] = null);

(statearr_56813_56837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (5))){
var inst_56781 = (state_56797[(2)]);
var state_56797__$1 = (function (){var statearr_56814 = state_56797;
(statearr_56814[(11)] = inst_56781);

return statearr_56814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56797__$1,(12),dchan);
} else {
if((state_val_56798 === (14))){
var inst_56783 = (state_56797[(8)]);
var inst_56788 = cljs.core.apply.call(null,f,inst_56783);
var state_56797__$1 = state_56797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56797__$1,(16),out,inst_56788);
} else {
if((state_val_56798 === (16))){
var inst_56790 = (state_56797[(2)]);
var state_56797__$1 = (function (){var statearr_56815 = state_56797;
(statearr_56815[(12)] = inst_56790);

return statearr_56815;
})();
var statearr_56816_56838 = state_56797__$1;
(statearr_56816_56838[(2)] = null);

(statearr_56816_56838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (10))){
var inst_56765 = (state_56797[(2)]);
var inst_56766 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_56797__$1 = (function (){var statearr_56817 = state_56797;
(statearr_56817[(13)] = inst_56765);

return statearr_56817;
})();
var statearr_56818_56839 = state_56797__$1;
(statearr_56818_56839[(2)] = inst_56766);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56798 === (8))){
var inst_56779 = (state_56797[(2)]);
var state_56797__$1 = state_56797;
var statearr_56819_56840 = state_56797__$1;
(statearr_56819_56840[(2)] = inst_56779);

(statearr_56819_56840[(1)] = (5));


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
});})(c__55486__auto___56825,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__55396__auto__,c__55486__auto___56825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_56820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56820[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_56820[(1)] = (1));

return statearr_56820;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_56797){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_56797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e56821){if((e56821 instanceof Object)){
var ex__55400__auto__ = e56821;
var statearr_56822_56841 = state_56797;
(statearr_56822_56841[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56842 = state_56797;
state_56797 = G__56842;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_56797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_56797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___56825,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__55488__auto__ = (function (){var statearr_56823 = f__55487__auto__.call(null);
(statearr_56823[(6)] = c__55486__auto___56825);

return statearr_56823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___56825,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__56845 = arguments.length;
switch (G__56845) {
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
var c__55486__auto___56899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___56899,out){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___56899,out){
return (function (state_56877){
var state_val_56878 = (state_56877[(1)]);
if((state_val_56878 === (7))){
var inst_56856 = (state_56877[(7)]);
var inst_56857 = (state_56877[(8)]);
var inst_56856__$1 = (state_56877[(2)]);
var inst_56857__$1 = cljs.core.nth.call(null,inst_56856__$1,(0),null);
var inst_56858 = cljs.core.nth.call(null,inst_56856__$1,(1),null);
var inst_56859 = (inst_56857__$1 == null);
var state_56877__$1 = (function (){var statearr_56879 = state_56877;
(statearr_56879[(9)] = inst_56858);

(statearr_56879[(7)] = inst_56856__$1);

(statearr_56879[(8)] = inst_56857__$1);

return statearr_56879;
})();
if(cljs.core.truth_(inst_56859)){
var statearr_56880_56900 = state_56877__$1;
(statearr_56880_56900[(1)] = (8));

} else {
var statearr_56881_56901 = state_56877__$1;
(statearr_56881_56901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56878 === (1))){
var inst_56846 = cljs.core.vec.call(null,chs);
var inst_56847 = inst_56846;
var state_56877__$1 = (function (){var statearr_56882 = state_56877;
(statearr_56882[(10)] = inst_56847);

return statearr_56882;
})();
var statearr_56883_56902 = state_56877__$1;
(statearr_56883_56902[(2)] = null);

(statearr_56883_56902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56878 === (4))){
var inst_56847 = (state_56877[(10)]);
var state_56877__$1 = state_56877;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56877__$1,(7),inst_56847);
} else {
if((state_val_56878 === (6))){
var inst_56873 = (state_56877[(2)]);
var state_56877__$1 = state_56877;
var statearr_56884_56903 = state_56877__$1;
(statearr_56884_56903[(2)] = inst_56873);

(statearr_56884_56903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56878 === (3))){
var inst_56875 = (state_56877[(2)]);
var state_56877__$1 = state_56877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56877__$1,inst_56875);
} else {
if((state_val_56878 === (2))){
var inst_56847 = (state_56877[(10)]);
var inst_56849 = cljs.core.count.call(null,inst_56847);
var inst_56850 = (inst_56849 > (0));
var state_56877__$1 = state_56877;
if(cljs.core.truth_(inst_56850)){
var statearr_56886_56904 = state_56877__$1;
(statearr_56886_56904[(1)] = (4));

} else {
var statearr_56887_56905 = state_56877__$1;
(statearr_56887_56905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56878 === (11))){
var inst_56847 = (state_56877[(10)]);
var inst_56866 = (state_56877[(2)]);
var tmp56885 = inst_56847;
var inst_56847__$1 = tmp56885;
var state_56877__$1 = (function (){var statearr_56888 = state_56877;
(statearr_56888[(11)] = inst_56866);

(statearr_56888[(10)] = inst_56847__$1);

return statearr_56888;
})();
var statearr_56889_56906 = state_56877__$1;
(statearr_56889_56906[(2)] = null);

(statearr_56889_56906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56878 === (9))){
var inst_56857 = (state_56877[(8)]);
var state_56877__$1 = state_56877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56877__$1,(11),out,inst_56857);
} else {
if((state_val_56878 === (5))){
var inst_56871 = cljs.core.async.close_BANG_.call(null,out);
var state_56877__$1 = state_56877;
var statearr_56890_56907 = state_56877__$1;
(statearr_56890_56907[(2)] = inst_56871);

(statearr_56890_56907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56878 === (10))){
var inst_56869 = (state_56877[(2)]);
var state_56877__$1 = state_56877;
var statearr_56891_56908 = state_56877__$1;
(statearr_56891_56908[(2)] = inst_56869);

(statearr_56891_56908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56878 === (8))){
var inst_56858 = (state_56877[(9)]);
var inst_56856 = (state_56877[(7)]);
var inst_56857 = (state_56877[(8)]);
var inst_56847 = (state_56877[(10)]);
var inst_56861 = (function (){var cs = inst_56847;
var vec__56852 = inst_56856;
var v = inst_56857;
var c = inst_56858;
return ((function (cs,vec__56852,v,c,inst_56858,inst_56856,inst_56857,inst_56847,state_val_56878,c__55486__auto___56899,out){
return (function (p1__56843_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__56843_SHARP_);
});
;})(cs,vec__56852,v,c,inst_56858,inst_56856,inst_56857,inst_56847,state_val_56878,c__55486__auto___56899,out))
})();
var inst_56862 = cljs.core.filterv.call(null,inst_56861,inst_56847);
var inst_56847__$1 = inst_56862;
var state_56877__$1 = (function (){var statearr_56892 = state_56877;
(statearr_56892[(10)] = inst_56847__$1);

return statearr_56892;
})();
var statearr_56893_56909 = state_56877__$1;
(statearr_56893_56909[(2)] = null);

(statearr_56893_56909[(1)] = (2));


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
});})(c__55486__auto___56899,out))
;
return ((function (switch__55396__auto__,c__55486__auto___56899,out){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_56894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56894[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_56894[(1)] = (1));

return statearr_56894;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_56877){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_56877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e56895){if((e56895 instanceof Object)){
var ex__55400__auto__ = e56895;
var statearr_56896_56910 = state_56877;
(statearr_56896_56910[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56911 = state_56877;
state_56877 = G__56911;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_56877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_56877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___56899,out))
})();
var state__55488__auto__ = (function (){var statearr_56897 = f__55487__auto__.call(null);
(statearr_56897[(6)] = c__55486__auto___56899);

return statearr_56897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___56899,out))
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
var G__56913 = arguments.length;
switch (G__56913) {
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
var c__55486__auto___56958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___56958,out){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___56958,out){
return (function (state_56937){
var state_val_56938 = (state_56937[(1)]);
if((state_val_56938 === (7))){
var inst_56919 = (state_56937[(7)]);
var inst_56919__$1 = (state_56937[(2)]);
var inst_56920 = (inst_56919__$1 == null);
var inst_56921 = cljs.core.not.call(null,inst_56920);
var state_56937__$1 = (function (){var statearr_56939 = state_56937;
(statearr_56939[(7)] = inst_56919__$1);

return statearr_56939;
})();
if(inst_56921){
var statearr_56940_56959 = state_56937__$1;
(statearr_56940_56959[(1)] = (8));

} else {
var statearr_56941_56960 = state_56937__$1;
(statearr_56941_56960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56938 === (1))){
var inst_56914 = (0);
var state_56937__$1 = (function (){var statearr_56942 = state_56937;
(statearr_56942[(8)] = inst_56914);

return statearr_56942;
})();
var statearr_56943_56961 = state_56937__$1;
(statearr_56943_56961[(2)] = null);

(statearr_56943_56961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56938 === (4))){
var state_56937__$1 = state_56937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56937__$1,(7),ch);
} else {
if((state_val_56938 === (6))){
var inst_56932 = (state_56937[(2)]);
var state_56937__$1 = state_56937;
var statearr_56944_56962 = state_56937__$1;
(statearr_56944_56962[(2)] = inst_56932);

(statearr_56944_56962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56938 === (3))){
var inst_56934 = (state_56937[(2)]);
var inst_56935 = cljs.core.async.close_BANG_.call(null,out);
var state_56937__$1 = (function (){var statearr_56945 = state_56937;
(statearr_56945[(9)] = inst_56934);

return statearr_56945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56937__$1,inst_56935);
} else {
if((state_val_56938 === (2))){
var inst_56914 = (state_56937[(8)]);
var inst_56916 = (inst_56914 < n);
var state_56937__$1 = state_56937;
if(cljs.core.truth_(inst_56916)){
var statearr_56946_56963 = state_56937__$1;
(statearr_56946_56963[(1)] = (4));

} else {
var statearr_56947_56964 = state_56937__$1;
(statearr_56947_56964[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56938 === (11))){
var inst_56914 = (state_56937[(8)]);
var inst_56924 = (state_56937[(2)]);
var inst_56925 = (inst_56914 + (1));
var inst_56914__$1 = inst_56925;
var state_56937__$1 = (function (){var statearr_56948 = state_56937;
(statearr_56948[(10)] = inst_56924);

(statearr_56948[(8)] = inst_56914__$1);

return statearr_56948;
})();
var statearr_56949_56965 = state_56937__$1;
(statearr_56949_56965[(2)] = null);

(statearr_56949_56965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56938 === (9))){
var state_56937__$1 = state_56937;
var statearr_56950_56966 = state_56937__$1;
(statearr_56950_56966[(2)] = null);

(statearr_56950_56966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56938 === (5))){
var state_56937__$1 = state_56937;
var statearr_56951_56967 = state_56937__$1;
(statearr_56951_56967[(2)] = null);

(statearr_56951_56967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56938 === (10))){
var inst_56929 = (state_56937[(2)]);
var state_56937__$1 = state_56937;
var statearr_56952_56968 = state_56937__$1;
(statearr_56952_56968[(2)] = inst_56929);

(statearr_56952_56968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56938 === (8))){
var inst_56919 = (state_56937[(7)]);
var state_56937__$1 = state_56937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56937__$1,(11),out,inst_56919);
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
});})(c__55486__auto___56958,out))
;
return ((function (switch__55396__auto__,c__55486__auto___56958,out){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_56953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56953[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_56953[(1)] = (1));

return statearr_56953;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_56937){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_56937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e56954){if((e56954 instanceof Object)){
var ex__55400__auto__ = e56954;
var statearr_56955_56969 = state_56937;
(statearr_56955_56969[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56970 = state_56937;
state_56937 = G__56970;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_56937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_56937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___56958,out))
})();
var state__55488__auto__ = (function (){var statearr_56956 = f__55487__auto__.call(null);
(statearr_56956[(6)] = c__55486__auto___56958);

return statearr_56956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___56958,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async56972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56972 = (function (f,ch,meta56973){
this.f = f;
this.ch = ch;
this.meta56973 = meta56973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56974,meta56973__$1){
var self__ = this;
var _56974__$1 = this;
return (new cljs.core.async.t_cljs$core$async56972(self__.f,self__.ch,meta56973__$1));
});

cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56974){
var self__ = this;
var _56974__$1 = this;
return self__.meta56973;
});

cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async56975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56975 = (function (f,ch,meta56973,_,fn1,meta56976){
this.f = f;
this.ch = ch;
this.meta56973 = meta56973;
this._ = _;
this.fn1 = fn1;
this.meta56976 = meta56976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_56977,meta56976__$1){
var self__ = this;
var _56977__$1 = this;
return (new cljs.core.async.t_cljs$core$async56975(self__.f,self__.ch,self__.meta56973,self__._,self__.fn1,meta56976__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async56975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_56977){
var self__ = this;
var _56977__$1 = this;
return self__.meta56976;
});})(___$1))
;

cljs.core.async.t_cljs$core$async56975.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async56975.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async56975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__56971_SHARP_){
return f1.call(null,(((p1__56971_SHARP_ == null))?null:self__.f.call(null,p1__56971_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async56975.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56973","meta56973",-1250554305,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async56972","cljs.core.async/t_cljs$core$async56972",620394020,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta56976","meta56976",-374196867,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async56975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56975";

cljs.core.async.t_cljs$core$async56975.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async56975");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async56975 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56975(f__$1,ch__$1,meta56973__$1,___$2,fn1__$1,meta56976){
return (new cljs.core.async.t_cljs$core$async56975(f__$1,ch__$1,meta56973__$1,___$2,fn1__$1,meta56976));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async56975(self__.f,self__.ch,self__.meta56973,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async56972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56973","meta56973",-1250554305,null)], null);
});

cljs.core.async.t_cljs$core$async56972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56972";

cljs.core.async.t_cljs$core$async56972.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async56972");
});

cljs.core.async.__GT_t_cljs$core$async56972 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56972(f__$1,ch__$1,meta56973){
return (new cljs.core.async.t_cljs$core$async56972(f__$1,ch__$1,meta56973));
});

}

return (new cljs.core.async.t_cljs$core$async56972(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async56978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56978 = (function (f,ch,meta56979){
this.f = f;
this.ch = ch;
this.meta56979 = meta56979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56980,meta56979__$1){
var self__ = this;
var _56980__$1 = this;
return (new cljs.core.async.t_cljs$core$async56978(self__.f,self__.ch,meta56979__$1));
});

cljs.core.async.t_cljs$core$async56978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56980){
var self__ = this;
var _56980__$1 = this;
return self__.meta56979;
});

cljs.core.async.t_cljs$core$async56978.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56978.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async56978.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async56978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56979","meta56979",-1393485803,null)], null);
});

cljs.core.async.t_cljs$core$async56978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56978";

cljs.core.async.t_cljs$core$async56978.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async56978");
});

cljs.core.async.__GT_t_cljs$core$async56978 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async56978(f__$1,ch__$1,meta56979){
return (new cljs.core.async.t_cljs$core$async56978(f__$1,ch__$1,meta56979));
});

}

return (new cljs.core.async.t_cljs$core$async56978(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async56981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56981 = (function (p,ch,meta56982){
this.p = p;
this.ch = ch;
this.meta56982 = meta56982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56983,meta56982__$1){
var self__ = this;
var _56983__$1 = this;
return (new cljs.core.async.t_cljs$core$async56981(self__.p,self__.ch,meta56982__$1));
});

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56983){
var self__ = this;
var _56983__$1 = this;
return self__.meta56982;
});

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async56981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56982","meta56982",-1093979464,null)], null);
});

cljs.core.async.t_cljs$core$async56981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56981";

cljs.core.async.t_cljs$core$async56981.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async56981");
});

cljs.core.async.__GT_t_cljs$core$async56981 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async56981(p__$1,ch__$1,meta56982){
return (new cljs.core.async.t_cljs$core$async56981(p__$1,ch__$1,meta56982));
});

}

return (new cljs.core.async.t_cljs$core$async56981(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56985 = arguments.length;
switch (G__56985) {
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
var c__55486__auto___57025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___57025,out){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___57025,out){
return (function (state_57006){
var state_val_57007 = (state_57006[(1)]);
if((state_val_57007 === (7))){
var inst_57002 = (state_57006[(2)]);
var state_57006__$1 = state_57006;
var statearr_57008_57026 = state_57006__$1;
(statearr_57008_57026[(2)] = inst_57002);

(statearr_57008_57026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57007 === (1))){
var state_57006__$1 = state_57006;
var statearr_57009_57027 = state_57006__$1;
(statearr_57009_57027[(2)] = null);

(statearr_57009_57027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57007 === (4))){
var inst_56988 = (state_57006[(7)]);
var inst_56988__$1 = (state_57006[(2)]);
var inst_56989 = (inst_56988__$1 == null);
var state_57006__$1 = (function (){var statearr_57010 = state_57006;
(statearr_57010[(7)] = inst_56988__$1);

return statearr_57010;
})();
if(cljs.core.truth_(inst_56989)){
var statearr_57011_57028 = state_57006__$1;
(statearr_57011_57028[(1)] = (5));

} else {
var statearr_57012_57029 = state_57006__$1;
(statearr_57012_57029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57007 === (6))){
var inst_56988 = (state_57006[(7)]);
var inst_56993 = p.call(null,inst_56988);
var state_57006__$1 = state_57006;
if(cljs.core.truth_(inst_56993)){
var statearr_57013_57030 = state_57006__$1;
(statearr_57013_57030[(1)] = (8));

} else {
var statearr_57014_57031 = state_57006__$1;
(statearr_57014_57031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57007 === (3))){
var inst_57004 = (state_57006[(2)]);
var state_57006__$1 = state_57006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57006__$1,inst_57004);
} else {
if((state_val_57007 === (2))){
var state_57006__$1 = state_57006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57006__$1,(4),ch);
} else {
if((state_val_57007 === (11))){
var inst_56996 = (state_57006[(2)]);
var state_57006__$1 = state_57006;
var statearr_57015_57032 = state_57006__$1;
(statearr_57015_57032[(2)] = inst_56996);

(statearr_57015_57032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57007 === (9))){
var state_57006__$1 = state_57006;
var statearr_57016_57033 = state_57006__$1;
(statearr_57016_57033[(2)] = null);

(statearr_57016_57033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57007 === (5))){
var inst_56991 = cljs.core.async.close_BANG_.call(null,out);
var state_57006__$1 = state_57006;
var statearr_57017_57034 = state_57006__$1;
(statearr_57017_57034[(2)] = inst_56991);

(statearr_57017_57034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57007 === (10))){
var inst_56999 = (state_57006[(2)]);
var state_57006__$1 = (function (){var statearr_57018 = state_57006;
(statearr_57018[(8)] = inst_56999);

return statearr_57018;
})();
var statearr_57019_57035 = state_57006__$1;
(statearr_57019_57035[(2)] = null);

(statearr_57019_57035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57007 === (8))){
var inst_56988 = (state_57006[(7)]);
var state_57006__$1 = state_57006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57006__$1,(11),out,inst_56988);
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
});})(c__55486__auto___57025,out))
;
return ((function (switch__55396__auto__,c__55486__auto___57025,out){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_57020 = [null,null,null,null,null,null,null,null,null];
(statearr_57020[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_57020[(1)] = (1));

return statearr_57020;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_57006){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_57006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e57021){if((e57021 instanceof Object)){
var ex__55400__auto__ = e57021;
var statearr_57022_57036 = state_57006;
(statearr_57022_57036[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57037 = state_57006;
state_57006 = G__57037;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_57006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_57006);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___57025,out))
})();
var state__55488__auto__ = (function (){var statearr_57023 = f__55487__auto__.call(null);
(statearr_57023[(6)] = c__55486__auto___57025);

return statearr_57023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___57025,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57039 = arguments.length;
switch (G__57039) {
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
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__){
return (function (state_57102){
var state_val_57103 = (state_57102[(1)]);
if((state_val_57103 === (7))){
var inst_57098 = (state_57102[(2)]);
var state_57102__$1 = state_57102;
var statearr_57104_57142 = state_57102__$1;
(statearr_57104_57142[(2)] = inst_57098);

(statearr_57104_57142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (20))){
var inst_57068 = (state_57102[(7)]);
var inst_57079 = (state_57102[(2)]);
var inst_57080 = cljs.core.next.call(null,inst_57068);
var inst_57054 = inst_57080;
var inst_57055 = null;
var inst_57056 = (0);
var inst_57057 = (0);
var state_57102__$1 = (function (){var statearr_57105 = state_57102;
(statearr_57105[(8)] = inst_57055);

(statearr_57105[(9)] = inst_57054);

(statearr_57105[(10)] = inst_57056);

(statearr_57105[(11)] = inst_57057);

(statearr_57105[(12)] = inst_57079);

return statearr_57105;
})();
var statearr_57106_57143 = state_57102__$1;
(statearr_57106_57143[(2)] = null);

(statearr_57106_57143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (1))){
var state_57102__$1 = state_57102;
var statearr_57107_57144 = state_57102__$1;
(statearr_57107_57144[(2)] = null);

(statearr_57107_57144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (4))){
var inst_57043 = (state_57102[(13)]);
var inst_57043__$1 = (state_57102[(2)]);
var inst_57044 = (inst_57043__$1 == null);
var state_57102__$1 = (function (){var statearr_57108 = state_57102;
(statearr_57108[(13)] = inst_57043__$1);

return statearr_57108;
})();
if(cljs.core.truth_(inst_57044)){
var statearr_57109_57145 = state_57102__$1;
(statearr_57109_57145[(1)] = (5));

} else {
var statearr_57110_57146 = state_57102__$1;
(statearr_57110_57146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (15))){
var state_57102__$1 = state_57102;
var statearr_57114_57147 = state_57102__$1;
(statearr_57114_57147[(2)] = null);

(statearr_57114_57147[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (21))){
var state_57102__$1 = state_57102;
var statearr_57115_57148 = state_57102__$1;
(statearr_57115_57148[(2)] = null);

(statearr_57115_57148[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (13))){
var inst_57055 = (state_57102[(8)]);
var inst_57054 = (state_57102[(9)]);
var inst_57056 = (state_57102[(10)]);
var inst_57057 = (state_57102[(11)]);
var inst_57064 = (state_57102[(2)]);
var inst_57065 = (inst_57057 + (1));
var tmp57111 = inst_57055;
var tmp57112 = inst_57054;
var tmp57113 = inst_57056;
var inst_57054__$1 = tmp57112;
var inst_57055__$1 = tmp57111;
var inst_57056__$1 = tmp57113;
var inst_57057__$1 = inst_57065;
var state_57102__$1 = (function (){var statearr_57116 = state_57102;
(statearr_57116[(8)] = inst_57055__$1);

(statearr_57116[(9)] = inst_57054__$1);

(statearr_57116[(10)] = inst_57056__$1);

(statearr_57116[(14)] = inst_57064);

(statearr_57116[(11)] = inst_57057__$1);

return statearr_57116;
})();
var statearr_57117_57149 = state_57102__$1;
(statearr_57117_57149[(2)] = null);

(statearr_57117_57149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (22))){
var state_57102__$1 = state_57102;
var statearr_57118_57150 = state_57102__$1;
(statearr_57118_57150[(2)] = null);

(statearr_57118_57150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (6))){
var inst_57043 = (state_57102[(13)]);
var inst_57052 = f.call(null,inst_57043);
var inst_57053 = cljs.core.seq.call(null,inst_57052);
var inst_57054 = inst_57053;
var inst_57055 = null;
var inst_57056 = (0);
var inst_57057 = (0);
var state_57102__$1 = (function (){var statearr_57119 = state_57102;
(statearr_57119[(8)] = inst_57055);

(statearr_57119[(9)] = inst_57054);

(statearr_57119[(10)] = inst_57056);

(statearr_57119[(11)] = inst_57057);

return statearr_57119;
})();
var statearr_57120_57151 = state_57102__$1;
(statearr_57120_57151[(2)] = null);

(statearr_57120_57151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (17))){
var inst_57068 = (state_57102[(7)]);
var inst_57072 = cljs.core.chunk_first.call(null,inst_57068);
var inst_57073 = cljs.core.chunk_rest.call(null,inst_57068);
var inst_57074 = cljs.core.count.call(null,inst_57072);
var inst_57054 = inst_57073;
var inst_57055 = inst_57072;
var inst_57056 = inst_57074;
var inst_57057 = (0);
var state_57102__$1 = (function (){var statearr_57121 = state_57102;
(statearr_57121[(8)] = inst_57055);

(statearr_57121[(9)] = inst_57054);

(statearr_57121[(10)] = inst_57056);

(statearr_57121[(11)] = inst_57057);

return statearr_57121;
})();
var statearr_57122_57152 = state_57102__$1;
(statearr_57122_57152[(2)] = null);

(statearr_57122_57152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (3))){
var inst_57100 = (state_57102[(2)]);
var state_57102__$1 = state_57102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57102__$1,inst_57100);
} else {
if((state_val_57103 === (12))){
var inst_57088 = (state_57102[(2)]);
var state_57102__$1 = state_57102;
var statearr_57123_57153 = state_57102__$1;
(statearr_57123_57153[(2)] = inst_57088);

(statearr_57123_57153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (2))){
var state_57102__$1 = state_57102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57102__$1,(4),in$);
} else {
if((state_val_57103 === (23))){
var inst_57096 = (state_57102[(2)]);
var state_57102__$1 = state_57102;
var statearr_57124_57154 = state_57102__$1;
(statearr_57124_57154[(2)] = inst_57096);

(statearr_57124_57154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (19))){
var inst_57083 = (state_57102[(2)]);
var state_57102__$1 = state_57102;
var statearr_57125_57155 = state_57102__$1;
(statearr_57125_57155[(2)] = inst_57083);

(statearr_57125_57155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (11))){
var inst_57054 = (state_57102[(9)]);
var inst_57068 = (state_57102[(7)]);
var inst_57068__$1 = cljs.core.seq.call(null,inst_57054);
var state_57102__$1 = (function (){var statearr_57126 = state_57102;
(statearr_57126[(7)] = inst_57068__$1);

return statearr_57126;
})();
if(inst_57068__$1){
var statearr_57127_57156 = state_57102__$1;
(statearr_57127_57156[(1)] = (14));

} else {
var statearr_57128_57157 = state_57102__$1;
(statearr_57128_57157[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (9))){
var inst_57090 = (state_57102[(2)]);
var inst_57091 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_57102__$1 = (function (){var statearr_57129 = state_57102;
(statearr_57129[(15)] = inst_57090);

return statearr_57129;
})();
if(cljs.core.truth_(inst_57091)){
var statearr_57130_57158 = state_57102__$1;
(statearr_57130_57158[(1)] = (21));

} else {
var statearr_57131_57159 = state_57102__$1;
(statearr_57131_57159[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (5))){
var inst_57046 = cljs.core.async.close_BANG_.call(null,out);
var state_57102__$1 = state_57102;
var statearr_57132_57160 = state_57102__$1;
(statearr_57132_57160[(2)] = inst_57046);

(statearr_57132_57160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (14))){
var inst_57068 = (state_57102[(7)]);
var inst_57070 = cljs.core.chunked_seq_QMARK_.call(null,inst_57068);
var state_57102__$1 = state_57102;
if(inst_57070){
var statearr_57133_57161 = state_57102__$1;
(statearr_57133_57161[(1)] = (17));

} else {
var statearr_57134_57162 = state_57102__$1;
(statearr_57134_57162[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (16))){
var inst_57086 = (state_57102[(2)]);
var state_57102__$1 = state_57102;
var statearr_57135_57163 = state_57102__$1;
(statearr_57135_57163[(2)] = inst_57086);

(statearr_57135_57163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57103 === (10))){
var inst_57055 = (state_57102[(8)]);
var inst_57057 = (state_57102[(11)]);
var inst_57062 = cljs.core._nth.call(null,inst_57055,inst_57057);
var state_57102__$1 = state_57102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57102__$1,(13),out,inst_57062);
} else {
if((state_val_57103 === (18))){
var inst_57068 = (state_57102[(7)]);
var inst_57077 = cljs.core.first.call(null,inst_57068);
var state_57102__$1 = state_57102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57102__$1,(20),out,inst_57077);
} else {
if((state_val_57103 === (8))){
var inst_57056 = (state_57102[(10)]);
var inst_57057 = (state_57102[(11)]);
var inst_57059 = (inst_57057 < inst_57056);
var inst_57060 = inst_57059;
var state_57102__$1 = state_57102;
if(cljs.core.truth_(inst_57060)){
var statearr_57136_57164 = state_57102__$1;
(statearr_57136_57164[(1)] = (10));

} else {
var statearr_57137_57165 = state_57102__$1;
(statearr_57137_57165[(1)] = (11));

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
});})(c__55486__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__55397__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55397__auto____0 = (function (){
var statearr_57138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57138[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55397__auto__);

(statearr_57138[(1)] = (1));

return statearr_57138;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55397__auto____1 = (function (state_57102){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_57102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e57139){if((e57139 instanceof Object)){
var ex__55400__auto__ = e57139;
var statearr_57140_57166 = state_57102;
(statearr_57140_57166[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57167 = state_57102;
state_57102 = G__57167;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55397__auto__ = function(state_57102){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55397__auto____1.call(this,state_57102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55397__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55397__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__))
})();
var state__55488__auto__ = (function (){var statearr_57141 = f__55487__auto__.call(null);
(statearr_57141[(6)] = c__55486__auto__);

return statearr_57141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__))
);

return c__55486__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57169 = arguments.length;
switch (G__57169) {
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
var G__57172 = arguments.length;
switch (G__57172) {
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
var G__57175 = arguments.length;
switch (G__57175) {
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
var c__55486__auto___57222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___57222,out){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___57222,out){
return (function (state_57199){
var state_val_57200 = (state_57199[(1)]);
if((state_val_57200 === (7))){
var inst_57194 = (state_57199[(2)]);
var state_57199__$1 = state_57199;
var statearr_57201_57223 = state_57199__$1;
(statearr_57201_57223[(2)] = inst_57194);

(statearr_57201_57223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57200 === (1))){
var inst_57176 = null;
var state_57199__$1 = (function (){var statearr_57202 = state_57199;
(statearr_57202[(7)] = inst_57176);

return statearr_57202;
})();
var statearr_57203_57224 = state_57199__$1;
(statearr_57203_57224[(2)] = null);

(statearr_57203_57224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57200 === (4))){
var inst_57179 = (state_57199[(8)]);
var inst_57179__$1 = (state_57199[(2)]);
var inst_57180 = (inst_57179__$1 == null);
var inst_57181 = cljs.core.not.call(null,inst_57180);
var state_57199__$1 = (function (){var statearr_57204 = state_57199;
(statearr_57204[(8)] = inst_57179__$1);

return statearr_57204;
})();
if(inst_57181){
var statearr_57205_57225 = state_57199__$1;
(statearr_57205_57225[(1)] = (5));

} else {
var statearr_57206_57226 = state_57199__$1;
(statearr_57206_57226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57200 === (6))){
var state_57199__$1 = state_57199;
var statearr_57207_57227 = state_57199__$1;
(statearr_57207_57227[(2)] = null);

(statearr_57207_57227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57200 === (3))){
var inst_57196 = (state_57199[(2)]);
var inst_57197 = cljs.core.async.close_BANG_.call(null,out);
var state_57199__$1 = (function (){var statearr_57208 = state_57199;
(statearr_57208[(9)] = inst_57196);

return statearr_57208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57199__$1,inst_57197);
} else {
if((state_val_57200 === (2))){
var state_57199__$1 = state_57199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57199__$1,(4),ch);
} else {
if((state_val_57200 === (11))){
var inst_57179 = (state_57199[(8)]);
var inst_57188 = (state_57199[(2)]);
var inst_57176 = inst_57179;
var state_57199__$1 = (function (){var statearr_57209 = state_57199;
(statearr_57209[(10)] = inst_57188);

(statearr_57209[(7)] = inst_57176);

return statearr_57209;
})();
var statearr_57210_57228 = state_57199__$1;
(statearr_57210_57228[(2)] = null);

(statearr_57210_57228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57200 === (9))){
var inst_57179 = (state_57199[(8)]);
var state_57199__$1 = state_57199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57199__$1,(11),out,inst_57179);
} else {
if((state_val_57200 === (5))){
var inst_57179 = (state_57199[(8)]);
var inst_57176 = (state_57199[(7)]);
var inst_57183 = cljs.core._EQ_.call(null,inst_57179,inst_57176);
var state_57199__$1 = state_57199;
if(inst_57183){
var statearr_57212_57229 = state_57199__$1;
(statearr_57212_57229[(1)] = (8));

} else {
var statearr_57213_57230 = state_57199__$1;
(statearr_57213_57230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57200 === (10))){
var inst_57191 = (state_57199[(2)]);
var state_57199__$1 = state_57199;
var statearr_57214_57231 = state_57199__$1;
(statearr_57214_57231[(2)] = inst_57191);

(statearr_57214_57231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57200 === (8))){
var inst_57176 = (state_57199[(7)]);
var tmp57211 = inst_57176;
var inst_57176__$1 = tmp57211;
var state_57199__$1 = (function (){var statearr_57215 = state_57199;
(statearr_57215[(7)] = inst_57176__$1);

return statearr_57215;
})();
var statearr_57216_57232 = state_57199__$1;
(statearr_57216_57232[(2)] = null);

(statearr_57216_57232[(1)] = (2));


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
});})(c__55486__auto___57222,out))
;
return ((function (switch__55396__auto__,c__55486__auto___57222,out){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_57217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57217[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_57217[(1)] = (1));

return statearr_57217;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_57199){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_57199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e57218){if((e57218 instanceof Object)){
var ex__55400__auto__ = e57218;
var statearr_57219_57233 = state_57199;
(statearr_57219_57233[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57234 = state_57199;
state_57199 = G__57234;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_57199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_57199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___57222,out))
})();
var state__55488__auto__ = (function (){var statearr_57220 = f__55487__auto__.call(null);
(statearr_57220[(6)] = c__55486__auto___57222);

return statearr_57220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___57222,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57236 = arguments.length;
switch (G__57236) {
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
var c__55486__auto___57302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___57302,out){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___57302,out){
return (function (state_57274){
var state_val_57275 = (state_57274[(1)]);
if((state_val_57275 === (7))){
var inst_57270 = (state_57274[(2)]);
var state_57274__$1 = state_57274;
var statearr_57276_57303 = state_57274__$1;
(statearr_57276_57303[(2)] = inst_57270);

(statearr_57276_57303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (1))){
var inst_57237 = (new Array(n));
var inst_57238 = inst_57237;
var inst_57239 = (0);
var state_57274__$1 = (function (){var statearr_57277 = state_57274;
(statearr_57277[(7)] = inst_57239);

(statearr_57277[(8)] = inst_57238);

return statearr_57277;
})();
var statearr_57278_57304 = state_57274__$1;
(statearr_57278_57304[(2)] = null);

(statearr_57278_57304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (4))){
var inst_57242 = (state_57274[(9)]);
var inst_57242__$1 = (state_57274[(2)]);
var inst_57243 = (inst_57242__$1 == null);
var inst_57244 = cljs.core.not.call(null,inst_57243);
var state_57274__$1 = (function (){var statearr_57279 = state_57274;
(statearr_57279[(9)] = inst_57242__$1);

return statearr_57279;
})();
if(inst_57244){
var statearr_57280_57305 = state_57274__$1;
(statearr_57280_57305[(1)] = (5));

} else {
var statearr_57281_57306 = state_57274__$1;
(statearr_57281_57306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (15))){
var inst_57264 = (state_57274[(2)]);
var state_57274__$1 = state_57274;
var statearr_57282_57307 = state_57274__$1;
(statearr_57282_57307[(2)] = inst_57264);

(statearr_57282_57307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (13))){
var state_57274__$1 = state_57274;
var statearr_57283_57308 = state_57274__$1;
(statearr_57283_57308[(2)] = null);

(statearr_57283_57308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (6))){
var inst_57239 = (state_57274[(7)]);
var inst_57260 = (inst_57239 > (0));
var state_57274__$1 = state_57274;
if(cljs.core.truth_(inst_57260)){
var statearr_57284_57309 = state_57274__$1;
(statearr_57284_57309[(1)] = (12));

} else {
var statearr_57285_57310 = state_57274__$1;
(statearr_57285_57310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (3))){
var inst_57272 = (state_57274[(2)]);
var state_57274__$1 = state_57274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57274__$1,inst_57272);
} else {
if((state_val_57275 === (12))){
var inst_57238 = (state_57274[(8)]);
var inst_57262 = cljs.core.vec.call(null,inst_57238);
var state_57274__$1 = state_57274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57274__$1,(15),out,inst_57262);
} else {
if((state_val_57275 === (2))){
var state_57274__$1 = state_57274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57274__$1,(4),ch);
} else {
if((state_val_57275 === (11))){
var inst_57254 = (state_57274[(2)]);
var inst_57255 = (new Array(n));
var inst_57238 = inst_57255;
var inst_57239 = (0);
var state_57274__$1 = (function (){var statearr_57286 = state_57274;
(statearr_57286[(7)] = inst_57239);

(statearr_57286[(10)] = inst_57254);

(statearr_57286[(8)] = inst_57238);

return statearr_57286;
})();
var statearr_57287_57311 = state_57274__$1;
(statearr_57287_57311[(2)] = null);

(statearr_57287_57311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (9))){
var inst_57238 = (state_57274[(8)]);
var inst_57252 = cljs.core.vec.call(null,inst_57238);
var state_57274__$1 = state_57274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57274__$1,(11),out,inst_57252);
} else {
if((state_val_57275 === (5))){
var inst_57239 = (state_57274[(7)]);
var inst_57247 = (state_57274[(11)]);
var inst_57238 = (state_57274[(8)]);
var inst_57242 = (state_57274[(9)]);
var inst_57246 = (inst_57238[inst_57239] = inst_57242);
var inst_57247__$1 = (inst_57239 + (1));
var inst_57248 = (inst_57247__$1 < n);
var state_57274__$1 = (function (){var statearr_57288 = state_57274;
(statearr_57288[(11)] = inst_57247__$1);

(statearr_57288[(12)] = inst_57246);

return statearr_57288;
})();
if(cljs.core.truth_(inst_57248)){
var statearr_57289_57312 = state_57274__$1;
(statearr_57289_57312[(1)] = (8));

} else {
var statearr_57290_57313 = state_57274__$1;
(statearr_57290_57313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (14))){
var inst_57267 = (state_57274[(2)]);
var inst_57268 = cljs.core.async.close_BANG_.call(null,out);
var state_57274__$1 = (function (){var statearr_57292 = state_57274;
(statearr_57292[(13)] = inst_57267);

return statearr_57292;
})();
var statearr_57293_57314 = state_57274__$1;
(statearr_57293_57314[(2)] = inst_57268);

(statearr_57293_57314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (10))){
var inst_57258 = (state_57274[(2)]);
var state_57274__$1 = state_57274;
var statearr_57294_57315 = state_57274__$1;
(statearr_57294_57315[(2)] = inst_57258);

(statearr_57294_57315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (8))){
var inst_57247 = (state_57274[(11)]);
var inst_57238 = (state_57274[(8)]);
var tmp57291 = inst_57238;
var inst_57238__$1 = tmp57291;
var inst_57239 = inst_57247;
var state_57274__$1 = (function (){var statearr_57295 = state_57274;
(statearr_57295[(7)] = inst_57239);

(statearr_57295[(8)] = inst_57238__$1);

return statearr_57295;
})();
var statearr_57296_57316 = state_57274__$1;
(statearr_57296_57316[(2)] = null);

(statearr_57296_57316[(1)] = (2));


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
});})(c__55486__auto___57302,out))
;
return ((function (switch__55396__auto__,c__55486__auto___57302,out){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_57297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57297[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_57297[(1)] = (1));

return statearr_57297;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_57274){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_57274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e57298){if((e57298 instanceof Object)){
var ex__55400__auto__ = e57298;
var statearr_57299_57317 = state_57274;
(statearr_57299_57317[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57318 = state_57274;
state_57274 = G__57318;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_57274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_57274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___57302,out))
})();
var state__55488__auto__ = (function (){var statearr_57300 = f__55487__auto__.call(null);
(statearr_57300[(6)] = c__55486__auto___57302);

return statearr_57300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___57302,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57320 = arguments.length;
switch (G__57320) {
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
var c__55486__auto___57390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___57390,out){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___57390,out){
return (function (state_57362){
var state_val_57363 = (state_57362[(1)]);
if((state_val_57363 === (7))){
var inst_57358 = (state_57362[(2)]);
var state_57362__$1 = state_57362;
var statearr_57364_57391 = state_57362__$1;
(statearr_57364_57391[(2)] = inst_57358);

(statearr_57364_57391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (1))){
var inst_57321 = [];
var inst_57322 = inst_57321;
var inst_57323 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57362__$1 = (function (){var statearr_57365 = state_57362;
(statearr_57365[(7)] = inst_57323);

(statearr_57365[(8)] = inst_57322);

return statearr_57365;
})();
var statearr_57366_57392 = state_57362__$1;
(statearr_57366_57392[(2)] = null);

(statearr_57366_57392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (4))){
var inst_57326 = (state_57362[(9)]);
var inst_57326__$1 = (state_57362[(2)]);
var inst_57327 = (inst_57326__$1 == null);
var inst_57328 = cljs.core.not.call(null,inst_57327);
var state_57362__$1 = (function (){var statearr_57367 = state_57362;
(statearr_57367[(9)] = inst_57326__$1);

return statearr_57367;
})();
if(inst_57328){
var statearr_57368_57393 = state_57362__$1;
(statearr_57368_57393[(1)] = (5));

} else {
var statearr_57369_57394 = state_57362__$1;
(statearr_57369_57394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (15))){
var inst_57352 = (state_57362[(2)]);
var state_57362__$1 = state_57362;
var statearr_57370_57395 = state_57362__$1;
(statearr_57370_57395[(2)] = inst_57352);

(statearr_57370_57395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (13))){
var state_57362__$1 = state_57362;
var statearr_57371_57396 = state_57362__$1;
(statearr_57371_57396[(2)] = null);

(statearr_57371_57396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (6))){
var inst_57322 = (state_57362[(8)]);
var inst_57347 = inst_57322.length;
var inst_57348 = (inst_57347 > (0));
var state_57362__$1 = state_57362;
if(cljs.core.truth_(inst_57348)){
var statearr_57372_57397 = state_57362__$1;
(statearr_57372_57397[(1)] = (12));

} else {
var statearr_57373_57398 = state_57362__$1;
(statearr_57373_57398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (3))){
var inst_57360 = (state_57362[(2)]);
var state_57362__$1 = state_57362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57362__$1,inst_57360);
} else {
if((state_val_57363 === (12))){
var inst_57322 = (state_57362[(8)]);
var inst_57350 = cljs.core.vec.call(null,inst_57322);
var state_57362__$1 = state_57362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57362__$1,(15),out,inst_57350);
} else {
if((state_val_57363 === (2))){
var state_57362__$1 = state_57362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57362__$1,(4),ch);
} else {
if((state_val_57363 === (11))){
var inst_57326 = (state_57362[(9)]);
var inst_57330 = (state_57362[(10)]);
var inst_57340 = (state_57362[(2)]);
var inst_57341 = [];
var inst_57342 = inst_57341.push(inst_57326);
var inst_57322 = inst_57341;
var inst_57323 = inst_57330;
var state_57362__$1 = (function (){var statearr_57374 = state_57362;
(statearr_57374[(11)] = inst_57340);

(statearr_57374[(7)] = inst_57323);

(statearr_57374[(8)] = inst_57322);

(statearr_57374[(12)] = inst_57342);

return statearr_57374;
})();
var statearr_57375_57399 = state_57362__$1;
(statearr_57375_57399[(2)] = null);

(statearr_57375_57399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (9))){
var inst_57322 = (state_57362[(8)]);
var inst_57338 = cljs.core.vec.call(null,inst_57322);
var state_57362__$1 = state_57362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57362__$1,(11),out,inst_57338);
} else {
if((state_val_57363 === (5))){
var inst_57326 = (state_57362[(9)]);
var inst_57323 = (state_57362[(7)]);
var inst_57330 = (state_57362[(10)]);
var inst_57330__$1 = f.call(null,inst_57326);
var inst_57331 = cljs.core._EQ_.call(null,inst_57330__$1,inst_57323);
var inst_57332 = cljs.core.keyword_identical_QMARK_.call(null,inst_57323,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_57333 = (inst_57331) || (inst_57332);
var state_57362__$1 = (function (){var statearr_57376 = state_57362;
(statearr_57376[(10)] = inst_57330__$1);

return statearr_57376;
})();
if(cljs.core.truth_(inst_57333)){
var statearr_57377_57400 = state_57362__$1;
(statearr_57377_57400[(1)] = (8));

} else {
var statearr_57378_57401 = state_57362__$1;
(statearr_57378_57401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (14))){
var inst_57355 = (state_57362[(2)]);
var inst_57356 = cljs.core.async.close_BANG_.call(null,out);
var state_57362__$1 = (function (){var statearr_57380 = state_57362;
(statearr_57380[(13)] = inst_57355);

return statearr_57380;
})();
var statearr_57381_57402 = state_57362__$1;
(statearr_57381_57402[(2)] = inst_57356);

(statearr_57381_57402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (10))){
var inst_57345 = (state_57362[(2)]);
var state_57362__$1 = state_57362;
var statearr_57382_57403 = state_57362__$1;
(statearr_57382_57403[(2)] = inst_57345);

(statearr_57382_57403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57363 === (8))){
var inst_57326 = (state_57362[(9)]);
var inst_57322 = (state_57362[(8)]);
var inst_57330 = (state_57362[(10)]);
var inst_57335 = inst_57322.push(inst_57326);
var tmp57379 = inst_57322;
var inst_57322__$1 = tmp57379;
var inst_57323 = inst_57330;
var state_57362__$1 = (function (){var statearr_57383 = state_57362;
(statearr_57383[(14)] = inst_57335);

(statearr_57383[(7)] = inst_57323);

(statearr_57383[(8)] = inst_57322__$1);

return statearr_57383;
})();
var statearr_57384_57404 = state_57362__$1;
(statearr_57384_57404[(2)] = null);

(statearr_57384_57404[(1)] = (2));


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
});})(c__55486__auto___57390,out))
;
return ((function (switch__55396__auto__,c__55486__auto___57390,out){
return (function() {
var cljs$core$async$state_machine__55397__auto__ = null;
var cljs$core$async$state_machine__55397__auto____0 = (function (){
var statearr_57385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57385[(0)] = cljs$core$async$state_machine__55397__auto__);

(statearr_57385[(1)] = (1));

return statearr_57385;
});
var cljs$core$async$state_machine__55397__auto____1 = (function (state_57362){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_57362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e57386){if((e57386 instanceof Object)){
var ex__55400__auto__ = e57386;
var statearr_57387_57405 = state_57362;
(statearr_57387_57405[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57406 = state_57362;
state_57362 = G__57406;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
cljs$core$async$state_machine__55397__auto__ = function(state_57362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55397__auto____1.call(this,state_57362);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55397__auto____0;
cljs$core$async$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55397__auto____1;
return cljs$core$async$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___57390,out))
})();
var state__55488__auto__ = (function (){var statearr_57388 = f__55487__auto__.call(null);
(statearr_57388[(6)] = c__55486__auto___57390);

return statearr_57388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___57390,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509280895451
