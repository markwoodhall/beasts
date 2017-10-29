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
var G__148235 = arguments.length;
switch (G__148235) {
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
if(typeof cljs.core.async.t_cljs$core$async148236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148236 = (function (f,blockable,meta148237){
this.f = f;
this.blockable = blockable;
this.meta148237 = meta148237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async148236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_148238,meta148237__$1){
var self__ = this;
var _148238__$1 = this;
return (new cljs.core.async.t_cljs$core$async148236(self__.f,self__.blockable,meta148237__$1));
});

cljs.core.async.t_cljs$core$async148236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_148238){
var self__ = this;
var _148238__$1 = this;
return self__.meta148237;
});

cljs.core.async.t_cljs$core$async148236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async148236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async148236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async148236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async148236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta148237","meta148237",-1964354581,null)], null);
});

cljs.core.async.t_cljs$core$async148236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async148236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148236";

cljs.core.async.t_cljs$core$async148236.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async148236");
});

cljs.core.async.__GT_t_cljs$core$async148236 = (function cljs$core$async$__GT_t_cljs$core$async148236(f__$1,blockable__$1,meta148237){
return (new cljs.core.async.t_cljs$core$async148236(f__$1,blockable__$1,meta148237));
});

}

return (new cljs.core.async.t_cljs$core$async148236(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__148242 = arguments.length;
switch (G__148242) {
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
var G__148245 = arguments.length;
switch (G__148245) {
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
var G__148248 = arguments.length;
switch (G__148248) {
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
var val_148250 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_148250);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_148250,ret){
return (function (){
return fn1.call(null,val_148250);
});})(val_148250,ret))
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
var G__148252 = arguments.length;
switch (G__148252) {
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
var n__50564__auto___148254 = n;
var x_148255 = (0);
while(true){
if((x_148255 < n__50564__auto___148254)){
(a[x_148255] = (0));

var G__148256 = (x_148255 + (1));
x_148255 = G__148256;
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

var G__148257 = (i + (1));
i = G__148257;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async148258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148258 = (function (flag,meta148259){
this.flag = flag;
this.meta148259 = meta148259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async148258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_148260,meta148259__$1){
var self__ = this;
var _148260__$1 = this;
return (new cljs.core.async.t_cljs$core$async148258(self__.flag,meta148259__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async148258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_148260){
var self__ = this;
var _148260__$1 = this;
return self__.meta148259;
});})(flag))
;

cljs.core.async.t_cljs$core$async148258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async148258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async148258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async148258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async148258.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta148259","meta148259",1538867459,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async148258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async148258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148258";

cljs.core.async.t_cljs$core$async148258.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async148258");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async148258 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async148258(flag__$1,meta148259){
return (new cljs.core.async.t_cljs$core$async148258(flag__$1,meta148259));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async148258(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async148261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148261 = (function (flag,cb,meta148262){
this.flag = flag;
this.cb = cb;
this.meta148262 = meta148262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async148261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_148263,meta148262__$1){
var self__ = this;
var _148263__$1 = this;
return (new cljs.core.async.t_cljs$core$async148261(self__.flag,self__.cb,meta148262__$1));
});

cljs.core.async.t_cljs$core$async148261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_148263){
var self__ = this;
var _148263__$1 = this;
return self__.meta148262;
});

cljs.core.async.t_cljs$core$async148261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async148261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async148261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async148261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async148261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta148262","meta148262",-578986256,null)], null);
});

cljs.core.async.t_cljs$core$async148261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async148261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148261";

cljs.core.async.t_cljs$core$async148261.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async148261");
});

cljs.core.async.__GT_t_cljs$core$async148261 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async148261(flag__$1,cb__$1,meta148262){
return (new cljs.core.async.t_cljs$core$async148261(flag__$1,cb__$1,meta148262));
});

}

return (new cljs.core.async.t_cljs$core$async148261(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__148264_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__148264_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__148265_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__148265_SHARP_,port], null));
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
var G__148266 = (i + (1));
i = G__148266;
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
var len__50798__auto___148272 = arguments.length;
var i__50799__auto___148273 = (0);
while(true){
if((i__50799__auto___148273 < len__50798__auto___148272)){
args__50805__auto__.push((arguments[i__50799__auto___148273]));

var G__148274 = (i__50799__auto___148273 + (1));
i__50799__auto___148273 = G__148274;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__148269){
var map__148270 = p__148269;
var map__148270__$1 = ((((!((map__148270 == null)))?((((map__148270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__148270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__148270):map__148270);
var opts = map__148270__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq148267){
var G__148268 = cljs.core.first.call(null,seq148267);
var seq148267__$1 = cljs.core.next.call(null,seq148267);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__148268,seq148267__$1);
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
var G__148276 = arguments.length;
switch (G__148276) {
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
var c__148175__auto___148322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___148322){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___148322){
return (function (state_148300){
var state_val_148301 = (state_148300[(1)]);
if((state_val_148301 === (7))){
var inst_148296 = (state_148300[(2)]);
var state_148300__$1 = state_148300;
var statearr_148302_148323 = state_148300__$1;
(statearr_148302_148323[(2)] = inst_148296);

(statearr_148302_148323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (1))){
var state_148300__$1 = state_148300;
var statearr_148303_148324 = state_148300__$1;
(statearr_148303_148324[(2)] = null);

(statearr_148303_148324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (4))){
var inst_148279 = (state_148300[(7)]);
var inst_148279__$1 = (state_148300[(2)]);
var inst_148280 = (inst_148279__$1 == null);
var state_148300__$1 = (function (){var statearr_148304 = state_148300;
(statearr_148304[(7)] = inst_148279__$1);

return statearr_148304;
})();
if(cljs.core.truth_(inst_148280)){
var statearr_148305_148325 = state_148300__$1;
(statearr_148305_148325[(1)] = (5));

} else {
var statearr_148306_148326 = state_148300__$1;
(statearr_148306_148326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (13))){
var state_148300__$1 = state_148300;
var statearr_148307_148327 = state_148300__$1;
(statearr_148307_148327[(2)] = null);

(statearr_148307_148327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (6))){
var inst_148279 = (state_148300[(7)]);
var state_148300__$1 = state_148300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148300__$1,(11),to,inst_148279);
} else {
if((state_val_148301 === (3))){
var inst_148298 = (state_148300[(2)]);
var state_148300__$1 = state_148300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148300__$1,inst_148298);
} else {
if((state_val_148301 === (12))){
var state_148300__$1 = state_148300;
var statearr_148308_148328 = state_148300__$1;
(statearr_148308_148328[(2)] = null);

(statearr_148308_148328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (2))){
var state_148300__$1 = state_148300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148300__$1,(4),from);
} else {
if((state_val_148301 === (11))){
var inst_148289 = (state_148300[(2)]);
var state_148300__$1 = state_148300;
if(cljs.core.truth_(inst_148289)){
var statearr_148309_148329 = state_148300__$1;
(statearr_148309_148329[(1)] = (12));

} else {
var statearr_148310_148330 = state_148300__$1;
(statearr_148310_148330[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (9))){
var state_148300__$1 = state_148300;
var statearr_148311_148331 = state_148300__$1;
(statearr_148311_148331[(2)] = null);

(statearr_148311_148331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (5))){
var state_148300__$1 = state_148300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_148312_148332 = state_148300__$1;
(statearr_148312_148332[(1)] = (8));

} else {
var statearr_148313_148333 = state_148300__$1;
(statearr_148313_148333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (14))){
var inst_148294 = (state_148300[(2)]);
var state_148300__$1 = state_148300;
var statearr_148314_148334 = state_148300__$1;
(statearr_148314_148334[(2)] = inst_148294);

(statearr_148314_148334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (10))){
var inst_148286 = (state_148300[(2)]);
var state_148300__$1 = state_148300;
var statearr_148315_148335 = state_148300__$1;
(statearr_148315_148335[(2)] = inst_148286);

(statearr_148315_148335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148301 === (8))){
var inst_148283 = cljs.core.async.close_BANG_.call(null,to);
var state_148300__$1 = state_148300;
var statearr_148316_148336 = state_148300__$1;
(statearr_148316_148336[(2)] = inst_148283);

(statearr_148316_148336[(1)] = (10));


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
});})(c__148175__auto___148322))
;
return ((function (switch__148085__auto__,c__148175__auto___148322){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_148317 = [null,null,null,null,null,null,null,null];
(statearr_148317[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_148317[(1)] = (1));

return statearr_148317;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_148300){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148318){if((e148318 instanceof Object)){
var ex__148089__auto__ = e148318;
var statearr_148319_148337 = state_148300;
(statearr_148319_148337[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148338 = state_148300;
state_148300 = G__148338;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_148300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_148300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___148322))
})();
var state__148177__auto__ = (function (){var statearr_148320 = f__148176__auto__.call(null);
(statearr_148320[(6)] = c__148175__auto___148322);

return statearr_148320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___148322))
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
return (function (p__148339){
var vec__148340 = p__148339;
var v = cljs.core.nth.call(null,vec__148340,(0),null);
var p = cljs.core.nth.call(null,vec__148340,(1),null);
var job = vec__148340;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__148175__auto___148511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___148511,res,vec__148340,v,p,job,jobs,results){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___148511,res,vec__148340,v,p,job,jobs,results){
return (function (state_148347){
var state_val_148348 = (state_148347[(1)]);
if((state_val_148348 === (1))){
var state_148347__$1 = state_148347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148347__$1,(2),res,v);
} else {
if((state_val_148348 === (2))){
var inst_148344 = (state_148347[(2)]);
var inst_148345 = cljs.core.async.close_BANG_.call(null,res);
var state_148347__$1 = (function (){var statearr_148349 = state_148347;
(statearr_148349[(7)] = inst_148344);

return statearr_148349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148347__$1,inst_148345);
} else {
return null;
}
}
});})(c__148175__auto___148511,res,vec__148340,v,p,job,jobs,results))
;
return ((function (switch__148085__auto__,c__148175__auto___148511,res,vec__148340,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0 = (function (){
var statearr_148350 = [null,null,null,null,null,null,null,null];
(statearr_148350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__);

(statearr_148350[(1)] = (1));

return statearr_148350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1 = (function (state_148347){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148351){if((e148351 instanceof Object)){
var ex__148089__auto__ = e148351;
var statearr_148352_148512 = state_148347;
(statearr_148352_148512[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148513 = state_148347;
state_148347 = G__148513;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = function(state_148347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1.call(this,state_148347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___148511,res,vec__148340,v,p,job,jobs,results))
})();
var state__148177__auto__ = (function (){var statearr_148353 = f__148176__auto__.call(null);
(statearr_148353[(6)] = c__148175__auto___148511);

return statearr_148353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___148511,res,vec__148340,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__148354){
var vec__148355 = p__148354;
var v = cljs.core.nth.call(null,vec__148355,(0),null);
var p = cljs.core.nth.call(null,vec__148355,(1),null);
var job = vec__148355;
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
var n__50564__auto___148514 = n;
var __148515 = (0);
while(true){
if((__148515 < n__50564__auto___148514)){
var G__148358_148516 = type;
var G__148358_148517__$1 = (((G__148358_148516 instanceof cljs.core.Keyword))?G__148358_148516.fqn:null);
switch (G__148358_148517__$1) {
case "compute":
var c__148175__auto___148519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__148515,c__148175__auto___148519,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (__148515,c__148175__auto___148519,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async){
return (function (state_148371){
var state_val_148372 = (state_148371[(1)]);
if((state_val_148372 === (1))){
var state_148371__$1 = state_148371;
var statearr_148373_148520 = state_148371__$1;
(statearr_148373_148520[(2)] = null);

(statearr_148373_148520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148372 === (2))){
var state_148371__$1 = state_148371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148371__$1,(4),jobs);
} else {
if((state_val_148372 === (3))){
var inst_148369 = (state_148371[(2)]);
var state_148371__$1 = state_148371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148371__$1,inst_148369);
} else {
if((state_val_148372 === (4))){
var inst_148361 = (state_148371[(2)]);
var inst_148362 = process.call(null,inst_148361);
var state_148371__$1 = state_148371;
if(cljs.core.truth_(inst_148362)){
var statearr_148374_148521 = state_148371__$1;
(statearr_148374_148521[(1)] = (5));

} else {
var statearr_148375_148522 = state_148371__$1;
(statearr_148375_148522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148372 === (5))){
var state_148371__$1 = state_148371;
var statearr_148376_148523 = state_148371__$1;
(statearr_148376_148523[(2)] = null);

(statearr_148376_148523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148372 === (6))){
var state_148371__$1 = state_148371;
var statearr_148377_148524 = state_148371__$1;
(statearr_148377_148524[(2)] = null);

(statearr_148377_148524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148372 === (7))){
var inst_148367 = (state_148371[(2)]);
var state_148371__$1 = state_148371;
var statearr_148378_148525 = state_148371__$1;
(statearr_148378_148525[(2)] = inst_148367);

(statearr_148378_148525[(1)] = (3));


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
});})(__148515,c__148175__auto___148519,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async))
;
return ((function (__148515,switch__148085__auto__,c__148175__auto___148519,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0 = (function (){
var statearr_148379 = [null,null,null,null,null,null,null];
(statearr_148379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__);

(statearr_148379[(1)] = (1));

return statearr_148379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1 = (function (state_148371){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148380){if((e148380 instanceof Object)){
var ex__148089__auto__ = e148380;
var statearr_148381_148526 = state_148371;
(statearr_148381_148526[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148527 = state_148371;
state_148371 = G__148527;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = function(state_148371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1.call(this,state_148371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__;
})()
;})(__148515,switch__148085__auto__,c__148175__auto___148519,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async))
})();
var state__148177__auto__ = (function (){var statearr_148382 = f__148176__auto__.call(null);
(statearr_148382[(6)] = c__148175__auto___148519);

return statearr_148382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(__148515,c__148175__auto___148519,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async))
);


break;
case "async":
var c__148175__auto___148528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__148515,c__148175__auto___148528,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (__148515,c__148175__auto___148528,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async){
return (function (state_148395){
var state_val_148396 = (state_148395[(1)]);
if((state_val_148396 === (1))){
var state_148395__$1 = state_148395;
var statearr_148397_148529 = state_148395__$1;
(statearr_148397_148529[(2)] = null);

(statearr_148397_148529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148396 === (2))){
var state_148395__$1 = state_148395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148395__$1,(4),jobs);
} else {
if((state_val_148396 === (3))){
var inst_148393 = (state_148395[(2)]);
var state_148395__$1 = state_148395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148395__$1,inst_148393);
} else {
if((state_val_148396 === (4))){
var inst_148385 = (state_148395[(2)]);
var inst_148386 = async.call(null,inst_148385);
var state_148395__$1 = state_148395;
if(cljs.core.truth_(inst_148386)){
var statearr_148398_148530 = state_148395__$1;
(statearr_148398_148530[(1)] = (5));

} else {
var statearr_148399_148531 = state_148395__$1;
(statearr_148399_148531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148396 === (5))){
var state_148395__$1 = state_148395;
var statearr_148400_148532 = state_148395__$1;
(statearr_148400_148532[(2)] = null);

(statearr_148400_148532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148396 === (6))){
var state_148395__$1 = state_148395;
var statearr_148401_148533 = state_148395__$1;
(statearr_148401_148533[(2)] = null);

(statearr_148401_148533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148396 === (7))){
var inst_148391 = (state_148395[(2)]);
var state_148395__$1 = state_148395;
var statearr_148402_148534 = state_148395__$1;
(statearr_148402_148534[(2)] = inst_148391);

(statearr_148402_148534[(1)] = (3));


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
});})(__148515,c__148175__auto___148528,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async))
;
return ((function (__148515,switch__148085__auto__,c__148175__auto___148528,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0 = (function (){
var statearr_148403 = [null,null,null,null,null,null,null];
(statearr_148403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__);

(statearr_148403[(1)] = (1));

return statearr_148403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1 = (function (state_148395){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148404){if((e148404 instanceof Object)){
var ex__148089__auto__ = e148404;
var statearr_148405_148535 = state_148395;
(statearr_148405_148535[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148536 = state_148395;
state_148395 = G__148536;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = function(state_148395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1.call(this,state_148395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__;
})()
;})(__148515,switch__148085__auto__,c__148175__auto___148528,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async))
})();
var state__148177__auto__ = (function (){var statearr_148406 = f__148176__auto__.call(null);
(statearr_148406[(6)] = c__148175__auto___148528);

return statearr_148406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(__148515,c__148175__auto___148528,G__148358_148516,G__148358_148517__$1,n__50564__auto___148514,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__148358_148517__$1)].join('')));

}

var G__148537 = (__148515 + (1));
__148515 = G__148537;
continue;
} else {
}
break;
}

var c__148175__auto___148538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___148538,jobs,results,process,async){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___148538,jobs,results,process,async){
return (function (state_148428){
var state_val_148429 = (state_148428[(1)]);
if((state_val_148429 === (1))){
var state_148428__$1 = state_148428;
var statearr_148430_148539 = state_148428__$1;
(statearr_148430_148539[(2)] = null);

(statearr_148430_148539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148429 === (2))){
var state_148428__$1 = state_148428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148428__$1,(4),from);
} else {
if((state_val_148429 === (3))){
var inst_148426 = (state_148428[(2)]);
var state_148428__$1 = state_148428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148428__$1,inst_148426);
} else {
if((state_val_148429 === (4))){
var inst_148409 = (state_148428[(7)]);
var inst_148409__$1 = (state_148428[(2)]);
var inst_148410 = (inst_148409__$1 == null);
var state_148428__$1 = (function (){var statearr_148431 = state_148428;
(statearr_148431[(7)] = inst_148409__$1);

return statearr_148431;
})();
if(cljs.core.truth_(inst_148410)){
var statearr_148432_148540 = state_148428__$1;
(statearr_148432_148540[(1)] = (5));

} else {
var statearr_148433_148541 = state_148428__$1;
(statearr_148433_148541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148429 === (5))){
var inst_148412 = cljs.core.async.close_BANG_.call(null,jobs);
var state_148428__$1 = state_148428;
var statearr_148434_148542 = state_148428__$1;
(statearr_148434_148542[(2)] = inst_148412);

(statearr_148434_148542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148429 === (6))){
var inst_148409 = (state_148428[(7)]);
var inst_148414 = (state_148428[(8)]);
var inst_148414__$1 = cljs.core.async.chan.call(null,(1));
var inst_148415 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_148416 = [inst_148409,inst_148414__$1];
var inst_148417 = (new cljs.core.PersistentVector(null,2,(5),inst_148415,inst_148416,null));
var state_148428__$1 = (function (){var statearr_148435 = state_148428;
(statearr_148435[(8)] = inst_148414__$1);

return statearr_148435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148428__$1,(8),jobs,inst_148417);
} else {
if((state_val_148429 === (7))){
var inst_148424 = (state_148428[(2)]);
var state_148428__$1 = state_148428;
var statearr_148436_148543 = state_148428__$1;
(statearr_148436_148543[(2)] = inst_148424);

(statearr_148436_148543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148429 === (8))){
var inst_148414 = (state_148428[(8)]);
var inst_148419 = (state_148428[(2)]);
var state_148428__$1 = (function (){var statearr_148437 = state_148428;
(statearr_148437[(9)] = inst_148419);

return statearr_148437;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148428__$1,(9),results,inst_148414);
} else {
if((state_val_148429 === (9))){
var inst_148421 = (state_148428[(2)]);
var state_148428__$1 = (function (){var statearr_148438 = state_148428;
(statearr_148438[(10)] = inst_148421);

return statearr_148438;
})();
var statearr_148439_148544 = state_148428__$1;
(statearr_148439_148544[(2)] = null);

(statearr_148439_148544[(1)] = (2));


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
});})(c__148175__auto___148538,jobs,results,process,async))
;
return ((function (switch__148085__auto__,c__148175__auto___148538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0 = (function (){
var statearr_148440 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_148440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__);

(statearr_148440[(1)] = (1));

return statearr_148440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1 = (function (state_148428){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148441){if((e148441 instanceof Object)){
var ex__148089__auto__ = e148441;
var statearr_148442_148545 = state_148428;
(statearr_148442_148545[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148546 = state_148428;
state_148428 = G__148546;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = function(state_148428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1.call(this,state_148428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___148538,jobs,results,process,async))
})();
var state__148177__auto__ = (function (){var statearr_148443 = f__148176__auto__.call(null);
(statearr_148443[(6)] = c__148175__auto___148538);

return statearr_148443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___148538,jobs,results,process,async))
);


var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__,jobs,results,process,async){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__,jobs,results,process,async){
return (function (state_148481){
var state_val_148482 = (state_148481[(1)]);
if((state_val_148482 === (7))){
var inst_148477 = (state_148481[(2)]);
var state_148481__$1 = state_148481;
var statearr_148483_148547 = state_148481__$1;
(statearr_148483_148547[(2)] = inst_148477);

(statearr_148483_148547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (20))){
var state_148481__$1 = state_148481;
var statearr_148484_148548 = state_148481__$1;
(statearr_148484_148548[(2)] = null);

(statearr_148484_148548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (1))){
var state_148481__$1 = state_148481;
var statearr_148485_148549 = state_148481__$1;
(statearr_148485_148549[(2)] = null);

(statearr_148485_148549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (4))){
var inst_148446 = (state_148481[(7)]);
var inst_148446__$1 = (state_148481[(2)]);
var inst_148447 = (inst_148446__$1 == null);
var state_148481__$1 = (function (){var statearr_148486 = state_148481;
(statearr_148486[(7)] = inst_148446__$1);

return statearr_148486;
})();
if(cljs.core.truth_(inst_148447)){
var statearr_148487_148550 = state_148481__$1;
(statearr_148487_148550[(1)] = (5));

} else {
var statearr_148488_148551 = state_148481__$1;
(statearr_148488_148551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (15))){
var inst_148459 = (state_148481[(8)]);
var state_148481__$1 = state_148481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148481__$1,(18),to,inst_148459);
} else {
if((state_val_148482 === (21))){
var inst_148472 = (state_148481[(2)]);
var state_148481__$1 = state_148481;
var statearr_148489_148552 = state_148481__$1;
(statearr_148489_148552[(2)] = inst_148472);

(statearr_148489_148552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (13))){
var inst_148474 = (state_148481[(2)]);
var state_148481__$1 = (function (){var statearr_148490 = state_148481;
(statearr_148490[(9)] = inst_148474);

return statearr_148490;
})();
var statearr_148491_148553 = state_148481__$1;
(statearr_148491_148553[(2)] = null);

(statearr_148491_148553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (6))){
var inst_148446 = (state_148481[(7)]);
var state_148481__$1 = state_148481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148481__$1,(11),inst_148446);
} else {
if((state_val_148482 === (17))){
var inst_148467 = (state_148481[(2)]);
var state_148481__$1 = state_148481;
if(cljs.core.truth_(inst_148467)){
var statearr_148492_148554 = state_148481__$1;
(statearr_148492_148554[(1)] = (19));

} else {
var statearr_148493_148555 = state_148481__$1;
(statearr_148493_148555[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (3))){
var inst_148479 = (state_148481[(2)]);
var state_148481__$1 = state_148481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148481__$1,inst_148479);
} else {
if((state_val_148482 === (12))){
var inst_148456 = (state_148481[(10)]);
var state_148481__$1 = state_148481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148481__$1,(14),inst_148456);
} else {
if((state_val_148482 === (2))){
var state_148481__$1 = state_148481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148481__$1,(4),results);
} else {
if((state_val_148482 === (19))){
var state_148481__$1 = state_148481;
var statearr_148494_148556 = state_148481__$1;
(statearr_148494_148556[(2)] = null);

(statearr_148494_148556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (11))){
var inst_148456 = (state_148481[(2)]);
var state_148481__$1 = (function (){var statearr_148495 = state_148481;
(statearr_148495[(10)] = inst_148456);

return statearr_148495;
})();
var statearr_148496_148557 = state_148481__$1;
(statearr_148496_148557[(2)] = null);

(statearr_148496_148557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (9))){
var state_148481__$1 = state_148481;
var statearr_148497_148558 = state_148481__$1;
(statearr_148497_148558[(2)] = null);

(statearr_148497_148558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (5))){
var state_148481__$1 = state_148481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_148498_148559 = state_148481__$1;
(statearr_148498_148559[(1)] = (8));

} else {
var statearr_148499_148560 = state_148481__$1;
(statearr_148499_148560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (14))){
var inst_148459 = (state_148481[(8)]);
var inst_148461 = (state_148481[(11)]);
var inst_148459__$1 = (state_148481[(2)]);
var inst_148460 = (inst_148459__$1 == null);
var inst_148461__$1 = cljs.core.not.call(null,inst_148460);
var state_148481__$1 = (function (){var statearr_148500 = state_148481;
(statearr_148500[(8)] = inst_148459__$1);

(statearr_148500[(11)] = inst_148461__$1);

return statearr_148500;
})();
if(inst_148461__$1){
var statearr_148501_148561 = state_148481__$1;
(statearr_148501_148561[(1)] = (15));

} else {
var statearr_148502_148562 = state_148481__$1;
(statearr_148502_148562[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (16))){
var inst_148461 = (state_148481[(11)]);
var state_148481__$1 = state_148481;
var statearr_148503_148563 = state_148481__$1;
(statearr_148503_148563[(2)] = inst_148461);

(statearr_148503_148563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (10))){
var inst_148453 = (state_148481[(2)]);
var state_148481__$1 = state_148481;
var statearr_148504_148564 = state_148481__$1;
(statearr_148504_148564[(2)] = inst_148453);

(statearr_148504_148564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (18))){
var inst_148464 = (state_148481[(2)]);
var state_148481__$1 = state_148481;
var statearr_148505_148565 = state_148481__$1;
(statearr_148505_148565[(2)] = inst_148464);

(statearr_148505_148565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148482 === (8))){
var inst_148450 = cljs.core.async.close_BANG_.call(null,to);
var state_148481__$1 = state_148481;
var statearr_148506_148566 = state_148481__$1;
(statearr_148506_148566[(2)] = inst_148450);

(statearr_148506_148566[(1)] = (10));


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
});})(c__148175__auto__,jobs,results,process,async))
;
return ((function (switch__148085__auto__,c__148175__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0 = (function (){
var statearr_148507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_148507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__);

(statearr_148507[(1)] = (1));

return statearr_148507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1 = (function (state_148481){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148508){if((e148508 instanceof Object)){
var ex__148089__auto__ = e148508;
var statearr_148509_148567 = state_148481;
(statearr_148509_148567[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148568 = state_148481;
state_148481 = G__148568;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__ = function(state_148481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1.call(this,state_148481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__148086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__,jobs,results,process,async))
})();
var state__148177__auto__ = (function (){var statearr_148510 = f__148176__auto__.call(null);
(statearr_148510[(6)] = c__148175__auto__);

return statearr_148510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__,jobs,results,process,async))
);

return c__148175__auto__;
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
var G__148570 = arguments.length;
switch (G__148570) {
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
var G__148573 = arguments.length;
switch (G__148573) {
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
var G__148576 = arguments.length;
switch (G__148576) {
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
var c__148175__auto___148625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___148625,tc,fc){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___148625,tc,fc){
return (function (state_148602){
var state_val_148603 = (state_148602[(1)]);
if((state_val_148603 === (7))){
var inst_148598 = (state_148602[(2)]);
var state_148602__$1 = state_148602;
var statearr_148604_148626 = state_148602__$1;
(statearr_148604_148626[(2)] = inst_148598);

(statearr_148604_148626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (1))){
var state_148602__$1 = state_148602;
var statearr_148605_148627 = state_148602__$1;
(statearr_148605_148627[(2)] = null);

(statearr_148605_148627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (4))){
var inst_148579 = (state_148602[(7)]);
var inst_148579__$1 = (state_148602[(2)]);
var inst_148580 = (inst_148579__$1 == null);
var state_148602__$1 = (function (){var statearr_148606 = state_148602;
(statearr_148606[(7)] = inst_148579__$1);

return statearr_148606;
})();
if(cljs.core.truth_(inst_148580)){
var statearr_148607_148628 = state_148602__$1;
(statearr_148607_148628[(1)] = (5));

} else {
var statearr_148608_148629 = state_148602__$1;
(statearr_148608_148629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (13))){
var state_148602__$1 = state_148602;
var statearr_148609_148630 = state_148602__$1;
(statearr_148609_148630[(2)] = null);

(statearr_148609_148630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (6))){
var inst_148579 = (state_148602[(7)]);
var inst_148585 = p.call(null,inst_148579);
var state_148602__$1 = state_148602;
if(cljs.core.truth_(inst_148585)){
var statearr_148610_148631 = state_148602__$1;
(statearr_148610_148631[(1)] = (9));

} else {
var statearr_148611_148632 = state_148602__$1;
(statearr_148611_148632[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (3))){
var inst_148600 = (state_148602[(2)]);
var state_148602__$1 = state_148602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148602__$1,inst_148600);
} else {
if((state_val_148603 === (12))){
var state_148602__$1 = state_148602;
var statearr_148612_148633 = state_148602__$1;
(statearr_148612_148633[(2)] = null);

(statearr_148612_148633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (2))){
var state_148602__$1 = state_148602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148602__$1,(4),ch);
} else {
if((state_val_148603 === (11))){
var inst_148579 = (state_148602[(7)]);
var inst_148589 = (state_148602[(2)]);
var state_148602__$1 = state_148602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148602__$1,(8),inst_148589,inst_148579);
} else {
if((state_val_148603 === (9))){
var state_148602__$1 = state_148602;
var statearr_148613_148634 = state_148602__$1;
(statearr_148613_148634[(2)] = tc);

(statearr_148613_148634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (5))){
var inst_148582 = cljs.core.async.close_BANG_.call(null,tc);
var inst_148583 = cljs.core.async.close_BANG_.call(null,fc);
var state_148602__$1 = (function (){var statearr_148614 = state_148602;
(statearr_148614[(8)] = inst_148582);

return statearr_148614;
})();
var statearr_148615_148635 = state_148602__$1;
(statearr_148615_148635[(2)] = inst_148583);

(statearr_148615_148635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (14))){
var inst_148596 = (state_148602[(2)]);
var state_148602__$1 = state_148602;
var statearr_148616_148636 = state_148602__$1;
(statearr_148616_148636[(2)] = inst_148596);

(statearr_148616_148636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (10))){
var state_148602__$1 = state_148602;
var statearr_148617_148637 = state_148602__$1;
(statearr_148617_148637[(2)] = fc);

(statearr_148617_148637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148603 === (8))){
var inst_148591 = (state_148602[(2)]);
var state_148602__$1 = state_148602;
if(cljs.core.truth_(inst_148591)){
var statearr_148618_148638 = state_148602__$1;
(statearr_148618_148638[(1)] = (12));

} else {
var statearr_148619_148639 = state_148602__$1;
(statearr_148619_148639[(1)] = (13));

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
});})(c__148175__auto___148625,tc,fc))
;
return ((function (switch__148085__auto__,c__148175__auto___148625,tc,fc){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_148620 = [null,null,null,null,null,null,null,null,null];
(statearr_148620[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_148620[(1)] = (1));

return statearr_148620;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_148602){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148621){if((e148621 instanceof Object)){
var ex__148089__auto__ = e148621;
var statearr_148622_148640 = state_148602;
(statearr_148622_148640[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148641 = state_148602;
state_148602 = G__148641;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_148602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_148602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___148625,tc,fc))
})();
var state__148177__auto__ = (function (){var statearr_148623 = f__148176__auto__.call(null);
(statearr_148623[(6)] = c__148175__auto___148625);

return statearr_148623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___148625,tc,fc))
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
var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__){
return (function (state_148662){
var state_val_148663 = (state_148662[(1)]);
if((state_val_148663 === (7))){
var inst_148658 = (state_148662[(2)]);
var state_148662__$1 = state_148662;
var statearr_148664_148682 = state_148662__$1;
(statearr_148664_148682[(2)] = inst_148658);

(statearr_148664_148682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148663 === (1))){
var inst_148642 = init;
var state_148662__$1 = (function (){var statearr_148665 = state_148662;
(statearr_148665[(7)] = inst_148642);

return statearr_148665;
})();
var statearr_148666_148683 = state_148662__$1;
(statearr_148666_148683[(2)] = null);

(statearr_148666_148683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148663 === (4))){
var inst_148645 = (state_148662[(8)]);
var inst_148645__$1 = (state_148662[(2)]);
var inst_148646 = (inst_148645__$1 == null);
var state_148662__$1 = (function (){var statearr_148667 = state_148662;
(statearr_148667[(8)] = inst_148645__$1);

return statearr_148667;
})();
if(cljs.core.truth_(inst_148646)){
var statearr_148668_148684 = state_148662__$1;
(statearr_148668_148684[(1)] = (5));

} else {
var statearr_148669_148685 = state_148662__$1;
(statearr_148669_148685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148663 === (6))){
var inst_148645 = (state_148662[(8)]);
var inst_148642 = (state_148662[(7)]);
var inst_148649 = (state_148662[(9)]);
var inst_148649__$1 = f.call(null,inst_148642,inst_148645);
var inst_148650 = cljs.core.reduced_QMARK_.call(null,inst_148649__$1);
var state_148662__$1 = (function (){var statearr_148670 = state_148662;
(statearr_148670[(9)] = inst_148649__$1);

return statearr_148670;
})();
if(inst_148650){
var statearr_148671_148686 = state_148662__$1;
(statearr_148671_148686[(1)] = (8));

} else {
var statearr_148672_148687 = state_148662__$1;
(statearr_148672_148687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148663 === (3))){
var inst_148660 = (state_148662[(2)]);
var state_148662__$1 = state_148662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148662__$1,inst_148660);
} else {
if((state_val_148663 === (2))){
var state_148662__$1 = state_148662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148662__$1,(4),ch);
} else {
if((state_val_148663 === (9))){
var inst_148649 = (state_148662[(9)]);
var inst_148642 = inst_148649;
var state_148662__$1 = (function (){var statearr_148673 = state_148662;
(statearr_148673[(7)] = inst_148642);

return statearr_148673;
})();
var statearr_148674_148688 = state_148662__$1;
(statearr_148674_148688[(2)] = null);

(statearr_148674_148688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148663 === (5))){
var inst_148642 = (state_148662[(7)]);
var state_148662__$1 = state_148662;
var statearr_148675_148689 = state_148662__$1;
(statearr_148675_148689[(2)] = inst_148642);

(statearr_148675_148689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148663 === (10))){
var inst_148656 = (state_148662[(2)]);
var state_148662__$1 = state_148662;
var statearr_148676_148690 = state_148662__$1;
(statearr_148676_148690[(2)] = inst_148656);

(statearr_148676_148690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148663 === (8))){
var inst_148649 = (state_148662[(9)]);
var inst_148652 = cljs.core.deref.call(null,inst_148649);
var state_148662__$1 = state_148662;
var statearr_148677_148691 = state_148662__$1;
(statearr_148677_148691[(2)] = inst_148652);

(statearr_148677_148691[(1)] = (10));


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
});})(c__148175__auto__))
;
return ((function (switch__148085__auto__,c__148175__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__148086__auto__ = null;
var cljs$core$async$reduce_$_state_machine__148086__auto____0 = (function (){
var statearr_148678 = [null,null,null,null,null,null,null,null,null,null];
(statearr_148678[(0)] = cljs$core$async$reduce_$_state_machine__148086__auto__);

(statearr_148678[(1)] = (1));

return statearr_148678;
});
var cljs$core$async$reduce_$_state_machine__148086__auto____1 = (function (state_148662){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148679){if((e148679 instanceof Object)){
var ex__148089__auto__ = e148679;
var statearr_148680_148692 = state_148662;
(statearr_148680_148692[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148693 = state_148662;
state_148662 = G__148693;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__148086__auto__ = function(state_148662){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__148086__auto____1.call(this,state_148662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__148086__auto____0;
cljs$core$async$reduce_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__148086__auto____1;
return cljs$core$async$reduce_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__))
})();
var state__148177__auto__ = (function (){var statearr_148681 = f__148176__auto__.call(null);
(statearr_148681[(6)] = c__148175__auto__);

return statearr_148681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__))
);

return c__148175__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__,f__$1){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__,f__$1){
return (function (state_148699){
var state_val_148700 = (state_148699[(1)]);
if((state_val_148700 === (1))){
var inst_148694 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_148699__$1 = state_148699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148699__$1,(2),inst_148694);
} else {
if((state_val_148700 === (2))){
var inst_148696 = (state_148699[(2)]);
var inst_148697 = f__$1.call(null,inst_148696);
var state_148699__$1 = state_148699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148699__$1,inst_148697);
} else {
return null;
}
}
});})(c__148175__auto__,f__$1))
;
return ((function (switch__148085__auto__,c__148175__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__148086__auto__ = null;
var cljs$core$async$transduce_$_state_machine__148086__auto____0 = (function (){
var statearr_148701 = [null,null,null,null,null,null,null];
(statearr_148701[(0)] = cljs$core$async$transduce_$_state_machine__148086__auto__);

(statearr_148701[(1)] = (1));

return statearr_148701;
});
var cljs$core$async$transduce_$_state_machine__148086__auto____1 = (function (state_148699){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148702){if((e148702 instanceof Object)){
var ex__148089__auto__ = e148702;
var statearr_148703_148705 = state_148699;
(statearr_148703_148705[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148706 = state_148699;
state_148699 = G__148706;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__148086__auto__ = function(state_148699){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__148086__auto____1.call(this,state_148699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__148086__auto____0;
cljs$core$async$transduce_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__148086__auto____1;
return cljs$core$async$transduce_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__,f__$1))
})();
var state__148177__auto__ = (function (){var statearr_148704 = f__148176__auto__.call(null);
(statearr_148704[(6)] = c__148175__auto__);

return statearr_148704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__,f__$1))
);

return c__148175__auto__;
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
var G__148708 = arguments.length;
switch (G__148708) {
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
var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__){
return (function (state_148733){
var state_val_148734 = (state_148733[(1)]);
if((state_val_148734 === (7))){
var inst_148715 = (state_148733[(2)]);
var state_148733__$1 = state_148733;
var statearr_148735_148756 = state_148733__$1;
(statearr_148735_148756[(2)] = inst_148715);

(statearr_148735_148756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (1))){
var inst_148709 = cljs.core.seq.call(null,coll);
var inst_148710 = inst_148709;
var state_148733__$1 = (function (){var statearr_148736 = state_148733;
(statearr_148736[(7)] = inst_148710);

return statearr_148736;
})();
var statearr_148737_148757 = state_148733__$1;
(statearr_148737_148757[(2)] = null);

(statearr_148737_148757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (4))){
var inst_148710 = (state_148733[(7)]);
var inst_148713 = cljs.core.first.call(null,inst_148710);
var state_148733__$1 = state_148733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148733__$1,(7),ch,inst_148713);
} else {
if((state_val_148734 === (13))){
var inst_148727 = (state_148733[(2)]);
var state_148733__$1 = state_148733;
var statearr_148738_148758 = state_148733__$1;
(statearr_148738_148758[(2)] = inst_148727);

(statearr_148738_148758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (6))){
var inst_148718 = (state_148733[(2)]);
var state_148733__$1 = state_148733;
if(cljs.core.truth_(inst_148718)){
var statearr_148739_148759 = state_148733__$1;
(statearr_148739_148759[(1)] = (8));

} else {
var statearr_148740_148760 = state_148733__$1;
(statearr_148740_148760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (3))){
var inst_148731 = (state_148733[(2)]);
var state_148733__$1 = state_148733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148733__$1,inst_148731);
} else {
if((state_val_148734 === (12))){
var state_148733__$1 = state_148733;
var statearr_148741_148761 = state_148733__$1;
(statearr_148741_148761[(2)] = null);

(statearr_148741_148761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (2))){
var inst_148710 = (state_148733[(7)]);
var state_148733__$1 = state_148733;
if(cljs.core.truth_(inst_148710)){
var statearr_148742_148762 = state_148733__$1;
(statearr_148742_148762[(1)] = (4));

} else {
var statearr_148743_148763 = state_148733__$1;
(statearr_148743_148763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (11))){
var inst_148724 = cljs.core.async.close_BANG_.call(null,ch);
var state_148733__$1 = state_148733;
var statearr_148744_148764 = state_148733__$1;
(statearr_148744_148764[(2)] = inst_148724);

(statearr_148744_148764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (9))){
var state_148733__$1 = state_148733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_148745_148765 = state_148733__$1;
(statearr_148745_148765[(1)] = (11));

} else {
var statearr_148746_148766 = state_148733__$1;
(statearr_148746_148766[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (5))){
var inst_148710 = (state_148733[(7)]);
var state_148733__$1 = state_148733;
var statearr_148747_148767 = state_148733__$1;
(statearr_148747_148767[(2)] = inst_148710);

(statearr_148747_148767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (10))){
var inst_148729 = (state_148733[(2)]);
var state_148733__$1 = state_148733;
var statearr_148748_148768 = state_148733__$1;
(statearr_148748_148768[(2)] = inst_148729);

(statearr_148748_148768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148734 === (8))){
var inst_148710 = (state_148733[(7)]);
var inst_148720 = cljs.core.next.call(null,inst_148710);
var inst_148710__$1 = inst_148720;
var state_148733__$1 = (function (){var statearr_148749 = state_148733;
(statearr_148749[(7)] = inst_148710__$1);

return statearr_148749;
})();
var statearr_148750_148769 = state_148733__$1;
(statearr_148750_148769[(2)] = null);

(statearr_148750_148769[(1)] = (2));


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
});})(c__148175__auto__))
;
return ((function (switch__148085__auto__,c__148175__auto__){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_148751 = [null,null,null,null,null,null,null,null];
(statearr_148751[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_148751[(1)] = (1));

return statearr_148751;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_148733){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148752){if((e148752 instanceof Object)){
var ex__148089__auto__ = e148752;
var statearr_148753_148770 = state_148733;
(statearr_148753_148770[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148771 = state_148733;
state_148733 = G__148771;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_148733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_148733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__))
})();
var state__148177__auto__ = (function (){var statearr_148754 = f__148176__auto__.call(null);
(statearr_148754[(6)] = c__148175__auto__);

return statearr_148754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__))
);

return c__148175__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async148772 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148772 = (function (ch,cs,meta148773){
this.ch = ch;
this.cs = cs;
this.meta148773 = meta148773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async148772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_148774,meta148773__$1){
var self__ = this;
var _148774__$1 = this;
return (new cljs.core.async.t_cljs$core$async148772(self__.ch,self__.cs,meta148773__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async148772.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_148774){
var self__ = this;
var _148774__$1 = this;
return self__.meta148773;
});})(cs))
;

cljs.core.async.t_cljs$core$async148772.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async148772.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async148772.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async148772.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async148772.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async148772.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async148772.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta148773","meta148773",-784768050,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async148772.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async148772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148772";

cljs.core.async.t_cljs$core$async148772.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async148772");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async148772 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async148772(ch__$1,cs__$1,meta148773){
return (new cljs.core.async.t_cljs$core$async148772(ch__$1,cs__$1,meta148773));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async148772(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__148175__auto___148994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___148994,cs,m,dchan,dctr,done){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___148994,cs,m,dchan,dctr,done){
return (function (state_148909){
var state_val_148910 = (state_148909[(1)]);
if((state_val_148910 === (7))){
var inst_148905 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148911_148995 = state_148909__$1;
(statearr_148911_148995[(2)] = inst_148905);

(statearr_148911_148995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (20))){
var inst_148808 = (state_148909[(7)]);
var inst_148820 = cljs.core.first.call(null,inst_148808);
var inst_148821 = cljs.core.nth.call(null,inst_148820,(0),null);
var inst_148822 = cljs.core.nth.call(null,inst_148820,(1),null);
var state_148909__$1 = (function (){var statearr_148912 = state_148909;
(statearr_148912[(8)] = inst_148821);

return statearr_148912;
})();
if(cljs.core.truth_(inst_148822)){
var statearr_148913_148996 = state_148909__$1;
(statearr_148913_148996[(1)] = (22));

} else {
var statearr_148914_148997 = state_148909__$1;
(statearr_148914_148997[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (27))){
var inst_148777 = (state_148909[(9)]);
var inst_148852 = (state_148909[(10)]);
var inst_148857 = (state_148909[(11)]);
var inst_148850 = (state_148909[(12)]);
var inst_148857__$1 = cljs.core._nth.call(null,inst_148850,inst_148852);
var inst_148858 = cljs.core.async.put_BANG_.call(null,inst_148857__$1,inst_148777,done);
var state_148909__$1 = (function (){var statearr_148915 = state_148909;
(statearr_148915[(11)] = inst_148857__$1);

return statearr_148915;
})();
if(cljs.core.truth_(inst_148858)){
var statearr_148916_148998 = state_148909__$1;
(statearr_148916_148998[(1)] = (30));

} else {
var statearr_148917_148999 = state_148909__$1;
(statearr_148917_148999[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (1))){
var state_148909__$1 = state_148909;
var statearr_148918_149000 = state_148909__$1;
(statearr_148918_149000[(2)] = null);

(statearr_148918_149000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (24))){
var inst_148808 = (state_148909[(7)]);
var inst_148827 = (state_148909[(2)]);
var inst_148828 = cljs.core.next.call(null,inst_148808);
var inst_148786 = inst_148828;
var inst_148787 = null;
var inst_148788 = (0);
var inst_148789 = (0);
var state_148909__$1 = (function (){var statearr_148919 = state_148909;
(statearr_148919[(13)] = inst_148788);

(statearr_148919[(14)] = inst_148789);

(statearr_148919[(15)] = inst_148827);

(statearr_148919[(16)] = inst_148787);

(statearr_148919[(17)] = inst_148786);

return statearr_148919;
})();
var statearr_148920_149001 = state_148909__$1;
(statearr_148920_149001[(2)] = null);

(statearr_148920_149001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (39))){
var state_148909__$1 = state_148909;
var statearr_148924_149002 = state_148909__$1;
(statearr_148924_149002[(2)] = null);

(statearr_148924_149002[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (4))){
var inst_148777 = (state_148909[(9)]);
var inst_148777__$1 = (state_148909[(2)]);
var inst_148778 = (inst_148777__$1 == null);
var state_148909__$1 = (function (){var statearr_148925 = state_148909;
(statearr_148925[(9)] = inst_148777__$1);

return statearr_148925;
})();
if(cljs.core.truth_(inst_148778)){
var statearr_148926_149003 = state_148909__$1;
(statearr_148926_149003[(1)] = (5));

} else {
var statearr_148927_149004 = state_148909__$1;
(statearr_148927_149004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (15))){
var inst_148788 = (state_148909[(13)]);
var inst_148789 = (state_148909[(14)]);
var inst_148787 = (state_148909[(16)]);
var inst_148786 = (state_148909[(17)]);
var inst_148804 = (state_148909[(2)]);
var inst_148805 = (inst_148789 + (1));
var tmp148921 = inst_148788;
var tmp148922 = inst_148787;
var tmp148923 = inst_148786;
var inst_148786__$1 = tmp148923;
var inst_148787__$1 = tmp148922;
var inst_148788__$1 = tmp148921;
var inst_148789__$1 = inst_148805;
var state_148909__$1 = (function (){var statearr_148928 = state_148909;
(statearr_148928[(13)] = inst_148788__$1);

(statearr_148928[(14)] = inst_148789__$1);

(statearr_148928[(16)] = inst_148787__$1);

(statearr_148928[(17)] = inst_148786__$1);

(statearr_148928[(18)] = inst_148804);

return statearr_148928;
})();
var statearr_148929_149005 = state_148909__$1;
(statearr_148929_149005[(2)] = null);

(statearr_148929_149005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (21))){
var inst_148831 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148933_149006 = state_148909__$1;
(statearr_148933_149006[(2)] = inst_148831);

(statearr_148933_149006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (31))){
var inst_148857 = (state_148909[(11)]);
var inst_148861 = done.call(null,null);
var inst_148862 = cljs.core.async.untap_STAR_.call(null,m,inst_148857);
var state_148909__$1 = (function (){var statearr_148934 = state_148909;
(statearr_148934[(19)] = inst_148861);

return statearr_148934;
})();
var statearr_148935_149007 = state_148909__$1;
(statearr_148935_149007[(2)] = inst_148862);

(statearr_148935_149007[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (32))){
var inst_148851 = (state_148909[(20)]);
var inst_148852 = (state_148909[(10)]);
var inst_148849 = (state_148909[(21)]);
var inst_148850 = (state_148909[(12)]);
var inst_148864 = (state_148909[(2)]);
var inst_148865 = (inst_148852 + (1));
var tmp148930 = inst_148851;
var tmp148931 = inst_148849;
var tmp148932 = inst_148850;
var inst_148849__$1 = tmp148931;
var inst_148850__$1 = tmp148932;
var inst_148851__$1 = tmp148930;
var inst_148852__$1 = inst_148865;
var state_148909__$1 = (function (){var statearr_148936 = state_148909;
(statearr_148936[(20)] = inst_148851__$1);

(statearr_148936[(10)] = inst_148852__$1);

(statearr_148936[(21)] = inst_148849__$1);

(statearr_148936[(12)] = inst_148850__$1);

(statearr_148936[(22)] = inst_148864);

return statearr_148936;
})();
var statearr_148937_149008 = state_148909__$1;
(statearr_148937_149008[(2)] = null);

(statearr_148937_149008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (40))){
var inst_148877 = (state_148909[(23)]);
var inst_148881 = done.call(null,null);
var inst_148882 = cljs.core.async.untap_STAR_.call(null,m,inst_148877);
var state_148909__$1 = (function (){var statearr_148938 = state_148909;
(statearr_148938[(24)] = inst_148881);

return statearr_148938;
})();
var statearr_148939_149009 = state_148909__$1;
(statearr_148939_149009[(2)] = inst_148882);

(statearr_148939_149009[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (33))){
var inst_148868 = (state_148909[(25)]);
var inst_148870 = cljs.core.chunked_seq_QMARK_.call(null,inst_148868);
var state_148909__$1 = state_148909;
if(inst_148870){
var statearr_148940_149010 = state_148909__$1;
(statearr_148940_149010[(1)] = (36));

} else {
var statearr_148941_149011 = state_148909__$1;
(statearr_148941_149011[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (13))){
var inst_148798 = (state_148909[(26)]);
var inst_148801 = cljs.core.async.close_BANG_.call(null,inst_148798);
var state_148909__$1 = state_148909;
var statearr_148942_149012 = state_148909__$1;
(statearr_148942_149012[(2)] = inst_148801);

(statearr_148942_149012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (22))){
var inst_148821 = (state_148909[(8)]);
var inst_148824 = cljs.core.async.close_BANG_.call(null,inst_148821);
var state_148909__$1 = state_148909;
var statearr_148943_149013 = state_148909__$1;
(statearr_148943_149013[(2)] = inst_148824);

(statearr_148943_149013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (36))){
var inst_148868 = (state_148909[(25)]);
var inst_148872 = cljs.core.chunk_first.call(null,inst_148868);
var inst_148873 = cljs.core.chunk_rest.call(null,inst_148868);
var inst_148874 = cljs.core.count.call(null,inst_148872);
var inst_148849 = inst_148873;
var inst_148850 = inst_148872;
var inst_148851 = inst_148874;
var inst_148852 = (0);
var state_148909__$1 = (function (){var statearr_148944 = state_148909;
(statearr_148944[(20)] = inst_148851);

(statearr_148944[(10)] = inst_148852);

(statearr_148944[(21)] = inst_148849);

(statearr_148944[(12)] = inst_148850);

return statearr_148944;
})();
var statearr_148945_149014 = state_148909__$1;
(statearr_148945_149014[(2)] = null);

(statearr_148945_149014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (41))){
var inst_148868 = (state_148909[(25)]);
var inst_148884 = (state_148909[(2)]);
var inst_148885 = cljs.core.next.call(null,inst_148868);
var inst_148849 = inst_148885;
var inst_148850 = null;
var inst_148851 = (0);
var inst_148852 = (0);
var state_148909__$1 = (function (){var statearr_148946 = state_148909;
(statearr_148946[(20)] = inst_148851);

(statearr_148946[(10)] = inst_148852);

(statearr_148946[(21)] = inst_148849);

(statearr_148946[(27)] = inst_148884);

(statearr_148946[(12)] = inst_148850);

return statearr_148946;
})();
var statearr_148947_149015 = state_148909__$1;
(statearr_148947_149015[(2)] = null);

(statearr_148947_149015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (43))){
var state_148909__$1 = state_148909;
var statearr_148948_149016 = state_148909__$1;
(statearr_148948_149016[(2)] = null);

(statearr_148948_149016[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (29))){
var inst_148893 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148949_149017 = state_148909__$1;
(statearr_148949_149017[(2)] = inst_148893);

(statearr_148949_149017[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (44))){
var inst_148902 = (state_148909[(2)]);
var state_148909__$1 = (function (){var statearr_148950 = state_148909;
(statearr_148950[(28)] = inst_148902);

return statearr_148950;
})();
var statearr_148951_149018 = state_148909__$1;
(statearr_148951_149018[(2)] = null);

(statearr_148951_149018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (6))){
var inst_148841 = (state_148909[(29)]);
var inst_148840 = cljs.core.deref.call(null,cs);
var inst_148841__$1 = cljs.core.keys.call(null,inst_148840);
var inst_148842 = cljs.core.count.call(null,inst_148841__$1);
var inst_148843 = cljs.core.reset_BANG_.call(null,dctr,inst_148842);
var inst_148848 = cljs.core.seq.call(null,inst_148841__$1);
var inst_148849 = inst_148848;
var inst_148850 = null;
var inst_148851 = (0);
var inst_148852 = (0);
var state_148909__$1 = (function (){var statearr_148952 = state_148909;
(statearr_148952[(20)] = inst_148851);

(statearr_148952[(29)] = inst_148841__$1);

(statearr_148952[(10)] = inst_148852);

(statearr_148952[(21)] = inst_148849);

(statearr_148952[(30)] = inst_148843);

(statearr_148952[(12)] = inst_148850);

return statearr_148952;
})();
var statearr_148953_149019 = state_148909__$1;
(statearr_148953_149019[(2)] = null);

(statearr_148953_149019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (28))){
var inst_148868 = (state_148909[(25)]);
var inst_148849 = (state_148909[(21)]);
var inst_148868__$1 = cljs.core.seq.call(null,inst_148849);
var state_148909__$1 = (function (){var statearr_148954 = state_148909;
(statearr_148954[(25)] = inst_148868__$1);

return statearr_148954;
})();
if(inst_148868__$1){
var statearr_148955_149020 = state_148909__$1;
(statearr_148955_149020[(1)] = (33));

} else {
var statearr_148956_149021 = state_148909__$1;
(statearr_148956_149021[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (25))){
var inst_148851 = (state_148909[(20)]);
var inst_148852 = (state_148909[(10)]);
var inst_148854 = (inst_148852 < inst_148851);
var inst_148855 = inst_148854;
var state_148909__$1 = state_148909;
if(cljs.core.truth_(inst_148855)){
var statearr_148957_149022 = state_148909__$1;
(statearr_148957_149022[(1)] = (27));

} else {
var statearr_148958_149023 = state_148909__$1;
(statearr_148958_149023[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (34))){
var state_148909__$1 = state_148909;
var statearr_148959_149024 = state_148909__$1;
(statearr_148959_149024[(2)] = null);

(statearr_148959_149024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (17))){
var state_148909__$1 = state_148909;
var statearr_148960_149025 = state_148909__$1;
(statearr_148960_149025[(2)] = null);

(statearr_148960_149025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (3))){
var inst_148907 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148909__$1,inst_148907);
} else {
if((state_val_148910 === (12))){
var inst_148836 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148961_149026 = state_148909__$1;
(statearr_148961_149026[(2)] = inst_148836);

(statearr_148961_149026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (2))){
var state_148909__$1 = state_148909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148909__$1,(4),ch);
} else {
if((state_val_148910 === (23))){
var state_148909__$1 = state_148909;
var statearr_148962_149027 = state_148909__$1;
(statearr_148962_149027[(2)] = null);

(statearr_148962_149027[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (35))){
var inst_148891 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148963_149028 = state_148909__$1;
(statearr_148963_149028[(2)] = inst_148891);

(statearr_148963_149028[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (19))){
var inst_148808 = (state_148909[(7)]);
var inst_148812 = cljs.core.chunk_first.call(null,inst_148808);
var inst_148813 = cljs.core.chunk_rest.call(null,inst_148808);
var inst_148814 = cljs.core.count.call(null,inst_148812);
var inst_148786 = inst_148813;
var inst_148787 = inst_148812;
var inst_148788 = inst_148814;
var inst_148789 = (0);
var state_148909__$1 = (function (){var statearr_148964 = state_148909;
(statearr_148964[(13)] = inst_148788);

(statearr_148964[(14)] = inst_148789);

(statearr_148964[(16)] = inst_148787);

(statearr_148964[(17)] = inst_148786);

return statearr_148964;
})();
var statearr_148965_149029 = state_148909__$1;
(statearr_148965_149029[(2)] = null);

(statearr_148965_149029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (11))){
var inst_148786 = (state_148909[(17)]);
var inst_148808 = (state_148909[(7)]);
var inst_148808__$1 = cljs.core.seq.call(null,inst_148786);
var state_148909__$1 = (function (){var statearr_148966 = state_148909;
(statearr_148966[(7)] = inst_148808__$1);

return statearr_148966;
})();
if(inst_148808__$1){
var statearr_148967_149030 = state_148909__$1;
(statearr_148967_149030[(1)] = (16));

} else {
var statearr_148968_149031 = state_148909__$1;
(statearr_148968_149031[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (9))){
var inst_148838 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148969_149032 = state_148909__$1;
(statearr_148969_149032[(2)] = inst_148838);

(statearr_148969_149032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (5))){
var inst_148784 = cljs.core.deref.call(null,cs);
var inst_148785 = cljs.core.seq.call(null,inst_148784);
var inst_148786 = inst_148785;
var inst_148787 = null;
var inst_148788 = (0);
var inst_148789 = (0);
var state_148909__$1 = (function (){var statearr_148970 = state_148909;
(statearr_148970[(13)] = inst_148788);

(statearr_148970[(14)] = inst_148789);

(statearr_148970[(16)] = inst_148787);

(statearr_148970[(17)] = inst_148786);

return statearr_148970;
})();
var statearr_148971_149033 = state_148909__$1;
(statearr_148971_149033[(2)] = null);

(statearr_148971_149033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (14))){
var state_148909__$1 = state_148909;
var statearr_148972_149034 = state_148909__$1;
(statearr_148972_149034[(2)] = null);

(statearr_148972_149034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (45))){
var inst_148899 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148973_149035 = state_148909__$1;
(statearr_148973_149035[(2)] = inst_148899);

(statearr_148973_149035[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (26))){
var inst_148841 = (state_148909[(29)]);
var inst_148895 = (state_148909[(2)]);
var inst_148896 = cljs.core.seq.call(null,inst_148841);
var state_148909__$1 = (function (){var statearr_148974 = state_148909;
(statearr_148974[(31)] = inst_148895);

return statearr_148974;
})();
if(inst_148896){
var statearr_148975_149036 = state_148909__$1;
(statearr_148975_149036[(1)] = (42));

} else {
var statearr_148976_149037 = state_148909__$1;
(statearr_148976_149037[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (16))){
var inst_148808 = (state_148909[(7)]);
var inst_148810 = cljs.core.chunked_seq_QMARK_.call(null,inst_148808);
var state_148909__$1 = state_148909;
if(inst_148810){
var statearr_148977_149038 = state_148909__$1;
(statearr_148977_149038[(1)] = (19));

} else {
var statearr_148978_149039 = state_148909__$1;
(statearr_148978_149039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (38))){
var inst_148888 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148979_149040 = state_148909__$1;
(statearr_148979_149040[(2)] = inst_148888);

(statearr_148979_149040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (30))){
var state_148909__$1 = state_148909;
var statearr_148980_149041 = state_148909__$1;
(statearr_148980_149041[(2)] = null);

(statearr_148980_149041[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (10))){
var inst_148789 = (state_148909[(14)]);
var inst_148787 = (state_148909[(16)]);
var inst_148797 = cljs.core._nth.call(null,inst_148787,inst_148789);
var inst_148798 = cljs.core.nth.call(null,inst_148797,(0),null);
var inst_148799 = cljs.core.nth.call(null,inst_148797,(1),null);
var state_148909__$1 = (function (){var statearr_148981 = state_148909;
(statearr_148981[(26)] = inst_148798);

return statearr_148981;
})();
if(cljs.core.truth_(inst_148799)){
var statearr_148982_149042 = state_148909__$1;
(statearr_148982_149042[(1)] = (13));

} else {
var statearr_148983_149043 = state_148909__$1;
(statearr_148983_149043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (18))){
var inst_148834 = (state_148909[(2)]);
var state_148909__$1 = state_148909;
var statearr_148984_149044 = state_148909__$1;
(statearr_148984_149044[(2)] = inst_148834);

(statearr_148984_149044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (42))){
var state_148909__$1 = state_148909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148909__$1,(45),dchan);
} else {
if((state_val_148910 === (37))){
var inst_148777 = (state_148909[(9)]);
var inst_148868 = (state_148909[(25)]);
var inst_148877 = (state_148909[(23)]);
var inst_148877__$1 = cljs.core.first.call(null,inst_148868);
var inst_148878 = cljs.core.async.put_BANG_.call(null,inst_148877__$1,inst_148777,done);
var state_148909__$1 = (function (){var statearr_148985 = state_148909;
(statearr_148985[(23)] = inst_148877__$1);

return statearr_148985;
})();
if(cljs.core.truth_(inst_148878)){
var statearr_148986_149045 = state_148909__$1;
(statearr_148986_149045[(1)] = (39));

} else {
var statearr_148987_149046 = state_148909__$1;
(statearr_148987_149046[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148910 === (8))){
var inst_148788 = (state_148909[(13)]);
var inst_148789 = (state_148909[(14)]);
var inst_148791 = (inst_148789 < inst_148788);
var inst_148792 = inst_148791;
var state_148909__$1 = state_148909;
if(cljs.core.truth_(inst_148792)){
var statearr_148988_149047 = state_148909__$1;
(statearr_148988_149047[(1)] = (10));

} else {
var statearr_148989_149048 = state_148909__$1;
(statearr_148989_149048[(1)] = (11));

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
});})(c__148175__auto___148994,cs,m,dchan,dctr,done))
;
return ((function (switch__148085__auto__,c__148175__auto___148994,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__148086__auto__ = null;
var cljs$core$async$mult_$_state_machine__148086__auto____0 = (function (){
var statearr_148990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_148990[(0)] = cljs$core$async$mult_$_state_machine__148086__auto__);

(statearr_148990[(1)] = (1));

return statearr_148990;
});
var cljs$core$async$mult_$_state_machine__148086__auto____1 = (function (state_148909){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_148909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e148991){if((e148991 instanceof Object)){
var ex__148089__auto__ = e148991;
var statearr_148992_149049 = state_148909;
(statearr_148992_149049[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149050 = state_148909;
state_148909 = G__149050;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__148086__auto__ = function(state_148909){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__148086__auto____1.call(this,state_148909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__148086__auto____0;
cljs$core$async$mult_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__148086__auto____1;
return cljs$core$async$mult_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___148994,cs,m,dchan,dctr,done))
})();
var state__148177__auto__ = (function (){var statearr_148993 = f__148176__auto__.call(null);
(statearr_148993[(6)] = c__148175__auto___148994);

return statearr_148993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___148994,cs,m,dchan,dctr,done))
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
var G__149052 = arguments.length;
switch (G__149052) {
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
var len__50798__auto___149064 = arguments.length;
var i__50799__auto___149065 = (0);
while(true){
if((i__50799__auto___149065 < len__50798__auto___149064)){
args__50805__auto__.push((arguments[i__50799__auto___149065]));

var G__149066 = (i__50799__auto___149065 + (1));
i__50799__auto___149065 = G__149066;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((3) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__50806__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__149058){
var map__149059 = p__149058;
var map__149059__$1 = ((((!((map__149059 == null)))?((((map__149059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__149059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__149059):map__149059);
var opts = map__149059__$1;
var statearr_149061_149067 = state;
(statearr_149061_149067[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__149059,map__149059__$1,opts){
return (function (val){
var statearr_149062_149068 = state;
(statearr_149062_149068[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__149059,map__149059__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_149063_149069 = state;
(statearr_149063_149069[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq149054){
var G__149055 = cljs.core.first.call(null,seq149054);
var seq149054__$1 = cljs.core.next.call(null,seq149054);
var G__149056 = cljs.core.first.call(null,seq149054__$1);
var seq149054__$2 = cljs.core.next.call(null,seq149054__$1);
var G__149057 = cljs.core.first.call(null,seq149054__$2);
var seq149054__$3 = cljs.core.next.call(null,seq149054__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__149055,G__149056,G__149057,seq149054__$3);
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
if(typeof cljs.core.async.t_cljs$core$async149070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149070 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta149071){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta149071 = meta149071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_149072,meta149071__$1){
var self__ = this;
var _149072__$1 = this;
return (new cljs.core.async.t_cljs$core$async149070(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta149071__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_149072){
var self__ = this;
var _149072__$1 = this;
return self__.meta149071;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149070.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async149070.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta149071","meta149071",-1997573274,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149070";

cljs.core.async.t_cljs$core$async149070.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async149070");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async149070 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async149070(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta149071){
return (new cljs.core.async.t_cljs$core$async149070(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta149071));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async149070(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__148175__auto___149234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___149234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___149234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_149174){
var state_val_149175 = (state_149174[(1)]);
if((state_val_149175 === (7))){
var inst_149089 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
var statearr_149176_149235 = state_149174__$1;
(statearr_149176_149235[(2)] = inst_149089);

(statearr_149176_149235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (20))){
var inst_149101 = (state_149174[(7)]);
var state_149174__$1 = state_149174;
var statearr_149177_149236 = state_149174__$1;
(statearr_149177_149236[(2)] = inst_149101);

(statearr_149177_149236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (27))){
var state_149174__$1 = state_149174;
var statearr_149178_149237 = state_149174__$1;
(statearr_149178_149237[(2)] = null);

(statearr_149178_149237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (1))){
var inst_149076 = (state_149174[(8)]);
var inst_149076__$1 = calc_state.call(null);
var inst_149078 = (inst_149076__$1 == null);
var inst_149079 = cljs.core.not.call(null,inst_149078);
var state_149174__$1 = (function (){var statearr_149179 = state_149174;
(statearr_149179[(8)] = inst_149076__$1);

return statearr_149179;
})();
if(inst_149079){
var statearr_149180_149238 = state_149174__$1;
(statearr_149180_149238[(1)] = (2));

} else {
var statearr_149181_149239 = state_149174__$1;
(statearr_149181_149239[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (24))){
var inst_149125 = (state_149174[(9)]);
var inst_149134 = (state_149174[(10)]);
var inst_149148 = (state_149174[(11)]);
var inst_149148__$1 = inst_149125.call(null,inst_149134);
var state_149174__$1 = (function (){var statearr_149182 = state_149174;
(statearr_149182[(11)] = inst_149148__$1);

return statearr_149182;
})();
if(cljs.core.truth_(inst_149148__$1)){
var statearr_149183_149240 = state_149174__$1;
(statearr_149183_149240[(1)] = (29));

} else {
var statearr_149184_149241 = state_149174__$1;
(statearr_149184_149241[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (4))){
var inst_149092 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
if(cljs.core.truth_(inst_149092)){
var statearr_149185_149242 = state_149174__$1;
(statearr_149185_149242[(1)] = (8));

} else {
var statearr_149186_149243 = state_149174__$1;
(statearr_149186_149243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (15))){
var inst_149119 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
if(cljs.core.truth_(inst_149119)){
var statearr_149187_149244 = state_149174__$1;
(statearr_149187_149244[(1)] = (19));

} else {
var statearr_149188_149245 = state_149174__$1;
(statearr_149188_149245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (21))){
var inst_149124 = (state_149174[(12)]);
var inst_149124__$1 = (state_149174[(2)]);
var inst_149125 = cljs.core.get.call(null,inst_149124__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_149126 = cljs.core.get.call(null,inst_149124__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_149127 = cljs.core.get.call(null,inst_149124__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_149174__$1 = (function (){var statearr_149189 = state_149174;
(statearr_149189[(13)] = inst_149126);

(statearr_149189[(9)] = inst_149125);

(statearr_149189[(12)] = inst_149124__$1);

return statearr_149189;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_149174__$1,(22),inst_149127);
} else {
if((state_val_149175 === (31))){
var inst_149156 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
if(cljs.core.truth_(inst_149156)){
var statearr_149190_149246 = state_149174__$1;
(statearr_149190_149246[(1)] = (32));

} else {
var statearr_149191_149247 = state_149174__$1;
(statearr_149191_149247[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (32))){
var inst_149133 = (state_149174[(14)]);
var state_149174__$1 = state_149174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149174__$1,(35),out,inst_149133);
} else {
if((state_val_149175 === (33))){
var inst_149124 = (state_149174[(12)]);
var inst_149101 = inst_149124;
var state_149174__$1 = (function (){var statearr_149192 = state_149174;
(statearr_149192[(7)] = inst_149101);

return statearr_149192;
})();
var statearr_149193_149248 = state_149174__$1;
(statearr_149193_149248[(2)] = null);

(statearr_149193_149248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (13))){
var inst_149101 = (state_149174[(7)]);
var inst_149108 = inst_149101.cljs$lang$protocol_mask$partition0$;
var inst_149109 = (inst_149108 & (64));
var inst_149110 = inst_149101.cljs$core$ISeq$;
var inst_149111 = (cljs.core.PROTOCOL_SENTINEL === inst_149110);
var inst_149112 = (inst_149109) || (inst_149111);
var state_149174__$1 = state_149174;
if(cljs.core.truth_(inst_149112)){
var statearr_149194_149249 = state_149174__$1;
(statearr_149194_149249[(1)] = (16));

} else {
var statearr_149195_149250 = state_149174__$1;
(statearr_149195_149250[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (22))){
var inst_149133 = (state_149174[(14)]);
var inst_149134 = (state_149174[(10)]);
var inst_149132 = (state_149174[(2)]);
var inst_149133__$1 = cljs.core.nth.call(null,inst_149132,(0),null);
var inst_149134__$1 = cljs.core.nth.call(null,inst_149132,(1),null);
var inst_149135 = (inst_149133__$1 == null);
var inst_149136 = cljs.core._EQ_.call(null,inst_149134__$1,change);
var inst_149137 = (inst_149135) || (inst_149136);
var state_149174__$1 = (function (){var statearr_149196 = state_149174;
(statearr_149196[(14)] = inst_149133__$1);

(statearr_149196[(10)] = inst_149134__$1);

return statearr_149196;
})();
if(cljs.core.truth_(inst_149137)){
var statearr_149197_149251 = state_149174__$1;
(statearr_149197_149251[(1)] = (23));

} else {
var statearr_149198_149252 = state_149174__$1;
(statearr_149198_149252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (36))){
var inst_149124 = (state_149174[(12)]);
var inst_149101 = inst_149124;
var state_149174__$1 = (function (){var statearr_149199 = state_149174;
(statearr_149199[(7)] = inst_149101);

return statearr_149199;
})();
var statearr_149200_149253 = state_149174__$1;
(statearr_149200_149253[(2)] = null);

(statearr_149200_149253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (29))){
var inst_149148 = (state_149174[(11)]);
var state_149174__$1 = state_149174;
var statearr_149201_149254 = state_149174__$1;
(statearr_149201_149254[(2)] = inst_149148);

(statearr_149201_149254[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (6))){
var state_149174__$1 = state_149174;
var statearr_149202_149255 = state_149174__$1;
(statearr_149202_149255[(2)] = false);

(statearr_149202_149255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (28))){
var inst_149144 = (state_149174[(2)]);
var inst_149145 = calc_state.call(null);
var inst_149101 = inst_149145;
var state_149174__$1 = (function (){var statearr_149203 = state_149174;
(statearr_149203[(15)] = inst_149144);

(statearr_149203[(7)] = inst_149101);

return statearr_149203;
})();
var statearr_149204_149256 = state_149174__$1;
(statearr_149204_149256[(2)] = null);

(statearr_149204_149256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (25))){
var inst_149170 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
var statearr_149205_149257 = state_149174__$1;
(statearr_149205_149257[(2)] = inst_149170);

(statearr_149205_149257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (34))){
var inst_149168 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
var statearr_149206_149258 = state_149174__$1;
(statearr_149206_149258[(2)] = inst_149168);

(statearr_149206_149258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (17))){
var state_149174__$1 = state_149174;
var statearr_149207_149259 = state_149174__$1;
(statearr_149207_149259[(2)] = false);

(statearr_149207_149259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (3))){
var state_149174__$1 = state_149174;
var statearr_149208_149260 = state_149174__$1;
(statearr_149208_149260[(2)] = false);

(statearr_149208_149260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (12))){
var inst_149172 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149174__$1,inst_149172);
} else {
if((state_val_149175 === (2))){
var inst_149076 = (state_149174[(8)]);
var inst_149081 = inst_149076.cljs$lang$protocol_mask$partition0$;
var inst_149082 = (inst_149081 & (64));
var inst_149083 = inst_149076.cljs$core$ISeq$;
var inst_149084 = (cljs.core.PROTOCOL_SENTINEL === inst_149083);
var inst_149085 = (inst_149082) || (inst_149084);
var state_149174__$1 = state_149174;
if(cljs.core.truth_(inst_149085)){
var statearr_149209_149261 = state_149174__$1;
(statearr_149209_149261[(1)] = (5));

} else {
var statearr_149210_149262 = state_149174__$1;
(statearr_149210_149262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (23))){
var inst_149133 = (state_149174[(14)]);
var inst_149139 = (inst_149133 == null);
var state_149174__$1 = state_149174;
if(cljs.core.truth_(inst_149139)){
var statearr_149211_149263 = state_149174__$1;
(statearr_149211_149263[(1)] = (26));

} else {
var statearr_149212_149264 = state_149174__$1;
(statearr_149212_149264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (35))){
var inst_149159 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
if(cljs.core.truth_(inst_149159)){
var statearr_149213_149265 = state_149174__$1;
(statearr_149213_149265[(1)] = (36));

} else {
var statearr_149214_149266 = state_149174__$1;
(statearr_149214_149266[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (19))){
var inst_149101 = (state_149174[(7)]);
var inst_149121 = cljs.core.apply.call(null,cljs.core.hash_map,inst_149101);
var state_149174__$1 = state_149174;
var statearr_149215_149267 = state_149174__$1;
(statearr_149215_149267[(2)] = inst_149121);

(statearr_149215_149267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (11))){
var inst_149101 = (state_149174[(7)]);
var inst_149105 = (inst_149101 == null);
var inst_149106 = cljs.core.not.call(null,inst_149105);
var state_149174__$1 = state_149174;
if(inst_149106){
var statearr_149216_149268 = state_149174__$1;
(statearr_149216_149268[(1)] = (13));

} else {
var statearr_149217_149269 = state_149174__$1;
(statearr_149217_149269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (9))){
var inst_149076 = (state_149174[(8)]);
var state_149174__$1 = state_149174;
var statearr_149218_149270 = state_149174__$1;
(statearr_149218_149270[(2)] = inst_149076);

(statearr_149218_149270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (5))){
var state_149174__$1 = state_149174;
var statearr_149219_149271 = state_149174__$1;
(statearr_149219_149271[(2)] = true);

(statearr_149219_149271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (14))){
var state_149174__$1 = state_149174;
var statearr_149220_149272 = state_149174__$1;
(statearr_149220_149272[(2)] = false);

(statearr_149220_149272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (26))){
var inst_149134 = (state_149174[(10)]);
var inst_149141 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_149134);
var state_149174__$1 = state_149174;
var statearr_149221_149273 = state_149174__$1;
(statearr_149221_149273[(2)] = inst_149141);

(statearr_149221_149273[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (16))){
var state_149174__$1 = state_149174;
var statearr_149222_149274 = state_149174__$1;
(statearr_149222_149274[(2)] = true);

(statearr_149222_149274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (38))){
var inst_149164 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
var statearr_149223_149275 = state_149174__$1;
(statearr_149223_149275[(2)] = inst_149164);

(statearr_149223_149275[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (30))){
var inst_149126 = (state_149174[(13)]);
var inst_149125 = (state_149174[(9)]);
var inst_149134 = (state_149174[(10)]);
var inst_149151 = cljs.core.empty_QMARK_.call(null,inst_149125);
var inst_149152 = inst_149126.call(null,inst_149134);
var inst_149153 = cljs.core.not.call(null,inst_149152);
var inst_149154 = (inst_149151) && (inst_149153);
var state_149174__$1 = state_149174;
var statearr_149224_149276 = state_149174__$1;
(statearr_149224_149276[(2)] = inst_149154);

(statearr_149224_149276[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (10))){
var inst_149076 = (state_149174[(8)]);
var inst_149097 = (state_149174[(2)]);
var inst_149098 = cljs.core.get.call(null,inst_149097,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_149099 = cljs.core.get.call(null,inst_149097,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_149100 = cljs.core.get.call(null,inst_149097,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_149101 = inst_149076;
var state_149174__$1 = (function (){var statearr_149225 = state_149174;
(statearr_149225[(7)] = inst_149101);

(statearr_149225[(16)] = inst_149100);

(statearr_149225[(17)] = inst_149098);

(statearr_149225[(18)] = inst_149099);

return statearr_149225;
})();
var statearr_149226_149277 = state_149174__$1;
(statearr_149226_149277[(2)] = null);

(statearr_149226_149277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (18))){
var inst_149116 = (state_149174[(2)]);
var state_149174__$1 = state_149174;
var statearr_149227_149278 = state_149174__$1;
(statearr_149227_149278[(2)] = inst_149116);

(statearr_149227_149278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (37))){
var state_149174__$1 = state_149174;
var statearr_149228_149279 = state_149174__$1;
(statearr_149228_149279[(2)] = null);

(statearr_149228_149279[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149175 === (8))){
var inst_149076 = (state_149174[(8)]);
var inst_149094 = cljs.core.apply.call(null,cljs.core.hash_map,inst_149076);
var state_149174__$1 = state_149174;
var statearr_149229_149280 = state_149174__$1;
(statearr_149229_149280[(2)] = inst_149094);

(statearr_149229_149280[(1)] = (10));


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
});})(c__148175__auto___149234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__148085__auto__,c__148175__auto___149234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__148086__auto__ = null;
var cljs$core$async$mix_$_state_machine__148086__auto____0 = (function (){
var statearr_149230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149230[(0)] = cljs$core$async$mix_$_state_machine__148086__auto__);

(statearr_149230[(1)] = (1));

return statearr_149230;
});
var cljs$core$async$mix_$_state_machine__148086__auto____1 = (function (state_149174){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149231){if((e149231 instanceof Object)){
var ex__148089__auto__ = e149231;
var statearr_149232_149281 = state_149174;
(statearr_149232_149281[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149282 = state_149174;
state_149174 = G__149282;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__148086__auto__ = function(state_149174){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__148086__auto____1.call(this,state_149174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__148086__auto____0;
cljs$core$async$mix_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__148086__auto____1;
return cljs$core$async$mix_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___149234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__148177__auto__ = (function (){var statearr_149233 = f__148176__auto__.call(null);
(statearr_149233[(6)] = c__148175__auto___149234);

return statearr_149233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___149234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__149284 = arguments.length;
switch (G__149284) {
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
var G__149288 = arguments.length;
switch (G__149288) {
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
return (function (p1__149286_SHARP_){
if(cljs.core.truth_(p1__149286_SHARP_.call(null,topic))){
return p1__149286_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__149286_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__49521__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async149289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149289 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta149290){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta149290 = meta149290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_149291,meta149290__$1){
var self__ = this;
var _149291__$1 = this;
return (new cljs.core.async.t_cljs$core$async149289(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta149290__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_149291){
var self__ = this;
var _149291__$1 = this;
return self__.meta149290;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149289.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta149290","meta149290",-2076207998,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149289";

cljs.core.async.t_cljs$core$async149289.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async149289");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async149289 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async149289(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta149290){
return (new cljs.core.async.t_cljs$core$async149289(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta149290));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async149289(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__148175__auto___149409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___149409,mults,ensure_mult,p){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___149409,mults,ensure_mult,p){
return (function (state_149363){
var state_val_149364 = (state_149363[(1)]);
if((state_val_149364 === (7))){
var inst_149359 = (state_149363[(2)]);
var state_149363__$1 = state_149363;
var statearr_149365_149410 = state_149363__$1;
(statearr_149365_149410[(2)] = inst_149359);

(statearr_149365_149410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (20))){
var state_149363__$1 = state_149363;
var statearr_149366_149411 = state_149363__$1;
(statearr_149366_149411[(2)] = null);

(statearr_149366_149411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (1))){
var state_149363__$1 = state_149363;
var statearr_149367_149412 = state_149363__$1;
(statearr_149367_149412[(2)] = null);

(statearr_149367_149412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (24))){
var inst_149342 = (state_149363[(7)]);
var inst_149351 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_149342);
var state_149363__$1 = state_149363;
var statearr_149368_149413 = state_149363__$1;
(statearr_149368_149413[(2)] = inst_149351);

(statearr_149368_149413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (4))){
var inst_149294 = (state_149363[(8)]);
var inst_149294__$1 = (state_149363[(2)]);
var inst_149295 = (inst_149294__$1 == null);
var state_149363__$1 = (function (){var statearr_149369 = state_149363;
(statearr_149369[(8)] = inst_149294__$1);

return statearr_149369;
})();
if(cljs.core.truth_(inst_149295)){
var statearr_149370_149414 = state_149363__$1;
(statearr_149370_149414[(1)] = (5));

} else {
var statearr_149371_149415 = state_149363__$1;
(statearr_149371_149415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (15))){
var inst_149336 = (state_149363[(2)]);
var state_149363__$1 = state_149363;
var statearr_149372_149416 = state_149363__$1;
(statearr_149372_149416[(2)] = inst_149336);

(statearr_149372_149416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (21))){
var inst_149356 = (state_149363[(2)]);
var state_149363__$1 = (function (){var statearr_149373 = state_149363;
(statearr_149373[(9)] = inst_149356);

return statearr_149373;
})();
var statearr_149374_149417 = state_149363__$1;
(statearr_149374_149417[(2)] = null);

(statearr_149374_149417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (13))){
var inst_149318 = (state_149363[(10)]);
var inst_149320 = cljs.core.chunked_seq_QMARK_.call(null,inst_149318);
var state_149363__$1 = state_149363;
if(inst_149320){
var statearr_149375_149418 = state_149363__$1;
(statearr_149375_149418[(1)] = (16));

} else {
var statearr_149376_149419 = state_149363__$1;
(statearr_149376_149419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (22))){
var inst_149348 = (state_149363[(2)]);
var state_149363__$1 = state_149363;
if(cljs.core.truth_(inst_149348)){
var statearr_149377_149420 = state_149363__$1;
(statearr_149377_149420[(1)] = (23));

} else {
var statearr_149378_149421 = state_149363__$1;
(statearr_149378_149421[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (6))){
var inst_149294 = (state_149363[(8)]);
var inst_149342 = (state_149363[(7)]);
var inst_149344 = (state_149363[(11)]);
var inst_149342__$1 = topic_fn.call(null,inst_149294);
var inst_149343 = cljs.core.deref.call(null,mults);
var inst_149344__$1 = cljs.core.get.call(null,inst_149343,inst_149342__$1);
var state_149363__$1 = (function (){var statearr_149379 = state_149363;
(statearr_149379[(7)] = inst_149342__$1);

(statearr_149379[(11)] = inst_149344__$1);

return statearr_149379;
})();
if(cljs.core.truth_(inst_149344__$1)){
var statearr_149380_149422 = state_149363__$1;
(statearr_149380_149422[(1)] = (19));

} else {
var statearr_149381_149423 = state_149363__$1;
(statearr_149381_149423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (25))){
var inst_149353 = (state_149363[(2)]);
var state_149363__$1 = state_149363;
var statearr_149382_149424 = state_149363__$1;
(statearr_149382_149424[(2)] = inst_149353);

(statearr_149382_149424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (17))){
var inst_149318 = (state_149363[(10)]);
var inst_149327 = cljs.core.first.call(null,inst_149318);
var inst_149328 = cljs.core.async.muxch_STAR_.call(null,inst_149327);
var inst_149329 = cljs.core.async.close_BANG_.call(null,inst_149328);
var inst_149330 = cljs.core.next.call(null,inst_149318);
var inst_149304 = inst_149330;
var inst_149305 = null;
var inst_149306 = (0);
var inst_149307 = (0);
var state_149363__$1 = (function (){var statearr_149383 = state_149363;
(statearr_149383[(12)] = inst_149307);

(statearr_149383[(13)] = inst_149305);

(statearr_149383[(14)] = inst_149306);

(statearr_149383[(15)] = inst_149304);

(statearr_149383[(16)] = inst_149329);

return statearr_149383;
})();
var statearr_149384_149425 = state_149363__$1;
(statearr_149384_149425[(2)] = null);

(statearr_149384_149425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (3))){
var inst_149361 = (state_149363[(2)]);
var state_149363__$1 = state_149363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149363__$1,inst_149361);
} else {
if((state_val_149364 === (12))){
var inst_149338 = (state_149363[(2)]);
var state_149363__$1 = state_149363;
var statearr_149385_149426 = state_149363__$1;
(statearr_149385_149426[(2)] = inst_149338);

(statearr_149385_149426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (2))){
var state_149363__$1 = state_149363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149363__$1,(4),ch);
} else {
if((state_val_149364 === (23))){
var state_149363__$1 = state_149363;
var statearr_149386_149427 = state_149363__$1;
(statearr_149386_149427[(2)] = null);

(statearr_149386_149427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (19))){
var inst_149294 = (state_149363[(8)]);
var inst_149344 = (state_149363[(11)]);
var inst_149346 = cljs.core.async.muxch_STAR_.call(null,inst_149344);
var state_149363__$1 = state_149363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149363__$1,(22),inst_149346,inst_149294);
} else {
if((state_val_149364 === (11))){
var inst_149318 = (state_149363[(10)]);
var inst_149304 = (state_149363[(15)]);
var inst_149318__$1 = cljs.core.seq.call(null,inst_149304);
var state_149363__$1 = (function (){var statearr_149387 = state_149363;
(statearr_149387[(10)] = inst_149318__$1);

return statearr_149387;
})();
if(inst_149318__$1){
var statearr_149388_149428 = state_149363__$1;
(statearr_149388_149428[(1)] = (13));

} else {
var statearr_149389_149429 = state_149363__$1;
(statearr_149389_149429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (9))){
var inst_149340 = (state_149363[(2)]);
var state_149363__$1 = state_149363;
var statearr_149390_149430 = state_149363__$1;
(statearr_149390_149430[(2)] = inst_149340);

(statearr_149390_149430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (5))){
var inst_149301 = cljs.core.deref.call(null,mults);
var inst_149302 = cljs.core.vals.call(null,inst_149301);
var inst_149303 = cljs.core.seq.call(null,inst_149302);
var inst_149304 = inst_149303;
var inst_149305 = null;
var inst_149306 = (0);
var inst_149307 = (0);
var state_149363__$1 = (function (){var statearr_149391 = state_149363;
(statearr_149391[(12)] = inst_149307);

(statearr_149391[(13)] = inst_149305);

(statearr_149391[(14)] = inst_149306);

(statearr_149391[(15)] = inst_149304);

return statearr_149391;
})();
var statearr_149392_149431 = state_149363__$1;
(statearr_149392_149431[(2)] = null);

(statearr_149392_149431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (14))){
var state_149363__$1 = state_149363;
var statearr_149396_149432 = state_149363__$1;
(statearr_149396_149432[(2)] = null);

(statearr_149396_149432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (16))){
var inst_149318 = (state_149363[(10)]);
var inst_149322 = cljs.core.chunk_first.call(null,inst_149318);
var inst_149323 = cljs.core.chunk_rest.call(null,inst_149318);
var inst_149324 = cljs.core.count.call(null,inst_149322);
var inst_149304 = inst_149323;
var inst_149305 = inst_149322;
var inst_149306 = inst_149324;
var inst_149307 = (0);
var state_149363__$1 = (function (){var statearr_149397 = state_149363;
(statearr_149397[(12)] = inst_149307);

(statearr_149397[(13)] = inst_149305);

(statearr_149397[(14)] = inst_149306);

(statearr_149397[(15)] = inst_149304);

return statearr_149397;
})();
var statearr_149398_149433 = state_149363__$1;
(statearr_149398_149433[(2)] = null);

(statearr_149398_149433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (10))){
var inst_149307 = (state_149363[(12)]);
var inst_149305 = (state_149363[(13)]);
var inst_149306 = (state_149363[(14)]);
var inst_149304 = (state_149363[(15)]);
var inst_149312 = cljs.core._nth.call(null,inst_149305,inst_149307);
var inst_149313 = cljs.core.async.muxch_STAR_.call(null,inst_149312);
var inst_149314 = cljs.core.async.close_BANG_.call(null,inst_149313);
var inst_149315 = (inst_149307 + (1));
var tmp149393 = inst_149305;
var tmp149394 = inst_149306;
var tmp149395 = inst_149304;
var inst_149304__$1 = tmp149395;
var inst_149305__$1 = tmp149393;
var inst_149306__$1 = tmp149394;
var inst_149307__$1 = inst_149315;
var state_149363__$1 = (function (){var statearr_149399 = state_149363;
(statearr_149399[(17)] = inst_149314);

(statearr_149399[(12)] = inst_149307__$1);

(statearr_149399[(13)] = inst_149305__$1);

(statearr_149399[(14)] = inst_149306__$1);

(statearr_149399[(15)] = inst_149304__$1);

return statearr_149399;
})();
var statearr_149400_149434 = state_149363__$1;
(statearr_149400_149434[(2)] = null);

(statearr_149400_149434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (18))){
var inst_149333 = (state_149363[(2)]);
var state_149363__$1 = state_149363;
var statearr_149401_149435 = state_149363__$1;
(statearr_149401_149435[(2)] = inst_149333);

(statearr_149401_149435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149364 === (8))){
var inst_149307 = (state_149363[(12)]);
var inst_149306 = (state_149363[(14)]);
var inst_149309 = (inst_149307 < inst_149306);
var inst_149310 = inst_149309;
var state_149363__$1 = state_149363;
if(cljs.core.truth_(inst_149310)){
var statearr_149402_149436 = state_149363__$1;
(statearr_149402_149436[(1)] = (10));

} else {
var statearr_149403_149437 = state_149363__$1;
(statearr_149403_149437[(1)] = (11));

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
});})(c__148175__auto___149409,mults,ensure_mult,p))
;
return ((function (switch__148085__auto__,c__148175__auto___149409,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_149404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149404[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_149404[(1)] = (1));

return statearr_149404;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_149363){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149405){if((e149405 instanceof Object)){
var ex__148089__auto__ = e149405;
var statearr_149406_149438 = state_149363;
(statearr_149406_149438[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149439 = state_149363;
state_149363 = G__149439;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_149363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_149363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___149409,mults,ensure_mult,p))
})();
var state__148177__auto__ = (function (){var statearr_149407 = f__148176__auto__.call(null);
(statearr_149407[(6)] = c__148175__auto___149409);

return statearr_149407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___149409,mults,ensure_mult,p))
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
var G__149441 = arguments.length;
switch (G__149441) {
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
var G__149444 = arguments.length;
switch (G__149444) {
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
var G__149447 = arguments.length;
switch (G__149447) {
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
var c__148175__auto___149514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___149514,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___149514,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_149486){
var state_val_149487 = (state_149486[(1)]);
if((state_val_149487 === (7))){
var state_149486__$1 = state_149486;
var statearr_149488_149515 = state_149486__$1;
(statearr_149488_149515[(2)] = null);

(statearr_149488_149515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (1))){
var state_149486__$1 = state_149486;
var statearr_149489_149516 = state_149486__$1;
(statearr_149489_149516[(2)] = null);

(statearr_149489_149516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (4))){
var inst_149450 = (state_149486[(7)]);
var inst_149452 = (inst_149450 < cnt);
var state_149486__$1 = state_149486;
if(cljs.core.truth_(inst_149452)){
var statearr_149490_149517 = state_149486__$1;
(statearr_149490_149517[(1)] = (6));

} else {
var statearr_149491_149518 = state_149486__$1;
(statearr_149491_149518[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (15))){
var inst_149482 = (state_149486[(2)]);
var state_149486__$1 = state_149486;
var statearr_149492_149519 = state_149486__$1;
(statearr_149492_149519[(2)] = inst_149482);

(statearr_149492_149519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (13))){
var inst_149475 = cljs.core.async.close_BANG_.call(null,out);
var state_149486__$1 = state_149486;
var statearr_149493_149520 = state_149486__$1;
(statearr_149493_149520[(2)] = inst_149475);

(statearr_149493_149520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (6))){
var state_149486__$1 = state_149486;
var statearr_149494_149521 = state_149486__$1;
(statearr_149494_149521[(2)] = null);

(statearr_149494_149521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (3))){
var inst_149484 = (state_149486[(2)]);
var state_149486__$1 = state_149486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149486__$1,inst_149484);
} else {
if((state_val_149487 === (12))){
var inst_149472 = (state_149486[(8)]);
var inst_149472__$1 = (state_149486[(2)]);
var inst_149473 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_149472__$1);
var state_149486__$1 = (function (){var statearr_149495 = state_149486;
(statearr_149495[(8)] = inst_149472__$1);

return statearr_149495;
})();
if(cljs.core.truth_(inst_149473)){
var statearr_149496_149522 = state_149486__$1;
(statearr_149496_149522[(1)] = (13));

} else {
var statearr_149497_149523 = state_149486__$1;
(statearr_149497_149523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (2))){
var inst_149449 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_149450 = (0);
var state_149486__$1 = (function (){var statearr_149498 = state_149486;
(statearr_149498[(9)] = inst_149449);

(statearr_149498[(7)] = inst_149450);

return statearr_149498;
})();
var statearr_149499_149524 = state_149486__$1;
(statearr_149499_149524[(2)] = null);

(statearr_149499_149524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (11))){
var inst_149450 = (state_149486[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_149486,(10),Object,null,(9));
var inst_149459 = chs__$1.call(null,inst_149450);
var inst_149460 = done.call(null,inst_149450);
var inst_149461 = cljs.core.async.take_BANG_.call(null,inst_149459,inst_149460);
var state_149486__$1 = state_149486;
var statearr_149500_149525 = state_149486__$1;
(statearr_149500_149525[(2)] = inst_149461);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (9))){
var inst_149450 = (state_149486[(7)]);
var inst_149463 = (state_149486[(2)]);
var inst_149464 = (inst_149450 + (1));
var inst_149450__$1 = inst_149464;
var state_149486__$1 = (function (){var statearr_149501 = state_149486;
(statearr_149501[(10)] = inst_149463);

(statearr_149501[(7)] = inst_149450__$1);

return statearr_149501;
})();
var statearr_149502_149526 = state_149486__$1;
(statearr_149502_149526[(2)] = null);

(statearr_149502_149526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (5))){
var inst_149470 = (state_149486[(2)]);
var state_149486__$1 = (function (){var statearr_149503 = state_149486;
(statearr_149503[(11)] = inst_149470);

return statearr_149503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149486__$1,(12),dchan);
} else {
if((state_val_149487 === (14))){
var inst_149472 = (state_149486[(8)]);
var inst_149477 = cljs.core.apply.call(null,f,inst_149472);
var state_149486__$1 = state_149486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149486__$1,(16),out,inst_149477);
} else {
if((state_val_149487 === (16))){
var inst_149479 = (state_149486[(2)]);
var state_149486__$1 = (function (){var statearr_149504 = state_149486;
(statearr_149504[(12)] = inst_149479);

return statearr_149504;
})();
var statearr_149505_149527 = state_149486__$1;
(statearr_149505_149527[(2)] = null);

(statearr_149505_149527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (10))){
var inst_149454 = (state_149486[(2)]);
var inst_149455 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_149486__$1 = (function (){var statearr_149506 = state_149486;
(statearr_149506[(13)] = inst_149454);

return statearr_149506;
})();
var statearr_149507_149528 = state_149486__$1;
(statearr_149507_149528[(2)] = inst_149455);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149487 === (8))){
var inst_149468 = (state_149486[(2)]);
var state_149486__$1 = state_149486;
var statearr_149508_149529 = state_149486__$1;
(statearr_149508_149529[(2)] = inst_149468);

(statearr_149508_149529[(1)] = (5));


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
});})(c__148175__auto___149514,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__148085__auto__,c__148175__auto___149514,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_149509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149509[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_149509[(1)] = (1));

return statearr_149509;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_149486){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149510){if((e149510 instanceof Object)){
var ex__148089__auto__ = e149510;
var statearr_149511_149530 = state_149486;
(statearr_149511_149530[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149531 = state_149486;
state_149486 = G__149531;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_149486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_149486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___149514,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__148177__auto__ = (function (){var statearr_149512 = f__148176__auto__.call(null);
(statearr_149512[(6)] = c__148175__auto___149514);

return statearr_149512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___149514,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__149534 = arguments.length;
switch (G__149534) {
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
var c__148175__auto___149588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___149588,out){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___149588,out){
return (function (state_149566){
var state_val_149567 = (state_149566[(1)]);
if((state_val_149567 === (7))){
var inst_149545 = (state_149566[(7)]);
var inst_149546 = (state_149566[(8)]);
var inst_149545__$1 = (state_149566[(2)]);
var inst_149546__$1 = cljs.core.nth.call(null,inst_149545__$1,(0),null);
var inst_149547 = cljs.core.nth.call(null,inst_149545__$1,(1),null);
var inst_149548 = (inst_149546__$1 == null);
var state_149566__$1 = (function (){var statearr_149568 = state_149566;
(statearr_149568[(9)] = inst_149547);

(statearr_149568[(7)] = inst_149545__$1);

(statearr_149568[(8)] = inst_149546__$1);

return statearr_149568;
})();
if(cljs.core.truth_(inst_149548)){
var statearr_149569_149589 = state_149566__$1;
(statearr_149569_149589[(1)] = (8));

} else {
var statearr_149570_149590 = state_149566__$1;
(statearr_149570_149590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149567 === (1))){
var inst_149535 = cljs.core.vec.call(null,chs);
var inst_149536 = inst_149535;
var state_149566__$1 = (function (){var statearr_149571 = state_149566;
(statearr_149571[(10)] = inst_149536);

return statearr_149571;
})();
var statearr_149572_149591 = state_149566__$1;
(statearr_149572_149591[(2)] = null);

(statearr_149572_149591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149567 === (4))){
var inst_149536 = (state_149566[(10)]);
var state_149566__$1 = state_149566;
return cljs.core.async.ioc_alts_BANG_.call(null,state_149566__$1,(7),inst_149536);
} else {
if((state_val_149567 === (6))){
var inst_149562 = (state_149566[(2)]);
var state_149566__$1 = state_149566;
var statearr_149573_149592 = state_149566__$1;
(statearr_149573_149592[(2)] = inst_149562);

(statearr_149573_149592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149567 === (3))){
var inst_149564 = (state_149566[(2)]);
var state_149566__$1 = state_149566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149566__$1,inst_149564);
} else {
if((state_val_149567 === (2))){
var inst_149536 = (state_149566[(10)]);
var inst_149538 = cljs.core.count.call(null,inst_149536);
var inst_149539 = (inst_149538 > (0));
var state_149566__$1 = state_149566;
if(cljs.core.truth_(inst_149539)){
var statearr_149575_149593 = state_149566__$1;
(statearr_149575_149593[(1)] = (4));

} else {
var statearr_149576_149594 = state_149566__$1;
(statearr_149576_149594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149567 === (11))){
var inst_149536 = (state_149566[(10)]);
var inst_149555 = (state_149566[(2)]);
var tmp149574 = inst_149536;
var inst_149536__$1 = tmp149574;
var state_149566__$1 = (function (){var statearr_149577 = state_149566;
(statearr_149577[(11)] = inst_149555);

(statearr_149577[(10)] = inst_149536__$1);

return statearr_149577;
})();
var statearr_149578_149595 = state_149566__$1;
(statearr_149578_149595[(2)] = null);

(statearr_149578_149595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149567 === (9))){
var inst_149546 = (state_149566[(8)]);
var state_149566__$1 = state_149566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149566__$1,(11),out,inst_149546);
} else {
if((state_val_149567 === (5))){
var inst_149560 = cljs.core.async.close_BANG_.call(null,out);
var state_149566__$1 = state_149566;
var statearr_149579_149596 = state_149566__$1;
(statearr_149579_149596[(2)] = inst_149560);

(statearr_149579_149596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149567 === (10))){
var inst_149558 = (state_149566[(2)]);
var state_149566__$1 = state_149566;
var statearr_149580_149597 = state_149566__$1;
(statearr_149580_149597[(2)] = inst_149558);

(statearr_149580_149597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149567 === (8))){
var inst_149547 = (state_149566[(9)]);
var inst_149545 = (state_149566[(7)]);
var inst_149536 = (state_149566[(10)]);
var inst_149546 = (state_149566[(8)]);
var inst_149550 = (function (){var cs = inst_149536;
var vec__149541 = inst_149545;
var v = inst_149546;
var c = inst_149547;
return ((function (cs,vec__149541,v,c,inst_149547,inst_149545,inst_149536,inst_149546,state_val_149567,c__148175__auto___149588,out){
return (function (p1__149532_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__149532_SHARP_);
});
;})(cs,vec__149541,v,c,inst_149547,inst_149545,inst_149536,inst_149546,state_val_149567,c__148175__auto___149588,out))
})();
var inst_149551 = cljs.core.filterv.call(null,inst_149550,inst_149536);
var inst_149536__$1 = inst_149551;
var state_149566__$1 = (function (){var statearr_149581 = state_149566;
(statearr_149581[(10)] = inst_149536__$1);

return statearr_149581;
})();
var statearr_149582_149598 = state_149566__$1;
(statearr_149582_149598[(2)] = null);

(statearr_149582_149598[(1)] = (2));


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
});})(c__148175__auto___149588,out))
;
return ((function (switch__148085__auto__,c__148175__auto___149588,out){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_149583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149583[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_149583[(1)] = (1));

return statearr_149583;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_149566){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149584){if((e149584 instanceof Object)){
var ex__148089__auto__ = e149584;
var statearr_149585_149599 = state_149566;
(statearr_149585_149599[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149600 = state_149566;
state_149566 = G__149600;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_149566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_149566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___149588,out))
})();
var state__148177__auto__ = (function (){var statearr_149586 = f__148176__auto__.call(null);
(statearr_149586[(6)] = c__148175__auto___149588);

return statearr_149586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___149588,out))
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
var G__149602 = arguments.length;
switch (G__149602) {
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
var c__148175__auto___149647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___149647,out){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___149647,out){
return (function (state_149626){
var state_val_149627 = (state_149626[(1)]);
if((state_val_149627 === (7))){
var inst_149608 = (state_149626[(7)]);
var inst_149608__$1 = (state_149626[(2)]);
var inst_149609 = (inst_149608__$1 == null);
var inst_149610 = cljs.core.not.call(null,inst_149609);
var state_149626__$1 = (function (){var statearr_149628 = state_149626;
(statearr_149628[(7)] = inst_149608__$1);

return statearr_149628;
})();
if(inst_149610){
var statearr_149629_149648 = state_149626__$1;
(statearr_149629_149648[(1)] = (8));

} else {
var statearr_149630_149649 = state_149626__$1;
(statearr_149630_149649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149627 === (1))){
var inst_149603 = (0);
var state_149626__$1 = (function (){var statearr_149631 = state_149626;
(statearr_149631[(8)] = inst_149603);

return statearr_149631;
})();
var statearr_149632_149650 = state_149626__$1;
(statearr_149632_149650[(2)] = null);

(statearr_149632_149650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149627 === (4))){
var state_149626__$1 = state_149626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149626__$1,(7),ch);
} else {
if((state_val_149627 === (6))){
var inst_149621 = (state_149626[(2)]);
var state_149626__$1 = state_149626;
var statearr_149633_149651 = state_149626__$1;
(statearr_149633_149651[(2)] = inst_149621);

(statearr_149633_149651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149627 === (3))){
var inst_149623 = (state_149626[(2)]);
var inst_149624 = cljs.core.async.close_BANG_.call(null,out);
var state_149626__$1 = (function (){var statearr_149634 = state_149626;
(statearr_149634[(9)] = inst_149623);

return statearr_149634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149626__$1,inst_149624);
} else {
if((state_val_149627 === (2))){
var inst_149603 = (state_149626[(8)]);
var inst_149605 = (inst_149603 < n);
var state_149626__$1 = state_149626;
if(cljs.core.truth_(inst_149605)){
var statearr_149635_149652 = state_149626__$1;
(statearr_149635_149652[(1)] = (4));

} else {
var statearr_149636_149653 = state_149626__$1;
(statearr_149636_149653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149627 === (11))){
var inst_149603 = (state_149626[(8)]);
var inst_149613 = (state_149626[(2)]);
var inst_149614 = (inst_149603 + (1));
var inst_149603__$1 = inst_149614;
var state_149626__$1 = (function (){var statearr_149637 = state_149626;
(statearr_149637[(8)] = inst_149603__$1);

(statearr_149637[(10)] = inst_149613);

return statearr_149637;
})();
var statearr_149638_149654 = state_149626__$1;
(statearr_149638_149654[(2)] = null);

(statearr_149638_149654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149627 === (9))){
var state_149626__$1 = state_149626;
var statearr_149639_149655 = state_149626__$1;
(statearr_149639_149655[(2)] = null);

(statearr_149639_149655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149627 === (5))){
var state_149626__$1 = state_149626;
var statearr_149640_149656 = state_149626__$1;
(statearr_149640_149656[(2)] = null);

(statearr_149640_149656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149627 === (10))){
var inst_149618 = (state_149626[(2)]);
var state_149626__$1 = state_149626;
var statearr_149641_149657 = state_149626__$1;
(statearr_149641_149657[(2)] = inst_149618);

(statearr_149641_149657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149627 === (8))){
var inst_149608 = (state_149626[(7)]);
var state_149626__$1 = state_149626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149626__$1,(11),out,inst_149608);
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
});})(c__148175__auto___149647,out))
;
return ((function (switch__148085__auto__,c__148175__auto___149647,out){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_149642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_149642[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_149642[(1)] = (1));

return statearr_149642;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_149626){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149643){if((e149643 instanceof Object)){
var ex__148089__auto__ = e149643;
var statearr_149644_149658 = state_149626;
(statearr_149644_149658[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149659 = state_149626;
state_149626 = G__149659;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_149626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_149626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___149647,out))
})();
var state__148177__auto__ = (function (){var statearr_149645 = f__148176__auto__.call(null);
(statearr_149645[(6)] = c__148175__auto___149647);

return statearr_149645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___149647,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async149661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149661 = (function (f,ch,meta149662){
this.f = f;
this.ch = ch;
this.meta149662 = meta149662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_149663,meta149662__$1){
var self__ = this;
var _149663__$1 = this;
return (new cljs.core.async.t_cljs$core$async149661(self__.f,self__.ch,meta149662__$1));
});

cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_149663){
var self__ = this;
var _149663__$1 = this;
return self__.meta149662;
});

cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async149664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149664 = (function (f,ch,meta149662,_,fn1,meta149665){
this.f = f;
this.ch = ch;
this.meta149662 = meta149662;
this._ = _;
this.fn1 = fn1;
this.meta149665 = meta149665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async149664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_149666,meta149665__$1){
var self__ = this;
var _149666__$1 = this;
return (new cljs.core.async.t_cljs$core$async149664(self__.f,self__.ch,self__.meta149662,self__._,self__.fn1,meta149665__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async149664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_149666){
var self__ = this;
var _149666__$1 = this;
return self__.meta149665;
});})(___$1))
;

cljs.core.async.t_cljs$core$async149664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async149664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async149664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__149660_SHARP_){
return f1.call(null,(((p1__149660_SHARP_ == null))?null:self__.f.call(null,p1__149660_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async149664.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta149662","meta149662",422847799,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async149661","cljs.core.async/t_cljs$core$async149661",1216401881,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta149665","meta149665",-889290381,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async149664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149664";

cljs.core.async.t_cljs$core$async149664.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async149664");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async149664 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async149664(f__$1,ch__$1,meta149662__$1,___$2,fn1__$1,meta149665){
return (new cljs.core.async.t_cljs$core$async149664(f__$1,ch__$1,meta149662__$1,___$2,fn1__$1,meta149665));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async149664(self__.f,self__.ch,self__.meta149662,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async149661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta149662","meta149662",422847799,null)], null);
});

cljs.core.async.t_cljs$core$async149661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149661";

cljs.core.async.t_cljs$core$async149661.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async149661");
});

cljs.core.async.__GT_t_cljs$core$async149661 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async149661(f__$1,ch__$1,meta149662){
return (new cljs.core.async.t_cljs$core$async149661(f__$1,ch__$1,meta149662));
});

}

return (new cljs.core.async.t_cljs$core$async149661(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async149667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149667 = (function (f,ch,meta149668){
this.f = f;
this.ch = ch;
this.meta149668 = meta149668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async149667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_149669,meta149668__$1){
var self__ = this;
var _149669__$1 = this;
return (new cljs.core.async.t_cljs$core$async149667(self__.f,self__.ch,meta149668__$1));
});

cljs.core.async.t_cljs$core$async149667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_149669){
var self__ = this;
var _149669__$1 = this;
return self__.meta149668;
});

cljs.core.async.t_cljs$core$async149667.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async149667.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async149667.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async149667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta149668","meta149668",-1668540380,null)], null);
});

cljs.core.async.t_cljs$core$async149667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149667";

cljs.core.async.t_cljs$core$async149667.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async149667");
});

cljs.core.async.__GT_t_cljs$core$async149667 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async149667(f__$1,ch__$1,meta149668){
return (new cljs.core.async.t_cljs$core$async149667(f__$1,ch__$1,meta149668));
});

}

return (new cljs.core.async.t_cljs$core$async149667(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async149670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149670 = (function (p,ch,meta149671){
this.p = p;
this.ch = ch;
this.meta149671 = meta149671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_149672,meta149671__$1){
var self__ = this;
var _149672__$1 = this;
return (new cljs.core.async.t_cljs$core$async149670(self__.p,self__.ch,meta149671__$1));
});

cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_149672){
var self__ = this;
var _149672__$1 = this;
return self__.meta149671;
});

cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async149670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async149670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta149671","meta149671",-1995089900,null)], null);
});

cljs.core.async.t_cljs$core$async149670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149670";

cljs.core.async.t_cljs$core$async149670.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.core.async/t_cljs$core$async149670");
});

cljs.core.async.__GT_t_cljs$core$async149670 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async149670(p__$1,ch__$1,meta149671){
return (new cljs.core.async.t_cljs$core$async149670(p__$1,ch__$1,meta149671));
});

}

return (new cljs.core.async.t_cljs$core$async149670(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__149674 = arguments.length;
switch (G__149674) {
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
var c__148175__auto___149714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___149714,out){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___149714,out){
return (function (state_149695){
var state_val_149696 = (state_149695[(1)]);
if((state_val_149696 === (7))){
var inst_149691 = (state_149695[(2)]);
var state_149695__$1 = state_149695;
var statearr_149697_149715 = state_149695__$1;
(statearr_149697_149715[(2)] = inst_149691);

(statearr_149697_149715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149696 === (1))){
var state_149695__$1 = state_149695;
var statearr_149698_149716 = state_149695__$1;
(statearr_149698_149716[(2)] = null);

(statearr_149698_149716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149696 === (4))){
var inst_149677 = (state_149695[(7)]);
var inst_149677__$1 = (state_149695[(2)]);
var inst_149678 = (inst_149677__$1 == null);
var state_149695__$1 = (function (){var statearr_149699 = state_149695;
(statearr_149699[(7)] = inst_149677__$1);

return statearr_149699;
})();
if(cljs.core.truth_(inst_149678)){
var statearr_149700_149717 = state_149695__$1;
(statearr_149700_149717[(1)] = (5));

} else {
var statearr_149701_149718 = state_149695__$1;
(statearr_149701_149718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149696 === (6))){
var inst_149677 = (state_149695[(7)]);
var inst_149682 = p.call(null,inst_149677);
var state_149695__$1 = state_149695;
if(cljs.core.truth_(inst_149682)){
var statearr_149702_149719 = state_149695__$1;
(statearr_149702_149719[(1)] = (8));

} else {
var statearr_149703_149720 = state_149695__$1;
(statearr_149703_149720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149696 === (3))){
var inst_149693 = (state_149695[(2)]);
var state_149695__$1 = state_149695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149695__$1,inst_149693);
} else {
if((state_val_149696 === (2))){
var state_149695__$1 = state_149695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149695__$1,(4),ch);
} else {
if((state_val_149696 === (11))){
var inst_149685 = (state_149695[(2)]);
var state_149695__$1 = state_149695;
var statearr_149704_149721 = state_149695__$1;
(statearr_149704_149721[(2)] = inst_149685);

(statearr_149704_149721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149696 === (9))){
var state_149695__$1 = state_149695;
var statearr_149705_149722 = state_149695__$1;
(statearr_149705_149722[(2)] = null);

(statearr_149705_149722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149696 === (5))){
var inst_149680 = cljs.core.async.close_BANG_.call(null,out);
var state_149695__$1 = state_149695;
var statearr_149706_149723 = state_149695__$1;
(statearr_149706_149723[(2)] = inst_149680);

(statearr_149706_149723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149696 === (10))){
var inst_149688 = (state_149695[(2)]);
var state_149695__$1 = (function (){var statearr_149707 = state_149695;
(statearr_149707[(8)] = inst_149688);

return statearr_149707;
})();
var statearr_149708_149724 = state_149695__$1;
(statearr_149708_149724[(2)] = null);

(statearr_149708_149724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149696 === (8))){
var inst_149677 = (state_149695[(7)]);
var state_149695__$1 = state_149695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149695__$1,(11),out,inst_149677);
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
});})(c__148175__auto___149714,out))
;
return ((function (switch__148085__auto__,c__148175__auto___149714,out){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_149709 = [null,null,null,null,null,null,null,null,null];
(statearr_149709[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_149709[(1)] = (1));

return statearr_149709;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_149695){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149710){if((e149710 instanceof Object)){
var ex__148089__auto__ = e149710;
var statearr_149711_149725 = state_149695;
(statearr_149711_149725[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149726 = state_149695;
state_149695 = G__149726;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_149695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_149695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___149714,out))
})();
var state__148177__auto__ = (function (){var statearr_149712 = f__148176__auto__.call(null);
(statearr_149712[(6)] = c__148175__auto___149714);

return statearr_149712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___149714,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__149728 = arguments.length;
switch (G__149728) {
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
var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__){
return (function (state_149791){
var state_val_149792 = (state_149791[(1)]);
if((state_val_149792 === (7))){
var inst_149787 = (state_149791[(2)]);
var state_149791__$1 = state_149791;
var statearr_149793_149831 = state_149791__$1;
(statearr_149793_149831[(2)] = inst_149787);

(statearr_149793_149831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (20))){
var inst_149757 = (state_149791[(7)]);
var inst_149768 = (state_149791[(2)]);
var inst_149769 = cljs.core.next.call(null,inst_149757);
var inst_149743 = inst_149769;
var inst_149744 = null;
var inst_149745 = (0);
var inst_149746 = (0);
var state_149791__$1 = (function (){var statearr_149794 = state_149791;
(statearr_149794[(8)] = inst_149744);

(statearr_149794[(9)] = inst_149746);

(statearr_149794[(10)] = inst_149745);

(statearr_149794[(11)] = inst_149768);

(statearr_149794[(12)] = inst_149743);

return statearr_149794;
})();
var statearr_149795_149832 = state_149791__$1;
(statearr_149795_149832[(2)] = null);

(statearr_149795_149832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (1))){
var state_149791__$1 = state_149791;
var statearr_149796_149833 = state_149791__$1;
(statearr_149796_149833[(2)] = null);

(statearr_149796_149833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (4))){
var inst_149732 = (state_149791[(13)]);
var inst_149732__$1 = (state_149791[(2)]);
var inst_149733 = (inst_149732__$1 == null);
var state_149791__$1 = (function (){var statearr_149797 = state_149791;
(statearr_149797[(13)] = inst_149732__$1);

return statearr_149797;
})();
if(cljs.core.truth_(inst_149733)){
var statearr_149798_149834 = state_149791__$1;
(statearr_149798_149834[(1)] = (5));

} else {
var statearr_149799_149835 = state_149791__$1;
(statearr_149799_149835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (15))){
var state_149791__$1 = state_149791;
var statearr_149803_149836 = state_149791__$1;
(statearr_149803_149836[(2)] = null);

(statearr_149803_149836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (21))){
var state_149791__$1 = state_149791;
var statearr_149804_149837 = state_149791__$1;
(statearr_149804_149837[(2)] = null);

(statearr_149804_149837[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (13))){
var inst_149744 = (state_149791[(8)]);
var inst_149746 = (state_149791[(9)]);
var inst_149745 = (state_149791[(10)]);
var inst_149743 = (state_149791[(12)]);
var inst_149753 = (state_149791[(2)]);
var inst_149754 = (inst_149746 + (1));
var tmp149800 = inst_149744;
var tmp149801 = inst_149745;
var tmp149802 = inst_149743;
var inst_149743__$1 = tmp149802;
var inst_149744__$1 = tmp149800;
var inst_149745__$1 = tmp149801;
var inst_149746__$1 = inst_149754;
var state_149791__$1 = (function (){var statearr_149805 = state_149791;
(statearr_149805[(14)] = inst_149753);

(statearr_149805[(8)] = inst_149744__$1);

(statearr_149805[(9)] = inst_149746__$1);

(statearr_149805[(10)] = inst_149745__$1);

(statearr_149805[(12)] = inst_149743__$1);

return statearr_149805;
})();
var statearr_149806_149838 = state_149791__$1;
(statearr_149806_149838[(2)] = null);

(statearr_149806_149838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (22))){
var state_149791__$1 = state_149791;
var statearr_149807_149839 = state_149791__$1;
(statearr_149807_149839[(2)] = null);

(statearr_149807_149839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (6))){
var inst_149732 = (state_149791[(13)]);
var inst_149741 = f.call(null,inst_149732);
var inst_149742 = cljs.core.seq.call(null,inst_149741);
var inst_149743 = inst_149742;
var inst_149744 = null;
var inst_149745 = (0);
var inst_149746 = (0);
var state_149791__$1 = (function (){var statearr_149808 = state_149791;
(statearr_149808[(8)] = inst_149744);

(statearr_149808[(9)] = inst_149746);

(statearr_149808[(10)] = inst_149745);

(statearr_149808[(12)] = inst_149743);

return statearr_149808;
})();
var statearr_149809_149840 = state_149791__$1;
(statearr_149809_149840[(2)] = null);

(statearr_149809_149840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (17))){
var inst_149757 = (state_149791[(7)]);
var inst_149761 = cljs.core.chunk_first.call(null,inst_149757);
var inst_149762 = cljs.core.chunk_rest.call(null,inst_149757);
var inst_149763 = cljs.core.count.call(null,inst_149761);
var inst_149743 = inst_149762;
var inst_149744 = inst_149761;
var inst_149745 = inst_149763;
var inst_149746 = (0);
var state_149791__$1 = (function (){var statearr_149810 = state_149791;
(statearr_149810[(8)] = inst_149744);

(statearr_149810[(9)] = inst_149746);

(statearr_149810[(10)] = inst_149745);

(statearr_149810[(12)] = inst_149743);

return statearr_149810;
})();
var statearr_149811_149841 = state_149791__$1;
(statearr_149811_149841[(2)] = null);

(statearr_149811_149841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (3))){
var inst_149789 = (state_149791[(2)]);
var state_149791__$1 = state_149791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149791__$1,inst_149789);
} else {
if((state_val_149792 === (12))){
var inst_149777 = (state_149791[(2)]);
var state_149791__$1 = state_149791;
var statearr_149812_149842 = state_149791__$1;
(statearr_149812_149842[(2)] = inst_149777);

(statearr_149812_149842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (2))){
var state_149791__$1 = state_149791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149791__$1,(4),in$);
} else {
if((state_val_149792 === (23))){
var inst_149785 = (state_149791[(2)]);
var state_149791__$1 = state_149791;
var statearr_149813_149843 = state_149791__$1;
(statearr_149813_149843[(2)] = inst_149785);

(statearr_149813_149843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (19))){
var inst_149772 = (state_149791[(2)]);
var state_149791__$1 = state_149791;
var statearr_149814_149844 = state_149791__$1;
(statearr_149814_149844[(2)] = inst_149772);

(statearr_149814_149844[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (11))){
var inst_149757 = (state_149791[(7)]);
var inst_149743 = (state_149791[(12)]);
var inst_149757__$1 = cljs.core.seq.call(null,inst_149743);
var state_149791__$1 = (function (){var statearr_149815 = state_149791;
(statearr_149815[(7)] = inst_149757__$1);

return statearr_149815;
})();
if(inst_149757__$1){
var statearr_149816_149845 = state_149791__$1;
(statearr_149816_149845[(1)] = (14));

} else {
var statearr_149817_149846 = state_149791__$1;
(statearr_149817_149846[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (9))){
var inst_149779 = (state_149791[(2)]);
var inst_149780 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_149791__$1 = (function (){var statearr_149818 = state_149791;
(statearr_149818[(15)] = inst_149779);

return statearr_149818;
})();
if(cljs.core.truth_(inst_149780)){
var statearr_149819_149847 = state_149791__$1;
(statearr_149819_149847[(1)] = (21));

} else {
var statearr_149820_149848 = state_149791__$1;
(statearr_149820_149848[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (5))){
var inst_149735 = cljs.core.async.close_BANG_.call(null,out);
var state_149791__$1 = state_149791;
var statearr_149821_149849 = state_149791__$1;
(statearr_149821_149849[(2)] = inst_149735);

(statearr_149821_149849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (14))){
var inst_149757 = (state_149791[(7)]);
var inst_149759 = cljs.core.chunked_seq_QMARK_.call(null,inst_149757);
var state_149791__$1 = state_149791;
if(inst_149759){
var statearr_149822_149850 = state_149791__$1;
(statearr_149822_149850[(1)] = (17));

} else {
var statearr_149823_149851 = state_149791__$1;
(statearr_149823_149851[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (16))){
var inst_149775 = (state_149791[(2)]);
var state_149791__$1 = state_149791;
var statearr_149824_149852 = state_149791__$1;
(statearr_149824_149852[(2)] = inst_149775);

(statearr_149824_149852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149792 === (10))){
var inst_149744 = (state_149791[(8)]);
var inst_149746 = (state_149791[(9)]);
var inst_149751 = cljs.core._nth.call(null,inst_149744,inst_149746);
var state_149791__$1 = state_149791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149791__$1,(13),out,inst_149751);
} else {
if((state_val_149792 === (18))){
var inst_149757 = (state_149791[(7)]);
var inst_149766 = cljs.core.first.call(null,inst_149757);
var state_149791__$1 = state_149791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149791__$1,(20),out,inst_149766);
} else {
if((state_val_149792 === (8))){
var inst_149746 = (state_149791[(9)]);
var inst_149745 = (state_149791[(10)]);
var inst_149748 = (inst_149746 < inst_149745);
var inst_149749 = inst_149748;
var state_149791__$1 = state_149791;
if(cljs.core.truth_(inst_149749)){
var statearr_149825_149853 = state_149791__$1;
(statearr_149825_149853[(1)] = (10));

} else {
var statearr_149826_149854 = state_149791__$1;
(statearr_149826_149854[(1)] = (11));

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
});})(c__148175__auto__))
;
return ((function (switch__148085__auto__,c__148175__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__148086__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__148086__auto____0 = (function (){
var statearr_149827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149827[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__148086__auto__);

(statearr_149827[(1)] = (1));

return statearr_149827;
});
var cljs$core$async$mapcat_STAR__$_state_machine__148086__auto____1 = (function (state_149791){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149828){if((e149828 instanceof Object)){
var ex__148089__auto__ = e149828;
var statearr_149829_149855 = state_149791;
(statearr_149829_149855[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149856 = state_149791;
state_149791 = G__149856;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__148086__auto__ = function(state_149791){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__148086__auto____1.call(this,state_149791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__148086__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__148086__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__))
})();
var state__148177__auto__ = (function (){var statearr_149830 = f__148176__auto__.call(null);
(statearr_149830[(6)] = c__148175__auto__);

return statearr_149830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__))
);

return c__148175__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__149858 = arguments.length;
switch (G__149858) {
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
var G__149861 = arguments.length;
switch (G__149861) {
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
var G__149864 = arguments.length;
switch (G__149864) {
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
var c__148175__auto___149911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___149911,out){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___149911,out){
return (function (state_149888){
var state_val_149889 = (state_149888[(1)]);
if((state_val_149889 === (7))){
var inst_149883 = (state_149888[(2)]);
var state_149888__$1 = state_149888;
var statearr_149890_149912 = state_149888__$1;
(statearr_149890_149912[(2)] = inst_149883);

(statearr_149890_149912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149889 === (1))){
var inst_149865 = null;
var state_149888__$1 = (function (){var statearr_149891 = state_149888;
(statearr_149891[(7)] = inst_149865);

return statearr_149891;
})();
var statearr_149892_149913 = state_149888__$1;
(statearr_149892_149913[(2)] = null);

(statearr_149892_149913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149889 === (4))){
var inst_149868 = (state_149888[(8)]);
var inst_149868__$1 = (state_149888[(2)]);
var inst_149869 = (inst_149868__$1 == null);
var inst_149870 = cljs.core.not.call(null,inst_149869);
var state_149888__$1 = (function (){var statearr_149893 = state_149888;
(statearr_149893[(8)] = inst_149868__$1);

return statearr_149893;
})();
if(inst_149870){
var statearr_149894_149914 = state_149888__$1;
(statearr_149894_149914[(1)] = (5));

} else {
var statearr_149895_149915 = state_149888__$1;
(statearr_149895_149915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149889 === (6))){
var state_149888__$1 = state_149888;
var statearr_149896_149916 = state_149888__$1;
(statearr_149896_149916[(2)] = null);

(statearr_149896_149916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149889 === (3))){
var inst_149885 = (state_149888[(2)]);
var inst_149886 = cljs.core.async.close_BANG_.call(null,out);
var state_149888__$1 = (function (){var statearr_149897 = state_149888;
(statearr_149897[(9)] = inst_149885);

return statearr_149897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149888__$1,inst_149886);
} else {
if((state_val_149889 === (2))){
var state_149888__$1 = state_149888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149888__$1,(4),ch);
} else {
if((state_val_149889 === (11))){
var inst_149868 = (state_149888[(8)]);
var inst_149877 = (state_149888[(2)]);
var inst_149865 = inst_149868;
var state_149888__$1 = (function (){var statearr_149898 = state_149888;
(statearr_149898[(7)] = inst_149865);

(statearr_149898[(10)] = inst_149877);

return statearr_149898;
})();
var statearr_149899_149917 = state_149888__$1;
(statearr_149899_149917[(2)] = null);

(statearr_149899_149917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149889 === (9))){
var inst_149868 = (state_149888[(8)]);
var state_149888__$1 = state_149888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149888__$1,(11),out,inst_149868);
} else {
if((state_val_149889 === (5))){
var inst_149865 = (state_149888[(7)]);
var inst_149868 = (state_149888[(8)]);
var inst_149872 = cljs.core._EQ_.call(null,inst_149868,inst_149865);
var state_149888__$1 = state_149888;
if(inst_149872){
var statearr_149901_149918 = state_149888__$1;
(statearr_149901_149918[(1)] = (8));

} else {
var statearr_149902_149919 = state_149888__$1;
(statearr_149902_149919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149889 === (10))){
var inst_149880 = (state_149888[(2)]);
var state_149888__$1 = state_149888;
var statearr_149903_149920 = state_149888__$1;
(statearr_149903_149920[(2)] = inst_149880);

(statearr_149903_149920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149889 === (8))){
var inst_149865 = (state_149888[(7)]);
var tmp149900 = inst_149865;
var inst_149865__$1 = tmp149900;
var state_149888__$1 = (function (){var statearr_149904 = state_149888;
(statearr_149904[(7)] = inst_149865__$1);

return statearr_149904;
})();
var statearr_149905_149921 = state_149888__$1;
(statearr_149905_149921[(2)] = null);

(statearr_149905_149921[(1)] = (2));


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
});})(c__148175__auto___149911,out))
;
return ((function (switch__148085__auto__,c__148175__auto___149911,out){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_149906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_149906[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_149906[(1)] = (1));

return statearr_149906;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_149888){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149907){if((e149907 instanceof Object)){
var ex__148089__auto__ = e149907;
var statearr_149908_149922 = state_149888;
(statearr_149908_149922[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149923 = state_149888;
state_149888 = G__149923;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_149888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_149888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___149911,out))
})();
var state__148177__auto__ = (function (){var statearr_149909 = f__148176__auto__.call(null);
(statearr_149909[(6)] = c__148175__auto___149911);

return statearr_149909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___149911,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__149925 = arguments.length;
switch (G__149925) {
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
var c__148175__auto___149991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___149991,out){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___149991,out){
return (function (state_149963){
var state_val_149964 = (state_149963[(1)]);
if((state_val_149964 === (7))){
var inst_149959 = (state_149963[(2)]);
var state_149963__$1 = state_149963;
var statearr_149965_149992 = state_149963__$1;
(statearr_149965_149992[(2)] = inst_149959);

(statearr_149965_149992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (1))){
var inst_149926 = (new Array(n));
var inst_149927 = inst_149926;
var inst_149928 = (0);
var state_149963__$1 = (function (){var statearr_149966 = state_149963;
(statearr_149966[(7)] = inst_149927);

(statearr_149966[(8)] = inst_149928);

return statearr_149966;
})();
var statearr_149967_149993 = state_149963__$1;
(statearr_149967_149993[(2)] = null);

(statearr_149967_149993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (4))){
var inst_149931 = (state_149963[(9)]);
var inst_149931__$1 = (state_149963[(2)]);
var inst_149932 = (inst_149931__$1 == null);
var inst_149933 = cljs.core.not.call(null,inst_149932);
var state_149963__$1 = (function (){var statearr_149968 = state_149963;
(statearr_149968[(9)] = inst_149931__$1);

return statearr_149968;
})();
if(inst_149933){
var statearr_149969_149994 = state_149963__$1;
(statearr_149969_149994[(1)] = (5));

} else {
var statearr_149970_149995 = state_149963__$1;
(statearr_149970_149995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (15))){
var inst_149953 = (state_149963[(2)]);
var state_149963__$1 = state_149963;
var statearr_149971_149996 = state_149963__$1;
(statearr_149971_149996[(2)] = inst_149953);

(statearr_149971_149996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (13))){
var state_149963__$1 = state_149963;
var statearr_149972_149997 = state_149963__$1;
(statearr_149972_149997[(2)] = null);

(statearr_149972_149997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (6))){
var inst_149928 = (state_149963[(8)]);
var inst_149949 = (inst_149928 > (0));
var state_149963__$1 = state_149963;
if(cljs.core.truth_(inst_149949)){
var statearr_149973_149998 = state_149963__$1;
(statearr_149973_149998[(1)] = (12));

} else {
var statearr_149974_149999 = state_149963__$1;
(statearr_149974_149999[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (3))){
var inst_149961 = (state_149963[(2)]);
var state_149963__$1 = state_149963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149963__$1,inst_149961);
} else {
if((state_val_149964 === (12))){
var inst_149927 = (state_149963[(7)]);
var inst_149951 = cljs.core.vec.call(null,inst_149927);
var state_149963__$1 = state_149963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149963__$1,(15),out,inst_149951);
} else {
if((state_val_149964 === (2))){
var state_149963__$1 = state_149963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149963__$1,(4),ch);
} else {
if((state_val_149964 === (11))){
var inst_149943 = (state_149963[(2)]);
var inst_149944 = (new Array(n));
var inst_149927 = inst_149944;
var inst_149928 = (0);
var state_149963__$1 = (function (){var statearr_149975 = state_149963;
(statearr_149975[(7)] = inst_149927);

(statearr_149975[(8)] = inst_149928);

(statearr_149975[(10)] = inst_149943);

return statearr_149975;
})();
var statearr_149976_150000 = state_149963__$1;
(statearr_149976_150000[(2)] = null);

(statearr_149976_150000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (9))){
var inst_149927 = (state_149963[(7)]);
var inst_149941 = cljs.core.vec.call(null,inst_149927);
var state_149963__$1 = state_149963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149963__$1,(11),out,inst_149941);
} else {
if((state_val_149964 === (5))){
var inst_149927 = (state_149963[(7)]);
var inst_149931 = (state_149963[(9)]);
var inst_149928 = (state_149963[(8)]);
var inst_149936 = (state_149963[(11)]);
var inst_149935 = (inst_149927[inst_149928] = inst_149931);
var inst_149936__$1 = (inst_149928 + (1));
var inst_149937 = (inst_149936__$1 < n);
var state_149963__$1 = (function (){var statearr_149977 = state_149963;
(statearr_149977[(12)] = inst_149935);

(statearr_149977[(11)] = inst_149936__$1);

return statearr_149977;
})();
if(cljs.core.truth_(inst_149937)){
var statearr_149978_150001 = state_149963__$1;
(statearr_149978_150001[(1)] = (8));

} else {
var statearr_149979_150002 = state_149963__$1;
(statearr_149979_150002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (14))){
var inst_149956 = (state_149963[(2)]);
var inst_149957 = cljs.core.async.close_BANG_.call(null,out);
var state_149963__$1 = (function (){var statearr_149981 = state_149963;
(statearr_149981[(13)] = inst_149956);

return statearr_149981;
})();
var statearr_149982_150003 = state_149963__$1;
(statearr_149982_150003[(2)] = inst_149957);

(statearr_149982_150003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (10))){
var inst_149947 = (state_149963[(2)]);
var state_149963__$1 = state_149963;
var statearr_149983_150004 = state_149963__$1;
(statearr_149983_150004[(2)] = inst_149947);

(statearr_149983_150004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149964 === (8))){
var inst_149927 = (state_149963[(7)]);
var inst_149936 = (state_149963[(11)]);
var tmp149980 = inst_149927;
var inst_149927__$1 = tmp149980;
var inst_149928 = inst_149936;
var state_149963__$1 = (function (){var statearr_149984 = state_149963;
(statearr_149984[(7)] = inst_149927__$1);

(statearr_149984[(8)] = inst_149928);

return statearr_149984;
})();
var statearr_149985_150005 = state_149963__$1;
(statearr_149985_150005[(2)] = null);

(statearr_149985_150005[(1)] = (2));


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
});})(c__148175__auto___149991,out))
;
return ((function (switch__148085__auto__,c__148175__auto___149991,out){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_149986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149986[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_149986[(1)] = (1));

return statearr_149986;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_149963){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_149963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e149987){if((e149987 instanceof Object)){
var ex__148089__auto__ = e149987;
var statearr_149988_150006 = state_149963;
(statearr_149988_150006[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150007 = state_149963;
state_149963 = G__150007;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_149963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_149963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___149991,out))
})();
var state__148177__auto__ = (function (){var statearr_149989 = f__148176__auto__.call(null);
(statearr_149989[(6)] = c__148175__auto___149991);

return statearr_149989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___149991,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__150009 = arguments.length;
switch (G__150009) {
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
var c__148175__auto___150079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___150079,out){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___150079,out){
return (function (state_150051){
var state_val_150052 = (state_150051[(1)]);
if((state_val_150052 === (7))){
var inst_150047 = (state_150051[(2)]);
var state_150051__$1 = state_150051;
var statearr_150053_150080 = state_150051__$1;
(statearr_150053_150080[(2)] = inst_150047);

(statearr_150053_150080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (1))){
var inst_150010 = [];
var inst_150011 = inst_150010;
var inst_150012 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_150051__$1 = (function (){var statearr_150054 = state_150051;
(statearr_150054[(7)] = inst_150012);

(statearr_150054[(8)] = inst_150011);

return statearr_150054;
})();
var statearr_150055_150081 = state_150051__$1;
(statearr_150055_150081[(2)] = null);

(statearr_150055_150081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (4))){
var inst_150015 = (state_150051[(9)]);
var inst_150015__$1 = (state_150051[(2)]);
var inst_150016 = (inst_150015__$1 == null);
var inst_150017 = cljs.core.not.call(null,inst_150016);
var state_150051__$1 = (function (){var statearr_150056 = state_150051;
(statearr_150056[(9)] = inst_150015__$1);

return statearr_150056;
})();
if(inst_150017){
var statearr_150057_150082 = state_150051__$1;
(statearr_150057_150082[(1)] = (5));

} else {
var statearr_150058_150083 = state_150051__$1;
(statearr_150058_150083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (15))){
var inst_150041 = (state_150051[(2)]);
var state_150051__$1 = state_150051;
var statearr_150059_150084 = state_150051__$1;
(statearr_150059_150084[(2)] = inst_150041);

(statearr_150059_150084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (13))){
var state_150051__$1 = state_150051;
var statearr_150060_150085 = state_150051__$1;
(statearr_150060_150085[(2)] = null);

(statearr_150060_150085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (6))){
var inst_150011 = (state_150051[(8)]);
var inst_150036 = inst_150011.length;
var inst_150037 = (inst_150036 > (0));
var state_150051__$1 = state_150051;
if(cljs.core.truth_(inst_150037)){
var statearr_150061_150086 = state_150051__$1;
(statearr_150061_150086[(1)] = (12));

} else {
var statearr_150062_150087 = state_150051__$1;
(statearr_150062_150087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (3))){
var inst_150049 = (state_150051[(2)]);
var state_150051__$1 = state_150051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150051__$1,inst_150049);
} else {
if((state_val_150052 === (12))){
var inst_150011 = (state_150051[(8)]);
var inst_150039 = cljs.core.vec.call(null,inst_150011);
var state_150051__$1 = state_150051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150051__$1,(15),out,inst_150039);
} else {
if((state_val_150052 === (2))){
var state_150051__$1 = state_150051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150051__$1,(4),ch);
} else {
if((state_val_150052 === (11))){
var inst_150019 = (state_150051[(10)]);
var inst_150015 = (state_150051[(9)]);
var inst_150029 = (state_150051[(2)]);
var inst_150030 = [];
var inst_150031 = inst_150030.push(inst_150015);
var inst_150011 = inst_150030;
var inst_150012 = inst_150019;
var state_150051__$1 = (function (){var statearr_150063 = state_150051;
(statearr_150063[(11)] = inst_150031);

(statearr_150063[(7)] = inst_150012);

(statearr_150063[(12)] = inst_150029);

(statearr_150063[(8)] = inst_150011);

return statearr_150063;
})();
var statearr_150064_150088 = state_150051__$1;
(statearr_150064_150088[(2)] = null);

(statearr_150064_150088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (9))){
var inst_150011 = (state_150051[(8)]);
var inst_150027 = cljs.core.vec.call(null,inst_150011);
var state_150051__$1 = state_150051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150051__$1,(11),out,inst_150027);
} else {
if((state_val_150052 === (5))){
var inst_150012 = (state_150051[(7)]);
var inst_150019 = (state_150051[(10)]);
var inst_150015 = (state_150051[(9)]);
var inst_150019__$1 = f.call(null,inst_150015);
var inst_150020 = cljs.core._EQ_.call(null,inst_150019__$1,inst_150012);
var inst_150021 = cljs.core.keyword_identical_QMARK_.call(null,inst_150012,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_150022 = (inst_150020) || (inst_150021);
var state_150051__$1 = (function (){var statearr_150065 = state_150051;
(statearr_150065[(10)] = inst_150019__$1);

return statearr_150065;
})();
if(cljs.core.truth_(inst_150022)){
var statearr_150066_150089 = state_150051__$1;
(statearr_150066_150089[(1)] = (8));

} else {
var statearr_150067_150090 = state_150051__$1;
(statearr_150067_150090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (14))){
var inst_150044 = (state_150051[(2)]);
var inst_150045 = cljs.core.async.close_BANG_.call(null,out);
var state_150051__$1 = (function (){var statearr_150069 = state_150051;
(statearr_150069[(13)] = inst_150044);

return statearr_150069;
})();
var statearr_150070_150091 = state_150051__$1;
(statearr_150070_150091[(2)] = inst_150045);

(statearr_150070_150091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (10))){
var inst_150034 = (state_150051[(2)]);
var state_150051__$1 = state_150051;
var statearr_150071_150092 = state_150051__$1;
(statearr_150071_150092[(2)] = inst_150034);

(statearr_150071_150092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150052 === (8))){
var inst_150019 = (state_150051[(10)]);
var inst_150015 = (state_150051[(9)]);
var inst_150011 = (state_150051[(8)]);
var inst_150024 = inst_150011.push(inst_150015);
var tmp150068 = inst_150011;
var inst_150011__$1 = tmp150068;
var inst_150012 = inst_150019;
var state_150051__$1 = (function (){var statearr_150072 = state_150051;
(statearr_150072[(14)] = inst_150024);

(statearr_150072[(7)] = inst_150012);

(statearr_150072[(8)] = inst_150011__$1);

return statearr_150072;
})();
var statearr_150073_150093 = state_150051__$1;
(statearr_150073_150093[(2)] = null);

(statearr_150073_150093[(1)] = (2));


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
});})(c__148175__auto___150079,out))
;
return ((function (switch__148085__auto__,c__148175__auto___150079,out){
return (function() {
var cljs$core$async$state_machine__148086__auto__ = null;
var cljs$core$async$state_machine__148086__auto____0 = (function (){
var statearr_150074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150074[(0)] = cljs$core$async$state_machine__148086__auto__);

(statearr_150074[(1)] = (1));

return statearr_150074;
});
var cljs$core$async$state_machine__148086__auto____1 = (function (state_150051){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_150051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e150075){if((e150075 instanceof Object)){
var ex__148089__auto__ = e150075;
var statearr_150076_150094 = state_150051;
(statearr_150076_150094[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150095 = state_150051;
state_150051 = G__150095;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
cljs$core$async$state_machine__148086__auto__ = function(state_150051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__148086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__148086__auto____1.call(this,state_150051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__148086__auto____0;
cljs$core$async$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__148086__auto____1;
return cljs$core$async$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___150079,out))
})();
var state__148177__auto__ = (function (){var statearr_150077 = f__148176__auto__.call(null);
(statearr_150077[(6)] = c__148175__auto___150079);

return statearr_150077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___150079,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509265455129
