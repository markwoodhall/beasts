// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__50192__auto__,writer__50193__auto__,opt__50194__auto__){
return cljs.core._write.call(null,writer__50193__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59303 = arguments.length;
var i__50799__auto___59304 = (0);
while(true){
if((i__50799__auto___59304 < len__50798__auto___59303)){
args__50805__auto__.push((arguments[i__50799__auto___59304]));

var G__59305 = (i__50799__auto___59304 + (1));
i__50799__auto___59304 = G__59305;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq59302){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59302));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59307 = arguments.length;
var i__50799__auto___59308 = (0);
while(true){
if((i__50799__auto___59308 < len__50798__auto___59307)){
args__50805__auto__.push((arguments[i__50799__auto___59308]));

var G__59309 = (i__50799__auto___59308 + (1));
i__50799__auto___59308 = G__59309;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq59306){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59306));
});

var g_QMARK__59310 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_59311 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__59310){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__59310))
,null));
var mkg_59312 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__59310,g_59311){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__59310,g_59311))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__59310,g_59311,mkg_59312){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__59310).call(null,x);
});})(g_QMARK__59310,g_59311,mkg_59312))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__59310,g_59311,mkg_59312){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_59312).call(null,gfn);
});})(g_QMARK__59310,g_59311,mkg_59312))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__59310,g_59311,mkg_59312){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_59311).call(null,generator);
});})(g_QMARK__59310,g_59311,mkg_59312))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50901__auto___59332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__50901__auto___59332){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59333 = arguments.length;
var i__50799__auto___59334 = (0);
while(true){
if((i__50799__auto___59334 < len__50798__auto___59333)){
args__50805__auto__.push((arguments[i__50799__auto___59334]));

var G__59335 = (i__50799__auto___59334 + (1));
i__50799__auto___59334 = G__59335;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59332))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59332){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59332),args);
});})(g__50901__auto___59332))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__50901__auto___59332){
return (function (seq59313){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59313));
});})(g__50901__auto___59332))
;


var g__50901__auto___59336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__50901__auto___59336){
return (function cljs$spec$gen$alpha$list(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59337 = arguments.length;
var i__50799__auto___59338 = (0);
while(true){
if((i__50799__auto___59338 < len__50798__auto___59337)){
args__50805__auto__.push((arguments[i__50799__auto___59338]));

var G__59339 = (i__50799__auto___59338 + (1));
i__50799__auto___59338 = G__59339;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59336))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59336){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59336),args);
});})(g__50901__auto___59336))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__50901__auto___59336){
return (function (seq59314){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59314));
});})(g__50901__auto___59336))
;


var g__50901__auto___59340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__50901__auto___59340){
return (function cljs$spec$gen$alpha$map(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59341 = arguments.length;
var i__50799__auto___59342 = (0);
while(true){
if((i__50799__auto___59342 < len__50798__auto___59341)){
args__50805__auto__.push((arguments[i__50799__auto___59342]));

var G__59343 = (i__50799__auto___59342 + (1));
i__50799__auto___59342 = G__59343;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59340))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59340),args);
});})(g__50901__auto___59340))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__50901__auto___59340){
return (function (seq59315){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59315));
});})(g__50901__auto___59340))
;


var g__50901__auto___59344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__50901__auto___59344){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59345 = arguments.length;
var i__50799__auto___59346 = (0);
while(true){
if((i__50799__auto___59346 < len__50798__auto___59345)){
args__50805__auto__.push((arguments[i__50799__auto___59346]));

var G__59347 = (i__50799__auto___59346 + (1));
i__50799__auto___59346 = G__59347;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59344))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59344),args);
});})(g__50901__auto___59344))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__50901__auto___59344){
return (function (seq59316){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59316));
});})(g__50901__auto___59344))
;


var g__50901__auto___59348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__50901__auto___59348){
return (function cljs$spec$gen$alpha$set(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59349 = arguments.length;
var i__50799__auto___59350 = (0);
while(true){
if((i__50799__auto___59350 < len__50798__auto___59349)){
args__50805__auto__.push((arguments[i__50799__auto___59350]));

var G__59351 = (i__50799__auto___59350 + (1));
i__50799__auto___59350 = G__59351;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59348))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59348),args);
});})(g__50901__auto___59348))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__50901__auto___59348){
return (function (seq59317){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59317));
});})(g__50901__auto___59348))
;


var g__50901__auto___59352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__50901__auto___59352){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59353 = arguments.length;
var i__50799__auto___59354 = (0);
while(true){
if((i__50799__auto___59354 < len__50798__auto___59353)){
args__50805__auto__.push((arguments[i__50799__auto___59354]));

var G__59355 = (i__50799__auto___59354 + (1));
i__50799__auto___59354 = G__59355;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59352))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59352),args);
});})(g__50901__auto___59352))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__50901__auto___59352){
return (function (seq59318){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59318));
});})(g__50901__auto___59352))
;


var g__50901__auto___59356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__50901__auto___59356){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59357 = arguments.length;
var i__50799__auto___59358 = (0);
while(true){
if((i__50799__auto___59358 < len__50798__auto___59357)){
args__50805__auto__.push((arguments[i__50799__auto___59358]));

var G__59359 = (i__50799__auto___59358 + (1));
i__50799__auto___59358 = G__59359;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59356))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59356),args);
});})(g__50901__auto___59356))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__50901__auto___59356){
return (function (seq59319){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59319));
});})(g__50901__auto___59356))
;


var g__50901__auto___59360 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__50901__auto___59360){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59361 = arguments.length;
var i__50799__auto___59362 = (0);
while(true){
if((i__50799__auto___59362 < len__50798__auto___59361)){
args__50805__auto__.push((arguments[i__50799__auto___59362]));

var G__59363 = (i__50799__auto___59362 + (1));
i__50799__auto___59362 = G__59363;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59360))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59360){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59360),args);
});})(g__50901__auto___59360))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__50901__auto___59360){
return (function (seq59320){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59320));
});})(g__50901__auto___59360))
;


var g__50901__auto___59364 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__50901__auto___59364){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59365 = arguments.length;
var i__50799__auto___59366 = (0);
while(true){
if((i__50799__auto___59366 < len__50798__auto___59365)){
args__50805__auto__.push((arguments[i__50799__auto___59366]));

var G__59367 = (i__50799__auto___59366 + (1));
i__50799__auto___59366 = G__59367;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59364))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59364){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59364),args);
});})(g__50901__auto___59364))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__50901__auto___59364){
return (function (seq59321){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59321));
});})(g__50901__auto___59364))
;


var g__50901__auto___59368 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__50901__auto___59368){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59369 = arguments.length;
var i__50799__auto___59370 = (0);
while(true){
if((i__50799__auto___59370 < len__50798__auto___59369)){
args__50805__auto__.push((arguments[i__50799__auto___59370]));

var G__59371 = (i__50799__auto___59370 + (1));
i__50799__auto___59370 = G__59371;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59368))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59368){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59368),args);
});})(g__50901__auto___59368))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__50901__auto___59368){
return (function (seq59322){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59322));
});})(g__50901__auto___59368))
;


var g__50901__auto___59372 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__50901__auto___59372){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59373 = arguments.length;
var i__50799__auto___59374 = (0);
while(true){
if((i__50799__auto___59374 < len__50798__auto___59373)){
args__50805__auto__.push((arguments[i__50799__auto___59374]));

var G__59375 = (i__50799__auto___59374 + (1));
i__50799__auto___59374 = G__59375;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59372))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59372){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59372),args);
});})(g__50901__auto___59372))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__50901__auto___59372){
return (function (seq59323){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59323));
});})(g__50901__auto___59372))
;


var g__50901__auto___59376 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__50901__auto___59376){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59377 = arguments.length;
var i__50799__auto___59378 = (0);
while(true){
if((i__50799__auto___59378 < len__50798__auto___59377)){
args__50805__auto__.push((arguments[i__50799__auto___59378]));

var G__59379 = (i__50799__auto___59378 + (1));
i__50799__auto___59378 = G__59379;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59376))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59376){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59376),args);
});})(g__50901__auto___59376))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__50901__auto___59376){
return (function (seq59324){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59324));
});})(g__50901__auto___59376))
;


var g__50901__auto___59380 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__50901__auto___59380){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59381 = arguments.length;
var i__50799__auto___59382 = (0);
while(true){
if((i__50799__auto___59382 < len__50798__auto___59381)){
args__50805__auto__.push((arguments[i__50799__auto___59382]));

var G__59383 = (i__50799__auto___59382 + (1));
i__50799__auto___59382 = G__59383;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59380))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59380){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59380),args);
});})(g__50901__auto___59380))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__50901__auto___59380){
return (function (seq59325){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59325));
});})(g__50901__auto___59380))
;


var g__50901__auto___59384 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__50901__auto___59384){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59385 = arguments.length;
var i__50799__auto___59386 = (0);
while(true){
if((i__50799__auto___59386 < len__50798__auto___59385)){
args__50805__auto__.push((arguments[i__50799__auto___59386]));

var G__59387 = (i__50799__auto___59386 + (1));
i__50799__auto___59386 = G__59387;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59384))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59384){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59384),args);
});})(g__50901__auto___59384))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__50901__auto___59384){
return (function (seq59326){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59326));
});})(g__50901__auto___59384))
;


var g__50901__auto___59388 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__50901__auto___59388){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59389 = arguments.length;
var i__50799__auto___59390 = (0);
while(true){
if((i__50799__auto___59390 < len__50798__auto___59389)){
args__50805__auto__.push((arguments[i__50799__auto___59390]));

var G__59391 = (i__50799__auto___59390 + (1));
i__50799__auto___59390 = G__59391;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59388))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59388){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59388),args);
});})(g__50901__auto___59388))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__50901__auto___59388){
return (function (seq59327){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59327));
});})(g__50901__auto___59388))
;


var g__50901__auto___59392 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__50901__auto___59392){
return (function cljs$spec$gen$alpha$return(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59393 = arguments.length;
var i__50799__auto___59394 = (0);
while(true){
if((i__50799__auto___59394 < len__50798__auto___59393)){
args__50805__auto__.push((arguments[i__50799__auto___59394]));

var G__59395 = (i__50799__auto___59394 + (1));
i__50799__auto___59394 = G__59395;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59392))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59392){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59392),args);
});})(g__50901__auto___59392))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__50901__auto___59392){
return (function (seq59328){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59328));
});})(g__50901__auto___59392))
;


var g__50901__auto___59396 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__50901__auto___59396){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59397 = arguments.length;
var i__50799__auto___59398 = (0);
while(true){
if((i__50799__auto___59398 < len__50798__auto___59397)){
args__50805__auto__.push((arguments[i__50799__auto___59398]));

var G__59399 = (i__50799__auto___59398 + (1));
i__50799__auto___59398 = G__59399;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59396))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59396){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59396),args);
});})(g__50901__auto___59396))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50901__auto___59396){
return (function (seq59329){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59329));
});})(g__50901__auto___59396))
;


var g__50901__auto___59400 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__50901__auto___59400){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59401 = arguments.length;
var i__50799__auto___59402 = (0);
while(true){
if((i__50799__auto___59402 < len__50798__auto___59401)){
args__50805__auto__.push((arguments[i__50799__auto___59402]));

var G__59403 = (i__50799__auto___59402 + (1));
i__50799__auto___59402 = G__59403;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59400))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59400),args);
});})(g__50901__auto___59400))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__50901__auto___59400){
return (function (seq59330){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59330));
});})(g__50901__auto___59400))
;


var g__50901__auto___59404 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__50901__auto___59404){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59405 = arguments.length;
var i__50799__auto___59406 = (0);
while(true){
if((i__50799__auto___59406 < len__50798__auto___59405)){
args__50805__auto__.push((arguments[i__50799__auto___59406]));

var G__59407 = (i__50799__auto___59406 + (1));
i__50799__auto___59406 = G__59407;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___59404))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___59404){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___59404),args);
});})(g__50901__auto___59404))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__50901__auto___59404){
return (function (seq59331){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59331));
});})(g__50901__auto___59404))
;

var g__50914__auto___59429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__50914__auto___59429){
return (function cljs$spec$gen$alpha$any(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59430 = arguments.length;
var i__50799__auto___59431 = (0);
while(true){
if((i__50799__auto___59431 < len__50798__auto___59430)){
args__50805__auto__.push((arguments[i__50799__auto___59431]));

var G__59432 = (i__50799__auto___59431 + (1));
i__50799__auto___59431 = G__59432;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59429))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59429){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59429);
});})(g__50914__auto___59429))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__50914__auto___59429){
return (function (seq59408){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59408));
});})(g__50914__auto___59429))
;


var g__50914__auto___59433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__50914__auto___59433){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59434 = arguments.length;
var i__50799__auto___59435 = (0);
while(true){
if((i__50799__auto___59435 < len__50798__auto___59434)){
args__50805__auto__.push((arguments[i__50799__auto___59435]));

var G__59436 = (i__50799__auto___59435 + (1));
i__50799__auto___59435 = G__59436;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59433))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59433){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59433);
});})(g__50914__auto___59433))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__50914__auto___59433){
return (function (seq59409){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59409));
});})(g__50914__auto___59433))
;


var g__50914__auto___59437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__50914__auto___59437){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59438 = arguments.length;
var i__50799__auto___59439 = (0);
while(true){
if((i__50799__auto___59439 < len__50798__auto___59438)){
args__50805__auto__.push((arguments[i__50799__auto___59439]));

var G__59440 = (i__50799__auto___59439 + (1));
i__50799__auto___59439 = G__59440;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59437))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59437){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59437);
});})(g__50914__auto___59437))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__50914__auto___59437){
return (function (seq59410){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59410));
});})(g__50914__auto___59437))
;


var g__50914__auto___59441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__50914__auto___59441){
return (function cljs$spec$gen$alpha$char(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59442 = arguments.length;
var i__50799__auto___59443 = (0);
while(true){
if((i__50799__auto___59443 < len__50798__auto___59442)){
args__50805__auto__.push((arguments[i__50799__auto___59443]));

var G__59444 = (i__50799__auto___59443 + (1));
i__50799__auto___59443 = G__59444;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59441))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59441){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59441);
});})(g__50914__auto___59441))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__50914__auto___59441){
return (function (seq59411){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59411));
});})(g__50914__auto___59441))
;


var g__50914__auto___59445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__50914__auto___59445){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59446 = arguments.length;
var i__50799__auto___59447 = (0);
while(true){
if((i__50799__auto___59447 < len__50798__auto___59446)){
args__50805__auto__.push((arguments[i__50799__auto___59447]));

var G__59448 = (i__50799__auto___59447 + (1));
i__50799__auto___59447 = G__59448;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59445))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59445){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59445);
});})(g__50914__auto___59445))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__50914__auto___59445){
return (function (seq59412){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59412));
});})(g__50914__auto___59445))
;


var g__50914__auto___59449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__50914__auto___59449){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59450 = arguments.length;
var i__50799__auto___59451 = (0);
while(true){
if((i__50799__auto___59451 < len__50798__auto___59450)){
args__50805__auto__.push((arguments[i__50799__auto___59451]));

var G__59452 = (i__50799__auto___59451 + (1));
i__50799__auto___59451 = G__59452;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59449))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59449){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59449);
});})(g__50914__auto___59449))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__50914__auto___59449){
return (function (seq59413){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59413));
});})(g__50914__auto___59449))
;


var g__50914__auto___59453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__50914__auto___59453){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59454 = arguments.length;
var i__50799__auto___59455 = (0);
while(true){
if((i__50799__auto___59455 < len__50798__auto___59454)){
args__50805__auto__.push((arguments[i__50799__auto___59455]));

var G__59456 = (i__50799__auto___59455 + (1));
i__50799__auto___59455 = G__59456;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59453))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59453){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59453);
});})(g__50914__auto___59453))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__50914__auto___59453){
return (function (seq59414){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59414));
});})(g__50914__auto___59453))
;


var g__50914__auto___59457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__50914__auto___59457){
return (function cljs$spec$gen$alpha$double(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59458 = arguments.length;
var i__50799__auto___59459 = (0);
while(true){
if((i__50799__auto___59459 < len__50798__auto___59458)){
args__50805__auto__.push((arguments[i__50799__auto___59459]));

var G__59460 = (i__50799__auto___59459 + (1));
i__50799__auto___59459 = G__59460;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59457))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59457){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59457);
});})(g__50914__auto___59457))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__50914__auto___59457){
return (function (seq59415){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59415));
});})(g__50914__auto___59457))
;


var g__50914__auto___59461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__50914__auto___59461){
return (function cljs$spec$gen$alpha$int(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59462 = arguments.length;
var i__50799__auto___59463 = (0);
while(true){
if((i__50799__auto___59463 < len__50798__auto___59462)){
args__50805__auto__.push((arguments[i__50799__auto___59463]));

var G__59464 = (i__50799__auto___59463 + (1));
i__50799__auto___59463 = G__59464;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59461))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59461){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59461);
});})(g__50914__auto___59461))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__50914__auto___59461){
return (function (seq59416){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59416));
});})(g__50914__auto___59461))
;


var g__50914__auto___59465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__50914__auto___59465){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59466 = arguments.length;
var i__50799__auto___59467 = (0);
while(true){
if((i__50799__auto___59467 < len__50798__auto___59466)){
args__50805__auto__.push((arguments[i__50799__auto___59467]));

var G__59468 = (i__50799__auto___59467 + (1));
i__50799__auto___59467 = G__59468;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59465))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59465){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59465);
});})(g__50914__auto___59465))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__50914__auto___59465){
return (function (seq59417){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59417));
});})(g__50914__auto___59465))
;


var g__50914__auto___59469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__50914__auto___59469){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59470 = arguments.length;
var i__50799__auto___59471 = (0);
while(true){
if((i__50799__auto___59471 < len__50798__auto___59470)){
args__50805__auto__.push((arguments[i__50799__auto___59471]));

var G__59472 = (i__50799__auto___59471 + (1));
i__50799__auto___59471 = G__59472;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59469))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59469){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59469);
});})(g__50914__auto___59469))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__50914__auto___59469){
return (function (seq59418){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59418));
});})(g__50914__auto___59469))
;


var g__50914__auto___59473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__50914__auto___59473){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59474 = arguments.length;
var i__50799__auto___59475 = (0);
while(true){
if((i__50799__auto___59475 < len__50798__auto___59474)){
args__50805__auto__.push((arguments[i__50799__auto___59475]));

var G__59476 = (i__50799__auto___59475 + (1));
i__50799__auto___59475 = G__59476;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59473))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59473){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59473);
});})(g__50914__auto___59473))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__50914__auto___59473){
return (function (seq59419){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59419));
});})(g__50914__auto___59473))
;


var g__50914__auto___59477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__50914__auto___59477){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59478 = arguments.length;
var i__50799__auto___59479 = (0);
while(true){
if((i__50799__auto___59479 < len__50798__auto___59478)){
args__50805__auto__.push((arguments[i__50799__auto___59479]));

var G__59480 = (i__50799__auto___59479 + (1));
i__50799__auto___59479 = G__59480;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59477))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59477){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59477);
});})(g__50914__auto___59477))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__50914__auto___59477){
return (function (seq59420){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59420));
});})(g__50914__auto___59477))
;


var g__50914__auto___59481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__50914__auto___59481){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59482 = arguments.length;
var i__50799__auto___59483 = (0);
while(true){
if((i__50799__auto___59483 < len__50798__auto___59482)){
args__50805__auto__.push((arguments[i__50799__auto___59483]));

var G__59484 = (i__50799__auto___59483 + (1));
i__50799__auto___59483 = G__59484;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59481))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59481){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59481);
});})(g__50914__auto___59481))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__50914__auto___59481){
return (function (seq59421){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59421));
});})(g__50914__auto___59481))
;


var g__50914__auto___59485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__50914__auto___59485){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59486 = arguments.length;
var i__50799__auto___59487 = (0);
while(true){
if((i__50799__auto___59487 < len__50798__auto___59486)){
args__50805__auto__.push((arguments[i__50799__auto___59487]));

var G__59488 = (i__50799__auto___59487 + (1));
i__50799__auto___59487 = G__59488;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59485))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59485){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59485);
});})(g__50914__auto___59485))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__50914__auto___59485){
return (function (seq59422){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59422));
});})(g__50914__auto___59485))
;


var g__50914__auto___59489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__50914__auto___59489){
return (function cljs$spec$gen$alpha$string(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59490 = arguments.length;
var i__50799__auto___59491 = (0);
while(true){
if((i__50799__auto___59491 < len__50798__auto___59490)){
args__50805__auto__.push((arguments[i__50799__auto___59491]));

var G__59492 = (i__50799__auto___59491 + (1));
i__50799__auto___59491 = G__59492;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59489))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59489){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59489);
});})(g__50914__auto___59489))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__50914__auto___59489){
return (function (seq59423){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59423));
});})(g__50914__auto___59489))
;


var g__50914__auto___59493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__50914__auto___59493){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59494 = arguments.length;
var i__50799__auto___59495 = (0);
while(true){
if((i__50799__auto___59495 < len__50798__auto___59494)){
args__50805__auto__.push((arguments[i__50799__auto___59495]));

var G__59496 = (i__50799__auto___59495 + (1));
i__50799__auto___59495 = G__59496;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59493))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59493){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59493);
});})(g__50914__auto___59493))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__50914__auto___59493){
return (function (seq59424){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59424));
});})(g__50914__auto___59493))
;


var g__50914__auto___59497 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__50914__auto___59497){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59498 = arguments.length;
var i__50799__auto___59499 = (0);
while(true){
if((i__50799__auto___59499 < len__50798__auto___59498)){
args__50805__auto__.push((arguments[i__50799__auto___59499]));

var G__59500 = (i__50799__auto___59499 + (1));
i__50799__auto___59499 = G__59500;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59497))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59497){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59497);
});})(g__50914__auto___59497))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__50914__auto___59497){
return (function (seq59425){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59425));
});})(g__50914__auto___59497))
;


var g__50914__auto___59501 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__50914__auto___59501){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59502 = arguments.length;
var i__50799__auto___59503 = (0);
while(true){
if((i__50799__auto___59503 < len__50798__auto___59502)){
args__50805__auto__.push((arguments[i__50799__auto___59503]));

var G__59504 = (i__50799__auto___59503 + (1));
i__50799__auto___59503 = G__59504;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59501))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59501){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59501);
});})(g__50914__auto___59501))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__50914__auto___59501){
return (function (seq59426){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59426));
});})(g__50914__auto___59501))
;


var g__50914__auto___59505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__50914__auto___59505){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59506 = arguments.length;
var i__50799__auto___59507 = (0);
while(true){
if((i__50799__auto___59507 < len__50798__auto___59506)){
args__50805__auto__.push((arguments[i__50799__auto___59507]));

var G__59508 = (i__50799__auto___59507 + (1));
i__50799__auto___59507 = G__59508;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59505))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59505){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59505);
});})(g__50914__auto___59505))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__50914__auto___59505){
return (function (seq59427){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59427));
});})(g__50914__auto___59505))
;


var g__50914__auto___59509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__50914__auto___59509){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59510 = arguments.length;
var i__50799__auto___59511 = (0);
while(true){
if((i__50799__auto___59511 < len__50798__auto___59510)){
args__50805__auto__.push((arguments[i__50799__auto___59511]));

var G__59512 = (i__50799__auto___59511 + (1));
i__50799__auto___59511 = G__59512;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___59509))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___59509){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___59509);
});})(g__50914__auto___59509))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__50914__auto___59509){
return (function (seq59428){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59428));
});})(g__50914__auto___59509))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__50805__auto__ = [];
var len__50798__auto___59515 = arguments.length;
var i__50799__auto___59516 = (0);
while(true){
if((i__50799__auto___59516 < len__50798__auto___59515)){
args__50805__auto__.push((arguments[i__50799__auto___59516]));

var G__59517 = (i__50799__auto___59516 + (1));
i__50799__auto___59516 = G__59517;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__59513_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__59513_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq59514){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59514));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__59518_SHARP_){
return (new Date(p1__59518_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1509280897298
