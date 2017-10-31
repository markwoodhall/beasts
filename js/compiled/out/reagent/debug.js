// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__53401__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__53401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53402__i = 0, G__53402__a = new Array(arguments.length -  0);
while (G__53402__i < G__53402__a.length) {G__53402__a[G__53402__i] = arguments[G__53402__i + 0]; ++G__53402__i;}
  args = new cljs.core.IndexedSeq(G__53402__a,0,null);
} 
return G__53401__delegate.call(this,args);};
G__53401.cljs$lang$maxFixedArity = 0;
G__53401.cljs$lang$applyTo = (function (arglist__53403){
var args = cljs.core.seq(arglist__53403);
return G__53401__delegate(args);
});
G__53401.cljs$core$IFn$_invoke$arity$variadic = G__53401__delegate;
return G__53401;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__53404__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__53404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53405__i = 0, G__53405__a = new Array(arguments.length -  0);
while (G__53405__i < G__53405__a.length) {G__53405__a[G__53405__i] = arguments[G__53405__i + 0]; ++G__53405__i;}
  args = new cljs.core.IndexedSeq(G__53405__a,0,null);
} 
return G__53404__delegate.call(this,args);};
G__53404.cljs$lang$maxFixedArity = 0;
G__53404.cljs$lang$applyTo = (function (arglist__53406){
var args = cljs.core.seq(arglist__53406);
return G__53404__delegate(args);
});
G__53404.cljs$core$IFn$_invoke$arity$variadic = G__53404__delegate;
return G__53404;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1509280892567
