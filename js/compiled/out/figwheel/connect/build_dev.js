// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('beasts.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__3270280__delegate = function (x){
if(cljs.core.truth_(beasts.core.on_js_reload)){
return cljs.core.apply.call(null,beasts.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'beasts.core/on-js-reload' is missing");
}
};
var G__3270280 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__3270302__i = 0, G__3270302__a = new Array(arguments.length -  0);
while (G__3270302__i < G__3270302__a.length) {G__3270302__a[G__3270302__i] = arguments[G__3270302__i + 0]; ++G__3270302__i;}
  x = new cljs.core.IndexedSeq(G__3270302__a,0,null);
} 
return G__3270280__delegate.call(this,x);};
G__3270280.cljs$lang$maxFixedArity = 0;
G__3270280.cljs$lang$applyTo = (function (arglist__3270315){
var x = cljs.core.seq(arglist__3270315);
return G__3270280__delegate(x);
});
G__3270280.cljs$core$IFn$_invoke$arity$variadic = G__3270280__delegate;
return G__3270280;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1509468992903
