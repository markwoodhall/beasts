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
var len__50798__auto___150981 = arguments.length;
var i__50799__auto___150982 = (0);
while(true){
if((i__50799__auto___150982 < len__50798__auto___150981)){
args__50805__auto__.push((arguments[i__50799__auto___150982]));

var G__150983 = (i__50799__auto___150982 + (1));
i__50799__auto___150982 = G__150983;
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

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq150980){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150980));
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
var len__50798__auto___150985 = arguments.length;
var i__50799__auto___150986 = (0);
while(true){
if((i__50799__auto___150986 < len__50798__auto___150985)){
args__50805__auto__.push((arguments[i__50799__auto___150986]));

var G__150987 = (i__50799__auto___150986 + (1));
i__50799__auto___150986 = G__150987;
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

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq150984){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150984));
});

var g_QMARK__150988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_150989 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__150988){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__150988))
,null));
var mkg_150990 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__150988,g_150989){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__150988,g_150989))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__150988,g_150989,mkg_150990){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__150988).call(null,x);
});})(g_QMARK__150988,g_150989,mkg_150990))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__150988,g_150989,mkg_150990){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_150990).call(null,gfn);
});})(g_QMARK__150988,g_150989,mkg_150990))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__150988,g_150989,mkg_150990){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_150989).call(null,generator);
});})(g_QMARK__150988,g_150989,mkg_150990))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50901__auto___151010 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__50901__auto___151010){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151011 = arguments.length;
var i__50799__auto___151012 = (0);
while(true){
if((i__50799__auto___151012 < len__50798__auto___151011)){
args__50805__auto__.push((arguments[i__50799__auto___151012]));

var G__151013 = (i__50799__auto___151012 + (1));
i__50799__auto___151012 = G__151013;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151010))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151010){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151010),args);
});})(g__50901__auto___151010))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__50901__auto___151010){
return (function (seq150991){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150991));
});})(g__50901__auto___151010))
;


var g__50901__auto___151014 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__50901__auto___151014){
return (function cljs$spec$gen$alpha$list(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151015 = arguments.length;
var i__50799__auto___151016 = (0);
while(true){
if((i__50799__auto___151016 < len__50798__auto___151015)){
args__50805__auto__.push((arguments[i__50799__auto___151016]));

var G__151017 = (i__50799__auto___151016 + (1));
i__50799__auto___151016 = G__151017;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151014))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151014){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151014),args);
});})(g__50901__auto___151014))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__50901__auto___151014){
return (function (seq150992){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150992));
});})(g__50901__auto___151014))
;


var g__50901__auto___151018 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__50901__auto___151018){
return (function cljs$spec$gen$alpha$map(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151019 = arguments.length;
var i__50799__auto___151020 = (0);
while(true){
if((i__50799__auto___151020 < len__50798__auto___151019)){
args__50805__auto__.push((arguments[i__50799__auto___151020]));

var G__151021 = (i__50799__auto___151020 + (1));
i__50799__auto___151020 = G__151021;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151018))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151018){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151018),args);
});})(g__50901__auto___151018))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__50901__auto___151018){
return (function (seq150993){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150993));
});})(g__50901__auto___151018))
;


var g__50901__auto___151022 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__50901__auto___151022){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151023 = arguments.length;
var i__50799__auto___151024 = (0);
while(true){
if((i__50799__auto___151024 < len__50798__auto___151023)){
args__50805__auto__.push((arguments[i__50799__auto___151024]));

var G__151025 = (i__50799__auto___151024 + (1));
i__50799__auto___151024 = G__151025;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151022))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151022){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151022),args);
});})(g__50901__auto___151022))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__50901__auto___151022){
return (function (seq150994){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150994));
});})(g__50901__auto___151022))
;


var g__50901__auto___151026 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__50901__auto___151026){
return (function cljs$spec$gen$alpha$set(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151027 = arguments.length;
var i__50799__auto___151028 = (0);
while(true){
if((i__50799__auto___151028 < len__50798__auto___151027)){
args__50805__auto__.push((arguments[i__50799__auto___151028]));

var G__151029 = (i__50799__auto___151028 + (1));
i__50799__auto___151028 = G__151029;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151026))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151026){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151026),args);
});})(g__50901__auto___151026))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__50901__auto___151026){
return (function (seq150995){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150995));
});})(g__50901__auto___151026))
;


var g__50901__auto___151030 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__50901__auto___151030){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151031 = arguments.length;
var i__50799__auto___151032 = (0);
while(true){
if((i__50799__auto___151032 < len__50798__auto___151031)){
args__50805__auto__.push((arguments[i__50799__auto___151032]));

var G__151033 = (i__50799__auto___151032 + (1));
i__50799__auto___151032 = G__151033;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151030))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151030){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151030),args);
});})(g__50901__auto___151030))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__50901__auto___151030){
return (function (seq150996){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150996));
});})(g__50901__auto___151030))
;


var g__50901__auto___151034 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__50901__auto___151034){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151035 = arguments.length;
var i__50799__auto___151036 = (0);
while(true){
if((i__50799__auto___151036 < len__50798__auto___151035)){
args__50805__auto__.push((arguments[i__50799__auto___151036]));

var G__151037 = (i__50799__auto___151036 + (1));
i__50799__auto___151036 = G__151037;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151034))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151034){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151034),args);
});})(g__50901__auto___151034))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__50901__auto___151034){
return (function (seq150997){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150997));
});})(g__50901__auto___151034))
;


var g__50901__auto___151038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__50901__auto___151038){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151039 = arguments.length;
var i__50799__auto___151040 = (0);
while(true){
if((i__50799__auto___151040 < len__50798__auto___151039)){
args__50805__auto__.push((arguments[i__50799__auto___151040]));

var G__151041 = (i__50799__auto___151040 + (1));
i__50799__auto___151040 = G__151041;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151038))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151038){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151038),args);
});})(g__50901__auto___151038))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__50901__auto___151038){
return (function (seq150998){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150998));
});})(g__50901__auto___151038))
;


var g__50901__auto___151042 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__50901__auto___151042){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151043 = arguments.length;
var i__50799__auto___151044 = (0);
while(true){
if((i__50799__auto___151044 < len__50798__auto___151043)){
args__50805__auto__.push((arguments[i__50799__auto___151044]));

var G__151045 = (i__50799__auto___151044 + (1));
i__50799__auto___151044 = G__151045;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151042))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151042){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151042),args);
});})(g__50901__auto___151042))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__50901__auto___151042){
return (function (seq150999){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150999));
});})(g__50901__auto___151042))
;


var g__50901__auto___151046 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__50901__auto___151046){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151047 = arguments.length;
var i__50799__auto___151048 = (0);
while(true){
if((i__50799__auto___151048 < len__50798__auto___151047)){
args__50805__auto__.push((arguments[i__50799__auto___151048]));

var G__151049 = (i__50799__auto___151048 + (1));
i__50799__auto___151048 = G__151049;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151046))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151046){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151046),args);
});})(g__50901__auto___151046))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__50901__auto___151046){
return (function (seq151000){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151000));
});})(g__50901__auto___151046))
;


var g__50901__auto___151050 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__50901__auto___151050){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151051 = arguments.length;
var i__50799__auto___151052 = (0);
while(true){
if((i__50799__auto___151052 < len__50798__auto___151051)){
args__50805__auto__.push((arguments[i__50799__auto___151052]));

var G__151053 = (i__50799__auto___151052 + (1));
i__50799__auto___151052 = G__151053;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151050))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151050){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151050),args);
});})(g__50901__auto___151050))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__50901__auto___151050){
return (function (seq151001){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151001));
});})(g__50901__auto___151050))
;


var g__50901__auto___151054 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__50901__auto___151054){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151055 = arguments.length;
var i__50799__auto___151056 = (0);
while(true){
if((i__50799__auto___151056 < len__50798__auto___151055)){
args__50805__auto__.push((arguments[i__50799__auto___151056]));

var G__151057 = (i__50799__auto___151056 + (1));
i__50799__auto___151056 = G__151057;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151054))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151054){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151054),args);
});})(g__50901__auto___151054))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__50901__auto___151054){
return (function (seq151002){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151002));
});})(g__50901__auto___151054))
;


var g__50901__auto___151058 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__50901__auto___151058){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151059 = arguments.length;
var i__50799__auto___151060 = (0);
while(true){
if((i__50799__auto___151060 < len__50798__auto___151059)){
args__50805__auto__.push((arguments[i__50799__auto___151060]));

var G__151061 = (i__50799__auto___151060 + (1));
i__50799__auto___151060 = G__151061;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151058))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151058){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151058),args);
});})(g__50901__auto___151058))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__50901__auto___151058){
return (function (seq151003){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151003));
});})(g__50901__auto___151058))
;


var g__50901__auto___151062 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__50901__auto___151062){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151063 = arguments.length;
var i__50799__auto___151064 = (0);
while(true){
if((i__50799__auto___151064 < len__50798__auto___151063)){
args__50805__auto__.push((arguments[i__50799__auto___151064]));

var G__151065 = (i__50799__auto___151064 + (1));
i__50799__auto___151064 = G__151065;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151062))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151062){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151062),args);
});})(g__50901__auto___151062))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__50901__auto___151062){
return (function (seq151004){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151004));
});})(g__50901__auto___151062))
;


var g__50901__auto___151066 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__50901__auto___151066){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151067 = arguments.length;
var i__50799__auto___151068 = (0);
while(true){
if((i__50799__auto___151068 < len__50798__auto___151067)){
args__50805__auto__.push((arguments[i__50799__auto___151068]));

var G__151069 = (i__50799__auto___151068 + (1));
i__50799__auto___151068 = G__151069;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151066))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151066){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151066),args);
});})(g__50901__auto___151066))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__50901__auto___151066){
return (function (seq151005){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151005));
});})(g__50901__auto___151066))
;


var g__50901__auto___151070 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__50901__auto___151070){
return (function cljs$spec$gen$alpha$return(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151071 = arguments.length;
var i__50799__auto___151072 = (0);
while(true){
if((i__50799__auto___151072 < len__50798__auto___151071)){
args__50805__auto__.push((arguments[i__50799__auto___151072]));

var G__151073 = (i__50799__auto___151072 + (1));
i__50799__auto___151072 = G__151073;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151070))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151070){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151070),args);
});})(g__50901__auto___151070))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__50901__auto___151070){
return (function (seq151006){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151006));
});})(g__50901__auto___151070))
;


var g__50901__auto___151074 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__50901__auto___151074){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151075 = arguments.length;
var i__50799__auto___151076 = (0);
while(true){
if((i__50799__auto___151076 < len__50798__auto___151075)){
args__50805__auto__.push((arguments[i__50799__auto___151076]));

var G__151077 = (i__50799__auto___151076 + (1));
i__50799__auto___151076 = G__151077;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151074))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151074){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151074),args);
});})(g__50901__auto___151074))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50901__auto___151074){
return (function (seq151007){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151007));
});})(g__50901__auto___151074))
;


var g__50901__auto___151078 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__50901__auto___151078){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151079 = arguments.length;
var i__50799__auto___151080 = (0);
while(true){
if((i__50799__auto___151080 < len__50798__auto___151079)){
args__50805__auto__.push((arguments[i__50799__auto___151080]));

var G__151081 = (i__50799__auto___151080 + (1));
i__50799__auto___151080 = G__151081;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151078))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151078){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151078),args);
});})(g__50901__auto___151078))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__50901__auto___151078){
return (function (seq151008){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151008));
});})(g__50901__auto___151078))
;


var g__50901__auto___151082 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__50901__auto___151082){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151083 = arguments.length;
var i__50799__auto___151084 = (0);
while(true){
if((i__50799__auto___151084 < len__50798__auto___151083)){
args__50805__auto__.push((arguments[i__50799__auto___151084]));

var G__151085 = (i__50799__auto___151084 + (1));
i__50799__auto___151084 = G__151085;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50901__auto___151082))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50901__auto___151082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50901__auto___151082),args);
});})(g__50901__auto___151082))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__50901__auto___151082){
return (function (seq151009){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151009));
});})(g__50901__auto___151082))
;

var g__50914__auto___151107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__50914__auto___151107){
return (function cljs$spec$gen$alpha$any(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151108 = arguments.length;
var i__50799__auto___151109 = (0);
while(true){
if((i__50799__auto___151109 < len__50798__auto___151108)){
args__50805__auto__.push((arguments[i__50799__auto___151109]));

var G__151110 = (i__50799__auto___151109 + (1));
i__50799__auto___151109 = G__151110;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151107))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151107){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151107);
});})(g__50914__auto___151107))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__50914__auto___151107){
return (function (seq151086){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151086));
});})(g__50914__auto___151107))
;


var g__50914__auto___151111 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__50914__auto___151111){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151112 = arguments.length;
var i__50799__auto___151113 = (0);
while(true){
if((i__50799__auto___151113 < len__50798__auto___151112)){
args__50805__auto__.push((arguments[i__50799__auto___151113]));

var G__151114 = (i__50799__auto___151113 + (1));
i__50799__auto___151113 = G__151114;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151111))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151111){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151111);
});})(g__50914__auto___151111))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__50914__auto___151111){
return (function (seq151087){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151087));
});})(g__50914__auto___151111))
;


var g__50914__auto___151115 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__50914__auto___151115){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151116 = arguments.length;
var i__50799__auto___151117 = (0);
while(true){
if((i__50799__auto___151117 < len__50798__auto___151116)){
args__50805__auto__.push((arguments[i__50799__auto___151117]));

var G__151118 = (i__50799__auto___151117 + (1));
i__50799__auto___151117 = G__151118;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151115))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151115){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151115);
});})(g__50914__auto___151115))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__50914__auto___151115){
return (function (seq151088){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151088));
});})(g__50914__auto___151115))
;


var g__50914__auto___151119 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__50914__auto___151119){
return (function cljs$spec$gen$alpha$char(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151120 = arguments.length;
var i__50799__auto___151121 = (0);
while(true){
if((i__50799__auto___151121 < len__50798__auto___151120)){
args__50805__auto__.push((arguments[i__50799__auto___151121]));

var G__151122 = (i__50799__auto___151121 + (1));
i__50799__auto___151121 = G__151122;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151119))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151119){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151119);
});})(g__50914__auto___151119))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__50914__auto___151119){
return (function (seq151089){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151089));
});})(g__50914__auto___151119))
;


var g__50914__auto___151123 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__50914__auto___151123){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151124 = arguments.length;
var i__50799__auto___151125 = (0);
while(true){
if((i__50799__auto___151125 < len__50798__auto___151124)){
args__50805__auto__.push((arguments[i__50799__auto___151125]));

var G__151126 = (i__50799__auto___151125 + (1));
i__50799__auto___151125 = G__151126;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151123))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151123){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151123);
});})(g__50914__auto___151123))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__50914__auto___151123){
return (function (seq151090){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151090));
});})(g__50914__auto___151123))
;


var g__50914__auto___151127 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__50914__auto___151127){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151128 = arguments.length;
var i__50799__auto___151129 = (0);
while(true){
if((i__50799__auto___151129 < len__50798__auto___151128)){
args__50805__auto__.push((arguments[i__50799__auto___151129]));

var G__151130 = (i__50799__auto___151129 + (1));
i__50799__auto___151129 = G__151130;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151127))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151127){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151127);
});})(g__50914__auto___151127))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__50914__auto___151127){
return (function (seq151091){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151091));
});})(g__50914__auto___151127))
;


var g__50914__auto___151131 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__50914__auto___151131){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151132 = arguments.length;
var i__50799__auto___151133 = (0);
while(true){
if((i__50799__auto___151133 < len__50798__auto___151132)){
args__50805__auto__.push((arguments[i__50799__auto___151133]));

var G__151134 = (i__50799__auto___151133 + (1));
i__50799__auto___151133 = G__151134;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151131))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151131){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151131);
});})(g__50914__auto___151131))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__50914__auto___151131){
return (function (seq151092){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151092));
});})(g__50914__auto___151131))
;


var g__50914__auto___151135 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__50914__auto___151135){
return (function cljs$spec$gen$alpha$double(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151136 = arguments.length;
var i__50799__auto___151137 = (0);
while(true){
if((i__50799__auto___151137 < len__50798__auto___151136)){
args__50805__auto__.push((arguments[i__50799__auto___151137]));

var G__151138 = (i__50799__auto___151137 + (1));
i__50799__auto___151137 = G__151138;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151135))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151135){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151135);
});})(g__50914__auto___151135))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__50914__auto___151135){
return (function (seq151093){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151093));
});})(g__50914__auto___151135))
;


var g__50914__auto___151139 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__50914__auto___151139){
return (function cljs$spec$gen$alpha$int(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151140 = arguments.length;
var i__50799__auto___151141 = (0);
while(true){
if((i__50799__auto___151141 < len__50798__auto___151140)){
args__50805__auto__.push((arguments[i__50799__auto___151141]));

var G__151142 = (i__50799__auto___151141 + (1));
i__50799__auto___151141 = G__151142;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151139))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151139){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151139);
});})(g__50914__auto___151139))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__50914__auto___151139){
return (function (seq151094){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151094));
});})(g__50914__auto___151139))
;


var g__50914__auto___151143 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__50914__auto___151143){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151144 = arguments.length;
var i__50799__auto___151145 = (0);
while(true){
if((i__50799__auto___151145 < len__50798__auto___151144)){
args__50805__auto__.push((arguments[i__50799__auto___151145]));

var G__151146 = (i__50799__auto___151145 + (1));
i__50799__auto___151145 = G__151146;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151143))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151143){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151143);
});})(g__50914__auto___151143))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__50914__auto___151143){
return (function (seq151095){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151095));
});})(g__50914__auto___151143))
;


var g__50914__auto___151147 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__50914__auto___151147){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151148 = arguments.length;
var i__50799__auto___151149 = (0);
while(true){
if((i__50799__auto___151149 < len__50798__auto___151148)){
args__50805__auto__.push((arguments[i__50799__auto___151149]));

var G__151150 = (i__50799__auto___151149 + (1));
i__50799__auto___151149 = G__151150;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151147))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151147){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151147);
});})(g__50914__auto___151147))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__50914__auto___151147){
return (function (seq151096){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151096));
});})(g__50914__auto___151147))
;


var g__50914__auto___151151 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__50914__auto___151151){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151152 = arguments.length;
var i__50799__auto___151153 = (0);
while(true){
if((i__50799__auto___151153 < len__50798__auto___151152)){
args__50805__auto__.push((arguments[i__50799__auto___151153]));

var G__151154 = (i__50799__auto___151153 + (1));
i__50799__auto___151153 = G__151154;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151151))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151151){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151151);
});})(g__50914__auto___151151))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__50914__auto___151151){
return (function (seq151097){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151097));
});})(g__50914__auto___151151))
;


var g__50914__auto___151155 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__50914__auto___151155){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151156 = arguments.length;
var i__50799__auto___151157 = (0);
while(true){
if((i__50799__auto___151157 < len__50798__auto___151156)){
args__50805__auto__.push((arguments[i__50799__auto___151157]));

var G__151158 = (i__50799__auto___151157 + (1));
i__50799__auto___151157 = G__151158;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151155))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151155){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151155);
});})(g__50914__auto___151155))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__50914__auto___151155){
return (function (seq151098){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151098));
});})(g__50914__auto___151155))
;


var g__50914__auto___151159 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__50914__auto___151159){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151160 = arguments.length;
var i__50799__auto___151161 = (0);
while(true){
if((i__50799__auto___151161 < len__50798__auto___151160)){
args__50805__auto__.push((arguments[i__50799__auto___151161]));

var G__151162 = (i__50799__auto___151161 + (1));
i__50799__auto___151161 = G__151162;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151159))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151159){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151159);
});})(g__50914__auto___151159))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__50914__auto___151159){
return (function (seq151099){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151099));
});})(g__50914__auto___151159))
;


var g__50914__auto___151163 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__50914__auto___151163){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151164 = arguments.length;
var i__50799__auto___151165 = (0);
while(true){
if((i__50799__auto___151165 < len__50798__auto___151164)){
args__50805__auto__.push((arguments[i__50799__auto___151165]));

var G__151166 = (i__50799__auto___151165 + (1));
i__50799__auto___151165 = G__151166;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151163))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151163){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151163);
});})(g__50914__auto___151163))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__50914__auto___151163){
return (function (seq151100){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151100));
});})(g__50914__auto___151163))
;


var g__50914__auto___151167 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__50914__auto___151167){
return (function cljs$spec$gen$alpha$string(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151168 = arguments.length;
var i__50799__auto___151169 = (0);
while(true){
if((i__50799__auto___151169 < len__50798__auto___151168)){
args__50805__auto__.push((arguments[i__50799__auto___151169]));

var G__151170 = (i__50799__auto___151169 + (1));
i__50799__auto___151169 = G__151170;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151167))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151167){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151167);
});})(g__50914__auto___151167))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__50914__auto___151167){
return (function (seq151101){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151101));
});})(g__50914__auto___151167))
;


var g__50914__auto___151171 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__50914__auto___151171){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151172 = arguments.length;
var i__50799__auto___151173 = (0);
while(true){
if((i__50799__auto___151173 < len__50798__auto___151172)){
args__50805__auto__.push((arguments[i__50799__auto___151173]));

var G__151174 = (i__50799__auto___151173 + (1));
i__50799__auto___151173 = G__151174;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151171))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151171){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151171);
});})(g__50914__auto___151171))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__50914__auto___151171){
return (function (seq151102){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151102));
});})(g__50914__auto___151171))
;


var g__50914__auto___151175 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__50914__auto___151175){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151176 = arguments.length;
var i__50799__auto___151177 = (0);
while(true){
if((i__50799__auto___151177 < len__50798__auto___151176)){
args__50805__auto__.push((arguments[i__50799__auto___151177]));

var G__151178 = (i__50799__auto___151177 + (1));
i__50799__auto___151177 = G__151178;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151175))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151175){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151175);
});})(g__50914__auto___151175))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__50914__auto___151175){
return (function (seq151103){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151103));
});})(g__50914__auto___151175))
;


var g__50914__auto___151179 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__50914__auto___151179){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151180 = arguments.length;
var i__50799__auto___151181 = (0);
while(true){
if((i__50799__auto___151181 < len__50798__auto___151180)){
args__50805__auto__.push((arguments[i__50799__auto___151181]));

var G__151182 = (i__50799__auto___151181 + (1));
i__50799__auto___151181 = G__151182;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151179))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151179){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151179);
});})(g__50914__auto___151179))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__50914__auto___151179){
return (function (seq151104){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151104));
});})(g__50914__auto___151179))
;


var g__50914__auto___151183 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__50914__auto___151183){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151184 = arguments.length;
var i__50799__auto___151185 = (0);
while(true){
if((i__50799__auto___151185 < len__50798__auto___151184)){
args__50805__auto__.push((arguments[i__50799__auto___151185]));

var G__151186 = (i__50799__auto___151185 + (1));
i__50799__auto___151185 = G__151186;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151183))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151183){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151183);
});})(g__50914__auto___151183))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__50914__auto___151183){
return (function (seq151105){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151105));
});})(g__50914__auto___151183))
;


var g__50914__auto___151187 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__50914__auto___151187){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151188 = arguments.length;
var i__50799__auto___151189 = (0);
while(true){
if((i__50799__auto___151189 < len__50798__auto___151188)){
args__50805__auto__.push((arguments[i__50799__auto___151189]));

var G__151190 = (i__50799__auto___151189 + (1));
i__50799__auto___151189 = G__151190;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});})(g__50914__auto___151187))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50914__auto___151187){
return (function (args){
return cljs.core.deref.call(null,g__50914__auto___151187);
});})(g__50914__auto___151187))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__50914__auto___151187){
return (function (seq151106){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151106));
});})(g__50914__auto___151187))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__50805__auto__ = [];
var len__50798__auto___151193 = arguments.length;
var i__50799__auto___151194 = (0);
while(true){
if((i__50799__auto___151194 < len__50798__auto___151193)){
args__50805__auto__.push((arguments[i__50799__auto___151194]));

var G__151195 = (i__50799__auto___151194 + (1));
i__50799__auto___151194 = G__151195;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__151191_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__151191_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq151192){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151192));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__151196_SHARP_){
return (new Date(p1__151196_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1509265455878
